---
startdate: "2022-03-09"
time: "01:00 pm - 02:00 pm EST"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar061
#
presenters:
  - name: Tomislav Maric
    affiliation: Technische Universität Darmstadt
    github-id: tmaric
    bio: "Tomislav Maric studied Mechanical Engineering at the University of Zagreb, Croatia, and has obtained his Ph.D. degree at the Institute for Mathematical Modeling and Analysis (MMA), Mathematics Department, at TU Darmstadt (Germany) and is currently working at TU Darmstadt as Athene Young Investigator. Tomislav has been developing unstructured Lagrangian / Eulerian Interface Approximation (LEIA) methods for simulating two-phase flows in the OpenFOAM open-source software since 2008. As a member of the Collaborative Research Center 1194 (CRC) at TU Darmstadt, he supports CRC-1194 researchers in developing research software and data."
#
webinar-id: 61
date: 2022-03-09T13:00-0500
title: "Software Design Patterns in Research Software with Examples from OpenFOAM"
presenter-ids: [maric-tomislav]
topics: ["online learning", "design"]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIscuupqD4rGjGuOSSg2TNB9NgJhI_qkiY
ecp-abbreviation: design-patterns
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: F4fxlM5gmtU
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2022/03/hpcbp061-designpatterns.pdf
  - label: Q&A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2022/03/hpcbp061-designpatterns-qa.pdf
---
Combining sub-algorithms to develop robust, scalable, and convergent numerical methods carries with itself a high level of uncertainty. Extensive automatic testing reduces this uncertainty for methods whose properties cannot be proven mathematically in all application scenarios – basically, most numerical methods. Methods with a more solid theoretical basis still require extensive testing since the jump between theory and practice is often challenging. The ability to select numerical sub-algorithms and combine them easily at runtime, speeds up research immensely. Software design patterns already very successfully address the requirements of runtime selection and algorithm combinations and are staples of modern software engineering. This webinar covers a handful of beneficial software design patterns that provide a solid basis for developing numerical methods in a modular way – drawing concrete examples from OpenFOAM, a highly modular open-source software for Computational Fluid Dynamics.
