---
#
#
# The following information is used for the ideas-productivity.org website only.
# It is not used in the bssw-tutorials.github.io website.
#
type: Tutorial
series:
  - "BSSw Tutorials"
activities:
  - "COLABS"
  - "CORSA"
#parent-event-name: 2024 ACM Conference on Reproducibility and Replicability
#parent-event-file: parentconf-2024-05-12-isc24
#
# Basic tutorial information
#
title: "Software Practices for Reproducible Science"
title-type: "tutorial"
#title-url: 
#
# Presentation date and time.
# enddate is optional for one-day events
# time should include timezeone explicitly
# We don't currently handle tutorials that occur at *different times* on multiple days
#
startdate: "2024-06-18"
#enddate:
time: "1:30 pm - 5:00 pm CEST"
#
# Venue information
#
venue: "2024 ACM Conference on Reproducibility and Replicability (ACM-REP)"
venue-type: "conference"
venue-url: https://acm-rep.github.io/2024/
location: "Rennes, France and online"
registration-url: https://web.cvent.com/event/213c1224-ee5a-4cff-aff0-ef4b0df0441c/summary
#
# Staffing information
# organizer-ids will be assigned the issues that presenter-ids are not doing, basically
#
organizer-ids: [adubey64,bernhold]
#helper-ids:
presenters:
  - name: Anshu Dubey
    affiliation: "Argonne National Laboratory"
    short-affil: "ANL"
    pronouns: "she/her"
    github-id: adubey64
  - name: Gregory R. Watson
    affiliation: "Oak Ridge National Laboratory"
    short-affil: "ORNL"
    pronouns: "he/him"
    github-id: jarrah42
#
description: |
  The computational science and engineering (CSE) community is in the midst of an extremely challenging period created by the confluence of disruptive changes in computing architectures, demand for greater scientific reproducibility, and new opportunities for greatly improved simulation capabilities, especially through coupling physics and scales.  Computer architecture changes require new software design and implementation strategies, including significant refactoring of existing code. Reproducibility demands require more rigor across the entire software endeavor and for running computational experiments.  These challenges demand large investments in scientific software development and improved practices.  Focusing on improved developer productivity and software sustainability is both urgent and essential.

  This tutorial will provide information and illustrative use cases of software practices, processes, and tools explicitly tailored to enhance reproducibility in computational science.   We discuss practices that are relevant for projects of all sizes, with emphasis on complex workflows and reproducible science.  Topics include software design, software testing, collaborative development, and methodologies for running reproducible computational experiments. 
#
# This is a more or less typical collection of artifacts for tutorials.
# Comment out anything that isn't (yet) available.
# If you want to list the conference registration page, comment it out
# after registration closes or after the event, when it is no longer useful.
#
artifacts:
  - label: Tutorial Webpage
    bsswt-event-label: 2024-06-18-acmrep
#  - label: Recording
#    format: YouTube recording
#    url: https://youtu.be/7G2jjJ403gY
#  - label: Presentation Slides
#    format: FigShare
#    doi: 10.6084/m9.figshare.25686426
#    status: reserved
# - label: Hands-On Code Repository
#   format: GitHub
#   gh-repo: bssw-tutorial/hello-numerical-world-2022-05-02-ecpam
#
# This is a standard collection of deadlines we've encountered historically
# Add due dates where appropriate. Those without will be ignored
# Responsible refers to the (set of) github ids that will be assigned to
# generated issues. Usually these are organizer-ids, presenter-ids, or
# helper-ids as set above.  "by-presentation" is a special value indicating
# that responsibilities should be assigned based on the presenters liseted
# in the agenda.
#
deadlines:
  - label: internal-presentations
    due: 
    responsible: [by-presentation]
  - label: internal-resource-links
    due: 
    responsible: [by-presentation]
  - label: venue-presentations-initial
    due: 
    responsible: [organizer-ids]
  - label: venue-presentations-final
    due: 2024-06-17
    responsible: [organizer-ids]
  - label: internal-consents
    due:
    responsible: [presenter-ids, helper-ids]
  - label: venue-consents
    due: 
    responsible: [organizer-ids]
  - label: internal-recordings
    due: 
    responsible: [by-presentation]
  - label: venue-recordings
    due: 
    responsible: [organizer-ids]

---

