import React from 'react'

const Navbar2 = () => {
    const trending = [
        { label: "All" },
        { label: "Assignments" },
        { label: "Tutorials" },
        { label: "Units" },
        { label: "Contact Us" },
        { label: "All5", href: '/' },
    ]
    return (
        <>
            <div className="w-full h-[20vh] bg-[#242423] px-52 py-4 border-b">
                <div className="flex justify-center items-center  ">
                    <p className='text-5xl text-white mr-3'>logo</p>
                    <div className="h-14 w-full bg-black flex items-center p-2 border rounded  ">
                        <a href=""><img width={25} src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" className=' p-1' alt="" /></a>
                        <input className='w-full h-8 bg-black text-white ml-3' type="text" placeholder='Serach Files' />
                        <img src="" alt="" />
                    </div>
                    <label htmlFor=""></label>
                </div>

                <div className="h-11 w-full bg-transparent  mt-4 flex items-center justify-between">
                    <ul className='flex justify-start items-center'>
                        {trending.map((item) => (
                            <li className='text-white  rounded-2xl px-2 py-1 mt-1 hover:bg-black mr-2'><a href="">{item.label}</a> </li>
                        ))}
                    </ul>
                    <ul>
                    <li className='text-white  rounded-2xl px-2 py-1 mt-1 hover:bg-black mr-2'><a href="">Upload</a> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar2
