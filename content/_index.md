---
# Leave the homepage title empty to use the site title
title: ""
date: 2025-05-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: light
      background:
        color: white
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    id: News
    content:
      title: "🔥 News"
      text: |
        <style>
          /* --- 🔧 样式调优，仅影响本区块 --- */
          /* 扩大正文区域宽度 */
          section#News .prose {
          max-width: 800px !important;              /* 控制内容最大宽度 */
          width: 100vw !important;                   /* 撑满整个视口宽度 */
        }

          /* 调整字体与行距 */
          section#News .prose ul li {
            font-size: 1.3rem;   /* 稍大，视觉更饱满 */
            line-height: 1.55rem; /* 稍松一点，仍紧凑 */
            margin: 0.45rem 0;    /* 缩短条目间距 */
          }

          /* 列表整体的上下间距更紧凑 */
          section#News .prose ul {
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;
          }

          /* 日期加一点权重 */
          section#News .prose strong {
            font-weight: 600;
          }

          /* 减少本 block 与前后模块的外部间距 */
          section#News {
            margin-top: -2.0rem !important;
            margin-bottom: -4.0rem !important;
          }
        </style>

        - **2026/03:** 🎉 We have released [CTRL-S](https://github.com/hmwang2002/CTRL-S), welcome to have a try!
        - **2026/01:** 🎉 [InternSVG](https://hmwang2002.github.io/release/internsvg/) and [InternSpatial](https://arxiv.org/abs/2506.18385) are accepted by ICLR 2026!
        - **2025/10:** 🎉 We have released [InternSVG](https://hmwang2002.github.io/release/internsvg/), welcome to have a try!
        - **2025/09:** 🎉 [VecFormer](https://hmwang2002.github.io/release/vecformer/) and [ArchCAD-400K](https://arxiv.org/abs/2503.22346) are accepted by NeurIPS 2025!
        - **2025/08:** 🎉 Our team released [InternVL 3.5](https://github.com/OpenGVLab/InternVL), welcome to have a try!  
        - **2025/04:** 🎉 Our team released [InternVL 3](https://github.com/OpenGVLab/InternVL), welcome to have a try!

  - block: collection
    id: papers
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: post
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: date-title-summary
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  - block: resume-experience
    id: experience
    content:
      title: Experience
      username: admin
    design:
      # Hugo date format
      date_format: "January 2006"
      # Education or Experience section first?
      is_education_first: true
---
