import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ id, title, image, rating,released }) {
	return (
		<Card>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{rating}</Card.Text>
				<Card.Text>{released}</Card.Text>

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