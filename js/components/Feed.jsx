import './feed.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {gendPost, getPosts} from '../API.js';
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
        postsArray: response.data,//.sort( (v1,v2) => v1.date > v2.date ),
      });
    }) 
  }

  //именно так
  autoUpdate() {
    getPosts().then((response) => {
      this.setState({
        postsArray: response.data,//.sort( (v1,v2) => v1.date > v2.date ),
      });
    }).then(
      setTimeout(this.autoUpdate, 3000)
    );
  }

  componentDidMount() {
    this.autoUpdate();
    window.addEventListener('hashchange', () => {
      this.update();
      this.setState({postsArray: []});
      this.forceUpdate();
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


