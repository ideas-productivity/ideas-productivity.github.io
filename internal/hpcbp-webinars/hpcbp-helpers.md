---
layout: page
title: HPC-BP Webinar Helper Content
blurb: "Not intended for public use"
series: "HPC Best Practices Webinars"
---

*The resources on this page are intended for internal use in support of the [HPC-BP webinar series](/resources/series/hpc-best-practices-webinars/).  Nothing here should be linked from any public webpage.*

## {{ page.series }}

{% assign sorted = site.events-hpcbp | sort: "startdate" | reverse %}

{% for webinar in sorted %}
- **{{ webinar.startdate | date: "%F" }}:** {{ webinar.title }}, presented by {% for person in webinar.presenters %}{{ person.name }}{% if person.affiliation %} ({{ person.affiliation }}){% endif %}{% unless forloop.last %}, {% endunless %}{% if forloop.rindex0 == 1 %}and {% endif %}{% endfor %}; base file name: `{{ webinar.url | basename }}`

  [Public event]({{ webinar.url | replace: "/internal/events-hpcbp", "/events" }}) | [BSSw.io event]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-bsswio" }})<br><br>*[Add to BSSw.io](https://github.com/betterscientificsoftware/bssw.io/actions/workflows/hpcbp-event-pr.yml)*<br><br>[BSSw.io digest]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-bsswio-digest" }}) | [Mailchimp announcement]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-mailchimp-announcement" }}) | [Slack]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-slack" }}) | [Facilities]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-facilities" }})
  [Intro slide]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-intro-slides" }}) | [YouTube]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-youtube" }}) | [Mailchimp followup]({{ webinar.url | replace: "events-hpcbp", "events-hpcbp-mailchimp-followup" }}) | *[Update curated content on BSSw.io](https://github.com/betterscientificsoftware/bssw.io/actions/workflows/hpcbp-cc-pr.yml)*

{% endfor %}
