import { fireEvent, render } from "@testing-library/react"
import { AddCategory } from "../../src/Components/AddCategory"

describe('Pruebas en <AddCategory>', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target:{value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
        // screen.debug();
    });

    test('Debe llamar el argumento onNewCategory si el input tiene algun valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value: 'Saitama'}});
        fireEvent.submit(form);

        screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar el onNewCategory, si el input esta vacío ', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={() => {}} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});