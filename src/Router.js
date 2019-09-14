import React from 'react';

import {HashRouter,Route ,Switch} from 'react-router-dom';
import App from './App';
import RecipeDetails from './RecipeDetails';

const Router = () =>{
	return(
        <React.Fragment>
         <HashRouter >
           <Switch>
           <Route exact path = '/' component={App}/>
           <Route exact path ='/recipedetails/:id' component={RecipeDetails} />
           </Switch>
         </HashRouter>

        </React.Fragment>

		)
}

export default Router;