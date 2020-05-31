# About the Volunteer Coordinator Playbook

This Playbook is a **working prototype**.

# Get Started with this Playbook Template

Kickstart your documentation processes by using this template as a guide. This template includes a ton of information on volunteer best practices. Edit what works for you, add pages and practices, and edit the style to fit your brand.

## Editing & Adding Pages

All pages are contained within the `content/playbook` folder. Each section of the Playbook has it's own folder containing a section title page and folders for each of that section's pages. The text content of each page is written in [Markdown](https://www.markdownguide.org/), and saved as `index.md`.

Additionally, you'll want to delete the files `index.tsx` and `index.module.scss` in the folder `src/pages` and rename the files `playbook.tsx` and `playbook.module.scss` to `index` instead to remove our product page from your Playbook.

### Editing Pages

Each page (`index.md` within each page's folder) contains two parts.

The first is called frontmatter, and will look like this:

```
---
title: "Don’t Assume Everyone Knows You"
section: "Day of Event"
---
```

Frontmatter is where you will edit the title that appears on the page and the section the page belongs in.

Additionally, you may include case study callouts on each page. These are entered in the frontmatter as well by adding `calloutTitle: ""` and `calloutText: ""`:

```
---
title: "Don’t Assume Everyone Knows You"
section: "Day of Event"
calloutTitle: "Case Study"
calloutText: "An example of volunteering..."
---
```

The second part is the content of the page. This goes below the frontmatter and can be edited like normal text. To use headings, bolding, italics, lists, and images, refer to the [Markdown Guide's Cheatsheet](https://www.markdownguide.org/cheat-sheet/).

### Adding New Sections

To add a new section, you will need to do two things.

First, find the file named `pages.json` in the `src/data` folder. This file contains a list of every page in the Playbook placed in order as they appear. To add a new section, place this code between sections in the order you wish the new section to appear:

```
{
"title": "Section Name",
"slug": "/section-name/",
"subpages": [
    {
    "title": "Page Name",
    "slug": "/section-name/page-name/"
    },
},
```

Be aware, if this is the last page, you do not need the comma at the end of the last closing bracket for both the section and the subpages. Make sure the slug name does **not** include spaces.

Once the new section is added to this file, find the `section-template` folder within `content/playbook`. Duplicate this folder. It should automatically be placed within the `playbook` folder, but double check to make sure. Once duplicated, edit the name of the folder to be exactly the same as the name you added as the slug in the `data.json` file.

From there, you can open the `index.md` file within your new folder. Then you can begin editing the rest of the page.

### Adding New Pages

To add a new page, you will need to do two things.

First, find the file named `pages.json` in the `src/data` folder. This file contains a list of every page in the Playbook placed in order as they appear. Find the section you want to add a page to. between that section's `subpages: [` brackets, each page will be listed in order. Add your new page by placing this code in the order you want the page to appear:

```
 {
    "title": "Page Name",
    "slug": "/section-name/page-name/"
    },
```

If this a new section you added, you should already have a subpage you can edit the name and slug for. Be aware, if this is the last page, you do not need the comma at the end of the last closing bracket.

Once the new page is added to this file, find the `page-template` folder within `content/playbook/section-template`. Duplicate this folder into the section you wish to add the page to. Once duplicated, edit the name of the folder to be exactly the same as the slug name you added in the `data.json` file. Make sure your folder name does **not** include spaces. From there, you can open the `index.md` file within your new folder and begin editing the page.

## Editing Colors & Fonts

To update the Playbook to match your own brand style, there are a few different things you can do.

### Colors

The easiest way to update the Playbook with your organization's brand colors is to get the primary color (in hex format). Open `src/styles/_theme.scss` and replace the color after `$brandColor:` at the top of the document (ex: `#3d7cff`).

If you wish to fine-tune your color selections, you can also edit any of the remaining colors in the `_theme.scss` document. Make sure you account for appropriate color contrast. You want to make sure people can read your document, after all!

### Fonts

Fonts are also specificed within the `src/styles/_theme.scss` file, but require extra work. The easiest way to replace fonts is to use Google Fonts. Find the name of the font you'd like to add, and replace `Inter` in the `gatsby-config.js` file (line 73). You can also specify the font weights on the same line. Then, in the `_theme.scss` file, replace `Inter` with the name of your font.

For more information on using Google Fonts with Gatsby, read the package page for [gatsby-plugin-google-fonts](https://www.gatsbyjs.org/packages/gatsby-plugin-google-fonts/).

## Replacing Images

The Playbook comes with default images created using [Open Peeps](https://www.openpeeps.com/). You can opt to replace these with your own images or illustrations.

### Logo

To add your own logo, replace the file `logo.png` located with the `content/assets` folder with an image of the same exact name (must be a `.png` file). Your image should be at least 100 pixels tall to preserve image quality.

### Cover Image

To replace the cover image on the homepage, replace the file `coverImage.png` (also within the `content/assets` folder) with an image of the same exact name (must be a `.png` file). This image should be fairly large (think at least 1500 pixels wide or larger).

### Section Hero Images

To replace each section's hero image, add an image to that section's folder (ex: `day-of-event`) and then replace the url for `coverImage: "peeps.png"`. (Here, peeps.png is the url). Make sure your url is surrounded in quotations.

### Inline Images

These can be added anywhere within the text using markdown. Refer to the [Markdown Guide's Cheatsheet](https://www.markdownguide.org/cheat-sheet/) for more information.

## Deploying

_Note: Must have [Yarn](https://yarnpkg.com/getting-started) & [Gatsby](https://www.gatsbyjs.org/docs/) installed._

Deploying changes is as simple as running `yarn run deploy` from a terminal window. This automatically publishes changes to your forked github repo under a `gh-pages` branch. For more information on how GitHub Pages works, check out [their documentation](https://pages.github.com/).

## Technical Details

This Playbook was built using [Gatsby](https://www.gatsbyjs.org/) with CSS modules.

## Credits

Illustrations: Open Peeps by Pablo Stanley [https://www.openpeeps.com/](https://www.openpeeps.com/)
Gatsby: [https://www.gatsbyjs.org/](https://www.gatsbyjs.org/)
