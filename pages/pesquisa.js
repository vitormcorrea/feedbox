import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {

    const [ form, setForm ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })

    const notas = [0, 1, 2, 3, 4, 5]

    const [ success, setSuccess ] = useState(false)

    const [ retorno, setRetorno ] = useState({})

    const save = async () => {

        try{

            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()

            setSuccess(true)

            setRetorno(data)

        } catch (err){
            
        }

    }

    const changeForm = evt => {

        const value = evt.target.value
        const key = evt.target.name

        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div>
            <PageTitle title='Pesquisa' />
            <div>
                <h1 className="mb-5 bold my-4 text-2xl text-center">Deixar sugestões ou críticas</h1>
                <p className='text-center'>Preencha o formulário, deixe sua sugestão ou crítica e receba um desconto.</p>
            </div>
            <div>
                {!success &&
                <div className='w-1/3 mx-auto my-8'>
                    <div className="mb-5">
                        <label className="block pb-2 font-bold">Seu nome:</label>
                        <input type='text' className='w-full block shadow px-4 py-2 border border-gray-50 rounded' onChange={changeForm} name='Nome' value={form.Nome} />
                    </div>
                    <div className="mb-5">
                        <label className="block pb-2 font-bold">E-mail:</label>
                        <input type='text' className='w-full block shadow px-4 py-2 border border-gray-50 rounded' onChange={changeForm} name='Email' value={form.Email} />
                    </div>
                    <div className="mb-5">
                        <label className="block pb-2 font-bold">Whatsapp:</label>
                        <input type='text' className='w-full block shadow px-4 py-2 border border-gray-50 rounded' onChange={changeForm} name='Whatsapp' value={form.Whatsapp} />
                    </div>
                    <div className="mb-5 flex">
                        <label className="block pb-2 font-bold block">Nota:</label>
                        
                        { notas.map(nota => {
                            return (
                                <label for={nota} className='block w-1/6 text-center'>
                                    <input type='radio' name='Nota' id={nota} value={nota} onChange={changeForm} /> 
                                    <br></br>
                                    {nota}
                                </label>
                                )
                            }) 
                        }
                    </div>
                    <div>
                        <button className="bg-blue-400 px-8 py-3 font-bold rounded-md text-white shadow-md" onClick={save}>Enviar</button>
                    </div>
                </div>}
                {success &&
                    <div>
                        <div className='w-1/3 mx-auto my-8 p-5 bg-green-100 text-center'>
                            <p>Obrigado por contribuir com sua sugestão ou crítica.</p>
                        </div>
                        {retorno.showCoupon &&
                            <div className='w-1/3 mx-auto my-8 p-5 text-center border'>
                                <p className='mb-3'>{retorno.Promo}</p>
                                <p className='mt-5 mb-3'>Seu cupom:</p>
                                <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                            </div>
                        }
                    </div>
                }
                
            </div>
        </div>
    )

}

export default Pesquisa