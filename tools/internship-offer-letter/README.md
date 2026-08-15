# Nhancio internship offer-letter generator

This folder is the reusable source of truth for Nhancio internship offer letters. It keeps the approved logo, signature image, signatory profile, offer data, and document-generation code together so regenerated letters remain consistent.

## One-time information to confirm

Review `company_profile.json` before issuing a real letter. In particular, confirm the company's legal name, complete business address, signatory's legal name and title, contact details, and whether any registration number must appear on the letterhead.

## Information needed for each intern

Copy `offer.template.json` to a new JSON file and fill in:

- candidate name and, where used, email, phone, and postal address;
- role, department, start date, and end date;
- issue date and internal reference number;
- work mode (use `Remote`), work location, working days, and expected hours;
- compensation or an explicit statement that the internship is unpaid;
- the reporting line is fixed in `company_profile.json` as Didigam Nithin (CEO);
- responsibilities and expected deliverables;
- leave, notice, equipment, approved-expense, and completion-certificate terms;
- offer response deadline and governing-law location.

Dates must use `YYYY-MM-DD` format. The generator will refuse to create a letter when a required business term is missing or when the dates are inconsistent.

## Generate a letter

Install the pinned dependency once:

```bash
python3 -m pip install -r requirements.txt
```

Generate from a completed offer JSON:

```bash
python3 generate_offer_letter.py --offer my_offer.json
```

Override the most frequently changed fields without editing JSON:

```bash
python3 generate_offer_letter.py \
  --offer my_offer.json \
  --name "Candidate Name" \
  --role "AI Engineering Intern" \
  --start-date 2026-09-01 \
  --end-date 2026-11-30
```

Use `--output /path/to/file.docx` to choose the output path. Otherwise, the letter is saved to `generated/` with a safe filename based on the candidate's name.

`sample_offer.json` and its generated Word document are a visual QA example only. The sample is labelled `SAMPLE - NOT FOR ISSUE` so it cannot be confused with a real offer.

The generator uses A4 paper, a compact two-page layout, the approved Nhancio logo, the saved Didigam Sathyanarayana signature, and a branded header with the Nhancio website. Candidate acceptance/signature lines are intentionally not included.

For a full-time employment offer, use `employment_offer.template.json` with `generate_employment_offer_letter.py`. The employment version keeps the same reference-PDF visual system, replaces internship language with employment terms, includes annual compensation and leave policy, and writes an A4 PDF after DOCX rendering.

Example:

```bash
python3 generate_employment_offer_letter.py \
  --offer employment_sample_offer.json \
  --output generated/Didigam_Nithin_Senior_Developer_Offer_Letter.docx
```

The template is a practical business document, not jurisdiction-specific legal advice. Have the final standard clauses reviewed by the company's HR/legal adviser before first use.

## Application development quotation

For a branded commercial quotation, copy `quotation.template.json` and generate with:

```bash
python3 generate_quotation.py --quote sample_quotation.json
```

`sample_quotation.json` is the Worker X quotation (Pronto and SnapIt copy for Hyderabad): one-time fee INR 60,000 allocated across development, server, deployment, localization, and QA, plus INR 10,000 per month for bug management and content updates. The generator reuses the same A4 letterhead, logo, purple tables, and Didigam Sathyanarayana signature as the offer letters, and targets four to five pages.
