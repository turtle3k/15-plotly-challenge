function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // (See 15,2,5)
    // Use d3 to select the panel with id of `#sample-metadata`

    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    // (see 14,3,5 bonus?)

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
  var url = "/metadata/${sample}";
  d3.json(url).then(function(sample) {
    
    var sample_metadata = d3.select("#sample-metadata");

    sample_metadata.html("");

    Object.entries(sample).forEach(([key, value]) => {
      sample_metadata.append("h6").text(`${key}: ${value}`);
  });

  })

}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).

  var trace1 = {
    labels: ["otu_ids"],
    values: ["sample_values"],
    type: 'pie'
  };

  var data = [trace1];

  // var layout = {
  //   title: "'Bar' Chart",
  // };

  // Plotly.newPlot("plot", data, layout);

  Plotly.newPlot("pie", data);

}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
