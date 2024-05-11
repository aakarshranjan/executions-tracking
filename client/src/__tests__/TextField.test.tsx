import {render, screen} from '@testing-library/react';
import TextField from "../components/base/TextField";

describe('Text Field', () => {
    test('renders correctly', () => {
        render(<TextField />);
        const el = screen.getByRole('mui-textfield');
        expect(el).toBeInTheDocument();
    })
})