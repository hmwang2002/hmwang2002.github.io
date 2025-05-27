---
title: "InternVL3: Exploring Advanced Training and Test-Time Recipes for Open-Source Multimodal Models"
authors:
  - Jinguo Zhu*
  - Weiyun Wang*
  - Zhe Chen*
  - Zhaoyang Liu*
  - Shenglong Ye*
  - Lixin Gu*
  - Tian Hao*
  - Yuchen Duan*
  - Weijie Su
  - Jie Shao
  - Zhangwei Gao
  - Erfei Cui
  - Xuehui Wang
  - Yue Cao
  - Yangzhou Liu
  - Xingguang Wei
  - Hongjie Zhang
  - admin
  - Weiye Xu
  - Hao Li
  - Jiahao Wang
  - Nianchen Deng
  - Songze Li
  - Yinan He
  - Tan Jiang
  - Jiapeng Luo
  - Yi Wang
  - Conghui He
  - Botian Shi
  - Xingcheng Zhang
  - Wenqi Shao
  - Junjun He
  - Yingtong Xiong
  - Wenwen Qu
  - Peng Sun
  - Penglong Jiao
  - Han Lv
  - Lijun Wu
  - Kaipeng Zhang
  - Huipeng Deng
  - Jiaye Ge
  - Kai Chen
  - Limin Wang
  - Min Dou
  - Lewei Lu
  - Xizhou Zhu
  - Tong Lu
  - Dahua Lin
  - Yu Qiao
  - Jifeng Dai
  - Wenhai Wang
date: "2025-04-14T17:59:25Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-04-14T17:59:25Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: We introduce InternVL3, a significant advancement in the InternVL series featuring a native multimodal pre-training paradigm. Rather than adapting a text-only large language model (LLM) into a multimodal large language model (MLLM) that supports visual inputs, InternVL3 jointly acquires multimodal and linguistic capabilities from both diverse multimodal data and pure-text corpora during a single pre-training stage. This unified training paradigm effectively addresses the complexities and alignment challenges commonly encountered in conventional post-hoc training pipelines for MLLMs. To further improve performance and scalability, InternVL3 incorporates variable visual position encoding (V2PE) to support extended multimodal contexts, employs advanced post-training techniques such as supervised fine-tuning (SFT) and mixed preference optimization (MPO), and adopts test-time scaling strategies alongside an optimized training infrastructure. Extensive empirical evaluations demonstrate that InternVL3 delivers superior performance across a wide range of multi-modal tasks. In particular, InternVL3-78B achieves a score of 72.2 on the MMMU benchmark, setting a new state-of-the-art among open-source MLLMs. Its capabilities remain highly competitive with leading proprietary models, including ChatGPT-4o, Claude 3.5 Sonnet, and Gemini 2.5 Pro, while also maintaining strong pure-language proficiency. In pursuit of open-science principles, we will publicly release both the training data and model weights to foster further research and development in next-generation MLLMs.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Multimodal Large Language Models
- InternVL Series

featured: true

links:
url_pdf: https://arxiv.org/abs/2504.10479
url_code: 'https://github.com/OpenGVLab/InternVL'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
links:
- name: Models
  url: https://huggingface.co/collections/OpenGVLab/internvl3-67f7f690be79c2fe9d74fe9d

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'InternVL3'
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
@article{zhu2025internvl3,
  title={InternVL3: Exploring Advanced Training and Test-Time Recipes for Open-Source Multimodal Models},
  author={Zhu, Jinguo and Wang, Weiyun and Chen, Zhe and Liu, Zhaoyang and Ye, Shenglong and Gu, Lixin and Duan, Yuchen and Tian, Hao and Su, Weijie and Shao, Jie and others},
  journal={arXiv preprint arXiv:2504.10479},
  year={2025}
}
```
