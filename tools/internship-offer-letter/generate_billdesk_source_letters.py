#!/usr/bin/env python3
"""Recreate the supplied BillDesk letters on the Nhancio letterhead."""

from __future__ import annotations

import argparse
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

OUT_DIR = BASE_DIR / "generated"
PHOTO = BASE_DIR / "assets" / "authorised-applicant-000.jpg"


def paragraph(document: Document, text: str = "", *, size: float = 10.5, bold: bool = False,
              italic: bool = False, color=INK, before: float = 0, after: float = 7,
              align=None):
    p = document.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = 1.05
    if text:
        set_run_font(p.add_run(text), size=size, color=color, bold=bold, italic=italic)
    return p


def add_signature_line(cell, label: str, value_lines: list[str]) -> None:
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(28)
    p.paragraph_format.space_after = Pt(3)
    set_run_font(p.add_run(label), size=9.5, color=INK)
    for line in value_lines:
        q = cell.add_paragraph()
        q.paragraph_format.space_before = Pt(2)
        q.paragraph_format.space_after = Pt(1)
        set_run_font(q.add_run(line), size=9.5, color=INK)


def add_signature_photo_block(document: Document) -> None:
    table = document.add_table(rows=1, cols=2)
    set_table_geometry(table, [5100, CONTENT_WIDTH_DXA - 5100])
    left, right = table.rows[0].cells
    for cell in (left, right):
        cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.TOP
        set_cell_margins(cell)
        set_cell_border(
            cell,
            top={"val": "nil"}, bottom={"val": "nil"},
            start={"val": "nil"}, end={"val": "nil"},
        )
    add_signature_line(left, "(Authorizing person sign and stamp)", [
        "Name: Didigam Uma",
        "Designation: Director",
        "Date: 19/09/2026",
    ])
    p = right.paragraphs[0]
    p.paragraph_format.space_after = Pt(3)
    set_run_font(p.add_run("(Applicants Signature and Photo)"), size=9.5, color=INK)
    shape = right.add_paragraph().add_run().add_picture(str(PHOTO), width=Inches(1.2))
    add_picture_alt(shape, "Applicant photograph", "Photograph of Didigam Sathyanarayana")


def build_authorisation(profile: dict) -> Document:
    document = Document()
    configure_styles(document)
    configure_page_and_furniture(document, profile, document_label="Letter of Authorisation")
    paragraph(document, "To,", before=18, after=8)
    for line in (
        "Capricorn Identity Services Private Limited,",
        "G-5, Vikasdeep Building, Plot-18,",
        "Laxmi Nagar District Centre,",
        "Delhi-110092",
    ):
        paragraph(document, line, after=6)
    paragraph(
        document,
        "Subject: Authorization letter for applying of ekyc and Digital Signature Certificate",
        bold=True,
        color=DARK_PURPLE,
        before=4,
        after=16,
    )
    paragraph(document, "Dear Sir / Madam,", after=12)
    body = (
        "I hereby authorise Mr.Didigam Sathyanarayana with PAN No.OBKPS2166G , S/o Mr.Didigam "
        "Gouraiah, an Official at NHANCIO TECHNOLOGIES PRIVATE LIMITED are authorized signatory "
        "of the organization to apply for ekyc and Digital Signature Certificate on behalf of the company."
    )
    p = paragraph(document, after=13)
    set_run_font(p.add_run(body), size=10.5, color=INK)
    p.runs[0].bold = False
    paragraph(
        document,
        "This authorisation shall remain in full force and effect until express written notice of revocation "
        "or modification is served by us.",
        after=14,
    )
    paragraph(
        document,
        "Attached below is the specimen signature and stamp along with photograph of the Mr.Didigam "
        "Sathyanarayana is below:",
        after=18,
    )
    add_signature_photo_block(document)
    return document


def build_board_resolution(profile: dict) -> Document:
    document = Document()
    configure_styles(document)
    configure_page_and_furniture(document, profile, document_label="Board Resolution")
    paragraph(document, "CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF NHANCIO TECHNOLOGIES PRIVATE LIMITED HELD ON SATURDAY, THE 19th DAY OF SEPTEMBER 2026 AT 3:00 P.M. (IST) AT THE REGISTERED OFFICE OF THE COMPANY SITUATED AT #36-88/4, DEVAMMABASTHI, JAGADGIRIGUTTA, BALANAGAR TOWNSHIP, HYDERABAD,RANGAREDDY, TELANGANA, INDIA,500037", size=10.5, bold=True, before=14, after=10)
    paragraph(document, "AUTHORISATION TO APPLY FOR CORPORATE DIGITAL SIGNATURE CERTIFICATE (DSC) FOR THE COMPANY", size=10.5, bold=True, before=5, after=11)
    body = [
        ("RESOLVED THAT", "the Board of Directors of the Company be and hereby authorize Mr.Didigam Sathyanarayana, Official of the Company, to apply for and obtain a Digital Signature Certificate (DSC) in the name of the company NHANCIO TECHNOLOGIES PRIVATE LIMITED and to act as the Authorised Signatory in this regard; for the purpose of signing documents, filing returns, and any other related activities with the [regulatory authority, e.g., Ministry of Corporate Affairs (MCA)] and any other government or statutory authorities, as required."),
        ("RESOLVED FURTHER THAT", "Mr. Didigam Sathyanarayana, an official of the company, be and is hereby authorized to take all necessary actions, sign and submit any documents, and do all such acts as may be required to complete the process of obtaining and utilizing the DSC for the company, as per the applicable laws and regulations."),
        ("RESOLVED FURTHER THAT", "a copy of the above resolution duly certified as true by any director of the company be furnished to Capricorn Identity Services Private Limited and such other parties as may be required from time to time in connection with the above matter."),
    ]
    for lead, text in body:
        p = paragraph(document, before=7, after=10)
        set_run_font(p.add_run(lead + " "), size=10, color=INK, bold=True)
        set_run_font(p.add_run(text), size=10, color=INK)
    paragraph(document, "**//CERTIFIED TRUE COPY//**", size=10.5, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, before=4, after=7)
    paragraph(document, "For NHANCIO TECHNOLOGIES PRIVATE LIMITED", size=10.5, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, after=14)
    line = paragraph(document, "___________________________", size=10, align=WD_ALIGN_PARAGRAPH.CENTER, after=3)
    paragraph(document, "DIDIGAM UMA", size=10.5, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, after=2)
    paragraph(document, "DIRECTOR", size=10.5, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, after=2)
    paragraph(document, "DIN:10796123", size=10.5, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, after=0)
    return document


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--profile", type=Path, default=BASE_DIR / "company_profile.json")
    parser.add_argument("--output-dir", type=Path, default=OUT_DIR)
    args = parser.parse_args()
    profile = load_json(args.profile.resolve())
    args.output_dir.mkdir(parents=True, exist_ok=True)
    build_authorisation(profile).save(args.output_dir / "Letter_of_Authorisation_Nhancio.docx")
    build_board_resolution(profile).save(args.output_dir / "Board_Resolution_Nhancio.docx")
    print(args.output_dir / "Letter_of_Authorisation_Nhancio.docx")
    print(args.output_dir / "Board_Resolution_Nhancio.docx")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
