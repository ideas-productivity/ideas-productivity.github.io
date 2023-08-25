---
startdate: "2017-08-16"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar010
#
presenters:
  - name: Sam Williams
    affiliation: Lawrence Berkeley National Laboratory
    github-id: swwilliams
    bio: "Sam Williams is a staff scientist in the
Performance and Algorithms Research Group at the Lawrence Berkeley
National Laboratory (LBNL). He received his Ph.D. in Computer Science
from the University of California at Berkeley in 2008. His research
interests include high-performance computing, auto-tuning, performance
modeling, computer architecture, and hardware/software co-design. He
is currently involved in two ECP projects: AMReX (Adaptive Mesh
Refinement for Exascale) and YTune (a compiler-based approach to
auto-tuning). Sam is the main developer of the Roofline model."
  - name: Tuomas Koskela
    affiliation: National Energy Research Scientific Computing Center
    github-id: tkoskela
    bio: "Tuomas Koskela received his Ph.D. in applied
physics from Aalto University (Finland) in 2015. His thesis work was
on Monte Carlo modelling of fast ion confinement in Tokamak fusion
reactors under 3D magnetic perturbations. Currently, Tuomas is a
postdoc in the Exascale Science Applications Program of the National
Energy Scientific Computing Center. His research interests include
high-performance computing, plasma physics, nuclear fusion, fast ion
physics."
#
webinar-id: 10
date: 2017-08-16T13:00-0400
title: "Using the Roofline Model and Intel Advisor"
presenter-ids: [williams-sam, koskela-tuomas]
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: 8h3f3E-Oq5A
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2017/08/webinar010-Roofline-slides.pdf
  - label: Q&amp;A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2017/08/webinar010-Roofline-qa.pdf
#
location: online
#
---
In this webinar, we will begin by introducing the Roofline Model and
its “Cache-Aware” variant. We will proceed with some general
guidelines and historical approaches to Roofline-based program
analysis. Next, we will provide a short discussion of how changes in
data locality and arithmetic intensity of two canonical benchmarks
visually manifest in the context of these two Roofline
formulations. Subsequently, we will provide two demonstrations of
using Intel Advisor and the Roofline model within Intel Advisor. The
first demo will be primarily instructive on how to compile, benchmark,
and use Advisor. The second demo will focus on using variants of a
simple benchmark to highlight changes in the Roofline model as well as
providing correlation to Advisor’s other capabilities. We will
conclude with a few comments on future directions.
