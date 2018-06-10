window.onload = function() {
    onShowMoreButtonClicked();
    openPopupWindowClicked();
    closePopupWindowClicked();
   // validateForm();
}

function onShowMoreButtonClicked(){
    document.getElementById('button_more_movies').addEventListener('click', showMore);

    function showMore(){
        var moviesButton = document.getElementById('button_more_movies');
        var moviesShow = document.getElementById('movies_showmore');

        moviesButton.style.display = 'none';
        moviesShow.style.display = 'flex';
    }
}

function openPopupWindowClicked(){
    document.getElementById('write_me_string').addEventListener('click', openPopupWindow);

    function openPopupWindow(){
        var popup = document.getElementById('popup_window');
        var body = document.body;

        popup.style.display = 'block';
        popup.style.padding = '0 10px';
        body.style.overflowY = 'hidden';
    }
}

function closePopupWindowClicked(){
    document.getElementById('close').addEventListener('click', closePopupWindow);

    function closePopupWindow(){
        var popup = document.getElementById('popup_window');
        var body = document.body;

        popup.style.display = 'none';
        popup.style.padding = '0 0;
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