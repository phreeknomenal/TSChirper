import React, { useState, useEffect } from "react";
import NewChirp from "./NewChirp";

const Home: React.FC<HomeProps> = () => {
    const [chirps, setChirps] = useState([]);

    useEffect(() => {
        fetch('api/chirps')
        .then(response => response.json())
        .then(data => setChirps(data))
    }, []);

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    {chirps.map(chirp => <NewChirp key={chirp.id} chirp={chirp}/>)}
                </div>
            </div>
        </>
    )

}

interface HomeProps {}

export default Home;