import React from 'react'
import {InfoWrapper, TitleWrapper, ParagraphWrapper, MediaWrapper} from './OlxInfoComponents'

const OlxInfo = () => {
    return (
        <InfoWrapper>
            <TitleWrapper>
                <p>Olx</p>
            </TitleWrapper>
            <ParagraphWrapper>
            OLX.ro iti ofera posibilitatea de a publica anunturi gratuite pentru orasul tau si imprejurimile sale. Vei gasi usor pe OLX.ro anunturi gratuite interesante din Bucuresti, Ilfov si alte orase din tara si vei putea intra usor in legatura cu cei care le-au publicat. Pe OLX.ro te asteapta locuri de munca, apartamente si camere de inchiriat, masini second-hand si telefoane mobile la preturi mici. Daca vrei sa vinzi ceva vei putea adauga foarte usor anunturi gratuite. Daca vrei sa cumperi ceva aici vei putea gasi produsele care te intereseaza la preturi mai mici decat in orice magazin.
            </ParagraphWrapper>
            <MediaWrapper>
            {/* <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="standard" data-action="like" data-size="small"></div>
            <br /> */}
            {/* <div><a href="https://twitter.com/intent/tweet?button_hashtag=button&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet </a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>            */}
             </MediaWrapper>
        </InfoWrapper>
    )
}

export default OlxInfo
