import './Feed.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {sendPost, getPosts} from '../API.js';
import Post from './Post.jsx';

export default class Feed extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      postsArray: [],
    }
    this.update = this.update.bind(this);
    this.autoUpdate = this.autoUpdate.bind(this);
  }

  update() {
    getPosts().then((response) => {
      this.setState({
        postsArray: response.data,
      });
    })
  }

  //именно так
  autoUpdate() {
    getPosts().then((response) => {
      this.setState({
        postsArray: response.data,
      });
    }).then(
      setTimeout(this.autoUpdate, 3000)
    );
  }

  componentDidMount() {
    this.autoUpdate();
    window.addEventListener('hashchange', () => {
      this.update();
    });
  }

  render() {
    var nArr = this.state.postsArray.map(v => <Post 
      className='post' 
      key={`${v._id}`} 
      text={v.text} 
      date={v.date} 
      imageURL={v.imageURL} />
    );

    return (
      <div className='feed'>
        {nArr}
      </div>
    );
  }
}


