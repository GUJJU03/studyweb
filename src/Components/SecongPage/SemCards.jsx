import React from 'react';

const SemCards = () => {
    const SemNo = [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '7' },
        { label: '8' }
    ];

    return (
        <>
            <div className="main-sem-cards-containe flex flex-wrap gap-8">
                {
                    SemNo.map((item, index) => (
                        <div key={index} className='border w-[35vw] flex'>
                            <div className="images">
                                <img width={150} src="https://play-lh.googleusercontent.com/1nfAdJs2Ep2q1skM7QwJ1uHooWSbpFkbIBHhAX6EmdzEKmtk42713TiTU28mWlkcFKPA" alt="" />
                            </div>
                            <div className="texts w-full p-2 flex justify-center items-center">
                                <div className="px-4 py-2 ">
                                    <h1 className='text-white tracking-[4px] w-full text-center'><a href="">Semister-{item.label}</a></h1>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
        </>
    );
};

export default SemCards;
