import React from 'react'
import Link from 'next/link'

const Header = () => {

    return(
        <React.Fragment>
            <div className='bg-gray-300 p-5 shadow-lg'>
                <div className='container mx-auto text-center'>
                    <Link href='/'>
                        <a><img src='/images/feedbox.svg' alt='Feedbox' className="inline" /></a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-200 p-4 shadow-lg text-center'>
                <Link href='/'>
                    <a className='px-3 hover:underline'>Home</a>
                </Link> 
                <Link href='/sobre'>
                    <a className='px-3 hover:underline'>Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className='px-3 hover:underline'>Contato</a>
                </Link>
            </div>
        </React.Fragment>
    )

}

export default Header