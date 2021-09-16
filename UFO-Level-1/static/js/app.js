// from data.js
var tableData = data;

// YOUR CODE HERE!

// // Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the weather data from data.js
console.log(data);

// Append table to webpage 
data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Filter the data table by Date

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", DateFilter);
form.on("submit", DateFilter);

function DateFilter() {

  //Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime")

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  
  // Filter the table data with the input date value
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  // Clear table body element
  d3.select('tbody').html('')

  // Append table to webpage with updated table data
  filteredData.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}
