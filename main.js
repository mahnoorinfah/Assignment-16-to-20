//Assignment no 16
//More guests: You just found a bigger dinner table ,so now more space is available.Think of three more guests
//to invite to dinner.
//Start with your program from exercise 15.Add a print statement to the end of your program informing 
//people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array.Use append() to add one new guest to the end of your list.
//Print a new set of invitation messages, one for each person in your list.
var guestlist = ["Laiba", "Hina", "Alishba"];
console.log("Good News! I found a bigger table for dinner");
//unshift
guestlist.unshift("Abbida");
//splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Minha");
//push()
guestlist.push("Farha");
console.log(guestlist);
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are cardially invited to dinner"));
});
//Assignment no 17
//Shrinking Guest List:you just found out that your new dinner table won't arrive intime for dinner,and you
//have space for only two guests.
//Start with your program from exercise 16.Add a new line that prints a message saying that you can invite only
//two people for dinner.
//Removing guests from your list one at a time until only two names remain in your list.Each time you pop a
//name from your list,print a message to that person letting them know you're sorry you can't invite them 
//to dinner.
// Print a massege to each of the two people still on your list, letting them know they're still invited.
//Remove the last two names from your list,so you have an empty  list, print your list to make sure you
//actually have an empty list at the end of your program.
console.log("unfortunately! I can invite only two people for dinner because i can't arrange the new table");
guestlist.unshift("alice", "bob");
//print message for updated list
console.log("updated list of guest:", guestlist);
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you"));
    }
}
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you  are invited to dinner"));
});
guestlist.splice(0, guestlist.length);
console.log("updated list of guest:", guestlist);
//Assignment no 18
//Seeing the world :Think of at least five places in the world you'd like to visit.
//Store the locations in an array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. print the array to show that its order has changed.
//Reverse the order of your list again. print the list to show its back to its original order.
//Sort your array so its stored in alphabetical order.Print  the array to show that its order haa been changed
//Sort to change your array so its stored in reverse alphabetical order. print the list to show its order has 
//changed.
var placetoVisit = ["China", "America", "Paris", "Italy", "Iran"];
//original order
console.log("Original order:", placetoVisit);
//in alphabetical order
console.log("Alphabetical order:", placetoVisit.slice().sort());
//array is still in original order by printing it
console.log("Original order:", placetoVisit);
//print array in reverse alphabetical order
console.log("Reverse order:", placetoVisit.slice().sort().reverse());
//array is still in original order by printing it
console.log("Original order:", placetoVisit);
//reverse order of list.Print array to show its order has changed
console.log("Reverse order changed");
placetoVisit.reverse();
console.log(placetoVisit);
// reverse to show that array is in original order
console.log("Reverse in original order:", placetoVisit.sort());
console.log(placetoVisit);
//Sort array so its stored in alphabetical order.print array to show its order has been changed
console.log("reverse alphabetical order changed:", placetoVisit.sort().reverse());
console.log(placetoVisit);
//Assignment no 19
//Dinner Guests:Working with one of the programs from exercise 14 through 18,print a message indicating
// the number of people you  are inviting to dinner.
console.log("unfortunately! I can invite only two people for dinner because i can't arrange the new table");
guestlist.unshift("alice", "bob");
//print message for updated list
console.log("updated list of guest:", guestlist);
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you"));
    }
}
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you  are invited to dinner"));
});
guestlist.splice(0, guestlist.length);
console.log("updated list of guest:", guestlist);
//assignment no 20
//Think of something you could store in an array.For example, you could make a list of mountains,rivers,
//countries,cities,languages,or anything else you would like.Write  a program that create a list containing 
//these items.
var languages = ["chinese", "french", "japnese", "urdu", "english"];
//print the list
console.log("languages list", languages.forEach(function (language) {
    console.log(language);
}));
