import React from 'react';
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
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo="false"
          onInputChange={ onInputChange }
          isSaveButtonDisabled="false"
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
