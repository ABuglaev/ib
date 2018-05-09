import axios from 'axios';

  let sendPost = function(_formData){
    console.log('trying to send...');

    axios({
      method: 'post',
      url: `http://tonight.by:3012/${location.hash.substring(1)}`,
      headers: { 'content-type': 'multipart/form-data' },
      data: _formData,
    })
    .then(function (response) {
      console.log('Ok');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    let getPosts = axios({
      method: 'get',
      url: `http://tonight.by:3012/${location.hash.substring(1)}`,
    })
    .catch(function (error) {
      console.log(error);
    });

  export {sendPost, getPosts};
