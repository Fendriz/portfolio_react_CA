import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ id, title, image, rating,released }) {
	return (
		<Card>
			<Card.Title className="card_title">{title}</Card.Title>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				
				<Card.Text>Rating: {rating}</Card.Text>
				<Card.Text>Released: {released}</Card.Text>

				<Link to={"game/" + id}>
					<Button variant="secondary" block>
						View
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}
GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	released: PropTypes.string.isRequired
};

export default GameItem;