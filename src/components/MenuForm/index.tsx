import React from "react";
import { Container, Navigaton, DropboxLogo, Form } from "./styles";

const MenuForm: React.FunctionComponent = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    <Container>
      <Navigaton>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigaton>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulario abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Está pagina está sujeita á Politica de privacidade e aos termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
