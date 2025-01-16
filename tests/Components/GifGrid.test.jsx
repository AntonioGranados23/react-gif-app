import { render } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en en el componente <GifGrid />', () => {
    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true
        });


        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        screen.debug();
    });

    test('Debe mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'htpps://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Fc25',
                url: 'htpps://localhost/fc25.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false
        });


        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
        screen.debug();
    });
});