// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);
    buildMetadata(data);
    buildCharts(data);
    // Create a variable that holds the samples array. 
    var data = data.sample;
    // Create a variable that filters the samples for the object with the desired sample number.
    var sorteddata = data.sort((a,b) =>
    a.otu_ids - b.otu_ids).reverse();
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var sample_values = sorteddata.slice(0,1);
    // Create a variable that holds the first sample in the array.
    var toptenotulabels = data.map(sample_values => sample_values.sample_values);
    // 2. Create a variable that holds the first sample in the metadata array.
    var toptenotuids = data.map(sample_values => parseInt(sample_values.toptenotuids));
    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var trace = {
      x: toptenotulabels,
      y: toptenotuids,
      type: "bubble"
    };

    // 3. Create a variable that holds the washing frequency.
   
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}
