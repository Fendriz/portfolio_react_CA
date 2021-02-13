import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch,useSelector } from "react-redux";
import {getIncCards , getDecCards} from "../../actions/GameActions";

function GameItem({ id, title, image, rating,released }) {

	const dispatch = useDispatch();
	const likecards = useSelector(state => state.LikeCards);
	const game = {id: id,title : title,image: image,rating:rating,released:released};

	function checkequal(){
		for(let i = 0; i < likecards.length; i++) {
			if (id === likecards[i].id) {
				return true
			}
		}
	}

	return (
		<Card>
			<Card.Header>
			<Card.Title className="card_title">{title}
				
			</Card.Title>
			<Button onClick={event => {(!checkequal())?dispatch(getIncCards(game)):dispatch(getDecCards(game))}} 
					variant="secondary" 
					id="button_like"
					style={(!checkequal())?{backgroundColor: 'lightcoral'}:{backgroundColor: 'red'}}>
					<FontAwesomeIcon icon={faHeart} />
				</Button>
			</Card.Header>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				
				<Card.Text>Rating: {rating}</Card.Text>
				<Card.Text>Released: {released}</Card.Text>

				<Link to={"game/" + id}>
					<Button variant="secondary" id="button_view" block>
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