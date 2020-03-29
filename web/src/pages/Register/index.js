import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, InputGroup, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    uf: ""
  };
  handleRegister = async e => {
    e.preventDefault();

    const data = this.state;
    const { history } = this.props;

    try {
      const response = await api.post("/ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro");
      console.log(error);
    }
  };
  render() {
    const { name, email, whatsapp, city, uf } = this.state;

    return (
      <>
        <Container>
          <Content>
            <section>
              <img src={logoImg} alt="Be the Hero" />

              <h1>Cadastro</h1>

              <p>
                Faça seu cadastro, entre na plataforma e ajude pessoas a
                encontrar os casos da sua ONG.
              </p>

              <Link to="/">
                <FiArrowLeft size={16} color="#E02041" />
                Já tenho cadastro
              </Link>
            </section>

            <form onSubmit={this.handleRegister}>
              <input
                placeholder="Nome da ONG"
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
              />

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />

              <input
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={e => this.setState({ whatsapp: e.target.value })}
              />

              <InputGroup>
                <input
                  placeholder="Cidade"
                  value={city}
                  onChange={e => this.setState({ city: e.target.value })}
                />

                <input
                  placeholder="UF"
                  value={uf}
                  onChange={e => this.setState({ uf: e.target.value })}
                  style={{ width: 80 }}
                />
              </InputGroup>

              <button className="button" type="submit">
                Cadastrar
              </button>
            </form>
          </Content>
        </Container>
      </>
    );
  }
}
