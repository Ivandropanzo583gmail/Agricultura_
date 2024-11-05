// components/FruitSection.js

import Image from 'next/image';

const Our_Products = () => {
  return (
    <div>
         <h1 className='text-green-600 font-medium text-xl md:font-bold mt-20' id='Products'>02 . OUR PRODUCTS</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
               
            
            {/* Apple */}
            <div className="relative bg-white p-4 rounded-lg shadow mt-10">
                <h3 className="text-sm font-medium mb-2">We import</h3>
                <h2 className="text-lg font-semibold text-green-600">Apple</h2>
                <span className="absolute top-4 right-4 text-green-600 font-bold">●</span>
                <div className="mt-4">
                <Image
                    src="/Our_Products/maçã.png"
                    alt="Apple"
                    width={200}
                    height={200}
                    className="rounded-md"
                />
                </div>
            </div>

            {/* Papaya */}
            <div className="relative bg-gray-800 text-white p-4 rounded-lg shadow">
                <h3 className="text-sm font-medium mb-2">We import</h3>
                <h2 className="text-lg font-semibold">Papaya</h2>
                <span className="absolute top-4 right-4 text-green-600 font-bold">●</span>
                <div className="mt-4">
                <Image
                    src="/Our_Products/papaia.png"
                    alt="Papaya"
                    width={250}  // Tamanho personalizado para Papaya
                    height={250} // Tamanho personalizado para Papaya
                    className="rounded-md"
                />
                </div>
            </div>

            {/* Passion Fruit */}
            <div className="relative bg-white p-4 rounded-lg shadow">
                <h3 className="text-sm font-medium mb-2">We import</h3>
                <h2 className="text-lg font-semibold text-green-600">Passion fruit</h2>
                <span className="absolute top-4 right-4 text-green-600 font-bold">●</span>
                <div className="mt-4">
                <Image
                    src="/Our_Products/maracujá.png"
                    alt="Passion fruit"
                    width={200}
                    height={200}
                    className="rounded-md"
                />
                </div>
            </div>

            {/* Ananas */}
            <div className="relative bg-gray-800 text-white p-4 rounded-lg shadow">
                <h3 className="text-sm font-medium mb-2">We import</h3>
                <h2 className="text-lg font-semibold">Ananas</h2>
                <span className="absolute top-4 right-4 text-green-600 font-bold">●</span>
                <div className="mt-4">
                <Image
                    src="/Our_Products/ananás.png"
                    alt="Ananas"
                    width={200}
                    height={200}
                    className="rounded-md w-40"
                />
                </div>
            </div>

            {/* Mango */}
            <div className="relative bg-white p-4 rounded-lg shadow">
                <h3 className="text-sm font-medium mb-2">We import</h3>
                <h2 className="text-lg font-semibold text-green-600">Mango</h2>
                <span className="absolute top-4 right-4 text-green-600 font-bold">●</span>
                <div className="mt-4">
                <Image
                    src="/Our_Products/manga.png"
                    alt="Mango"
                    width={200}
                    height={200}
                    className="rounded-md"
                />
                </div>
            </div>

            {/* Others */}
            <div className="relative bg-gray-800 text-white p-4 rounded-lg shadow" id='Other'>
                <h3 className="text-sm font-medium mb-2">We import</h3>
                <h2 className="text-lg font-semibold">Others</h2>
                <span className="absolute top-4 right-4 text-green-600 font-bold">●</span>
                <div className="mt-4">
                <Image
                    src="/Our_Products/alimentos.png"
                    alt="Others"
                    width={200}
                    height={200}
                    className="rounded-md"
                />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Our_Products;
