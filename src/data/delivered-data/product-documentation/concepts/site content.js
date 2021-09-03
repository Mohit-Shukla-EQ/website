import { docco, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const siteContent = (
  <>
    <h1 id="site-content">Site Content</h1>
    <p>
      <strong>Site Content</strong>: Site content consists of objects like site
      structure, menu, some pages, etc. We provide{" "}
      <strong>Site Content Starter Templates</strong> stored on the cloud. A
      starter template is a sample <strong>site content</strong>
    </p>
    <h2 id="new-site-setup">New site setup</h2>
    <p>
      After fresh installation, the site designer should be able to get a
      starter template from a repo.
    </p>
    <ol>
      <li>Select a starter template</li>
      <li>Fork it for your own use in your own GitHub account</li>
      <li>
        Download template This will give you a sample template on your brand new
        site. You can start editing.
      </li>
    </ol>
    <h2 id="content-changes">Content Changes</h2>
    <ol>
      <li>
        Make changes on your fork to customize it for your site.
        <ol>
          <li>
            make changes in the forked repository. This ensures that all
            revisions of your site are stored in the version history
          </li>
          <li>
            Update the site each time you make changes by downloading the latest
            version{" "}
          </li>
        </ol>
      </li>
    </ol>
    <h2 id="reverting-content-back-to-a-previous-state">
      Reverting content back to a previous state
    </h2>
    <p>
      Github stores all your site content versions. To revert your site back
      into a previous state, simply update your site with a previous version of
      your content.{" "}
    </p>
    <h2 id="approval-workflow-for-site-content">
      Approval Workflow for Site Content
    </h2>
    <p>
      Since the site content is stored in a git repository, you can easily
      implement a maker-checker kind of an approval workflow if you require.{" "}
    </p>
  </>
);

export default siteContent;
