---
startdate: "2026-10-28"
time: "1:00pm - 2:00pm EDT" # Ensure that time zone is correct with respect to standard/daylight time
#
title: 'The HPSF: Building the Future of High-Performance Software, Together'
#
presenters:
  - name: Julien Bigot
    affiliation: "CEA"
    github-id: jbigot
    bio: |
      Julien Bigot is a research scientist at CEA, France, where he leads the "Science of Computing" team at Maison de la Simulation. His main research interest is programming models for HPC. His research focuses on separation of concerns between performance optimization and semantic expression. He focuses specifically on GPU programming with the Kokkos framework, which he co-leads; data handling, including I/O and in situ processing, with the PDI library he created and the French NumPEx/Exa-DoST project that he co-leads; and community building through his involvement in HPSF, where he was the first elected general member representative.
  - name: Xavier Delaruelle
    affiliation: "CEA"
    github-id: xdelaruelle
    bio: |
      Xavier began his career as an HPC systems administrator and is now the manager of the HPC Operations team at CEA. In this role, he coordinates CEA's technical activities for the Alice Recoque infrastructure, which will become EuroHPC's second exascale supercomputer. He is also the lead developer and project manager of the open-source [Environment Modules](https://envmodules.io/) project.
  - name: Axel Huebl
    affiliation: "Lawrence Berkeley National Laboratory"
    github-id: ax3l
    bio: |
      Axel Huebl is a computational laser-plasma physicist working on exascale simulations. As a scientist at Berkeley Lab, he leads the software architecture of the Beam, Plasma & Accelerator Simulation Toolkit (BLAST). He co-first-authored the paper that won the 2022 ACM Gordon Bell Prize for running the BLAST code WarpX on Frontier, the first reported exascale machine. He is a strong advocate for open science and founded the open particle-mesh data project (openPMD) for self-describing, scalable I/O and data science.
#
bsswio-topics: ["projects and organizations", "software sustainability", "high-performance computing (hpc)", "online learning"]
registration-url: https://www.zoomgov.com/meeting/register/84jTOtAlSq-WFjkP9Psm7A
#
# artifacts:
#   - label: Recording
#     format: YouTube
#     yt-video-id: bOhBFzlJKPw
#   - label: Slides
#     format: PDF
#     url: XXXXX://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-101-hpsf.pdf
#   - label: Q&A
#     format: PDF
#     url: XXXXX://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-101-hpsf-qa.pdf
#
# Items that change rarely
#
qa-public-url: http://bit.ly/hpc-bp-qa
survey-public-url: http://bit.ly/hpc-bp-feedback
#
location: Online
#
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "PESO"
#
topic: the creation of a developer community
short-description: |
  Building a community of HPC software developers, supporting the HPC software ecosystem, and sharing solutions to cross-cutting HPC software development problems.
---
The [High Performance Software Foundation](https://hpsf.io/) (HPSF), a project within the Linux Foundation, champions, promotes, and advances core portable software for HPC. It achieves this by increasing adoption, lowering barriers to contribution, and supporting open-source HPC projects. Announced at SC23 and officially launched in May 2024, the foundation has rapidly grown into a global endeavor with a robust membership. Today, many critical software projects across the HPC stack, ranging in size and scope, have joined the HPSF.

This presentation will introduce the foundation and its operational model. We will detail the support the HPSF offers to hosted projects, including tools and cross-cutting initiatives for event organization, CI/CD, continuous benchmarking, outreach, training, packaging, and distribution.

Following this general overview, the presentation will focus on two projects of varying scales that joined the foundation with distinct needs: Environment Modules and WarpX. We will explore how their integration into the foundation was managed and the concrete benefits each project has realized.
