const COLLECTION=document.querySelectorAll('.piano-key');
const piano=document.querySelector('.piano');


const startSound = (event) => {
    let target;
    let ourDataKey= event.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${ourDataKey}"]`);
    audio.currentTime = 0;
    audio.play();
    event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
}
const stopSound = (event) => {
    event.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
}
const startCorrespondOver = (event) => {
    let target;
     if(event.target.classList.contains('piano-key')){
       
    let ourDataKey= event.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${ourDataKey}"]`);
    audio.currentTime = 0;
    audio.play();
    event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
    COLLECTION.forEach((el)=>{
        el.addEventListener('mouseover', startSound);
        el.addEventListener('mouseout', stopSound);
    });
    }
    
 }

const stopCorrespondOver = () => {
    COLLECTION.forEach((el)=>{
        el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
        el.removeEventListener('mouseover', startSound);
        el.removeEventListener('mouseout', stopSound);
    });
}
piano.addEventListener('mousedown', startCorrespondOver);
piano.addEventListener('mouseup', stopCorrespondOver);

window.addEventListener('keydown', function(event){
    const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key=document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);
    console.log(key)
     key.classList.add('piano-key-active');
     if(!audio ) return;
    console.log(key);
   audio.currentTime=0;
   audio.play();})


window.addEventListener('keyup', function(event){
    const key=document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);    
    key.classList.remove('piano-key-active');    
})

const btnNote=document.querySelector('.btn-notes');
const btnLetter=document.querySelector('.btn-letters');

btnLetter.addEventListener('click',()=>{
    btnLetter.classList.add('btn-active');
    btnNote.classList.remove('btn-active');
    COLLECTION.forEach((el)=>{
        el.classList.add('piano-key-letter');
    })

})
btnNote.addEventListener('click',()=>{
    btnNote.classList.add('btn-active');
    btnLetter.classList.remove('btn-active');
    COLLECTION.forEach((el)=>{
        el.classList.remove('piano-key-letter')
    })
})


const btnFullScreen=document.querySelector('.openfullscreen');
console.log(btnFullScreen);
function changeScreen(){
    if(!document.fullscreenElement) document.documentElement.requestFullscreen();
    else if(document.fullscreenEnabled) document.exitFullscreen();
}
btnFullScreen.addEventListener('click',changeScreen);
