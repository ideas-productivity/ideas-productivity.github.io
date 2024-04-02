---
startdate: "2024-05-15"
time: "1:00 pm - 2:00 pm EDT" # Ensure that time zone is correct with respect to standard/daylight time
#
title: "Getting it Right: System Testing of Scientific Software"
#
presenters:
  - name: Myra Cohen
    affiliation: Iowa State University
    github-id: https://faculty.sites.iastate.edu/mcohen/
    bio: |
      Myra Cohen is a professor of computer science at Iowa State University, where she holds the Lahn and Oahn Chair in software engineering. She is also a 2023 Better Scientific Software Fellow. Her research expertise is in systems software testing, with an emphasis on systems that are highly configurable (or customizable).  She also has a strong interest in synergies between synthetic and systems biology and software engineering, which have many parallels and can benefit from similar testing approaches; she uses many bio-inspired algorithms in her research. She is an IEEE Senior Member and an ACM Distinguished Scientist.
#
bsswio-topics: ["testing", "online learning"]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJItcemvpj8iG8vyauLJ4M6hukBbw4D3fxM
#
# artifacts:
#   - label: Recording
#     format: YouTube
#     yt-video-id: NDgZ8Y74ISg
#   - label: Slides
#     format: PDF
#     url: /assets/artifacts/hpcbp/hpcbp-083-gettingitright.pdf
#   - label: Q&A
#     format: PDF
#     url: /assets/artifacts/hpcbp/hpcbp-083-gettingitright-qa.pdf
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
  - "COLABS"
---
Testing software to ensure its correctness is a challenging yet critical task that can consume more than 50% of the software lifecycle. Over the past decade, we have built software testing practices into our development frameworks and are embracing the use of unit tests and continuous integration--testing as we code. However, these types of tests focus heavily on covering individual code elements and may miss important system-level requirements. In scientific software, we often model complex behaviors, and our applications are heavily data-driven and configurable. In addition, we have added machine learning components into this mix. Together, this situation can leave our systems vulnerable to subtle, incorrect behaviors, which can impact our scientific results. In this talk, I will discuss system testing for scientific software, present some challenges, such as configurability, and present some techniques we can use to help improve the testing process.
