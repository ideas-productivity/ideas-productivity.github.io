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
title: "Better Scientific Software"
title-type: "tutorial"
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
startdate: "2020-03-05"
#enddate: 
#time: "9:30 am - 4:45 pm CDT"
#
# Venue information
#
# Planned: venue, [venue-type], [venue-url], location
# Scheduled: same
#
venue: "RF SciDAC"
venue-type: "workshop"
#venue-url: https://extremecomputingtraining.anl.gov/
location: "Knoxville, Tennessee"
#
# Staffing information
# organizer-ids will be assigned the issues that presenter-ids are not doing, basically
#
# Planned: organizer-ids, [presenter-ids], [helper-ids]
# Scheduled: organizer-ids, presenter-ids, [helper-ids]
#
organizer-ids: [bernhold]
# presenter-ids: [bernhold]
# helper-ids: 
presenters:
  - name: David E. Bernholdt
    affiliation: "Oak Ridge National Laboratory"
    short-affil: "ORNL"
    pronouns: "he/him"
    github-id: bernhold
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
    bsswt-event-label: 2020-03-05-rfscidac
  - label: Presentation Slides
    format: FigShare
    doi: 10.6084/m9.figshare.11918397
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

