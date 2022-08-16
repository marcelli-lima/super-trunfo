import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Card from './components/Card';

const cleanState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

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
  isSaveButtonDisabled: true,
  CARDS: [],
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = initial;
  }

  validateTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateInputs);
  }

  onSaveButtonClick = () => {
    const newCard = { ...this.state };
    delete newCard.CARDS;
    this.validateTrunfo();
    this.setState(({ CARDS }) => ({ CARDS: [...CARDS, newCard] }));
    this.setState(cleanState);
  }

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const max = 90;
    const sum = 210;
    if (
      cardName
      && cardDescription
      && cardImage
      && cardAttr1
      && cardAttr2
      && cardAttr3
      && cardRare
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= max)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= max)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= max)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sum
    ) return this.setState({ isSaveButtonDisabled: false });
    this.setState({ isSaveButtonDisabled: true });
  }

  enableSaveBtn() {
    if (this.validatesTextInput() && this.validatesAttrInput()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      CARDS,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          {
            CARDS.map((card) => (
              <div key={ card.cardName }>
                <Card { ...card } />
              </div>
            ))
          }
        </div>
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
