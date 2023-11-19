---
startdate: "2020-10-14"
time: "01:00 pm - 02:00 pm EDT"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar045
#
presenters:
  - name: Cindy Rubio-Gonzalez
    affiliation: University of California, Davis
    github-id: crubiog
    bio: "Cindy Rubio-Gonzalez is an Associate Professor of Computer Science at the University of California, Davis. Prior to joining UC Davis, she was a Postdoctoral Researcher in the EECS Department at the University of California, Berkeley. She received her Ph.D. in Computer Science from the University of Wisconsin–Madison in 2012. Dr. Rubio’s work spans the areas of Programming Languages and Software Engineering, with a focus on program analysis for automated bug finding and program optimization. She is particularly interested in the reliability and performance of systems software and scientific computing applications. Dr. Rubio is a Better Scientific Software Fellow 2020, and a recipient of a DOE Early Career Award 2019, an NSF CAREER award 2018, a Hellman Fellowship 2017, and a UC Davis CAMPOS Faculty Award 2014. Dr. Rubio earned her M.S. in Computer Science from the University of Wisconsin–Milwaukee and her B.S. in Computer Engineering from Saltillo Institute of Technology (Mexico). She also holds a B.M. in Piano Performance from the Autonomous University of Coahuila (Mexico)."
#
webinar-id: 45
date: 2020-10-14T13:00-0400
title: "Scalable Precision Tuning of Numerical Software"
presenter-ids: [rubiogonzalez-cindy]
registration-url: https://exascaleproject.zoomgov.com/meeting/register/vJIsfuGoqDkjGLi_8sVyWQSFEsaXHEL6EM4
ecp-abbreviation: scalableprecisiontuning
vtc-url: https://exascaleproject.zoomgov.com/w/1619806292?tk=U_HMP3itheXTfY-g4GfeKYMU6NVHNVKVpN-DhvNIshk.DQIAAAAAYIxIVBZRRkw3RHA0S1FsT01qcjBkcW56cnBRAAAAAAAAAAAAAAAAAAAAAAAAAAAA 
vtc-session: "161 980 6292"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/HPCBP-survey-201014
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: jm4zCqjA2Z0
  - label: Slides
    format: PDF
    url: /assets/artifacts/hpcbp/webinar045-precisiontuning.pdf
  - label: Q&amp;A
    format: PDF
    url: /assets/artifacts/hpcbp/webinar045-precisiontuning-qa.pdf
#
location: online
#
---
The use of numerical software has grown rapidly over the past few years, providing the foundation for a large variety of applications including scientific software and machine learning. Given the variety of numerical errors that can occur, floating-point programs are difficult to write, test and debug. One common practice among developers is to use the highest available precision when allocating variables. While more robust, this can degrade program performance significantly. This webinar describes our research on developing tools to assist programmers in tuning the precision of their floating-point programs. These tools conduct a data-driven approach to search over the types of floating-point variables to lower their precision subject to accuracy constraints and performance goals. In the last part of the webinar, I will discuss challenges and opportunities for scalable precision tuning of large HPC applications.
