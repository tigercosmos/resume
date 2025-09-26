.PHONY: build

CC = xelatex
RESUME_DIR = resume
CV_DIR = cv
RESUME_SRCS = $(shell find $(RESUME_DIR) -name '*.tex')
CV_SRCS = $(shell find $(CV_DIR) -name '*.tex')

build: $(foreach x, coverletter resume, $x.pdf)

resume.pdf: resume.tex $(RESUME_SRCS)
	$(CC) -interaction=nonstopmode $< || true
	cp resume.pdf anchi_liu.pdf

cv.pdf: cv.tex $(CV_SRCS)
	$(CC) -interaction=nonstopmode $< || true

coverletter.pdf: coverletter.tex
	$(CC) -interaction=nonstopmode $< || true

clean:
	rm -rf *.aux *.lof *.log *.lot *.fls *.out *.toc *.pdf
