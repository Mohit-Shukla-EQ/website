import React from "react";
import JSONEditor from 'components/JSON-Editor/component'
import log from "libraries/Log";

class CenteredHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.options;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(options) {
    log.write("Entered CenteredHero.handleChange. options: ", options)
    this.setState(JSON.parse(options));
    log.write("Exiting CenteredHero.handleChange. state: ", this.state)
  }

  render() {
    log.write(0, "CenteredHero", "render", this.state)
    return (
      <div>
        <div
          className={
            "px-4 py-5 my-5 text-center " +
            this.state.background +
            " " +
            this.state.textColor
          }
          style={{
            height: this.state.height,
            paddingTop: this.state.paddingTop + "!important",
          }}
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
        {this.state.showComponentConfiguration ? (
          <div>
            <JSONEditor 
              options={this.state} 
              onChange={this.handleChange}/>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CenteredHero;
