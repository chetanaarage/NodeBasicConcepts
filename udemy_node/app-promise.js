const yargs=require("yargs");
const axios=require("axios");

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


var encodedAddress=encodeURIComponent(argv.address);
var rfi="http://maps.googleapis.com/maps/api/geocode/json?address";
var geocodeUrl=`${rfi}=${encodedAddress}`;
var url="https://api.darksky.net/forecast/6d3feea83b4b148e03686ecbb4c8a214/";


axios.get(geocodeUrl).then((response)=>{
	if(response.data.status =="ZERO_RESULTS"){
		throw new Error("unable to find address");
	}

	var lat=response.data.results[0].geometry.location.lat;
	var lng=response.data.results[0].geometry.location.lng;
	var weatherUrl=`${rfi}${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);

	return axios.get(weatherUrl);
}).then((response)=>{
	var temperature=response.data.currently.temperature;
	var apparentTemperature=response.data.currently.apparentTemperature;
	console.log(`Its currently  ${temperature}. It feels like ${apparentTemperature}`);

}).catch((e)=>{
	if(e.code ==="ENOTFOUND"){
			console.log("unable to find service");
	}else{
		console.log(e.message);
	}

});