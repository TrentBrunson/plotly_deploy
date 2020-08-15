Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
Plotly.newPlot("plotArea1", [{x:[5,10,15],y:[10,20,30]}]);

// Plotly.newPlot("plotArea2", [{x:[(for(let x=0; x<11; x++))],y:[(for(let i=0; i<11; y=y+10))]}])

// bar chart practice
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 Plotly.newPlot("barPlot", [trace]);

//  ****************************
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
var layout = {
    title: "Luncheon Survey"
};
Plotly.newPlot("barPlot1", [trace], layout);

// *********************************
var trace2 = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
var layout2 = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("barPlot2", [trace2], layout2);

// *******************************
var beverages = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var barLayout = {
    title: "Drinks Ordered",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent Ordered"}
};
Plotly.newPlot("drinkPlot", [beverages], barLayout);

// **************************************************
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' (lol) Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("drinkPlot1", data, layout);

//    **********************************************

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};
var data = [trace];
var layout = {
    tile: "'Bar' (lol) Chart"
};
Plotly.newPlot("piePlot", data, layout);

// ************************************************
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    mode: "markers",
    type: "scatter",
    name: "Lunch Orders",
    text: ["Burrito", "Pizza", "Csssshicken"],
    marker: {size: 24}
 };
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("scatterPlot", [trace], layout);

// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// // var doubled = numbers.map(dub => dub*2)
// });
// console.log(doubled);

// var nums = [0,2,4,6,8,10]
// var plus5 = nums.map(num => num+5)
// console.log(plus5)

cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(city){return city.City;});
console.log(cityNames);

// return population instead
// only needed to change the Key to return; could've change var cityNames to cityPopulation
// to help keep things clear; then also change the function arg to pop or something
// more representative of the change
cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(city){return city.population;});
console.log(cityNames);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// skill drill filter words starting with 's'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var word_S = words.filter(word => word.startsWith("s"));
console.log(word_S);

// sort by age ascending
// ompares one element of the array (a) with another element in the array (b). 
// From a, it subtracts b. If the result is negative (i.e., b is larger than a) then it stays put
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// sort by age descending
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b).reverse();
console.log(sortedAge);
// descending byreversing ordered pair calculation
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

// slice an array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
slicer = words.slice(0,3);
console.log(slicer);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(words.slice(3, ));