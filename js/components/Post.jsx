import './Post.css';
import React from 'react';

export default class Post extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let date = new Date(this.props.date);
    let formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
                              //Если в посте есть картинка
    if (this.props.imageURL) return (
                                <div className='Post'>
                                  <div className='date'> {formattedDate}  </div>
                                  <p>
                                    <div className='imageWrap'><img src={this.props.imageURL} alt='post image'/></div>
                                    {this.props.text}
                                    <br className='clear' />
                                  </p>
                                </div>
                              );
                              //Если нет картинки
                              return (
                                <div className='Post'>
                                  <div className='date'> {formattedDate}  </div>
                                  <p>
                                    {this.props.text}
                                  </p>
                                </div>
                              );

  }
}
