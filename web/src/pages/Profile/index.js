import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { FiPower, FiTrash2 } from "react-icons/fi";

import { Container, Header } from "./styles";
import logoImg from "../../assets/logo.svg";

export default class Profile extends Component {
  state = {
    nameOng: "",
    incidents: []
  };

  async componentDidMount() {
    const ongName = localStorage.getItem("ongName");
    const ongId = localStorage.getItem("ongId");

    this.setState({ nameOng: ongName });
    await api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        this.setState({ incidents: response.data.profiles });
      });

    const { incidents } = this.state;
    console.log(incidents);
  }

  handleDeleteIncident = async id => {
    const { incidents } = this.state;
    const ongId = localStorage.getItem("ongId");

    try {
      await api.delete(`/incident/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      this.setState({
        incidents: incidents.filter(incident => incident.id !== id)
      });
    } catch (error) {
      alert("Erro ao deletar, tente novamente !");
    }
  };

  handleLogout() {
    const { history } = this.props;
    localStorage.clear();
    history.push("/");
  }

  render() {
    const { nameOng, incidents } = this.state;
    return (
      <>
        <Container>
          <Header>
            <img src={logoImg} alt="Be the Hero" />

            <span>Bem vinda,{nameOng}</span>

            <Link to="/incidents/new" className="button">
              Cadastrar novo caso
            </Link>

            <button type="button" onClick={() => this.handleLogout()}>
              <FiPower size={18} color="#e02041" />
            </button>
          </Header>
          <h1>Casos Cadastrados</h1>
          <ul>
            {incidents.map(incident => (
              <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>
                <strong>DESCRIÇÂO:</strong>
                <p>{incident.description}</p>
                <strong>VALOR:</strong>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(incident.value)}
                </p>
                <button
                  type="button"
                  onClick={() => this.handleDeleteIncident(incident.id)}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </>
    );
  }
}
