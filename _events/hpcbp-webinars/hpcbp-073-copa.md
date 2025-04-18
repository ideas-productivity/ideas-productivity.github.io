---
startdate: "2023-04-12"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar073
#
presenters:
  - name: Jean-Luc Fattebert
    affiliation: Oak Ridge National Laboratory
    github-id: jeanlucf22
    bio: "Jean-Luc Fattebert is a research scientist in the Computational Sciences and Engineering Division at the Oak Ridge National Laboratory in Tennessee. His expertise is in high-performance computing, working at the intersection of material science and chemistry, numerical solvers and computer science. Prior to that, he obtained his PhD from the Swiss Federal Institute of Technology in Lausanne, Switzerland in 1997. He then joined North Carolina State University for two years as a postdoctoral researcher, before moving to the Center of Applied Scientific Computing at Lawrence Livermore National Laboratory where he became a research staff member in 2001. He joined ORNL in 2017."
#
webinar-id: 73
date: 2023-04-12T13:00-0400
title: "Facilitating Electronic Structure Calculations on GPU-based Exascale Platforms"
presenter-ids: [fattebert-jeanluc]
bsswio-topics: ["software engineering",  "high-performance computing (hpc)", "performance at leadership computing facilities", “online learning”]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsdu2trz4oHcvHfBiEco7RFJzPWwNfh3E
ecp-abbreviation: copa
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: T5JInOIMcdw
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp-073-copa.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp-073-qa.pdf
#
location: Online
#
---
GPUs accelerators offer the prospect of speeding up ab initio molecular dynamics and other large-scale first-principles atomistic simulations. Taking advantage of these devices is, however, not a trivial task given their specificities. Some algorithms struggle, while others thrive with the high level of thread concurrency available on modern GPUs. The PROGRESS and BML libraries, developed within ECP’s Co-design Center for Particle Applications (CoPA) project, allow electronic structure codes to offload their most expensive kernels, with a unified interface for various matrix formats and computer architectures. The webinar will focus on implementations and algorithmic choices made in those libraries, and lessons learned while trying to achieve performance portability on exascale platforms. Specifically, the webinar will discuss eigensolvers and their alternatives, as well as strong scaling in fast time-to-solution in molecular dynamics.
