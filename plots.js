function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  init();
  // function optionChanged(newSample) {
  //   console.log(newSample);
  // }

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildBarChart(newSample);
    buildBubbleChart(newSample);
    buildGaugeChart(newSample);
  }

  // display data values for selected object
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
      PANEL.html("");  // clear html panel
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(key.toUpperCase() + ': ' + value);
      })
        // console.log(key.toUpperCase() + ': ' + value));
    });
  }

// display top 10 biome results
function buildBarChart(sample){
  d3.json("samples.json").then((data) => {
    var resultArray = data.samples.filter(sampleObj => {
      return sampleObj.id === sample});
    var result = resultArray[0]; // get ID number out of array
    
    // store top 10 bio results for bar chart
    var top_ten_otu_ids = result.otu_ids.slice(0,10).map(numericIds => {
      return 'OTU ' + numericIds;}).reverse();
    var top_ten_sample_values = result.sample_values.slice(0,10).reverse();
    var top_ten_otu_labels = result.otu_labels.slice(0,10).reverse();
    
    // load data for graph
    var bar_trace = [{
      x : top_ten_sample_values,
      y : top_ten_otu_ids,
      text: top_ten_otu_labels,
      name: "Top 10",
      type: "bar",
      orientation: "h"
    }];
    
    // format plot area
    var bar_layout = {title: "Top 10 OTUs"};
    Plotly.newPlot('bar', bar_trace, bar_layout);
  });
}

function buildBubbleChart(sample){
  d3.json("samples.json").then((data) => {
    var resultArray = data.samples.filter(sampleObj => {
      return sampleObj.id === sample
    });
  var result = resultArray[0];
  var otu_ids = result.otu_ids.map(numericIds => {
    return numericIds;}).reverse();
  var sample_values = result.sample_values.reverse();
  var otu_labels = result.otu_labels.reverse();
    
  // load data for plotting
  var bubble_trace = [{
    x : otu_ids,
    y : sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {color: otu_ids, size: sample_values}
  }];

  // format plot area
  var bubble_layout = {
    title: "OTU ID",
    showlegend: false
  };
  Plotly.newPlot('bubble', bubble_trace, bubble_layout)
  });
}

// build gauge chart to show wash frequency
function buildGaugeChart(sample){
  d3.json("samples.json").then((data) => {
    var resultArray = data.samples.filter(sampleObj => {
      return sampleObj.id === sample
    });
  var result = resultArray[0];
  var wfreq = result.wfreq;

  // load data for plotting
  var data = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { 
        axis: {range: [null, 10]}, 
        bar: {color: "red"}
      }
    }
  ];
  
  // format plot area
  var layout = { width: 600, height: 400 };

  Plotly.newPlot('gauge', data, layout);

  // format plot area
//   var layout = {
//     width: 600,
//     height: 400,
//     margin: { t: 20, b: 20, l: 20, r: 20 },
//     grid: { rows: 2, columns: 2, pattern: "independent" },
//     template: {
//       data: {
//         indicator: [
//           { title: { text: "Washes per Week" },
//             mode: "number+delta+gauge",
//             delta: { reference: 90 }}
//         ]
//       }
//     }
//   };
//   Plotly.newPlot('gauge', data, layout);

  });
}