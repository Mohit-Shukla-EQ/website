Contents
- [Site Content](#site-content)
  - [New site setup](#new-site-setup)
  - [Content Changes](#content-changes)
  - [Reverting content back to a previous state](#reverting-content-back-to-a-previous-state)
  - [Approval Workflow for Site Content](#approval-workflow-for-site-content)
- [Configuration files](#configuration-files)
- [Pages](#pages)
- [Panels](#panels)


# Site Content
**Site Content:** Site content consists of objects like site structure, menu, some pages, etc. We provide Site Content Starter Templates stored on the cloud. A starter template is a sample site content

## New site setup
After fresh installation, the site designer should be able to get a starter template from a repo.

1. Select a starter template
1. Fork it for your own use in your own GitHub account
1. Download template This will give you a sample template on your brand new site. You can start editing.

## Content Changes
Make changes on your fork to customize it for your site.
1. Make changes in the forked repository. This ensures that all revisions of your site are stored in the version history
1. Update the site each time you make changes by downloading the latest version

## Reverting content back to a previous state
Github stores all your site content versions. To revert your site back into a previous state, simply update your site with a previous version of your content.

## Approval Workflow for Site Content
Since the site content is stored in a git repository, you can easily implement a maker-checker kind of an approval workflow if you require.

# Configuration files
All site configurations are simple to edit and structured as they are stored inform of json files. [In case you wish to read more about json](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

# Pages
The applicaiton screens are called pages. Pages are of following types:
1. **Markdown**: Simple markdown (.md) files. Easiest to add.  
2. **codified**: A very simple .js file which has HTML with embedded react components all assigned into a constant. Rendered using **Article** componment. Articles also show up a table of content in sidebar.
3. **Pages**: defined as a series of panels insde a configuration file. 

# Panels
A panel is a section on a page that normally stretches from left to right. A page can be viewed as a series of vertically arranged panels.  



