import styles from './SingleMixtape.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleMixtape = ({ mixtapeId }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
            const result = await axios(`/api/mixtape/${mixtapeId}`);
            setData(result.data);
            } catch (error) {
                console.error('SingleMixtapeComponenterror:' + error);
            }
        }
        fetchData();
    }, []);

    
    
    return (
        <ul className={styles.mixtape}>
            <li>
                <h2>{data.title}</h2>
                <h3>{data.artist}</h3>
                <p>Year: {data.year}</p>
            </li>
        </ul>
    );
}

export default SingleMixtape;