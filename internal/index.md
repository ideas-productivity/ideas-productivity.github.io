---
layout: page
title: Internal Support Resources
blurb: "Not intended for public use"
---

*The resources linked from this page are intended for internal use by contributors to the site.  Nothing in the internal tree should be linked from any public webpage.*

- [Draft Events](events-draft)  a place to perfect events before exposing them to the public.
- [Kitchen Sink](kitchen-sink.html) page demonstrating the styling and formatting includes for the site.
- [HPC-BP webinar utility pages](hpcbp-webinars)

## Site build date and time

{% assign build = site.time | date: "%s" | plus: 0 %}
{% assign aoedate = build | date: "%s" | minus: 43200 | date: "%Y-%m-%d" | date: "%s" | plus: 0 %}

Site built: {{ build | date: "%FT%T%:z" }} ({{ build | date: "%s" }})

AOE date: {{ aoedate | date: "%FT%T" }}
