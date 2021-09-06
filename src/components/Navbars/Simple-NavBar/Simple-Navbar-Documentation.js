import navbarLargeScreen from "./simple-navbar-on-large-screen.png";
import navbarPhone from "./simple-navbar-on-phone.png";
import simpleNavbarSchema from "./Simple-Navbar-Json-Schema.json";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";
import marked from "marked";

const navItemExample = {
  label: "Docs",
  className: "nav-item",
  linkTo: "/docs/introduction",
};

const dropdownExample = {
  label: "Features",
  className: "dropdown",
  dropdownItems: [
    {
      label: "Product Standards",
      className: "dropdown-item",
      linkTo: "",
    },
    {
      label: "Reusable UI Components",
      className: "dropdown-item",
      linkTo: "",
    },
    {
      label: "High Configurability",
      className: "dropdown-item",
      linkTo: "",
    },
  ],
};

const simpleNavbarDocumentation = (
  <div>
    <span className="display-3">Simple Navigation Bar</span>
    <p>
      Responsive navigation header, the navigation bar. Includes support for
      branding, navigation, and more. Collapses on smaller screens.
    </p>
    <h1>Preview</h1>
    <h2>On Large Screens</h2>
    <img src={navbarLargeScreen} width="80%" alt="" />
    <h2>On Phones/tablets</h2>
    <img src={navbarPhone} width="400px" alt="" />
    <p>
      This is built using{" "}
      <a
        href="https://getbootstrap.com/docs/5.0/components/navbar"
        target="_blank"
      >
        Bootstrap Nav Bar
      </a>
    </p>
    <article dangerouslySetInnerHTML={{ __html: marked(`
# Configure site navigation bar
## Site Logo
1. Rename your logo file as site-logo.svg 
1. Go to website/src/assets/delivered-assets/brand folder
1. Copy your logo file site-logo.svg here. Keep the file name as site-logo.svg

## Color Scheme
1. Go to website/src/data/site-specific-data folder
1. Open site-configuration.json in editor
1. Go to siteMenu > options. It looks like the example below
<SyntaxHighlighterStandardised
language="json"
content={JSON.stringify(simpleNavbarSchema.examples[0], null, " ")}
/>
1. Set the options to configure your navigation bar. Detailed explainaiton is below
`)}}
    ></article>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(simpleNavbarSchema.examples[0], null, " ")}
    />
    <h3>Color Scheme Options</h3>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(simpleNavbarSchema.properties, null, "  ")}
    />
        <article dangerouslySetInnerHTML={{ __html: marked(`
# Menu Structure and Links
The Navigation Bar menu is a 2 level menu. At the top level there could be:
- **navigation item**: On click, a page opens. It looks like this:
- **dropdown**: On click, a menu drops down

`)}}
    ></article>

    <h3>Sample Navigation item</h3>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(navItemExample, null, " ")}
    />
    <h3>Sample dropdown</h3>
    The linkTo field can be left blank if the pages are not yet ready. A{" "}
    <strong>drop down</strong> could have further one level of a{" "}
    <strong>list of items</strong>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(dropdownExample, null, " ")}
    />
    <article dangerouslySetInnerHTML={{ __html: marked(`
To configure the site menu,

1. Go to **website/src/data/site-specific-data** folder
1. Open **site-configuration.json** in an editor

`)}}
    ></article>
    <h1>Example JSON</h1>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(simpleNavbarSchema.examples, null, " ")}
    />
  </div>
);

export default simpleNavbarDocumentation;
