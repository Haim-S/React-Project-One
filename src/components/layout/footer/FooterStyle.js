
import styled from "@emotion/styled";


export const ServerStatus = styled.div`
margin: 0%;
display: flex;
align-items: center;
justify-content: center;
`

export const MarkPiont = styled.div`
margin-left: 8px;
height: 10px;
width: 10px;
border-radius: 30px;
background-color:${({status}) => status ? "green" : "red"};
`

export const Paragraph = styled.p`
color: var(--footer-text-color);
`
