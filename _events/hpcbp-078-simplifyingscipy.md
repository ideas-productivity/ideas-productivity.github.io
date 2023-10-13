---
startdate: "2023-09-13"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar078
#
presenters:
  - name: Amiya Maji
    affiliation: Purdue University
    github-id: amaji
    bio: "Amiya Maji is a Lead Computational Scientist at Rosen Center for Advanced Computing (RCAC) at Purdue University, where he collaborates with faculty and researchers from various scientific domains to optimize their computational and data analysis workflows. Being an avid advocate for software reliability and security, Amiya has developed several algorithms and tools for software testing both during his graduate studies at Purdue ECE and then at RCAC. He co-invented the “Testpilot” regression testing framework at Purdue (HUST17) and also developed the “conda-env-mod” tool for easy deployment of scientific Python applications (HUST20). Amiya currently leads the software build automation project for Purdue’s community clusters. Amiya’s contributions to the Community Cluster program were recognized by the Bravo Award (2020) given to Purdue employees for outstanding achievement. Amiya also served as a fellow of Trusted CI (2021) where he promoted best practices for secure computing."
#
webinar-id: 78
date: 2023-09-13T13:00-0400
title: "Simplifying Scientific Python Package Installation and Usage"
presenter-ids: [maji-amiya]
bsswio-topics: ["release and deployment", "development tools", "high-performance computing (hpc)", “online learning”]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJItd-GuqDMjH72ztVT-EYb-lh5hQUtEV0g
ecp-abbreviation: simplifyingscipy
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: CqUr5BnlWZw
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/09/hpcbp-078-simplifyingscipy.pdf
  - label: Q&A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/09/hpcbp-078-simplifyingscipy-qa.pdf
---
With the growing popularity of Python, installation and management of Python packages in HPC environments is emerging as a critical problem for researchers; the problem is exacerbated by the need to provide consistency across traditional batch workloads and interactive notebooks. This webinar will discuss how  to simplify scientific Python package installation by streamlining environment management, dependency tracking, and runtime customizations through easy-to-use tools. The webinar will discuss challenges for installing Python packages in HPC environments and present the best practices suggested by various HPC centers. Many of these best practices have been incorporated into a tool, conda-env-mod, developed by the speaker and his collaborators. HPC centers can further customize the tool and its module templates to incorporate additional software dependencies and provide descriptive help messages. The deployment of the tool has significantly reduced errors and enabled sharing of Python package installations among users. The webinar will give an overview of installing Python packages with `conda-env-mod`.
