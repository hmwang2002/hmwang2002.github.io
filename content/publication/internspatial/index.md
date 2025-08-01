---
title: "InternSpatial: A Comprehensive Dataset for Spatial Reasoning in Vision-Language Models"
authors:
  - Nianchen Deng*
  - Lixin Gu*
  - Shenglong Ye*
  - Yinan He*
  - Zhe Chen
  - Songze Li
  - admin
  - Xingguang Wei
  - Tianshuo Yang
  - Min Dou
  - Tong He
  - Wenqi Shao
  - Kaipeng Zhang
  - Yi Wang
  - Botian Shi
  - Yanting Zhang
  - Jifeng Dai
  - Yu Qiao
  - Hongjie Zhang
  - Wenhai Wang
date: "2025-06-23T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-06-23T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Recent benchmarks and datasets have been proposed to improve spatial reasoning in vision-language models (VLMs), yet existing open resources remain limited in scale, visual diversity, and instruction expressiveness. In this work, we introduce InternSpatial, the largest open-source dataset for spatial reasoning in VLMs, along with InternSpatial-Bench, a corresponding evaluation benchmark designed to assess spatial understanding under diverse instruction formats. InternSpatial comprises 12 million QA pairs spanning both single-view and multi-view settings, drawn from diverse visual environments and supporting 19 instruction formats that reflect varied query styles. For evaluation, we propose InternSpatial-Bench for single-view tasks and expand multi-view reasoning by introducing a novel rotation angle prediction task that has not been explored in prior work. Experimental results show that models trained on InternSpatial achieve 12.1% improvement on InternSpatial-Bench and 10.7% on VSI-Bench, while maintaining strong performance on general-purpose benchmarks. We hope these resources will support the development of spatially capable VLMs in practical applications such as robotics and embodied AI.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Spatial Reasoning
- VLM

featured: true

links:
url_pdf: https://arxiv.org/abs/2506.18385
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
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
@article{deng2025internspatial,
  title={InternSpatial: A Comprehensive Dataset for Spatial Reasoning in Vision-Language Models},
  author={Deng, Nianchen and Gu, Lixin and Ye, Shenglong and He, Yinan and Chen, Zhe and Li, Songze and Wang, Haomin and Wei, Xingguang and Yang, Tianshuo and Dou, Min and others},
  journal={arXiv preprint arXiv:2506.18385},
  year={2025}
}
```
