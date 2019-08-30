import React,{Component} from 'react';
import {Link } from 'react-router-dom';

const API_KEY ='be6356dd27ce8599565c5def66c16a02';

class RecipeDetails extends Component{
    state={
        recipe:[]
    }

        componentDidMount = async ()=>{
        
        const title= this.props.location.state.title
        const resp = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        const data = await resp.json()
        this.setState({
            recipe:data.recipes[0]

        })
      
      }
   render(){
     const{ image_url,publisher,publisher_url,title}= this.state.recipe;
     
    return(
     <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
          <h3 className='text-info'>Recipe Details</h3>
           <img className ="d-block w-100"src={image_url} alt={title} />

           <h4 className="text_uppercase text-danger my-3">Title:{title}</h4>
           <h5 className="text-warning">Publisher:{publisher}</h5>
            <p>Website:<span>
            <a  href={publisher_url} 
            className=" mx-4 my-2"
            target='_blank' rel="noopener noreferrer" >
            {publisher_url}
            </a></span></p>
            <button 
             type="button" 
              className="btn btn-outline-danger text-capitalize">
              <Link style={{textDecoration:'none'}}to={{
                      pathname:`/`
                }}>go home</Link>
        </button>
       </div>
      </div>
     </div>
    </React.Fragment>

        )
   }
	
}

export default RecipeDetails;