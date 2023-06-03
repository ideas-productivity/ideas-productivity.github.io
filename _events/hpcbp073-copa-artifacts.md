---
startdate: "2025-04-12"
time: "1:00pm - 2:00pm EDT"
title: "Artifacts - Facilitating Electronic Structure Calculations on GPU-based Exascale Platforms"
type: Webinar
series: 
  - "HPC Best Practices Webinars"

presenter: "Jean-Luc Fattebert (Oak Ridge National Laboratory)"
link-id: webinar073

# webinar-id: 73
# date: 2023-04-12T13:00-0400
# title: "Facilitating Electronic Structure Calculations on GPU-based Exascale Platforms"
# presenter-ids: [fattebert-jeanluc]
# topics: ["software engineering",  "high-performance computing (hpc)", "performance at leadership computing facilities", “online learning”]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsdu2trz4oHcvHfBiEco7RFJzPWwNfh3E
# ecp-abbreviation: copa
# qa-public-url: http://bit.ly/HPCBP-QA
# survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: T5JInOIMcdw
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/04/hpcbp-073-copa.pdf
  - label: Q&A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/04/hpcbp-073-qa.pdf
  - label: Random other document
    note: <em>(to be published)</em>
presenters:
  - name: Jean-Luc Fattebert
    affiliation: Oak Ridge National Laboratory
    profile-url: https://github.com/jeanlucf22
    bio: "Jean-Luc Fattebert is a research scientist in the Computational Sciences and Engineering Division at the Oak Ridge National Laboratory in Tennessee. His expertise is in high-performance computing, working at the intersection of material science and chemistry, numerical solvers and computer science. Prior to that, he obtained his PhD from the Swiss Federal Institute of Technology in Lausanne, Switzerland in 1997. He then joined North Carolina State University for two years as a postdoctoral researcher, before moving to the Center of Applied Scientific Computing at Lawrence Livermore National Laboratory where he became a research staff member in 2001. He joined [ORNL](https://ornl.gov) in 2017."
  - name: Evil Twin
    affiliation: Shadow Laboratory
    profile-url: https://github.com/eviljeanlucf22
    bio: "Evil Twin is the digital twin to Jean-Luc Fattebert"
---

# Description

GPUs accelerators offer the prospect of speeding up ab initio molecular dynamics and other large-scale first-principles atomistic simulations. Taking advantage of these devices is, however, not a trivial task given their specificities. Some algorithms struggle, while others thrive with the high level of thread concurrency available on modern GPUs. The PROGRESS and BML libraries, developed within ECP’s Co-design Center for Particle Applications (CoPA) project, allow electronic structure codes to offload their most expensive kernels, with a unified interface for various matrix formats and computer architectures. The webinar will focus on implementations and algorithmic choices made in those libraries, and lessons learned while trying to achieve performance portability on exascale platforms. Specifically, the webinar will discuss eigensolvers and their alternatives, as well as strong scaling in fast time-to-solution in molecular dynamics.
