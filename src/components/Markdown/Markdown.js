import React from "react";
import ReactMarkdown from "react-markdown";
import marked from "marked";
import markdownList from '../../data/site-specific-data/content/collections/texts'
import readmePath from "./Readme.md"

/* const markdown = `
  # Header 1 New
  ## Header 2

  *italic*



  **bold**

  list
  - asas
  - asasas
    - asasas

    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
    
  `; */

  class Markdown extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = { markdown: null }
    }

    componentDidMount() {
      //const readmePath = require("./Readme.md");
    
      fetch(readmePath)
        .then(response => {
          return response.text()
        })
        .then(text => {
          this.setState({
            markdown: marked(text)
          })
        })
    }

    
/*     render() {
      return (
      <div class="text-start"> 
        <ReactMarkdown 
          children={markdownList[0].content} />
        </div>
      )
    } */

    render() {
      const { markdown } = this.state;
    
      return (
        <section>
          <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        </section>
      )
    }

  }
  
  export default Markdown;