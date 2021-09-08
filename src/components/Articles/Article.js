import React from "react";
import installation from "data/delivered-data/product-documentation/how to/installation";
import siteHeaderBasics from "data/delivered-data/product-documentation/how to/site-header-basics";
import simpleNavbarDocumentation from "components/Navbars/Simple-NavBar/Simple-Navbar-Documentation";
import Markdown from "components/Markdown/Markdown";
import centeredHeroDocumentation from "components/Centered-Hero/documentation";
import textImageColumnsHeroDocumentation from "components/Text-Image-Columns-Hero/documentation";
import log from "libraries/Log";

class Article extends React.Component {
  showPage() {
    log.write(0, "Article", "showPage", this.props);
    switch (this.props.pageId) {
      case "installation":
        return installation;
      case "site-header-basics":
        return siteHeaderBasics;
      case "navigation-bar":
        return simpleNavbarDocumentation;
      case "text-image-columns-hero":
        return (
          <div>
            <a
              class="btn btn-primary"
              href="/component/text-image-columns-hero"
              role="button"
              target="_blank"
            >
              Full width page
            </a>
            {textImageColumnsHeroDocumentation}
          </div>
        );
      case "centered-hero":
        log.write(2, "Article", "showPage", this.props, "case centered-hero");
        return (
          <div>
            <a
              class="btn btn-primary"
              href="/component/centered-hero"
              role="button"
              target="_blank"
            >
              Full width page
            </a>
            {centeredHeroDocumentation}
          </div>
        );

      default:
        return (
          "Article Component cant find the right page for " + this.props.pageId
        );
    }
  }

  render() {
    log.write(0, "Article", "render", this.props);
    switch (this.props.pageId) {
      // open a markdown file
      case "introduction":
      case "site-content":
      case "develop-new-component":
      case "markdown":
        return (
          <div className="col-md-9 col-sm-12">
            <Markdown filePath={this.props.pageId} />
          </div>
        );

      default:
        return <div className="col-md-9 col-sm-12">{this.showPage()}</div>;
    }
  }
}

export default Article;
