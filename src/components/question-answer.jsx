import React from 'react';
import ReactDOM from 'react-dom';
class Questionanser extends React.Component{
    constructor(){
        super()
        let radioes = document.getElementsByTagName("input");
        this.state= {
            value:''
        }
        this.handleChange = this.handleChange.bind(this);
   
    }
    handleChange(event){
        //console.log('value ', event.target.value)
        this.setState({value: event.target.value})
    };
    render(){
        return(
            <div>
                <div>Which are fruit?</div>
                <ul>
                    <li><label><input onChange={this.handleChange} type="radio" name="input" value="yes"/>tomatoes</label></li>
                    <li><label><input onChange={this.handleChange} type="radio" name="input"value="no"/>tomatoes</label></li>
                    <li><label><input onChange={this.handleChange} type="radio" name="input"value="no" />tomatoes</label></li>
                    <li><label><input onChange={this.handleChange} type="radio" name="input"value="no" />tomatoes</label></li>
                </ul>
                 <p>{this.state.value}</p>
            </div>
        );
    }
    
    
}
export default Questionanser;