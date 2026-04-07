# Static Resume Site

This directory now contains a small style study with three homepage variants sharing the same resume data.

## Local Preview

Open [index.html](/Users/cheny0y/Git/resume/site/index.html) directly in a browser, or serve the directory locally:

```bash
cd /Users/cheny0y/Git/resume/site
python3 -m http.server 8000
```

Then visit:

- `http://localhost:8000/`
- `http://localhost:8000/quiet-academic.html`
- `http://localhost:8000/systems-engineer.html`
- `http://localhost:8000/human-scholarly.html`

Note:
- The PDF button is set up for GitHub Pages deployment.
- For local preview, the page itself works directly, but `resume.pdf` is copied into the published site by the Pages workflow rather than stored in `site/`.

## Update Workflow

Edit the structured content in:
- [resume-data.js](/Users/cheny0y/Git/resume/site/data/resume-data.js)

The shared page rendering logic lives in:
- [app.js](/Users/cheny0y/Git/resume/site/app.js)

The shared styling lives in:
- [styles.css](/Users/cheny0y/Git/resume/site/styles.css)

The shared content data lives in:
- [resume-data.js](/Users/cheny0y/Git/resume/site/data/resume-data.js)
