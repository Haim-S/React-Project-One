import React from 'react'
import Card from '../card/Card'
import { ListCardStyle } from '../../../css/ListCardStyle'
import { getHotCoffeByNumber } from '../../../services/coffee.service'



const ListCard = () => {

    const [MokeData, setData] =React.useState([]);

React.useEffect(()=>{

    getHotCoffeByNumber(20).then(setData)

},[])


  return (
    <ListCardStyle>
        {MokeData.map((item, index)=> (<Card key={index} item={item}/>))}
    </ListCardStyle>
  )
}

export default ListCard