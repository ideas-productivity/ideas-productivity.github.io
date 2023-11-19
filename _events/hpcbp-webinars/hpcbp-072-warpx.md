---
startdate: "2023-03-15"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar072
#
presenters:
  - name: Axel Huebl
    affiliation: Lawrence Berkeley National Laboratory
    github-id: ax3l
    bio: "Axel Huebl is a computational physicist at Berkeley Lab. He is researching advanced particle accelerators with computational modeling tools, developing the Beam pLasma Accelerator Simulation Toolkit (BLAST) that includes applications such as the beam dynamics code ImpactX and the DOE Exascale Computing Project (ECP) application WarpX. Before joining Berkeley Lab in 2019, he was part of a team of undergraduates that made it in the ACM Gordon Bell finals in SC13, with the first particle-in-cell code running on the newly released Titan GPU cluster, called PIConGPU. Axel is a long-time user of scalable file formats and contributes to ECP libraries such as ADIOS2. For his applications, he also develops data reduction algorithms, including performance modeling, and interactive parallel data analysis. He co-authored and supervised the inception of the C++ performance portability framework Alpaka, the in situ visualization framework ISAAC and leads an open data standard, openPMD, which is now popular in plasma, beam and accelerator physics. For his early career work, Axel was awarded with the ACM/IEEE George Michael Memorial High Performance Computing Fellowship (at SC16), the FoMICS Prize for PhD Students (at PASC17), the IEEE-NPSS Particle Accelerator Science and Technology (PAST) Doctoral Student Award (at NAPAC22), large computing awards (ALCC PI/ERCAP PI/INCITE co-PI), and others. In 2022, he was co-first-author of the paper that was awarded the 2022 ACM Gordon Bell Prize at SC22."
#
webinar-id: 72
date: 2023-03-15T13:00-0400
title: "Our Road to Exascale: Particle Accelerator &amp; Laser-Plasma Modeling"
presenter-ids: [huebl-axel]
topics: ["software engineering",  "high-performance computing (hpc)", "performance at leadership computing facilities", "performance portability", "strategies for more effective teams", “online learning”]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJItc-ihqzwoG0lIl3IHQtifYVYUyDVSZWQ
ecp-abbreviation: warpx
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: CJHRG-dc3eQ
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp-072-warpx.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp-072-warpx-qa.pdf
#
location: online
#
---
Particle accelerators, among the largest, most complex devices, demand increasingly sophisticated computational tools for the design and optimization of the next generation of accelerators that will meet the challenges of increasing energy, intensity, accuracy, compactness, complexity and efficiency. It is key that contemporary software take advantage of the latest advances in computer hardware and scientific software engineering practices, delivering speed, reproducibility and feature composability for the aforementioned challenges.

The webinar will discuss the experience of the developers of WarpX in the US DOE Exascale Computing Project (ECP), which led to the 2022 ACM Gordon Bell Prize. Including the first Exascale supercomputer Frontier, WarpX uses GPUs and CPUs at massive scale; research efforts have advanced particle-in-cell algorithms such as dynamic load balancing, block-structured mesh-refinement, and modern relativistic Maxwell solvers. The webinar will present strategies and results in performance portability. In particular, the webinar will discuss the team-of-teams approach for software co-design in AMReX, software architecture, quality assurance, developer & user productivity, and ecosystem interplay that has lifted up accelerator modeling activities to be fast, open, modular and sustainable over the long term.
