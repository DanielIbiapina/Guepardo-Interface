import { ContainerImages, Header, Picture, Main, Logo } from "./styles";
import { useNavigate } from "react-router";
import { useState } from "react";
import geometry from "../assets/geometry.jpg";
import aero from "../assets/aero.jpg";
import brakes from "../assets/brakes.jpg";
import gearing from "../assets/gearing.jpg";

export default function Home() {
  const navigate = useNavigate();

  function navegar() {
    navigate(`/geometria`);
  }

  return (
    <>
      <Header>
        <Logo>GUEPARDO</Logo>
      </Header>
      <Main>
        <ContainerImages>
          <Picture onClick={navegar} src={geometry}></Picture>
          <Picture src={aero}></Picture>
          <Picture src={brakes}></Picture>
          <Picture src={gearing}></Picture>
        </ContainerImages>
      </Main>
    </>
  );
}
