(function () {
  "use strict";

  function NavHeadline(props) {
    // return <div className="nav-headline">- New World Scholar -</div>;
    return <div className="nav-headline">New World Scholar</div>;
  }

  function NavButtons(props) {
    return (
      <div className="nav-buttons">- Navigation buttons will go here -</div>
    );
  }

  function NavThumbnail(props) {
    return (
      <img
        className="nav-image"
        src="img/earth.png"
        alt="Navigation Thumbnail Image"
      />
    );
  }

  function NavBar(props) {
    return (
      <div className="nav-bar">
        <div>
          <NavThumbnail />
        </div>
        <div>
          <NavHeadline />
        </div>
        <div>
          <NavButtons />
        </div>
      </div>
    );
  }

  ReactDOM.render(<NavBar />, document.getElementById("react-root"));
})();
