---
#
# The following information is used for the ideas-productivity.org website only.
# It is not used in the bssw-tutorials.github.io website.
#
type: Tutorial
series:
  - "BSSw Tutorials"
activities:
  - "IDEAS-ECP"
# parent-event-name: ISC High Performance 2022
# parent-event-file: parentconf-2022-05-29-isc22
#
# Basic tutorial information
#
title: "Software Practices for Better Science: Testing, Reproducibility, and Documentation"
title-type: "tutorial"
#title-url:
#
# Presentation date and time.
# enddate is optional for one-day events
# time should include timezeone explicitly
# We don't currently handle tutorials that occur at *different times* on multiple days
#
startdate: "2023-02-06"
#enddate:
time: 3:00 pm - 6:15 pm EST
#
# Venue information
#
venue: "Exascale Computing Project Tutorial Days"
#venue-type: "meeting" # redundant with the venue name
venue-url: https://www.exascaleproject.org/event/ecp-tutorial-days/
location: Online
#
# Staffing information
# organizer-ids will be assigned the issues that presenter-ids are not doing, basically
#
organizer-ids: [bernhold]
# presenter-ids: [bernhold, frobnitzem, jarrah42]
#helper-ids:
presenters:
  - name: David E. Bernholdt
    affiliation: "Oak Ridge National Laboratory"
    short-affil: "ORNL"
    pronouns: "he/him"
    github-id: bernhold
  - name: David M. Rogers
    affiliation: "Oak Ridge National Laboratory"
    short-affil: "ORNL"
    pronouns: "he/him"
    github-id: frobnitzem
  - name: Gregory R. Watson
    affiliation: "Oak Ridge National Laboratory"
    short-affil: "ORNL"
    pronouns: "he/him"
    github-id: jarrah42
#
description: |
  As many ECP projects begin their transition from major development towards production science, this tutorial will offer key strategies to help projects improve their science. The tutorial will focus on testing strategies (design and selection in different contexts), reproducibility concerns and the creation of “lab notebook”-style documentation. These practices will provide you and your team detailed information about what to do and why. We’ll offer practical strategies, based on experience in a broad range of projects, that can help improve the effectiveness in going from software to science.

# This is a more or less typical collection of artifacts for tutorials.
# Comment out anything that isn't (yet) available.
# If you want to list the conference registration page, comment it out
# after registration closes or after the event, when it is no longer useful.
#
artifacts:
  - label: Tutorial Webpage
    bsswt-event-label: 2023-02-06-ecpam
  - label: Recording
    format: YouTube
    yt-video-id: 7G2jjJ403gY
  - label: Presentation Slides
    format: FigShare
    doi: 10.6084/m9.figshare.21989507
    status: published
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
    due: 2023-02-02
    responsible: [by-presentation]
  - label: internal-resource-links
    due: 2023-02-03
    responsible: [by-presentation]
  - label: venue-presentations
    due: 2023-02-05
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

