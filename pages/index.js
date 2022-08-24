import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const { data, error } = useSWR('/api/get-promo', fetcher)

    return (
        <div className="text-center">

            <PageTitle title='Início' />

            <div>
                <h1 className="mb-5 bold my-4 text-2xl">Olá!</h1>
            </div>
            <div className="mb-5">
                <p>Esta empresa busca sempre por atender melhor os seus clientes.</p>
                <p>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            </div>
            <div className="m-12">
                <Link href='/pesquisa'>
                    <a className="bg-blue-400 px-8 py-3 font-bold rounded-md text-white shadow-md">Dar opinião</a>
                </Link>
            </div>

            {!data && <p>Carregando...</p> }
            {!error && data && data.showCoupon &&
            <div>
                <p>{data.message}</p>
            </div>
            }
        </div>
    )

}

export default Index