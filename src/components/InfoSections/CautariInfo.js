import React from 'react'
import {CautariSection, CautariWrapper, CategoriiPrincipale, CategoriiImg, CategoriiP, CautariFrecvente,CautariImg, CautariP, CategoriiImage, CautariImage} from './CautariComponents'
import docSvg from '../../images/svg-3.svg'
import docSvg2 from '../../images/svg-4.svg'

const CautariInfo = () => {
    return (
        <CautariSection>
            <CautariWrapper>
                <CategoriiPrincipale>
                        <CategoriiImage src={docSvg}/>
                    <p>Categorii principale: Auto, moto si ambarcatiuni, Imobiliare, Locuri de munca, Electronice si electrocasnice, Moda si frumusete, Casa si gradina, Mama si copilul, Sport, timp liber, arta, Animale de companie, Agro si industrie, Servicii, afaceri, echipamente firme</p>
                </CategoriiPrincipale>
                <CautariFrecvente>
                        <CautariImage src={docSvg2} />
                 <p>   Cautari frecvente: Tractoare, Bicicleta, 4x4, Casă, Schimb, Rulota, Atv, Rtx 3060, Tractor, Motocultor, Casa de vanzare, Téren, Apartament, Biciclete, Audi a4, Placa video, Rtx 3080, Logan, Vand, Laptop</p>

                </CautariFrecvente>
            </CautariWrapper>
        </CautariSection>
    )
}

export default CautariInfo
