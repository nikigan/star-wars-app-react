import React, {Component} from 'react';
import './PersonDetails.scss';
import ApiService from "../../services/apiService";
import Spinner from "../Spinner";

class PersonDetails extends Component {

  api = new ApiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
      this.setState({
        loading: true
      });
    }
  };

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }
    this.api
      .getPerson(personId)
      .then(person => {
        this.setState({person, loading: false});
      });
  }

  render() {
    if (this.state.loading) {
      return <Spinner/>;
    }

    const {id, name, gender, eyeColor, birthYear} = this.state.person;

    return (
      <div className="person-details">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
             alt=""
             className="person-image shadow"/>
        <div className="info-text">
          <h4 className="person-name">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">
              <span className="term">Birth year: </span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Gender: </span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color: </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonDetails;