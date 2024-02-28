---
startdate: "2020-11-04"
time: "01:00 pm - 02:00 pm EST"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar046
#
presenters:
  - name: Tanu Malik
    affiliation: DePaul University
    github-id: TanuMalik
    bio: "Tanu Malik is an assistant professor in the School of Computing, DePaul University. At DePaul, she directs the Data Systems and Optimization Lab. Her research interests span topics in data provenance, database systems, distributed systems, and cyber-infrastructure for scientific data management. Her group is currently developing methods and systems for improving conduct of reproducible science in computational and data science disciplines. Tanu received the 2019 NSF CAREER award for her work on computational reproducibility. She is also a 2019 Better Scientific Software Fellow. Tanu has actively collaborated with scientists across several institutions. Her research is funded by the National Science Foundation, the Department of Energy, the Sloan Foundation, and the Bloomberg Foundation. Tanu received her PhD in Computer Science from the Johns Hopkins University and she previously worked as a Research Associate Scientist at The University of Chicago."
#
webinar-id: 46
date: 2020-11-04T13:00-0500
title: "Reducing Technical Debt with Reproducible Containers"
presenter-ids: [malik-tanu]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsf-qsrzoiG_wS4H6BK9I1bFC0l4NzWO0
ecp-abbreviation: reducingtechnicaldebt/
vtc-url: https://exascaleproject.zoomgov.com/w/1618341181?tk=ZFAFOi1k_AtGIDIt7R6DvQfyfv5IKxYQYmadoVAxPBk.DQIAAAAAYHXtPRZrbk1TRnZMRVQzV0ZoM2JjMDN0ZzdBAAAAAAAAAAAAAAAAAAAAAAAAAAAA
vtc-session: "161 834 1181"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-survey-201104
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: RDrZBKs7esg
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/webinar046-technicaldebt.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/webinar046-technicaldebit-qa.pdf
#
location: Online
#
---
Computational experiments can be challenging to reproduce; researchers have to choose between pursuing a fast-paced research agenda and developing well-organized, sufficiently documented, and easily reproducible software. Like incurring fiscal debt, there are often tactical reasons to take on technical debt in scientific software—such as deferring documentation, organization, refactoring, and unit tests when pursuing a new idea or meeting a conference deadline. However, more often than not, researchers do not repay this technical debt, leading to irreproducible experiments.

The webinar will describe different levels of technical debt and quantify the cost of not repaying the technical debt. The presenter will introduce isolation in containers as a powerful mechanism for reducing portability debt and describe limitations of current container tools. The presenter will introduce a vision of a reproducible container that aims to automate repayment of different types of technical debt, and will describe the current state of this vision with three tools that use isolation, encapsulation, and monitoring to include necessary and sufficient content in the container—both in terms of software and data, and describe the contents of the container. Finally, the presenter will show results of using reproducible containers on domain science and HPC use cases, and provide guidance.
