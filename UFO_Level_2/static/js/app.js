// from data.js
var tableData = data;


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    //Delete any table in the body portion on the webpage to clear previous results
    var tablebody = d3.select("tbody");
    tablebody.html(""); 


    //  Create input elements for each search term
    var inputElementDatetime = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    // Get the value property of each input element
    var inputValueDatetime = inputElementDatetime.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    // display the input values
    console.log(inputValueDatetime);
    console.log(inputValueCity);
    console.log(inputValueState);
    console.log(inputValueCountry);
    console.log(inputValueShape);

  // only filter data if there is an input
    let filteredData=tableData;

        // use counter to ensure a search term was entered
        var counter = 0;

        if (inputValueDatetime !== "") {
            filteredData = filteredData.filter(date => date.datetime === inputValueDatetime);
            counter++;
        };
      
        if (inputValueCity !== "") {
            filteredData = filteredData.filter(ufo => ufo.city === inputValueCity);  
            counter++;
        };
    
        if (inputValueState !== "") {
            filteredData = filteredData.filter(ufo => ufo.state === inputValueState);
            counter++;
        };
    
        if (inputValueCountry !== "") {
            filteredData = filteredData.filter(ufo => ufo.country === inputValueCountry);
            counter++;
        };
    
        if (inputValueShape !== "") {
            filteredData = filteredData.filter(ufo => ufo.shape === inputValueShape);
            counter++;
        };

    // Check the filterData in the console
    console.log(filteredData);

    // Do not pass through the entire data set, only proceed making a table if counter > 0
    if (counter > 0){
        // Append the filteredData into the table #ufo-table on the webpage
        var tbody= d3.select("tbody");

        // loop through the filter data to add to table
            filteredData.forEach((ufoSighting) => {
                // create a row for each ufo sighting
                var row = tbody.append("tr");
                row.id = "ufoSighting";

                Object.entries(ufoSighting).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
    };
});
