import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  background-color: #333333; /* Cinza Escuro */
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export const ContentContainer = styled.div`
  background-color: #fff; /* Fundo Branco */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  width: 80%;
  max-width: 600px;
  margin-top: 92px;
`;

export const BackButton = styled.h4`
  position: fixed;
  cursor: pointer;
  color: #ffd700; /* Amarelo Forte */
  margin-left: -10px;
  &:hover {
    text-decoration: underline;
  }
  z-index: 2;
  right: 0;
  margin-right: 40px;
`;

export const NextButton = styled.button`
  background-color: #ffd700; /* Amarelo Forte */
  color: #000; /* Cor do texto */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  width: 100%;
  &:hover {
    background-color: #000; /* Amarelo mais escuro */
    color: #ffd700;
  }
`;

export const Title = styled.h2`
  color: #ffc800; /* Amarelo Forte */
  margin-bottom: 20px;
`;

export const MotoMetrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const MotoMetric = styled.div`
  width: 100%;
  text-align: left;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 18px;
    color: #333; /* Cor do texto do h1 */
    margin-bottom: 5px;
  }

  input {
    width: 20%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    background-color: #f4f4f4; /* Cor de fundo do input */
  }
`;

export const SituationContainer = styled.div`
  background-color: #fff; /* Fundo Branco */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  width: 80%;
  max-width: 600px;
  margin-top: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SituationBackButton = styled.h4`
  background-color: #ffd700; /* Amarelo Forte */
  color: #000; /* Cor do texto */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  width: 15%;
  font-size: 16px;
  &:hover {
    background-color: #000; /* Amarelo mais escuro */
    color: #ffd700;
  }
`;

export const SituationTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const SituationOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const SituationOption = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px;
  background-color: ${(props) => (props.isSelected ? "#ffd700" : "#fff")};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#ffd700" : "#f4f4f4")};
  }

  h1 {
    font-size: 18px;
    color: ${(props) => (props.isSelected ? "#000" : "#333")};
    margin-bottom: 5px;
  }
`;

export const SituationNextButton = styled.button`
  background-color: #ffd700; /* Amarelo Forte */
  color: #000; /* Cor do texto */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.7s;
  margin-top: 20px;
  width: 84%;
  font-size: 16px;
  &:hover {
    background-color: #000; /* Amarelo mais escuro */
    color: #ffd700;
  }
`;

export const SituationDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
