---
# Main data file for BSSw tutorial events
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
# Commentary notes indicate fields that are
# required (plain text) and optional (bracketed text)
# in the "planned" and "scheduled" states.
#
# Basic tutorial information
#
# Planned: title, [title-type], [title-url]
# Scheduled: same
#
title: "Software Productivity and Sustainability"
title-type: "track"
#title-url:
#
# Presentation date and time.
# enddate is optional for one-day events
# time should include timezeone explicitly
# We don't currently handle tutorials that occur at *different times* on multiple days
#
# Planned: startdate, [enddate], [time]
#   Note: at the "planned" stage, enddate can be used with date to specify
#   the range of dates in which the tutorial *could* take place.
# Scheduled: startdate, [enddate], time
#   Unless the tutorial occurs over multiple days, enddate is not
#   needed for tutorials in the "scheduled" stage.
#
startdate: "2020-08-06"
#enddate: 
time: "9:30 am - 4:45 pm CDT (UTC-5)"
#
# Venue information
#
# Planned: venue, [venue-type], [venue-url], location
# Scheduled: same
#
venue: "Argonne Training Program on Extreme-Scale Computing"
venue-type: "summer school"
venue-url: https://extremecomputingtraining.anl.gov/
location: "online"
#
# Staffing information
# organizer-ids will be assigned the issues that presenter-ids are not doing, basically
#
# Planned: organizer-ids, [presenter-ids], [helper-ids]
# Scheduled: organizer-ids, presenter-ids, [helper-ids]
#
organizer-ids: [adubey64, bernhold]
# presenter-ids: [bernhold, adubey64, markcmiller86, riley-katherine, jwillenbring]
# helper-ids: 
presenters:
  - name: David E. Bernholdt
    affiliation: "Oak Ridge National Laboratory"
    short-affil: "ORNL"
    pronouns: "he/him"
    github-id: bernhold
  - name: Anshu Dubey
    affiliation: "Argonne National Laboratory"
    short-affil: "ANL"
    pronouns: "she/her"
    github-id: adubey64
  - name: Mark C. Miller
    affiliation: "Lawrence Livermore National Laboratory"
    short-affil: "LLNL"
    pronouns: "he/him"
    github-id: markmiller86
  - name: Katherine Riley
    affiliation: "Argonne National Laboratory"
    short-affil: "ANL"
    pronouns: "she/her"
    github-id: riley-katherine
  - name: James M.  Willenbring
    affiliation: "Sandia National Laboratories"
    short-affil: "SNL"
    pronouns: "he/him"
    github-id: jwillenbring
#
description: "The BSSw tutorial focuses on issues of developer productivity, software sustainability, and reproducibility in scientific research software, particularly targeting high-performance computers."
#
# This is a more or less typical collection of artifacts for tutorials.
# Comment out anything that isn't (yet) available.
# If you want to list the conference registration page, comment it out
# after registration closes or after the event, when it is no longer useful.
#
# Planned: [artifacts]
# Scheduled: artifacts
#   By the time of delivery, the doi should be set
#
artifacts:
  - label: Tutorial Webpage
    bsswt-event-label: 2020-08-06-atpesc
#  - label: Conference Registration
#    url: 
  # - label: Recordings
  #   format: YouTube playlist
  #   url: https://youtube.com/playlist?list=PLuWzStas9iWHlsWNBAZG63zHargIRIPE7
  - label: Playlist
    format: YouTube
    yt-playlist-id: PLuWzStas9iWHlsWNBAZG63zHargIRIPE7
  - label: Presentation Slides
    format: FigShare
    doi: 10.6084/m9.figshare.12719834
  - label: Hands-On Code Repository
    format: GitHub
    gh-repo: betterscientificsoftware/hello-numerical-world-atpesc-2020
#
# This is a standard collection of deadlines we've encountered historically
# Add due dates where appropriate. Those without will be ignored
# Responsible refers to the (set of) github ids that will be assigned to
# generated issues. Usually these are organizer-ids, presenter-ids, or
# helper-ids as set above.  "by-presentation" is a special value indicating
# that responsibilities should be assigned based on the presenters liseted
# in the agenda.
#
# Planned: [deadlines]
# Scheduled: deadlines
#
deadlines:
  - label: internal-presentations
    due: 2022-07-27
    responsible: [by-presentation]
  - label: internal-resource-links
    due: 2022-08-05
    responsible: [by-presentation]
  - label: venue-initial-presentations
    due: 
    responsible: [organizer-ids]
  - label: venue-final-presentations
    due: 
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
