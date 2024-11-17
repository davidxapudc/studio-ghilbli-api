const Species = ({ data }) => {
    if (!data || data.length === 0) return <p>No species available.</p>;

    return (
        <div>
            <h4>Species</h4>
            <ul className="list-group">
                {data.map((species) => (
                    <li key={species.id} className="list-group-item">
                        <p><strong>Spicie Name:</strong> {species.name || "Unknown"}</p>
                        <p><strong>Classification:</strong> {species.classification || "Unknown"}</p>
                        <p><strong>Eye Colors:</strong> {species.eye_colors || "Unknown"}</p>
                        <p><strong>Hair Colors:</strong> {species.hair_colors || "Unknown"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Species;
