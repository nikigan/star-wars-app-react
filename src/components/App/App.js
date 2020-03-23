import React, {Component} from 'react';
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import './App.scss';
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ApiService from "../../services/apiService";

class App extends Component {

  api = new ApiService();

  state = {
    selectedPerson: 1
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson: selectedPerson
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header/>
        <RandomPlanet/>
        <div className="container">
          <PeoplePage/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;