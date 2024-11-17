const People = ({ data }) => {
    if (!data || data.length === 0) return <p>No people available.</p>;

    return (
        <div>
            <h4>People</h4>
            <ul className="list-group">
                {data.map((person) => (
                    <li key={person.id} className="list-group-item">
                        <p><strong>Name:</strong> {person.name || "Unknown"}</p>
                        <p><strong>Gender:</strong> {person.gender || "Unknown"}</p>
                        <p><strong>Age:</strong> {person.age || "Unknown"}</p>
                        <p><strong>Eye Color:</strong> {person.eye_color || "Unknown"}</p>
                        <p><strong>Hair Color:</strong> {person.hair_color || "Unknown"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default People;
