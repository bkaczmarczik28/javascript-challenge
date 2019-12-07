// from data.js
var tableData = data;


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  
    //Delete any table in the body portion on the webpage to clear previous results
    var tablebody = d3.select("tbody");
    tablebody.html(""); 

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

    // Check the filterData in the console
    console.log(filteredData);

//   Append the filteredData into the table #ufo-table on the webpage

    var tbody= d3.select("tbody");

    // loop through the filter data to add to table

    // create an iteratative number to change style of rows in table
    var i = 1
        filteredData.forEach((ufoSighting) => {
            // create a row for each ufo sighting
            var row = tbody.append("tr");

            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);

            });
        });
});
