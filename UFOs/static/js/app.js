// from data.js
var tabledata = data
console.log(data);

var tbody = d3.select("tbody");

function createtable(data){
    tbody.text("");
    data.forEach((UFO) => {
        var row = tbody.append("tr")
        Object.entries(UFO).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
        })
};

 var filterbutton=d3.select("#filter-btn");
    filterbutton.on("click",function(){
        d3.event.preventDefault();
        var inputValue  = d3.select("#datetime").property("value");
        var filterdata=tabledata.filter((UFO) => {
            return UFO.datetime===inputValue
        })
        if(filterdata && filterdata.length >=1)
            createtable(filterdata);
        else
            tbody.html("");
            

    }) ;  

createtable(tabledata);

