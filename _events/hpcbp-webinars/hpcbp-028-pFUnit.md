---
startdate: "2019-04-10"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar028
#
presenters:
  - name: Thomas Clune
    affiliation: NASA Goddard Space Flight Center
    github-id: tclune
    bio: "Dr. Thomas Clune currently serves as the
Lead for the Software Integration Team within the Global Modeling and
Assimilation Office at NASA’s Goddard Space Flight Center and also as
NASA’s representative on the Fortran Standards Committee.  Much of his
recent activities have been focused on leveraging object-oriented
features of modern Fortran to provide Fortran developers with analogs
of useful capabilities available in other software communities.  His
open source projects include pFUnit (parallel unit testing for
Fortran), gFTL (poor-man’s container templates for Fortran), fArgParse
(command line processing), and pFlogger (an MPI-enhanced analog of
Python’s logging package)."
#
webinar-id: 28
date: 2019-04-10T13:00-0400
title: "Testing Fortran Software with pFUnit"
presenter-ids: [clune-thomas]
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: RmTXDTL_Ce0
  - label: Extended Q&amp;A Recording
    format: YouTube
    yt-video-id: RWZOVFz7UIg
    dont-embed: true
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/webinar028-pfunit.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/webinar028-pfunit-qa.pdf
#
location: Online
#
---
Over the past two decades, the emergence of highly effective software
testing frameworks has greatly simplified the development and use of
unit tests and has led to new software development paradigms such as
test driven development (TDD). However, technical computing introduces
a number of unique testing challenges, including distributed
parallelism and numerical accuracy. This webinar will begin with a
basic introduction to the use of pFUnit to develop tests for
MPI+Fortran software and then present some of the new capabilities in
the latest release. We will also discuss some specialized
methodologies for testing numerical algorithms and speculate about
future framework capabilities that may improve our ability to test at
exascale.
