import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Species from "../components/Species";
import Vehicles from "../components/Vehicles";
import Locations from "../components/Locations";
import People from "../components/People";

const FilmDetails = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedData, setRelatedData] = useState({});

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const filmResponse = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
                const filmData = await filmResponse.json();

                const endpoints = ["people", "species", "locations", "vehicles"];
                const relatedPromises = endpoints.map(async (endpoint) => {
                    const response = await fetch(`https://ghibliapi.vercel.app/${endpoint}`);
                    const data = await response.json();
                    return [endpoint, data.filter((item) =>
                        item.films.includes(`https://ghibliapi.vercel.app/films/${id}`)
                    )];
                });

                const relatedResults = await Promise.all(relatedPromises);
                const relatedObject = Object.fromEntries(relatedResults);

                setFilm(filmData);
                setRelatedData(relatedObject);
                setLoading(false);
            } catch (err) {
                setError("Error fetching data");
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <div className="text-center mt-5"><h2>{error}</h2></div>;
    if (!film) return <div className="text-center mt-5"><h2>No film information found.</h2></div>;

    return (
        <div className="container mt-5">
            <div className="card shadow-lg">
                <img src={film.movie_banner} alt={film.title} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title text-center">{film.title}</h2>
                    <p>{film.description}</p>
                    <div>
                        <p><strong>Original Title:</strong> {film.original_title}</p>
                        <p><strong>Director:</strong> {film.director}</p>
                        <p><strong>Producer:</strong> {film.producer}</p>
                        <p><strong>Release Date:</strong> {film.release_date}</p>
                        <p><strong>Rotten Tomatoes:</strong> {film.rt_score}</p>
                    </div>
                    <People data={relatedData.people} />
                    <Species data={relatedData.species} />
                    <Locations data={relatedData.locations} />
                    <Vehicles data={relatedData.vehicles} />
                </div>
            </div>
        </div>
    );
};

export default FilmDetails;
