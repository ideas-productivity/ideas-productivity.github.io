---
startdate: "2020-06-17"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar041
#
presenters:
  - name: Thomas Applencourt
    affiliation: Argonne National Laboratory
    github-id: TApplencourt
    bio: "Thomas Applencourt is an Assistant Computational Scientist at Argonne National Laboratory interested in HPC. He is working now on Aurora, the first exascale US system that will be delivered in 2021. He is interested in various programming models (OpenMP, SYCL) and low-level programming."
#
webinar-id: 41
date: 2020-06-17T13:00-0400
title: "SYCL – Introduction and Best Practices"
presenter-ids: [applencourt-thomas]
registration-url: https://www.eventbrite.com/e/sycl-introduction-and-best-practices-tickets-104559777108
ecp-abbreviation: introduction-to-sycl
vtc-url: https://exascaleproject.zoomgov.com/j/1614280599
vtc-session: "161 428 0599"
#vtc-password: "ideas"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: https://www.surveymonkey.com/r/838D52F
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: TbkrODiVDQY
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/webinar041-sycl.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/webinar041-sycl-qa.pdf
#
location: online
#
---
SYCL is a single-source heterogeneous programming model based on standard C++. It uses C++ templates and lambda functions for host and device code. SYCL builds on the underlying concepts of portability and efficiency of OpenCL that enable code for heterogeneous processors; however, it is less verbose than OpenCL. The single-source programming enables the host and kernel code for an application to be contained in the same source file, in a type-safe way and with the simplicity of a cross-platform asynchronous task graph. We will provide an overview of the SYCL concepts, compilation, and runtime. No prior knowledge of OpenCL is required for this webinar. Once we have reviewed the core concepts of SYCL, we will walk through several code examples to highlight its key features and illustrate best practices. SYCL by design is hardware agnostic and offers the potential to be portable across many of DOE’s largest machines.
