import axios from 'axios';

// let sendPost = function(){
//     console.log('trying to send');
//     axios.post('http://tonight.by:3012/posts', {
//       text: 'axios test'
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

  let sendPost = function(_text/*,file*/){
    console.log('trying to send');

    axios({
      method: 'post',
      url: 'http://tonight.by:3012/posts',
      //headers: { 'content-type': 'multipart/form-data' },
      data: {
        text: _text,
        date: new Date(),
        //file: _file,
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    let getPosts = axios({
      method: 'get',
      url: 'http://tonight.by:3012/posts',
    })
    // .then(function (response) {
    //   console.log(response.data);
    //   decodedArray = response.data;
    //   console.log(decodedArray);
    //   return decodedArray;
    // })
    .catch(function (error) {
      console.log(error);
    });

  export {sendPost, getPosts};
