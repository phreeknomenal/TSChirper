import React from "react";
import { Link } from 'react-router-dom';

const NewChirp = ({ chirp }) => {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-title">{chirp.name}</p>
                <h6 className="card-subtitle mb-2 text-muted">{chirp.message}</h6>
                <Link to={`/details`}></Link>
            </div>
        </div>
    )

}

interface NewChirpProps { }

export default NewChirp;