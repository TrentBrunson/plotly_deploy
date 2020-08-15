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