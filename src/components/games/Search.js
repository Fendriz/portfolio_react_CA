import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch,useSelector } from "react-redux";

import {getFilteredList} from "../../actions/GameActions";

function Search() {

	
	const dispatch = useDispatch();
	const gameList = useSelector(state => state.GameList);
	return (
		<InputGroup className="search">
			<FormControl placeholder="Search by name..." onChange={event => dispatch(getFilteredList(event.target.value,gameList))} />
		</InputGroup>
	);
}

export default Search;