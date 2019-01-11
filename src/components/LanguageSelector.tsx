import * as React from 'react';

interface Props {
  onLanguageChange: (language: string) => void;
}

class LanguageSelector extends React.Component<Props> {
  render() {
    return (
      <div>
        Select a language:
        <i
          className='flag us'
          onClick={() => this.props.onLanguageChange('english')}
        />
        <i
          className='flag nl'
          onClick={() => this.props.onLanguageChange('dutch')}
        />
      </div>
    );
  }
}

export default LanguageSelector ;