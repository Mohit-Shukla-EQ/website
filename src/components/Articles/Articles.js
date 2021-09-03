import React from "react";
import CollapsibleSidebar from "../Sidebars/Collpasible/Collapsible-Sidebar";
import Article from "./Article"

class Articles extends React.Component {



  render() {

    return (
      <div className="container-xxl my-md-4 bd-layout text-start">
        <div className="row align-items-start">
          <div className="col-md-3 col-sm-12">
            <CollapsibleSidebar />
          </div>
          <Article pageId={this.props.pageId} />
        </div>
      </div>
    );
  }
}

export default Articles;
