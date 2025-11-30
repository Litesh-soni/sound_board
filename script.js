
const sounds = [
  "applause",
  "bad-joke-drum",
  "boo",
  "cartoon-hearts",
  "cartoon-spin",
  "children-shouting",
  "flute",
  "funny-boing",
  "funny-spring-jump",
  "gasp",
  "insane-scream",
  "la-charte",
  "nada-dering",
  "pipe",
  "pop-wow",
  "tada",
  "victory",
  "wrong"
];

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    
    
    btn.innerText = sound

    btn.addEventListener("click",() =>{
        stopSongs()

    document.getElementById(sound).play()

    })

    document.getElementById('buttons').appendChild(btn)    

})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}