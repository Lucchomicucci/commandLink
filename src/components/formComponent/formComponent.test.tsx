import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import FormComponent from './formComponent';
import { data } from '../../data/data';
import { BrowserRouter as Router } from 'react-router-dom';


interface Field {
    id: string;
    placeholder?: string;
    required?: boolean;
    type: 'text' | 'select' | 'textarea' | 'email' | 'number' | string;
    options?: string[];
}

type FieldGroup = Field | Field[];

const mockData: FieldGroup[] = data
test('renders FormComponent without crashing', () => {
    render(
        <Provider store={store}>
            <Router>
                <FormComponent data={mockData} />
            </Router>
        </Provider>
    );
});

test('should display required error when value is invalid', () => {
    render(
        <Provider store={store}>
            <Router>
                <FormComponent data={mockData} />
            </Router>
        </Provider>
    );
    fireEvent.click(screen.getByTestId('btn-submit'));
    expect(screen.queryAllByText(/is required/).length).toBeGreaterThan(0);
});

test('should not display error when value is valid', () => {
    render(
        <Provider store={store}>
            <Router>
                <FormComponent data={mockData} />
            </Router>
        </Provider>
    );
    const field = 'First name'
    fireEvent.change(screen.getByPlaceholderText(field), { target: { value: 'value' } });
    fireEvent.click(screen.getByTestId('btn-submit'));
    expect(screen.queryByText(`/${field} is required/`)).toBeNull();
});
