---
startdate: "2026-01-21"
time: "1:00 pm - 2:00 pm EST" # Ensure that time zone is correct with respect to standard/daylight time
#
title: "Please, No More Loops (Than Necessary): New Patterns in Fortran 2023"
#
presenters:
  - name: Damian Rouson
    affiliation: Berkeley Lab
    github-id: rouson
    bio: |
      Damian Rouson is a Senior Scientist and the Group Lead for the Computer
      Languages and Systems Software (CLaSS) Group at Berkeley Lab, where he
      researches programming patterns and paradigms for computational science,
      He co-develops open-source software, including the [Caffeine](https://go.lbl.gov/caffeine) parallel
      runtime library, the [Fiats](https://go.lbl.gov/fiats) deep learning library, and the [Julienne](https://go.lbl.gov/julienne)
      correctness-checking framework.  He was the lead author on the book
      *Scientific Software: The Object-Oriented Way* (Cambridge University Press,
      2011) and has taught software engineering for science and engineering at
      Stanford University and the University of Cyprus and related short
      courses at conferences, companies, and government laboratories.  He won a
      2021-'22 Better Scientific Software Fellowship and Berkeley Lab's 2025
      Developer of the Year award. He holds a B.S. from Howard University and
      M.S. and Ph.D. degrees Stanford University, all in mechanical engineering.
#
bsswio-topics: ["software engineering", "high-performance computing (hpc)", "online learning"]
registration-url: https://www.zoomgov.com/meeting/register/VNMWsQl6SjeYrHAfFh-miA
#
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: DKV2Whf4MKg
  - label: Slides
    format: PDF
    url: https://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-095-fortran.pdf
  - label: Q&A
    format: PDF
    url: https://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-095-fortran-qa.pdf
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
topic: expressive patterns and paradigms in Fortran 2023
short-description: |
  This talk will present a fresh perspective on the world's first widely used, high-level programming language: Fortran.  The talk will emphasize leveraging new or less-widely known language features to improve the expressiveness and conciseness of code.  Examples will be given from open-source software that the speaker develops with collaborators. 
---
Loops are seemingly ubiquitous in programming and yet writing loops provides
one example of a common practice stuck in a pattern as old as high-level
programming languages themselves.  This webinar will provide an overview of the
features introduced in Fortran standards from Fortran 90 to 2023.  We will
venture into often-unvisited nooks and crannies and traverse equally unvisited
expansive pastures.  Weaving feature groups together by the approaches they
enable, the talk will emphasize array, object-oriented, parallel, modular, and
functional programming patterns and paradigms.  The talk will demonstrate the utility
of the described features in open-source packages developed by Berkeley Lab's
Computer Languages and System Software (CLaSS) Group and our collaborators. The
presentation will emphasize expressiveness and conciseness, showing how our
[Julienne](https://go.lbl.gov/julienne) correctness-checking framework supports writing assertions and
unit tests using natural-language idioms; how we write textbook-form partial
differential equations (PDE) in the [Matcha](https://go.lbl.gov/matcha) T-cell motility simulator; and
how we concisely capture advanced algorithms for training neural networks in
the [Fiats](https://go.lbl.gov/fiats) deep learning library.  The talk will include a brief update on the
status of the compiler and runtime-library support for these features in the
open-source [LLVM flang](https://flang.llvm.org) compiler and the [Caffeine](https://go.lbl.gov/caffeine) parallel runtime library
developed by CLaSS and our collaborators.  The talk will conclude with a
description of the planned Fortran 2028 support for generic programming via
type-safe templates and the powerful ramifications of this technology in our
development of a formally verifiable, domain-specific language embedded in Fortran
2028 via a type system being developed for the [Formal](https://go.lbl.gov/formal) PDE solver library.
One recurring theme will be the ability to write thousands of lines of code
manipulating large collections of data with few or no loops.
