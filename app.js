(function () {
  "use strict";

  function NavHeadline(props) {
    return React.createElement(
      "div",
      { className: "nav-bar" },
      "- Navigation bar will go here -"
    );
  }

  function NavThumbnail(props) {
    return React.createElement("img", {
      src: "img/earth.png",
      alt: "Navigation Thumbnail Image",
      className: "nav-image",
    });
  }

  function NavBar(props) {
    return React.createElement(
      "div",
      { className: "nav-bar" },
      React.createElement(NavThumbnail),
      React.createElement(NavHeadline)
    );
  }

  ReactDOM.render(
    React.createElement(NavBar),
    document.getElementById("react-root")
  );
})();
