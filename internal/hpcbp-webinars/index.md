---
layout: page
title: HPC-BP Webinar Utility Pages
blurb: "Not intended for public use"
series: "HPC Best Practices Webinars"
---

*The resources on this page are intended for internal use in support of the [HPC-BP webinar series](/resources/series/hpc-best-practices-webinars/).  Nothing here should be linked from any public webpage.*

- **[Content helper pages](hpcbp-helpers)** 
  - **Pre-event content**
    - BSSw.io event articles
    - BSSw.io digest content for event articles
    - Mailchimp announcement message
  - **Post-event content**
    - YouTube content
    - Mailchimp follow-up message
- **BSSw.io summary curated content article:** [hpcbp-webinars-cc.md](hpcbp-webinars-cc.md)

## Script to submit event PR to BSSw.io

Assumes i-p.o site has been built locally and bssw.io repository clone is next to i-p.o repository clone within the `GitHub` directory.

By convention, `<filename>` should be of the form `hpcbp-`*nnn*`-`*keywords*, where *nnn* is the sequence number of the webinar and *keywords* are key words from the title, which are used to help identify it.

```bash
    cd GitHub/bssw.io
    git switch main
    git pull
    git branch bernhold-hpcbp-event
    git switch bernhold-hpcbp-event
    cp ../ideas-productivity.github.io/_site/internal/events-hpcbp-bsswio/<filename>.html Events/<filename>.md
    git add Events/<filename>.md
    git commit -m "next HPC-BP webinar"
    git push --set-upstream origin bernhold-hpcbp-event
    gh pr create -a @me -f
    gh pr edit --add-label "content: event"
    gh pr checks
    gh pr merge --merge
```

## Script to submit cc PR to BSSw.io
