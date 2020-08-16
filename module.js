d3.json("samples.json").then(function(data){console.log(data);});

// extract only wash frequency of 2x per week
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// descending sort of wash frequency
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// filter null values found in wash frequency
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// using entries to return both of objext's keys and values
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.entries(researcher1));

// This method iterates through each element in an array. In this case, there are smaller arrays, each including two elements, inside an outer array. 
// To access these elements, the argument ([first, second]) is used, where first and second are arbitrarily chosen for convenience. 
// They could have been named ([x, y]) or ([key, value]).
researcher2 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];
researcher2.forEach(([first, second]) => console.log(first + ": " + second));

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[101];
    Object.entries(firstPerson).forEach(([key, value]) => 
    console.log(key + ': ' + value));
});