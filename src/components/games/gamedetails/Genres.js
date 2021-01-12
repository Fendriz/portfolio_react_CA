import React from "react";
import  propTypes  from "prop-types";

function Genres({ genres }) {
    return (
        <li>{genres}</li>
    );
}

Genres.propTypes = {
    genres: propTypes.string.isRequired
}

export default Genres;