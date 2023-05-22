import React, { useRef, useEffect, useState } from 'react';
import Transition from '../../utils/Transition';
import request from 'superagent';
import DashboardCard15 from '../dashboard/DashboardCard15';

function SearchModal({
  id,
  searchId,
  modalOpen,
  setModalOpen,
  onSearch
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregamento da página
    onSearch(searchTerm);
  };

  const modalContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [modalOpen, setModalOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [modalOpen, setModalOpen]);

  useEffect(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);

  useEffect(() => {
    // Chamar a função de pesquisa sempre que o searchTerm for atualizado
    searchBooks();
  }, [searchTerm]);

  const searchBooks = () => {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
    setIsLoading(true);
    setError(null);

    request
      .get(apiUrl)
      .query({ q: searchTerm })
      .then((response) => {
        const books = response.body.items || [];
        setSearchResults(books);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Erro ao buscar livros.');
        setIsLoading(false);
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div ref={modalContent} className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
          {/* Search form */}
          <form className="border-b border-slate-200 search" onSubmit={handleSearch}>
            <div className="relative">
              <label htmlFor={searchId} className="sr-only">Search</label>
              <input id={searchId} className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4" type="text" placeholder="O que você procura?" ref={searchInput} value={searchTerm} onChange={handleSearchInputChange} />
              <button className="p-3 absolute inset-0 right-auto group" type="submit" onClick={searchBooks}>
                <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-slate-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path className="fill-current text-slate-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
              {isLoading ? (
                <p className="ml-4 flex justify-center">Carregando...</p>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  
                </div>
              )}
              
            </div>
          </form>
        </div>
      </Transition>
    </>
  );
}

export default SearchModal;