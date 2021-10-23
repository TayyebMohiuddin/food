
import React from "react";
import { useState } from "react";
import Axios from "axios"
import styled from 'styled-components'
import { DialogTitle } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { DialogContent } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";


import { Header, AppNameComponent, AppIcon, SearchComponent, SearchInput }
  from './Components/headerComponent';

import { RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientsText, SeeMoreTest }
  from './Components/recipeComponent';


const YOUR_APP_ID = "3d51dc2f";
const YOUR_APP_KEY = "6f52f3191ff73a4344b9f3587924bc42";
// var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}
//   &app_key=${YOUR_APP_KEY}&health=alcohol-free`;






const Container = styled.div`
  display:flex;
  flex-direction:column;
  length:25px;`;

//component for the image visible on the home page
const Placeholder = styled.img`
width:380px;
height:380px;
margin-top:30px
  `;



const RecipeComponent = (props) => {
  const [show, setshow] = useState(false);
  const { recipeObj } = props;
  //recipeObj is referring to the data that is recieved when we make an api call through props
  //image is the key for the elements entered by the user...you can see that on console.log
  //ingredientObj is a variable denoting the data recieved of ingredients 
  //recipeObj.ingredients refer to the data  about ingredients inside the recipeObj
  //text and weights are the keys fetched on api call
  return (
    <>
      <Dialog open={show}>

        <DialogTitle>Ingredients</DialogTitle>

        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight(in grams)</th>
            </thead>

            <tbody>
              {recipeObj.ingredients.map((ingredientObj) =>
                <tr>
                  <td>
                    {ingredientObj.text}
                  </td>

                  <td>
                    {ingredientObj.weight}
                  </td>

                </tr>)}

            </tbody>
          </table>

        </DialogContent>
        <DialogActions>
          <SeeMoreTest onClick={() => window.open(recipeObj.url)}>See more</SeeMoreTest>
          <SeeMoreTest onClick={() => setshow("")}>Close</SeeMoreTest >
        </DialogActions>


      </Dialog>


      <RecipeContainer  >
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName >
        < IngredientsText onClick={() => setshow(true)} >Ingredients</ IngredientsText>
        <SeeMoreTest onClick={() => window.open(recipeObj.url)} >See Complete recipe</SeeMoreTest>
      </RecipeContainer>
    </>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updaterecipeList] = useState([]);

  //fetch API

  const fetchRecipe = async (searchString) => {//4 pass it to the url
    const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`)
    updaterecipeList(response.data.hits);
    console.log(response)
  };
  //




  const onTextChange = (event) => {//2
    clearTimeout(timeoutId)
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 800);//3 get the value entered
    updateTimeoutId(timeout);
  };




  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="data:image/png;base64,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" />

          Hunger Express
        </AppNameComponent>
        <SearchComponent>
          <AppIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zz1414SZDgClqhggVgERUU8f-K4lAhm79g&usqp=CAU" />
          <SearchInput placeholder="Search Recipe"
            onChange={onTextChange}  //onTextChange is a function defined above //1
          />
        </SearchComponent>


      </Header>


      <RecipeListContainer>

        {recipeList.length ?
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />  //recipe is inside the recipe key if you see the object in console on console.log(props);

          )) : <Placeholder src=
            "https://media.istockphoto.com/vectors/vector-fast-food-icons-isolated-burgers-sandwiches-vector-id858131022?k=20&m=858131022&s=612x612&w=0&h=69zY14Tiao8MSrUl7Ke5I038s42k5CmRjGHle7QUPFA=" />
        }








      </RecipeListContainer>
    </Container>
  );
}

export default App;
