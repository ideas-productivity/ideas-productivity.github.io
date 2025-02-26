---
layout: page
title: "HPC Best Practices Webinars"
#blurb: "The quick brown fox jumps over the lazy dog."

series: "HPC Best Practices Webinars"

# This will redirect old links to the Wordpress site to the right page, at least.
# With additional work, it may be possible to get the fragment id (specific event entry)
# to work.  Tracking this in https://github.com/ideas-productivity/ideas-productivity.github.io/issues/18
redirect_from: 
  - /events/hpc-best-practices-webinars
  - /events/hpc-best-practices-webinars/
  - /hpc-best-practices-webinars
  - /hpc-best-practices-webinars/
---

<!-- Extended Description -->

The HPC Best Practices webinars address issues faced by developers of computational science and engineering (CSE) software on high-performance computers  (HPC). The sessions are independent, so join any or all.

## Who should attend

Participation is free and open to the public, however, registration is required for each event. This series is designed for HPC software developers who are seeking help in increasing their team’s productivity, as well as facility staff who interact extensively with users.

## Schedule and format

The webinars will occur approximately monthly and last about one hour each. The webinars usually take place on a Wednesday at 1:00 pm -2:00 pm in the U.S. Eastern time zone (but this can change due to speaker availability). Audience questions and discussion will be encouraged, and the Q&A will be captured in written form.  Recordings of the webinars along with the presentation slides will be posted.

## Registration

Participation is free and open to the public. Registration is required for each event. Those who register will also receive notification when the webinar recording is available.

## Notifications

If you’d like to receive announcements of upcoming webinars and other IDEAS-organized events, please subscribe to our [mailing list](http://eepurl.com/cQCyJ5).

## Suggestions Welcome!

Want to request another topic?  Want to give a webinar?  Email us at [IDEASProductivity@gmail.com](mailto:IDEASProductivity@gmail.com?subject=HPCBP webinar suggestion).

## Related Presentations and Publications

- The HPC Best Practices Webinar Series. Osni A. Marques, David E. Bernholdt, Elaine M. Raybourn, Ashley D. Barker,  Rebecca J. Hartman-Baker. Journal of Computational Science Education **10**(1), 108--110, January 2019. doi:[10.22369/issn.2153-4136/10/1/19](https://doi.org/10.22369/issn.2153-4136/10/1/19).



<!-- Organizers -->

{% 	include list-6x.html 
		group-title = "Organizers"
		group-blurb = "The IDEAS project in collaboration with the DOE/ASCR computing facilities and the Exascale Computing Project"

		title1 = "IDEAS Productivity project"
		blurb1 = "Osni Marques (LBNL)"
		source1 = "ideas-ecp/team/marques-osni.jpg"

		title2 = "Argonne Leadership Computing Facility"
		source2 = "logos/facilities/ALCF_H_RGB.png"
		contain2 = "true"

		title3 = "National Energy Research Scientific Computing Center"
		source3 = "logos/facilities/NERSClogocolor.png"
		contain3 = "true"

		title4 = "Oak Ridge Leadership Computing Facility"
		source4 = "logos/facilities/OLCF_color.png"
		contain4 = "true"

		title5 = "Exascale Computing Project"
		source5 = "logos/ecp/ECP_logo.png"
		contain5 = "true"
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
