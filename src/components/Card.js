import React from 'react';
import PropTypes from 'prop-types';
import '../card.css';

class Card extends React.Component {
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
    } = this.props;
    return (
      <section className="container-card">
        <div className="card">
          <h3 id="name-card" data-testid="name-card">
            {cardName}
          </h3>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p id="card-description" data-testid="description-card">
            {cardDescription}
          </p>
          <p className="card-atributo" data-testid="attr1-card">
            Ataque:.........
            <span>{cardAttr1}</span>
          </p>
          <p className="card-atributo" data-testid="attr2-card">
            Defesa:.........
            <span>{cardAttr2}</span>
          </p>
          <p className="card-atributo" data-testid="attr3-card">
            HP:...........
            <span>{cardAttr3}</span>
          </p>
          <p id="raridade" data-testid="rare-card">
            {cardRare}
            {cardTrunfo && <span data-testid="trunfo-card"> Super Trunfo </span>}
          </p>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
