import * as UI from './interfaz.js';
import API from './api.js';

UI.formSearch.addEventListener('submit',searchSong);

function searchSong(e){
    e.preventDefault();

    const artist = document.querySelector('#artist').value;
    const song = document.querySelector('#song').value;

    if(artist === '' || song === ''){
        UI.messagesDiv.textContent = 'All fields are required';
        UI.messagesDiv.classList.add('error');

        setInterval(() => {
            UI.messagesDiv.textContent = '';
            UI.messagesDiv.classList.remove('error');
        }, 3000);

        return;
    }

    const search = new API(artist,song);
    search.requestAPI();
}