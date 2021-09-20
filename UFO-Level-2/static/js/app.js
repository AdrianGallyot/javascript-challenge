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
  var DateElement = d3.select("#datetime")
  var cityElement = d3.select("#city")
  var stateElement = d3.select("#state")
  var countryElement = d3.select("#country")
  var shapeElement = d3.select("#shape")

  // Get the value property of the input element
  var DateInputValue = DateElement.property("value");
  var cityinputValue = cityElement.property("value");
  var stateinputValue = stateElement.property("value");
  var countryinputValue = countryElement.property("value");
  var shapeinputValue = shapeElement.property("value");

  var filteredData = '';


  console.log(DateInputValue);
  console.log(cityinputValue);
  console.log(stateinputValue);
  console.log(countryinputValue);
  console.log(shapeinputValue);
  console.log(tableData);

  // Filter the table data with the input date value
  if (DateInputValue.length > 0){ 
     filteredData = tableData.filter(ufo => ufo.datetime === DateInputValue);
    }
    if (cityinputValue.length > 0){ 
     filteredData = tableData.filter(ufo => ufo.city === cityinputValue)
     }
    if (stateinputValue.length > 0){ 
      filteredData = tableData.filter(ufo => ufo.state === stateinputValue)
      }
    if (countryinputValue.length > 0){ 
        filteredData = tableData.filter(ufo => ufo.country === countryinputValue)
        }
    if (shapeinputValue.length > 0){ 
          filteredData = tableData.filter(ufo => ufo.shape === shapeinputValue)
          }
  // var filteredData = filteredData.filter(ufo => ufo.city === cityinputValue);
  // var filteredData = filteredData.filter(ufo => ufo.state === stateinputValue);
  // var filteredData = filteredData.filter(ufo => ufo.country === countryinputValue);
  // var filteredData = filteredData.filter(ufo => ufo.shape === shapeinputValue);

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
}// End of Date filter