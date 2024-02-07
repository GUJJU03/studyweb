import React from 'react'
import Card from './Card'
import SemCards from './SemCards'

const SPFirstSec = () => {
    const cardArr = [
        { label: '' }
    ]
    return (
        <>
            <section className="main-first  bg-[rgb(36,36,35)] px-52 py-4">
                <div className="upper-cards-part">
                    <h1 className='text-white text-3xl py-4'>Recents</h1>
                    <div className="cards flex flex-wrap gap-3">
                        <Card filename="PDF-Name" url="https://play-lh.googleusercontent.com/1nfAdJs2Ep2q1skM7QwJ1uHooWSbpFkbIBHhAX6EmdzEKmtk42713TiTU28mWlkcFKPA" />
                    </div>
                </div>
               
            </section>

            <section className="main-first min-h-screen bg-[rgb(36,36,35)] px-52 py-4">
                <div className="upper-cards-part">
                    <h1 className='text-white text-3xl py-4'>Our All Materials for CSE</h1>
                    <div className="cards flex flex-wrap">
                       <SemCards/>
                    </div>
                </div>
               
            </section>
        </>
    )
}

export default SPFirstSec
