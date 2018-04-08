import React from 'react';
import ReactDom from 'react-dom';
import Additem from './test.jsx';

class TodoItems extends React.Component {
    createTasks(item) {
      console.log('item ', item)
      return <li key={item.key}>{item.text}</li>
    }
   
    render() {
      var todoEntries = this.props.rahul;
      var listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="theList">
            {listItems}
        </ul>
      );
    }
    
  };
  export default TodoItems;