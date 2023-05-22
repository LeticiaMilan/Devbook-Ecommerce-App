import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/additional-styles/animate-bg.css';

function SignIn() {
    return (
        <div className="flex h-screen justify-center items-center bg-slate-900 bg-gradient-to-r
        from-indigo-600
        via-purple-900
        to-slate-800
        background-animate
        "
        >
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <div className="flex justify-center items-center text-indigo-800">
                        <img
                            src="../src/images/book-logo.svg"
                            width={60}
                            alt=""
                            
                        />
                        <span className="text-3xl font-bold whitespace-pre text-indigo-700">DevBook</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">Faça seu login na plataforma</h5>
                    <div>
                        <label htmlFor="email" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Seu e-mail</label>
                        
                        <div className="relative">
                        
                            <input type="email" name="email" id="email" className="py-2 px-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="E-mail" required />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-indigo-500"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>
                        
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                        
                        <div className='relative'>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="py-2 px-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-indigo-500"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                />
                            </svg>
                        </div>

                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lembrar-me</label>
                        </div>
                        
                        <a href="#" className="ml-auto text-sm text-purple-700 hover:underline dark:text-purple-500">
                        <Link to="/resetpassword">
                            Esqueci minha senha
                        </Link>
                        </a>
                    </div>

                    <button type="submit" className="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:indigo-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition-all">
                        <Link to="/">
                            Entrar
                        </Link>
                    </button>
                    
                    <div class="flex flex-row justify-center mb-8">
                        <span class="absolute bg-white px-4 text-gray-500">ou entre com</span>
                        <div class="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>

                    <div class="flex flex-row gap-2">
                        <button
                        class="bg-white text-gray-700 border border-gray-700 rounded-xl w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-gray-100 duration-100 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                            role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                                fill="currentColor" />
                            </g>
                        </svg>
                        Google
                        </button>
                        <button
                        class="bg-white border border-gray-700 text-gray-700 w-full p-2 flex flex-row justify-center gap-2 items-center rounded-xl hover:bg-gray-100 duration-100 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                            role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                fill="currentColor" />
                            </g>
                        </svg>
                        Github
                        </button>
                    </div>
                    
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Não tem uma conta? 
                        
                        <a href="#" className="ml-2 text-purple-700 hover:font-bold dark:text-purple-500 transition-all">
                            <Link to="/signup">
                                Registre-se
                            </Link>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;