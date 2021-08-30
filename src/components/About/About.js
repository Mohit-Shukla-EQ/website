import React from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "../Markdown/Markdown";
import Album from "../Album/Album";


class About extends React.Component {
  render() {
    return (
    <div class="text-start"> 
      <h2>About from Component</h2>
      <Markdown />
      <Album />
      </div>
    )
  }
}

export default About;
