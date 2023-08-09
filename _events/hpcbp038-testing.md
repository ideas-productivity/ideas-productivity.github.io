---
startdate: "2020-03-18"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar038
#
presenters:
  - name: Balint Joo
    affiliation: Jefferson Lab
    github-id: bjoo
    bio: "Balint Joo got his B. Sc. in Computer Science and Physics in 1996 and his PhD in Theoretical Physics in 2000, both at the University of Edinburgh. Since then he has been working in the area of numerical lattice QCD calculations, with post doctoral positions at the University of Kentucky working on Monte Carlo algorithms, at Columbia University and the University of Edinburgh as part of the design team for the QCDOC supercomputer, and back at the University of Edinburgh where he worked with solvers for Chiral Fermions and got involved with the QDP++ and Chroma software packages. He has been a Staff Computer Scientist at Jefferson Lab since 2005, where his work includes maintaining and developing Chroma and porting and optimizing it for new architectures. He has been working closely with NVIDIA on the QUDA library and more recently with Intel on code for Xeon and Xeon Phi. He is also a computer user running lattice QCD calculations on a number of DOE and NSF centers including Titan at OLCF, BlueWaters at NCSA and Stampede at TACC."
#
webinar-id: 38
date: 2020-03-18T13:00-0400
title: "Testing: Strategies When Learning Programming Models and Using High-Performance Libraries"
presenter-ids: [joo-balint]
registration-url: https://www.eventbrite.com/e/testing-strategies-tickets-95526876459
ecp-abbreviation: testingstrategies
vtc-url: https://ecptr.webex.com/ecptr/onstage/g.php?MTID=ec0e0996c6c32b9e63ffe51f5f6a55842
vtc-session: "907 360 006"
vtc-password: "ideas"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: https://bit.ly/3d4BIj7
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: qreXJq2fwB8
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2020/03/webinar038-testingstrategies.pdf
  - label: Q&amp;A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2020/03/webinar038-testingstrategies-qa.pdf
---
Software testing is an invaluable practice, albeit the level of testing in scientific applications can vary widely, from no testing at all to full continuous integration (as discussed in earlier webinars of the HPC-BP series). In this webinar I will consider a specific case: the use of unit-testing when developing a mini-app as an approach to learn about new programming models such as Kokkos and SYCL, or when using (or contributing to) high-performance libraries. I will illustrate with an example from Lattice QCD, focusing on the integration of the QUDA optimized library with the Chroma application. The webinar will focus on lessons learned and generally applicable strategies.
