import React,{Component} from  'react'
import {Paper,TextField} from '@material-ui/core'

   class SearchBar extends React.Component{
      
       state={
           searchTerm:""
       }

        handleSubmit = (event) =>{
           event.preventDefault()
           const {onFormSubmit} = this.props
           const {searchTerm} = this.state
           onFormSubmit(searchTerm)
        }
      
       handleChange = (event) => this.setState({searchTerm:event.target.value})
       render(){
            return(
                <Paper elevation={6} style={{padding:'25px'}}>
                 <form onSubmit={this.handleSubmit}>
                     <TextField fullWidth label = "Search..." onChange={(e) => this.handleChange(e)}></TextField>
                 </form>
                </Paper>
            )
       }
    }

 
   export default SearchBar