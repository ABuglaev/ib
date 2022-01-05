import axios from 'axios';
let serverEndpoint = 'tonight.by'; //3.64.28.37
  let sendPost = function(_formData){
    console.log('trying to send...');
	  for (var value of _formData.values()) {
   console.log(value);
}
    //по уму было бы лучше URL передать как аргумент, но оставлю пока так.
    //а можно было бы прилепить Redux, и завести переменную что-то типа activeThread
    //и URL составить исходя из этой переменной.
    axios({
      method: 'post',
      url: `http://${serverEndpoint}:3012/${location.hash.substring(1)}`,
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

    let getPosts = () => axios({
      method: 'get',
      url: `http://${serverEndpoint}:3012/${location.hash.substring(1)}`,
    })
    .catch(function (error) {
      console.log(error);
    });

  export {sendPost, getPosts};
