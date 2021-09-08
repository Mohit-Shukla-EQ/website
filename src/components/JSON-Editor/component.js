import React from "react";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";
import log from "libraries/Log";


class JSONEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.options;
    this.handleChange = this.handleChange.bind(this); 
  }

   handleChange(e) {
    log.write("Entered JSONEditor.handleChange. e.target.value: ", e.target.value)
    this.setState(JSON.parse(e.target.value));
    log.write("Inside JSONEditor.handleChange. State is set. State: " , this.state)
    this.props.onChange(e.target.value) 
    
  } 

  render() {
    
    let jsonString = JSON.stringify(this.state, null, " ")
    return (
      <div className="row text-start">
      <div className="col">
        <strong>Source Configuration</strong>
        <SyntaxHighlighterStandardised
          language="json"
          content={jsonString}
        />
      </div>

      <div className="col">
        <strong>Edit to see live changes</strong>
        <textarea
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#f8f8f8",
            borderColor: "white",
          }}
          onChange={this.handleChange}
        >
          {jsonString}
        </textarea>
      </div>
    </div>
    );
  }
}

export default JSONEditor;
