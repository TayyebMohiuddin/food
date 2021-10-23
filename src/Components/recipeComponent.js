
import styled from 'styled-components'




//for recipe elements
export const RecipeListContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap; //wrap according to the screen size
padding:30px;
gap:30px;

justify-content:space-evenly;
`;


export const RecipeContainer = styled.div`
display:flex;
flex-direction:column;
padding:10px;
box-shadow:0 3px 10px 0 #aaa;
width:300px;
&:hover{
    background-color:#E5E4E2;
    
}



`;


export const IngredientsText = styled.span`
font-size:16px;
font-weight:bold;
border:solid 1px green;
color:black;
margin:10px 0x;
margin-bottom:10px;
padding:15px 15px;
border-radius:4px;
color:black;
text-align:center;
&:hover
{background-color:green;
    color:white;

}
cursor:pointer;

`;



export const SeeMoreTest = styled(IngredientsText)`

cursor:pointer;
`;

export const CoverImage = styled.img`
object-fit:cover;
height:200px;

`;

export const RecipeName = styled.span`
font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;


`;
