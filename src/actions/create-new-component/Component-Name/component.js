import React from "react";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";


class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.options;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(JSON.parse(e.target.value));
  }

  render() {
    
    return (
      <div>
        {/* rendering code should come here */}


        {
        /* show the json editor if showComponentConfiguration is true */
        this.state.showComponentConfiguration ? (
          <div className="row text-start">
            <div className="col">
              <strong>Source Configuration</strong>
              <SyntaxHighlighterStandardised
                language="json"
                content={JSON.stringify(this.state, null, " ")}
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
                {JSON.stringify(this.props.options, null, " ")}
              </textarea>
            </div>
          </div>
        ) : (
          ""
        )}


      </div>
    );
  }
}

export default ComponentName;
