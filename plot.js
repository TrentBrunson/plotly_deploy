// Verify data is read in correctly - sending to display
// cityGrowths = data.js
console.log(cityGrowths);

// sort city growths in descending order
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
sortedCities

// select top 5 city growths
var topFiveCities = sortedCities.slice(0,5);

// create a separate array of the top five city names, as well as the top five growth figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// plot top 5 city growths in bar chart
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

// plot top 7 city growths in bar chart
    // slice array and get values for chart
var top7Cities = sortedCities.slice(0,7);
var top7CityNames = top7Cities.map(city => city.City);
var top7CityGrowths = top7Cities.map(city => parseInt(city.Increase_from_2016));
    // bar plot
var trace = {
    x: top7CityNames,
    y: top7CityGrowths,
    type: "bar"
  };
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar7", [trace], layout);