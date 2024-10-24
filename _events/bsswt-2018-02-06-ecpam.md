---
#
# Basic tutorial information
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
title: "What All Codes Should Do: Overview of Best Practices in HPC Software Development"
title-type: "tutorial"
#title-url:
#
# Presentation date and time.
# enddate is optional for one-day events
# time should include timezeone explicitly
# We don't currently handle tutorials that occur at *different times* on multiple days
#
startdate: "2018-02-06"
#enddate:
# time: 2:30 pm - 4:00 pm EDT
#
# Venue information
#
venue: "Exascale Computing Project Annual Meeting"
#venue-type: "meeting" # redundant with the venue name
#venue-url: 
location: "Knoxville, Tennessee"
#
# Staffing information
# organizer-ids will be assigned the issues that presenter-ids are not doing, basically
#
organizer-ids: [adubey64]
# presenter-ids: [adubey64, maheroux,jared321]
# helper-ids:
presenters:
  - name: Anshu Dubey
    affiliation: "Argonne National Laboratory"
    short-affil: "ANL"
    pronouns: "she/her"
    github-id: adubey64
  - name: Michael A. Heroux
    affiliation: "Sandia National Laboratories"
    short-affil: "SNL"
    pronouns: "he/him"
    github-id: maheroux
  - name: Jared O'Neal
    affiliation: "Argonne National Laboratory"
    short-affil: "ANL"
    pronouns: "he/him"
    github-id: jared321
#
description: |
  The accuracy and reliability of results produced by the scientific software depends not only on the individual components behaving correctly, but also on the validity of their interactions.

  Therefore, a rigorous software process is a critical requirement for scientific productivity using such software.

  However, most science teams struggle to find a good solution for themselves, partly due to lack of training and partly due to lack of resources within the team.

  This tutorial leverages the combined expertise of various IDEAS project members to provide a methodology for devising a software process that meets the needs of individual projects 

#
# This is a more or less typical collection of artifacts for tutorials.
# Comment out anything that isn't (yet) available.
# If you want to list the conference registration page, comment it out
# after registration closes or after the event, when it is no longer useful.
#
artifacts:
  - label: Tutorial Webpage
    bsswt-event-label: 2018-02-06-ecpam
  - label: Presentation Slides
    format: FigShare
    doi: 10.6084/m9.figshare.21799772
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

