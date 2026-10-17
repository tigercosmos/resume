.PHONY: build tex-format

LATEX = xelatex
RESUME_DIR = resume
CV_DIR = cv
RESUME_SRCS = $(shell find $(RESUME_DIR) -name '*.tex')
CV_SRCS = $(shell find $(CV_DIR) -name '*.tex')
TEXMF_ROOT = $(CURDIR)/.texmf-cache
TEXMF_ENV = TEXMFHOME=$(TEXMF_ROOT)/home TEXMFVAR=$(TEXMF_ROOT)/var TEXMFCONFIG=$(TEXMF_ROOT)/config
TEX_FORMAT_STAMP = $(TEXMF_ROOT)/.xelatex-format
TEX_FORMAT_SRCS = $(shell $(TEXMF_ENV) kpsewhich xelatex.ini latex.ltx expl3.ltx)

build: $(foreach x, coverletter resume, $x.pdf)

tex-format: $(TEX_FORMAT_STAMP)

$(TEX_FORMAT_STAMP): Makefile $(TEX_FORMAT_SRCS)
	mkdir -p $(TEXMF_ROOT)/home $(TEXMF_ROOT)/var $(TEXMF_ROOT)/config
	$(TEXMF_ENV) fmtutil-user --byfmt xelatex
	touch $@

resume.pdf: resume.tex $(RESUME_SRCS) | tex-format
	$(TEXMF_ENV) $(LATEX) -interaction=nonstopmode -halt-on-error $<
	cp resume.pdf anchi_liu.pdf

cv.pdf: cv.tex $(CV_SRCS) | tex-format
	$(TEXMF_ENV) $(LATEX) -interaction=nonstopmode -halt-on-error $<

coverletter.pdf: coverletter.tex | tex-format
	$(TEXMF_ENV) $(LATEX) -interaction=nonstopmode -halt-on-error $<

clean:
	rm -rf *.aux *.lof *.log *.lot *.fls *.out *.toc *.pdf
