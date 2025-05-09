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
title: "Better Scientific Software"
title-type: "tutorial"
#title-url:
#
# Presentation date and time.
# enddate is optional for one-day events
# time should include timezeone explicitly
# We don't currently handle tutorials that occur at *different times* on multiple days
#
startdate: "2020-02-04"
#enddate:
#time: 2:30 pm - 4:00 pm EDT
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
# presenter-ids: [bernhold, adubey64, jwillenbring]
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
  - name: James M.  Willenbring
    affiliation: "Sandia National Laboratories"
    short-affil: "SNL"
    pronouns: "he/him"
    github-id: jwillenbring
#
description: |
  Producing scientific software is a challenge.  The Exascale Computing Project, in particular, encompasses the confluence of disruptive changes in computing architectures and new opportunities (and demands) for greatly improved simulation capabilities, especially through coupling physics and scales.  At the same time, computational science and engineering (CSE), as well as other areas of science, are experiencing increasing focus on scientific reproducibility and software quality.

  Computer architecture changes require new software design and implementation strategies, including significant refactoring of existing code. Reproducibility demands require more rigor across the entire software endeavor. Code coupling requires aggregate team interactions including integration of software processes and practices.  These challenges demand large investments in scientific software development and improved practices.  Focusing on improved developer productivity and software sustainability is both urgent and essential.

  This half-day tutorial distills multi-project and multi-years experience from members of the IDEAS Productivity project and the creators of the BSSw.io community website. The tutorial will provide information about software practices, processes, and tools explicitly tailored for CSE. Topics to be covered include: Agile methodologies and tools, software design and refactoring, testing and test-driven development (TDD), and Git workflows for teams. Material will be mostly at the beginner and intermediate levels. There will also be opportunities to discuss topics raised by the audience.

# This is a more or less typical collection of artifacts for tutorials.
# Comment out anything that isn't (yet) available.
# If you want to list the conference registration page, comment it out
# after registration closes or after the event, when it is no longer useful.
#
artifacts:
  - label: Tutorial Webpage
    bsswt-event-label: 2020-02-04-ecpam
  - label: Presentation Slides
    format: FigShare
    doi: 10.6084/m9.figshare.11786868
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

