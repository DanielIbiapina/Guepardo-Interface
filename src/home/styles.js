import styled from "styled-components";

export const Header = styled.div`
  width: 100vmax;
  height: 72px;
  background-color: #000; /* Preto */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  color: #ffd700; /* Amarelo Forte */
  padding: 0 20px; /* Espaçamento interno */
  font-family: "Montserrat", sans-serif;
`;

export const Logo = styled.h1`
  color: #ffd700; /* Amarelo Forte */
  font-family: "Montserrat", sans-serif;
`;

export const Main = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  background-color: #333333; /* Cinza Escuro */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerImages = styled.div`
  width: 900px;
  height: 550px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto; /* Centralizar horizontalmente */
  padding: 20px; /* Adicionar espaçamento interno */
`;

export const Picture = styled.img`
  width: 220px;
  height: 550px;
  background-color: #000; /* Preto */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sombreamento */
  transition: transform 0.2s ease; /* Transição suave */
  cursor: pointer;
  margin-right: 20px; /* Espaçamento à direita */
  border-radius: 10px; /* Bordas arredondadas */

  &:hover {
    transform: scale(1.1); /* Aumentar o tamanho ao passar o mouse */
  }
`;

// Estilos para o texto em branco
export const WhiteText = styled.p`
  color: #ffffff; /* Branco */
`;
