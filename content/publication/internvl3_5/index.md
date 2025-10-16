---
title: "InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency"
authors:
  - Weiyun Wang*
  - Zhangwei Gao*
  - Lixin Gu*
  - Hengjun Pu*
  - Long Cui*
  - Xingguang Wei*
  - Zhaoyang Liu*
  - Linglin Jing*
  - Shenglong Ye*
  - Jie Shao*
  - Zhaokai Wang*
  - Zhe Chen*
  - Hongjie Zhang
  - Ganlin Yang
  - whm_
  - Qi Wei
  - Jinhui Yin
  - Wenhao Li
  - Erfei Cui
  - Guanzhou Chen
  - Zichen Ding
  - Changyao Tian
  - Zhenyu Wu
  - Jingjing Xie
  - Zehao Li
  - Bowen Yang
  - Yuchen Duan
  - Xuehui Wang
  - Zhi Hou
  - Haoran Hao
  - Tianyi Zhang
  - Songze Li
  - Xiangyu Zhao
  - Haodong Duan
  - Nianchen Deng
  - Bin Fu
  - Yinan He
  - Yi Wang
  - Conghui He
  - Botian Shi
  - Junjun He
  - Yingtong Xiong
  - Han Lv
  - Lijun Wu
  - Wenqi Shao
  - Kaipeng Zhang
  - Huipeng Deng
  - Biqing Qi
  - Jiaye Ge
  - Qipeng Guo
  - Wenwei Zhang
  - Songyang Zhang
  - Maosong Cao
  - Junyao Lin
  - Kexian Tang
  - Jianfei Gao
  - Haian Huang
  - Yuzhe Gu
  - Chengqi Lyu
  - Huanze Tang
  - Rui Wang
  - Haijun Lv
  - Wanli Ouyang
  - Limin Wang
  - Min Dou
  - Xizhou Zhu
  - Tong Lu
  - Dahua Lin
  - Jifeng Dai
  - Weijie Su
  - Bowen Zhou
  - Kai Chen
  - Yu Qiao
  - Wenhai Wang
  - Gen Luo
date: "2025-08-25T17:59:25Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-08-25T17:59:25Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: We introduce InternVL 3.5, a new family of open-source multimodal models that significantly advances versatility, reasoning capability, and inference efficiency along the InternVL series. A key innovation is the Cascade Reinforcement Learning (Cascade RL) framework, which enhances reasoning through a two-stage process, offline RL for stable convergence and online RL for refined alignment. This coarse-to-fine training strategy leads to substantial improvements on downstream reasoning tasks, e.g., MMMU and MathVista. To optimize efficiency, we propose a Visual Resolution Router (ViR) that dynamically adjusts the resolution of visual tokens without compromising performance. Coupled with ViR, our Decoupled Vision-Language Deployment (DvD) strategy separates the vision encoder and language model across different GPUs, effectively balancing computational load. These contributions collectively enable InternVL3.5 to achieve up to a +16.0\% gain in overall reasoning performance and a 4.05× inference speedup compared to its predecessor, i.e., InternVL3. In addition, InternVL3.5 supports novel capabilities such as GUI interaction and embodied agency. Notably, our largest model, i.e., InternVL3.5-241B-A28B, attains state-of-the-art results among open-source MLLMs across general multimodal, reasoning, text, and agentic tasks -- narrowing the performance gap with leading commercial models like GPT-5. All models and code are publicly released.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Multimodal Large Language Models
- InternVL Series

featured: true

links:
url_pdf: https://arxiv.org/abs/2508.18265
url_code: 'https://github.com/OpenGVLab/InternVL'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
links:
- name: Models
  url: https://huggingface.co/collections/OpenGVLab/internvl35-68ac87bd52ebe953485927fb

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'InternVL3.5'
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
