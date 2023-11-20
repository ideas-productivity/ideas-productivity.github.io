---
startdate: "2022-09-07"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar067
#
presenters:
  - name: David Rogers
    affiliation: Oak Ridge National Laboratory
    github-id: frobnitzem
    bio: "David M. Rogers is a computational scientist in the National Center for Computational Sciences Division at ORNL, where he works to develop mathematical and computational theory jointly with methods for multiscale modeling using HPC. He obtained his Ph.D. in Physical Chemistry from University of Cincinnati in 2009 where he worked on applying Bayes’ theorem to the free energy problem with applications to multiscale modeling of fluids and interface chemistry. After a Post-doctoral fellowship at Sandia National Labs working on modeling of desalination and ion conduction, he served as Assistant Professor of Chemistry from 2013-2019. Over that time, he has published over a range of topics including statistical mechanical methods in liquids, biomolecules, and quantum models, small nonequilibrium systems, hydration, and finite-size effects in nanoscale devices."
#
webinar-id: 67
date: 2022-09-07T13:00-0400
title: "Software Packaging"
presenter-ids: [rogers-david]
bsswio-topics: ["configuration and build", "release and deployment", “online learning”]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsfuCvqDorEmKKU_Dmtrut31OAjQiAeNg
ecp-abbreviation: softwarepackaging
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: gvRhYtF1I1E
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp-067-softwarepackaging.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp-067-softwarepackaging-qa.pdf
#
location: online
#
---
The ability to “import” a package is the critical enabling technology for software re-use. As a package developer, there are a variety of standards and tools we can adopt to make importing our work easier for our users. This webinar surveys packaging technologies and ideas popular in scientific software (C++, python, and Fortran with autoconf, cmake, python builds, spack, and containers). Good re-usability is a product of thoughtful program structure, build process, version control, and testing. By examining some real-world examples, we show how these steps build on each other in “live” projects to make easy connections between software deployment and package use.
