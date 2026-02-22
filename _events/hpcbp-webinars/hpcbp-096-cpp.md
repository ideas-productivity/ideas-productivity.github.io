---
startdate: "2026-02-18"
time: "1:00 pm - 2:00 pm EST" # Ensure that time zone is correct with respect to standard/daylight time
#
title: "Modernizing C++ Interfaces with Concepts, Constraints and std::mdspan"
#
presenters:
  - name: Christian Trott
    affiliation: Sandia National Laboratories
    github-id: crtrott
    bio: |
      Christian Trott is a High Performance Computing expert at Sandia National Laboratories, where he co-leads the Kokkos core team, developing performance portability solutions for engineering and science applications. He heads Sandia's delegation to the ISO C++ committee and is a principal author of features like mdspan and linear algebra. Recently, he helped establish the High Performance Software Foundation and serves on its governing board. Christian advises application teams on redesigning their codes with Kokkos for next-generation supercomputers. Before joining Sandia, Christian earned a doctorate in theoretical physics from the University of Technology Ilmenau.
#
bsswio-topics: ["software engineering", "high-performance computing (hpc)", "online learning"]
registration-url: https://www.zoomgov.com/meeting/register/OtBDoWACSOSiVftdtUUe7w
#
artifacts:
  # - label: Recording
  #   format: YouTube
  #   yt-video-id: tzPbndr1u4o
  - label: Slides
    format: PDF
    url: https://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-096-cpp.pdf
  # - label: Q&A
  #   format: PDF
  #   url: XXXXX://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-096-cpp-qa.pdf
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
topic: interface design with C++20 and later
short-description: |
  This talk will introduce standard C++ Concepts, Constraints and std::mdspan and discuss their uses for designing interfaces in scientific computing software.
---
Over the last few years C++ has evolved considerably by adding features that allow for more robust, intuitive and maintainable interfaces, most notably through the addition of Concepts and Constraints in C++20, and std::mdspan in C++23.
These features can in particular benefit scientific computing, where libraries with complex overload sets or large numbers of class specializations are common.
In this presentation we will introduce Concepts and Constraints and discuss their benefits as well as their pitfalls. In particular, we will illustrate how these new capabilities interact with std::mdspan to enable the design of public facing interfaces, which enable interoperability between libraries for multi-dimensional arrays, and provide a much larger degree of safety and maintainability than typical C-like interfaces.

This talk will be appropriate for attendees who do not know anything about Concepts, Constraints or std::mdspan; however, a general C++ familiarity is highly recommended.
