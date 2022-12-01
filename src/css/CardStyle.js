
import styled from "@emotion/styled";

export const CardStyle = styled.div`
width: 85%;
height: 85%;
background-color: var(--main-card-background-color);
padding-top: 0%;
padding-right: 10px;
margin: 0 auto;
border-radius: 20px;
margin-top: 50px;
color: (--main-card-titleText-color);
display: flex;

font-size: 20px;
font-weight: bolder;
`

export const ImageCardStyle = styled.img`
width: 60%;
height: 100%;
border-radius: 20px;
padding-right: 20px;
padding-top: 0;

`

export const HovertextCard = styled.h3`

&:hover {
    cursor: pointer;
    color: var(--hover-text-color);
}
`

export const ContinerTextCard = styled.div`

display: flex;
flex-direction: column;
ailgn-items: center;
justify-content: center;

`

// margin: 0;
// padding: 0;
// overflow-x: hidden;