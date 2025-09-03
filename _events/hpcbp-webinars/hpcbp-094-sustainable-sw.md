---
startdate: "2025-10-15"
time: "1:00 pm - 2:00 pm EDT" # Ensure that time zone is correct with respect to standard/daylight time
#
title: "Sustainable HPC Software: A Maintainer's Perspective"
#
presenters:
  - name: Damien Lebrun-Grandié
    affiliation: Oak Ridge National Laboratory
    github-id: dalg24
    bio: |
      Damien Lebrun-Grandié is a Senior Computational Scientist at Oak Ridge National Laboratory (ORNL) with over a decade of experience in the field. He holds a PhD in Nuclear Engineering from Texas A&M University, a MSc in Physics from the Karlsruhe Institute of Technology in Germany, and a MEng in Physics Engineering from Grenoble INP in France. His research focuses on developing algorithms and enabling technologies for solving large-scale, complex engineering, and scientific problems.

      As a founding member of the [High Performance Software Foundation](https://hpsf.io), Damien was instrumental in getting the organization started and continues to play a leading role on the Governing Board, representing the Technical Advisory Council. He is also the co-lead of the [Kokkos C++ performance portability project](https://kokkos.org), where he oversees a large international team of developers and researchers. Additionally, he represents ORNL on the C++ Standards Committee, where he has been a key contributor to foundational features for scientific computing like `std::mdspan` in C++23 and `std::linalg` for C++26.
#
bsswio-topics: ["software engineering", "software sustainability", "strategies for more effective teams", "online learning"]
registration-url: https://www.zoomgov.com/meeting/register/cgGGVk86Ru6noPGTI94htA
#
artifacts:
  # - label: Recording
  #   format: YouTube
  #   yt-video-id: ywCb2Byd4Xs
  # - label: Slides
  #   format: PDF
  #   url: /assets/artifacts/hpcbp/hpcbp-094-sustainable-sw.pdf
  # - label: Q&A
  #   format: PDF
  #   url: /assets/artifacts/hpcbp/hpcbp-094-sustainable-sw-qa.pdf
#
# Items that change rarely
#
qa-public-url: http://bit.ly/hpc-bp-qa
survey-public-url: http://bit.ly/hpc-bp-feedback
#
location: Online
#
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "PESO"
#
topic: HPC software sustainability
short-description: |
  Learn how to manage the unique challenges of maintaining sustainable HPC software. Drawing from over five years of experience with the Kokkos project, this webinar will share practical lessons on tackling technical debt, mitigating single points of failure, and handling implicit user dependencies.
---
This webinar explores the challenges of stewarding scientific computing software ecosystems and maintaining the longevity of high-performance computing (HPC) software. Using firsthand examples from over five years of experience as maintainer of the Kokkos project, we will discuss key issues that impact software sustainability. The talk will cover managing critical vulnerabilities like the "bus factor," which highlights the risks of a single point of failure. We'll also address the "silent drag" of technical debt, which slows development and hinders innovation, and "Hyrum's Law," which illustrates how hidden dependencies can break user workflows with every change. By sharing anecdotes and practical strategies for mitigating these risks, this presentation aims to provide valuable insights for developers, maintainers, and project leads working to build a future of sustainable, reliable, and impactful HPC software.
