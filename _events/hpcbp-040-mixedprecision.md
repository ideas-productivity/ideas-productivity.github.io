---
startdate: "2020-05-13"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar040
#
presenters:
  - name: Hartwig Anzt
    affiliation: Karlsruhe Institute of Technology
    github-id: hartwiganzt
    bio: "Hartwig Anzt is a Helmholtz-Young-Investigator Group leader at the Steinbuch Centre for Computing at the Karlsruhe Institute of Technology. He obtained his PhD in Mathematics at the KIT, and afterwards joined Jack Dongarra’s Innovative Comp. Lab at the U. of Tennessee in 2013. Since 2015 he also holds a Senior Research Scientist position at the U. of Tennessee. He teaches HPC numerics and related topics, including a course on Scientific Computing at the Taiwan National University. In 2017, he contributed to the ISC tutorial on Num. Linear Algebra. Hartwig has a long track record of high-quality software development. He is author of the MAGMA-sparse open source software package managing lead and developer of the Ginkgo numerical linear algebra library, and part of the US Exascale Computing Project (ECP) delivering production-ready numerical linear algebra libraries. Recently, Hartwig Anzt was appointed the PI of the ECP multiprecision effort focusing on the development of multiprecision numerics for Exascale computing."
  - name: Piotr Luszczek
    affiliation: University of Tennessee
    github-id: luszczek
    bio: "Piotr Luszczek is a Research Assistant Professor in the Tickle College of Engineering at the University of Tennessee and a member of the Innovative Computing Laboratory with a long record of research and software development spanning benchmarking, numerical linear algebra for high-performance computing, automatic performance tuning for hardware accelerators, and stochastic models for performance. His mixed-precision work goes back over 15 years to a new look at mixed-precision iterative refinement that is now implemented in modern numerical linear algebra libraries. He contributed to inner-outer iteration research that also exploited performance of lower-precision floating-point arithmetic. More recently, he used autotuning across multiple precisions and introduced a new factorization algorithm with scaling that maintains improved accuracy for reduced-precision computations. Currently, Piotr serves as a co-PI for the Exascale Computing Project (ECP) xSDK project that has as one of its main thrusts the goal of introducing mixed-precision approaches to the world-class software of the Exascale machines."
#
webinar-id: 40
date: 2020-05-13T13:00-0400
title: "Accelerating Numerical Software Libraries with Multi-Precision Algorithms"
presenter-ids: [anzt-hartwig, luszczek-piotr]
registration-url: https://www.eventbrite.com/e/accelerating-numerical-software-libraries-with-multi-precision-algorithms-tickets-102390859818
ecp-abbreviation: multiprec
vtc-url: https://ecptr.webex.com/ecptr/onstage/g.php?MTID=e0254d53f321a359f5b7cd34dc0fe0da9
vtc-session: "901 351 396"
vtc-password: "ideas"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: https://www.surveymonkey.com/r/WHFWHWQ/
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: sgRtwJhVFog
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2020/05/webinar040-mixedprecision.pdf
  - label: Q&amp;A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2020/05/webinar040-multiprecision-QA.pdf
#
location: online
#
---
With the rise of machine learning, more hardware manufacturers are introducing low-precision special function units in processor designs, often achieving up to an order or magnitude higher performance than in the IEEE double precision that is typically used as working precision in scientific computing. At the same time, a rapidly expanding landscape of mixed- and multi-precision methods generate high-quality solutions that leverage the higher compute power of reduced precision. This webinar will introduce the concept of floating point formats and the IEEE standard. We will demonstrate how using an iterative or direct solver in lower precision impacts the solution quality. We will outline several strategies that aim to preserve numerical stability and high solution quality while still computing, at least partially, in lower precision. We will present several multi-precision algorithms that have proven particularly successful and elaborate on their realization and usage. We also will introduce open source production-quality multi-precision software packages and show their integration and efficiency for scientific applications. The webinar will focus on lessons learned and generally applicable strategies. 
