---

layout: page

title: "Draft Events"
blurb: "Not intended for public use"

---
This is a non-public space for the development of events.  It displays all events in the `_events-draft` collection.  Once they're ready, events can be "published" by moving them to the `_events` collection.

{% 	include _events/events-list.html events=site.events-draft past=false title="Upcoming Events" %}
{% 	include _events/events-list.html events=site.events-draft past=true title="Past Events" %}
