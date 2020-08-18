const url = "https://api.spacexdata.com/v2/launchpads";

data1 = d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

console.log(data1);
// skill drill, rpint only latitude & longitude of launchpads
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(loca => [loca.location.latitude, loca.location.longitude])));
