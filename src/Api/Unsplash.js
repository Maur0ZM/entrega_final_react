import axios from 'axios';

// Función para buscar imágenes basada en un término de búsqueda
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID nD0ICYGUGRBWTzTnKXpRDY7fcGLRgrLzqmvTDNqlClU',
        },
        params: {
            query: term,
            per_page: 6
        },
    });

    return response.data.results;
};

export default searchImages;
