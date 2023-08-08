import styled from "styled-components";

export const Header = styled.div`
  width: 100vmax;
  height: 72px;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;
export const Main = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
`;
export const ContainerImages = styled.div`
  width: 900px;
  height: 600px;
  background-color: green;
  display: flex;
  justify-content: space-between;
`;
export const Picture = styled.img`
  width: 220px;
  height: 600px;
  background-color: blue;
`;
