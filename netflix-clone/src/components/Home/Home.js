import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
export default function Home() {
    const [trends, setTrends] = useState([]);
    // to prevent the error of  Parsing error: Unexpected reserved word 'await' we put async
    // async function: it should wait for each line to be executed, this function have some promises
    async function getData() {
        // await mean dont jump to the next line unless you finish line 
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`); // return promise
        let data = await response.json();
        setTrends(data);
    };
    useEffect(() => { // first thing will be implemented
        getData(); // effect that i want to do, callback function
    }, []); //dependency list(based on what i want to rerender). empty list, rerender the component just one time 
    return (
        <>
            <h1>Movie List</h1>
            {/* if there is trends, render it, else don't render anything  */}
            {trends && <MovieList trends={trends} />}
        </>
    )
}