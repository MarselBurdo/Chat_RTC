import { Link } from "react-router-dom";
import styled from "styled-components";

// all styled components here

export const StyledButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap"rel="stylesheet");
  box-shadow: inset 0px 1px 0px 0px #91e650;
  background: linear-gradient(to bottom, #c9e4de 5%, #aed9e0 100%);
  background-color: ${({ primary }) => (primary ? "#9e2a2b" : "#ffd6ba")};
  border-radius: 6px;
  border: 1px solid #aed9e0;
  display: inline-block;
  cursor: pointer;
  color: ${({ primary }) => (primary ? "#9e2a2b" : "#ffd6ba")};
  font-family: ${({ primary }) => (primary ? "Russo One" : "Arial")};
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: "none";
  text-shadow: 0px 1px 0px #ded17c;
  grid-area: footer;
  margin-left: 1em;
  margin-top: 2em;
  margin-bottom: 1em;
  
  &:hover {
    background: linear-gradient(to bottom, #f2ab1e 5%, #aed9e3 100%);
    background-color: "#ffd6ba"};
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-top: 2em;
  &:hover {
    color: red;
  }
`;
export const StyledInput = styled.input`
  grid-area: header;
  width: 15em;
  height: 3em;
  margin-left: 3em;
  margin-top: 3em;
  margin-bottom: ${({ chat }) => (chat ? "2em" : null)}
`;

export const StyledNavbar = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #9d6b53;

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: start;
    list-style-type: none;

    li {
      padding: 0 20px 0;

      a {
        --fill-color: #eeef20;
        position: relative;
        display: block;
        padding: 4px 0;
        font: 700 3rem Raleway, sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        -webkit-text-stroke: 2px var(--fill-color);
        background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: 0.5s linear;

        &:hover {
          background-size: 100%;
        }
      }
    }
  }
`;

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header footer"
    "aside footer";
  justify-items: center;
  -webkit-box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e,
  -3px 5px 6px 9px rgba(0, 0, 0, 0);
  box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e,
  -3px 5px 6px 9px rgba(0, 0, 0, 0);
  background: #f7ede2;
  min-width: 20%;
  max-width: 10em;
  height: 200px;
  margin-left: 5%;
  margin-top: 5%;
  font-size: 29px;
  
  div {
    align-items: center;
    font-size: 22px;
  }
`;
export const StyledSector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-areas: 
    "header footer";
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #95d5b2;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: ${({ who }) => (who ? '35%' : '100%')};
  margin: auto;
  div {
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left:${({ right }) => (right ? '60%' : '5%')};
    color: white;
    justify-content: ${({ right }) => (right ? "flex-end" : null)};
    margin-right: ${({ right }) => (right ? "5%" : null)};

    a {
      text-decoration: none;

      &:hover {
        color: #ffd6ba;
      }
    }
  }
`;

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #deab90;
  border-radius: 8px;
  height: 60%;
  width: 35%;
  margin: auto;
  
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    width: 60%;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledVideo = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;

export const StyledSelect = styled.select`
  grid-area: aside;
  width: 15em;
  height: 3em;
  margin-left: 2em;
  --radius: 2px;
  --baseFg: dimgray;
  --baseBg: white;
  --accentFg: #006fc2;
  --accentBg: #bae1ff;

  font: 400 12px/1.3 sans-serif;
  -webkit-appearance: none;
  appearance: none;
  color: var(--baseFg);
  border: 1px solid var(--baseFg);
  line-height: 1;
  outline: 0;
  padding: 0.65em 2.5em 0.55em 0.75em;
  border-radius: var(--radius);
  background-color: var(--baseBg);
  background-image: linear-gradient(var(--baseFg), var(--baseFg)),
    linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;
  background-position: right 20px center, right bottom, right bottom,
    right bottom;

  &:hover {
    background-image: linear-gradient(var(--accentFg), var(--accentFg)),
      linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
      linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
      linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
  }

  &:active {
    background-image: linear-gradient(var(--accentFg), var(--accentFg)),
      linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
      linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
      linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
    color: var(--accentBg);
    border-color: var(--accentFg);
    background-color: var(--accentFg);
  }
  option {
    font-size: 15px;
  }
`;
