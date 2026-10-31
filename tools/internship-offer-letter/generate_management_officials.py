#!/usr/bin/env python3
"""Generate Nhancio's senior-management-officials letter."""

from __future__ import annotations

import argparse
from datetime import date, datetime
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt

from generate_offer_letter import (
    BASE_DIR,
    CONTENT_WIDTH_DXA,
    DARK_PURPLE,
    INK,
    LIGHT_FILL,
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


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--profile", type=Path, default=BASE_DIR / "company_profile.json")
    parser.add_argument("--date", default=date.today().isoformat(), help="Document date (YYYY-MM-DD)")
    parser.add_argument(
        "--output",
        type=Path,
        default=BASE_DIR / "generated" / "Nhancio_Senior_Management_Officials.docx",
    )
    return parser.parse_args()


def display_date(value: str) -> str:
    return datetime.strptime(value, "%Y-%m-%d").strftime("%-d %B %Y")


def build_document(profile: dict, document_date: str) -> Document:
    document = Document()
    configure_styles(document)
    configure_page_and_furniture(document, profile, document_label="Senior Management Officials")

    title = document.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title.paragraph_format.space_before = Pt(12)
    title.paragraph_format.space_after = Pt(8)
    set_run_font(title.add_run("SENIOR MANAGEMENT OFFICIALS"), size=17, color=DARK_PURPLE, bold=True)

    to_whom = document.add_paragraph()
    to_whom.alignment = WD_ALIGN_PARAGRAPH.CENTER
    to_whom.paragraph_format.space_after = Pt(10)
    set_run_font(to_whom.add_run("TO WHOMSOEVER IT MAY CONCERN"), size=11.5, color=INK, bold=True)

    subject = document.add_paragraph()
    subject.paragraph_format.space_after = Pt(12)
    set_run_font(subject.add_run("Subject: List of Senior Management Officials"), size=10.5, color=DARK_PURPLE, bold=True)

    intro = document.add_paragraph(
        "This is to certify that the following are the Senior Management Officials of Nhancio Technologies Private Limited:"
    )
    intro.paragraph_format.space_after = Pt(12)

    table = document.add_table(rows=1, cols=3)
    set_table_geometry(table, [650, 3600, CONTENT_WIDTH_DXA - 4250])
    table.style = "Table Grid"
    headers = ("S. No.", "Name", "Designation")
    for cell, text in zip(table.rows[0].cells, headers, strict=True):
        set_cell_shading(cell, "5B2DCB")
        set_cell_margins(cell)
        paragraph = cell.paragraphs[0]
        paragraph.alignment = WD_ALIGN_PARAGRAPH.LEFT
        paragraph.paragraph_format.space_before = Pt(2)
        paragraph.paragraph_format.space_after = Pt(2)
        set_run_font(paragraph.add_run(text), size=10, color=WHITE, bold=True)
        set_cell_border(
            cell,
            top={"val": "single", "sz": 8, "color": "D9D9D9"},
            bottom={"val": "single", "sz": 8, "color": "D9D9D9"},
            start={"val": "single", "sz": 8, "color": "D9D9D9"},
            end={"val": "single", "sz": 8, "color": "D9D9D9"},
        )

    officials = [
        ("1", "Didigam Sathyanarayana", "Director"),
        ("2", "Didigam Uma", "Director"),
        ("3", "Didigam Nithin", "Chief Executive Officer (Management Role)"),
    ]
    for row_index, values in enumerate(officials, start=1):
        row = table.add_row()
        for cell, text in zip(row.cells, values, strict=True):
            set_cell_margins(cell)
            if row_index % 2 == 0:
                set_cell_shading(cell, "FBFAFE")
            paragraph = cell.paragraphs[0]
            paragraph.paragraph_format.space_before = Pt(5)
            paragraph.paragraph_format.space_after = Pt(5)
            set_run_font(
                paragraph.add_run(text),
                size=10.5,
                color=INK,
                bold=(cell is row.cells[1]),
            )
            set_cell_border(
                cell,
                top={"val": "single", "sz": 8, "color": "D9D9D9"},
                bottom={"val": "single", "sz": 8, "color": "D9D9D9"},
                start={"val": "single", "sz": 8, "color": "D9D9D9"},
                end={"val": "single", "sz": 8, "color": "D9D9D9"},
            )

    spacer = document.add_paragraph()
    spacer.paragraph_format.space_after = Pt(3)
    statement = document.add_paragraph(
        "Mr. Didigam Nithin is responsible for the day-to-day management and operations of the Company."
    )
    statement.paragraph_format.space_before = Pt(14)
    statement.paragraph_format.space_after = Pt(10)
    confirmation = document.add_paragraph(
        "We hereby confirm that the above information is true and correct as per the records and management structure of the Company."
    )
    confirmation.paragraph_format.space_after = Pt(10)
    purpose = document.add_paragraph(
        "This letter is being issued for the purpose of merchant onboarding / KYC verification with BillDesk in connection with Google Play payment services."
    )
    purpose.paragraph_format.space_after = Pt(14)

    date_paragraph = document.add_paragraph()
    date_paragraph.paragraph_format.space_after = Pt(10)
    set_run_font(date_paragraph.add_run(f"Date: {display_date(document_date)}"), size=9.5, color=MUTED)

    signatory = profile["signatory"]
    auth = document.add_paragraph()
    auth.paragraph_format.space_after = Pt(3)
    set_run_font(auth.add_run("For Nhancio Technologies Private Limited"), size=10.5, color=DARK_PURPLE, bold=True)
    authorized = document.add_paragraph()
    authorized.paragraph_format.space_after = Pt(4)
    set_run_font(authorized.add_run("Authorized Signatory"), size=10, color=INK, bold=True)
    signature = document.add_paragraph()
    signature.paragraph_format.space_before = Pt(16)
    signature.paragraph_format.space_after = Pt(3)
    shape = signature.add_run().add_picture(
        str(BASE_DIR / signatory["signature_image"]), width=Inches(1.35)
    )
    add_picture_alt(shape, "Authorized signature", f"Signature of {signatory['name']}")
    name = document.add_paragraph()
    name.paragraph_format.space_after = Pt(1)
    set_run_font(name.add_run(signatory["name"]), size=10.5, color=INK, bold=True)
    designation = document.add_paragraph()
    designation.paragraph_format.space_after = Pt(1)
    set_run_font(designation.add_run(f"Designation: {signatory['title'].split(',')[0]} / Authorized Signatory"), size=10, color=INK)
    details = document.add_paragraph()
    details.paragraph_format.space_after = Pt(1)
    set_run_font(details.add_run(f"Date: {display_date(document_date)}"), size=10, color=INK)
    place = document.add_paragraph()
    place.paragraph_format.space_after = Pt(0)
    set_run_font(place.add_run("Place: Hyderabad"), size=10, color=INK)

    return document


def main() -> int:
    args = parse_args()
    profile = load_json(args.profile.resolve())
    output = args.output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    document = build_document(profile, args.date)
    document.save(output)
    print(output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
