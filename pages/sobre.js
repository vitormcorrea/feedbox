import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    
    return (
        <div className="w-1/3 mx-auto my-8">
            <PageTitle title='Sobre' />
            <div>
                <h1 className="mb-5 bold my-4 text-2xl text-center">Sobre</h1>

                <p className='block mb-5'>O Feedbox é uma ferramenta completa para você obter feedbacks em seu estabelecimento e receber estas informações diretamente em uma planilha do Google totalmente online.</p>
                
                <p className='block mb-5'>Foi desenvolvido utilizando as tecnologias: <strong>React, Next.js e TailwindCSS</strong>.</p>

            </div>
        </div>    
    )

}

export default Sobre