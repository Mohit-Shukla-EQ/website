import React from "react";
import "./sidebars.css";
import * as sideBars from "data/site-specific-data/content/collections/sideBars.json";

const sideBar = sideBars.sideBars[0];

class CollapsibleSidebar extends React.Component {
  render() {
    return (
      <div class="flex-shrink-0 p-3  ">
        <ul class="list-unstyled ps-0 ">
          {sideBar.items.map((item) => {
            return (
              <li class="mb-1">
                <button
                  class="btn btn-toggle align-items-start rounded collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + item.label.replace(" ", "-")}
                  aria-expanded="false"
                >
                  {item.label}
                </button>
                <div class="collapse " id={item.label.replace(" ", "-")}>
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    {item.listItems.map((listItem) => {
                      return (
                        <li>
                          <a href={listItem.linkTo} class="link-dark rounded">
                            {listItem.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
         
           </ul>
      </div>
    );
  }
}

export default CollapsibleSidebar;
