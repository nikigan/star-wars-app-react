import React, {Component} from 'react';
import './RandomPlanet.scss';
import ApiService from "../../services/apiService";
import Spinner from "../Spinner";

class RandomPlanet extends Component {

  api = new ApiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
    clearInterval(this.interval);
    this.interval = setInterval(this.updatePlanet, 5000);
  };

  onError = (error) => {
    clearInterval(this.interval);
    this.updatePlanet();
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20) + 3;
    this.api.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {

    const {planet: {id, name, population, rotationPeriod, diameter}, loading} = this.state;

    if (loading) return <Spinner/>;

    return (
      <div className="random-planet jumbotron">
        <div className="row">
          <div className="left-block col-5">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 className="planet-image shadow" alt={name}/>
          </div>
          <div className="right-block col-lg-5 col-6">
            <h4 className="planet-name">{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population: </span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period: </span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter: </span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;