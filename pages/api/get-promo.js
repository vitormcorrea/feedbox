import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async(req, res) => {

    try {

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
          })

        await doc.loadInfo()
    
        const sheet = doc.sheetsByIndex[1]
        await sheet.loadCells('A2:B2')
        
        const mostrarPromo = sheet.getCell(1, 0)
        const mensagemPromo = sheet.getCell(1, 1)

        res.end(JSON.stringify({
            showCoupon: mostrarPromo.value === 'VERDADEIRO',
            message: mensagemPromo.value
        }))

    } catch (err) {
        
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))

    }

}