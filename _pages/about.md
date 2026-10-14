---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

Hi! My name is Haomin Wang (王昊旻). I am currently a Ph.D. student in the School of Artificial Intelligence at Shanghai Jiao Tong University (SJTU), focusing on Multimodal Large Language Models and World Models.

My recent research primarily focuses on the application of MLLMs to vector graphics, including SVG understanding, generation, and editing. More recently, I have also been exploring world models in the context of embodied intelligence.

I am currently looking for collaborations and new opportunities. Feel free to contact me via email: <kiyotakawang@sjtu.edu.cn>. 

Here's my [**CV**](/files/resume.pdf).


# 🔥 News

- *2026.10*: &nbsp;🎉 We released [WAVE-0](/release/wave0/), bringing lightweight future prediction to pretrained VLA policies!
- *2026.06*: &nbsp;🎉 [CTRL-S](https://github.com/hmwang2002/CTRL-S) is accepted by ECCV 2026!
- *2026.03*: &nbsp;🎉 We released [CTRL-S](https://github.com/hmwang2002/CTRL-S), welcome to have a try!
- *2026.01*: &nbsp;🎉 [InternSVG](https://hmwang2002.github.io/release/internsvg/) and [InternSpatial](https://arxiv.org/abs/2506.18385) are accepted by ICLR 2026!
- *2025.10*: &nbsp;🎉 We released [InternSVG](https://hmwang2002.github.io/release/internsvg/), welcome to have a try!
- *2025.09*: &nbsp;🎉 [VecFormer](https://hmwang2002.github.io/release/vecformer/) and [ArchCAD-400K](https://arxiv.org/abs/2503.22346) are accepted by NeurIPS 2025!
- *2025.08*: &nbsp;🎉 Our team released [InternVL 3.5](https://github.com/OpenGVLab/InternVL), welcome to have a try!

# 📝 Selected Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='/release/wave0/assets/method.webp' alt="WAVE-0 two-stage training architecture" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[WAVE-0: Bridging VLA Policies and WAMs with Lightweight Latent Future Prediction](https://arxiv.org/abs/2610.18568)

**Haomin Wang**, Anqiong Ji, Ke Wang, Zhongshan Liu, Ru Ying, Ran Zheng, Zhipeng Zhang

[**PDF**](https://arxiv.org/pdf/2610.18568) \| [**Code**](https://github.com/AutoLab-SAI-SJTU/WAVE-0) \| [**Models**](https://huggingface.co/collections/KiyotakaWang/wave-0) \| [**Homepage**](/release/wave0/)

WAVE-0 bridges pretrained vision–language–action policies and world action models through a lightweight, action-grounded latent world model. Its 257M-parameter world model predicts future visual representations to guide action generation, without pixel reconstruction or additional large-scale video pretraining. WAVE-0 achieves 91.47% success on RoboTwin 2.0 and 98.7% on LIBERO, with strong generalization and real-world performance.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2026</div><img src='images/ctrl_s.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Reliable Reasoning in SVG-LLMs via Multi-Task Multi-Reward Reinforcement Learning](https://arxiv.org/abs/2603.16189)

**Haomin Wang**, Qi Wei, Qianli Ma, Shengyuan Ding, Jinhui Yin, Kai Chen, Hongjie Zhang

[**PDF**](https://arxiv.org/abs/2603.16189) \| [**Code**](https://github.com/hmwang2002/CTRL-S) \| [**Dataset**](https://huggingface.co/datasets/InternSVG/SVG-Sophia)

CTRL-S is a reinforcement learning framework for reliable SVG generation with explicit chain-of-thought reasoning. It introduces SVG-Sophia, a high-quality dataset covering SVG code refinement, text-to-SVG, and image-to-SVG tasks. By combining structured SVG reasoning, group-level code generation, and multi-reward optimization over visual fidelity, text-image alignment, format validity, and code efficiency, CTRL-S improves both SVG quality and generalization across diverse scenarios.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/internsvg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[InternSVG: Towards Unified SVG Tasks with Multimodal Large Language Models](https://arxiv.org/abs/2510.11341)

**Haomin Wang\***, Jinhui Yin\*, Qi Wei\*, Wenguang Zeng, Lixin Gu, Shenglong Ye, Zhangwei Gao, Yaohui Wang, Yanting Zhang, Yuanqi Li, Yanwen Guo, Wenhai Wang, Kai Chen, Yu Qiao, Hongjie Zhang

[**PDF**](https://arxiv.org/abs/2510.11341) \| [**Code**](https://github.com/hmwang2002/InternSVG) \| [**Model**](https://huggingface.co/InternSVG/InternSVG-8B) \| [**Dataset**](https://huggingface.co/datasets/InternSVG/SAgoge) \| [**Benchmark**](https://huggingface.co/datasets/InternSVG/SArena) \| [**Homepage**](/release/internsvg/)

InternSVG is a unified data–benchmark–model suite for SVG understanding, editing, generation. It introduces SAgoge, a large-scale multi-domain SVG dataset, and SArena, a comprehensive benchmark for evaluating multimodal SVG capabilities. Built on VLMs with SVG-specific tokenization and two stage training, InternSVG-8B model achieves strong performance across diverse SVG tasks.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/vecformer.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Point or Line? Using Line-based Representation for Panoptic Symbol Spotting in CAD Drawings](https://arxiv.org/abs/2505.23395)

Xingguang Wei\*, **Haomin Wang\***, Shenglong Ye, Ruifeng Luo, Yanting Zhang, Lixin Gu, Jifeng Dai, Yu Qiao, Wenhai Wang, Hongjie Zhang

[**PDF**](https://arxiv.org/abs/2505.23395) \| [**Homepage**](/release/vecformer/)

VecFormer uses a line-based representation of primitives for panoptic symbol spotting in floor plan CAD drawings, achieving a new state-of-the-art in the FloorPlanCAD dataset.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/interns1_pro.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Intern-S1-Pro: Scientific Multimodal Foundation Model at Trillion Scale](https://arxiv.org/abs/2603.25040)

Intern-S1-Pro Team, Shanghai AI Laboratory

[**PDF**](https://arxiv.org/abs/2603.25040) \| [**Model**](https://huggingface.co/internlm/Intern-S1-Pro)

Intern-S1-Pro is a trillion-parameter scientific multimodal foundation model that strengthens both general reasoning and domain-specific scientific intelligence. With advanced agent capabilities and support for over 100 specialized tasks across fields such as chemistry, materials, life sciences, and earth sciences, it serves as a specializable generalist for scientific discovery and multimodal understanding.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/internvl3_5.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency](https://arxiv.org/abs/2508.18265)

InternVL Team, Shanghai AI Laboratory

[**PDF**](https://arxiv.org/abs/2508.18265) \| [**Code**](https://github.com/OpenGVLab/InternVL) \| [**Models**](https://huggingface.co/collections/OpenGVLab/internvl35-68ac87bd52ebe953485927fb)

InternVL 3.5 is a new open-source MLLM family that improves multimodal reasoning, versatility, and inference efficiency. It introduces Cascade RL for stronger coarse-to-fine reasoning, ViR for dynamic visual-token resolution, and DvD for efficient vision-language deployment, achieving major gains in reasoning performance and speed. The model also extends to GUI interaction and embodied agent capabilities, reaching SOTA performance among open-source MLLMs.
</div>
</div>

# 🎖 Honors and Awards
- Outstanding Graduate, Nanjing University.
- Outstanding Student, Nanjing University.
- China Merchants Bank Scholarship, Nanjing University.
- Ruli Scholarship, Nanjing University.

# 📖 Educations
- *2025.09 - now*, Ph.D. in School of Artificial Intelligence, Shanghai Jiao Tong University.
- *2021.09 - 2025.06*, B.Eng. in Software Engineering, Nanjing University. (GPA 4.59/5.00, Top 3%)

# 💻 Internships
- *2024.07 - 2026.06*, Research Intern, Shanghai AI Laboratory.
