import React from 'react';

const RecipeSearch =({getRecipe,onSearchChange,inputValue,recipeName,handleSubmit})=>{

	return(
     <React.Fragment>
     <div className ="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 col-lg-4">
       <form onSubmit={handleSubmit}>
         <input 
         type='text'
         name="recipeName"
         value={recipeName}
         placeholder="search your items"
         onChange={onSearchChange}
         className='recipeSearch_input'
         />
         <button 
         className="recipeSearch_button">
         search
         </button>
       </form>
    </div>  
   </div>
   </div>
  </React.Fragment>

		)
}

export default RecipeSearch;