import styled from "styled-components";

export const HeaderContainer = styled.header`
 background: ${props => props.theme["gray-900"]};
 padding: 2.5rem 0 7.5rem;


`;

export const HeaderContent = styled.div `
 width: 100%;
 max-width: 1120px;
 margin: 0 auto;
 padding: 0 1.5rem;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const NewTransactionButton = styled.button`
height: 50px;
border: 0;
background: ${props => props.theme["green-500"]};
color: ${props => props.theme.white};
font-weight: bold;
padding: 0 1.25rem;
border-radius: 6px;
cursor: pointer;

&:hover {
    background: ${props => props.theme["green-700"]};
    transition: 0.2s;
}
`;

export const EditButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 35px;
width: 35px;
border: 0;
background: ${props => props.theme["green-500"]};
color: ${props => props.theme.white};
padding: 0;
border-radius: 6px;
cursor: pointer;

&:hover {
    background: ${props => props.theme["green-700"]};
    transition: 0.2s;
}
`;

export const DeleteButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 35px;
width: 35px;
border: 0;
background: ${props => props.theme["red-500"]};
color: ${props => props.theme.white};
padding: 0;
border-radius: 6px;
margin-left: 0.26rem;
cursor: pointer;

&:hover {
    background: ${props => props.theme["red-700"]};
    transition: 0.2s;
}
`;