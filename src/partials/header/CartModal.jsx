import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

function CartModal({
  id,
  modalOpen,
  setModalOpen, 
  cartItems, 
  onRemoveFromCart

}) {

  const modalContent = useRef(null);
  const getTotalPrice = () => {
    //  lógica para calcular o preço total dos itens no carrinho
  };
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

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
        <div ref={modalContent} className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded-lg shadow-lg">
          {/* <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                    <button onClick={() => onRemoveFromCart(item)}>Remover do Carrinho</button>
                  </div>
                ))}
                <p>Total: {getTotalPrice()}</p>
                <button>Finalizar Compra</button>
              </>
            )}
          </div>   */}




          <div className="h-screen sm:py-16 ">
            <div className="mx-auto sm:px-6 ">

              <div className="mx-auto mt-8 max-w-md md:mt-12">
                <div className="rounded-3xl bg-white shadow-lg">
                  <div className="px-4 py-6 sm:px-8 sm:py-10">
                    <div className="flow-root">
                      <ul className="-my-8">
                        <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                          <div className="shrink-0 relative">
                            <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                            <img className="h-24 w-24 max-w-full rounded-lg object-cover" src="../../src/images/books/book_01.jpg" alt="" />
                          </div>

                          <div className="relative flex flex-1 flex-col justify-between">
                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div className="pr-8 sm:pr-5">
                                <p className="text-base font-semibold text-gray-900">Nome do Livro</p>
                                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">E-book</p> 
                              </div>

                              <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">R$ 48.99</p>
                              </div>
                            </div>

                            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                              <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </li>
                        
                      </ul>
                    </div>

                    {/* <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> */}

                    <div className="mt-6 space-y-3 border-t border-b py-8">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400">Subtotal</p>
                        <p className="text-lg font-semibold text-gray-900">R$ 48.99</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400">Frete</p>
                        <p className="text-lg font-semibold text-gray-900">R$ 0.00</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Total</p>
                      <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">R$</span> 48.99</p>
                    </div>

                    <div className="mt-6 text-center">
                      <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-indigo-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                        Finalizar compra
                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default CartModal;
