import React, { Component, Fragment } from "react";
import "./App.css";
import SearchBar from './components/layout/SearchBar'
import Log from './components/logs/Log'
import "materialize-css/dist/css/materialize.css";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal"; 
import M from "materialize-css/dist/js/materialize.min.js";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  componentDidMount(){
    //Initialize Materialize JS
    M.AutoInit();
  }
  render() {
    return (
      <Provider store={store}>
      <Fragment>
        <SearchBar/>
        <div className="container">
          <AddBtn/>
          <AddLogModal/>
          <EditLogModal/>
          <AddTechModal/>
          <TechListModal/>
          <Log/>
        </div>
      </Fragment>
      </Provider>
    );
  }
}

export default App;
