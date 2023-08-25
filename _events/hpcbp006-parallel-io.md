---
startdate: "2016-07-28"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-Classic"
link-id: webinar006
#
presenters:
  - name: Feiyi Wang
    affiliation: Oak Ridge Leadership Computing Facility
    github-id: fwang2
    bio: "Feiyi Wang received his Ph.D. in Computer Engineering from North
Carolina State University (NCSU). Before he joined Oak Ridge National
Laboratory as research scientist, he worked at Cisco Systems and
Microelectronic Center of North Carolina (MCNC) as a lead developer
and principal investigator for several DARPA-funded projects.  His
current research interests include high performance storage system,
parallel I/O and file systems, fault tolerance and system simulation,
and scientific data management and integration.  Dr. Wang is a Joint
Faculty Professor at EECS Department of University of Tennessee and a
senior member of IEEE."
#
webinar-id: 6
date: 2016-07-28T13:00-0500
title: "An Introduction to High-Performance Parallel I/O"
presenter-ids: [wang-feiyi]
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: amknrPhFs-8
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2018/03/webinar006-2016_HPC_IO_Intro.pdf
#
location: online
#
---
Parallel data management is a complex problem at large-scale HPC
environments. The HPC I/O stack can be viewed as a multi-layered cake
and presents an high-level abstraction to the scientists. While this
abstraction shields the users from many of the I/O system details, it
is very hard to obtain parallel I/O performance or functionality
without understanding the end-to-end hierarchical I/O stack in today’s
modern complex HPC environments. This talk will introduce the basic
parallel I/O concepts and will provide guidelines on obtaining better
I/O performance on large-scale parallel platforms.
