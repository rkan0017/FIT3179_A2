
map0 = null
map = null
chart = null
function changeZoom(id){
    console.log(id)
    if (id == "map_spawn"){
    view = map.view

    selected = document.getElementById(id)
    console.log(selected.value)
    switch (selected.value){
        case "World":
            view.signal("zoom_level",250)
            view.signal("center_to",[0,0])
            break;
        case "Africa":
            view.signal("zoom_level",550)
            view.signal("center_to",[15,0])
            break;
        case "Asia":
            view.signal("zoom_level",475)
            view.signal("center_to",[80,35])
            break;
        case "Europe":
            view.signal("zoom_level",675)
            view.signal("center_to",[10,52])
            break;
        case "Oceania":
            view.signal("zoom_level",675)
            view.signal("center_to",[130,-25])
            break;
        case "NA":
            view.signal("zoom_level",575)
            view.signal("center_to",[-100,45])
            break;
        case "SA":
            view.signal("center_to",[-80,-23])
            view.signal("zoom_level",575)
            break;
        default:
            view.signal("zoom_level",250)
            view.signal("center_to",[0,0])
    }            

    } else{
        view = map0.view

        selected = document.getElementById(id)
        console.log(selected.value)
        switch (selected.value){
            case "World":
                view.signal("zoom_level",250)
                view.signal("center_to",[0,0])
                break;
            case "Africa":
                view.signal("zoom_level",550)
                view.signal("center_to",[15,0])
                break;
            case "Asia":
                view.signal("zoom_level",475)
                view.signal("center_to",[80,35])
                break;
            case "Europe":
                view.signal("zoom_level",675)
                view.signal("center_to",[10,52])
                break;
            case "Oceania":
                view.signal("zoom_level",675)
                view.signal("center_to",[130,-25])
                break;
            case "NA":
                view.signal("zoom_level",575)
                view.signal("center_to",[-100,45])
                break;
            case "SA":
                view.signal("center_to",[-80,-23])
                view.signal("zoom_level",575)
                break;
            default:
                view.signal("zoom_level",250)
                view.signal("center_to",[0,0])
        }
    }
    
}

function changeBothView(){
    changeView()
    // highlight()
}

function changeView(){
    view = chart.view
    selected = document.getElementById("country-choice")
    var yearSelect = document.getElementById("yearSelect");
    value = selected.value
    console.log(value)
    view.signal("country_select",value)
    // view.signal("Year_selection",yearSelect)
    
}

function highlight(){
    view = map0.view
    selected = document.getElementById("country-choice")
    var yearSelect = document.getElementById("yearSelect");
    // view.signal("Year_selection",yearSelect.value)
    value = selected.value
    console.log(value)
    view.signal("country_select",value)
    // view.signal("Year_selection",yearSelect)
}


var spec1 = "ChloroplethMap.vg.json";
var spec2 = "StackedAreaChart.vg.json";
var spec3 = "EnergyPerCapita.vg.json";
var spec4 = "ParallelCoordinatePlot.vg.json"
var spec5 = "electricityGeneration.vg.json"
var spec6 = "pieChart.vg.json"
var spec7 = "lineChart.vg.json"
vegaEmbed('#symbol_map', spec1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    map = result
}).catch(console.error);
vegaEmbed('#areaChart', spec2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#orderedBar', spec3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#parallel', spec4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    chart = result
}).catch(console.error);
vegaEmbed('#totalGeneration',spec5).then(function(result){
    map0 = result
}).catch(console.error)
vegaEmbed('#pie', spec6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
vegaEmbed('#lines', spec7).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);


let url = "https://raw.githubusercontent.com/rkan0017/FIT3179_A2/main/WorldEnergyConsumption-Cleaned-V7.csv";

fetch(url).then(response => response.text()).then(data => {
let rows = data.split("\n");
// console.log(rows)
first_col = []
for (let i = 0; i< rows.length; i++){
    info = rows[i].split(",")
    country = info[0]
    // console.log(info[0])
    first_col[i] = country
}
var countries_list = Array.from(new Set(first_col));
countries_list.shift()
// console.log(countries_list)

select = document.getElementById("country-list")
for (let i = 0; i < countries_list.length; i++){
    var option = document.createElement('option')
    option.value = countries_list[i]
    option.innerText = countries_list[i]
    select.appendChild(option)
}
}).catch(console.error)


function change(){
    var result = document.getElementById("result");
    var yearSelect = document.getElementById("yearSelect");
    result.innerText = yearSelect.value;
    view = map0.view
    view2 = chart.view

    view.signal("Year_selection",yearSelect.value)
    view2.signal("Year_selection",yearSelect.value)
}