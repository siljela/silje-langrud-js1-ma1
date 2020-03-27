// question 1: Create an object called cat.
// Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

const cat = {
  complain: function() {
    console.log("Meow!");
  }
};
cat.complain();

// question 2: Select the h3 from the HTML below using the querySelector method and assign it to a variable called heading.
// <h3>Subheading</h3>
var heading = document.querySelector("h3");

// question 3: Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style.fontSize = "2em";

// question 4: Add a class to the heading variable called subheading.
heading.classList.add("subheading");
console.log(heading.className);

// question 5: Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
var paragraphs = document.querySelectorAll("p");

// question 6: Select the div by its class from the HTML below, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p>.
// <div class="results"></div>
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7: Create a function that has one argument called catArray.
// Inside the function, loop through the catArray argument and console log the name property in each object.
// Call the function and pass in the cats variable below.
`
function listOfCats(catArray) {
  for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

listOfCats(cats);`;

//question 8: Using the function and cats variable from the above question, instead of logging the name property, wrap each name property in an h5 tag, add it to a variable you declare before the loop and return the variable from the function after the loop.
// The function should return the following:
// <h5>Blob</h5>
// <h5>Harold</h5>
// <h5>Blurt</h5>

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function listOfCats(catArray) {
  let catName = "";
  for (var i = 0; i < catArray.length; i++) {
    catName += `<div><h5>${catArray[i].name}</h5><p>${catArray[i].age}</p></div>`;
  }
  return catName;
}

listOfCats(cats);

// question 9: Call the function from question 8, pass it the cats variable from question 7 and set the inner HTML of the resultsContainer variable from question 6 to the return value of the function.

resultsContainer.innerHTML = listOfCats(cats);

//question 10: Using the function from question 8, add a p element containing the age property from each object. If the age property is missing, it should display Age unknown instead.
// Wrap the h5 and p in a div.
// The function should return the following:
`<div>
    <h5>Blob</h5>
    <p>10</p>
</div>
<div>
    <h5>Harold</h5>
    <p>Age unknown</p>
</div>
<div>
    <h5>Blurt</h5>
    <p>21</p>
</div>`;
//It doesn't have to be formatted like that, yours will look more like a single string, similar to below:
//<div><h5>Blob</h5><p>10</p></div><div><h5>Harold</h5><p>Age unknown</p></div><div><h5>Blurt</h5><p>21</p></div>

// Added/modified in question 8 (line 79): catName += `<div><h5>${catArray[i].name}</h5><p>${catArray[i].age}</p></div>`;
// Missing code: turning undefined to "age unknown" - too complicated/not understandable in lessons, too much code - difficult to understand. Please repeat or make/link us a tutorial.
