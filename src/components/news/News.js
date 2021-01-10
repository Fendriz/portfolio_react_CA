import React from "react";
import NewsList from "./Newslist";
import Heading from "../layout/Heading";

function News() {
    return (
        <>
            <Heading title='News' />
            <NewsList />
        </>
    );
}
export default News;
