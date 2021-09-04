import navbarLargeScreen from "./simple-navbar-on-large-screen.png";
import navbarPhone from "./simple-navbar-on-phone.png";
import simpleNavbarExample from "./Simple-Navbar-Examples.json";
import simpleNavbarSchema from "./Simple-Navbar-Json-Schema.json";


import {
    a11yDark,
    a11yLight,
    agate,
    anOldHope,
    androidstudio,
    arduinoLight,
    arta,
    ascetic,
    atelierCaveDark,
    atelierCaveLight,
    atelierDuneDark,
    atelierDuneLight,
    atelierEstuaryDark,
    atelierEstuaryLight,
    atelierForestDark,
    atelierForestLight,
    atelierHeathDark,
    atelierHeathLight,
    atelierLakesideDark,
    atelierLakesideLight,
    atelierPlateauDark,
    atelierPlateauLight,
    atelierSavannaDark,
    atelierSavannaLight,
    atelierSeasideDark,
    atelierSeasideLight,
    atelierSulphurpoolDark,
    atelierSulphurpoolLight,
    atomOneDarkReasonable,
    atomOneDark,
    atomOneLight,
    brownPaper,
    codepenEmbed,
    colorBrewer,
    darcula,
    dark,
    defaultStyle,
    docco,
    dracula,
    far,
    foundation,
    githubGist,
    github,
    gml,
    googlecode,
    gradientDark,
    gradientLight,
    grayscale,
    gruvboxDark,
    gruvboxLight,
    hopscotch,
    hybrid,
    idea,
    irBlack,
    isblEditorDark,
    isblEditorLight,
    kimbieDark,
    kimbieLight,
    lightfair,
    lioshi,
    magula,
    monoBlue,
    monokaiSublime,
    monokai,
    nightOwl,
    nnfxDark,
    nnfx,
    nord,
    obsidian,
    ocean,
    paraisoDark,
    paraisoLight,
    pojoaque,
    purebasic,
    qtcreatorDark,
    qtcreatorLight,
    railscasts,
    rainbow,
    routeros,
    schoolBook,
    shadesOfPurple,
    solarizedDark,
    solarizedLight,
    srcery,
    stackoverflowDark,  //good 
    stackoverflowLight, //good 
    sunburst,
    tomorrowNightBlue,  
    tomorrowNightBright,
    tomorrowNightEighties,
    tomorrowNight,
    tomorrow,
    vs,   //good light
    vs2015,   //good dark
    xcode,    //good light
    xt256,
    zenburn,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

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
    <p>This is built using <a href="https://getbootstrap.com/docs/5.0/components/navbar" target="_blank">Bootstrap Nav Bar</a></p>
    <h1>Site Logo</h1>
    Site logo is stored at{" "}
    <strong>website/src/assets/delivered-assets/brand/site-logo.svg</strong> in
    your applicaiton folder. Replace this file with your logo file. Keep the
    file name as <strong>site-logo.svg</strong>
    <h1>Example JSON</h1>
    
    <SyntaxHighlighter
      language="json"
      style={vs2015}
      wrapLines={true}
      lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
      customStyle={{height: "500px"}}
    >
        
      {JSON.stringify(simpleNavbarExample, null, " ")}
     
    </SyntaxHighlighter>
    
    <h1>Definition of Configuration Options</h1>
    <SyntaxHighlighter

      language="json"
      style={github}
      wrapLines={true}
      lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
      customStyle={{height: "500px"}}
    >
      {JSON.stringify(simpleNavbarSchema, null, "  ")}
    </SyntaxHighlighter>

  </div>
);

export default simpleNavbarDocumentation;
