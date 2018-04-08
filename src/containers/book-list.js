import React from 'react';
//import { connect } from 'react-redux';

class Booklist extends React.Component{
    renderList (){
        // return this.props.books.map((book)=>{
        //     return(
        //         <li key ={book.title} ClassName="test">{book.title}</li>
        //     );
        // });
    };
   
    render() {
        return(
            <ul className="listgroup">    
                {this.renderList()}
            </ul>
        );  
    }
}

function mapStateToProps(state) {
    return{
        books:state.books
    }
}
export default (Booklist);
