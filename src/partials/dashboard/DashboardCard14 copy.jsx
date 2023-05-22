import React from 'react';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + '...';
}

function DashboardCard14() {

  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel felis sed metus lobortis vestibulum. Duis ultrices sapien sed tellus eleifend, id posuere neque eleifend. Sed eu ultricies libero. In non metus lobortis, sodales lorem ut, ultrices leo.";
  return (
    <div className="col-span-full sm:col-span-9 md:col-span-6 xl:col-span-4 rounded-sm  ">


        {/* Card content */}
        {/* "Today" group */}
        <div>
          <div className="md:px-4 md:grid md:grid-cols-1 lg:grid-cols-1 gap-5 space-y-4 md:space-y-0">
            <div className=" max-w-sm bg-white h-auto px-2 pt-2 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <h3 className="mb-3 text-xl font-bold text-indigo-600"></h3>
              <div className="relative flex justify-center items-center ">
                {/* <img className="w-full max-w-[20rem] h-[20rem] rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" /> */}
                {/* <p className=" absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded-br-lg rounded-tl-lg">R$ 65,00</p> */}
                
              </div>
              <div className="bg-gray-400 w-full h-72 rounded-xl p-4 bg-no-repeat bg-center bg-cover cursor-pointer" style={{backgroundImage: "url(https://loremflickr.com/400/340/bread,book)"}}>
                
                <div className="text-right">
                  <button className="text-pink-500 hover:text-pink-600 p-2 rounded-full" style={{background: "rgba(0,0,0,0.3)"}}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <h1 className="ml-3 mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Nome do livro</h1>
              <div className="my-4">
                <div className="flex space-x-1 items-center">
                  {/* <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span> */}
                  <p className="p-3 indent-5 text-justify break-all">{truncateText(product.description, 100)}</p>
                </div>
                <div className="ml-3 flex space-x-1 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p className="">Autor </p>
                </div>
                <div className="ml-3 flex space-x-1 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <p className="">Categoria</p>
                </div>
                <div class="flex justify-center items-center px-2 pb-2">
                  <div class="w-2/3 p-2">
                  <p className="">Preço</p>
                    
                  </div> 
                  <div class="w-1/5 p-2">
                    <button className="flex justify-center items-center mt-4 text-xl w-10 h-10 text-center bg-indigo-300 hover:bg-indigo-500 text-indigo-700 hover:text-white transition-all py-2 rounded-full shadow-lg">
                      <svg viewBox="0 0 24 24" class="inline w-5 h-5">
                        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                      </svg> 
                    </button>
                  </div>  
                  <div class="w-1/5 p-2">
                    <button className="flex justify-center items-center mt-4 text-xl w-10 h-10 text-green-900 hover:text-green-100 bg-green-400 hover:bg-green-600 transition-all py-2 rounded-full shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                    </button> 
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>    
    </div>
  );
}

export default DashboardCard14;
