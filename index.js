var population_density_map = "./json/population_density_map.json";
var population_area_analysis = "./json/population_area_analysis.json";

vegaEmbed("#population_density_map", population_density_map)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

vegaEmbed("#population_area_analysis", population_area_analysis)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
