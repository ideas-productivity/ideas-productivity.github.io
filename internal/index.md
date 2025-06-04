---
layout: page
title: Internal Support Resources
blurb: "Not intended for public use"
---

*The resources linked from this page are intended for internal use by contributors to the site. Nothing in the internal tree should be linked from any public webpage.*

- [Draft Events](events-draft)  a place to perfect events before exposing them to the public.
- [Kitchen Sink](kitchen-sink.html) page demonstrating the styling and formatting includes for the site.
- HPC-BP webinar utility pages (in support of the [HPC-BP webinar series](/resources/series/hpc-best-practices-webinars/))
  - [Content helper pages](hpcbp-helpers) include content for pre-event advertising, the presentation itself, and post-event followup for each webinar.
  - BSSw.io summary curated content article: [hpcbp-webinars-cc.md](hpcbp-webinars-cc.md)<br>
      Steps to update the article on BSSw.io:
    1. Manually trigger the [HPC-BP: update curated content article from ideas-productivity.org](https://github.com/betterscientificsoftware/bssw.io/actions/workflows/hpcbp-cc-pr.yml) action in the BSSw.io repo to update the article in the repository
    2. Rebuild the production BSSw.io site to publish it

## Site build date and time

{% assign build = site.time | date: "%s" | plus: 0 %}
{% assign aoedate = build | date: "%s" | minus: 43200 %}

Site built: {{ build | date: "%FT%T%:z" }} ({{ build | date: "%s" }})

AOE date: {{ aoedate | date: "%FT%T" }}
