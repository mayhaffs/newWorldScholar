(function () {
  "use strict";

  function NavHeadline(props) {
    // return <div className="nav-headline">- New World Scholar -</div>;
    return <div className="nav-headline">New World Scholar</div>;
  }

  function NavTagline(props) {
    return (
      <div className="nav-tagline">- a collection of web art and ideas -</div>
    );
  }

  function NavButtons(props) {
    const pageData = [1, 2, 3, 4, 5, 6, 7, 77, 8, 9];
    const addZeros = (x) => "00" + x;
    const baseUrl = () => {
      const pathname = window.location.href.replace("index.html", "");
      return pathname;
    };
    const linkify = (dir) => {
      return (
        <li key={dir} className="portal text">
          <a className="link" href={baseUrl() + `${dir}`}>
            {dir}
          </a>
        </li>
      );
    };
    const dirData = pageData.map(addZeros);
    const listedLinks = dirData.map(linkify);
    return <ul className="nav-buttons">{listedLinks}</ul>;
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
      <React.Fragment>
        <div className="nav-bar">
          <NavThumbnail />
          <NavHeadline />
          <NavTagline />
        </div>
        <NavButtons />
      </React.Fragment>
    );
  }

  ReactDOM.render(<NavBar />, document.getElementById("react-root"));
})();
