import React from "react";
import * as siteConfiguration from "data/site-specific-data/site-configuration.json";
import Dropdown from "../../Dropdown/Dropdown";

const logo = "/assets/delivered-assets/brand/site-logo.svg"



class SimpleNavbar extends React.Component {
  renderMenuItems() {
    let jsx = [];
    for (let i = 0; i < siteConfiguration.siteMenu.items.length; i++) {
      switch (siteConfiguration.siteMenu.items[i].className) {
        case "nav-item":
          jsx.push(
            <li class="nav-item">
              <a class="nav-link" href={siteConfiguration.siteMenu.items[i].linkTo}>
                {siteConfiguration.siteMenu.items[i].label}
              </a>
            </li>
          );
          break;
        case "dropdown":
          jsx.push(
            <li className="nav-item nav-item dropdown">
              <Dropdown options={siteConfiguration.siteMenu.items[i]} />
            </li>
          );
          break;
        default:
          break;
      }
    }
    return jsx;
    /*         <li class="nav-item">
        <a class="nav-link" href="#">
          From function
        </a>
      </li> */
  }
  render() {
    return (
      <nav 
          className={"navbar navbar-expand-md " 
                    + siteConfiguration.siteMenu.options.colorScheme + " "
                    + ((siteConfiguration.siteMenu.options.backgroundColor.length > 0)? "" : siteConfiguration.siteMenu.options.backgroundColorClass)
                    }
          style={{"backgroundColor" : siteConfiguration.siteMenu.options.backgroundColor}}

            
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="" 
              height="40px"
              
            />
          </a>
          {/* Nav bar togeler button for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.renderMenuItems()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SimpleNavbar;
