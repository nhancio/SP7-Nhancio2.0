#!/usr/bin/env python3
"""Generate Nhancio's signed shareholding pattern certificate."""

from __future__ import annotations

import argparse
from datetime import date, datetime
from pathlib import Path

from docx import Document
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt

from generate_offer_letter import (
    BASE_DIR,
    CONTENT_WIDTH_DXA,
    DARK_PURPLE,
    INK,
    MUTED,
    WHITE,
    add_picture_alt,
    configure_page_and_furniture,
    configure_styles,
    load_json,
    set_cell_border,
    set_cell_margins,
    set_cell_shading,
    set_run_font,
    set_table_geometry,
)


def display_date(value: str) -> str:
    return datetime.strptime(value, "%Y-%m-%d").strftime("%-d %B %Y")


def paragraph(document: Document, text: str = "", *, size: float = 10.5,
              bold: bool = False, color=INK, before: float = 0, after: float = 8,
              align=None):
    p = document.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = 1.05
    if text:
        set_run_font(p.add_run(text), size=size, color=color, bold=bold)
    return p


def build_document(profile: dict, document_date: str) -> Document:
    document = Document()
    configure_styles(document)
    configure_page_and_furniture(document, profile, document_label="Shareholding Pattern Certificate")

    paragraph(document, "SHAREHOLDING PATTERN CERTIFICATE", size=16, bold=True,
              color=DARK_PURPLE, before=14, after=5, align=WD_ALIGN_PARAGRAPH.CENTER)
    paragraph(document, "TO WHOMSOEVER IT MAY CONCERN", size=11.5, bold=True,
              before=0, after=14, align=WD_ALIGN_PARAGRAPH.CENTER)

    paragraph(document, "This is to certify that the following is the shareholding pattern of NHANCIO TECHNOLOGIES PRIVATE LIMITED as on the date stated below:", after=12)

    table = document.add_table(rows=1, cols=5)
    set_table_geometry(table, [650, 3200, 2100, 1900, CONTENT_WIDTH_DXA - 7850])
    table.style = "Table Grid"
    headers = ("S. No.", "Shareholder", "Designation", "Shares Held", "Holding")
    for cell, text in zip(table.rows[0].cells, headers, strict=True):
        cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
        set_cell_shading(cell, "5B2DCB")
        set_cell_margins(cell)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(3)
        p.paragraph_format.space_after = Pt(3)
        set_run_font(p.add_run(text), size=9.5, color=WHITE, bold=True)
        set_cell_border(cell, top={"val": "single", "sz": 8, "color": "D9D9D9"}, bottom={"val": "single", "sz": 8, "color": "D9D9D9"}, start={"val": "single", "sz": 8, "color": "D9D9D9"}, end={"val": "single", "sz": 8, "color": "D9D9D9"})

    rows = [
        ("1", "Didigam Sathyanarayana", "Director", "5,000", "50%"),
        ("2", "Didigam Uma", "Director", "5,000", "50%"),
        ("", "Total", "", "10,000", "100%"),
    ]
    for row_index, values in enumerate(rows, start=1):
        row = table.add_row()
        for idx, (cell, text) in enumerate(zip(row.cells, values, strict=True)):
            cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            set_cell_margins(cell)
            if row_index % 2 == 0:
                set_cell_shading(cell, "FBFAFE")
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(4)
            p.paragraph_format.space_after = Pt(4)
            if idx in (0, 3, 4):
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            set_run_font(p.add_run(text), size=10, color=INK, bold=(row_index == 3 or idx == 1))
            set_cell_border(cell, top={"val": "single", "sz": 8, "color": "D9D9D9"}, bottom={"val": "single", "sz": 8, "color": "D9D9D9"}, start={"val": "single", "sz": 8, "color": "D9D9D9"}, end={"val": "single", "sz": 8, "color": "D9D9D9"})

    paragraph(document, "Company details", size=11, bold=True, color=DARK_PURPLE, before=16, after=6)
    for label, value in (
        ("CIN", "U62099TS2024PTC189848"),
        ("Company PAN", "AAJCN9064B"),
        ("Date of incorporation", "1 October 2024"),
        ("Authorized capital", "₹9,00,000"),
        ("Paid-up capital", "₹1,00,000"),
        ("Registered office", "T #36-88/4, DEVAMMABASTHI, JAGADGIRIGUTTA, BALANAGAR TOWNSHIP, HYDERABAD, RANGAREDDY, TELANGANA, INDIA, 500037"),
    ):
        p = document.add_paragraph()
        p.paragraph_format.space_after = Pt(3)
        set_run_font(p.add_run(f"{label}: "), size=9.5, color=INK, bold=True)
        set_run_font(p.add_run(value), size=9.5, color=INK)

    paragraph(document, "We confirm that the above information is true and correct as per the statutory records and shareholding records of the Company. This certificate is issued for merchant onboarding and KYC verification with BillDesk in connection with Google Play payment services.", before=12, after=14)
    paragraph(document, f"Date: {display_date(document_date)}", size=9.5, color=MUTED, after=8)
    paragraph(document, "For NHANCIO TECHNOLOGIES PRIVATE LIMITED", size=10.5, bold=True, color=DARK_PURPLE, after=2)
    paragraph(document, "Authorized Signatory", size=10, bold=True, after=2)

    signatory = profile["signatory"]
    signature = document.add_paragraph()
    signature.paragraph_format.space_before = Pt(16)
    signature.paragraph_format.space_after = Pt(3)
    shape = signature.add_run().add_picture(str(BASE_DIR / signatory["signature_image"]), width=Inches(1.35))
    add_picture_alt(shape, "Authorized signature", f"Signature of {signatory['name']}")
    paragraph(document, signatory["name"], size=10.5, bold=True, after=1)
    paragraph(document, "Designation: Director / Authorized Signatory", size=10, after=1)
    paragraph(document, f"Place: Hyderabad", size=10, after=0)
    return document


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--profile", type=Path, default=BASE_DIR / "company_profile.json")
    parser.add_argument("--date", default=date.today().isoformat())
    parser.add_argument("--output", type=Path, default=BASE_DIR / "generated" / "Shareholding_Pattern_Certificate_Nhancio.docx")
    args = parser.parse_args()
    profile = load_json(args.profile.resolve())
    output = args.output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    build_document(profile, args.date).save(output)
    print(output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
