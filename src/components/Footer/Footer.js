import React from 'react'
import {FooterItem,Credits, FooterSection,FooterContent, FooterColumn1,FooterColumn2,FooterSocialColumn,SocialMediaIcons,FacebookIcon, InstagramIcon, YoutubeIcon,AppDownloadIcons,AppStoreIcon, GooglePlayIcon, AppGaleryIcon} from './FooterComponents'
import {firstColumn, secondColumn} from '../../Data/FooterData'
import appStore from '../../images/svg-5.svg'

const Footer = () => {
    const data = firstColumn.title.map((item,key) => (
        <FooterItem key={key}>{item} </FooterItem>
    )
    )

    const data2 = secondColumn.title.map((item,key) => (
        <FooterItem key={key}>{item} </FooterItem>
    )
    )


    return (
        <>
        <FooterSection>
            <FooterContent>
                <FooterColumn1>
                    {data}
                </FooterColumn1>
                <FooterColumn2>
                    {data2}
                </FooterColumn2>
                <FooterSocialColumn>
                    Urmareste-ne pe
                    <SocialMediaIcons>
                        <FacebookIcon />
                        <InstagramIcon/>
                        <YoutubeIcon />
                    </SocialMediaIcons>
                    Descarca aplicatia pentru telefon din
                   <AppDownloadIcons>
                       <AppStoreIcon>
                           <img src={appStore} alt='App Store'/>
                       </AppStoreIcon>
                       <GooglePlayIcon>
                           <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png' alt='Play Store'/>
                       </GooglePlayIcon>
                       <AppGaleryIcon>
                           <img src='https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/campaign/emui91/images/Badge-Black.png' alt='Huawei'/>
                       </AppGaleryIcon>
                   </AppDownloadIcons>
                </FooterSocialColumn>
            
            </FooterContent>
            <Credits><p>Coded by <a href='https://github.com/lucasmanea21'>Lucas Manea</a></p></Credits>
        </FooterSection>

        </>
    )
}

export default Footer
