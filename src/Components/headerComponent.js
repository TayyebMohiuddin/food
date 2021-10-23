import styled from 'styled-components'


//STYLED COMPONENTS



export const Header = styled.div`
color:white;
background-color:black;
display:flex;
flex-direction:row;
padding:5px;
font-size:25px;
font-weight:bold;
box-shadow:0 3px 6px  0 #555;
align-items:center;
justify-content:space-between;`;  //it will separate the two components to diffrenet sides

//APP NAME
export const AppNameComponent = styled.div`
display:flex;
align-items:center;
`;


//APP ICONS
export const AppIcon = styled.img`
width:36px;
height:36px;
margin:15px;
`;


export const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color:white;

margin-right:14px;

border-radius:10px;
width:50%;
`;

export const SearchInput = styled.input`
border:none;
outline:none;
margin-left:15px;
font-size:20px;
font-weight:bold;`;


/////////styled compo ends //////////////////////