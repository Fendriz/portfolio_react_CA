import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from "./GameItem";
import Search from "./Search";
import { BASE_URL } from "../../constants/api";

function GameList(){
    const [games, setGame] = useState([]);
    const [filterdGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        const result = await fetch(BASE_URL);
        if (!result.ok) {
            const message = `An error has occured: ${result.status}`;
            throw new Error(message);
        }
        const getResult = await result.json();
        setGame(getResult.results);
        setFilteredGames(getResult.results);
        setLoading(false);
    }
    if (loading) {
        return <Spinner animation="border" className="spinner" />;
        
    }
    if(!loading) {
        console.log(games)
    }

    function filteredGames(searchTerm) {

        const searchValue = searchTerm.toLowerCase();

        const filteredArray = games.filter((game) => {

            const lowerCase = game.name.toLowerCase()

            return(
                lowerCase.indexOf(searchValue) !== -1
            )
        });
        console.log(filteredArray)
        setFilteredGames(filteredArray)
    }

    
    return (
        <>
            <Search handleSearch={filteredGames} />
            <Row>
                {filterdGames.map(game => {
                    const { id, name, background_image, rating, released } = game;

                    return (
                        <Col sm={6} md={3} key={id}>
                            <GameItem id={id} title={name} image={background_image} rating={rating} released={released}/>
                        </Col>
                    );
                })}
            </Row>
        </>
        
	);
    
}
export default GameList;

