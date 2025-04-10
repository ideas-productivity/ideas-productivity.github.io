---
startdate: "2019-01-23"
time: "01:00 pm - 02:00 pm EST"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar025
#
presenters:
  - name: John Pennycook
    affiliation: Intel
    github-id: Pennycook
    bio: "John Pennycook is an HPC Application
Engineer in the HPC Ecosystem and Applications team at Intel
Corporation, focused on enabling developers to fully utilize the
parallelism available in modern processors. He is experienced in
optimizing and parallelizing applications from a range of scientific
domains, and serves as Intel’s representative on the steering
committee for the Intel eXtreme Performance Users Group. John has a
PhD in Computer Science from the University of Warwick."
  - name: Charlene Yang
    affiliation: Lawrence Berkeley National Laboratory
    bio: "Charlene Yang is an application performance
specialist at NERSC, LBNL. Her work is focused on performance
characterization, performance optimization, and performance
portability. Charlene works with code teams in the NERSC Exascale
Science Application Program, helps identify their codes’ performance
bottlenecks and provides advice on optimization strategies. Charlene
is an advocate of Roofline Performance Model and has been actively
involved in the development of this model. Charlene holds a PhD degree
in Electrical and Electronic Engineering from The University of
Western Australia."
  - name: Jack Deslippe
    affiliation: Lawrence Berkeley National Laboratory
    github-id: jdeslip
    bio: "Jack Deslippe is the application performance
group lead at NERSC. Jack and his group are partnering with DOE
application teams to evaluate and improve the performance of
applications on Cori and future systems at NERSC. He received a
Ph.D. from UC Berkeley in physics in 2011, with research centered on
computational materials physics and nano-science, including the
development and scaling of electronic-structure codes. Jack has been
at NERSC since 2011, acting as a consultant and developer for
materials science applications and currently leads the NERSC Exascale
Science Applications Program (NESAP)."
#
webinar-id: 25
date: 2019-01-23T13:00-0500
title: "Quantitatively Assessing Performance Portability with Roofline"
presenter-ids: [pennycook-john, yang-charlene, deslippe-jack]
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: 2OvsMUQ2mj8
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/webinar025-perfport.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/webinar025-qa.pdf
#
location: Online
#
---
 Wouldn’t it be great if we could port a code to a new
 high-performance architecture without substantially changing the code
 yet achieving a similar level of performance as hand-optimized code?
 This webinar will frame the discussion around ‘performance
 portability’, why it is important and desirable, and how to
 quantitatively measure it. The webinar will start with a background
 check on how the concept of performance portability came about and
 past attempts to define it and quantify it. Then we will introduce a
 simple yet powerful metric and an empirical methodology to
 quantitatively assess a code’s performance portability across
 multiple platforms. The methodology uses the Roofline performance
 model to measure an ‘architectural efficiency’ term in the metric
 proposed by Pennycook et al. We will dive into a few nuances of this
 methodology, for example, how and why empirical ceilings should be
 used for performance bounds, how to accurately account for complex
 instructions such as divides, how to model strided memory accesses,
 and how to select the appropriate Roofline ceilings and application
 performance points to make sure that the performance portability
 analysis is not erroneously skewed. We will also show some results of
 measuring performance portability using the aforementioned metric and
 methodology on two modern architectures, Intel Xeon Phi and NVIDIA
 V100 GPUs.
