---

layout: page

title: "Events"

---
{% comment %}
Events organized by the IDEAS Productivity project are organized into several series.  Select a series to see events in that particular series.  Scroll down for the complete lists of [upcoming](#upcoming-events) and [past](#past-events) events.

{% include series-teaser %}
{% endcomment %}

{% 	include text-biglink.html 
		blurb = "explore events by the series"
		url = "/resources/series"
        pushleft = "false"
%}

<!-- Event List -->

{% include _events/events-list.html 
    title = "Upcoming events" 
    group-linktext = "explore by series"
	group-linkurl = "//resources/series"
%}

{% 	include _events/events-list.html past=true 
    title = "Past events" 
    group-linktext = "explore by series"
	group-linkurl = "/resources/series"
%}
