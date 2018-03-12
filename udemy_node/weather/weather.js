const request=require("request");

var getWeather=(lat,lng,callback)=>{
	var rfi="https://api.darksky.net/forecast/6d3feea83b4b148e03686ecbb4c8a214/";
	console.log(rfi);
	request({
		url:`${rfi}${lat},${lng}`,
		json:true
	},(error,response,body)=>{
		if(error){
			callback('unable to connect to forecast.io service');
		}else if(response.statusCode===400){
			callback('unable to fetch Weather');
		}else if(response.statusCode===200){
			callback(undefined,{
				temperature: body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature
			});
		}
		
		
	});
};

module.exports={
	getWeather
}
