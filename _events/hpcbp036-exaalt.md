---
startdate: "2020-01-15"
time: "01:00 pm - 02:00 pm EST"
type: Webinar
series:
  - "HPC Best Practices Webinars"
activities:
  - "IDEAS-ECP"
link-id: webinar036
#
presenters:
  - name: Aidan Thompson
    affiliation: Sandia National Laboratories
    bio: "Dr. Thompson earned his undergraduate degree in Chemical Engineering at University College, Dublin, Ireland. He earned his Ph.D in Chemical Engineering at the University of Pennsylvania, 1994 in the area of statistical thermodynamics of complex fluids. Since 1997 he has worked in the Center for Computing Research at Sandia National Laboratories, first as a post-doctoral appointee, and since 2002 as principal member of the technical staff. Throughout that time he has worked as one of the core developers of the LAMMPS molecular dynamics code, while at the same time using it to study the atomic-to-mesoscale behavior of a wide variety of materials, described in over 50 publications. In recent years, frustrated with the limited accuracy of classical potentials, he has become a leading developer of machine-learned interatomic potentials fit to large databases of quantum calculations."
  - name: Stan Moore
    affiliation: Sandia National Laboratories
    github-id: stanmoore1
    bio: "Stan Moore is a computational scientist at Sandia National Laboratories specializing in particle-based simulation methods such as molecular dynamics and direct simulation Monte-Carlo. He is a software developer of the LAMMPS and SPARTA codes, and his research currently focuses on extending particle-based codes to use Sandia’s Kokkos performance portability library to run efficiently on next-generation supercomputing platforms. Stan earned a PhD in chemical engineering from Brigham Young University, where his research focused on developing a new method to predict chemical potential using molecular simulations."
  - name: Rahulkumar Gayatri
    affiliation: National Energy Research Scientific Computing Center
    github-id: rgayatri23
    bio: "Rahulkumar (Rahul) Gayatri is an Application Performance Specialist at NERSC, LBNL. He is an HPC engineer and works closely with the application development teams to optimize compute intensive kernels in their code for future generation architectures. He is currently working with the LAMMPS team in the EXAALT ECP project to optimize the SNAP module for NVIDIA GPUs. He is also interested in testing the efficiency of OpenMP target directives as a paradigm to offload kernels onto GPUs. Rahul obtained his PhD in the field of Parallel Programming Models from Barcelona Supercomputing Center. His research focus was on speculative task execution in OMPSs, a task based programming model."
#
webinar-id: 36
date: 2020-01-15T13:00-0500
title: "Refactoring EXAALT MD for Emerging Architectures"
presenter-ids: [thompson-aidan, moore-stan, gayatri-rahulkumar]
registration-url: https://www.eventbrite.com/e/refactoring-exaalt-md-for-emerging-architectures-tickets-85789477637
ecp-abbreviation: exaalt-md
vtc-url: https://ecptr.webex.com/ecptr/onstage/g.php?MTID=e7647cc0f98a8d0edacdd8e79f9c3b997
vtc-session: "902 755 266"
vtc-password: "ideas"
qa-public-url: http://bit.ly/HPCBP-QA
survey-public-url: http://bit.ly/36VanMG
artifacts:
  - label: Recording
    format: YouTube
    yt-video-id: esEGFyFkVUc
  - label: Slides
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2020/01/webinar036-exaalt.pdf
  - label: Q&A
    format: PDF
    url: http://ideas-productivity.org/wordpress/wp-content/uploads/2020/01/webinar036-exaalt-qa.pdf
---
As part of the DOE Exascale Computing Project, members of the EXAALT project are working to increase the accuracy, time, and length scales of molecular dynamics simulations of materials for fusion energy. Simulations rely on the SNAP machine-learning interatomic potential to accurately capture material properties. The SNAP kernel recursively evaluates a set of complex polynomial functions, requiring many deeply nested loops with irregular loop bounds. Last year, a worrisome trend in the SNAP force kernel was identified. With each new generation of emerging architectures, performance relative to theoretical peak was decreasing, particularly on GPUs. This webinar will discuss the approach used to rewrite the SNAP kernel from the ground up, using more compact memory representation, refactoring the main loop, using sub-kernels to reduce pressure on GPU threads, and improving coalesced memory accesses on the GPU. This work has enabled a spectacular increase of roughly 10x in performance over the baseline implementation of the SNAP benchmark running on NVIDIA V100 GPUs. Extrapolated to the full machine, this predicts an increase of over 100x in the Figure of Merit over the baseline on the ALCF/Mira system, putting EXAALT on track to meeting, and even exceeding performance targets on exascale systems. The webinar will emphasize key strategies and lessons learned in code transitions for emerging architectures.
