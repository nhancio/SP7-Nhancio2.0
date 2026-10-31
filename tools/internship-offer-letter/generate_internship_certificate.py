#!/usr/bin/env python3
"""Generate a one-page, branded Nhancio internship certificate."""

from __future__ import annotations

import argparse
from datetime import date
from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor

BASE = Path(__file__).resolve().parent
ASSETS = BASE / "assets"
OUT = BASE / "generated"
PURPLE = RGBColor(74, 32, 160)
CYAN = RGBColor(0, 177, 214)
INK = RGBColor(34, 34, 42)
MUTED = RGBColor(92, 94, 105)


def shade(cell, color: str) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    el = OxmlElement("w:shd")
    el.set(qn("w:fill"), color)
    tc_pr.append(el)


def borderless(table) -> None:
    tbl_pr = table._tbl.tblPr
    borders = OxmlElement("w:tblBorders")
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        item = OxmlElement(f"w:{edge}")
        item.set(qn("w:val"), "nil")
        borders.append(item)
    tbl_pr.append(borders)


def run_font(run, size=None, color=INK, bold=None, italic=None):
    run.font.name = "Aptos"
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), "Aptos")
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), "Aptos")
    if size is not None:
        run.font.size = Pt(size)
    run.font.color.rgb = color
    if bold is not None:
        run.bold = bold
    if italic is not None:
        run.italic = italic


def add_text(document, text, size=10, color=INK, bold=False, align=WD_ALIGN_PARAGRAPH.LEFT, after=4):
    p = document.add_paragraph()
    p.alignment = align
    p.paragraph_format.space_after = Pt(after)
    r = p.add_run(text)
    run_font(r, size, color, bold)
    return p


def build(output: Path) -> Path:
    d = Document()
    sec = d.sections[0]
    sec.page_width = Inches(11.69)
    sec.page_height = Inches(8.27)
    sec.top_margin = Inches(0.20)
    sec.bottom_margin = Inches(0.18)
    sec.left_margin = Inches(0.72)
    sec.right_margin = Inches(0.72)

    # Header band.
    header = sec.header
    header.is_linked_to_previous = False
    t = header.add_table(rows=1, cols=3, width=Inches(10.25))
    t.columns[0].width = Inches(1.20)
    t.columns[1].width = Inches(7.25)
    t.columns[2].width = Inches(1.80)
    borderless(t)
    logo_cell, brand_cell, mark_cell = t.rows[0].cells
    logo = logo_cell.paragraphs[0]
    logo.alignment = WD_ALIGN_PARAGRAPH.LEFT
    logo.add_run().add_picture(str(ASSETS / "nhancio-logo-transparent.png"), width=Inches(0.95))
    brand = brand_cell.paragraphs[0]
    brand.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = brand.add_run("NHANCIO TECHNOLOGIES PRIVATE LIMITED")
    run_font(r, 14, PURPLE, True)
    r = brand.add_run("\nIIT Alumnus Startup  •  AI Services | USA | AUS")
    run_font(r, 9.5, CYAN, True)
    mark = mark_cell.paragraphs[0]
    mark.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r = mark.add_run("nhancio.com\nHyderabad")
    run_font(r, 8.5, MUTED, True)
    p = header.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(1)
    p.add_run("━" * 86).font.color.rgb = CYAN

    add_text(d, "INTERNSHIP CERTIFICATE", 24, PURPLE, True, WD_ALIGN_PARAGRAPH.CENTER, 1)
    add_text(d, "Certificate of Successful Internship", 11, MUTED, False, WD_ALIGN_PARAGRAPH.CENTER, 4)

    add_text(d, "This is to certify that", 11, INK, False, WD_ALIGN_PARAGRAPH.CENTER, 3)
    add_text(d, "Jilla Shravya", 24, PURPLE, True, WD_ALIGN_PARAGRAPH.CENTER, 2)
    add_text(d, "has successfully completed an internship with", 11, INK, False, WD_ALIGN_PARAGRAPH.CENTER, 3)
    add_text(d, "Nhancio Technologies Private Limited", 15, DARK := RGBColor(50, 30, 96), True, WD_ALIGN_PARAGRAPH.CENTER, 6)

    box = d.add_table(rows=3, cols=2)
    box.autofit = False
    box.columns[0].width = Inches(2.55)
    box.columns[1].width = Inches(7.10)
    borderless(box)
    rows = [("ROLE", "Accounting Executive"), ("INTERNSHIP PERIOD", "1 October 2026 – 30 October 2026"), ("WORK MODE", "Remote")]
    for row, (label, value) in zip(box.rows, rows):
        shade(row.cells[0], "F3F0FC")
        p = row.cells[0].paragraphs[0]
        r = p.add_run(label)
        run_font(r, 9.5, PURPLE, True)
        p = row.cells[1].paragraphs[0]
        r = p.add_run(value)
        run_font(r, 10.5, INK, True)
        for c in row.cells:
            c.vertical_alignment = 1
            tc_mar = c._tc.get_or_add_tcPr()
            mar = OxmlElement("w:tcMar")
            for side in ("top", "bottom", "start", "end"):
                x = OxmlElement(f"w:{side}"); x.set(qn("w:w"), "120"); x.set(qn("w:type"), "dxa"); mar.append(x)
            tc_mar.append(mar)

    add_text(d, "During the internship, she contributed to assigned accounting and finance activities, collaborated with the Nhancio team, and demonstrated professionalism, commitment, and a willingness to learn. We appreciate her contribution and wish her continued success.", 10.5, INK, False, WD_ALIGN_PARAGRAPH.JUSTIFY, 5)
    add_text(d, "Issued on 29 September 2026", 10, MUTED, False, WD_ALIGN_PARAGRAPH.CENTER, 3)

    sig = d.add_table(rows=1, cols=2)
    sig.autofit = False
    sig.columns[0].width = Inches(5.25)
    sig.columns[1].width = Inches(5.00)
    borderless(sig)
    p = sig.cell(0, 0).paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    r = p.add_run("For Nhancio Technologies Private Limited")
    run_font(r, 10, PURPLE, True)
    p = sig.cell(0, 1).paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.add_run().add_picture(str(ASSETS / "authorized-signature.png"), width=Inches(0.85))
    p.add_run("\n")
    r = p.add_run("Didigam Sathyanarayana\nDirector, Nhancio")
    run_font(r, 9.5, INK, True)

    footer = sec.footer
    fp = footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    fp.paragraph_format.space_before = Pt(2)
    r = fp.add_run("━" * 86 + "\n")
    run_font(r, 8, CYAN, True)
    r = fp.add_run("nhancio.com  •  7095 2 88 950  •  hello@nhancio.com  •  Hyderabad")
    run_font(r, 9, PURPLE, True)

    output.parent.mkdir(parents=True, exist_ok=True)
    d.save(output)
    return output


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--output", type=Path, default=OUT / "Jilla_Shravya_Internship_Certificate.docx")
    args = ap.parse_args()
    print(build(args.output))
