import React from 'react';
import PropTypes from 'prop-types';
import '../form.css';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    return (
      <>
        <h1>Adicionar nova carta</h1>
        <form className="form-container">
          <div>
            <label htmlFor="name">
              Nome:
              <input
                onChange={ onInputChange }
                value={ cardName }
                type="text"
                name="cardName"
                data-testid="name-input"
                id="name-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cardDescription">
              Descrição da carta:
              <textarea
                name="cardDescription"
                onChange={ onInputChange }
                value={ cardDescription }
                type="text"
                data-testid="description-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cardAttr1">
              Ataque:
              <input
                className="input-atributo"
                name="cardAttr1"
                onChange={ onInputChange }
                value={ cardAttr1 }
                type="number"
                data-testid="attr1-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cardAttr2">
              Defesa:
              <input
                className="input-atributo"
                name="cardAttr2"
                onChange={ onInputChange }
                value={ cardAttr2 }
                type="number"
                data-testid="attr2-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cardAttr3">
              HP:
              <input
                className="input-atributo"
                name="cardAttr3"
                onChange={ onInputChange }
                value={ cardAttr3 }
                type="number"
                data-testid="attr3-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cardImage">
              Url da Imagem:
              <input
                id="input-image"
                name="cardImage"
                onChange={ onInputChange }
                value={ cardImage }
                type="text"
                data-testid="image-input"
              />
            </label>
          </div>
          <label htmlFor="cardRare">
            Raridade :
            <select
              id="raridade-input"
              name="cardRare"
              onChange={ onInputChange }
              value={ cardRare }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <div>
            {hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
                <label htmlFor="cardTrunfo">
                  <input
                    id="cardTrunfo"
                    name="cardTrunfo"
                    onChange={ onInputChange }
                    checked={ cardTrunfo }
                    type="checkbox"
                    data-testid="trunfo-input"
                  />
                  Super Trunfo
                </label>
              )}
          </div>
          <button
            id="button-save"
            value={ isSaveButtonDisabled }
            disabled={ isSaveButtonDisabled }
            name="isSaveButtonDisabled"
            onClick={ onSaveButtonClick }
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
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

export default Form;
