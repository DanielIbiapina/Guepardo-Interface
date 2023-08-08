import { ContainerImages, Header, Picture, Main } from "./styles";
import { useNavigate } from "react-router";

export default function Geometry() {
  const navigate = useNavigate();

  function navegar() {
    alert("Voce esta indo para suspensao");
    navigate(`/suspensao`);
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
        </ContainerImages>
      </Main>
    </>
  );
}
