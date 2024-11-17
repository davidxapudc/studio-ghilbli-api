const Locations = ({ data }) => {
    if (!data || data.length === 0) return <p>No locations available.</p>;

    return (
        <div>
            <h4>Locations</h4>
            <ul className="list-group">
                {data.map((location) => (
                    <li key={location.id} className="list-group-item">
                        <p><strong>Name:</strong> {location.name || "Unknown"}</p>
                        <p><strong>Climate:</strong> {location.climate || "Unknown"}</p>
                        <p><strong>Terrain:</strong> {location.terrain || "Unknown"}</p>
                        <p><strong>Surface Water:</strong> {location.surface_water || "Unknown"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Locations;
