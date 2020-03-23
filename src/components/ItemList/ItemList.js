import React, {Component} from 'react';
import './ItemList.scss';
import Spinner from "../Spinner";

class ItemList extends Component {

  state = {
    itemList: []
  };

  componentDidMount() {

    const {getData} = this.props;

    getData()
      .then(items => {
        this.setState({
          itemList: items
        });
      });
  }

  renderItems(items, amount = 10) {
    return items.slice(0, amount).map(item => {

      const { id } = item;

      const label = this.props.renderItem(item);

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          <span className="item-text">{label}</span>
        </li>
      )
    })
  }

  render() {

    const {itemList} = this.state;

    if (itemList.length === 0) {
      return <Spinner/>;
    }

    return (
      <div className='item-list list-group-flush'>
        <ul className="list-group">
          {this.renderItems(itemList)}
        </ul>
      </div>
    );
  }
}

export default ItemList;