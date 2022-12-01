import React from 'react'
import { FirstCardAboutStyle, ImageCardAboutStyle, ContinerTextCard} from '../../../css/CardAboutStyle'


const CardAbout = ({about}) => {

 
  return (
  
    <FirstCardAboutStyle>
<ImageCardAboutStyle src={about.image}/>
<ContinerTextCard>
{about.id === 1 ? <h3>my name is {about.title}</h3> : ""}
<p>{about.description}</p>
</ContinerTextCard>
    </FirstCardAboutStyle>
    

  )
}

export default CardAbout