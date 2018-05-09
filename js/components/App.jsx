import React from 'react';
import ReactDOM from 'react-dom';

import PostForm from './PostForm.jsx';
import Feed from './Feed.jsx';

export default class App extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
      return (
        <div className='app'>
          <Feed />
          <PostForm />
        </div>
      );

  }
}


