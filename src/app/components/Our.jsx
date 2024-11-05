// components/ValuesSection.js

const values = [
    { value: '200,000.00', color: 'text-green-600' },
    { value: '+100,2300', color: 'text-green-600' },
    { value: '+130,2300', color: 'text-green-600' },
  ];
  
  const ValuesSection = () => {
    return (
      <div className="flex justify-center space-x-8 mt-8 md:text-6xl text-2xl font-bold max-md:space-x-1">
        {values.map((item, index) => (
          <span key={index} className={item.color } >
            {item.value}
          </span>
        ))}
      </div>
    );
  };
  
  export default ValuesSection;
  