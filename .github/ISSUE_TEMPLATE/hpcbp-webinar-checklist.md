---
name: HPC-BP webinar checklist
about: A pre-configured checklist to track actions related to a webinar
title: 'HPC-BP webinar checklist: [webinar tag]'
labels: hpcbp webinar checklist
assignees: ''

---

**Preparing initial event**
- Collect initial webinar information
  - [ ] webinar `startdate`
  - [ ] webinat `time`
  - [ ] webinar `title`
  - [ ] webinar abstract
  - [ ] presenter name(s)
  - [ ] presenter affiliation(s)
  - [ ] presenter bio(s)
  - [ ] presenter github id(s)
  - [ ] `registration-url`
  - [ ] `qa-public-url`
  - [ ] `survey public-url`
  - [ ] identify appropriate `bsswio-topics`
- [ ] Technical editor checks webinar abstract
- [ ] Create event in `_events-drafts`
- [ ] Verify content and formatting
- [ ] Move event into `events/hpcbp-webinars/`

**Advertising event**
- [ ] Submit BSSw.io event PR
  - Source is in `/internal/events-hpcbp-bsswio/`
  - Destination is <https://github.com/betterscientificsoftware/betterscientificsoftware.github.io/tree/master/Events>
- [ ] Notify BSSw.io editors of event
  - Source is in `/internal/events-hpcbp-bsswio-digest/`
- Prepare and send MailChimp campaign to full audience
  - [ ] ensure that Mailchimp audience is as up-to-date as possible
  - [ ] prepare announcement campaign
    - Source is in `/internal/events-hpcbp-mailchimp-annonucement/`
  - [ ] schedule distribution of email

**Post-event artifact collection and archiving**
- Collect artifacts in Google Drive
  - [ ] webinar registration list
  - [ ] webinar participation list
  - [ ] slides
  - [ ] Q&A
  - [ ] recording(s)
  - [ ] additional materials (as necessary)
- Add artifacts to i-p.o website and update event
  - [ ] slides
  - [ ] Q&A
  - [ ] additional materials (as necessary)
- Publish recording to YouTube
  - [ ] upload recording(s) to YouTube
    - Source information is in `/internal/events-hpcbp-youtube/`
  - [ ] add YouTube link to event artifacts

**Followup communications**
- [ ] Submit BSSw.io curated content PR
  - Source is <https://ideas-productivity.org/internal/hpcbp-webinars/hpcbp-webinars-cc.md>
  - Destination is <https://github.com/betterscientificsoftware/betterscientificsoftware.github.io/blob/master/CuratedContent/hpcbp-webinars-cc.md>
- Update MailChimp audience w/ appropriate tag
  - [ ] add webinar registrants w/ appropriate tag
  - [ ] add webinar participants w/ appropriate tag
- [ ] Prepare and send MailChimp followup to appropriate tag
