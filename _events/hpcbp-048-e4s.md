---
startdate: "2021-01-13"
time: "01:00 pm - 02:00 pm EST"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar048
#
presenters:
  - name: Sameer Shende
    affiliation: University of Oregon, ParaTools
    github-id: sameershende
    bio: "Dr. Sameer Shende has helped develop the TAU Performance System, the Program Database Toolkit (PDT), the Extreme-scale Scientific Software Stack (E4S) and the HPCLinux distro. His research interests include tools and techniques for performance instrumentation, measurement, analysis, runtime systems, HPC container runtimes, scientific software stacks, and compiler optimizations. He serves as a Research Associate Professor and the Director of the Performance Research Laboratory at the University of Oregon, and as the President and Director of ParaTools, Inc., ParaTools, SAS, and ParaTools, Ltd."
  - name: David Honegger Rogers
    affiliation: Los Alamos National Laboratory
    github-id: dhrogers
    bio: "David Honegger Rogers is team lead for the Data Science at Scale team at Los Alamos National Lab. He has worked at LANL since 2013, after a decade of leading the Scalable Analysis and Visualization Team at Sandia National Labs, where he was instrumental in bringing in-situ analysis and visualization into production. He now focuses on interactive analysis tools that integrate design, scalable analytics and principles of cognitive science to promote scientific discovery. Prior to working on large scale data analysis, David worked at DreamWorks Feature animation, writing and managing production software. He has degrees in Computer Science, Architecture (buildings, not computers), and an MFA in Writing for Children."
#
webinar-id: 48
date: 2021-01-13T13:00-0500
title: "Extreme-scale Scientific Software Stack (E4S)"
presenter-ids: [shende-sameer, rogers-davidhonegger]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsceyqrTwtGhx2IVPLXJ95mpC_dEE2a5s
ecp-abbreviation: e4s
vtc-url: https://exascaleproject.zoomgov.com/w/1616523770?tk=LA44tZFNFn1Iw2TpsmaUPWBhbUICJ3YAdNn4H9rncg0.DQIAAAAAYFox-hY0Z3pqOTFhdFQxbXdBd1ExeWR0dGJRAAAAAAAAAAAAAAAAAAAAAAAAAAAA
vtc-session: "161 652 3770"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-survey-210113
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: uFkFwUvgrAI
  - label: Slides Part 1
    format: PDF
    url: /assets/artifacts/hpcbp/webinar048-e4s-pt1.pdf
  - label: Slides Part 2
    format: PDF
    url: /assets/artifacts/hpcbp/webinar048-e4s-pt2.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/webinar048-e4s-qa.pdf
#
location: online
#
---
With the increasing complexity and diversity of the software stack and system architecture of high performance computing (HPC) systems, the traditional HPC community is facing a huge productivity challenge in software building, integration and deployment. Recently, this challenge has been addressed by new software build management tools such as Spack that enable seamless software building and integration. Container based solutions provide a versatile way to package software and are increasingly being deployed on HPC systems. The DOE Exascale Computing Project (ECP) Software Technology focus area is developing an HPC software ecosystem that will enable the efficient and performant execution of exascale applications. Through the Extreme-scale Scientific Software Stack (E4S), it is developing a curated, Spack-based, comprehensive and coherent software stack that will enable application developers to productively write highly parallel applications that can portably target diverse exascale architectures. E4S provides both source builds through the Spack platform and a set of containers that feature a broad collection of HPC software packages. E4S exists to accelerate the development, deployment, and use of HPC software, lowering the barriers for HPC and AI/ML users. It provides container images, build manifests, and turn-key, from-source builds of popular HPC software packages developed as Software Development Kits (SDKs). This effort includes a broad range of areas including programming models and runtimes (MPICH, Kokkos, RAJA, OpenMPI), development tools (TAU, PAPI), math libraries (PETSc, Trilinos), data and visualization tools (Adios, HDF5, Paraview), and compilers (LLVM), all available through the Spack package manager. The webinar will describe the community engagements and interactions that led to the many artifacts produced by E4S, and will introduce the E4S containers that are being deployed at the HPC systems at DOE national laboratories.

The presenters will discuss the recent efforts and techniques to improve software integration and deployment for HPC platforms, and describe recent collaborative work on reproducible workflows between E4S and the Pantheon project. Pantheon provides a set of working examples of end-to-end workflows using ECP apps, infrastructure and postprocessing, focused on common vis/analysis operations and workflows of interest to application scientists and show a video of the workflow.
