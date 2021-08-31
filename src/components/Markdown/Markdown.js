import React from "react";
import ReactMarkdown from "react-markdown";
import markdownList from '../../data/site-specific-data/content/collections/texts'

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
    render() {
      return (
      <div class="text-start"> 
        <ReactMarkdown 
          children={markdownList[0].content} />
        </div>
      )
    }
  }
  
  export default Markdown;