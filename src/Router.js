import React from 'react';

import {BrowserRouter,Route ,Switch} from 'react-router-dom';
import App from './App';
import RecipeDetails from './RecipeDetails';

const Router = () =>{
  console.log(process.env.PUBLIC_URL);
	return(
        <React.Fragment>
         <BrowserRouter >
           <Switch>
           <Route exact path = '/' component={App}/>
           <Route exact path ='/recipedetails/:id' component={RecipeDetails} />
           </Switch>
         </BrowserRouter>

        </React.Fragment>

		)
}

export default Router;