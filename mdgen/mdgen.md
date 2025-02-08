# Instructions

1. Add to main nav element on top 10.125em height, width 100%.
2. Add it to body, not main, before main.
3. Nav has background color #5964E0.
4. Delete justify-content from body.
5. Remove padding from body.
6. Down left corner of nav has border-radius 100px.
7. Replace both stylesheets in link with one: <https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap>.
8. In skeleton.json, change font family of body to "Kumbh Sans", serif.
9. Add a `div` element as a child of `nav` with the following styles:
   - width: 100%
   - height: 32px
   - display: flex
   - align-items: center
   - justify-content: space-between
   - max-width: 90rem
   - margin-inline: auto
   - padding-inline: 39px
   - box-sizing: border-box
   - margin-top: 45px
10. (Manually resolved Copy `logo.svg` from the `images` folder in `static` and paste it in the `converter` folder in the root directory).
11. (Manually resolved running `npm run convert-svg` because it couldn't be done automatically).
12. Copy the content of `logo.json` exactly as it is into `templates.json` and add the key `name` with the value `"logo"`.
13. Add a `cwrap-template` element inside the `div` with the text "cwrapTemplate[logo]".
14. Add another `div` element as a sibling to the `cwrap-template` element inside the first child div of the `nav` with the following styles:
    - max-width: 112px
    - min-height: 24px
    - width: 100%
15. (Manually resolved Copy `icon-moon.svg` from the `images` folder in `static` and paste it in the `converter` folder in the root directory).
16. (Manually resolved Copy `icon-sun.svg` from the `images` folder in `static` and paste it in the `converter` folder in the root directory).
17. (Manually resolved running `npm run convert-svg` because it couldn't be done automatically).
18. Copy the content of `icon-moon.json` and `icon-sun.json` exactly as they are into `templates.json` and add the key `name` with the values `"iconMoon"` and `"iconSun"` respectively.
19. Update the children of the nested div inside the nav element to include `cwrap-template` with `logo`, and another nested div containing `cwrap-template` with `iconSun`, a `label` element, and `cwrap-template` with `iconMoon` with the following styles:
    - align-items: center
    - display: flex
    - justify-content: space-between
    - max-width: 112px
    - min-height: 24px
    - width: 100%
    - The nested label between the templates should have:
      - max-width: 48px
      - min-height: 24px
      - width: 100%
      - background-color: white
      - border-radius: 12px
20. Update the `input` element inside the `label` to have `margin: 0;` and `transform: translateX(-12px);`.
21. Add `cursor: pointer;` to both the `label` and `input` elements inside the `nav`.
22. Create a `main.ts` file inside the `static/scripts` folder with a console log statement.
23. Update the `input` element inside the `label` to have an `id` attribute with the value `theme-switcher`.
24. Ensure the `input` element inside the `label` has a `type` attribute with the value `checkbox`.
25. Add a `script` element as a child of the `body` element, just after the `main` element, with the `src` attribute set to `static/scripts/main.js`.
