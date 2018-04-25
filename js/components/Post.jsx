import './post.css';
import React from 'react';

export default class Post extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let date = new Date(this.props.date);
    let formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return (
      <div className='Post'>
        <div className='date'> {formattedDate}  </div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
