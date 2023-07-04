import styled from 'styled-components';

const NavBar = styled.div`
  background-color: black;
  ul {
    height: 60px;
    padding: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    width: 100vw;
  }
  li {
    padding: 20px;
    color: white;
    cursor: pointer;
  }
  li:hover {
    background-color: rgb(20, 20, 20);
  }
`;

export default NavBar;
