---
layout: page
title: Internal Support Resources
blurb: "Not intended for public use"
---

*The resources linked from this page are intended for internal use by contributors to the site.  Nothing in the internal tree should be linked from any public webpage.*

- [Draft Events](events-draft)  a place to perfect events before exposing them to the public.
- [Kitchen Sink](kitchen-sink.html) page demonstrating the styling and formatting includes for the site.
- [HPC-BP webinar utility pages](hpcbp-webinars)

## Date calculations

{% assign n = 'now' %}
{% assign st = site.time %}
{% assign w = "2024-07-04" %}
{% assign ws = w | date: "%s" %}
{% assign aoe = ws | plus: 86399 | plus: 43200 %}

now: {{ n | date: "%s" }} {{ n | date: "%FT%T%:z" }}

site.time: {{ st | date: "%s" }} {{ st | date: "%FT%T%:z" }}

Fourth of July: {{ w | date: "%s" }} {{ w | date: "%FT%T%:z" }}

Fourth of July alternate: {{ ws | date: "%s" }} {{ ws | date: "%FT%T%:z" }}

AOE: {{ aoe | date: "%s" }} {{ aoe | date: "%FT%T%:z" }}
