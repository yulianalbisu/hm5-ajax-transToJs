
function submitProfile(evt) {
  evt.preventDefault();

  const formData = {
    name: $('#name-field').val(), //id in POST method <label>Name 
    age: $('#age-field').val(), //id in Age
    occupation: $('#occupation-field').val() //check the built in functions in Js.
  };

  $.post('/profile', formData, (response) => { //in the route /profile in .py go get all the info
    $('#profile').append(` //when i went to browser, i ask jQuery where's my request form and this is the address in html 
      <li>${response.fullname} the ${response.occupation} is ${response.age}</li> //response.fullname ==> viene de request.form.get the name in the form 
    `); //same with the rest, occupation, age, define in profile.py in route /profile
  });
}

$("#profile-form").on('submit', submitProfile);
