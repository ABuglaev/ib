import './PostForm.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {sendPost, getPosts} from '../API.js';

export default class PostForm extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    let onSelectFileButton = () =>{
      document.getElementById('fileInput').click();
    }

    let onFileSelect = () =>{
      document.getElementById('fileSelectButton').innerHTML = document.getElementById('fileInput').files[0].name;
    }

    let onSendPostClick = () =>{
      let formData = new FormData();
        formData.append('text',  document.getElementById('textInput').value);
        formData.append('thread', location.hash);
        if (document.getElementById('fileInput').files[0]) formData.append('image', document.getElementById('fileInput').files[0], document.getElementById('fileInput').files[0].name );

      sendPost(formData);
      document.getElementById('textInput').value = '';
      document.getElementById('fileInput').value = null;
      document.getElementById('fileSelectButton').innerHTML = 'Select image';
    }

    return (
      <form className='PostForm' name='postForm'>
        <textarea class='textInput' id='textInput' name='text' placeholder='type your post here'> </textarea>
        <br />
        <input type='file' name='image' id='fileInput' onChange={onFileSelect}/>
        <button className='button selectButton' type='button' onClick={onSelectFileButton} id='fileSelectButton'>Select image</button>
        <button className='button sendButton'   type='button' onClick={onSendPostClick}    id='sendPostButton'  >Post        </button>
      </form>
    );

  }
}


