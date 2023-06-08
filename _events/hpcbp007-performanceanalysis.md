---
startdate: "2016-08-09"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-Classic"
link-id: webinar007
#
presenters:
  - name: Jack Deslippe
    affiliation: Lawrence Berkeley National Laboratory
    github-id: jdeslip
#
webinar-id: 7
date: 2016-08-09T13:00-0400
title: Basic Performance Analysis and Optimization – An Ant Farm Approach
presenter-ids: [deslippe-jack]
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: -qxJf6YJ3fc
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2018/03/webinar007-160809-deslippe-antfarm.pdf
---
How is optimizing HPC applications like an Ant Farm? Attend this
presentation to find out. We’ll discuss the basic concepts around
optimizing code for the HPC systems of today and tomorrow. These
systems require codes to effectively exploit both parallelism between
nodes and an ever growing amount of parallelism on-node. We’ll discuss
profiling strategies, tools (for profiling and debugging) and common
issues with both internode communication and on-node parallelism. We
will give an overview of traditional optimizations areas in HPC
applications like parallel IO and MPI strong and weak scaling as well
as topics relevant for modern GPU and many-core systems like
threading, SIMD/AVX, SIMT and effectively using cache and memory
hierarchies. The “Ant Farm” approach places a heavy emphasis on the
roofline performance model and encouraging users to understand the
compute, bandwidth and latency sensitivity of their applications and
kernels through a series of easy to perform experiments and an easy to
follow flow chart. Finally, we’ll discuss what we expect to change in
the optimization process as we move towards exascale computers.
