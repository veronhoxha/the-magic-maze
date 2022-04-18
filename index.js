// moving the red object up,down,left,right

// document.addEventListener('keydown', move);
// function move(event) {
//     var k = event.keyCode,
//         chrId = document.getElementById('test'),
//         chr = {
//             updown: function () {
//                 var y = parseInt(getComputedStyle(chrId).top);
//                 if (k == 38) { // up
//                     --y;
//                 } else if (k == 40) { // down
//                     ++y;
//                 }
                
//                 return y;
//             },
            
//             leftright: function () {
//                 var x = parseInt(getComputedStyle(chrId).left);
//                 if (k == 37) { // left side
//                     --x;
//                 } else if (k == 39) { // right side
//                     ++x;
//                 }
                
//                 return x;
//             }
//         };

//     chrId.style.top = (chr.updown()) + "px";
//     chrId.style.left = (chr.leftright()) + "px";
// }

let randomNumbers = new Map();
let maxNumbers = 10;
for (let a = 0; a <= maxNumbers; a++) {
  randomNumbers.set(a, 0);
}

function RandomImage() {
  let failed = false;
  let random;
  do {
    failed = false;
    random = Math.ceil(Math.random() * maxNumbers);
    switch (random) {
      case 1:
        if (randomNumbers.get(1) + randomNumbers.get(10) == 13) {
          failed = true;
        }
        break;
        case 10:
            if (randomNumbers.get(1) + randomNumbers.get(10) == 13) {
              failed = true;
            }
            break;
        case 2:
            if (randomNumbers.get(2) + randomNumbers.get(3) + randomNumbers.get(4) + randomNumbers.get(5)  == 6) {
              failed = true;
            }
            break;
        case 2:
           if (randomNumbers.get(2) + randomNumbers.get(3) + randomNumbers.get(4) + randomNumbers.get(5)  == 6) {
             failed = true;
            }
            break;   
        case 3:
           if (randomNumbers.get(2) + randomNumbers.get(3) + randomNumbers.get(4) + randomNumbers.get(5)  == 6) {
             failed = true;
            }
            break;  
        case 4:
            if (randomNumbers.get(2) + randomNumbers.get(3) + randomNumbers.get(4) + randomNumbers.get(5)  == 6) {
             failed = true;
            }
            break;   
        case 5:
             if (randomNumbers.get(2) + randomNumbers.get(3) + randomNumbers.get(4) + randomNumbers.get(5)  == 6) {
                failed = true;
             }
             break;   
        case 6:
              if (randomNumbers.get(6) + randomNumbers.get(7) + randomNumbers.get(8) + randomNumbers.get(9)  == 15) {
                 failed = true;
              }
              break;   
        case 7:
              if (randomNumbers.get(6) + randomNumbers.get(7) + randomNumbers.get(8) + randomNumbers.get(9)  == 15) {
                  failed = true;
              }
              break;  
        case 8:
              if (randomNumbers.get(6) + randomNumbers.get(7) + randomNumbers.get(8) + randomNumbers.get(9)  == 15) {
                  failed = true;
              }
              break;   
        case 9:
              if (randomNumbers.get(6) + randomNumbers.get(7) + randomNumbers.get(8) + randomNumbers.get(9)  == 15) {
                    failed = true;
              }
              break;  
    }
  }
  while (failed);
  randomNumbers.set(random, randomNumbers.get(random) + 1);
  return "img/" + random.toString() + ".png";
}

document.getElementById("myImg").src = RandomImage();
document.getElementById("myImg1").src = RandomImage();
document.getElementById("myImg2").src = RandomImage();
document.getElementById("myImg3").src = RandomImage();
document.getElementById("myImg4").src = RandomImage();
document.getElementById("myImg5").src = RandomImage();
document.getElementById("myImg6").src = RandomImage();
document.getElementById("myImg7").src = RandomImage();
document.getElementById("myImg8").src = RandomImage();
document.getElementById("myImg9").src = RandomImage();
document.getElementById("myImg10").src = RandomImage();
document.getElementById("myImg11").src = RandomImage();
document.getElementById("myImg12").src = RandomImage();
document.getElementById("myImg13").src = RandomImage();
document.getElementById("myImg14").src = RandomImage();
document.getElementById("myImg15").src = RandomImage();
document.getElementById("myImg16").src = RandomImage();
document.getElementById("myImg17").src = RandomImage();
document.getElementById("myImg18").src = RandomImage();
document.getElementById("myImg19").src = RandomImage();
document.getElementById("myImg20").src = RandomImage();
document.getElementById("myImg21").src = RandomImage();
document.getElementById("myImg22").src = RandomImage();
document.getElementById("myImg23").src = RandomImage();
document.getElementById("myImg24").src = RandomImage();
document.getElementById("myImg25").src = RandomImage();
document.getElementById("myImg26").src = RandomImage();
document.getElementById("myImg27").src = RandomImage();
document.getElementById("myImg28").src = RandomImage();
document.getElementById("myImg29").src = RandomImage();
document.getElementById("myImg30").src = RandomImage();
document.getElementById("myImg31").src = RandomImage();
document.getElementById("myImg32").src = RandomImage();
document.getElementById("myImg33").src = RandomImage();


const start = document.querySelector(".start");
const button = document.querySelector('#button2')
button.addEventListener("click", (e) =>{
  setTimeout(() => {
    start.classList.add("screen");
  },200)
  })


const grid = document.querySelector ("#grid-container")
const up = document.querySelector ("#up")
const up1 = document.querySelector ("#up1")
const up2 = document.querySelector ("#up2")
const down = document.querySelector ("#down")
const down1 = document.querySelector ("#down1")
const down2 = document.querySelector ("#down2")
const right = document.querySelector ("#right")
const right1 = document.querySelector ("#right1")
const right2 = document.querySelector ("#right2")
const left = document.querySelector ("#left")
const left1 = document.querySelector ("#left1")
const left2 = document.querySelector ("#left2")


up.addEventListener("click", onClick)
up1.addEventListener("click", onClick)
up2.addEventListener("click", onClick)

down.addEventListener("click", onClick)
down1.addEventListener("click", onClick)
down2.addEventListener("click", onClick)

right.addEventListener("click", onClick)
right1.addEventListener("click", onClick)
right2.addEventListener("click", onClick)

left.addEventListener("click", onClick)
left1.addEventListener("click", onClick)
left2.addEventListener("click", onClick)

const board = (Array.from (grid.children))

 function onClick (e) {
  const x = e.clientX
  const y = e.clientY
  const arrows = Array.from(document.querySelectorAll ('.arrow'))

  const board = (Array.from (grid.children))

  const boxes = Array.from(document.querySelectorAll ('.all_squares'))

  let extraRoomIdx = boxes.findIndex (box => box.children.length != 0)

  let boxesIdxs = []

  let boxesTemp = [...Array(12).keys()].filter (nr => nr == extraRoomIdx).forEach (elem=> {
    boxesIdxs.push ({
      elemIdx : elem,
      imgX : arrows[elem].offsetLeft,
      imgY : arrows[elem].offsetTop
    })
  })

  boxesIdxs = boxesIdxs.filter (elem => x >= elem.imgX && y >= elem.imgY && x <= elem.imgX + 50 && y <= elem.imgY + 50)

  if (boxesIdxs.length != 0) {
    const numberToIndex = new Map([
      [0, 13],
      [1, 27],
      [2, 41],
      [3, 7],
      [4, 21],
      [5, 35],
      [6, 43],
      [7, 45],
      [8, 47],
      [9, 8],
      [10, 10],
      [11, 12],
    ])
    let idx = numberToIndex.get (extraRoomIdx)
  
    if ([9,10,11].includes (extraRoomIdx)) {
      let firstImg = board[idx - 7].children[0].src
      for (let i = 0; i < 6; i++) {
        board[idx-7].children[0].src = board[idx].children[0].src
        
        idx += 7
      }
      boxes[extraRoomIdx-3].innerHTML = `<img src="${firstImg}">`
      board[idx-7].innerHTML = boxes[extraRoomIdx].innerHTML
      boxes[extraRoomIdx].innerHTML = ""
    }
  
    if ([6,7,8].includes(extraRoomIdx)) {
      let firstImg = board[idx].children[0].src
      for (let i = 0; i < 6; i++) {
        board[idx].children[0].src = board[idx-7].children[0].src
        
        idx -= 7
      }
      boxes[extraRoomIdx+3].innerHTML = `<img src="${firstImg}">`
      board[idx].innerHTML = boxes[extraRoomIdx].innerHTML
      boxes[extraRoomIdx].innerHTML = ""
    }
  
    if ([0,1,2].includes(extraRoomIdx)) {
      let firstImg = board[idx].children[0].src
      for (let i = 0; i < 6; i++) {
        board[idx].children[0].src = board[idx-1].children[0].src
        
        idx -= 1
      }
      boxes[extraRoomIdx+3].innerHTML = `<img src="${firstImg}">`
      board[idx].innerHTML = boxes[extraRoomIdx].innerHTML
      boxes[extraRoomIdx].innerHTML = ""
    }
  
    if ([3,4,5].includes(extraRoomIdx)) {
      let firstImg = board[idx].children[0].src
      for (let i = 0; i < 6; i++) {
        board[idx].children[0].src = board[idx+1].children[0].src
        
        idx += 1
      }
      boxes[extraRoomIdx-3].innerHTML = `<img src="${firstImg}">`
      board[idx].innerHTML = boxes[extraRoomIdx].innerHTML
      boxes[extraRoomIdx].innerHTML = ""

    }
   }
  
  let clickedExtraRoom = false
  console.log (board[7].children[0])
 }

 document.addEventListener("click", myScript)
   function myScript(e) {
     const x = e.clientX
     const y = e.clientY
     const board = Array.from(document.querySelectorAll ('.all_squares'))
     let extraRoomIdx = board.findIndex (box => box.children.length != 0)
    let boxes = []
    let boxesTemp = [...Array(12).keys()].filter (nr => nr != extraRoomIdx).forEach (elem=> {
      boxes.push ({
        elemIdx : elem,
        imgX : board[elem].offsetLeft,
        imgY : board[elem].offsetTop
      })
    })
  
    boxes = boxes.filter (elem => x >= elem.imgX && y >= elem.imgY && x <= elem.imgX + 70 && y <= elem.imgY + 70)
  
    if (boxes.length != 0) {
      board[boxes[0].elemIdx].innerHTML = `<img src="${board[extraRoomIdx].children[0].src}" class="img">`
      board[extraRoomIdx].innerHTML = ""
    } 
  }

  //const img = Array.from(document.querySelectorAll ('.grid-item img'))
  const gridItem = Array.from(document.querySelectorAll ('.grid-item'))
  //console.log(img[7].src)
  //console.log(gridItem[1].children)
  
  var imgArray = new Array();
  
  imgArray[0] = new Image();
  imgArray[0].src = 'img/1.png';
  
  imgArray[1] = new Image();
  imgArray[1].src = 'img/2.png';
  
  imgArray[2] = new Image();
  imgArray[2].src = 'img/3.png';
  
  imgArray[3] = new Image();
  imgArray[3].src = 'img/4.png';
  
  imgArray[4] = new Image();
  imgArray[4].src = 'img/5.png';
  
  imgArray[5] = new Image();
  imgArray[5].src = 'img/6.png';
  
  imgArray[6] = new Image();
  imgArray[6].src = 'img/7.png';
  
  imgArray[7] = new Image();
  imgArray[7].src = 'img/8.png';
  
  imgArray[8] = new Image();
  imgArray[8].src = 'img/9.png';
  
  imgArray[9] = new Image();
  imgArray[9].src = 'img/10.png';
  
  
  document.addEventListener('keydown', move);
  function move(event) {
      var k = event.keyCode,
          chrId = document.getElementById('test'),
          chr = {
              down: function () {
                  var y = parseInt(getComputedStyle(chrId).top);
                   if (k == 40 && (board[7].children[0].src == imgArray[1].src
                   ||  board[7].children[0].src === imgArray[3].src
                   ||  board[7].children[0].src=== imgArray[4].src
                   ||  board[7].children[0].src === imgArray[7].src
                   ||  board[7].children[0].src === imgArray[8].src
                   ||  board[7].children[0].src === imgArray[9].src)) { // down
                      ++y;
                  }
                  console.log (imgArray[3].src)
                  return y;
              },
              right: function () {
                  var x = parseInt(getComputedStyle(chrId).left);				
                   if (k == 39 && (board[1].children[0].src === imgArray[0].src
                   ||  board[1].children[0].src === imgArray[2].src
                   ||  board[1].children[0].src === imgArray[3].src
                   ||  board[1].children[0].src === imgArray[4].src
                   ||  board[1].children[0].src === imgArray[6].src
                   ||  board[1].children[0].src=== imgArray[8].src)) { // right 
                      ++x;
                  } 
                  return x;
              }
          };
      chrId.style.top = (chr.down()) + "px";
      chrId.style.left = (chr.right()) + "px";
  }

//console.log(img[1].src)
//console.log(imgArray[1].src)

const button2 = document.querySelector("#bb")
button2.addEventListener("click", toggleText)

  function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  const slct1_1 = 
  {"player1":
  [{value:1,desc:"1"},{value:2,desc:"2"},{value:3,desc:"3"},{value:4,desc:"4"},
  {value:5,desc:"5"},{value:6,desc:"6"},{value:7,desc:"7"},{value:8,desc:"8"},
  {value:9,desc:"9"},{value:10,desc:"10"},{value:11,desc:"11"},{value:12,desc:"12"},
  {value:13,desc:"13"},{value:14,desc:"14"},{value:15,desc:"15"},{value:16,desc:"16"},
  {value:17,desc:"17"},{value:18,desc:"18"},{value:19,desc:"19"},{value:20,desc:"20"},
  {value:21,desc:"21"},{value:22,desc:"22"},{value:23,desc:"23"},{value:24,desc:"24"}],
  "player2":
  [{value:1,desc:"1"},{value:2,desc:"2"},{value:3,desc:"3"},{value:4,desc:"4"},
  {value:5,desc:"5"},{value:6,desc:"6"},{value:7,desc:"7"},{value:8,desc:"8"},
  {value:9,desc:"9"},{value:10,desc:"10"},{value:11,desc:"11"},{value:12,desc:"12"}],
  "player3":
  [{value:1,desc:"1"},{value:2,desc:"2"},{value:3,desc:"3"},{value:4,desc:"4"},
  {value:5,desc:"5"},{value:6,desc:"6"},{value:7,desc:"7"},{value:8,desc:"8"}],
  "player4":
  [{value:1,desc:"1"},{value:2,desc:"2"},{value:3,desc:"3"},{value:4,desc:"4"},
  {value:5,desc:"5"},{value:6,desc:"6"}]}

const slct1 = document.querySelector('[name=slct1]');
document.querySelector('[name=slct]').addEventListener('change', function(e) {
  slct1.innerHTML = slct1_1[this.value].reduce((acc, elem) => `${acc}<option value="${elem.value}">${elem.desc}</option>`, "");
});
