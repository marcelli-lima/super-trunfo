import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';

const initial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = initial;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => {
    console.log('clicou');
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          value={ this.state }
        />
      </div>
    );
  }
}

App.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default App;
