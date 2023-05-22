import axios from 'axios';

const API_KEY = 'AIzaSyDROlEb6k-GxsLyuF0veT-MJeTqQqUrEAQ';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// Função para buscar livros com base no termo de pesquisa
export const searchBooks = async (searchTerm) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${searchTerm}&key=${API_KEY}`);
        return response.data.items;
    } catch (error) {
        console.error('Erro na busca de livros:', error);
        return [];
    }
};

// Função para obter detalhes de um livro específico
export const getBookDetails = async (bookId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${bookId}?key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter detalhes do livro:', error);
        return null;
    }
};