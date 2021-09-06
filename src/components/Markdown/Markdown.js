import React from "react";
import marked from "marked";
import siteContent from "data/delivered-data/product-documentation/concepts/site content.md";

import introduction from "data/delivered-data/product-documentation/how to/introduction.md";
import markdownDoc from "components/Markdown/Readme.md";


class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { markdown: null };
  }

  componentDidMount() {
    let filePath;
    switch (this.props.filePath) {
      case "introduction":
        filePath = introduction;
        break;
      case "site-content":
        filePath = siteContent;
        break;
      case "markdown":
        filePath = markdownDoc;
        break;
      default:
        break;
    }

    fetch(filePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          markdown: marked(text),
        });
      });
  }

  render() {
    const { markdown } = this.state;

    return (
      <section>
        <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
      </section>
    );
  }
}

export default Markdown;
