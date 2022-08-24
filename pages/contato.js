import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {

    return (
        <div className="w-1/3 mx-auto my-8">
            <PageTitle title='Contato' />
            <div>
                <h1 className="mb-5 bold my-4 text-2xl text-center">Contato</h1>

                <p className='mb-5'><strong>E-mail:</strong> vitormarinheirocorrea@gmail.com</p>
                <p><strong>Github:</strong> <a href='https://github.com/vitormcorrea' className='underline' target='_blank'>vitormcorrea</a></p>
            </div>
        </div>    
    )

}

export default Contato