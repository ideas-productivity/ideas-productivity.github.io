---
layout: page
title: "BSSw Tutorials"
#blurb: "The quick brown fox jumps over the lazy dog."

series: "BSSw Tutorials"
---

<!-- Extended Description -->

The Better Scientific Software (BSSw) tutorials focus on issues of developer productivity, software sustainability, and reproducibility in scientific research software, particularly targeting high-performance computers.

We first presented a version of this tutorial in 2016, and since then we have been working continually to refine and expand it. We present it most often as part of conferences, but we are open to a wide range of venues, both in person (circumstances permitting) and online. [Contact us](mailto:IdeasProductivity@gmail.com?subject=BSSw tutorial question) for more information.

## Who should attend

Our tutorials can benefit people at any stage of their career, whether they are students, post-docs, or established practitioners.  While the level of the content skews strongly towards beginner and intermediate levels, we have found that many established software developers may not be familiar with all of the ideas we present and appreciate learning about them. Managers of scientific software developers may find benefit in better understanding the experiences of their staff, and approaches to facilitate producing “better scientific software”.

## Schedule and format

Most tutorials take place as part of larger events, such as conferences.  They vary in length from a couple of hours to a full day or longer, with topics and the level of detail chosen to suit the venue and fit the schedule.  Our tutorials are mostly lecture-style.  If time permits there may also be hands-on exercises.

## Registration

Most events require advance registration with the hosting venue and may require fee.

{% include text-biglink.html blurb = "Visit the BSSw tutorial archives" url = "https://bssw-tutorial.github.io/" %}

<!-- Organizers -->

{%  include list-6x.html
  	group-title = "Organizers"
  	group-blurb = "The IDEAS tutorial team"

	title1 = "David Bernholdt (ORNL)"
	source1 = "tutorial-team/Bernholdt-David.jpg"

	title2 = "Anshu Dubey (ANL)"
	source2 = "tutorial-team/Dubey-Anshu.png"

	title3 = "Patricia Grubel (LANL)"
	source3 = "tutorial-team/Grubel-Pat.jpg"

	title4 = "Rinku Gupta (ANL)"
	source4 = "tutorial-team/Gupta-Rinku.jpg"

	title5 = "Mike Heroux (SNL)"
	source5 = "tutorial-team/Heroux-Mike.jpg"

	title6 = "Mark Miller (LLNL)"
	source6 = "tutorial-team/Miller-Mark.jpg"
%}

{% 	include list-6x.html 
	title1 = "David Rogers (ORNL)"
	source1 = "tutorial-team/Rogers-David.jpg"

	title2 = "Greg Watson (ORNL)"
	source2 = "tutorial-team/Watson-Greg.jpg"

	title3 = "Jim Willenbring (SNL)"
	source3 = "tutorial-team/Willenbring-Jim.jpg"
%}

<!-- Upcoming Event List -->

{% 	include _events/seriesevents-list.html 
    series = page.series
    title = "Upcoming Events"
%}

<!-- Past Event List -->

{% 	include _events/seriesevents-list.html past=true 
    series = page.series
    title = "Past Events"
%}
