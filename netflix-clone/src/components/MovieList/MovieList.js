import Movie from "../Movie/Movie";
import "./MovieList.css";

export default function MovieList({ trends }) {
    return (
        <div className="cards">
            {
                trends.map((trends) => {
                    return (
                        <div key={trends.id}><Movie trends={trends} /></div>
                    )
                })
            }
        </div>

    )
}