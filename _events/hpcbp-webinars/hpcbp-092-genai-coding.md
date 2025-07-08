---
startdate: "2025-07-09"
time: "1:00 pm - 2:00 pm EDT" # Ensure that time zone is correct with respect to standard/daylight time
#
title: "Using Generative AI for Coding Tasks in Scientific Software"
#
presenters:
  - name: Anshu Dubey
    affiliation: Argonne National Laboratory
    github-id: adubey64
    bio: |
      Anshu Dubey is a Senior Computational Scientist in the Mathematics and Computer Science Division of Argonne National Laboratory with extensive experience in design, architecture and sustainability of multiphysics scientific software used on high performance computing platforms.  She is the software architect and lead developer of Flash-X, a multiphysics software system  designed for heterogeneous architectures.
  - name: Akash Dhruv
    affiliation: Argonne National Laboratory
    github-id: akashdhruv
    bio: |
      Akash Dhruv is an Assistant Computer Scientist in the Mathematics and Computer Science Division of Argonne National Laboratory. His research focus is on the computational fluid dynamics of multiphase systems and the use of generative AI in science.
#
bsswio-topics: ["software engineering", "testing", "refactoring", "online learning"]
registration-url: https://www.zoomgov.com/meeting/register/1H75o2gJSoe2NQ9UPHvjgQ
#
artifacts:
  # - label: Recording
  #   format: YouTube
  #   yt-video-id: i-oAXxpsMew
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/hpcbp-092-genai-coding.pdf
  # - label: Q&A
  #   format: PDF
  #   url: /assets/artifacts/hpcbp/hpcbp-092-genai-coding-qa.pdf
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
topic: generative AI for coding tasks
short-description: |
  Generative AI has great promise to improve developer productivity in coding tasks, especially if a robust verification methodology is present, and there is a human in the loop. In this webinar we will share our insights from using generative AI for a variety of coding tasks in scientific computing.
---
The advent of large language models (LLMs) has generated a great deal of interest in their use for coding tasks. However, a well-known limitation of LLMs is that there are no guarantee of either truthfulness or correctness for the generated results. Therefore, we are not yet in a position where human intervention can be eliminated from these coding tasks, particularly in scientific computing where training data has been sparse and software is exploratory. We have been exploring the use for generative AI for a diverse set of tasks in scientific software development, including translation from Fortran to C++, writing code for a new algorithm, and refactoring existing code. A robust verification methodology has emerged as the most important component of accomplishing any coding task reliably with LLM assistance. In this webinar we will share our insights from our explorations.
