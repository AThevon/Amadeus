import styles from './Mixtape.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Mixtape = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
            const result = await axios(`/api/mixtape`);
            setData(result.data);
        } catch (error) {
            console.error('AllMixtapeComponenterror:' + error);
        }
        }
        fetchData();
    }, []);

    return (
        <ul className={styles.mixtape}>
            {data.map(mixtape => (
                <Link href={`/mixtape/${mixtape._id}`} key={mixtape._id}>
                    <li>
                        <h2>{mixtape.title}</h2>
                        <p>Year : {mixtape.year}</p>
                        <p>Artist : {mixtape.artist}</p>
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export default Mixtape;