// src/components/LandingButton.jsx
import React from 'react';
import styled from 'styled-components';

const LandingButton = ({ onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <button className="button" data-text="Enter">
        <span className="actual-text">&nbsp;Enter&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Enter&nbsp;</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;

    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: #00bdf7; 
    --fs-size: 2em;

    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Space Mono", monospace;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }

  .hover-text {
    position: absolute;
    box-sizing: border-box;
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }

  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;

export default LandingButton;
