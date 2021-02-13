import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from "./GameItem";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { getGameList } from "../../actions/GameActions";
import _ from "lodash";
import GameLiked from "../games/gamedetails/GameLiked";

function GameList() {
  const dispatch = useDispatch();
  const gameList = useSelector((state) => state.GameList);

  useEffect(() => {
    dispatch(getGameList);
  }, [dispatch]);

  const showData = () => {
    if (!_.isEmpty(gameList.data)) {
      return (
        <Row>
          {gameList.filtereddata.results.map((game) => {
            const { id, name, background_image, rating, released } = game;
            return (
              <Col sm={6} md={3} key={id}>
                <GameItem
                  id={id}
                  title={name}
                  image={background_image}
                  rating={rating}
                  released={released}
                />
              </Col>
            );
          })}
        </Row>
      );
    }
    if (gameList.loading) {
      return <Spinner animation="border" className="spinner" />;
    }
    if (gameList.errorMsg !== "") {
      return <p>{gameList.errorMsg}</p>;
    }
  };
  return (
    <>
      <Search />
      <GameLiked />
      {showData()}
    </>
  );
}
export default GameList;
