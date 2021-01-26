import * as UI from './interfaz.js';

class API {
    constructor(a,s){
        this.artist = a;
        this.song = s;
    }
    requestAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
        
        fetch(url).then(response => response.json() )
                  .then(result => {
                    
                    if(result.lyrics){
                        const {lyrics} = result;
                        UI.resultDiv.textContent = lyrics;
                        UI.resultH.textContent = `${this.song} - ${this.artist}`;
                    } else {
                        UI.messagesDiv.textContent = 'The song or the artist are wrong, try again';
                        UI.messagesDiv.classList.add('error');
                        setTimeout(() => {
                            UI.messagesDiv.textContent = '';
                            UI.messagesDiv.classList.remove('error');
                        }, 3000);
                    }
                  
                } )
    }
}

export default API;