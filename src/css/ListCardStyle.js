
import styled from "@emotion/styled";

export const ListCardStyle = styled.div`
display: grid;
gap: 0.1rem;
margin: 0 auto;
width: 100%;
padding: 10px;
padding-top: 50px;


@media (min-width: 601px) {
    
        grid-template-columns: repeat(2, 1fr);
    
}

@media (min-width: 1200px) {
  
        grid-template-columns: repeat(3, 1fr);
    
}
`
