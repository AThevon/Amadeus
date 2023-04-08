import styles from './SingleArtist.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleArtist = ({ artistId }) => {
    const [data, setData] = useState({});
    async function fetchData() {
        
        try {
            const result = await axios(`/api/artist/${artistId}`);
            setData(result.data);
        } catch (error) {
            console.error('SingleArtistComponenterror:' + error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [artistId]);
    
    return (
        <ul className={styles.artist}>
            <li>
                <h2>{data.name}</h2>
                <p>Age: {data.age}</p>
                {data.genre && <p>Genre: {data.genre.join(', ')}</p>}
                {data.role && <p>Role: {data.role}</p>}
            </li>
        </ul>
    );
}

export default SingleArtist;