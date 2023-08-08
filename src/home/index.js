import { ContainerImages, Header, Picture, Main } from "./styles";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [isBotao, setIsBotao] = useState(false);

  function navegar() {
    alert("Voce esta indo para suspensao");
    navigate(`/geometria`);
  }

  function mostrarBotao() {
    setIsBotao(!isBotao);
  }

  return (
    <>
      <Header></Header>
      <Main>
        <ContainerImages>
          <Picture
            onClick={navegar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cQCnIf6BlnIUTgC5MNbA5rJ8KqEP1e8PKLnsy5UWNmhJ8ZpcMIPw5sDWuabTDzoHS_0&usqp=CAU"
          ></Picture>
          <Picture
            onClick={mostrarBotao}
            src="https://vasco.com.br/wp-content/uploads/2020/10/ESCUDO-VASCO-RGB-1-450x450.png"
          ></Picture>
          <Picture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cQCnIf6BlnIUTgC5MNbA5rJ8KqEP1e8PKLnsy5UWNmhJ8ZpcMIPw5sDWuabTDzoHS_0&usqp=CAU"></Picture>
          {isBotao ? (
            <Picture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cQCnIf6BlnIUTgC5MNbA5rJ8KqEP1e8PKLnsy5UWNmhJ8ZpcMIPw5sDWuabTDzoHS_0&usqp=CAU"></Picture>
          ) : (
            ""
          )}
        </ContainerImages>
      </Main>
    </>
  );
}
