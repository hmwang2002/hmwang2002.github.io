---
title: "Point or Line? Using Line-based Representation for Panoptic Symbol Spotting in CAD Drawings"
authors:
  - Xingguang Wei*
  - Haomin Wang*
  - Shenglong Ye
  - Ruifeng Luo
  - Yanting Zhang
  - Lixin Gu
  - Jifeng Dai
  - Yu Qiao
  - Wenhai Wang
  - Hongjie Zhang
date: "2025-05-29T12:33:11Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-05-29T12:33:11Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: We study the task of panoptic symbol spotting, which involves identifying both individual instances of countable things and the semantic regions of uncountable stuff in computer-aided design (CAD) drawings composed of vector graphical primitives. Existing methods typically rely on image rasterization, graph construction, or point-based representation, but these approaches often suffer from high computational costs, limited generality, and loss of geometric structural information. In this paper, we propose VecFormer, a novel method that addresses these challenges through line-based representation of primitives. This design preserves the geometric continuity of the original primitive, enabling more accurate shape representation while maintaining a computation-friendly structure, making it well-suited for vector graphic understanding tasks. To further enhance prediction reliability, we introduce a Branch Fusion Refinement module that effectively integrates instance and semantic predictions, resolving their inconsistencies for more coherent panoptic outputs. Extensive experiments demonstrate that our method establishes a new state-of-the-art, achieving 91.1 PQ, with Stuff-PQ improved by 9.6 and 21.2 points over the second-best results under settings with and without prior information, respectively, highlighting the strong potential of line-based representation as a foundation for vector graphic understanding.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Panoptic Symbol Spotting

featured: true

links:
url_pdf: https://arxiv.org/abs/2505.23395
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
links:
- name: Homepage
  url: /release/vecformer/

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Overview of VecFormer'
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
@article{wei2025point,
  title={Point or Line? Using Line-based Representation for Panoptic Symbol Spotting in CAD Drawings},
  author={Wei, Xingguang and Wang, Haomin and Ye, Shenglong and Luo, Ruifeng and Zhang, Yanting and Gu, Lixin and Dai, Jifeng and Qiao, Yu and Wang, Wenhai and Zhang, Hongjie},
  journal={arXiv preprint arXiv:2505.23395},
  year={2025}
}
```
