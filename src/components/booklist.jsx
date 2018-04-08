import React from 'react';
import ReactDOM from 'react-dom';

class Bookleftlist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            booklistdata : [{bootTitle:'Book1', id:'1',author:'Ashish'},
                            {bootTitle:'Book2', id:'2',author:'Rahul'},
                            {bootTitle:'Book3', id:'3',author:'Manish'},
                            {bootTitle:'Book4', id:'4',author:'Ritesh'},
                            {bootTitle:'Book5', id:'5',author:'Sohan'}],
            selctedBook: null // {bootTitle:'Book1', id:'1',author:'Ashish'}
        }
        //this.getBookData = this.getBookData.bind(this);
        //this.setStateHandler = this.setStateHandler.bind(this);
        //this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        //this.updateState = this.updateState.bind(this);
    }
    getBookData (id)  {
                //console.log('state', this.state.booklistdata);
                //console.log('event working', id)
                for(let i= 0; i < this.state.booklistdata.length; i++){
                    if(this.state.booklistdata[i].id == id){
                        console.log('obj', this.state.booklistdata[i]);
                        this.setState({
                            selctedBook:this.state.booklistdata[i]
                        })
                        return this.state.booklistdata[i];
                    }
                }
            };
    render() {
        return(
            <div>
                <ul>
                    {this.state.booklistdata.map((booklist, i) =>
                     <li key = {i} >  
                        <button  onClick={()=> {this.getBookData(booklist.id)}}>{booklist.bootTitle}</button>
                     </li>)
                      }
                </ul>
                <div>
                    <h4>Selected book </h4>
                    {this.state.selctedBook == null ? 'please select any book ' : <Bookinfo bookdata={this.state.selctedBook}/>}

                </div>
            </div>
        );
    }
}
class Bookinfo extends React.Component{
    render(){
        console.log('props ', this.props.bookdata)
        return(
            <div>
                <ul>
                    <li>Book Title : <span>{this.props.bookdata.bootTitle}</span></li>
                    <li>Author : <span>{this.props.bookdata.author}</span></li>
                    <li>Book Id : <span>{this.props.bookdata.id}</span></li>
                </ul>
            </div>
        )
    }
}
export default Bookleftlist;
