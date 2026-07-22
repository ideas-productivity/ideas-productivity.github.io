---
startdate: "2026-09-02"
time: "1:00pm - 2:00pm EDT" # Ensure that time zone is correct with respect to standard/daylight time
#
title: 'Rapid Development of a High-Performance Applications using Python'
#
presenters:
  - name: Joanna Piper Morgan
    affiliation: "Nuclear Criticality Safety Division, Lawrence Livermore National Lab"
    github-id: jpmorgan98
    bio: |
      Joanna Morgan is a post-doctoral scholar at LLNL designing critical nuclear experiments for nuclear data and code validation. Before starting at LLNL, she was a PhD student developing MC/DC at Oregon State University. Joanna’s research include methods development (both deterministic (SN) and Monte Carlo simulations) for the time dependent radiation transport equation, verification and validation, and open-source software development. See more at <https://jpmorgan98.github.io/>.
#
bsswio-topics: ["high-preformance computing (hpc)", "software engineering", "programming languages", "online learning"]
registration-url: https://www.zoomgov.com/meeting/register/QD2cLY8xSKKvzIbpexqnXw
#
# artifacts:
#   - label: Recording
#     format: YouTube
#     yt-video-id: 9Mp9SbA0fdU
#   - label: Slides
#     format: PDF
#     url: https://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-100-python.pdf
#   - label: Q&A
#     format: PDF
#     url: https://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-100-python-qa.pdf
#
# Items that change rarely
#
qa-public-url: http://bit.ly/hpc-bp-qa
survey-public-url: http://bit.ly/hpc-bp-feedback
#
location: Online
#
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "PESO"
#
topic: "rapid development of high-performance python applications"
short-description: |
  We describe how we use Python, Numba, and our own in house event scheduling software to separate the numerical methods developer from the software engineering, allowing the rapid development of HPC applications.
---
Scientific research codes running problems that demand HPC have a human resources problem: the physicist/engineer who develops numerical methods, and the software engineer who develops HPC code for CPUs and GPUs, are the same person. This often means implementing novel numerical methods for HPC applications can take years to implement and test at scale. In this talk we describe how we used Python, Numba, and our own in house event scheduling software to separate the numerical methods developer from the software engineering. We will detail our JIT compilation structure for CPUs and GPUs (both NVIDIA and AMD), technical roadblocks, and lessons learned from this software engineering scheme in the development of the MC/DC Monte Carlo neutronics code. We will also briefly mention how this workflow (conceived and designed before the broad acceptance of LLM) fits into a research environment increasingly supported by AI tools.
