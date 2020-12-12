## 4.1.0 (2020-12-12)


##### Bug Fixes

* **config:** Added missing config details ([a26d395e](https://github.com/KVikram/mybrand/commit/a26d395e3aa1397a5e1b7929b443793babf477aa))
* **overlay:** removed circular reference ([bdbf3748](https://github.com/KVikram/mybrand/commit/bdbf3748f4afceb418f722826639addd043894f5))
* **theme:** removed duplicate theme initialization ([09503bf5](https://github.com/KVikram/mybrand/commit/09503bf5f2f4c15c531843441aabb34731daccb8))

## 4.0.0 (2020-12-11)

##### Breaking Changes

* **material:**
  * upgrade to ng material/flex v10 ([89b4ee07](https://github.com/KVikram/mybrand/commit/89b4ee07c4238829a59215a19d8fb09b7be4e857))
  * upgrade ng material/flex to v9 ([c3144c56](https://github.com/KVikram/mybrand/commit/c3144c569382992e3bea0623076dd4e9688fae93))
* **angular:**
  * upgrade to angular v10 ([50ad1755](https://github.com/KVikram/mybrand/commit/50ad175505c07c91f8552945c778714193c46ef8))
  * upgrade to angular v9 ([2433b848](https://github.com/KVikram/mybrand/commit/2433b8487ae03643c642395842ae83a5df2b12c1))
  * upgrade to v8 angular material ([6ebe5d63](https://github.com/KVikram/mybrand/commit/6ebe5d63c55345c5efbfd6a9b24b51e1673dbf7a))
  * v8 upgrade ([892733f5](https://github.com/KVikram/mybrand/commit/892733f5082ef933d909f7304fdfeb51aca14e55))
* **flex:** upgraded flexlayout to v8 ([5f7105e7](https://github.com/KVikram/mybrand/commit/5f7105e7d521692363627ea439e2a39e1984b416))

##### Chores

* **readme:** Updated angular version number ([ccd7a4c7](https://github.com/KVikram/mybrand/commit/ccd7a4c763d3251367d72dee14e0c5293291fddc))

##### Bug Fixes

* **browserlist:** Renamed file acc to angular v10 ([e93459b6](https://github.com/KVikram/mybrand/commit/e93459b6a0fbceb1df3e86beab928b8851509cd9))

## 3.0.0 (2020-07-12)

##### Chores

* **readme:** Updated readme logo link ([1cc61042](https://github.com/KVikram/mybrand/commit/1cc610426cff621e8405ff4478f7c46e29226232))
* **logos:** Changed site preview logo ([b55345f7](https://github.com/KVikram/mybrand/commit/b55345f7a03da7642a6b30b5c9c6f05b9862398d))
* **images:** Updated site preview ([182b0caf](https://github.com/KVikram/mybrand/commit/182b0caf527173c86f273963f146b388ea8f0fda))
* **license:** Added MIT LICENSE to the repo ([6844db8e](https://github.com/KVikram/mybrand/commit/6844db8ea9353fb5ba750323be97cefa58de53ad))

##### New Features

* **about:** Refined about section with project details and removed SO theming ([79b1ac1d](https://github.com/KVikram/mybrand/commit/79b1ac1dc0382fcf57cebaab65a76be45d8a9278))

##### Bug Fixes

* **pwa:** Removed shortcuts from manifest ([e47ccb0c](https://github.com/KVikram/mybrand/commit/e47ccb0c47c03de9d6a8f0a4fc0e0ab38ae89667))
* **images:** Fixed image names and added 152px - removed old icons ([992a4fa7](https://github.com/KVikram/mybrand/commit/992a4fa76f36cf906cb719c9c128fc39f50b73c3))
* **links:** Fixed wrong links and rel attribute ([7ab22dc3](https://github.com/KVikram/mybrand/commit/7ab22dc38dc827d5420e5eb47a89ca596a240933))
* **performance:** added preconnect and dns-prefetch for faster downloads ([4ab33c76](https://github.com/KVikram/mybrand/commit/4ab33c7654193295a2d43fa406912c55cedaeefa))
* **home:** Made home page details center to viewport ([f233ba43](https://github.com/KVikram/mybrand/commit/f233ba43f3ee628ec73275f492fbc14746cd4742))

##### Performance Improvements

* **sw:** added google fonts & mat icons url in service worker cache ([5fd0f4c3](https://github.com/KVikram/mybrand/commit/5fd0f4c34af04226b3cfac804963037e5b5acde1))
* **lighthouse:** Improved font loading by display swap ([e2f3d568](https://github.com/KVikram/mybrand/commit/e2f3d568e12f1497c7e1db7b7d602ad9ee8c47d9))

##### Refactors

* **about:** Removing SO related stuff and unused css ([bbfe4ba9](https://github.com/KVikram/mybrand/commit/bbfe4ba991c6cde27751173b096099e7b0fe7a53))
* **headers:** Added _headers for netlify ([42cffc1e](https://github.com/KVikram/mybrand/commit/42cffc1e1c0f93b6775ea7ab65c38a46f59ed273))

##### Code Style Changes

* **home:** Added motto to home page ([80dcd433](https://github.com/KVikram/mybrand/commit/80dcd4331e60a916ded84d9090f4198c37b75471))

##### Other Changes (styles)

* **pwa:** Added new icons and resolutions for PWA ([17e1fcd6](https://github.com/KVikram/mybrand/commit/17e1fcd68ff33d0eca5e3652761edfb2f0ab875f))
* **home:** Changed <h2> to <p> tag ([7ad94ed9](https://github.com/KVikram/mybrand/commit/7ad94ed9bd02cabe0842135cde2e05319d875654))

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

* assigned themingSubscription for unsub on destroy
* removed unused code
* added comments
* commented mat-dividers for now
* added structured data for SEO
* SEO related changes
* added #id to compnenets
* added mat-fab class for scroll up icon
* moved Gtag script to bottom, removed Gfont wt 300,OG/Twitter site settings
* added tooltips
* moved flex spacer to style.css
* added new C scrollUp for scrolling to top from bottom content
* introduced robots.txt
* optimised images for faster loading and changes in json for same
* removed unused css and code refactor
* added alt text for image and aria for button
* added some settings for lighthouse errors
* introduced new C -blogposts from WP
* moved http calls to ngOnInit() & added mat divider for tech stack
* added '?' in ngFor object to avoid undefined errors and moved http calls to ngOnInit()
* added apple touch icons for more resolutions
* split 'Micro services' to resolve the text overflow issue
* code indentation with beautifier
* aligned theme toggle icons properly inline with media icons
* code indent
* added hidden branding
* destroy method to avoid memory leaks
* added dev label to build number
* custom typography added to site
* removed 'Level' label for better UI
* changed share link to website link
* added toggle to light and dark mode --changed templates to reflect proper theme
* changed PWA icons from logo without name and theme to dark
* changed angular theme to deeppurple-amber for ight mode
* updated readme for netlify
* added SO badge in about section
* introduced new comp techstack and added icons for diff skills from icons8
* code indentation/refactor and renamed ngFor object
* removed mat-grid-list and moved to flex layout for RWD
* added gtag code for google analytics
* added hammerjs import
* added new logo with favicon and images for PWA along with theming
* Merge branch 'master' of https://github.com/KVikram/mybrand
* added redirects for netlify deploy
* Update README.md
* added mat icon & steplabel and header custom styles
* added flex layout module and removed unwanted angular material mod deps
* changed the dark mode icon
* Introducing timeline module --added new component and changes around it
* added vscode settings to ignore
* added app version(build number) code to the footer
* added comments for theme icons
* Initial commit v0.1 of #mybrand
* Initial commit
