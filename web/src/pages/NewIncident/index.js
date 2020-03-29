import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

import { FiArrowLeft } from "react-icons/fi";

export default class NewIncident extends Component {
  state = {
    title: "",
    description: "",
    value: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const ongId = localStorage.getItem("ongId");
    const data = this.state;
    const { history } = this.props;

    try {
      await api.post("/incident", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (error) {
      alert("Algo deu Errado, Tente novamente");
      console.log(error);
    }

    const { title, description, value } = this.state;
    console.log(title, description, value);
  };

  render() {
    const { title, description, value } = this.state;
    return (
      <>
        <Container>
          <Content>
            <section>
              <img src={logoImg} alt="Be the Hero" />

              <h1>Cadastrar novo caso</h1>

              <p>
                Descreva o caso detalhadamente para encontrar um herói para
                resolver isso.
              </p>

              <Link to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Voltar para home
              </Link>
            </section>

            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="Tìtulo do caso"
                value={title}
                onChange={e => this.setState({ title: e.target.value })}
              />

              <textarea
                placeholder="Descrição"
                value={description}
                onChange={e => this.setState({ description: e.target.value })}
              />

              <input
                placeholder="Valor em reais"
                value={value}
                onChange={e => this.setState({ value: e.target.value })}
              />

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
