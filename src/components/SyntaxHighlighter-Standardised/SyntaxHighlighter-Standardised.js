import React from "react";
import {
    github, //good light  #1
    xcode, //good light  #2
    googlecode, //good light - #3
    vs, //good light
    vs2015, //good dark
    stackoverflowDark, //good
    stackoverflowLight, //good
  } from "react-syntax-highlighter/dist/esm/styles/hljs";
  import SyntaxHighlighter from "react-syntax-highlighter";
  
  const hljsStyle = github

  class SyntaxHighlighterStandardised extends React.Component {
      render(){
          return (
            <SyntaxHighlighter
            language={this.props.language}
            style={hljsStyle}
            wrapLines={true}
            lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
            customStyle={{ maxHeight: "400px" }}
          >
            {this.props.content}
          </SyntaxHighlighter>
          )
      }
  }

  export default SyntaxHighlighterStandardised