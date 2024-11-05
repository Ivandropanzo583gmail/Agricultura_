import Image from 'next/image';

export default function Citacion(){
    return (
        <div className='mt-20'>
            <div className='md:ml-80'>
                <h1 className='text-green-600 font-bold '>03 . CITATION</h1>
                <h2 className='text-black font-bold text-3xl mt-5'>Discover the benefits <br></br> 
                of working with us</h2>
            </div>
            <div className='md:-mt-20 block md:flex justify-center items-center'>
                <div>
                    <h3 className='font-bold text-black text-xl'> We offer you quality work, safety <br></br>
                    and comfort in producing your <br></br>
                    products.</h3>
                    <p className='text-gray-400 mt-5'>Use our built-in analytics dashboard to pull <br></br>
                    valuable insights and monitor the value of <br></br>
                    your Krypto portfolio over time. </p>
                    <a href="#" className="text-green-600 font-semibold mt-4 inline-block">
                        Learn more →
                    </a>
                </div>
                <div className='md:ml-5'>
                    <Image src="/Citacion/image.png" alt=''
                    width={200}
                    height={200}
                    className='w-72 h-80'
                    />
                </div>
                <div className='md:mt-20 md:ml-5'>
                    <p className='text-gray-400 mt-10'>Building the future through technology <br></br>
                    with agriculture.</p>
                    <Image src="/Citacion/img.png" alt=''
                    width={200}
                    height={200}
                    className='w-64 h-72'
                    />
                </div>
            </div>
        </div>
      );
    };
