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
                    <svg width="50" height="" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <title>book_2_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Education" transform="translate(-144.000000, -48.000000)"> <g id="book_2_fill" transform="translate(144.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M4,5 C4,3.34315 5.34315,2 7,2 L18,2 C19.1046,2 20,2.89543 20,4 L20,16.99 C20,17.1576 19.9623,17.3115 19.8872,17.4617 L19.3416,18.5528 C19.2009,18.8343 19.2009,19.1657 19.3416,19.4472 L19.8854,20.5348 C19.9586,20.6737 20,20.832 20,21 C20,21.5523 19.5523,22 19,22 L7,22 C5.34315,22 4,20.6569 4,19 L4,5 Z M7,18 L17.4076,18 C17.1789,18.6468 17.1789,19.3532 17.4076,20 L7,20 C6.44772,20 6,19.5523 6,19 C6,18.4477 6.44772,18 7,18 Z M10,7 C9.44772,7 9,7.44772 9,8 C9,8.55228 9.44772,9 10,9 L14,9 C14.5523,9 15,8.55228 15,8 C15,7.44772 14.5523,7 14,7 L10,7 Z" id="形状" fill="#cbd5e1"> </path> </g> </g> </g> </g>

                    </svg>
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