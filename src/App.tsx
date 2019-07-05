import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Actions } from '@sensenet/redux';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';

export interface ICustomProps {
  value1?: string;
  userName?: string;
}

export interface ICustomState {
  value3?: boolean;
}

class App extends React.Component<ICustomProps, ICustomState> {

  constructor(props: ICustomProps) {
    super(props);
    // this.state = {
    //   value3: true,
    // };
  }

  public render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        {this.props.userName}
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export const mapStateToProps = (state: any, match: any) => {
  return {
      loginState:     state.sensenet.session.loginState,
      userName :      state.sensenet.session.user.userName,
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => ({
      login:          (username: string, password: string) => dispatch(Actions.userLogin(username, password)),
  })
)(App as any);
