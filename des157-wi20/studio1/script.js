( function (){

    'use strict'

    // listen for the submission of the form
    document.getElementById("myform").addEventListener("submit", function(event){
        // prevent the default behavior
        event.preventDefault();

        // get all the text fields from the form
        const formData = document.querySelectorAll("input[type=text]");
        // create an array to hold values from the form
        const words = [];

        //loop through the fields and add the words to the array, one at a time.
        for( let i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        //You can see the array in the console, if you want...
        console.log(words);

        //run a function to put the words into the madlib... Function below...
        //Pass the array of words the user typed into the function
        makeMadLib(words);

    });

    //This function takes an array input, then constructs the madlib, peppering
    //in the user's words where necessary.
    function makeMadLib(theWords){
        const madlib = `Hello ${theWords[0]}, and welcome to the Mad House! I say, you must be feeling ${theWords[1]}. I can tell by the way
        you move your ${theWords[2]}. But don't sweat it, I have plenty of ${theWords[3]} here for you and our guests. And between
        you and me, the guests hate ${theWords[4]} as much as you do. Isn't that swell?!`;

        //Get the madlib container
        const mlContainer = document.getElementById('madlib');

        //Change the guts of the container to your madlib
        mlContainer.innerHTML = `<p>${madlib}</p>`;

        //change the class on the madlib container so you can see it.
        mlContainer.setAttribute("class", "visible");

         mlContainer.addEventListener('mouseover' , function() {
            mlContainer.className = "invisible";
         });

         mlContainer.addEventListener('mouseout' , function(){
            mlContainer.removeAttribute('class');
         });
    }


}());