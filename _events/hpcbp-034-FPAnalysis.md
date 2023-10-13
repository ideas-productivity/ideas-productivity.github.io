---
startdate: "2019-10-16"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar034
#
presenters:
  - name: Ignacio Laguna
    affiliation: Lawrence Livermore National Laboratory
    github-id: ilagunap
    bio: "Ignacio Laguna is a Computer Scientist at the
Center for Applied Scientific Computing (CASC) at Lawrence Livermore
National Laboratory (LLNL). His main area of research is
high-performance computing (HPC) and main sub-area of research in HPC
is programing models and systems. He is a 2019 Better Scientific
Software Fellow helping code teams to improve the reliability of
scientific software through analyzing and debugging floating-point
software."
#
webinar-id: 34
date: 2019-10-16T13:00-0400
title: "Tools and Techniques for Floating-Point Analysis"
presenter-ids: [laguna-ignacio]
registration-url: https://www.eventbrite.com/e/tools-and-techniques-for-floating-point-analysis-tickets-72265194141
ecp-abbreviation: fpanalysis
vtc-url: https://ecptr.webex.com/ecptr/onstage/g.php?MTID=e87651bdcd5093ee5f60d5200994777e6
vtc-session: "904 973 288"
vtc-password: "ideas"
qa-public-url: http://bit.ly/IDEAS-FPAnalysis
survey-public-url: http://bit.ly/IDEAS-FPAnalysis-survey
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: CCzB1RETSdM
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2019/10/webinar034-FPAnalysis.pdf
  - label: Q&amp;A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2019/10/webinar034-FPAnalysis-qa.pdf
#
location: online
#
---
Scientific software is central to the practice of research
computing. While software is widely used in many science and
engineering disciplines to simulate real-world phenomena, developing
accurate and reliable scientific software is notoriously
difficult. One of the most serious difficulties comes from dealing
with floating-point arithmetic to perform numerical
computations. Round-off errors occur and accumulate at all levels of
computation, while compiler optimizations and low-precision arithmetic
can significantly affect the final computational results. With
accelerators such as GPUs dominating high-performance computing
systems, computational scientists are faced with even bigger
challenges, given that ensuring numerical reproducibility in these
systems poses a very difficult problem. This webinar provides
highlights from a half-day tutorial discussing tools that are
available today to analyze floating-point scientific software. We
focus on tools that allow programmers to get insight about how
different aspects of floating-point arithmetic affect their code and
how to fix potential bugs.
