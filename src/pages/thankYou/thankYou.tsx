import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { RootState } from '../../redux/store';

const ThankYouPage: React.FC = () => {
    const formData = useSelector((state: RootState) => state.form);

    return (
        <div data-testid="thank-you-test">
          <h1>Thank You!</h1>
          <h3>Information sent:</h3>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className={styles['field']}>
                <span className={styles['wrap']}>{value}</span>
              </div>
            ))}
        </div>
    );
};
export default ThankYouPage;
