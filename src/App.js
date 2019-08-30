import React,{Component} from 'react';
import RecipeSearch from './RecipeSearch';
import './App.css';
import RecipeList from './RecipeList';


const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  state={
    recipes:[],
    recipeName:'',
    error:''
  }
 
  componentDidMount = async ()=>{
    try{
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}`)
    const resp = await api_call.json()
     this.setState({
      recipes:resp.recipes
    })
    }catch(err){
       console.log(err)
    }
  }
 
 onSearchChange=(e)=>{
  
    const recipeName= e.target.value
    this.setState({
      recipeName:recipeName

    })
 }

 handleSubmit=async (e)=>{
  e.preventDefault()
  try{
    const {recipeName}=this.state
    if(recipeName.length>0){
    const resp = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=30`)
    const data = await resp.json()
     if(data.recipes.length !==0){
     this.setState({
      recipes:data.recipes,
      recipeName:''
    })
   
   }else{
     this.setState({
      error:'Sorry! Please enter a valid recipeName'
      
    })
   }
 }
    }catch(err){
       console.log(err)
    }
  }
 
// componentDidUpdate(){
//   const recipes= JSON.stringify(this.state.recipes)
//   localStorage.setItem('recipes',recipes)

// }

// componentDidMount(){
//   const item= localStorage.getItem("recipes")
//   const recipes= JSON.parse(item)
//   this.setState({recipes:recipes})
//   this.getRecipe()

// }

  render(){
     return (
    <React.Fragment>
    <div>
      <header className="App-header">
        <h1 className="App-title ">Recipe Search</h1>
        </header>
        <RecipeSearch getRecipe={this.getRecipe}
         recipeName={this.state.recipeName}
         onSearchChange={this.onSearchChange}
         handleSubmit={this.handleSubmit}
         />
          <RecipeList recipes={this.state.recipes}
          error={this.state.error}
      />
    </div>
    </React.Fragment >
  );
  }

}

export default App;
