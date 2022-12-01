import React from 'react'
import { CardStyle, ImageCardStyle, HovertextCard, ContinerTextCard } from '../../../css/CardStyle'
const Card = ({item}) => {
  return (
    <CardStyle>
        <ImageCardStyle src={item.image} />
        <ContinerTextCard>
        <HovertextCard>{item.title}</HovertextCard>
        
        <p>{item.description}</p>
        
        </ContinerTextCard>
        </CardStyle>
  )
}

export default Card