import styles from './Logo.module.css';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className={styles.main_logo}>
            <Image
                src="/logo-amadeus.png"
                alt="My image"
                fill
                sizes='100%, 100%'
            />
        </div>
    );
}

export default Logo;