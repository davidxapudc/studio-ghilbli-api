import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const FilmList = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFilms = async () => {
        try {
            const res = await fetch("https://ghibliapi.vercel.app/films");
            if (!res.ok) {
                throw new Error("Error fetching data");
            }
            const data = await res.json();
            setFilms(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container-fluid">
            <div className="row">
                {films.map((film) => (
                    <div key={film.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={film.image} alt={film.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text">{film.description.substring(0, 150)}...</p>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/film/${film.id}`} className="btn btn-success">
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilmList;
