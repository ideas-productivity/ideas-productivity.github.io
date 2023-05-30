---
startdate: "2023-08-11"
time: "8:30 am - 9:00 pm CDT (UTC-5)"
title: "Software Productivity and Sustainability track @ Argonne Training Program on Extreme-Scale Computing summer school"
type: Tutorial
series: 
  - "BSSw Tutorials"
meta1-name: "Series"
meta1-value: "<a href='/series/bssw-tutorials'>BSSw Tutorials</a>"
subevent: false
published: true

presenter: David E. Bernholdt (Oak Ridge National Laboratory), Anshu Dubey (Argonne National Laboratory), Todd Gamblin (Lawrence Livermore National Laboratory), Jared O'Neal (Argonne National Laboratory), and Boyana R. Norris (University of Oregon)


# # Main data file for BSSw tutorial events
# #
# # Commentary notes indicate fields that are
# # required (plain text) and optional (bracketed text)
# # in the "planned" and "scheduled" states.
# #
# # Basic tutorial information
# #
# # Planned: title, [title-type], [title-url]
# # Scheduled: same
# #
# title: "Software Productivity and Sustainability"
# title-type: "track"
# #title-url:
# #
# # Presentation date and time.
# # end-date is optional for one-day events
# # time should include timezeone explicitly
# # We don't currently handle tutorials that occur at *different times* on multiple days
# #
# # Planned: date, [end-date], [time]
# #   Note: at the "planned" stage, end-date can be used with date to specify
# #   the range of dates in which the tutorial *could* take place.
# # Scheduled: date, [end-date], time
# #   Unless the tutorial occurs over multiple days, end-date is not
# #   needed for tutorials in the "scheduled" stage.
# #
# date: 2022-08-11
# #end-date: 
# time: "8:30 am - 9:00 pm CDT (UTC-5)"
# #
# # Venue information
# #
# # Planned: venue, [venue-type], [venue-url], location
# # Scheduled: same
# #
# venue: "Argonne Training Program on Extreme-Scale Computing"
# venue-type: "summer school"
# venue-url: https://extremecomputingtraining.anl.gov/
# location: "St. Charles, Illinois"
# #
# # Staffing information
# # organizer-ids will be assigned the issues that presenter-ids are not doing, basically
# #
# # Planned: organizer-ids, [presenter-ids], [helper-ids]
# # Scheduled: organizer-ids, presenter-ids, [helper-ids]
# #
# organizer-ids: [adubey64, bernhold]
# presenter-ids: [bernhold, adubey64, tgamblin, jared321, brnorris03]
# helper-ids: 
# #
# # This is a more or less typical collection of artifacts for tutorials.
# # Comment out anything that isn't (yet) available.
# # If you want to list the conference registration page, comment it out
# # after registration closes or after the event, when it is no longer useful.
# #
# # Planned: [artifacts]
# # Scheduled: artifacts
# #   By the time of delivery, the doi should be set
# #
# artifacts:
# #  - label: Conference Registration
# #    url: 
#   - label: Recordings
#     format: YouTube playlist
#     url: https://youtube.com/playlist?list=PLuWzStas9iWHlsWNBAZG63zHargIRIPE7
#   - label: Presentation Slides
#     format: FigShare
#     doi: 10.6084/m9.figshare.20416215
# #  - label: Hands-On Code Repository
# #    format: GitHub
# #    gh-repo: bssw-tutorial/hello-numerical-world-2022-08-11-atpesc
# #
# # This is a standard collection of deadlines we've encountered historically
# # Add due dates where appropriate. Those without will be ignored
# # Responsible refers to the (set of) github ids that will be assigned to
# # generated issues. Usually these are organizer-ids, presenter-ids, or
# # helper-ids as set above.  "by-presentation" is a special value indicating
# # that responsibilities should be assigned based on the presenters liseted
# # in the agenda.
# #
# # Planned: [deadlines]
# # Scheduled: deadlines
# #
# deadlines:
#   - label: internal-presentations
#     due: 2022-07-27
#     responsible: [by-presentation]
#   - label: internal-resource-links
#     due: 2022-08-05
#     responsible: [by-presentation]
#   - label: venue-initial-presentations
#     due: 
#     responsible: [organizer-ids]
#   - label: venue-final-presentations
#     due: 
#     responsible: [organizer-ids]
#   - label: internal-consents
#     due:
#     responsible: [presenter-ids, helper-ids]
#   - label: venue-consents
#     due: 
#     responsible: [organizer-ids]
#   - label: internal-recordings
#     due: 
#     responsible: [by-presentation]
#   - label: venue-recordings
#     due: 
#     responsible: [organizer-ids]
---
<!-- Event Sidebar -->
{% 	include _layout/sidebar-events.html 
  startdate = page.startdate
  time = page.time
meta1-name = "Presenter"
meta1-value = page.presenter
meta2-name = "Recordings"
meta2-value = "<a href='https://youtube.com/playlist?list=PLuWzStas9iWHlsWNBAZG63zHargIRIPE7'>YouTube playlist</a>"
meta3-name ="Presentation Slides"
meta3-value = "<a href='https://doi.org/10.6084/m9.figshare.20416215'>FigShare</a>"
meta4-name = "Tutorial Archive"
meta4-value = "<a href='https://bssw-tutorial.github.io/2022-08-11-atpesc/'>webpage</a>"
%}

# Presenters

{{ page.presenter }}

# Description

The BSSw tutorial focuses on issues of developer productivity, software sustainability, and reproducibility in scientific research software, particularly targeting high-performance computers.

{% comment %}
{%  include text-biglink.html
    blurb = "Register for the Event"
    url = "https://www.isc-hpc.com/registration-2023.html"
%}
{% endcomment %}

# Filler so sidebar fits

*Unless we make the main body of the page longer, the sidebar will slide under the footer and off the bottom of the page.*

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
