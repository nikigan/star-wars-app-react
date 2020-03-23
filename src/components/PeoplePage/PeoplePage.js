import React, {Component} from 'react';
import './PeoplePage.scss';
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ApiService from "../../services/apiService";
import Row from "../Row";

class PeoplePage extends Component {

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

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.api.getAllPeople}
        renderItem={person => `${person.name} (${person.gender})`}/>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}

export default PeoplePage;