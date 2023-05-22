import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ResetPassword() {
    return (
        <div className="flex h-screen justify-center items-center  bg-slate-900 bg-gradient-to-r
        from-indigo-600
        via-indigo-900
        to-slate-800
        background-animate
        "
        >
            {/* <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> */}
                <div className="max-w-4xl mx-auto rounded-lg">
                    <div className="flex flex-col items-center justify-center  p-4 space-y-4 antialiased text-gray-900 ">
                        <div className="w-full px-8 max-w-lg space-y-6 bg-white rounded-md py-16">
                        <h1 className=" mb-6 text-3xl font-bold text-center">
                            Recuperar senha
                        </h1>
                        <p className="text-center mx-12">Estamos aqui para ajudá-lo, digite o endereço de e-mail e enviaremos instruções para redefinir sua senha.</p>
                        <form action="#" className="space-y-6 w-ful">
                            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100"
                            type="email" name="email" placeholder="Digite seu e-mail" required="" />
                            <div>
                            <button type="submit"
                                className="w-full px-4 py-2 font-medium text-center text-white bg-indigo-600 transition-colors duration-200 rounded-md bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                                Recuperar
                            </button>
                            </div>
                        </form>
                        <div className="text-sm text-gray-600 items-center flex justify-between">
                            <p className="text-gray-800 cursor-pointer hover:text-indigo-500 inline-flex items-center ml-4 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clip-rule="evenodd" />
                            </svg>

                            <Link to="/signin">
                                Voltar
                            </Link>
                            
                            </p>
                            <p className="hover:text-indigo-500 cursor-pointer transition-all">Precisa de ajuda?</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default ResetPassword;