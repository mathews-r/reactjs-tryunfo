import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    const onInputChange = () => {
      console.log('funcionou');
    };

    const onSaveButtonClick = () => {
      console.log('funcionou');
    };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          onInputChange={ onInputChange }
          isSaveButtonDisabled={ false }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName=""
          cardImage=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardRare=""
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
