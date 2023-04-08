import styles from './Artist.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Artist = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
            const result = await axios(`/api/artist`);
            setData(result.data);
            } catch (error) {
                console.error('AllArtistComponenterror:' + error);
            }
        }
        fetchData();
    }, []);


    

    return (
        <ul className={styles.artist}>
            {data.map(artist => (
            <Link href={`/artist/${artist._id}`} key={artist._id}>
                <li>
                    <h2>{artist.name}</h2>
                    <p>Age: {artist.age}</p>
                    {artist.genre && <p>Genre: {artist.genre.join(', ')}</p>}
                    <p>Role: {artist.role}</p>
                </li>
            </Link>
            ))}

        </ul>
    );
}

export default Artist;