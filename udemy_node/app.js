const yargs=require("yargs");
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');

var argv=yargs.
		options({
			a:{
				demand:true,
				alias:'address',
				describe:"address to fetch weather for",
				string:true
			}
		})
		.help()
		.alias('help','h')
		.argv;



geocode.geocodeAddress(argv.address,(error,results)=>{
	if(error){
		console.log(error);
	}else{
		// console.log(JSON.stringify(results,undefined,2));
		console.log(results.address);

		weather.getWeather(results.lattitude,results.longitude,(error,weatherresults)=>{
			if(error){
				console.log(error);
			}else{
				console.log(`Its currently  ${weatherresults.temperature}. It feels like ${weatherresults.apparentTemperature}`);
			}
		})

	}
});






