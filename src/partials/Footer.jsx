import React from 'react';

function Footer() { 
    return (
        <>
        <div className="mt-20 bg-white flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4">
            <div>
                <p className="ml-4 text-gray-800 text-center md:text-left">
                &copy; 2023
                <span className="text-gray-900 font-bold">LM</span> Todos
                os direitos reservados.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-2">
                <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                Termos e condições
                </a>
                <span className="hidden xl:flex">|</span>
                <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                Política de privacidade
                </a>
            </div>
        </div>
        </>
    );
}

export default Footer;