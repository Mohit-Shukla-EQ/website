import React from "react";
import installation from "data/delivered-data/product-documentation/how to/installation";
import introduction from "data/delivered-data/product-documentation/how to/introduction";
import siteContent from "data/delivered-data/product-documentation/concepts/site content"

class Article extends React.Component {
    showPage(){
        switch (this.props.pageId) {
          case "introduction":
            return introduction
          case "installation":
            return installation
          case "site-content":
            return siteContent
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