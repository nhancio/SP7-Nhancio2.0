#!/usr/bin/env python3
"""Generate a Nhancio internship completion letter from the existing intern record."""

from __future__ import annotations

import argparse
import re
from datetime import date, timedelta
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor

from generate_offer_letter import add_picture_alt, load_json, set_run_font


BASE = Path(__file__).resolve().parent
LEGAL_NAME = "Nhancio Technologies Private Limited"
PURPLE = RGBColor(83, 43, 178)
CYAN = RGBColor(0, 177, 214)
INK = RGBColor(34, 34, 42)
MUTED = RGBColor(92, 94, 105)


def display_day(value: date) -> str:
    return f"{value.day} {value.strftime('%B %Y')}"


def add_rule(paragraph) -> None:
    borders = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "12")
    bottom.set(qn("w:space"), "7")
    bottom.set(qn("w:color"), "00B1D6")
    borders.append(bottom)
    paragraph._p.get_or_add_pPr().append(borders)


def build(name: str, role: str, start: date, end: date, issued: date, profile: dict) -> Document:
    if end < start:
        raise ValueError("Internship end date cannot precede its start date")
    if issued < end:
        raise ValueError("Issue date must be on or after the internship end date")

    doc = Document()
    section = doc.sections[0]
    section.page_width, section.page_height = Inches(8.27), Inches(11.69)
    section.left_margin = section.right_margin = Inches(0.78)
    section.top_margin, section.bottom_margin = Inches(1.42), Inches(0.82)
    section.header_distance, section.footer_distance = Inches(0.20), Inches(0.28)
    normal = doc.styles["Normal"]
    normal.font.name, normal.font.size, normal.font.color.rgb = "Calibri", Pt(11), INK
    normal.paragraph_format.line_spacing = 1.16
    normal.paragraph_format.space_after = Pt(10)
    title_style = doc.styles["Title"]
    title_ppr = title_style._element.get_or_add_pPr()
    for border in title_ppr.findall(qn("w:pBdr")):
        title_ppr.remove(border)

    phone = re.sub(r"\D", "", profile["phone"])
    header = section.header
    logo = header.paragraphs[0]
    logo.alignment = WD_ALIGN_PARAGRAPH.CENTER
    logo.paragraph_format.space_after = Pt(1)
    shape = logo.add_run().add_picture(str(BASE / profile["logo_image"]), width=Inches(0.58))
    add_picture_alt(shape, "Nhancio logo", "Nhancio transparent logo")
    company = header.add_paragraph()
    company.alignment = WD_ALIGN_PARAGRAPH.CENTER
    company.paragraph_format.space_after = Pt(0)
    set_run_font(company.add_run(LEGAL_NAME.upper()), size=12, color=PURPLE, bold=True)
    contact = header.add_paragraph()
    contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
    contact.paragraph_format.space_after = Pt(5)
    set_run_font(contact.add_run(f"Hyderabad  |  {phone}  |  {profile['email']}"), size=9.5, color=MUTED)
    add_rule(contact)

    footer = section.footer.paragraphs[0]
    footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_run_font(
        footer.add_run(f"nhancio.com  |  {phone}  |  {profile['email']}  |  Hyderabad"),
        size=9.5, color=PURPLE,
    )

    title = doc.add_paragraph(style="Title")
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title.paragraph_format.space_before = Pt(9)
    title.paragraph_format.space_after = Pt(21)
    title_border = OxmlElement("w:pBdr")
    no_bottom = OxmlElement("w:bottom")
    no_bottom.set(qn("w:val"), "nil")
    title_border.append(no_bottom)
    title._p.get_or_add_pPr().append(title_border)
    set_run_font(title.add_run("INTERNSHIP COMPLETION LETTER"), size=16, color=PURPLE, bold=True)

    date_line = doc.add_paragraph()
    date_line.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    date_line.paragraph_format.space_after = Pt(20)
    set_run_font(date_line.add_run(f"Date: {display_day(issued)}"), size=10.5, color=INK)

    salutation = doc.add_paragraph("To Whom It May Concern")
    salutation.paragraph_format.space_after = Pt(14)

    subject = doc.add_paragraph()
    subject.paragraph_format.space_after = Pt(18)
    set_run_font(subject.add_run(f"Subject: Internship completion of {name}"), size=11, color=INK, bold=True)

    doc.add_paragraph(
        f"This letter confirms that {name} completed a remote internship with {LEGAL_NAME} "
        f"as a {role} from {display_day(start)} to {display_day(end)}."
    )
    doc.add_paragraph(
        "The internship was with the Finance and Accounts team, under the supervision of "
        f"Didigam Nithin, CEO. Her assigned responsibilities as a {role} included:"
    )
    responsibilities = [
        "Organizing invoices, receipts, expense records, and supporting documents used by the Finance and Accounts team.",
        "Updating expense and budget-tracking records and checking entries against available source documents.",
        "Assisting with bookkeeping, routine reconciliations, and the identification of missing or inconsistent records.",
        "Preparing expense summaries and supporting information for internal budgeting and finance reports.",
        "Tracking the status of payable and receivable items and coordinating follow-ups under supervision.",
        "Maintaining orderly working files and handing over finance records and task status to the reporting team.",
    ]
    for responsibility in responsibilities:
        item = doc.add_paragraph()
        item.add_run(f"•  {responsibility}")
        item.paragraph_format.left_indent = Inches(0.38)
        item.paragraph_format.first_line_indent = Inches(-0.22)
        item.paragraph_format.space_after = Pt(6)
    doc.add_paragraph(
        "We appreciate her time with the team and wish her success in her future endeavors."
    )

    sign = doc.add_paragraph()
    sign.paragraph_format.space_before = Pt(29)
    sign.paragraph_format.space_after = Pt(13)
    set_run_font(sign.add_run(f"For {LEGAL_NAME}"), size=11, color=PURPLE, bold=True)
    signature = doc.add_paragraph()
    signature.paragraph_format.space_after = Pt(5)
    shape = signature.add_run().add_picture(
        str(BASE / profile["signatory"]["signature_image"]), width=Inches(1.36)
    )
    add_picture_alt(shape, "Director signature", "Signature of Didigam Sathyanarayana")
    byline = doc.add_paragraph()
    byline.paragraph_format.space_after = Pt(1)
    set_run_font(byline.add_run("Didigam Sathyanarayana"), size=11, color=INK, bold=True)
    role_line = doc.add_paragraph()
    role_line.paragraph_format.space_after = Pt(0)
    set_run_font(role_line.add_run("Director, Nhancio"), size=10.5, color=MUTED)

    doc.core_properties.title = f"Internship Completion Letter - {name}"
    doc.core_properties.subject = f"{role} internship, {display_day(start)} to {display_day(end)}"
    doc.core_properties.author = LEGAL_NAME
    return doc


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--name", default="Jilla Shravya")
    parser.add_argument("--role", default="Budgeting Associate")
    parser.add_argument("--start-date", default="2026-10-01")
    parser.add_argument("--end-date", default="2026-10-30")
    parser.add_argument("--issue-date", help="YYYY-MM-DD; defaults to day after end date")
    parser.add_argument("--output", type=Path, default=BASE / "generated/Jilla_Shravya_Budgeting_Associate_Internship_Completion_Letter.docx")
    args = parser.parse_args()
    start = date.fromisoformat(args.start_date)
    end = date.fromisoformat(args.end_date)
    issued = date.fromisoformat(args.issue_date) if args.issue_date else end + timedelta(days=1)
    profile = load_json(BASE / "company_profile.json")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    build(args.name, args.role, start, end, issued, profile).save(args.output)
    print(args.output.resolve())


if __name__ == "__main__":
    main()
