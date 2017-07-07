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

var b3 = new Bird("BLUE JAY", "C. Cristata", "female", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/blue_jay_8.jpg");
var b4 = new Bird("GRAY HAWK", "Buteo Plagiatus", "female", "http://www.conservewildlifenj.org/images/artmax_106.jpg","true");
var b5 = new Bird("MERLIN", "Falcon", "male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/merlin_9.jpg");
var b6 = new Bird("OSPREY", "Pandion Haliaetu", "male", "http://i2.mirror.co.uk/incoming/article7688892.ece/ALTERNATES/s615b/PAY-An-osprey-fishing-in-the-Scottish-Cairngorms.jpg");
var b7 = new Bird("BEE HUMMINGBIRD", "Hummingbird", "female", "http://www.wildnaturephotos.com/Blog/wp-content/uploads/2013/01/RD-121107145_550px.jpg");
var b8 = new Bird("LAYSAN ALBATROSS", "Albatross", "male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/laysan_albatross_1.jpg");
var b9 = new Bird("RED JUNGLEFOWL", "Rooster", "male", "https://s-media-cache-ak0.pinimg.com/originals/1a/13/84/1a1384b3fd8f7e48041273c9403c6ac6.png")
var b10 = new Bird("LOVE BIRD", "Parrot", "male/female", "http://megamascota.hiperarticulos.com/wp-content/uploads/2016/05/Love-Bird-2.jpg")
  console.log(b3, b4, b5, b6, b7, b8, b9, b10);

var title = "A FINE COLLECTION OF FEATHERED FRIENDS";
var birds = new Array()
birds.push(b3, b4, b5, b6, b7, b8, b9, b10);
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
