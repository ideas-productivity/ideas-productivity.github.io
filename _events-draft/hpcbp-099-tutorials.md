---
startdate: "2026-08-12"
time: "1:00pm - 2:00pm EDT" # Ensure that time zone is correct with respect to standard/daylight time
#
title: 'User-Facing Tutorials as Code: Reproducible and Reliable Tutorials with CI/CD'
#
presenters:
  - name: Brigitta Sipőcz
    affiliation: "Caltech/IPAC"
    github-id: bsipocz
    bio: |
       Brigitta Sipőcz is an astronomer turned Research Software Engineer. She works at Caltech/IPAC to build and improve tools, e.g. Python libraries and science platforms to provide ways to access data in the NASA/IPAC Infrared Science Archive. Prior joining IPAC she was DiRAC Fellow in the data engineering team at the Institute for Data Intensive Research in Astrophysics and Cosmology in Seattle. She is a developer and maintainer of several open source astronomy libraries and their infrastructure (e.g. astroML, astroquery, astropy) and she enjoys contributing to upstream projects as well. She has a keen interest in finding ways to promote the open development model and make tools more sustainable. She is a fellow of the Software Sustainability Institute as well as a 2025 Better Scientific Software Fellow.
#
bsswio-topics: ["documentation", "reproducibility", "continuous integration testing", "online learning"]
registration-url: https://www.zoomgov.com/meeting/register/ugpHzidAR62enyg3BkMP7g
#
# artifacts:
#   - label: Recording
#     format: YouTube
#     yt-video-id: 9Mp9SbA0fdU
#   - label: Slides
#     format: PDF
#     url: https://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-099-tutorials.pdf
#   - label: Q&A
#     format: PDF
#     url: https://ideas-productivity.org/assets/artifacts/hpcbp/hpcbp-099-tutorials-qa.pdf
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
topic: "reproducible and reliable user-facing tutorials with CI/CD"
short-description: |
  User-facing tutorials typically combine code, narrative text, execution results, and visualizations.  This talk presents best practices for maintaining reliable and reproducible executable tutorials.  I'll discuss the practices we've adopted for Python tutorials at the NASA/IPAC Infrared Science Archive as well as for Python libraries such as Numpy and NetworkX.
---
User-facing tutorials typically combine code, narrative text, execution results, and visualizations. However, the target audience for these tutorials can vary significantly. Some tutorials serve as documentation for libraries, accessed by users during asynchronous learning, while others are designed for one-off workshops deployed on specific scientific platforms. This talk presents best practices for maintaining reliable and reproducible executable tutorials, developed as part of a Scientific Python Ecosystem Coordination (SPEC) document. These guidelines distinguish between different types of tutorials and workshop materials, offering targeted recommendations for each category. I will demonstrate an example repository that we've created as a template and showcase our implementation of best practices for Jupyter-based tutorials in core scientific Python libraries such as NumPy and NetworkX. I'll also discuss the practices we've adopted for Python tutorials at the NASA/IPAC Infrared Science Archive. The presentation focuses specifically on our ecosystem for maintaining, testing, and deploying tutorials to the scientific user community. In our approach, we treat tutorials as we do open source library code: testing them through automated and regular CI/CD processes while presenting them in an aesthetically pleasing, user-friendly format.
