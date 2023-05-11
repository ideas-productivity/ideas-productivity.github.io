---

layout: page

title: "IDEAS-Classic"
blurb: "Improving software productivity for terrestrial ecosystem modeling"

---




<!-- Sidebar Nav -->
<!-- ---------------------------------------------------------------------- -->

{% include_relative nav-sidebar current="About" %}

<!-- Content -->
<!-- ---------------------------------------------------------------------- -->

{% 	include media-heroimg.html 
	  source = "ideas-classic/IDEAS-broader-DOE-context.jpg"
	  contain = true
		caption = "IDEAS-Classic in the broader DOE context"
%}

## Mission

The IDEAS-Classic Project (2014-2017) was a partnership between the Offices of Advanced Scientific Computing Research (ASCR) and Biological and Environmental Research (BER) in the DOE’s Office of Science.  Motivated by specific use case requirements for multiphysics and multiscale terrestrial ecosystem modeling, IDEAS-Classic is an ambitious effort to improve the compatibility and usability of important DOE libraries; improve the practices, processes, and tools for scientific software development; and improve community knowledge.

The most important goal of the project is to help move scientific software development toward an approach of building new applications as a composition of reusable, robust, and scalable software components and libraries, using the best available practices and tools.  We want to develop, demonstrate, use, and make possible for others the ability to create and support new applications better, faster, and cheaper.

## Motivation

The scientific software community is facing a crisis created by the confluence of disruptive changes in computing architectures and new opportunities for greatly improved simulation capabilities. New architectures are demanding fundamental algorithm and software refactoring, while at the same time enabling new multiscale and multiphysics modeling, simulation, and analysis. This crisis brings with it a unique opportunity to fundamentally change how scientific software is designed, developed, and supported.

We have assembled an interdisciplinary team that spans leadership of several critical scientific libraries (including **hypre**, **PETSc**, **SuperLU** and **Trilinos**); world-class software engineering programs; developers of critical tools for program understanding, refactoring, transformation, and code generation; and flagship science programs in BER, including three Science Focus Area programs, the Next Generation Ecosystem Experiment (NGEE) Arctic program, and projects funded by the Water Sustainability and Climate program at NSF. This team has both the breadth and the skill to meet this challenge and realize the full potential of emerging extreme-scale systems.

In our project, *Interoperable Design of Extreme-scale Application Software (IDEAS)*, we are developing and demonstrating new approaches for producing, using, and supporting scientific software. We are establishing methodologies and tools that facilitate the delivery of software as reusable, interoperable components. We are defining software lifecycle models that are both flexible and rigorous, acknowledging that scientific software inception occurs in a research environment but must ultimately result in reliable, well-designed, and well-documented software with a full test suite, so that future use and refactoring can be done with confidence.

This approach will address the historical yet unsustainable trend that science applications make modest use of libraries but are otherwise self-contained. Specifically, by supporting suitable levels of autonomy for application developers within a rich ecosystem of interoperable components, productivity gains can be demonstrated across the software ecosystem—with many opportunities to develop and leverage common capabilities. Any consensus in policies, practices, and tools can only improve reusability, reduce education costs for new team members, and foster the use of best practices across all application teams. Finally, forums for sharing plans across the community at all phases of development will enable informed decision-making from the earliest stages of application development.

We are defining community collaboration models that provide opportunities and incentives for application developers to create and adopt emerging tools and best practices. We are also providing community forum models that enable communication of requirements and plans so that application teams are informed about complementary activities as early as possible. The community-oriented infrastructure will enhance collaboration, while at the same time protecting and fostering small-team autonomy as much as possible, recognizing that local control enhances creativity, fosters broader design exploration, and generally provides a dynamic exchange of ideas across the community.

## Improving Software Productivity

Scientific productivity is one of the top ten exascale research challenges, and software productivity (the effort, time, and cost for software development, maintenance, and support) is one critical aspect of scientific productivity. Therefore, although general and actionable productivity metrics are very difficult to define, an overarching focus on productivity is essential to making clear decisions in this time of highly disruptive architectural changes. In this project, we are focusing on improving productivity by defining and taking steps toward a new scientific software ecosystem that emphasizes the use and development of high-quality tools, adaptation and adoption of modern software engineering methodologies, and the development and use of high-quality software components in the composition of next-generation applications.

The IDEAS project focuses on the development of an extreme-scale scientific software ecosystem that will provide a foundation for next-generation scientific simulations. To ensure the effectiveness of our efforts, we are specifically addressing the modeling and simulation needs of three important use cases: (i) climate impacts on the upper Colorado River system; (ii) the hydrology and soil carbon dynamics of the Arctic tundra, and (iii) hydrologic, land surface, and atmospheric process coupling over the continental United States. At the same time, because many scientific application areas face similar challenges in multiphysics and multiscale modeling, and because many ASCR project participants pursue ongoing work with diverse science groups, our approach to the software ecosystem will also serve the broader DOE extreme-scale computational science community.

## Impact on Applications & Programs

The IDEAS Project focuses on three concrete [use cases](use-cases):

1. **Hydrology and Biogeochemical Cycling in the Colorado River System**
2. **Hydrology and Soil Carbon Dynamics of Arctic Tundra**
3. **Hydrologic, Land Surface, and Atmospheric Process Coupling over the Continental United States**

These terrestrial ecosystem use cases tie IDEAS to modeling and simulation goals in two Science Focus Area (SFA) programs and both Next Generation Ecosystem Experiment (NGEE) programs in DOE’s Office of Biologic and Environmental Research (BER).

{% 	include media-img2x.html 
	  source1 = "ideas-classic/IDEAS2.png"
	  contain1 = true
    source2 = "ideas-classic/IDEAS3.png"
    contain2 = true
%}

Deeper understanding and answers to important science questions for these use cases require improved multiscale and multiphysics computational simulations.  The directed efforts to address use-case needs guide to three specific focus areas that will have a broad impact on the computational science and engineering community:

* [IDEAS xSDK](xsdk): A major deliverable of IDEAS is the Extreme-scale Scientific Software Development Kit (xSDK).  The xSDK currently includes four major DOE library products (hypre, PETSc, SuperLU, and Trilinos) and the Alquimia biogeochemistry domain component.  The xSDK provides an interoperability layer that enables easy installation and combined usage of xSDK packages.
* [IDEAS Howto](methodologies): In addition to xSDK development and other software efforts to address the IDEAS use cases, IDEAS focuses on methodologies (“howto” content) to cultivate best practices, processes, and tools for improved scientific software development.  IDEAS is providing content that will enable other application teams to improve their own development efforts.
* [IDEAS Outreach](outreach): The final piece of IDEAS is the dissemination of the content developed in the project.  This includes tutorials on the IDEAS xSDK and the methodologies we develop, in collaboration with DOE computing facilities ALCF, NERSC, and OLCF.  IDEAS outreach also includes collaboration with the broader computational science community, which is also facing similar challenges and opportunities for improving productivity.

## Collaborations

The IDEAS Project is a unique collaboration between the DOE Office of Advanced Scientific Computing Research (ASCR) and the Office of Biological and Environmental Research (BER).  This partnership ensures the delivery of crosscutting methodologies, software, and metrics with impact on important scientific applications and programs.

{% 	include media-img.html 
	  source = "ideas-classic/IDEAS-broader-DOE-context.jpg"
	  contain = true
%}

The IDEAS Project is composed of an interdisciplinary multi-institutional team (ANL, LANL, LBNL, LLNL, ORNL, PNNL, SNL, Colorado School of Mines) and leverages a broad set of relationships within the Department of Energy and the broader community.



{% include list-4x_img.html
		group-title = "Team"
		group-linktext = "Learn More"
		group-linkurl = "team"
		group-blurb = "The IDEAS-Classic team includes participants from the following institutions. Follow the \"Learn More\" link for details."

		title1 = "Argonne National Laboratory"
		blurb1 = "(Co-lead Institution)"
		source1 = "ideas-classic/ANL-logo-square-300x267.jpg"
		contain1 = "true"

		title2 = "Sandia National Laboratory"
		blurb2 = "(Co-lead Institution)"
		source2 = "ideas-classic/SNL_Stacked_Black_Blue-300x115.png"
		contain2 = "true"

		title3 = "Los Alamos National Laboratory"
		source3 = "ideas-classic/LANLlogo-300x160.png"
		contain3 = "true"

		title4 = "Berkeley Lab"
		source4 = "ideas-classic/BerkeleyLabLogo-300x227.png"
		contain4 = "true"
%}
{% include list-4x_img.html
		title1 = "Lawrence Livermore National Laboratory"
		source1 = "ideas-classic/LLNLlogo.jpeg"
		contain1 = "true"

		title2 = "Oak Ridge National Laboratory"
		source2 = "ideas-classic/ORNLlogo-300x150.png"
		contain2 = "true"

		title3 = "Pacific Northwest National Laboratory"
		source3 = "ideas-classic/PNNLlogo-300x130.jpeg"
		contain3 = "true"

		title4 = "Colorado School of Mines"
		source4 = "ideas-classic/CSMlogo-150x150.jpeg"
		contain4 = "true"
%}

## Sponsor

This work is supported by the [DOE](http://energy.gov/) [Office of Science](http://science.energy.gov/), Offices of [Advanced Scientific Computing Research](http://science.energy.gov/ascr/) (ASCR) and [Biological Environmental Sciences](http://science.energy.gov/ber/) (BER).

{% 	include media-smimg.html
		source = "ideas-classic/RGB_Color-Seal_Green-Mark_SC_Horizontal-300x50.png"
		contain = true
%}