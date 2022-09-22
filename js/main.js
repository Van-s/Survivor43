
const players = {
  1 : {
    name: 'Elie Scott',
    alive: true,
    img: './assets/images/elieScott.jpg',
    challenges: ['none'],
    tribeColor: '#ffea42',
    tribe: 'Baka Tribe',
    moves: ['']
  },
  2 : {
    name: 'Jeanine Zheng',
    alive: true,
    img: './assets/images/jeanineZheng.jpg',
    challenges: ['none'],
    tribeColor: '#ffea42',
    tribe: 'Baka Tribe',
    moves: ['']
  },
  3 : {
    name: 'Mike Gabler',
    alive: true,
    img: './assets/images/mikeGabler.jpg',
    challenges: ['none'],
    tribeColor: '#ffea42',
    tribe: 'Baka Tribe',
    moves: ['']
  },
  4 : {
    name: 'Morriah Young',
    alive: true,
    img: './assets/images/morriahYoung.jpg',
    challenges: ['none'],
    tribeColor: '#ffea42',
    tribe: 'Baka Tribe',
    moves: ['']
  },
  5 : {
    name: 'Owen Knight',
    alive: true,
    img: './assets/images/owenKnight.jpg',
    challenges: ['none'],
    tribeColor: '#ffea42',
    tribe: 'Baka Tribe',
    moves: ['']
  },
  6 : {
    name: 'Sami Layadi',
    alive: true,
    img: './assets/images/samiLayadi.jpg',
    challenges: ['none'],
    tribeColor: '#ffea42',
    tribe: 'Baka Tribe',
    moves: ['']
  },
  7 : {
    name: 'Cassidy Clark',
    alive: true,
    img: './assets/images/cassidyClark.jpg',
    challenges: ['none'],
    tribeColor: '#27c0e5',
    tribe: 'Coco Tribe',
    moves: ['']
  },
  8 : {
    name: 'Geo Bustamante',
    alive: true,
    img: './assets/images/geoBustamante.jpg',
    challenges: ['none'],
    tribeColor: '#27c0e5',
    tribe: 'Coco Tribe',
    moves: ['']
  },
  9 : {
    name: 'James Jones',
    alive: true,
    img: './assets/images/jamesJones.jpg',
    challenges: ['none'],
    tribeColor: '#27c0e5',
    tribe: 'Coco Tribe',
    moves: ['']
  },
  10 : {
    name: 'Karla Cruz Godoy',
    alive: true,
    img: './assets/images/karlaCruzGodoy.jpg',
    challenges: ['none'],
    tribeColor: '#27c0e5',
    tribe: 'Coco Tribe',
    moves: ['']
  },
  11 : {
    name: 'Lindsay Carmine',
    alive: true,
    img: './assets/images/lindsayCarmine.jpg',
    challenges: ['none'],
    tribeColor: '#27c0e5',
    tribe: 'Coco Tribe',
    moves: ['']
  },
  12 : {
    name: 'Ryan Medrano',
    alive: true,
    img: './assets/images/ryanMedrano.jpg',
    challenges: ['none'],
    tribeColor: '#27c0e5',
    tribe: 'Coco Tribe',
    moves: ['']
  },
  13 : {
    name: 'Cody Assenmacher',
    alive: true,
    img: './assets/images/codyAssenmacher.jpg',
    challenges: ['none'],
    tribeColor: '#f33d3d',
    tribe: 'Vesi Tribe',
    moves: ['']
  },
  14 : {
    name: 'Dwight Moore',
    alive: true,
    img: './assets/images/dwightMoore.jpg',
    challenges: ['none'],
    tribeColor: '#f33d3d',
    tribe: 'Vesi Tribe',
    moves: ['']
  },
  15 : {
    name: 'Jesse Lopez',
    alive: true,
    img: './assets/images/jesseLopez.jpg',
    challenges: ['none'],
    tribeColor: '#f33d3d',
    tribe: 'Vesi Tribe',
    moves: ['']
  },
  16 : {
    name: 'Justine Brennan',
    alive: true,
    img: './assets/images/justineBrennan.jpg',
    challenges: ['none'],
    tribeColor: '#f33d3d',
    tribe: 'Vesi Tribe',
    moves: ['']
  },
  17 : {
    name: 'Nneka Ejere',
    alive: true,
    img: './assets/images/nnekaEjere.jpg',
    challenges: ['none'],
    tribeColor: '#f33d3d',
    tribe: 'Vesi Tribe',
    moves: ['']
  },
  18 : {
    name: 'Noelle Lambert',
    alive: true,
    img: './assets/images/noelleLambert.jpg',
    challenges: ['none'],
    tribeColor: '#f33d3d',
    tribe: 'Vesi Tribe',
    moves: ['']
  }

}

for(let i = 1; i <= 18; i++){
  if(players[i].alive === true){
    document.getElementById('playerHolder').innerHTML += `<section id='${i}' class="playerCard">
    <section class="inner">
      <section id = "front${i}" class="front">
        <img src=${players[i].img} alt=${players[i].name}>
        <span class="name">${players[i].name}</span>
        <span class="tribe">${players[i].tribe}</span>
      </section>
      <section id = "back${i}" class="back">
        </section>
      </section>
    </section>`
    document.getElementById(`${i}`).style.backgroundColor = `${players[i].tribeColor}`
    for(let j = 0; j < players[i].challenges.length; j++){
      document.getElementById(`back${i}`).innerHTML += `<span class="challenges">${players[i].challenges[j]}</span>`
    }
    for(let k = 0; k < players[i].moves.length; k++){
      document.getElementById(`back${i}`).innerHTML += `<span class="moves">${players[i].moves[k]}</span>`
    }

  } else {
      document.getElementById('playersOutHolder').innerHTML += `<section id='${i}' class="playerCard">
        <section class="inner">
          <section id = "front${i}" class="front">
            <img src=${players[i].img} alt=${players[i].name}>
            <span class="name">${players[i].name}</span>
          </section>
          <section id = "back${i}" class="back">
          </section>
        </section>
      </section>`
      document.getElementById(`front${i}`).style.boxShadow = '5px 5px 5px gray'
      for(let j = 0; j < players[i].challenges.length; j++){
        document.getElementById(`back${i}`).innerHTML += `<span class="challenges">${players[i].challenges[j]}</span>`
      }
      for(let k = 0; k < players[i].moves.length; k++){
        document.getElementById(`back${i}`).innerHTML += `<span class="moves">${players[i].moves[k]}</span>`
      }
  }
}

