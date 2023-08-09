---
startdate: "2023-05-10"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar074
#
presenters:
  - name: Paul Kent
    affiliation: Oak Ridge National Laboratory
    github-id: prckent
    bio: "Paul Kent is distinguished staff at Oak Ridge National Laboratory, PI of the QMCPACK applications development project within DOE’s Exascale Computing Project (ECP), and director of the Center for Predictive Simulation of Functional Materials, a DOE BES Computational Materials Sciences Center. He is a Fellow of the APS and previous ACM Gordon Bell prize winner."
#
webinar-id: 74
date: 2023-05-10T13:00-0400
title: "Lessons Learned Developing Performance Portable QMCPACK"
presenter-ids: [kent-paul]
topics: ["software engineering",  "high-performance computing (hpc)", "performance at leadership computing facilities", “online learning”]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsfu2tpj4tH5IPhwHyts07waBFxGIAvYo
ecp-abbreviation: qmcpack
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: PWuRlpbkeXQ
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/06/hpcbp-074-qmcpack.pdf
  - label: Q&amp;A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/05/hpcbp-074-qmcpack-qa.pdf
---
During DOE’s Exascale Computing Project the open source QMCPACK code has been redesigned and reimplemented to run portably and performantly on multiple vendors GPUs as well as CPUs. The QMCPACK code implements Quantum Monte Carlo algorithms to predict the properties of materials with benchmark accuracy. The new implementation has now fully replaced the prior non-portable GPU solution. This webinar will outline some of the design considerations and new algorithms implemented both to run efficiently and to reduce burdens on the developers and maintainers. A key factor has been the adoption of modern development practices, including an extensive test suite. This has accelerated development, improved code quality, and also enabled isolation of problems in the wider HPC software stack, including in compilers and numerical libraries. The webinar will summarize these strategies and other recommendations for HPC application developers and facilities.
