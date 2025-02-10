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
    - height: fit-content
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
26. In `main.ts`, add logic to handle theme switching based on local storage and add an event listener to update local storage and perform root changes when the theme is switched.
27. In `globals.json`, add a `root` pseudo-class with styles for `--main-background-color` and a separate block for `root.dark` class with the following styles:
    - `--input-background-color: rgba(25, 32, 45, 0.1);`
    - `--main-background-color: #F4F6F8;`
    - `--main-background-color2: white;`
    - `--main-h2-color: #19202D;`
    - `--input-background-color: rgba(255,255,255,0.1);`
    - `--main-background-color: #121721;`
    - `--main-background-color2: #19202D;`
    - `--main-h2-color: white;`
    - `color-scheme: dark;`
28. In `skeleton.json`, update the `body` element's background color to use the `--main-background-color` variable.
29. In `globals.json`, add a `body,div` element with a background-based transition style.
30. Add `padding-top: 44px;` to the first `div` inside the `nav` element.
31. Ensure the `nav` element's background fills its container fully and never exceeds it by setting `background-size` to `cover`.
32. Add `cursor: pointer;` to the `label` element inside the `nav`.
33. Fetch data from `static/data.json` in `main.ts` and log it to the console.
34. Replace `./assets` with `static/images` in the `logo` field for each item in the fetched data.
35. Add a constant `main` to query the main element in `main.ts`.
36. Add a `ul` element as a child of the `main` element with the following styles:
    - display: grid
    - gap: 65px 30px
    - grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))
    - margin-inline: auto
    - margin-top: 119px
    - max-width: 69.375em
    - width: 100%
37. Add an `extend` key to the `ul` element inside the `main` element with the following styles:
    - background-color: var(--main-background-color2)
    - min-height: 228px
    - width: 100%
    - border-radius: 6px
    - box-sizing: border-box
    - display: flex
    - flex-direction: column
    - height: 100%
    - padding: 49px 32px 32px 32px
    - position: relative
38. Create `itemContainerInner1stRow` which is a `div` and append it as the first child of `itemContainerInner`.
39. Create `p` elements for `postedAt` and `contract`, and a `span` element as a separator, then append them to `itemContainerInner1stRow`.
40. Add a `p,span,h2` element to the `classroom` with the style `margin: 0`.
41. Add an `h2` element with `item.position` as text content to `itemContainerInner`.
42. Add another extension `> li > div > h2` with the styles `font-weight: bold`, `font-size: 20px`, `color: #19202D`, and `margin-top: 13px`.
43. Insert a `div` element as the first child of `itemContainerInner` and set its background color to `item.logoBackground`.
44. Update the common part `> li > div > div` to `> li > div > div:nth-of-type(2)` in the specified extensions.
45. Add an extension `> li > div > div:nth-of-type(1)` with the styles `position: absolute`, `top: -25px`, `width: 50px`, `height: 50px`, and `border-radius: 15px`.
46. Extend the 3rd label with the extension `:has(input:checked) > div` and add the style `background-color: #5964E0`.
47. Update the `div` containing the `input` and `p` elements to have `min-width: 24px`, `height: 24px`, and `border-radius: 3px`.
48. Update the first and second inputs to have `autocomplete="off"` and set the `Search` button to have `cursor: pointer`.
49. Add an extension to the `Search` button for `:hover` with the style `background-color: #939BF4`.
50. Add an extension to the theme switcher `label` for `:hover > input:nth-of-type(1)` with the style `background-color: #939BF4`.
51. Add `transition: transform 300ms, background-color 300ms;` to the `input` element with `id="theme-switcher"`.
52. Add `padding-bottom: 104px;` to the `main` element's style.
53. Add a `button` element after the `ul` element inside the `main` element with the following styles:
    - align-items: center
    - align-self: center
    - background-color: #5964E0
    - border: none
    - border-radius: 5px
    - color: white
    - cursor: pointer
    - display: flex
    - font-family: 'Kumbh Sans', serif
    - font-size: 16px
    - font-weight: bold
    - justify-content: center
    - max-width: 141px
    - min-height: 48px
    - width: 100%
    - Add an extension for `:hover` with the style `background-color: #939BF4`
