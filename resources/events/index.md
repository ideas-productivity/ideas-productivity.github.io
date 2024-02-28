---

layout: page

title: "Events"

# This will redirect old links to the Wordpress site
redirect_from: 
  - /events
  - /events/
---
<!-- Event List -->

{% include _events/events-list.html 
    title = "Upcoming events" 
    group-linktext = "explore by series"
	group-linkurl = "/resources/series"
%}
{% 	include _events/events-list.html past=true 
    title = "Past events" 
    group-linktext = "explore by series"
	group-linkurl = "/resources/series"
%}
