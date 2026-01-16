---
title: "InternSVG: Towards Unified SVG Tasks with Multimodal Large Language Models"
authors:
  - whm
  - Jinhui Yin*
  - Qi Wei*
  - Wenguang Zeng
  - Lixin Gu
  - Shenglong Ye
  - Zhangwei Gao
  - Yaohui Wang
  - Yanting Zhang
  - Yuanqi Li
  - Yanwen Guo
  - Wenhai Wang
  - Kai Chen
  - Yu Qiao
  - Hongjie Zhang
date: "2025-10-13T12:38:04Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-10-13T12:38:04Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: General SVG modeling remains challenging due to fragmented datasets, limited transferability of methods across tasks, and the difficulty of handling structural complexity. In response, we leverage the strong transfer and generalization capabilities of multimodal large language models (MLLMs) to achieve unified modeling for SVG understanding, editing, and generation. We present the InternSVG family, an integrated data-benchmark-model suite. At its core is SAgoge, the largest and most comprehensive multimodal dataset for SVG tasks, encompassing both static graphics and dynamic animations. It covers icons, long-sequence illustrations, scientific diagrams, and dynamic animations, supporting tasks of varied difficulty levels and providing deeper hierarchies with richer attributes compared to previous datasets. Based on this resource, we introduce SArena, a companion benchmark with comprehensive task definitions and standardized evaluation that aligns with the domains and difficulty spectrum covered by SAgoge. Building on these foundations, we propose InternSVG, a unified MLLM for SVG understanding, editing, and generation with SVG-specific special tokens, subword-based embedding initialization, and a two-stage training strategy that progresses from short static SVGs to long-sequence illustrations and complex animations. This unified formulation induces positive transfer and improves overall performance. Experiments on SArena and prior benchmark confirm that InternSVG achieves substantial gains and consistently outperforms leading open and proprietary counterparts.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Multimodal Large Language Models
- InternVL Series

featured: true

links:
url_pdf: https://arxiv.org/abs/2510.11341
url_code: 'https://github.com/hmwang2002/InternSVG'
url_dataset: ''
url_benchmark: 'https://huggingface.co/datasets/InternSVG/SArena'
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
links:
- name: Homepage
  url: /release/internsvg/

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Overview of InternSVG family'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

### Citation

If you find this project useful in your research, please consider cite:
```BibTex
@article{wang2025internvl3,
  title={Internvl3. 5: Advancing open-source multimodal models in versatility, reasoning, and efficiency},
  author={Wang, Weiyun and Gao, Zhangwei and Gu, Lixin and Pu, Hengjun and Cui, Long and Wei, Xingguang and Liu, Zhaoyang and Jing, Linglin and Ye, Shenglong and Shao, Jie and others},
  journal={arXiv preprint arXiv:2508.18265},
  year={2025}
}
```
