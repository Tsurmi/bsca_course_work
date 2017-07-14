var baseballPlayers = [
{ name: "Barry Bonds", HR: 763, team: "San Francisco Giants", img: "http://ww4.hdnux.com/photos/60/01/25/12588375/5/920x920.jpg" },
{ name: "Hank Aaron", HR: 755, team: "Atlanta Braves", img: "https://mlblogsbrewers.files.wordpress.com/2012/10/aaron-hank-437-57-nbl.jpg" },
{ name: "Babe Ruth", HR: 714, team: "New York Yankees", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Babe_Ruth2.jpg/512px-Babe_Ruth2.jpg" },
{ name: "Mickey Mantle", HR: 536, team: "New York Yankees", img: "https://68.media.tumblr.com/2c3ef468102f02fb0cf8ae69f68b6a42/tumblr_no9rcwLJuw1spebhwo1_500.jpg"},
{ name: "Alex Rodriguez", HR: 696, team: "New York Yankees" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alex_Rodriguez_2008-04-19.jpg/550px-Alex_Rodriguez_2008-04-19.jpg" },
{ name: "Aaron Judge", HR: 34, team: "New York Yankees",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Aaron_Judge_on_September_8%2C_2016.jpg/1200px-Aaron_Judge_on_September_8%2C_2016.jpg"},
{ name: "Carlton Fisk", HR: 376, team: "Boston Red Sox" , img: "http://www.bostonspastime.com/images/fisk.jpg" },
{ name: "Willie Mays" , HR: 660, team: "San Francisco Giants", img: "http://images.huffingtonpost.com/2014-10-27-WillieMays.jpg"},
{ name: "Kenneth Griffey Jr.", HR: 630, team: "Seattle Mariners" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ken_Griffey%2C_Jr._June_2009.jpg/500px-Ken_Griffey%2C_Jr._June_2009.jpg" },
{ name: "Jim Thome", HR: 612, team: "Cleveland Indians" , img: "http://www.dailyherald.com/storyimage/DA/20140723/news/140729267/EP/1/5/EP-140729267.jpg&updated=201407232330&MaxW=800&maxH=800&noborder"},
{ name: "Sammy Sosa", HR: 609, team: "Chicago Cubs", img: "http://www.dailyherald.com/storyimage/DA/20130108/sports/708169556/AR/0/AR-708169556.jpg&updated=201301082131&MaxW=800&maxH=800&noborder"},
{ name: "Albert Pujols", HR: 605, team: "Los Angeles Angels" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Albert_Pujols_on_April_14%2C_2012.jpg/500px-Albert_Pujols_on_April_14%2C_2012.jpg"},
{ name: "Frank Robinson", HR: 586, team: "Cleveland Indians", img: "https://s-media-cache-ak0.pinimg.com/736x/c6/d1/b8/c6d1b8f547a9b0da3c58c365db22fcca--baseball-photos-baseball-cards.jpg"},
{ name: "Mark McGuire", HR: 583, team: "St. Louis Cardnials", img: "http://www.vosizneias.com/wp-content/uploads/2010/01/marmc.jpg"},
{ name: "Rafael Palmeiro", HR: 549, team: "Baltimore Orioles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rafael_Palmeiro_2003.jpg/440px-Rafael_Palmeiro_2003.jpg"},
{ name: "Reggie Jackson", HR: 563, team: "Oakland Athletics", img: "http://i.usatoday.net/communitymanager/_photos/daily-pitch/2010/06/25/reggiex-large.jpg"},
{ name: "Manny Ramirez", HR: 555, team: "Cleveland Indians", img: "http://www2.pictures.gi.zimbio.com/Manny+Ramirez+Tampa+Bay+Rays+v+Boston+Red+bD7AcTWcdxUl.jpg"},
{ name: "Chipper Jones", HR: 468, team: "Atlanta Braves", img: "http://baseballreflections.com/wp-content/uploads/2010/08/ChipperJonesAtBat.jpg"},
];
console.log("YOU FOUND APPJS FILE!");

var app = new Vue ({
  el: '#app',
  data: {
    title: "Baseball Enthusiasts Club",
    players: baseballPlayers
  }
});
