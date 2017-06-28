// *
//  * EXERCISE: Maintaining Objectivity
//  *
//  * Let's review JavaScript objects, as we haven't covered them in a while! To
//  * begin, create a new JavaScript object and assign it to a variable whose name
//  * is a band (one you like, one you're in, or one you've dreamt of). Remember!
//  * You can create an empty object as follows:
//  *
//
// var takingHeads = {};
//  *
//  * Go ahead and log your new object to console below, then run your program in
//  * Node. If your blank object appears in terminal/command prompt, you're good
//  * to go to the next step!
//  *
//  * In the past, we've mostly hardcoded, our data in. We're going to leverage
//  * the versatility of JavaScript objects to use functions to add band
//  * members to our band! Create a parameter of your object called "addBandmate"
//  * and set it to a function of like name. Your "addBandmate" function should
//  * accept two parameters, the bandmate's name and the instrument they play
//  * (both String types):
//  *
//  *  talkingHeads.addBandmate = function addBandmate(name,instrument){
//  *      console.log("Adding",name,"and",instrument);
//  *  }
//  *
//  * Note that for now, we're just going to log what we pass to our function's
//  * arguments to console. Now, call your object's new function (outside of the
//  * function declaration), passing it a couple of test band member names and
//  * instruments like so:
//  *
//  *    talkingHeads.addBandmate("Johnny Boom","Congas");
//  *    talkingHeads.addBandmate("Mary Screech","Vocals");
//  *
//  * Then run your program again via Node. Your test band members should show in
//  * terminal/command prompt if all goes well!
//  *
//  * Obviously, we need to do more than just log band members to console, our
//  * function needs to actually store them in our band object! To do this, we'll
//  * be covering the use of JavaScript keyword "this". In the case of JavaScript
//  * Objects, "this" refers to the object upon which "this" is called. To
//  * demonstrate, add the following line of code inside your "addBandmate"
//  * function:
//  *
//  *    this[name] = instrument;
//  *
//  * Now, delete the console log statement inside the function, and outside the
//  * declaration instead log your entire band object to console below the two
//  * calls to your object's "addBandmate" function:
//  *
//  *    console.log("My band:",talkingHeads);
//  *
//  * Run your program via Node. You object should indicate that it now stores the
//  * "addBandmate" function, as well as the two test band members you were
//  * previously logging to console.
//  *
//  * This is all fine and well, but now we have two band members in our band
//  * object that aren't actually a part of our band! We can fix this by creating
//  * another function "removeBandmate" to our band object, and then using the
//  * JavaScript keyword "delete" to remove a parameter of our band. Note that the
//  * removeBandmate function should only accept a single String type argument
//  * (the name of the band member being removed).
//  *
//  *    talkingHeads.removeBandmate = function removeBandmate(name){
//  *      delete this[name];
//  *    }
//  *
//  * Note the use of "this" again to refer to the object of which our function
//  * is a parameter of! It's also nice, as our delete statement is quite concise
//  * and reads well! Go ahead and test your delete function by removing one of the
//  * test band members you added previously, then log your band object to console
//  * below
//  *
//  *    talkingHeads.removeBandmate("Johnny Boom");
//  *    console.log("My band is now:",talkingHeads);
//  *
//  *
//  * Again, run your program via console in Node, making sure that the band member
//  * you passed to your "removeBandmate" function no longer shows as a key-value
//  * pair in your band object.
//  *
//  * Now, let's add one more function to our band object, "bandPlay". This
//  * function should take no arguments. Inside the function, create a variable
//  * called "bandMembers", and assign it to the following Object data-type method
//  * call as below:
//  *
//  *    talkingHeads.bandPlay = function bandPlay(){
//  *      var bandMembers = Object.keys(this);
//  *      console.log("My band memebers are:",bandMembers);
//  *    }
//  *
//  * The "keys()" method is a powerful method that must be called upon the
//  * JavaScript "Object" type as shown above. It accepts a single argument (a
//  * valid JavaScript object), and returns an *array of the keys* of that
//  * JavaScript object. To see it in practice, go ahead and call our object's
//  * new "bandPlay" function as below:
//  *
//  *    talkingHeads.bandPlay();
//  *
//  * Then run the program via Node. In your terminal/command prompt, an array of your
//  * band members' names should print to terminal/command prompt!
//  *
//  * Before we go further, let's explain a little bit more how the line above
//  * works. We start by creating a new JavaScript variable called "bandMembers".
//  * The new variable is the assigned to the return value of the Object.keys()
//  * method. The Object.keys() method is passed the keyword "this", which refers
//  * to the object of which our "bandPlay" function is a parameter (i.e. our
//  * "band" object), which results in the method call returning an array of our
//  * "band" Object's keys!
//  *
//  * Now, let's iterate over the array of key values, making sure to *only* log
//  * key-value pairs of our object that our band members by checking to make sure
//  * that the type of each key's paired value is a string. Add the following
//  * method call to "forEach" below the Object.keys() statement inside your
//  * "bandPlay" function:
//  *
//  *    talkingHeads.bandPlay = function bandPlay() {
//  *      var bandMembers = Object.keys(this);
//  *      var band = this;
//  *
//  *      bandMembers.forEach(function(bandMember){
//  *        if(typeof(band[bandMember]) === "String"){
//  *          console.log(bandMembers,"plays the",band[bandMember]);
//  *        }
//  *      })
//  *    }
//  *
//  * Let's take a moment and explain the above. First, note the deletion of the
//  * console log statement from before. We then create a new variable "band" which
//  * we set to the keyword "this". Given that "this" refers to our "band" object,
//  * why would we want to set it to a variable before calling the "forEach" method
//  * on our array of band members?
//  *
//  * As mentioned earlier, the keyword "this" in JavaScript can be tricky. So
//  * long as the function we assign to our "band" Object remains the innermost
//  * function which exists within that given parameter, "this" will refer to the
//  * Object to which the function we set as the parameter's value is assigned.
//  * However, the instant we call "forEach" upon our array of band members, any
//  * reference to this inside our call to the "forEach" will refer to the
//  * "forEach" function! This means that we loose any ability to reference our
//  * "band" object within the "forEach" statment unless  we assign "this" to a
//  * variable outside the "forEach" method but *within* our "bandPlay" function.
//  *
//  * Once you've got your own version of the code above, call your "bandPlay"
//  * function outside the "bandPlay" declaration (i.e. not within the actual
//  * code where we create the function), then run your program again via Node.
//  * With a little bit of elbow grease, we've now created a function that cleanly
//  * and efficiently displays each member of our band and the instrument they
//  * play! Good job!


 var fleetFoxes = {};
    fleetFoxes.addBandmate = function addBandmate(name,instrument){
      this[name] = instrument;
    }

    fleetFoxes.addBandmate("Robin Pecknold", "Guitar")
    fleetFoxes.addBandmate("Skye Skjelset", "Mandolin")
    fleetFoxes.addBandmate("Morgan Henderson", "Guitar")
    fleetFoxes.addBandmate("Casey Wescott", "Mandolin")
    fleetFoxes.addBandmate("Christian Wargo","Guitar")
    fleetFoxes.addBandmate("J.Tilman", "Drums")
    fleetFoxes.addBandmate("Johnny Boom","Congas");
    fleetFoxes.addBandmate("Mary Screech","Vocals");

    fleetFoxes.removeBandmate = function removeBandmate(name){
    delete this[name];
    }
    fleetFoxes.removeBandmate("Johnny Boom");
    console.log("My band is now:",fleetFoxes);

    fleetFoxes.removeBandmate("Mary Screech");
    console.log("My band is now:",fleetFoxes);

    fleetFoxes.bandPlay = function bandPlay(){
      var bandMembers = Object.keys(this);

    fleetFoxes.bandPlay = function bandPlay() {
        var bandMembers = Object.keys(this);
        var band = this;

    bandMembers.forEach(function(bandMember){
        if(typeof(band[bandMember]) === "String"){
        console.log(bandMembers,"plays the",band[bandMember]);
            }
          })
        }
   }

    //console.log("My band:",fleetFoxes);

fleetFoxes.addBandmate();
fleetFoxes.bandPlay();
