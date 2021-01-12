import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GameDetails() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();

	const url = BASE_URL +"/"+ id;

	useEffect(() => {
		getData();
    }, [url]);
    
    async function getData() {
        const result = await fetch(url);
        if (!result.ok) {
            const message = `An error has occured: ${result.status}`;
            throw new Error(message);
        }
        const getResult = await result.json();
        setDetail(getResult);
        setLoading(false);
       
    }

	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}
	if(!loading){
		console.log(detail);
	}

	return (
		<Row>
			<Col md={6} className="detail-image">
				<Image src={detail.background_image} roundedCircle />
			</Col>
			<Col>
				<h1>{detail.name}</h1>
				<p>
					<b>Description:</b> {detail.description_raw}
				</p>
				<p>
					<b>Website Link:</b> <a href={detail.website}>{detail.website}</a>
				</p>
			</Col>
		</Row>
	);
}

export default GameDetails;