import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { BASE_URL } from "../../../constants/api";
import Genres from "./Genres";
import PlatForms from "./Platforms";


function GameDetails() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showText, setShowText] = useState(true);
	let { id } = useParams();
	const url = BASE_URL +"/"+ id;

	useEffect(() => {
		getData();
		// eslint-disable-next-line
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
	
	return (
		<Row>
			<Col md={12} className="details">
			<h1>{detail.name}</h1>
			</Col>
			<Col md={6} className="details details_img">
			<Image src={detail.background_image} rounded  />
			</Col>
			<Col md={6} className="details details_platforms">
						
					<div className="details_platforms">
						<p>PlatForms</p>
						<ul>
						{detail.platforms.map((platform)=>{
								console.log(platform.name);
								const { id, name } = platform.platform;
								return(
									<PlatForms platforms={name} key={id}/>
								);
								
							})}
						</ul>
					</div>
					<div className="details_genres">
					<p>Genres</p>
					<ul>
						{detail.genres.map((genre)=>{
							console.log(genre.name);
							const { id, name } = genre;
							return(
								<Genres genres={name} key={id}/>
							);
							
						})}
					</ul>
					</div>
			</Col>
			
			<Col md={12} className="details">
			<Button variant="secondary" block onClick={() => setShowText(!showText)}>
					Description
					
			</Button>
				<p>
					{showText? detail.description_raw:null}
				</p>

			<Button variant="secondary" block>
				<a href={detail.website}>Website Link</a>
					
			</Button>
			</Col>
		</Row>
	);
}

export default GameDetails;