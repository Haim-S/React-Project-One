import React from 'react'
import CardAbout from '../card/CardAbout'
import { ListCardAboutStyle } from '../../../css/ListCardAboutStyle'
import { MokeData } from '../../../data/mokedata'



const ListCardAbout = () => {
  return (
    <ListCardAboutStyle>
      {MokeData.map((about) => 
      
       ( <CardAbout key={about.id} about={about}/>)
      )}
    </ListCardAboutStyle>
  )
}

export default ListCardAbout