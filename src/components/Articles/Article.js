import React from "react";
import installation from "data/delivered-data/product-documentation/how to/installation";
import siteHeaderBasics from "data/delivered-data/product-documentation/how to/site-header-basics";
import simpleNavbarDocumentation from "components/Navbars/Simple-NavBar/Simple-Navbar-Documentation";
import Markdown from "components/Markdown/Markdown";
import centeredHeroDocumentation from "components/Centered-Hero/centered-hero-documentation";

class Article extends React.Component {
  showPage() {
    switch (this.props.pageId) {
      case "installation":
        return installation;
      case "site-header-basics":
        return siteHeaderBasics;
      case "navigation-bar":
        return simpleNavbarDocumentation;
      case "centered-hero":
        return centeredHeroDocumentation;
        
      default:
        return (
          "Article Component cant find the right page for " + this.props.pageId
        );
    }
  }

  render() {
    switch (this.props.pageId) {
      case "introduction":
      case "site-content":
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
