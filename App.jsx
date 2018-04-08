import React from 'react';
import Header from './src/components/Header.jsx';
import MyFooter from './src/components/Footer.jsx';
import Homecontent from './view/home/home.jsx';
import Booklist from './src/containers/book-list';
import Testlist from './src/components/test.jsx';
// import TodoItems from './src/components/additem.jsx';

class App extends React.Component {

   render() {
      return (
         <div>
             <Header/>
             <Homecontent />
             <MyFooter />
             <Testlist/>
         </div>
      );
   }
}
export default App;
