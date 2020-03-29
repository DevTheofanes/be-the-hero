import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { FiLogIn } from "react-icons/fi";

import { Container, Section } from "./styles";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default class Logon extends Component {
  state = {
    id: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = this.state;
    const { history } = this.props;

    try {
      const response = await api.post("/session", data);

      localStorage.setItem("ongId", data.id);
      localStorage.setItem("ongName", response.data.ong.name);

      history.push("/profile");

      console.log(response);
    } catch (error) {
      alert("Algo Deu Errado, tente novamente !");

      console.log(error);
    }
  };

  render() {
    const { id } = this.state;

    return (
      <>
        <Container>
          <Section>
            <img src={logoImg} alt="Be the Hero" />

            <form onSubmit={this.handleSubmit}>
              <h1>Faça seu logon</h1>

              <input
                placeholder="Sua ID"
                value={id}
                onChange={e => this.setState({ id: e.target.value })}
              />

              <button className="button" type="submit">
                Entrar
              </button>

              <Link to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
              </Link>
            </form>
          </Section>
          <img src={heroesImg} alt="Heroes" />
        </Container>
      </>
    );
  }
}
