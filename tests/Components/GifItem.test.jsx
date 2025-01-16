import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/Components/GifItem"

describe('Pruebas en el componente GifItem', () => {
    const title = 'Eren';
    const url = 'https://www.shingeki-no-kioyin.com.co/';
    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con la url y el alt indicado', () => {
        render(<GifItem  title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});