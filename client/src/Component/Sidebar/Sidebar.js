import React, { Component } from "react";
import SidebarItem from "./SidebarItem";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.activeSection = 0;
    this.handleClick = this.handleClick.bind(this);
  }
  getCurrentYear() {
    return new Date().getFullYear();
  }
  handleClick = num => {
    if (num !== this.state.activeSection);
    this.setState({ activeSection: num });
  };
  render() {
    return (
      <nav className="sidebar">
        <ul className="sidebar__listGroup">
          <SidebarItem
            isActive={this.state.activeSection === 0}
            onClick={this.handleClick}
            index={0}
            itemName="Hotel"
            imagePath="/images/sprite.svg#icon-home"
            redirect="/"
          />
          <SidebarItem
            isActive={this.state.activeSection === 1}
            onClick={this.handleClick}
            index={1}
            itemName="Flights"
            imagePath="/images/sprite.svg#icon-aircraft-take-off"
            redirect="/flights"
          />
        </ul>
        <div className="sidebar__legal">
          &copy; InstaTripMaker. {this.getCurrentYear()}.
        </div>
      </nav>
    );
  }
}
export default Sidebar;
