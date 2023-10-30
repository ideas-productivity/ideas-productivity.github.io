---
startdate: "2021-03-10"
time: "01:00 pm - 02:00 pm EST"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar050
#
presenters:
  - name: Arturo Vargas
    affiliation: Lawrence Livermore National Laboratory
    github-id: artv3
    bio: "Arturo Vargas is a computer scientist in the Application, Simulation, and Quality division at Lawrence Livermore National Laboratory. His work focuses on portable programming abstractions, high-performance computing, and high-order finite elements for hydrodynamics applications. He completed his Ph.D. in Computational and Applied Mathematics from Rice University in May 2017. His thesis work was on the development of high-order numerical methods for simulating wave propagation and their implementation on accelerators."
#
webinar-id: 50
date: 2021-03-10T13:00-0500
title: "An Overview of the RAJA Portability Suite"
presenter-ids: [vargas-arturo]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsfuygrD4iEgymQBt-3uI4cHjCe-cMTyY
ecp-abbreviation: raja-210310
vtc-url: https://exascaleproject.zoomgov.com/w/1619582588?tk=R_c6Vm2ubhOPxwxt-1Gl2g_XGluUGXwdxzk7JIBbycU.DQIAAAAAYIjefBZtRlZ6c1FBNFN4Nm13T0dnV3JweHdBAAAAAAAAAAAAAAAAAAAAAAAAAAAA
vtc-session: "161 958 2588"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-survey-210310
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: W1wR4shM82s
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/webinar050-raja.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/webinar050-raja-qa.pdf
#
location: online
#
---
The RAJA Portability Suite is a collection of open-source software libraries that enable developers to write single-source applications that are portable across a wide range of HPC architectures. The Suite contains tools for portable loop execution (RAJA) and memory management (Umpire and CHAI). The development of the Suite is motivated by the needs of production multiphysics codes, which must run efficiently on laptops, commodity clusters, and massively parallel advanced technology systems at any point in time as well as across multiple platform generations. The scale and complexity of these applications requires that they be able to employ system-appropriate native programming models, such as OpenMP, CUDA, and HIP, without significant source code modification. The abstractions that the RAJA Portability Suite provides enable such portable single-source application development. The Suite is used in a diverse range of production codes at Lawrence Livermore National Laboratory (LLNL). It is also funded as a Software Technology Project in DOE’s Exascale Computing Project, where the Suite supports a number of key applications. The webinar will provide an overview of the Suite and its capabilities and discuss status and plans to support applications on exascale platforms. The webinar will present code examples that illustrate basic usage and compare to programming with native programming models, and performance results for several applications that rely on the Suite for platform portability.

This work was performed under the auspices of the U.S. Department of Energy by Lawrence Livermore National Laboratory under Contract DE-AC52-07NA27344. LLNL-ABS-81860