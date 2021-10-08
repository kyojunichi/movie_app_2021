import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    // 映畫 데이터 로딩中！
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
