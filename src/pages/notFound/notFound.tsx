import React from 'react';
import styles from './styles.module.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFound}>
                <h1 className={styles.errorCode} data-testid="code">404</h1>
                <p className={styles.errorMessage} data-testid="error-message">Ups! Page not found</p>
                <p className={styles.errorDetails} data-testid="error-details">
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>
                <a href="/" className={styles.homeLink} data-testid="link-home">Go to Homepage</a>
            </div>
        </div>
    );
};

export default NotFoundPage;
