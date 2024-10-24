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
title: "Developing a Testing and Continuous Integration Strategy for your Team"
title-type: "tutorial"
#title-url:
#
# Presentation date and time.
# enddate is optional for one-day events
# time should include timezeone explicitly
# We don't currently handle tutorials that occur at *different times* on multiple days
#
startdate: "2022-05-02"
#enddate:
time: 2:30 pm - 4:00 pm EDT
#
# Venue information
#
venue: "Exascale Computing Project Annual Meeting"
#venue-type: "meeting" # redundant with the venue name
#venue-url:
location: Online
#
# Staffing information
# organizer-ids will be assigned the issues that presenter-ids are not doing, basically
#
organizer-ids: [bernhold]
# presenter-ids: [jarrah42, frobnitzem]
#helper-ids:
presenters:
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
  A thorough and robust testing regime is central to the productive development, evolution, and maintenance of quality, trustworthy scientific software. Continuous integration, though much discussed, is just one element of such a testing regime.  Most project teams feel that they could (and should) do a “better job” of testing.  In many cases, designing and implementing a strong testing strategy can seem so daunting that it is hard to know where to start.

  In this tutorial, which is aimed at those with beginner to intermediate levels of comfort with testing and continuous integration, we will briefly review the multiple motivations for testing, and the different types of tests that address them.  We’ll discuss some strategies for testing complex software systems, and how continuous integration testing fits into the larger picture.  Accompanying hands-on activities, available for self-study, will demonstrate how to get started with a very simple level of CI testing.

# This is a more or less typical collection of artifacts for tutorials.
# Comment out anything that isn't (yet) available.
# If you want to list the conference registration page, comment it out
# after registration closes or after the event, when it is no longer useful.
#
artifacts:
  - label: Tutorial Webpage
    bsswt-event-label: 2022-05-02-ecpam
#  - label: Conference Registration
#    url: 
  - label: Playlist
    format: YouTube
    yt-playlist-id: PLuWzStas9iWFiWGCw7rC8Y-rG4KtPa39I
  - label: Presentation Slides
    format: FigShare
    doi: 10.6084/m9.figshare.19608927
  - label: Hands-On Code Repository
    format: GitHub
    gh-repo: bssw-tutorial/hello-numerical-world-2022-05-02-ecpam
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
    due: 2022-04-27
    responsible: [by-presentation]
  - label: internal-resource-links
    due: 2022-04-28
    responsible: [by-presentation]
  - label: venue-presentations
    due: 2022-04-28
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

