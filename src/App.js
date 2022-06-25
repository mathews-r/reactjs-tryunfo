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
    };
  }

  verifyButton = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    if (cardName && cardDescription && cardImage && cardRare) {
      this.setState({ isSaveButtonDisabled: false });
    }
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
      this.setState({ [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked : event.target.value });

      this.setState(() => ({ isSaveButtonDisabled: event.target.value }),
        this.verifyButton);
    };

    const onSaveButtonClick = () => {
      console.log('funcionou');
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
