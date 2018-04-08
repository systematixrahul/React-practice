import React from "react";
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
//import ApplicationProps from '../../src/components/Defaultproptype.jsx';
import Bookleftlist from '../../src/components/booklist.jsx';
import Questionanser from '../../src/components/question-answer.jsx';
class Homecontent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Shivansh',
            lastName: 'Yadav',
        }
        this.findDomNode = this.findDomNodeHandler.bind(this);
    }

    findDomNodeHandler() {
        let myDiv = document.getElementById('testone');
        ReactDOM.findDOMNode(testone).style.color = 'green';
     }
  
    render() {
        let x = "Shivansh";
        let y = "Shaswat";
        let z = 1;

        let myStyle = {
            color : '#ff0000',
            fontSize:25
        }
        
        return (
            <div className="content container">              
                <div className="book-list col-md-12">
                    <Bookleftlist/>
                </div>
                <div>
                    <Questionanser/>
                </div>
                    
            </div>
        );
    }

}
export default Homecontent;