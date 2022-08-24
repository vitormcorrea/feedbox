import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const createCoupon = () => {

    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()

    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)

}

export default async(req, res) => {

    try {

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        })

        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[1]
        await sheetConfig.loadCells('A2:B2')
        
        const mostrarPromo = sheetConfig.getCell(1, 0)
        const mensagemPromo = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''

        if(mostrarPromo.value === 'VERDADEIRO'){
            Cupom = createCoupon()
            Promo = mensagemPromo.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            Cupom,
            Data: moment().format('DD/MM/YYYY HH:MM:SS'),
            Promo
        })

        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))

    } catch (err) {
        console.log(err)
        res.end('error')
    }

}