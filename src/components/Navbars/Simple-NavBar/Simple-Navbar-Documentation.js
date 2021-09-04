import navbarLargeScreen from "./simple-navbar-on-large-screen.png";
import navbarPhone from "./simple-navbar-on-phone.png";
import simpleNavbarExample from "./Simple-Navbar-Examples.json";
import simpleNavbarSchema from "./Simple-Navbar-Json-Schema.json";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";

import {
  github, //good light  #1
  xcode, //good light  #2
  googlecode, //good light - #3
  vs, //good light
  vs2015, //good dark
  stackoverflowDark, //good
  stackoverflowLight, //good
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

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
    <img src={navbarLargeScreen} width="80%" />
    <h2>On Phones/tablets</h2>
    <img src={navbarPhone} width="400px" />
    <p>
      This is built using{" "}
      <a
        href="https://getbootstrap.com/docs/5.0/components/navbar"
        target="_blank"
      >
        Bootstrap Nav Bar
      </a>
    </p>
    <h1>Configure site navigation bar</h1>
    <h2>Site Logo</h2>
    <ol>
      <li>
        Rename your logo file as <strong id="isPasted">site-logo.svg</strong>
        &nbsp;
      </li>
      <li>
        Go to <strong>website/src/assets/delivered-assets/brand</strong> folder
      </li>
      <li>
        Copy your logo file <strong>site-logo.svg</strong> here. Keep the file
        name as <strong>site-logo.svg</strong>
      </li>
    </ol>
    <h2>Color Scheme</h2>
    <ol>
      <li>
        Go to <strong>website/src/data/site-specific-data</strong>&nbsp;folder
      </li>
      <li>
        Open <strong>site-configuration.json</strong> in editor
      </li>
      <li>Go to siteMenu &gt; options. It looks like this:</li>
      <li>
        <SyntaxHighlighterStandardised
          language="json"
          content={JSON.stringify(simpleNavbarSchema.examples[0], null, " ")}
        />
      </li>
      <li>
        Set the options to configure your navigation bar. Detailed explainaiton
        is below
      </li>
    </ol>
    <h3>Color Scheme Options</h3>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(simpleNavbarSchema.properties, null, "  ")}
    />
    <h2>Menu Structure and Links</h2>
    <p>
      The Navigation Bar menu is a 2 level menu. At the top level there could
      be:
    </p>
    <ol>
      <li>
        <strong>navigation item</strong>: On click, a page opens. It looks like
        this:
      </li>
      <li>
        <strong>dropdown</strong>: On click, a menu drops down
      </li>
    </ol>
    <h3>Sample Navigation item</h3>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(navItemExample, null, " ")}
    />
    <h3>Sample dropdown</h3>
    The linkTo field can be left blank if the pages are not yet ready. A <strong>drop down</strong> could have further one level of a{" "}
      <strong>list of items</strong>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(dropdownExample, null, " ")}
    />
    <p>To configure the site menu,</p>
    <ol>
      <li>
        Go to <strong>website/src/data/site-specific-data</strong> folder
      </li>
      <li>
        Open <strong>site-configuration.json</strong> in an editor
      </li>
    </ol>
    
    <h1>Example JSON</h1>
    <SyntaxHighlighterStandardised
      language="json"
      content={JSON.stringify(simpleNavbarSchema.examples, null, " ")}
    />
  </div>
);

export default simpleNavbarDocumentation;
