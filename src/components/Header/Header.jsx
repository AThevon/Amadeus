import styles from './Header.module.css';
import Link from 'next/link';
import Logo from '../misc/Logo/Logo';
import Button from '../misc/Button/Button';

const Header = ({ title }) => {
    return (
        <>
            <Link href="/">
                <Logo />
            </Link>
            <header className={styles.main_header}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.main_btn}>
                    <Button text="Artists" link="/artist" />
                    <Button text="Mixtapes" link="/mixtape" />
                    <Button text="About" link="/about" />
                </div>
            </header>

        </>
    );
}

export default Header;

