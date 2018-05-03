import './feed.css';

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
  }

  update() {
    axios({
      method: 'get',
      url: 'http://tonight.by:3012/posts',
    }).then((response) => {
      this.setState({
        postsArray: response.data.sort((v1,v2) => v1.date > v2.date),
      });
    }).then( setTimeout(this.update, 3000)); // <- autoupdate
  }
  
  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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


