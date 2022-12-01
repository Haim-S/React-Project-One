import React, {useEffect, useState} from 'react'
import "./Footer.css"
import { ServerStatus, MarkPiont, Paragraph } from './FooterStyle'
import { getHotCoffee } from '../../../services/coffee.service'

const Footer = () => {

  const [status, setStatus] = useState(false);

useEffect(() =>{

  async function checkServer() {
    const data = await getHotCoffee();
    {data && setStatus(true)}
  }

  checkServer()
},[])

  return (
    <footer>
    <ServerStatus>
        <Paragraph>SERVER STATUS</Paragraph>
        <MarkPiont status={status}/>
        </ServerStatus>
    </footer>
  )
}

export default Footer