import React from "react";
import CenteredHero from "../Centered-Hero/component";
import TextImageColumnsHero from "../Text-Image-Columns-Hero/component";
import * as pages from 'data/site-specific-data/content/pages/pages.json';
import log from "libraries/Log";

/* const pageOptions = pages.pages[0]; */

class Page extends React.Component {
  render() {
    log.write("Entered HomePage.render. pageId:", this.props.pageId)
    let pageOptions;
    for (let i = 0; i < pages.pages.length; i++) {
      if (pages.pages[i].pageId === this.props.pageId) {
        pageOptions = pages.pages[i];
        break;
      }
    }
    
    if (pageOptions == null) {
      for (let i = 0; i < pages.pages.length; i++) {
        if (pages.pages[i].pageId === 'page-not-found') {
          pageOptions = pages.pages[i];
          break;
        }
      }

    }

    return (
      <div>
        {pageOptions.panels.map((panel) => {
          switch (panel.panelName) {
            case "Text-Image-Columns-Hero":
              return <TextImageColumnsHero options={panel.options} />;
            case "Centered-Hero":
              return <CenteredHero options={panel.options} />;
            default:
              break;
          }
          return <h1>Error: React Class Home Page: Unknown Panel Id</h1>;
        })}
      </div>
    );
  }
}

export default Page;
