import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Trash from './images/trash.png';
import Filter from './components/Filter';
import FilterRare from './components/FilterRare';
import FilterSuperTrunfo from './components/FilterSuperTrunfo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
      showTrunfo: false,
    };
  }

  verifyTrunfo = () => {
    const { cards } = this.state;
    this.setState({ hasTrunfo: cards.some((card) => card.cardTrunfo === true) });
  }

  verifyButton = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxSum = 210;
    const maxValue = 90;

    const emptyInputs = cardName && cardDescription && cardImage && cardRare;
    const valueAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxValue;
    const valueAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxValue;
    const valueAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxValue;
    const sumAttrs = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum;

    this.setState({ isSaveButtonDisabled:
      !(emptyInputs && valueAttr1 && valueAttr2 && valueAttr3 && sumAttrs) });
  };

  deleteCard = (tag) => {
    const { cards } = this.state;
    const newCards = cards.filter((card) => card.cardName !== tag);
    this.setState(({ cards: newCards }), this.verifyTrunfo);
  };

  render() {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      isSaveButtonDisabled,
      cardTrunfo,
      hasTrunfo,
      cards,
      showTrunfo,
    } = this.state;

    const onInputChange = (event) => {
      this.setState(({ [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value }),
      this.verifyButton);
    };

    const onSaveButtonClick = (event) => {
      event.preventDefault();
      const obj = this.state;
      this.setState((prevState) => ({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: '',
        cardTrunfo: false,
        cards: [...prevState.cards, obj] }), this.verifyTrunfo);
    };

    const filterName = ({ target }) => {
      const { value } = target;
      this.setState({ cards: cards.filter((card) => card.cardName.includes(value)) });
    };

    const filterRare = ({ target }) => {
      const { value } = target;
      return value === 'todas' ? this.setState({ cards })
        : this.setState({ cards: cards.filter((card) => card.cardRare === value) });
    };

    const filterTrunfo = ({ target }) => {
      const { checked } = target;
      this.setState({ showTrunfo: checked });
      if (checked) {
        this.setState({ cards: cards.filter((card) => card.cardTrunfo === true) });
      }
    };

    return (
      <>
        <Header />
        <section className="div-form">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <section className="deck-card">

            <header className="header">
              <h1>TODAS AS CARTAS</h1>
            </header>
            <div className="filter">
              <Filter func={ filterName } blockFilter={ showTrunfo } />
              <FilterRare func={ filterRare } blockFilter={ showTrunfo } />
              <FilterSuperTrunfo func={ filterTrunfo } />
            </div>
            <div className="deck-list">

              {cards.map((card) => (
                <div key={ card.cardName }>
                  <Card
                    key={ card.cardName }
                    cardName={ card.cardName }
                    cardImage={ card.cardImage }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />

                  <div className="div-btn">
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => this.deleteCard(card.cardName) }
                    >
                      <img src={ Trash } alt="Remover" className="btn-remove" />
                    </button>
                  </div>

                </div>
              ))}

            </div>

          </section>
          <Footer />
        </section>
      </>
    );
  }
}

export default App;
