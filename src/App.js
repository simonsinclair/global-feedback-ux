import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import streambg from './stream.png';
import './App.css';

import Notification from './Notification';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queuePosition: 0,
      notificationsQueue: [
        <Notification key="qwer" text="Error adding to Watch Later" isError />,
        <Notification key="rwew" text="Added to Watch Later" />,
        <Notification key="wrqw" text="Item liked" />,
      ],
      notifications: []
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    // Do NOT trigger unless the space bar has been pressed OR if we're at the end of the queue.
    if (e.code !== "Space" || this.state.queuePosition === this.state.notificationsQueue.length) {
      console.log('Notification NOT triggered.');
      return;
    };

    this.setState((state) => ({
      notifications: [...state.notifications, state.notificationsQueue[state.queuePosition]],
      queuePosition: this.state.queuePosition + 1,
    }), () => {
      setTimeout(() => {
        console.log('Removing...');
        this.setState((state) => ({
          notifications: [...state.notifications.slice(1)]
        }))
      }, 5000)
    });
  }

  componentDidMount(){
    document.addEventListener("keyup", this.handleKeyUp, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.handleKeyUp, false);
  }

  render() {
    return (
      <div className="app">
        <CSSTransitionGroup
          component="ul"
          className="notifications"
          transitionName="notifications"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={2000}>
            {this.state.notifications}
        </CSSTransitionGroup>
        <img src={streambg} className="app__streambg" alt="" />
      </div>
    );
  }
}

export default App;
