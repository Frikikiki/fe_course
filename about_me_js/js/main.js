window.onload = function() {
  validateForm();
  changeFocus('email');
  changeFocus('user_name');
  clickToShowMore();
  clickToOpenPopupWindow();
  clickToClosePopupWindow();
}

function validateForm(){
  document.getElementById('submit').addEventListener('click', requiredField)

  function requiredField(event) {
    var name = document.getElementById('user_name');
    var email = document.getElementById('email');
    var blank = '';

  event.preventDefault();
  if(name.value === blank) {
    name.style.borderColor = '#ee0707';
    }

  if(email.value === blank) {
    email.style.borderColor = '#ee0707';
    }
  }
}

function changeFocus(field_name){
  document.getElementById(field_name).addEventListener('focus', changeFocusNow)

  function changeFocusNow() {
    this.style.borderColor = null;
  }
}

function clickToShowMore(){
  document.getElementById('button_more_movies').addEventListener('click', showMore);

  function showMore(){
    var moviesButton = document.getElementById('button_more_movies');
    var otherMovies = document.getElementById('movies_showmore');

    moviesButton.style.display = 'none';
    otherMovies.style.opacity = '1';
    otherMovies.style.height = 'auto';
    otherMovies.style.transition = 'opacity 2s';
  }
}

function clickToOpenPopupWindow(){
  document.getElementById('write_me_string').addEventListener('click', openPopupWindow);

  function openPopupWindow(){
    var popup = document.getElementById('popup_window');
    var body = document.body;

    popup.style.display = 'block';
    body.style.overflowY = 'hidden';
  }
}

function clickToClosePopupWindow(){
  document.getElementById('close').addEventListener('click', closePopupWindow);

  function closePopupWindow(){
    var popup = document.getElementById('popup_window');
    var body = document.body;

    popup.style.display = 'none';
    body.style.overflowY = 'auto';
  }

  window.onclick = function(event){
    var popup = document.getElementById('popup_window');
    var body = document.body;

    if (event.target == popup){
      popup.style.display = 'none';
      body.style.overflowY = 'auto';
    }
  }
}