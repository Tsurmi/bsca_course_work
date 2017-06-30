var b1 = {name:"Pygmy Owl", species: "Owl", gender:"female", img:""};
var b2 = {name:"Western Meadowlark", species:"Meadowlark", genger:"male", img:""};

console.log(b1);
console.log(b2);


function Bird(name, species, gender, img, predator){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
  this.predator = predator ? true : false;

}

var b3 = new Bird("BROWN HEADED COWBIRD", "cowbird", "male", "http://ontfin.com/Word/wp-content/uploads/2009/05/11.jpg");
var b4 = new Bird("BLUE JAY", "C. cristata", "female", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/blue_jay_8.jpg");
var b5 = new Bird("GRAY HAWK", "buteo plagiatus", "female", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/grha_escmilla.jpg","true");
var b6 = new Bird("MERLIN", "falcon", "male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/merlin_9.jpg");
var b7 = new Bird("OSPREY", "(Pandion haliaetu", "male", "https://photos.smugmug.com/Nature/Birds/RaptorsEagles-Hawks-Falcons-Ow/i-JKs8GfM/2/2f772e8e/S/Osprey%20flying%20copy-S.jpg");
var b8 = new Bird("BEE HUMMINGBIRD", "hummingbird", "female", "http://www.wildnaturephotos.com/Blog/wp-content/uploads/2013/01/RD-121107145_550px.jpg");
var b9 = new Bird("LAYSAN ALBATROSS", "Albatross", "male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/laysan_albatross_1.jpg");
  console.log(b3, b4, b5, b6, b7, b8, b9);

var title = "BIRDS COLLECTION";
var birds = new Array()
birds.push(b3, b4, b5, b6, b7, b8, b9);
console.log(birds);

var app = new Vue({
  el: "#app",
  data: {
    title: title,
    birds: birds,
    name: undefined,
    species: undefined,
    gender: undefined,
    img: undefined
  },
    'methods': {
      addBird: function(){
        var newBird = new Bird(this.name, this.species, this.gender, this.img);
        this.birds.push(newBird);
        console.log(this.bird);
        this.name = '';
        this.species ='';
        this.gender = '';
        this.img = '';
      }

    }

});



// function Predator(name, species, gender, img){
//   this.
