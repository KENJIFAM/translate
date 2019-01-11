import * as React from 'react';
import UserCreate from './UserCreate';

interface State {
  language: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    language: 'english'
  };

  onLanguageChange = (language: string) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i className='flag us' onClick={() => this.onLanguageChange('english')} />
          <i className='flag nl' onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;