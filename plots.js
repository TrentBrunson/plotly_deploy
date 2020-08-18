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
  }

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
    var bar_trace = [{
      x : top_ten_sample_values,
      y : top_ten_otu_ids,
      text: top_ten_otu_labels,
      name: "Top 10",
      type: "bar",
      orientation: "h"
    }];
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
  var bubble_trace = [{
    x : otu_ids,
    y : sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {color: otu_ids, size: sample_values}
  }];
  var bubble_layout = {
    title: "OTU ID",
    // showlegend: false
  };
  Plotly.newPlot('bubble', bubble_trace, bubble_layout)
  });
}

