export default class ApiService {

  _baseURL = "https://swapi.co/api/";

  async getResource (url) {
    const res = await fetch(`${this._baseURL}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._baseURL}${url}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`people/`);
    return res.results.map(this._parsePerson);
  };

  getPerson = async id => {
    const person = await this.getResource(`people/${id}/`);
    return this._parsePerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`planets/`);
    return res.results.map(this._parsePlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`planets/${id}/`);
    return this._parsePlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`starships/`);
    return res.result.map(this._parseStarship);
  };

  getStarship = async id => this._parseStarship(await this.getResource(`starships/${id}/`));

  _extractId(item) {
    const idRegexp = /\/([0-9]*)\/$/;
    return item.url.match(idRegexp)[1];
  }

  _parsePlanet = (planet) => {
    const {diameter, name, population, rotation_period} = planet;

    return {
      id: this._extractId(planet),
      name: name,
      population: population,
      rotationPeriod: rotation_period,
      diameter: diameter
    }
  };

  _parsePerson = (person) => {
    const {name, gender, eye_color, birth_year} = person;

    return {
      id: this._extractId(person),
      name: name,
      birthYear: birth_year,
      gender: gender,
      eyeColor: eye_color
    }
  };

  _parseStarship = (starship) => {
    const {name, model, manufacturer} = starship;

    return {
      id: this._extractId(starship),
      name: name,
      model: model,
      manufacturer: manufacturer
    }
  }
}
