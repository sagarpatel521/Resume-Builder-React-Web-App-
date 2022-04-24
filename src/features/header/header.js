import React from 'react';


const header = () => {
  return (
      <>
          <nav className="main-nav">
          { /* first logo part */ }
              <div className="logo">
                  <h2>
                      <span>R</span>esume
                  </h2>
              </div>

              {/* second logo part */}
              <div className="menu-link">
                  <ul>
                      <li><a href="#">Resume Templates</a></li>
                      <li><a href="#">About us</a></li>
                  </ul>
              </div>

          </nav>
      </>

  );

};
export default header;
