#!/usr/bin/env python3
"""Generate a signed BillDesk board resolution for Nhancio."""

from __future__ import annotations

import argparse
from datetime import date, datetime
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt

from generate_offer_letter import (
    BASE_DIR,
    DARK_PURPLE,
    INK,
    MUTED,
    WHITE,
    add_picture_alt,
    configure_page_and_furniture,
    configure_styles,
    load_json,
    set_run_font,
)

ENTITY_NAME = "Nhancio Technologies Private Limited"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--profile", type=Path, default=BASE_DIR / "company_profile.json")
    parser.add_argument("--date", default=date.today().isoformat(), help="Resolution date (YYYY-MM-DD)")
    parser.add_argument(
        "--output",
        type=Path,
        default=BASE_DIR / "generated" / "Nhancio_BillDesk_Board_Resolution.docx",
    )
    return parser.parse_args()


def display_date(value: str) -> str:
    return datetime.strptime(value, "%Y-%m-%d").strftime("%-d %B %Y")


def add_body_paragraph(document: Document, text: str, *, after: float = 8) -> None:
    paragraph = document.add_paragraph(text)
    paragraph.paragraph_format.space_after = Pt(after)
    paragraph.paragraph_format.line_spacing = 1.05


def build_document(profile: dict, resolution_date: str) -> Document:
    document = Document()
    configure_styles(document)
    configure_page_and_furniture(document, profile, document_label="Board Resolution")

    eyebrow = document.add_paragraph()
    eyebrow.alignment = WD_ALIGN_PARAGRAPH.CENTER
    eyebrow.paragraph_format.space_before = Pt(12)
    eyebrow.paragraph_format.space_after = Pt(4)
    set_run_font(eyebrow.add_run("CERTIFIED TRUE COPY"), size=9, color=MUTED, bold=True)

    title = document.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title.paragraph_format.space_after = Pt(4)
    set_run_font(title.add_run("BOARD RESOLUTION"), size=17, color=DARK_PURPLE, bold=True)

    company = document.add_paragraph()
    company.alignment = WD_ALIGN_PARAGRAPH.CENTER
    company.paragraph_format.space_after = Pt(14)
    set_run_font(company.add_run(ENTITY_NAME.upper()), size=10.5, color=INK, bold=True)

    metadata = document.add_paragraph()
    metadata.paragraph_format.space_after = Pt(14)
    set_run_font(metadata.add_run(f"Date: {display_date(resolution_date)}"), size=9.5, color=MUTED)

    add_body_paragraph(
        document,
        "At a duly convened meeting of the Board of Directors of Nhancio Technologies Private Limited, the following resolution was passed and entered into the records of the Company:",
        after=10,
    )

    heading = document.add_paragraph()
    heading.paragraph_format.space_after = Pt(4)
    set_run_font(heading.add_run("RESOLVED THAT"), size=10.5, color=DARK_PURPLE, bold=True)
    add_body_paragraph(
        document,
        "the Company be and is hereby authorised to apply for, onboard, maintain, and operate a merchant account, payment gateway account, and related payment-collection services with BillDesk and its affiliates, and to enter into all applications, agreements, declarations, undertakings, and other documents required for that purpose.",
        after=9,
    )

    heading = document.add_paragraph()
    heading.paragraph_format.space_after = Pt(4)
    set_run_font(heading.add_run("RESOLVED FURTHER THAT"), size=10.5, color=DARK_PURPLE, bold=True)
    add_body_paragraph(
        document,
        "Mr. Didigam Sathyanarayana, Director, is hereby authorised to represent the Company before BillDesk, sign and submit the application and supporting documents, complete KYC and verification formalities, provide clarifications, receive correspondence, and execute any amendments, declarations, or related documents necessary to complete and operate the BillDesk account.",
        after=9,
    )

    add_body_paragraph(
        document,
        "Mr. Didigam Nithin, Chief Executive Officer, is authorised to coordinate the operational, technical, and business requirements for the BillDesk account and to provide information and instructions to BillDesk on behalf of the Company, subject to the authority of the Director above.",
        after=9,
    )

    add_body_paragraph(
        document,
        "RESOLVED FURTHER THAT all acts, deeds, matters, and things done by the authorised representatives in connection with the foregoing be and are hereby approved, confirmed, and ratified.",
        after=12,
    )

    certification = document.add_paragraph()
    certification.paragraph_format.space_after = Pt(16)
    set_run_font(
        certification.add_run(
            "Certified to be a true copy of the resolution passed by the Board of Directors of the Company."
        ),
        size=9.5,
        color=INK,
        italic=True,
    )

    signatory = profile["signatory"]
    behalf = document.add_paragraph()
    behalf.paragraph_format.space_after = Pt(3)
    set_run_font(behalf.add_run(f"For and on behalf of {ENTITY_NAME}"), size=10, color=DARK_PURPLE, bold=True)
    signature = document.add_paragraph()
    signature.paragraph_format.space_after = Pt(2)
    shape = signature.add_run().add_picture(
        str(BASE_DIR / signatory["signature_image"]), width=Inches(1.35)
    )
    add_picture_alt(shape, "Authorized signature", f"Signature of {signatory['name']}")
    name = document.add_paragraph()
    name.paragraph_format.space_after = Pt(1)
    set_run_font(name.add_run(signatory["name"]), size=10.5, color=INK, bold=True)
    title = document.add_paragraph()
    title.paragraph_format.space_after = Pt(0)
    set_run_font(title.add_run("Director and Authorized Signatory"), size=10, color=INK)

    return document


def main() -> int:
    args = parse_args()
    profile = load_json(args.profile.resolve())
    output = args.output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    build_document(profile, args.date).save(output)
    print(output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
