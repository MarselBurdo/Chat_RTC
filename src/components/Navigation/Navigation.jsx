import React from "react";
import { Link } from "react-router-dom";

import { StyledNavbar } from "../Styled/Styled";

//no work in final release in project
function Navigation(props) {
  const { names } = props;

  return (
    <StyledNavbar>
      <ul>
        {names &&
          names.map((element, i) => (
            <li>
              {" "}
              <Link to={`/${element}`}>
                <a href="*" key={i}>
                  {element}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </StyledNavbar>
  );
};

export default Navigation;
