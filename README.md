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

* Content that appears in the horizontal nav bar (`_data/nav-config.yml`) with subfolder items (i.e., the menu has a dropdown, not a singleton link) should be organized in the repository as a directory containing the pages for the dropdown menu items.  Importantly, the directory should also include an index.md file for the main content (the item appearing on the nav bar itself) rather than placing it "beside" the directory.  This will allow the breadcrumbs to work properly. In other words, something like this:
    - `resources/index.md`
    - `resources/item1.md`
    - `resources/item2.md`
<br>rather than<br>
    - `resources.md`
    - `resources/item1.md`
    - `resources/item2.md`

## Style guide

*Note: for events, see `_events/README.md` (to be added)*

### General

* This site represents the entire IDEAS family of projects and spin-offs.  All content should reflect this (e.g., connections are encouraged, writing as if the project or activity is completely separate from anything else is discouraged).
* We prefer shorter "light-read" content to longer content and more formal language.  The website is not a technical paper -- pasting content from a paper is probably not desirable.
* Longer-form content is okay if this is the only place that it appears. Consider shorter content that links to outside resources.  Longer-form content is more likely to appear further down the website hierarchy (for example on a sub-page of an activity rather than the activity's main page)
* Try to avoid significant content on a topic appearing in multiple places on the site.  If there is a page with the "meat" of the topic, other mentions can be shorter and point to the meat
* Cross-linking within the site is encouraged
* External links are encouraged, but we have a strong preference for persistent identifiers (e.g., DOI links) and links that we expect to be durable

### Language and styling

* We prefer to use standard Markdown markup over HTML unless there is a particular reason
* Page titles and other `title` content should use title case
* Other headings should use sentence case
* We prefer to use H1 as the highest level headings for page content (not H2)
* For most cases, we would expect a page to utilize at most two levels of headings -- if you need H3s ask yourself if you're going into too much detail
* `blurbs` (an optional element of most pages and include files) used more or less as subtitles should use sentence case but should *not* end with periods
* Subtitle `blurbs` should active "-ing" words where possible
* Use subtitle `blurbs` only where they make sense -- they're *optional*
* `blurbs` for `text-biglink.html` includes should be all lowercase, except for acronyms or key phrases
* For link blurbs, we prefer the language "learn more about..." over something simpler, like "visit..."
* For project names that start with "IDEAS", use a hyphen to link to a distinguishing term.  For example, IDEAS-Classic, IDEAS-ECP, or IDEAS-Watersheds rather than IDEAS Classic, IDEAS ECP, or IDEAS Watersheds

### Graphics

* Graphics with a transparent background are generally preferred wherever possible.  This means PNG or GIF format.  JPEG files do not support transparent backgrounds
* The use of (technically appropriate) "eye-candy" images is encouraged to enhance visual interest
* Be sure to credit image sources where appropriate

### Content-specific

* main nav bar (across the top) (`_data/nav-config.yml`)
    * To level navbar labels should be all lowercase
    * Menu items in dropdown should be title case
* Main page
* Overview
* Activities
    * Activities are something substantial that would be recognized by the public. Funded projects, obviously, but also activities launched by a funded project that may have developed an independent identity with the public.  Events, even an organized series of events, fall under Resources rather than Activities.
    * We currently categorize Activities as _current_, spin-offs, and *past*.  Spin-offs may be separate projects that were actually spun out of another project in the IDEAS umbrella (e.g., xSDK) or activities that are still run by an IDEAS project but have a strong independent identity.  This can be a bit of a judgment call, so discuss it with others if you have any questions
    * Activities that have a separate web presence will generally have a single summary page here with a `text-biglink.html` link to the outside presence at the bottom
    * Activities for which this is the only web presence are encouraged to provide more extensive content (e.g., IDEAS-Classic)
    * For *past* activities, we should consistently indicate the years during which the project was active, to help put it in context
        * For the main page for the activity, start the body of the page with a sentence like "*This project was active 2014–2017.*" (note the use of italics).  See [IDEAS-Classic](https://ideas-productivity.github.io/activities/ideas-classic/) as an example
        * On the cards for past activities, put the dates in the `title` field, like "IDEAS-Classic (2014-2017)".  See the IDEAS-Classic card at the bottom of the [Activities](https://ideas-productivity.github.io/activities/) page as an example
* Resources
* Join

#### Team pages

"Team pages" typically include a list of members of the project team, their affiliations, project roles, and perhaps additional information.  Former team members are often recognized as "Alumni" and listed without photos.  Examples include the [IDEAS-Classic team page](/activities/ideas-classic/team) and the [IDEAS-ECP team page](/activities/ideas-ecp/team).

* Use the `list-6x.html` include file for a photo gallery.  This provides a 6-column display.  Multiple includes can be used to handle more than 6 people.
* Use the `list_-x.htm` include file for a text-only list.  This provides a 3-column display.  Multiple includes can used to handle more than 3 people.
* The `group-title` and optionally `group-blurb` arguments should be used on the *first* include in a group to provide the heading and optionally a brief description.  Subsequent includes in the block should not use any of the `group-*` arguments.
* Participant names and short affiliations (e.g., "Firstname Lastname (XNL)") should appear as the `title*` arguments to the include.
* Information about project roles (e.g., "Institutional PI" or "Computing Facility Liaison") can be included using the `blurb*` arguments.  These should be succinct and should be in plain text (not bold or italicized).
* Either kind of listing (`list-6x` or `list-3x`) can be automated, listing the relevant information in the YAML metadata and processing it in the body using Jekyll (Liquid) scripting.  See the [IDEAS-ECP team page](/activities/ideas-ecp/team) for an example (and code to copy).
* For the page `title``, simply using "Team" is preferred
* It may be appropriate to include a `blurb` (subtitle) that briefly summarizes the institutional membership of the project team (e.g,, "The IDEAS-Classic team includes members from seven national laboratories, one university, and five DOE computing facilities").  As per the guidelines above, blurbs should *not* end with a period.
* In choosing headings for the various blocks, be sensitive to the repetition of words.  If you're on the "Team" page, try to avoid repeating the word "Team" in every heading.  Likewise, if it is clear that this is the IDEAS-ECP team page (perhaps through the page subtitle or other indications), the project name probably doesn't need to be repeated in the headings.
* If you're listing the institutional affiliations of each participant, you don't really need a section that calls out all of the participating institutions.  This might be more appropriate for an "Overview" page for the project (i.e., the parent of the Team page).
