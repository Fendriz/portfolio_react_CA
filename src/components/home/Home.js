import React from "react";
import GameList from "../games/GameList";
import Heading from "../layout/Heading";

function Home() {
    return (
        <>
            <Heading title='Home' />
            <GameList />
                
        </>
    );
}
export default Home;
