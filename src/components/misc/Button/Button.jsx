import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({ text, link }) => {
    return (
        <Link href={`${link}`}>
            <button type="button" className={`${styles.btn}`}>
                {text}
            </button>
        </Link>
    );
}

export default Button;