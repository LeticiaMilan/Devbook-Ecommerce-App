import React from 'react';
import { allProducts } from '../ProductList';

function Devas() {
    const filteredProducts = allProducts
        .filter((product) => product.devas === 'femme')
        .reduce((uniqueProducts, product) => {
        const authorExists = uniqueProducts.some((uniqueProduct) => uniqueProduct.author === product.author);
        if (!authorExists) {
            uniqueProducts.push(product);
        }
        return uniqueProducts;
        }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {filteredProducts.map((product, index) => (
            <div key={index}>
            <div className="col-span-full sm:col-span-9 md:col-span-6 xl:col-span-4 rounded-sm">
                <div className="bg-white hover:bg-indigo-600 group rounded-lg shadow hover:shadow-lg hover:shadow-indigo-700 transition-all hover:cursor-pointer">
                <div className="flex justify-center py-8">
                    <img
                    src={product.imgDevas}
                    alt="Letícia Milan"
                    lazyload="true"
                    className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
                    />
                </div>
                <div className="flex flex-col items-center gap-2 p-4">
                    <h3 className="font-semibold text-xl group-hover:text-white transition-all">
                    {product.author}
                    </h3>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    );
}

export default Devas;