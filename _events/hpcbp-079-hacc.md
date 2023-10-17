---
startdate: "2023-10-11"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar079
#
presenters:
  - name: Esteban Rangel
    affiliation: Argonne National Laboratory
    github-id: steverangel
    bio: "Esteban Rangel is a member of the HACC development team. He joined the Computational Science (CPS) division at Argonne National Laboratory as an Assistant Computational Scientist in 2021. Prior to joining CPS, he was a postdoctoral researcher at the Argonne Leadership Computing Facility (ALCF) working on porting HACC’s hydrodynamics solvers to the Aurora supercomputer. He began contributing to the HACC codebase as a Ph.D. student at Northwestern University, where much of the work towards his thesis was designing and implementing scalable analysis software for N-body cosmological simulations."
#
webinar-id: 79
date: 2023-10-11T13:00-0400
title: "Taking HACC into the Exascale Era: New Code Capabilities, and Challenges"
presenter-ids: [rangel-esteban]
bsswio-topics: [“performance portability”, “software engineering”, "high-performance computing (hpc)", "performance at leadership computing facilities", “online learning”]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJItfuiorj0jEhR5uh36EoYBKMWAqvw3-Sg
ecp-abbreviation: hacc
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-feedback
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: E0sEUKmQagw
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/10/hpcbp-079-hacc.pdf
#   - label: Q&A
#     format: PDF
#     url: http://ideas-productivity.org/wordpress/wp-content/uploads/2023/07/hpcbp-076-cleanssw-qa.pdf
---
HACC (Hardware/Hybrid Accelerated Cosmology Code) is a well-established code within the US Department of Energy community, and with a long history — having run on every flagship computing system for over a decade. Often participating in early-access programs for upcoming systems, an ongoing challenge for HACC developers is to not only contend with state-of-the-art architectures, but also with their initially supported, and often novel, programming models. The increased computing power brought about by today’s exascale systems has allowed HACC to support additional baryonic physics through a newly developed Smoothed Particle Hydrodynamics (SPH) formalism called Conservative Reproducing Kernel (CRK). This webinar will discuss the challenges faced in preparing HACC for multiple exascale systems while simultaneously adding additional code capabilities, with ongoing development, all the while with a central focus on performance.
