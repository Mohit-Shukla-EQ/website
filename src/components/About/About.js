import React from "react";
import Markdown from "../Markdown/Markdown";
import Album from "../Album/Album";
import CollapsibleSidebar from "../Sidebars/Collpasible/Collapsible-Sidebar";

class About extends React.Component {
  render() {
    return (
      <div className="container-xxl my-md-4 bd-layout text-start">
        <div className="row align-items-start">
          <div className="col-md-3 col-sm-12">
            <CollapsibleSidebar />
          </div>
          <div className="col-md-9 col-sm-12">
            <h2>About from Component</h2>
            <Markdown />
            <Album />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
