---
title: "Reliable Reasoning in SVG-LLMs via Multi-Task Multi-Reward Reinforcement Learning"
authors:
  - whm
  - Qi Wei*
  - Qianli Ma
  - Shengyuan Ding
  - Jinhui Yin
  - Kai Chen
  - Hongjie Zhang
date: "2026-03-18T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-03-18T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: With the rapid advancement of vision-language models, an increasing number of studies have explored their potential for SVG generation tasks. Although existing approaches improve performance by constructing large-scale SVG datasets and introducing SVG-specific tokens, they still suffer from limited generalization, redundant paths in code outputs, and a lack of explicit reasoning. In this work, we present CTRL-S (Chain-of-Thought Reinforcement Learning for SVG), a unified framework that introduces a chain-of-thought mechanism to explicitly expose the model's reasoning process during SVG generation. To support this structured reasoning, we construct SVG-Sophia, a high-quality dataset containing 145K samples across SVG code refinement, Text-to-SVG, and Image-to-SVG tasks. By training the model to generate group-level structured SVG code, CTRL-S significantly improves structural coherence and visual fidelity. Furthermore, we adopt the GRPO algorithm and design a multi-reward optimization framework, incorporating DINO, image-text similarity, format, and code efficiency rewards. Through joint multi-reward optimization and multi-task training, our approach systematically enhances overall generation capabilities. Extensive experiments show that CTRL-S outperforms existing methods, achieving higher task success rates, superior SVG code quality, and exceptional visual fidelity.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Multimodal Large Language Models
- SVG Generation

featured: true

links:
url_pdf: https://arxiv.org/abs/2603.16189
url_code: 'https://github.com/hmwang2002/CTRL-S'
url_dataset: 'https://huggingface.co/datasets/InternSVG/SVG-Sophia'
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
@article{wang2026reliable,
  title={Reliable Reasoning in SVG-LLMs via Multi-Task Multi-Reward Reinforcement Learning},
  author={Wang, Haomin and Wei, Qi and Ma, Qianli and Ding, Shengyuan and Yin, Jinhui and Chen, Kai and Zhang, Hongjie},
  journal={arXiv preprint arXiv:2603.16189},
  year={2026}
}
```
