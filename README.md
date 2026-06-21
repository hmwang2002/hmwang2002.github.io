# hmwang2002.github.io

Personal academic homepage of **Haomin Wang (王昊旻)**, built with [Jekyll](https://jekyllrb.com/) on the
[acad-homepage](https://github.com/RayeRen/acad-homepage.github.io) template.

🔗 <https://hmwang2002.github.io>

## Editing content

- **`_pages/about.md`** — all page content (About, News, Publications, Honors, Education, Internships).
- **`_config.yml`** — site title/description and the sidebar author info (name, avatar, email, GitHub, Scholar, ORCID).
- **`_data/navigation.yml`** — top navigation bar.
- **`images/`** — avatar (`avatar.jpg`) and publication thumbnails.
- **`files/`** — downloadable files (e.g., `resume.pdf`).
- **`release/`** — standalone project pages, served at `/release/<name>/`.

## Local preview

```bash
bundle install
bundle exec jekyll serve   # then open http://localhost:4000
```

Requires Ruby ≥ 2.7 (Ruby 3.x recommended).

## Deployment

Pushing to `main` triggers `.github/workflows/jekyll.yml`, which builds the site and deploys it to GitHub Pages.
