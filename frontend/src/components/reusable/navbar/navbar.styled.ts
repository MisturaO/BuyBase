import styled from 'styled-components';

const NavBarWrapper = styled.nav<{ $scrollHeight: boolean }>`
  max-width: 93%;
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  overflow-x: hidden;
  transform: translateX(-50%);
  background: #fff;
  z-index: 100;
  justify-content: space-between;
  box-shadow: ${(props) =>
    props.$scrollHeight ? '0px 4px 5px -2px rgba(0, 0, 0, 0.25)' : ''};
`;

const AccountItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SearchWrapper = styled(AccountItemWrapper)`
  width: 100%;
  gap: 27px;
  justify-content: right;
`;
const NaviItemsWrapper = styled.ul`
  display: flex;
  max-width: 378px;
  //   align-items: center;
  justify-content: space-between;
  min-height: 30px;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    display: flex;
    align-items: stretch;
    position: relative;
   
  }

  & > li a {
    color: #4a3c3c;
    font-family: Baloo Tammudu 2;
    font-size: 16px;
    font-style: normal;
    display: flex;
    font-weight: 400;
    transition: all 800ms ease;
    text-decoration: none;
  }


  & > li a:before {
    content: ' ';
    height: 3px;
    bottom: 0;
    background: #CD5241;
    position: absolute;
    width: 0;
    left: 50%;
    border-radius: 10px;
    transform-origin: left;
    transform: translateX(-50%)
    transition: all 500ms ease;
  }
  & > li a.active{
    color: #CD5241;
  }
  & > li a.active:before {
    transform: translateX(-50%);
    width: 110%;
    transition: all 500ms ease;
  }
`;

export { NaviItemsWrapper, NavBarWrapper, AccountItemWrapper, SearchWrapper };
