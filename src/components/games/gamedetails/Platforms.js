import React from "react";
import  propTypes  from "prop-types";

function PlatForms({ platforms }) {
    return (
        <li>{platforms}</li>
    );
}
PlatForms.propTypes = {
    platforms: propTypes.string.isRequired
}

export default PlatForms;