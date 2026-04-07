const data = window.resumeData;

function byId(id) {
  return document.getElementById(id);
}

function createLink(item, className = "action-link") {
  const link = document.createElement("a");
  link.className = `${className}${item.primary ? " primary" : ""}`;
  link.href = item.href;
  link.textContent = item.label;

  if (/^https?:\/\//.test(item.href) || item.href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  return link;
}

function createEntryCard(item, options) {
  const card = document.createElement("article");
  card.className = "entry-card";

  const meta = document.createElement("p");
  meta.className = "entry-meta";
  meta.textContent = options.meta(item);

  const title = document.createElement("h3");
  title.textContent = options.title(item);

  const period = document.createElement("p");
  period.className = "entry-period";
  period.textContent = item.period;

  const list = document.createElement("ul");
  options.items(item).forEach((detail) => {
    const li = document.createElement("li");
    li.textContent = detail;
    list.appendChild(li);
  });

  card.append(meta, title, period, list);
  return card;
}

function renderHero(profile) {
  byId("hero-role").textContent = profile.role;
  byId("hero-name").textContent = profile.name;
  byId("hero-summary").textContent = profile.summary;
  byId("hero-location").textContent = profile.location;

  const actions = byId("hero-actions");
  profile.actions.forEach((item) => actions.appendChild(createLink(item)));

  const focusList = byId("focus-list");
  profile.focus.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    focusList.appendChild(li);
  });
}

function renderExperience(items) {
  const container = byId("experience-list");
  items.forEach((item) => {
    container.appendChild(
      createEntryCard(item, {
        title: (value) => value.title,
        meta: (value) => `${value.organization} • ${value.location}`,
        items: (value) => value.highlights,
      }),
    );
  });
}

function renderEducation(items) {
  const container = byId("education-list");
  items.forEach((item) => {
    container.appendChild(
      createEntryCard(item, {
        title: (value) => value.degree,
        meta: (value) => `${value.institution} • ${value.location}`,
        items: (value) => value.details,
      }),
    );
  });
}

function renderSkills(items) {
  const container = byId("skills-list");

  items.forEach((group) => {
    const card = document.createElement("article");
    card.className = "skill-card";

    const label = document.createElement("p");
    label.className = "skill-label";
    label.textContent = group.label;

    const list = document.createElement("div");
    list.className = "skill-pill-list";
    group.items.forEach((skill) => {
      const pill = document.createElement("span");
      pill.className = "skill-pill";
      pill.textContent = skill;
      list.appendChild(pill);
    });

    card.append(label, list);
    container.appendChild(card);
  });
}

function renderPublications(items) {
  const container = byId("publications-list");

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "publication-card";

    const meta = document.createElement("p");
    meta.className = "publication-meta";
    meta.textContent = `${item.venue} • ${item.year} • ${item.status}`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const authors = document.createElement("p");
    authors.className = "publication-authors";
    authors.textContent = item.authors;

    card.append(meta, title, authors);
    container.appendChild(card);
  });
}

function renderTalks(items) {
  const container = byId("talks-list");

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "talk-card";

    const meta = document.createElement("p");
    meta.className = "talk-meta";
    meta.textContent = `${item.venue} • ${item.location} • ${item.year}`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    card.append(meta, title);
    container.appendChild(card);
  });
}

function renderContactLinks(actions) {
  const container = byId("contact-links");
  actions.forEach((item) => container.appendChild(createLink(item, "contact-link")));
}

function getSortedPublications() {
  return [...data.publications].sort((a, b) => {
    const monthA = a.month || 0;
    const monthB = b.month || 0;
    return b.year - a.year || monthB - monthA || a.title.localeCompare(b.title);
  });
}

function renderSystemsEngineer(profile) {
  byId("hero-role").textContent = profile.role;
  byId("hero-name").textContent = profile.name;
  byId("hero-summary").textContent = profile.summary;
  byId("hero-location").textContent = profile.location;

  const heroActions = byId("hero-actions");
  profile.actions.forEach((item) => heroActions.appendChild(createLink(item, "action-link")));

  const focusGrid = byId("focus-grid");
  profile.focus.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "focus-card";

    const label = document.createElement("p");
    label.className = "focus-index";
    label.textContent = `0${index + 1}`;

    const title = document.createElement("h3");
    title.textContent = item;

    card.append(label, title);
    focusGrid.appendChild(card);
  });

  const newsList = byId("news-list");
  const sortedUpdates = [...data.updates].sort((a, b) => b.date.localeCompare(a.date));
  sortedUpdates.forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-item";

    const date = document.createElement("p");
    date.className = "news-date";
    date.textContent = item.date;

    const body = document.createElement("div");
    body.className = "news-body";

    const meta = document.createElement("p");
    meta.className = "publication-meta";
    meta.textContent = `${item.kind} • ${item.venueOrOrg}`;

    const title = document.createElement("h3");
    title.className = "news-title";
    title.textContent = item.title;

    body.append(meta, title);

    if (item.summary) {
      const summary = document.createElement("p");
      summary.className = "news-copy";
      summary.textContent = item.summary;
      body.appendChild(summary);
    }

    card.append(date, body);
    newsList.appendChild(card);
  });

  const sortedPublications = getSortedPublications();
  const homepagePublications = sortedPublications.filter((item) => item.homepage !== false);

  const pubRail = byId("publication-rail");
  homepagePublications.slice(0, 4).forEach((item) => {
    const row = document.createElement("article");
    row.className = "publication-row";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const meta = document.createElement("p");
    meta.className = "publication-meta";
    meta.textContent = `${item.venue} • ${item.year} • ${item.status}`;

    row.append(meta, title);
    pubRail.appendChild(row);
  });

  const experienceGrid = byId("experience-grid");
  data.experience.forEach((item) => {
    const card = document.createElement("article");
    card.className = "experience-story";

    const meta = document.createElement("p");
    meta.className = "entry-meta";
    meta.textContent = `${item.organization} • ${item.location}`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const period = document.createElement("p");
    period.className = "entry-period";
    period.textContent = item.period;

    const list = document.createElement("ul");
    item.highlights.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      list.appendChild(li);
    });

    card.append(meta, title, period, list);
    experienceGrid.appendChild(card);
  });

  const backgroundStack = byId("background-stack");
  data.education.forEach((item) => {
    const card = document.createElement("article");
    card.className = "background-card";

    const meta = document.createElement("p");
    meta.className = "entry-meta";
    meta.textContent = `${item.institution} • ${item.location}`;

    const title = document.createElement("h3");
    title.textContent = item.degree;

    const period = document.createElement("p");
    period.className = "entry-period";
    period.textContent = item.period;

    card.append(meta, title, period);
    backgroundStack.appendChild(card);
  });

  renderSkills(data.skills);

  const talksStrip = byId("talks-strip");
  data.talks.forEach((item) => {
    const card = document.createElement("article");
    card.className = "talk-chip";

    const meta = document.createElement("p");
    meta.className = "talk-meta";
    meta.textContent = `${item.venue} • ${item.year}`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    card.append(meta, title);
    talksStrip.appendChild(card);
  });

  renderContactLinks(profile.actions);
}

function renderPublicationsPage() {
  const publications = getSortedPublications();

  const summary = byId("publication-summary");
  const byType = publications.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const summaryItems = [
    { label: "Total entries", value: String(publications.length) },
    { label: "Conference papers", value: String(byType["conference-paper"] || 0) },
    { label: "Workshop papers", value: String(byType["workshop-paper"] || 0) },
    { label: "Featured", value: String(publications.filter((item) => item.featured).length) },
  ];

  summaryItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "metric-card";

    const value = document.createElement("p");
    value.className = "metric-value";
    value.textContent = item.value;

    const label = document.createElement("p");
    label.className = "news-date";
    label.textContent = item.label;

    card.append(value, label);
    summary.appendChild(card);
  });

  const grouped = publications.reduce((acc, item) => {
    const key = String(item.year);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  const list = byId("publications-list-full");
  Object.keys(grouped)
    .sort((a, b) => Number(b) - Number(a))
    .forEach((year) => {
      const block = document.createElement("section");
      block.className = "publication-year-block";

      const heading = document.createElement("div");
      heading.className = "publication-year-heading";

      const title = document.createElement("h3");
      title.textContent = year;

      const count = document.createElement("p");
      count.className = "news-date";
      count.textContent = `${grouped[year].length} item${grouped[year].length > 1 ? "s" : ""}`;

      heading.append(title, count);
      block.appendChild(heading);

      const entries = document.createElement("div");
      entries.className = "publication-year-entries";

      grouped[year].forEach((item) => {
        const card = document.createElement("article");
        card.className = "publication-entry-full";

        const meta = document.createElement("p");
        meta.className = "publication-meta";
        meta.textContent = `${item.venue} • ${item.year} • ${item.type} • ${item.status}`;

        const entryTitle = document.createElement("h4");
        entryTitle.textContent = item.title;

        const authors = document.createElement("p");
        authors.className = "publication-authors";
        authors.textContent = item.authors;

        card.append(meta, entryTitle, authors);

        if (item.links && item.links.length > 0) {
          const links = document.createElement("div");
          links.className = "publication-links";
          item.links.forEach((linkItem) => {
            links.appendChild(createLink(linkItem, "chip-link"));
          });
          card.appendChild(links);
        }

        entries.appendChild(card);
      });

      block.appendChild(entries);
      list.appendChild(block);
    });
}

if (document.body.dataset.page === "variant" && document.body.dataset.theme === "systems-engineer") {
  renderSystemsEngineer(data.profile);
} else if (document.body.dataset.page === "publications") {
  renderPublicationsPage();
} else if (document.body.dataset.page === "variant") {
  renderHero(data.profile);
  renderExperience(data.experience);
  renderEducation(data.education);
  renderSkills(data.skills);
  renderPublications(data.publications);
  renderTalks(data.talks);
  renderContactLinks(data.profile.actions);
}
