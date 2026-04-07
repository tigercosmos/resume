# Chen Yixi's Resume

Download the resume: [Click Me](https://github.com/chenIshi/resume/raw/master/resume.pdf)

## Static Website

A first-pass static website scaffold now lives in [site/index.html](/Users/cheny0y/Git/resume/site/index.html).

Structured website content currently lives in [site/data/resume-data.js](/Users/cheny0y/Git/resume/site/data/resume-data.js), which is the right place to start reducing duplicated edits between the PDF resume and the website.

## Build

```
sudo apt-get install texlive-full
docker run --rm --user $(id -u):$(id -g) -i -w "/doc" -v "$PWD":/doc thomasweise/texlive make
```

## Planning Docs

- Website plan: [plans/static-website-plan.md](/Users/cheny0y/Git/resume/plans/static-website-plan.md)
- Automation plan: [docs/resume-automation-plan.md](/Users/cheny0y/Git/resume/docs/resume-automation-plan.md)

## Credit

This is forked from the [Awesome-CV](https://github.com/posquit0/Awesome-CV) project.
