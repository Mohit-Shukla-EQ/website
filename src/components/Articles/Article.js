import React from "react";
import installation from "data/delivered-data/product-documentation/how to/installation";
import introduction from "data/delivered-data/product-documentation/how to/introduction";
import siteContent from "data/delivered-data/product-documentation/concepts/site content"
import siteHeaderBasics from "data/delivered-data/product-documentation/how to/site-header-basics"
import simpleNavbarDocumentation from "components/Navbars/Simple-NavBar/Simple-Navbar-Documentation"

class Article extends React.Component {
    showPage(){
        switch (this.props.pageId) {
          case "introduction":
            return introduction
          case "installation":
            return installation
          case "site-content":
            return siteContent
          case "site-header-basics":
              return siteHeaderBasics  
          case "navigation-bar":
              return simpleNavbarDocumentation;
          default:
            return "Docs Component cant find the right page for " + this.props.pageId;
        }
      }

      render() {

        return (
              <div className="col-md-9 col-sm-12">
                {this.showPage()}
              </div>

        );
      }

}

export default Article;