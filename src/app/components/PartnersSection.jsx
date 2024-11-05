// components/PartnersSection.js

import Image from 'next/image';

const partners = [
  {
    name: 'Benjamim Maiato',
    role: 'Lavra - Ortoga',
    imageUrl: '/Partner/Benjamim.png', // Substitua pelo caminho da imagem real
  },
  {
    name: 'Cataria Florence',
    role: 'Lavra - Benfica Street',
    imageUrl: '/Partner/cataria.png',
  },
  {
    name: 'Sião Bernardo',
    role: 'Lavra - X4 Team',
    imageUrl: '/Partner/sião.png',
  },
  {
    name: 'Crisvan dos Santos',
    role: 'Lavra - Bom Sabor',
    imageUrl: '/Partner/Crisvan.png',
  },
];

const PartnersSection = () => {
  return (
    <section className="p-8" id='partner'>
      {/* Título */}
      <div className="mb-6">
        <h3 className="text-green-600 font-semibold text-sm">04 • PARTNERS</h3>
      </div>

      {/* Grid de Parceiros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            {/* Imagem do Parceiro */}
            <Image
              src={partner.imageUrl}
              alt={partner.name}
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />

            {/* Nome e Cargo */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50  p-4">
              <p className="text-sm font-medium text-green-600">{partner.role}</p>
              <p className="text-lg font-semibold text-white">{partner.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
