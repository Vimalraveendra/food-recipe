import React from 'react';
import Recipe from './Recipe'


const RecipeList =({recipes,error})=>{

	return(
     <React.Fragment>
     <div className="container my-3">
        <div className="row">
       {error ? <h2 className=" text-danger text-center">{error}</h2>
     
        :recipes.map(item=>{
            return<Recipe 
            key={item.recipe_id}
            id={item.recipe_id}
            title={item.title}
            publisher={item.publisher}
            img_url={item.image_url}
            source_url={item.source_url}
          />
        }) 
   }
     </div>
     </div>
     </React.Fragment>

		)
}

export default RecipeList;