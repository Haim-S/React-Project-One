
import styled from "@emotion/styled";


export const HeaderStyle = styled.header`
height: ${({changeSizeHeaderOnPath}) => changeSizeHeaderOnPath ? "10vh" : "40vh"};
`

export const MainStyle = styled.main`
${({changeTheBackgroundOnPath}) => changeTheBackgroundOnPath ? "background-image:url('https://images.pexels.com/photos/872891/pexels-photo-872891.jpeg')" : "background-color: var(--main-background-color) "};
background-repeat: no-repeat;
background-size: cover;
`