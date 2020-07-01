#### v1.2.0 (2020-07-01)

##### New Features

* **home:** Introduced home banner (cdd57245)
* **profile:** Introduced gitConnected HTTP GET data to fetch profile info dynamically (fd0551b6)
* **service:** Introduced new shared data service (f1a18f5f)
* **theme:** Introduced transition while switching theme (2f57cdbd)

##### Bug Fixes

* **fonts:** Fixed preconnect issue by lighthouse (8512ab0b)
* **techstack:** added CSS to break long text and decrease font size <400px (f776dcf0)
* **home:**
  * Removed 100vh width for scaling issues (07c1f650)
  * Made nav bar sticky and changed styles (ebfd9b23)
* **timeline:** added aria-labels to mat-chips (34add1f7)
* **link:** Changed skip link value (7355079f)
* **lighthouse:** added aria labels and fixed lighthouse issues (e04047f9)
* **SEO/lighthouse:** added maskable prop;Gsite verf;sitemap (db0f4cee)

##### Code Style Changes

* **scroll:** Changed icon to Navigation (77bdbb88)
* **theme:** styles for theme transition (111e1f11)

##### Tests

* **e2e:**  Updated e2e tests (f5bf77ca)

#### v1.1.0 (2020-06-21)

##### New Features

* **theme:** Introduced transition while switching theme (2f57cdbd)

##### Bug Fixes

* **lighthouse:** added aria labels and fixed lighthouse issues (e04047f9)
* **SEO/lighthouse:** added maskable prop;Gsite verf;sitemap (db0f4cee)

##### Code Style Changes

* **theme:** styles for theme transition (111e1f11)

##### Tests

* **e2e:**  Updated e2e tests (f5bf77ca)

#### v1.0.1 (2020-06-15)

##### Documentation Changes

* **readme:**
  * Update readme (80d6c7a9)
  * Updated readme and introduced changelog (816b64f1)

##### Tests

* **e2e:**  Updated e2e tests (f5bf77ca)

#### v1.0.0 (2020-06-15)

##### Beta release Changes

* //github.com/KVikram/mybrand (9539b1d3)

-assigned themingSubscription for unsub on destroy
-removed unused code
-added comments
-commented mat-dividers for now
-added structured data for SEO
-SEO related changes
-added #id to compnenets
-added mat-fab class for scroll up icon
-moved Gtag script to bottom, removed Gfont wt 300,OG/Twitter site settings
-added tooltips
-moved flex spacer to style.css
-added new C scrollUp for scrolling to top from bottom content
-introduced robots.txt
-optimised images for faster loading and changes in json for same
-removed unused css and code refactor
-added alt text for image and aria for button
-added some settings for lighthouse errors
-introduced new C -blogposts from WP
-moved http calls to ngOnInit() & added mat divider for tech stack
-added '?' in ngFor object to avoid undefined errors and moved http calls to ngOnInit()
-added apple touch icons for more resolutions
-split 'Micro services' to resolve the text overflow issue
-code indentation with beautifier
-aligned theme toggle icons properly inline with media icons
-code indent
-added hidden branding
-destroy method to avoid memory leaks
-added dev label to build number
-custom typography added to site
-removed 'Level' label for better UI
-changed share link to website link
-added toggle to light and dark mode --changed templates to reflect proper theme
-changed PWA icons from logo without name and theme to dark
-changed angular theme to deeppurple-amber for ight mode
-updated readme for netlify
-added SO badge in about section
-introduced new comp techstack and added icons for diff skills from icons8
-code indentation/refactor and renamed ngFor object
-removed mat-grid-list and moved to flex layout for RWD
-added gtag code for google analytics
-added hammerjs import
-added new logo with favicon and images for PWA along with theming
-Merge branch 'master' of https://github.com/KVikram/mybrand
-added redirects for netlify deploy
-Update README.md
-added mat icon & steplabel and header custom styles
-added flex layout module and removed unwanted angular material mod deps
-changed the dark mode icon
-Introducing timeline module --added new component and changes around it
-added vscode settings to ignore
-added app version(build number) code to the footer
-added comments for theme icons
-Initial commit v0.1 of #mybrand
-Initial commit
