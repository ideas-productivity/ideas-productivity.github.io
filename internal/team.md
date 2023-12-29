---
layout: page
#
title: "Team"
blurb: "The IDEAS-ECP team includes members from six national laboratories, one university, and five DOE computing facilities."
#
# This will redirect old links to the Wordpress site
redirect_from: 
  - /ideas-ecp/team
  - /ideas-ecp/team/
#
# gallery:
#   - name:
# 	affiliation:
# 	blurb:
#
gallery:
  - name: Ann Almgren
    short-affil: "LBNL"
    image: "ideas-ecp/team/almgren-ann.jpg"
  - name: Ross Bartlett
    short-affil: "SNL"
    image: "ideas-ecp/team/bartlett-ross.jpg"
  - name: David E. Bernholdt
    short-affil: "ORNL"
    role: Institutional PI
    image: "ideas-ecp/team/bernholdt-david.png"
  - name: Kita Cranfill
    short-affil: "ORNL"
    image: "ideas-ecp/team/cranfill-kita.png"
  - name: Anshu Dubey
    short-affil: "ANL"
    role: Institutional PI
    image: "ideas-ecp/team/dubey-anshu.jpg"
  - name: Don Frederick
    short-affil: "LLNL"
    image: "ideas-ecp/team/frederick-don.jpg"
    role: Computing Facility Liaison
  - name: William Godoy
    short-affil: "ORNL"
    image: "ideas-ecp/team/godoy-william.jpg"
  - name: Elsa Gonsiorowski
    short-affil: "LLNL"
    role: Institutional PI
    image: "ideas-ecp/team/gonsiorowski-elsa.png"
  - name: Patricia Grubel
    short-affil: "LANL"
    image: "ideas-ecp/team/grubel-pat.jpg"
  - name: Rinku Gupta
    short-affil: "ANL"
    image: "ideas-ecp/team/gupta-rinku.jpg"
  - name: Rebecca Hartman-Baker
    short-affil: "LBNL"
    role: Computing Facility Liaison
    image: "ideas-ecp/team/hartmanbaker-rebecca.png"
  - name: Michael Heroux
    short-affil: "SNL"
    role: Lead Co-PI
    image: "ideas-ecp/team/heroux-mike.jpg"
  - name: Axel Huebl
    short-affil: "LBNL"
    image: "ideas-ecp/team/huebl-axel.jpg"
  - name: Rose Lynch
    short-affil: "ANL"
    image: "ideas-ecp/team/lynch-rose.png"
  - name: Addi Malviya Thakur
    short-affil: "ORNL"
    image: "ideas-ecp/team/malviyathakur-addi.jpg"
  - name: Osni Marques
    short-affil: LBNL1
    role: Institutional PI
    image: "ideas-ecp/team/marques-osni.jpg"
  - name: Lois Curfman McInnes
    short-affil: ANL
    role: Lead Co-PI
    image: "ideas-ecp/team/mcinnes-lois-curfman.png"
  - name: Reed Milewicz
    short-affil: SNL
    image: "ideas-ecp/team/milewicz-reed.jpg"
  - name: Mark Miller
    short-affil: LLNL
    image: "ideas-ecp/team/miller-mark.jpg"
  - name: J. David Moulton
    short-affil: LANL
    role: Institutional PI
    image: "ideas-ecp/team/moulton-david.jpg"
  - name: Miranda Mundt
    short-affil: SNL
    image: "ideas-ecp/team/mundt-miranda.jpg"
  - name: Hai Ah Nam
    short-affil: LBNL
    image: "ideas-ecp/team/nam-hai-ah.jpg"
  - name: Boyana Norris
    short-affil: U. Oregon
    role: Institutional PI
    image: "ideas-ecp/team/norris-boyana.jpg"
  - name: Erik Palmer
    short-affil: LBNL
    image: "ideas-ecp/team/palmer-erik.jpg"
  - name: Suzanne Parete-Koon
    short-affil: ORNL
    role: ECP Workforce Development and Retention Action Group Lead
    image: "ideas-ecp/team/paretekoon-suzanne.jpg"
  - name: Megan Phinney
    short-affil: LANL
    role: Computing Facility Liaison
    image: "ideas-ecp/team/phinney-megan.jpg"
  - name: Elaine Raybourn
    short-affil: SNL
    role: Institutional PI
    image: "ideas-ecp/team/raybourn-elaine.jpg"
  - name: Katherine Riley
    short-affil: ANL
    role: Computing Facility Liaison
    image: "ideas-ecp/team/riley-katherine.jpg"
  - name: David Rogers
    short-affil: ORNL
    role: Computing Facility Liaison
    image: "ideas-ecp/team/rogers-david.jpg"
  - name: Ben Sims
    short-affil: LANL
    image: "ideas-ecp/team/sims-ben.jpg"
  - name: Deborah Stevens
    short-affil: ANL
    image: "ideas-ecp/team/stevens-deborah.jpg"
  - name: Greg Watson
    short-affil: ORNL
    image: "ideas-ecp/team/watson-greg.jpg"
  - name: Jim Willenbring
    short-affil: SNL
    image: "ideas-ecp/team/willenbring-jim.jpg"
#
alumni:
  - name: Satish Balay
    short-affil: "ANL"
  - name: Lisa Childers
    short-affil: "ANL"
  - name: Todd Gamblin
    short-affil: "LLNL"
  - name: Judy Hill
    short-affil: "ORNL"
  - name: Steve Hudson
    short-affil: "ANL"
  - name: Christoph Junghans
    short-affil: "LANL"
  - name: Alicia Klinvex
    short-affil: "SNL"
  - name: Shannon Lindgren
    short-affil: "ANL"
  - name: Lena Lopatina
    short-affil: "LANL"
  - name: Jared O’Neal
    short-affil: "ANL"
  - name: Michele Rosso
    short-affil: "LBNL"
  - name: Jean Shuler
    short-affil: "LLNL"
  - name: Barry Smith
    short-affil: "ANL"
  - name: Louis Vernon
    short-affil: "LANL"
  - name: Paul Wolfenbarger
    short-affil: "SNL"
---

<!-- Sidebar Nav -->

{% comment %}
{% include_relative nav-sidebar current="Team" %}
{% endcomment %}

<!-- Content -->



{% comment %}
	Gallery uses the six-across include list-6x.html

	So we need to accumulate (up to) six people at a time and call the include with all six arguments.
	Kinda clunky, but it works.

	Other points of note:
	1) We need to identify the overall first call to list-6x to add the group-title and group-id. That's firstpass.
	2) Unfortunately, we can't use liquid within the include call, so we have to completely separate the two cases.
  3) On each pass through the loop we reset the arguments for the include to nil.  That way, if they're
	   not set in the next pass, the include will get a nil argument rather than the value from the previous pass.
{% endcomment %}

{% assign firstpass = false %}
{% for a in page.gallery %}
	{% assign i = forloop.index | modulo: 6 %}
	{% if i == 1 %}
		{% assign firstpass = forloop.first %}
		{% if a.name %}{% assign t1 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t1 = t1 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
    {% if a.role %}{% assign b1 = a.role %}{% endif %}
    {% if a.image %}{% assign s1 = a.image %}{% endif %}
	{% elsif i == 2 %}
		{% if a.name %}{% assign t2 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t2 = t2 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
    {% if a.role %}{% assign b2 = a.role %}{% endif %}
    {% if a.image %}{% assign s2 = a.image %}{% endif %}
	{% elsif i == 3 %}
		{% if a.name %}{% assign t3 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t3 = t3 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
    {% if a.role %}{% assign b3 = a.role %}{% endif %}
    {% if a.image %}{% assign s3 = a.image %}{% endif %}
	{% elsif i == 4 %}
		{% if a.name %}{% assign t4 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t4 = t4 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
    {% if a.role %}{% assign b4 = a.role %}{% endif %}
    {% if a.image %}{% assign s4 = a.image %}{% endif %}
	{% elsif i == 5 %}
		{% if a.name %}{% assign t5 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t5 = t5 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
    {% if a.role %}{% assign b5 = a.role %}{% endif %}
    {% if a.image %}{% assign s5 = a.image %}{% endif %}
	{% elsif i == 0 %}
		{% if a.name %}{% assign t6 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t6 = t6 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
    {% if a.role %}{% assign b6 = a.role %}{% endif %}
    {% if a.image %}{% assign s6 = a.image %}{% endif %}
	{% endif %}
	{% if i == 0 or forloop.last %}
		{% if firstpass %}
			{% include list-6x.html
				group-title = "Team Members"
				group-id = "alumni"
				title1 = t1
        blurb1 = b1
        source1 = s1
				title2 = t2
        blurb2 = b2
        source2 = s2
				title3 = t3
        blurb3 = b3
        source3 = s3
				title4 = t4
        blurb4 = b4
        source4 = s4
				title5 = t5
        blurb5 = b5
        source5 = s5
				title6 = t6
        blurb6 = b6
        source6 = s6
			%}
			{% assign firstpass = false %}
		{% else %}
			{% include list-6x.html
				title1 = t1
        blurb1 = b1
        source1 = s1
				title2 = t2
        blurb2 = b2
        source2 = s2
				title3 = t3
        blurb3 = b3
        source3 = s3
				title4 = t4
        blurb4 = b4
        source4 = s4
				title5 = t5
        blurb5 = b5
        source5 = s5
				title6 = t6
        blurb6 = b6
        source6 = s6
			%}
		{% endif %}
		{% assign t1 = nil %}
		{% assign t2 = nil %}
		{% assign t3 = nil %}
		{% assign t4 = nil %}
		{% assign t5 = nil %}
		{% assign t6 = nil %}
		{% assign b1 = nil %}
		{% assign b2 = nil %}
		{% assign b3 = nil %}
		{% assign b4 = nil %}
		{% assign b5 = nil %}
		{% assign b6 = nil %}
		{% assign s1 = nil %}
		{% assign s2 = nil %}
		{% assign s3 = nil %}
		{% assign s4 = nil %}
		{% assign s5 = nil %}
		{% assign s6 = nil %}
	{% endif %}
{% endfor %}

{% comment %}
	Alumni list uses the three-across text only include list-3x.html

	So we need to accumulate (up to) three alumni at a time and call the include with all three arguments.
	Kinda clunky, but it works.

	Other points of note:
	1) We need to identify the overall first call to list-3x to add the group-title and group-id. That's firstpass.
	2) Unfortunately, we can't use liquid within the include call, so we have to completely separate the two cases.
  3) On each pass through the loop we reset the three title arguments to nil.  That way, if they're
	   not set in the next pass, the include will get a nil argument rather than the value from the previous pass.
{% endcomment %}

{% assign firstpass = false %}
{% for a in page.alumni %}
	{% assign i = forloop.index | modulo: 3 %}
	{% if i == 1 %}
		{% assign firstpass = forloop.first %}
		{% if a.name %}{% assign t1 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t1 = t1 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
	{% elsif i == 2 %}
		{% if a.name %}{% assign t2 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t2 = t2 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
	{% elsif i == 0 %}
		{% if a.name %}{% assign t3 = a.name %}{% endif %}
		{% if a.short-affil %}{% assign t3 = t3 | append: " (" | append: a.short-affil | append: ")" %}{% endif %}
	{% endif %}
	{% if i == 0 or forloop.last %}
		{% if firstpass %}
			{% include list-3x.html
				group-title = "Alumni"
				group-id = "alumni"
				title1 = t1
				title2 = t2
				title3 = t3
			%}
			{% assign firstpass = false %}
		{% else %}
			{% include list-3x.html
				title1 = t1
				title2 = t2
				title3 = t3
			%}
		{% endif %}
		{% assign t1 = nil %}
		{% assign t2 = nil %}
		{% assign t3 = nil %}
	{% endif %}
{% endfor %}
