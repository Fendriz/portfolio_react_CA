import React from "react";

import { useSelector } from "react-redux";

function GameLiked() {
  const likecards = useSelector((state) => state.LikeCards);

  return (
    <div class="likedGames">
      <div class="likedGames-title">
        <p>Liked Cards:</p>
      </div>
      <div class="likedGames-games">
        {likecards.map((card) => {
          return <li key={card.id}>{card.title}</li>;
        })}
      </div>
    </div>
  );
}

// Genres.propTypes = {
//     genres: propTypes.string.isRequired
// }

export default GameLiked;

