# IDEAS-Productivity.org Website

## Current status
Status: under development
<br>
Public URL: https://ideas-productivity.github.io/
<br>
Plan: move into production at https://ideas-productivity.org/ in November 2023

## Contributing

*To be added*

## Repository structure

*To be added*

## Style guide

*Note: for events, see `_events/README.md` (to be added)*

* General
    * This site represents the entire IDEAS family of projects and spin-offs.  All content should reflect this (e.g., connections are encouraged, writing as if the project or activity is completely separate from anything else is discouraged).
    * We prefer shorter "light-read" content to longer content and more formal language.  The website is not a technical paper -- pasting content from a paper is probably not desirable.
    * Longer-form content is okay if this is the only place that it appears. Consider shorter content that links to outside resources.  Longer-form content is more likely to appear further down the website hierarchy (for example on a sub-page of an activity rather than the activity's main page)
    * Try to avoid significant content on a topic appearing in multiple places on the site.  If there is a page with the "meat" of the topic, other mentions can be shorter and point to the meat
    * Cross-linking within the site is encouraged
    * External links are encouraged, but we have a strong preference for persistent identifiers (e.g., DOI links) and links that we expect to be durable
* Language and styling
    * We prefer to use standard Markdown markup over HTML unless there is a particular reason
    * Page titles and other `title` content should use title case
    * Other headings should use sentence case
    * We prefer to use H1 as the highest level headings for page content (not H2)
    * For most cases, we would expect a page to utilize at most two levels of headings -- if you need H3s ask yourself if you're going into too much detail
    * `blurbs` (an optional element of most pages and include files) used more or less as subtitles should use sentence case but should *not* end with periods
    * Subtitle `blurbs` should active "-ing" words where possible
    * Use subtitle `blurbs` only where they make sense -- they're *optional*
    * `blurbs` for `text-biglink.html` includes should be all lowercase, except for acronyms or key phrases
    * For project names that start with "IDEAS", use a hyphen to link to a distinguishing term.  For example, IDEAS-Classic, IDEAS-ECP, or IDEAS-Watersheds rather than IDEAS Classic, IDEAS ECP, or IDEAS Watersheds
* Graphics
    * Graphics with a transparent background are generally preferred wherever possible.  This means PNG or GIF format.  JPEG files do not support transparent backgrounds
    * The use of (technically appropriate) "eye-candy" images is encouraged to enhance visual interest
    * Be sure to credit image sources where appropriate
* Content-specific
    * main nav bar (across the top) (`_data/nav-config.yml`)
        * To level navbar labels should be all lowercase
        * Menu items in dropdown should be title case
    * Main page
    * Overview
    * Activities
        * Activities are something substantial which would be recognized by the public. Funded projects, obviously, but also activities launched by a funded project that may have developed an independent identity with the public.  Events, even an organized series of events, fall under Resources rather than activities.
        * We currently categorize Activities as *current*, *spin offs*, and *past*.  Spin offs may be separate projects that were actually spun out of another project in the IDEAS umbrella (e.g., xSDK) or activities which are still run by an IDEAS project but have a strong independent identity.  This can be a bit of a judgement call, so discuss it with others if you have any questions
        * Activities that have a separate web presence will generally have a single summary page here with a `text-biglink.html` link to the outside presence at the bottom
        * Activities for which this is the only web presence are encouraged to provide more extensive content (e.g., IDEAS-Classic)
        * For *past* activities, we should consistently indicate the years during which the project was active, to help put it in context
            * For the main page for the activity, start the body of the page with a sentence like "*This project was active 2014–2017.*" (note the use of italics).  See [IDEAS-Classic](https://ideas-productivity.github.io/activities/ideas-classic/) as an example
            * On the cards for past activities, put the dates in the `title` field, like "IDEAS-Classic (2014-2017)".  See the IDEAS-Classic card at the bottom of the [Activities](https://ideas-productivity.github.io/activities.html) page as an example
    * Resources
    * Join