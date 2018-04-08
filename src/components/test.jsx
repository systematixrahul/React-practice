import React from 'react';
import ReactDom from 'react-dom';
import TodoItems from './additem.jsx';
class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  };

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      console.log('new item ', newItem);
        
      this.setState({items: this.state.items.concat(newItem) });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }



  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} 
                  placeholder="enter task">
          </input>
          <button type="submit">add</button>
        </form>
        </div>
        <TodoItems rahul={this.state.items} />
      </div>
    );
  }
}
 
export default TodoList;

// class Forceupdate extends React.Component{
//     constructor(){
//         super();
//         this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//     }

// }

// class Setnumber extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//   };
//   setNewNumber() {
//       this.setState({data: this.state.data + 1})
//   }
//   render() {
//       return (
//         <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>

//         </div>
//       );
      
//   }
// }

//   class Content extends React.Component {
//     componentWillMount() {
//        console.log('Component WILL MOUNT!')
//     }
//     componentDidMount() {
//        console.log('Component DID MOUNT!')
//     }
//     componentWillReceiveProps(newProps) {    
//        console.log('Component WILL RECIEVE PROPS!')
//     }
//     shouldComponentUpdate(newProps, newState) {
//        return true;
//     }
//     componentWillUpdate(nextProps, nextState) {
//        console.log('Component WILL UPDATE!');
//     }
//     componentDidUpdate(prevProps, prevState) {
//        console.log('Component DID UPDATE!')
//     }
//     componentWillUnmount() {
//        console.log('Component WILL UNMOUNT!')
//     }
//     render() {
//        return (
//           <div>
//              <h3>{this.props.myNumber}</h3>
//           </div>
//        );
//     }
//  }
 
  
  //export default Setnumber;

  // class NameForm extends React.Component {
  //   constructor(props){
  //     super(props)
  //     this.state = {value:""};
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }
    
  //   handleChange(event){
  //     this.setState({
  //       value:event.target.value
  //     });
  //   }
  //   handleSubmit(event){
  //     console.log(this.state.value);
  //     event.preventDefault();
  //   }
  //   render(){
  //     return(
  //       <form onSubmit={this.handleSubmit}>
  //           <label>
  //               Name:<input type="text" value={this.state.value}/>
  //           </label>
  //           <input type="submit" value="submit"/>
  //       </form>
  //     );
  //   }
  // }
