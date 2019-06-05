// from data.js
var tableData = data;
var tbody = d3.select("tbody");

console.log(tableData);
// YOUR CODE HERE!
function loadTable(dataArray) {

    // First, clear out any existing data
    tbody.html("");

    dataArray.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}

function filterClick() {
    // Prevent the form from refreshing the page
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);
    var filterData = tableData;
    if (inputDate) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filterData = filterData.filter(row => row.datetime == inputDate);
    }
    console.log(filterData);
    console.log("loadingfilterdata")
    loadTable(filterData);

 }
//mainline
//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", filterClick);
console.log("loadingtabledata")
loadTable(tableData)



