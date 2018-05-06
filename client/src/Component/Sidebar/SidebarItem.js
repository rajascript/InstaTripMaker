import React, { Component } from "react";
import { Link } from "react-router-dom";
class SidebarItem extends Component {
  handleClick = () => this.props.onClick(this.props.index);
  render() {
    return (
      <li
        className={
          this.props.isActive
            ? "sidebar__listItem sidebar__listItem--active"
            : "sidebar__listItem"
        }
      >
        <Link
          className="sidebar__listLink"
          to={this.props.redirect}
          onClick={this.handleClick}
        >
          <svg className="sidebar__listIcon ">
            <use xlinkHref={this.props.imagePath} />
          </svg>
          {this.props.itemName}
        </Link>
      </li>
    );
  }
}
export default SidebarItem;
