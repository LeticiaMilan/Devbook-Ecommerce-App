import React from "react";
import { AiOutlineCheck } from 'react-icons/ai';

const Pricing = () => {
    return (
        <div id="" className="bg-gray-900 ">
            <div className="max-w-lg mx-auto">
                <h2 className="text-2xl md:text-5xl font-semibold text-center text-gray-100">Preços e Planos</h2>
                <h3 className="mt-2 text-center text-gray-500">Assinantes tem acesso aos conteúdos em alto nível para estarem sempre à frente no mercado.</h3>
            </div>
            <div className="my-8 mt-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
                <h3 className="text-2xl font-semibold text-gray-100">Free</h3>
                
                <div className="text-md text-gray-500 mt-3">
                    <ul className="flex white flex-col gap-3">
                        <li>✔ Acesso a livros digitais.</li>
                    </ul>
                </div>

                <div className="flex items-center mt-2 mb-4">
                    <h4 className="text-5xl font-semibold text-gray-100 mr-4">R$0</h4>
                    <span className="text-xs text-gray-500">- <br />por mês</span>
                </div>
                <button type="button" className="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3 disabled:opacity-25">Você está aqui</button>
                <button type="button" className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent "></button>
                </div>
                <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 px-8 pt-8 pb-4">
                <h3 className="text-2xl font-semibold text-gray-100">Dev Book Starter</h3>
                {/* <p className="mt-1 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quo totam incidunt possimus perferendis ab ea et.</p> */}

                <div className="text-md text-gray-500">
                    <p className="font-bold py-5 text-gray-400">O plano inclui:</p>
                    <ul className="flex white flex-col gap-3">
                        <li>✔ 2 livros pela metade do preço.</li>
                        <li>✔ Descontos em todas as compras.</li>
                        <li>✔ Acesso a livros digitais.</li>
                        <li>✔ Frete grátis.</li>
                    </ul>
                </div>

                <div className="flex items-center mt-2 mb-4">
                    <h4 className="text-5xl font-semibold text-gray-100 mr-4">R$19</h4>
                    <span className="text-xs text-gray-500">- <br />por mês</span>
                </div>
                <button type="button" className="my-2 w-full font-semibold text-gray-100 bg-indigo-600 hover:bg-indigo-700 py-3 rounded">Upgrade Starter</button>
                <button type="button" className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Ler mais</button>
                </div>
                <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
                <h3 className="text-2xl font-semibold text-gray-100">Dev Book Pro</h3>
                
                <div className="text-md text-gray-500">
                    <p className="font-bold py-5 text-gray-400">O plano inclui:</p>
                    <ul className="flex white flex-col gap-3">
                        <li>✔ Compre até 6 livros por mês com 50% Off.</li>
                        <li>✔ 20% Off em livros com descontos exclusivos.</li>
                        <li>✔ Acesso a livros digitais.</li>
                        <li>✔ Frete grátis.</li>
                    </ul>
                </div>

                <div className="flex items-center mt-2 mb-4">
                    <h4 className="text-5xl font-semibold text-gray-100 mr-4">R$39</h4>
                    <span className="text-xs text-gray-500">- <br />por mês</span>
                </div>
                <button type="button" className="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3">Upgrade Pro</button>
                <button type="button" className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Ler mais</button>
                </div>
            </div>
            </div>
    );
};

export default Pricing;