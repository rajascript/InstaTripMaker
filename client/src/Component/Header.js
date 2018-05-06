import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.userName = "Raja";
  }
  render() {
    return (
      <header className="header">
        <img src="/images/logo.png" alt="logo" />

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels,flights"
          />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref="/images/sprite.svg#icon-magnifying-glass" />
            </svg>
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref="/images/sprite.svg#icon-bell" />
            </svg>
            <span
              className="user-nav__notifications"
              id="user-nav__notification"
            >
              7
            </span>
          </div>
          <div className="user-nav__user">
            <span className="user-nav__username" id="user-nav__userName">
              {this.state.userName}
            </span>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
