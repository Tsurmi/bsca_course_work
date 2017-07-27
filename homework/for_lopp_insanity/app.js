
// RULES:
// loops must be encapsulated in a function
// Array can not be hard coded (pass the array to the function)
// When challenge is passed, comment or delete just the function call (dont clutter your console)

// challenge One
// loop through the names array, and print names that being with the letter 'A'
// bonus: Allow your function to accept the Letter, as a parameter



          // var names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];
          // var letter ="";
          // function nameSearch (){
          //   for (var i = 0; i<names.length;i++){
          //     if (names[i].startsWith(letter))
          //     console.log("This name stats with ",letter, ": ",names[i]);
          //   }
          // }
					//
          // letter = "A";
          // nameSearch(names);

					const names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"]

					const mappedNames = names.filter(name => name[0] === 'A').map((names) => {
						return {starts: names}
					})
					console.log(mappedNames);
// 					var names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];
// 					function searchNames(names, letter) {
// 						for (var i=0; i<names.length; i++){
// 							if(names[i][0] === letter){
// 								console.log("This name starts with ",letter,": ", names[i])
// 							}
// 						}
// 					}
// searchNames(names,"A");

//
// // challenge Two
// loop through the numbers array, and print numbers greater than 10
// bonus: Allow your function to accept the comparison Number, as a parameter


							//
              var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
							//

							// instead of creating a global var greaterNum (which I inittialy did) pass the greaterNum as an
							// arguement in the function which will make it easier to pass in different results without having it
							// be a global var


              // function greaterThan (numbers, greaterNum){
              //   for (var j=0; j<numbers.length; j++){
              //     if (numbers[j]>=greaterNum)
              //     console.log("This number is greater/equal to ",greaterNum,": ",numbers[j])
              //   }
              // }
							//
              // greaterThan(numbers,50);

							const filteredNums = numbers.filter((n) => {
								return n >10
							});
							console.log(filteredNums);

// challenge Three
// loop through the numbers array, and print numbers greater than 10, but less than 50

        var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
        // //var greaterNum = 10;
        // //var lesserNum = 50;
				//
        // function greaterThan (numbers,greaterNum,lesserNum){
        //   for (var j=0; j<numbers.length; j++){
        //     if (numbers[j]>=greaterNum  && numbers[j]<= lesserNum)
        //     console.log("This number is greater/equal to ",greaterNum,", but less/equal to: ",lesserNum,": ",numbers[j])
        //   }
        // }
				//
        // greaterThan(numbers, 11, 51);

				const filteredNums2 = numbers.filter((n) => {
					return n > 10 && n < 50
				});
				console.log(filteredNums2);




// bonus: Only print the odd numbers that meet these conditions
							//
              // var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
              // var greaterNum = 10;
              // var lesserNum = 50;
							//
              // function greaterThan (numbers, greaterNum, lesserNum){
              //   for (var j=0; j<numbers.length; j++){
              //     if (numbers[j]>=greaterNum  && numbers[j]<= lesserNum && numbers[j]%2 !==0)
              //     console.log("This number is greater/equal to ",greaterNum,", but less/equal to: ",lesserNum,", and is Odd: ",numbers[j])
              //   }
              // }
              // greaterThan(numbers, 10, 50);

//// FIZZ BUZZ //////

			// function fizzBuzz(){
			// 	for (var i=1; i<=100; i++){
			// 		if(i%5 === 0 && i%3 === 0){
			// 			console.log("fizz buzz ",i)
			// 		}
			// 		else if (i%5 == 0){
			// 			console.log("fizz ",i);
			// 		}
			// 		else if (i%3 === 0){
			// 			console.log("buzz ",i);
			// 		}
			// 	}
			// }
			//
			// fizzBuzz();

/// i%2 !==0 gives odd numbers back!!!!! i%2 == 0 gives EVEN



// challenge Four
// loop through the array of random items, and print ONLY Numbers
// bonus: Tell the function to return numbers, or strings, as a parameter


        // var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];
				//
        // function findNums (){
        //   for (v=0; v<randomItems.length; v++){
        //     if (!isNaN(randomItems[v])){
        //       console.log("Should be a number: ",randomItems[v])
        //     }
        //   }
        // }
				//
				// findNums(randomItems);

        // var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];
				//
        // function findNums (){
        //   for (v=0; v<randomItems.length; v++){
        //     if (isNaN(randomItems[v])){
        //       console.log("Should be a String: ",randomItems[v])
        //     }
        //   }
        // }
        // findNums(randomItems);


// challenge Five
// loop through the array of customer objects, and print ONLY their names

              var customers = [
              	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
                {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
              	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
              	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
              	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
              	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
              ];

							const findNames2 = () => {
								return customers.length.name

							}
							console.log(findNames2);
              //
              // function findNames (customerName){
              //   for (var i=0; i<customers.length;i++){
              //     console.log("Should be a name: ",customerName[i].name)
              //   }
              // }
              // findNames(customers);

// bonus: Print only customer names that begin with the letter 'A'


              // var customers = [
              // 	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
              //   {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
              // 	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
              // 	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
              // 	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
              // 	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
              // ];
							//
              // function findNames (customerName, letter){
              //   for (var i=0; i<customers.length;i++){
              //     if((customerName[i].name).startsWith(letter)){
              //       console.log("Should be a name that starts with ",letter,": ",customerName[i].name)
              //     }
              //   }
              // }
              // findNames(customers, "B");


// challenge Six
// loop through the array of customers, and print ONLY customers that are 'gold' and 'paid'


			// var customers = [
			// 	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: false},
			//   // I changed Aaron to paid: fales to see if it worked, and it did!
			//   {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
			// 	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
			// 	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
			// 	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
			// 	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
			// ];
			//
			//
			// function findNames (customer){
			//   for (var i=0; i<customers.length;i++){
			//     if(customer[i].tier === "gold" && customer[i].paid === true ){
			//       console.log("The following customers have Paid & are Gold: ",customer[i].name)
			//     }
			//   }
			// }
			//
			// findNames(customers);

// bonus: Return a completely new array that meets these conditions.
