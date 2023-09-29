import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setForm } from '../../redux/slices/formSlice';
import { FormState } from '../../interfaces/interfaces';
import styles from './styles.module.css';

interface Field {
    id: string;
    placeholder?: string;
    required?: boolean;
    type: 'text' | 'select' | 'textarea' | 'email' | 'number' | string;
    options?: string[];
}

type FieldGroup = Field | Field[];

const initialState: FormState = {
    email: '',
    address1: '',
    city: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    reason: '',
    state: '',
    zip: '',
};

const FormComponent: React.FC<{ data: FieldGroup[] }> = ({ data }) => {
    const [formValues, setFormValues] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormValues(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        validateForm(formValues);
    };

    const validateForm = (sendData: FormState) => {
        let valid = true;
        const errorMessages: string[] = [];
        const requiredFields: Field[] = data.flat().filter(field => (field as Field).required);

        requiredFields.forEach(field => {
            const fieldValue = sendData[field.id as keyof FormState];
            if (!fieldValue || fieldValue.trim() === "") {
                valid = false;
                errorMessages.push(`${field.placeholder || field.id} is required.`);
            }
        });

        if (valid) {
            dispatch(setForm(sendData));
            navigate('/thankyou');
        } else {
            setErrors(errorMessages);
        }
        return valid;
    };

    const renderField = (field: Field) => {
        switch (field.type) {
            case 'text':
                return (
                    <input
                        key={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        id={field.id}
                        value={formValues[field.id as keyof FormState] || ''}
                        onChange={handleChange}
                        className={styles['full-width']}
                    />
                );
            case 'number':
                return (
                    <input
                    key={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    id={field.id}
                    value={formValues[field.id as keyof FormState] || ''}
                    onChange={handleChange}
                    className={styles['full-width']}
                    />
                );
            case 'email':
                return (
                    <input
                    key={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    id={field.id}
                    value={formValues[field.id as keyof FormState] || ''}
                    onChange={handleChange}
                    className={styles['full-width']}
                    />
                );
            case 'select':
                return (
                    <select key={field.id} id={field.id} required={field.required} value={formValues[field.id as keyof FormState] || ''} className={styles['full-width']} onChange={handleChange} >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                );
            case 'textarea':
                return (
                    <textarea
                        className={styles['full-width']}
                        key={field.id}
                        id={field.id}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formValues[field.id as keyof FormState] || ''}
                        onChange={handleChange}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <form>
          {data.map((fieldGroup, index) => (
            <div key={index} className={styles['container']}>
              {Array.isArray(fieldGroup) ? (
                fieldGroup.map(field => renderField(field))
              ) : (
                renderField(fieldGroup)
              )}
            </div>
          ))}
          <div className={styles['errors-container']}>
            {errors.map((error, index) => (
              <p key={index} className={styles['error-message']}>{error}</p>
            ))}
          </div>
          <button onClick={handleSubmit} data-testid="btn-submit">Submit</button>
        </form>
    );

};

export default FormComponent;
