# AGENTS.md

An-Chi Liu's resume, built with LaTeX on the [Awesome-CV](https://github.com/posquit0/Awesome-CV) template.

## Layout

- `resume.tex`: main resume. It sets the header (name, position, contacts) and
  `\input`s the sections in `resume/`.
- `resume/*.tex`: resume sections. Only the files that `resume.tex` inputs are
  used (`summary`, `experience`, `opensource`, `education`, `skill`). The others
  are kept but not included.
- `cv.tex` + `cv/*.tex`: longer CV. Not built by default.
- `coverletter.tex`: cover letter.
- `awesome-cv.cls`, `fontawesome.sty`, `fonts/`: template files. Do not edit
  unless you change the template itself.

## Build

```
make            # builds resume.pdf and coverletter.pdf with xelatex
make cv.pdf     # builds the CV
make clean
```

- Needs a TeX distribution with `xelatex`.
- `make` also copies `resume.pdf` to `anchi_liu.pdf`.
- CI (`.github/workflows/build.yml`) compiles `resume.tex` and
  `coverletter.tex` on every push and pull request.

## Commits

- Do not add AI co-author lines (for example `Co-Authored-By: Claude ...`) or
  other AI attribution to commit messages or pull requests.

## Conventions

- `resume.pdf` is committed (README links to it). Rebuild it after you change
  the resume content, and commit the new PDF with the source change.
- Other build outputs (`*.aux`, `*.log`, other PDFs, `.texmf-cache/`) are
  ignored. Do not commit them.
- Keep the resume to its current length. Check the PDF after edits so that
  content does not spill onto a new page.
- Use the Awesome-CV macros already in the section files (`\cventry`,
  `\cvitems`, `\cvskill`, ...) instead of raw formatting.
- Escape LaTeX special characters in content (`\&`, `\%`, `\$`, `\#`, `\_`).
