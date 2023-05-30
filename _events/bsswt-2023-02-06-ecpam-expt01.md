---
startdate: "2023-02-06"
time: "3:00 pm - 6:15 pm EST (UTC-5)"
title: "Expt. 1: Software Practices for Better Science: Testing, Reproducibility, and Documentation tutorial @ Exascale Computing Project Tutorial Days"
type: Tutorial
series: 
  - "BSSw Tutorials"
meta1-name: "Series"
meta1-value: "<a href='/series/bssw-tutorials'>BSSw Tutorials</a>"
# meta2-name: "Part of"
# meta2-value: "<a href='/events/20230521-isc23-conference'>ISC High Performance 2023</a>"
subevent: false
published: true

presenter: David E. Bernholdt (Oak Ridge National Laboratory), David M. Rogers (Oak Ridge National Laboratory), Gregory R. Watson (Oak Ridge National Laboratory)

sidemeta1-name: "Presenter"
sidemeta1-value: "David E. Bernholdt (Oak Ridge National Laboratory), David M. Rogers (Oak Ridge National Laboratory), Gregory R. Watson (Oak Ridge National Laboratory)"
sidemeta2-name: "Recording"
sidemeta2-value: "<a href='https://www.youtube.com/watch?v=7G2jjJ403gY'>YouTube</a>"
sidemeta3-name: "Presentation Slides"
sidemeta3-value: "<a href='https://doi.org/10.6084/m9.figshare.21989507'>FigShare</a>"
sidemeta4-name: "Tutorial Archive"
sidemeta4-value: "<a href='https://bssw-tutorial.github.io/2023-02-06-ecpam/'>webpage</a>"
# #
# # Basic tutorial information
# #
# title: "Software Practices for Better Science: Testing, Reproducibility, and Documentation"
# title-type: "tutorial"
# #title-url:
# #
# # Presentation date and time.
# # end-date is optional for one-day events
# # time should include timezeone explicitly
# # We don't currently handle tutorials that occur at *different times* on multiple days
# #
# date: 2023-02-06
# #end-date:
# time: 3:00 pm - 6:15 pm EST (UTC-5)
# #
# # Venue information
# #
# venue: "Exascale Computing Project Tutorial Days"
# #venue-type: "meeting" # redundant with the venue name
# venue-url: https://www.exascaleproject.org/event/ecp-tutorial-days/
# location: "online"
# #
# # Staffing information
# # organizer-ids will be assigned the issues that presenter-ids are not doing, basically
# #
# organizer-ids: [bernhold]
# presenter-ids: [bernhold, frobnitzem, jarrah42]
# #helper-ids: [bernhold]
# #
# # This is a more or less typical collection of artifacts for tutorials.
# # Comment out anything that isn't (yet) available.
# # If you want to list the conference registration page, comment it out
# # after registration closes or after the event, when it is no longer useful.
# #
# artifacts:
# #  - label: Tutorial Registration
# #    url: https://docs.google.com/forms/d/e/1FAIpQLSc8jf451DjE3l7iHuN_gIl4ACG_5ntCy9k7ErZSFPHGHVhjBw/viewform
#   - label: Recording
#     format: YouTube recording
#     url: https://youtu.be/7G2jjJ403gY
#   - label: Presentation Slides
#     format: FigShare
#     doi: 10.6084/m9.figshare.21989507
#     status: published
# # - label: Hands-On Code Repository
# #   format: GitHub
# #   gh-repo: bssw-tutorial/hello-numerical-world-2022-05-02-ecpam
# #
# # This is a standard collection of deadlines we've encountered historically
# # Add due dates where appropriate. Those without will be ignored
# # Responsible refers to the (set of) github ids that will be assigned to
# # generated issues. Usually these are organizer-ids, presenter-ids, or
# # helper-ids as set above.  "by-presentation" is a special value indicating
# # that responsibilities should be assigned based on the presenters liseted
# # in the agenda.
# #
# deadlines:
#   - label: internal-presentations
#     due: 2023-02-02
#     responsible: [by-presentation]
#   - label: internal-resource-links
#     due: 2023-02-03
#     responsible: [by-presentation]
#   - label: venue-presentations
#     due: 2023-02-05
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
{% comment %}
{% 	include _layout/sidebar-events.html 
  startdate = page.startdate
  time = page.time
meta1-name = "Presenter"
meta1-value = page.presenter
meta2-name = "Recording"
meta2-value = "<a href='https://www.youtube.com/watch?v=7G2jjJ403gY'>YouTube</a>"
meta3-name ="Presentation Slides"
meta3-value = "<a href='10.6084/m9.figshare.21989507'>FigShare</a>"
meta4-name = "Tutorial Archive"
meta4-value = "<a href='https://bssw-tutorial.github.io/2023-02-06-ecpam/'>webpage</a>"
%}
{% endcomment %}

{%  include media-video.html
    embed-code = "<iframe width='560' height='315' src='https://www.youtube.com/embed/7G2jjJ403gY' title='YouTube video player;' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
%}

# Presenters

{{ page.presenter }}

# Description

As many ECP projects begin their transition from major development towards production science, this tutorial will offer key strategies to help projects improve their science. The tutorial will focus on testing strategies (design and selection in different contexts), reproducibility concerns and the creation of “lab notebook”-style documentation. These practices will provide you and your team detailed information about what to do and why. We’ll offer practical strategies, based on experience in a broad range of projects, that can help improve the effectiveness in going from software to science.

{% comment %}
{%  include text-biglink.html
    blurb = "Register for the Event"
    url = "https://www.isc-hpc.com/registration-2023.html"
%}
{% endcomment %}
