import React from "react";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";

class CenteredHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.options;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(JSON.parse(e.target.value));
  }

  render() {
    console.log("props: " + JSON.stringify(this.props));
    return (
      <div>
        <div className={"px-4 py-5 my-5 text-center " + this.state.background 
                + " " + this.state.textColor}
              style={{height: this.state.height}}
                
                
              >
          <img
            className="d-block mx-auto mb-4"
            src={this.state.content.image.source}
            alt=""
            width={this.state.content.image.width}
            height={this.state.content.image.height}
          />
          <h1 className="display-5 fw-bold">{this.state.content.title}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{this.state.content.paragraph}</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {this.state.buttons.map((button) => (
                <a
                  href={button.href}
                  className={
                    "btn btn-lg px-4 gap-3 btn-" +
                    (button.bootstrap.outline ? "outline-" : "") +
                    button.bootstrap.buttonStyle
                  }
                  role="button"
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        {( this.state.showComponentConfiguration)? (
          <div class="accordion text-start" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Configuration of this example</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <SyntaxHighlighterStandardised
                  language="json"
                  content={JSON.stringify(this.state, null, " ")}
                />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Modify Example</strong>: Confiugre and notice the changes
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <textarea
                  style={{ width: "100%", height: "400px" }}
                  onChange={this.handleChange}
                >
                  {JSON.stringify(this.props.options, null, " ")}
                </textarea>
              </div>
            </div>
          </div>
        </div>
      
        ) : ""}
        </div>
    );
  }
}

export default CenteredHero;
