import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cards: [],
    };
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
    } = this.state;

    const onInputChange = (event) => {
      this.setState(({ [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value }),
      this.verifyButton);
    };

    const onSaveButtonClick = (event) => {
      event.preventDefault();
      const { cards } = this.state;
      this.setState((prevState) => ({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: '',
        cardTrunfo: false,
        cards: [...prevState.cards, cards] }));
    };

    return (
      <div>
        <h1>Tryunfo</h1>
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
      </div>
    );
  }
}

export default App;
