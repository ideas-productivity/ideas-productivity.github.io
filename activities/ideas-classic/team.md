---

layout: page

title: "Team"
blurb: "IDEAS-Classic"

blurb: "The IDEAS-Classic team includes members from seven national laboratories, one university, and five DOE computing facilities"


# This will redirect old links to the Wordpress site
redirect_from: 
  - /ideas-classic/team
  - /ideas-classic/team/
---

<!-- Sidebar Nav -->
<!-- ---------------------------------------------------------------------- -->

{% include_relative nav-sidebar current="Team" %}

<!-- Content -->
<!-- ---------------------------------------------------------------------- -->

{% 	include media-img.html 
	  source = "ideas-classic/IDEAS-team-05-2016-1024x586.png"
	  contain = true
%}

# Organization

Our efforts are organized into four *focus areas*:

* **[Use Cases](#use-cases) (lead: J. David Moulton):** IDEAS has three use cases that serve as foci for our productivity efforts.  IDEAS has two dual goals:  Satisfy the requirements of our use cases and provide productivity capabilities broader community by meeting use case requirements.
* **[Extreme-scale Scientific Software Development Kit (xSDK)](#xsdk) (lead: Lois Curfman McInnes):**  The IDEAS xSDK is a collection of independently-developed, reusable scientific software components and libraries (currently the numerical libraries hypre, PETSc, SuperLU and Trilinos and the biogeochemistry component Alquimia), along with interoperability layers, build tools, testing, and documentation that enable xSDK users to employ these capabilities as a seamless software environment.
* **[Methodologies for Software Productivity (How-To)](#methodologies) (lead: Michael Heroux):** This effort is focused on observing, capturing, and promoting best practices in scientific software engineering.  Also known as the “how to” focus area, this effort is intent on creating content that will help the IDEAS project be more productive and help the community at large by producing high-value content on topics such as how to start an open-source scientific software project, how to select source management, issue tracking, and other important tools.
* **[Outreach and Community](#outreach) (lead: David Bernholdt):** This effort is focused on establishing connections to the broader community, which is essential to leverage the value of the content the IDEAS Project develops and complement external efforts.  The IDEAS Project succeeds by satisfying the specific requirements of our use cases and by disseminating our work to the broader scientific software community.  Furthermore, our efforts are part of a broader collection of related projects.
The structure of the multi-institutional IDEAS project is shown in the diagram above.  The team is listed below the diagram by project category.

{% 	include list-6x.html
		group-title = "Methodologies for Software Productivity"
		group-linktext = "Learn More"
		group-linkurl = "methodologies"
		group-blurb = "Adapt software engineering practices for extreme-scale science, with emphasis on workflows, lifecycles, and goals/questions/metrics."
		group-id = "methodologies"

		title1 = "Michael Heroux (SNL)"
		source1 = "ideas-classic/team/heroux_2010-199x300.jpg"
		blurb1 = "Focus Area Lead"

		title2 = "Ross Bartlett (ORNL)"
		source2 = "ideas-classic/team/Bartlett-279x300.jpg"

		title3 = "Mark Berrill (ORNL)"
		source3 = "logos/institutions/ORNLlogo-300x150.png"
		contain3 = true

		title4 = "Todd Gamblin (LLNL)"
		source4 = "ideas-classic/team/gamblin-todd-COMP-WEB-220x275-LLNL.png"
		blurb4 = "Computing Facility Liaison"

		title5 = "Osni Marques (LBNL)"
		source5 = "ideas-classic/team/marques_osni-225x300.jpg"

		title6 = "Pat McCormick (LANL)"
		source6 = "ideas-classic/team/Pat_McCormick2-215x300.jpg"
%}

{% 	include list-6x.html
		title1 = "Nicholas Moss (LANL)"
		source1 = "ideas-classic/team/moss_nick-214x300.png"

		title2 = "Andrew Salinger (SNL)"
		source2 = "ideas-classic/team/AndyS.jpg"
		blurb2 = "Computing Facility Liaison"

		title3 = "Jason Sarich (ANL)"
		source3 = "ideas-classic/team/JasonSarich-214x300.jpg"

		title4 = "Dali Wang (ORNL)"
		source4 = "ideas-classic/team/DaliWang-e1456168658867.png"
%}


{% 	include list-6x.html
		group-title = "Extreme-Scale Scientific Software Development Kit"
		group-linktext = "Learn More"
		group-linkurl = "xsdk"
		group-blurb = "Improve interoperability and compatibility across xSDK libraries; address performance portability on new and emerging architectures; develop and extract scientific domain components, including coupling functionality for multiphysics, multiscale models."
		group-id = "xsdk"

		title1 = "Lois Curfman McInnes (ANL)"
		source1 = "ideas-classic/team/Lois-199x300.jpg"
		blurb1 = "Focus Area Lead"

		title2 = "Alicia Klinvex (SNL)"
		source2 = "ideas-classic/team/AliciaKlinvex.png"

		title3 = "Sherry Li (LBNL)"
		source3 = "ideas-classic/team/XiaoyeLi1.jpg"
		cover3 = "true"

		title4 = "Vijay Mahadevan (ANL)"
		source4 = "ideas-classic/team/VijayMahadevan2.jpg"

		title5 = "Daniel Osei-Kuffuor (LLNL)"
		source5 = "ideas-classic/team/osei-kuffuor-daniel-COMP-WEB-220x275.png"

		title6 = "Barry Smith (ANL)"
		source6 = "ideas-classic/team/BarrySmith.jpg"
%}

{% 	include list-6x.html
		title1 = "Mathew Thomas (PNNL)"
		source1 = "ideas-classic/team/Thomas_Mathew_900991-08.jpeg"

		title2 = "James Willenbring (SNL)"
		source2 = "ideas-classic/team/JimW-e1456166391921.jpg"

		title3 = "Ulrike Yang (LLNL)"
		source3 = "ideas-classic/team/umyang.jpg"
%}



{% 	include list-6x.html
		group-title = "Use Cases for Terrestrial Modeling"
		group-linktext = "Learn More"
		group-linkurl = "use-cases"
		group-blurb = "Motivate and validate productivity advancements in terrestrial modeling use cases."
		group-id = "use-cases"

		title1 = "J. David Moulton (LANL)"
		source1 = "ideas-classic/team/Moulton_small.jpg"
		blurb1 = "Focus Area Lead"

		title2 = "Tim Scheibe (PNNL)"
		source2 = "ideas-classic/team/scheibe.jpg"
		cover2 = "true"

		title3 = "Carl Steefel (LBNL)"
		source3 = "ideas-classic/team/SteefelPhoto.jpg"
		cover3 = "true"

		title4 = "Glenn Hammond (SNL)"
		source4 = "ideas-classic/team/hammond.jpg"

		title5 = "Reed Maxwell (CSM)"
		source5 = "ideas-classic/team/RMaxwell.jpg"

		title6 = "Scott Painter (ORNL)"
		source6 = "ideas-classic/team/Painter.jpg"
%}

{% 	include list-6x.html
		
		title1 = "Laura Condon (CSM)"
		source1 = "ideas-classic/team/LauraCondon.png"

		title2 = "Ethan Coon (LANL)"
		source2 = "ideas-classic/team/Coon_426x640.jpg"

		title3 = "Dipankar Dwivedi (LANL)"
		source3 = "ideas-classic/team/DipankarDwivedi.png"

		title4 = "Jeff Johnson (LBNL)"
		source4 = "ideas-classic/team/JeffreyJohnson-e1459978743120.jpg"

		title5 = "Erica Woodburn (LBNL)"
		source5 = "ideas-classic/team/EricaWoodburn.jpeg"

		title6 = "Carol Woodward (LLNL)"
		source6 = "ideas-classic/team/CarolWoodward.jpeg"
%}


{% 	include list-6x.html
		title1 = "Xiaofan Yang (PNNL)"
		source1 = "ideas-classic/team/XiaofanYang_photo.jpg"
		cover1 = "true"
%}

{% 	include list-6x.html
		group-title = "Outreach and Community"
		group-linktext = "Learn More"
		group-linkurl = "outreach"
		group-blurb = "Promote scientific software productivity practices and begin to build a community."
		group-id = "outreach"

		title1 = "David Bernholdt (ORNL)"
		source1 = "ideas-classic/team/deb-profile-pic.png"
		blurb1 = "Focus Area Lead"

		title2 = "Rebecca Hartman-Baker (NERSC)"
		source2 = "logos/facilities/NERSClogocolor.png"
		contain2 = true

		title3 = "Lisa Childers (ALCF)"
		source3 = "ideas-classic/team/LisaChilders.jpg"
		blurb3 = "Computing Facility Liaison"

		title4 = "Judy Hill (OLCF)"
		source4 = "ideas-classic/team/Hill.jpg"
		blurb4 = "Computing Facility Liaison"

		title5 = "Bill Spotz (SNL)"
		source5 = "ideas-classic/team/BillSpotz2.jpg"
		blurb5 = "Computing Facility Liaison"
%}


{% 	include list-6x.html
		group-title = "Crosscutting"
		group-blurb = "Ensure communication and connections among all focus areas and the broader DOE community."
		group-id = "crosscutting"

		title1 = "Hans Johansen (LBNL)"
		source1 = "ideas-classic/team/Johansen.jpg"
		blurb1 = "Crosscut Lead"
		cover1 = "true"
%}

{% 	include list-3x.html
		group-title = "Alumni"
		group-id = "alumni"

		title1 = "Katie Antypas (LBNL)"
		title2 = "Jed Brown (ANL)"
		title3 = "Irina Demeshko (SNL)"
%}

{% 	include list-3x.html
		title1 = "Christos Kartsakalis (ORNL)"
		title2 = "Kerstin Kleese-Van Dam (PNNL)"
		title3 = "Sri Hari Krishna Narayanan (ANL)"
%}
