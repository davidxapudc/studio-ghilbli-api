import { useEffect, useState } from "react";

const Vehicles = ({ data }) => {
    const [pilots, setPilots] = useState({});

    useEffect(() => {
        const fetchPilots = async () => {
            const newPilots = await Promise.all(data.map(async (vehicle) => {
                if (vehicle.pilot) {
                    try {
                        const pilotResponse = await fetch(vehicle.pilot);
                        const pilotData = await pilotResponse.json();
                        return { [vehicle.id]: pilotData.name || "Unknown" };
                    } catch {
                        return { [vehicle.id]: "Unknown" };
                    }
                } else {
                    return { [vehicle.id]: "Unknown" };
                }
            }));

            setPilots(Object.assign({}, ...newPilots));
        };

        fetchPilots();
    }, [data]);

    if (!data || data.length === 0) return <p>No vehicles available.</p>;

    return (
        <div>
            <h4>Vehicles</h4>
            <ul className="list-group">
                {data.map((vehicle) => (
                    <li key={vehicle.id} className="list-group-item">
                        <p><strong>Name:</strong> {vehicle.name || "Unknown"}</p>
                        <p><strong>Description:</strong> {vehicle.description || "Unknown"}</p>
                        <p><strong>Class:</strong> {vehicle.vehicle_class || "Unknown"}</p>
                        <p><strong>Length:</strong> {vehicle.length || "Unknown"}</p>
                        <p><strong>Pilot:</strong> {pilots[vehicle.id] || "Unknown"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vehicles;
