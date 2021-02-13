import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Genres from "./Genres";
import PlatForms from "./Platforms";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { getGameDetails } from "../../../actions/GameActions";

function GameDetails() {
  const [showText, setShowText] = useState(true);
  let { id } = useParams();
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.GameDetails);
  console.log(gameState);
  useEffect(() => {
    dispatch(getGameDetails(id));
  }, [dispatch, id]);

  const showData = () => {
    if (!_.isEmpty(gameState.data) && !gameState.loading) {
      return (
        <Row>
          <Col md={12} className="details">
            <h1>{gameState.data.name}</h1>
          </Col>
          <Col md={6} className="details details_img">
            <Image src={gameState.data.background_image} rounded />
          </Col>
          <Col md={6} className="details details_platforms">
            <div className="details_platforms">
              <p>PlatForms</p>
              <ul>
                {gameState.data.platforms.map((platform) => {
                  const { id, name } = platform.platform;
                  return <PlatForms platforms={name} key={id} />;
                })}
              </ul>
            </div>
            <div className="details_genres">
              <p>Genres</p>
              <ul>
                {gameState.data.genres.map((genre) => {
                  const { id, name } = genre;
                  return <Genres genres={name} key={id} />;
                })}
              </ul>
            </div>
          </Col>

          <Col md={12} className="details">
            <Button
              variant="secondary"
              block
              onClick={() => setShowText(!showText)}
            >
              Description
            </Button>
            <p>{showText ? gameState.data.description_raw : null}</p>

            <Button variant="secondary" block>
              <a href={gameState.data.website}>Website Link</a>
            </Button>
          </Col>
        </Row>
      );
    }
    if (gameState.loading) {
      return <Spinner animation="border" className="spinner" />;
    }
    if (gameState.errorMsg !== "") {
      return <p>{gameState.errorMsg}</p>;
    }
    return <p>....</p>;
  };

  return <>{showData()}</>;
}
export default GameDetails;

