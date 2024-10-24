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
title: "Better Scientific Software"
title-type: "tutorial"
#title-url:
#
# Presentation date and time.
# enddate is optional for one-day events
# time should include timezeone explicitly
# We don't currently handle tutorials that occur at *different times* on multiple days
#
startdate: "2019-01-14"
#enddate:
# time: 2:30 pm - 4:00 pm EDT
#
# Venue information
#
venue: "Exascale Computing Project Annual Meeting"
#venue-type: "meeting" # redundant with the venue name
#venue-url:
location: "Houston, Texas"
#
# Staffing information
# organizer-ids will be assigned the issues that presenter-ids are not doing, basically
#
organizer-ids: [bernhold]
# presenter-ids: [bernhold, adubey64, jared321]
#helper-ids:
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
  - name: Jared O'Neal
    affiliation: "Argonne National Laboratory"
    short-affil: "ANL"
    pronouns: "he/him"
    github-id: jared321
#
description: |
  The computational science and engineering (CSE) community is in the midst of an extremely challenging period created by the confluence of disruptive changes in computing architectures, demand for greater scientific reproducibility, and new opportunities for greatly improved simulation capabilities, especially through coupling physics and scales.  Computer architecture changes require new software design and implementation strategies, including significant refactoring of existing code. Reproducibility demands require more rigor across the entire software endeavor. Code coupling requires aggregate team interactions including integration of software processes and practices.  These challenges demand large investments in scientific software development and improved practices.  Focusing on improved developer productivity and software sustainability is both urgent and essential. We propose a half day tutorial that distills multi-project and multi-years experience from members of the IDEAS project, and creators of the [BSSw.io](https://bssw.io/) community website.

  This tutorial will provide information and hands-on experience with software practices, processes, and tools explicitly tailored for CSE.  Goals are improving the productivity of those who develop CSE software and increasing the sustainability of software artifacts.  We discuss practices that are relevant for projects of all sizes, with emphasis on small teams, and on aggregate teams composed of small teams.  Topics include reasons and motivation for caring about software productivity in science teams, effective models, tools, and processes for small teams (including agile workflow management), reproducibility, and scientific software testing and verification (including automated testing and continuous integration), and refactoring.

# This is a more or less typical collection of artifacts for tutorials.
# Comment out anything that isn't (yet) available.
# If you want to list the conference registration page, comment it out
# after registration closes or after the event, when it is no longer useful.
#
artifacts:
  - label: Tutorial Webpage
    bsswt-event-label: 2019-01-14-ecpam
  - label: Presentation Slides
    format: FigShare
    doi: 10.6084/m9.figshare.7581746
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

