console.log("Welcome to Spotify");
//Intialize the variables
let songIndex =0;
let audioElement = new Audio('Song/11.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gift = document.getElementById('gift');
let songitems = Array.from(document.getElementsByClassName('songitem'));
//let songItems = document.getElementById('songItems');

let songs = [
    {songName: "Sultan Tittle song", filePath:"Song/11.mp3", coverPath:"covers/11.jpeg"},
    {songName: "Zindagi kuch toh bata", filePath:"Song/12.mp3", coverPath:"covers/12.jpeg"},
    {songName: "Bhar Do Jholi meri", filePath:"Song/13.mp3", coverPath:"covers/13.jpeg"},
    {songName: "Sultan tittle song", filePath:"Song/14.mp3", coverPath:"covers/14.jpeg"},
    {songName: "Sultan tittle song", filePath:"Song/15.mp3", coverPath:"covers/15.png"},
    {songName: "Sultan tittle song", filePath:"Song/16.mp3", coverPath:"covers/16.jpeg"},
    {songName: "Sultan tittle song", filePath:"Song/17.mp3", coverPath:"covers/17.jpeg"},
]

songitems.forEach((element,i) => {
    console.log(element,i);
   
    
});


//handel play / pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gift.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        gift.style.opacity = 0;
    }
})

//Lister to Events 
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress; 

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");

    })

}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `Song/${songIndex}.mp3`
        audioElement.currentTime =0;
        audioElement.play(); 
        gift.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')


    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=17){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `Song/${songIndex}.mp3`
    audioElement.currentTime =0;
    audioElement.play(); 
    gift.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `Song/${songIndex}.mp3`
    audioElement.currentTime =0;
    audioElement.play(); 
    gift.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
})

