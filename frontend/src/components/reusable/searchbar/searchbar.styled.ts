import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 337px;
  height: 32px;
  border-radius: 5px;
  border: 2px solid #c0b9b9;
  display: flex;
  align-items: center;

  & > input {
    height: 100%;
    padding-inline: 10px;
    width: 100%;
    border: none;
    display: block;
    outline: none;
  }

  & > label {
    height: 100%;
    background: rgba(205, 82, 65, 0.8);
    width: 42px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  & > label:before {
    content: ' ';
    width: 100%;
    position: absolute;
    display: block;
    z-index: -1;
    border-radius: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(74, 60, 60, 1);
  }

  // & > svg {
  //   position: absolute;
  //   z-index: 2;
  // }
`;

export { SearchBarWrapper };
