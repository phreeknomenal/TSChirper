import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { chirp } from '../types';

const Details = () => {
    const { id } = useParams<{id: string}>();
    const [chirp, setChirp] = useState<chirp>({ id: id, name: '', message: '' });


    return (
        <div>
            
        </div>
    )
}

export default Details
