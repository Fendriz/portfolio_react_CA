import React from "react";
import GameList from "../games/GameList";
import Heading from "../layout/Heading";

function Home() {
    return (
        <>
            <Heading title='Video Games' />
            <GameList />
                
        </>
    );
}
export default Home;
