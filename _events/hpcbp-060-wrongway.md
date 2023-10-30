---
startdate: "2022-02-16"
time: "01:00 pm - 02:00 pm EST"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar060
#
presenters:
  - name: Philip Roth
    affiliation: Oak Ridge National Laboratory
    github-id: rothpc
    bio: "Philip C. Roth leads the Algorithms and Performance Analysis group within the National Center for Computational Sciences (NCCS) at Oak Ridge National Laboratory (ORNL).  He joined ORNL in 2004 as a member of the Future Technologies group in ORNL’s Computer Science and Mathematics Division, and moved to the NCCS in late 2018.  His research interests include scalable techniques for performance optimization and software characterization, programming models targeting compute accelerators, and emerging technology.  He earned his Ph.D. in Computer Science from the University of Wisconsin-Madison in 2005."
#
webinar-id: 60
date: 2022-02-16T13:00-0500
title: "Wrong Way: Lessons Learned and Possibilities for Using the \"Wrong\" Programming Approach on Leadership Computing Facility Systems"
presenter-ids: [roth-philip]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJItdemtqDkuHAPUcjMhLX_F2JtcHPSNB64
ecp-abbreviation: wrongway
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: AsUAXkw4q88
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp060-wrongway.pdf
#
location: online
#
---
Large scale computing systems such as those deployed and being deployed at U.S. Department of Energy computing facilities rely greatly on compute accelerators (currently graphics processing units, GPUs) for their performance potential. Each of these systems has a small number of natural approaches for representing the code that runs on these accelerators. For instance, for the Oak Ridge Leadership Computing Facility’s Frontier system, the natural approaches include the Heterogeneous-Compute Interface for Portability (HIP) and OpenMP with target offload. But it is often interesting, and sometimes even useful, to consider the impact of using a “wrong” programming approach for a given system. In this webinar, the speaker will present a few of these “wrong” programming approaches for current and near-term future systems, including a discussion of the specific software packages that enable the approach, and lessons learned in cases where the approach has been attempted.
