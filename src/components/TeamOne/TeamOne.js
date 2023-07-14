import teamOne from "@/data/teamOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleTeam from "./SingleTeam";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const { bg, tagline, title, teams } = teamOne;

const TeamOne = () => {
  const apiUrl = "https://api.limitsizrota.com/api/teams";

  const [data, setData] = useState([]);;

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data);
    } catch (error) {
      console.log("API çekme hatası takım", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);
  
  return (
    <section className="team-one">
      <div
        className="team-one-map"
        style={{ backgroundImage: ` url(${bg.src})` }}
      ></div>
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <Row>
        {data.map((data) => (
            <SingleTeam data={data} key={data.teamId} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamOne;
