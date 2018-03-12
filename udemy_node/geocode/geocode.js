const request=require("request");


var geocodeAddress=(address,callback)=>{

	var encodedAddress=encodeURIComponent(address);
	var rfi="http://maps.googleapis.com/maps/api/geocode/json?address";
	console.log(rfi);
	request({
		url:`${rfi}=${encodedAddress}`,
		json:true
	},(error,response,body)=>{
		//console.log(JSON.stringify(body,undefined,2));

		if(error){
			callback('unable to connect to user service');
		}else if(body.status ==="ZERO_RESULTS")
		{
			callback("unable to find the address");
		}else if(body.status==="OK"){
			callback(undefined,{
				address:body.results[0].formatted_address,
				lattitude:body.results[0].geometry.location.lat,
				longitude:body.results[0].geometry.location.lng
			});
			//console.log(`latitude: ${body.results[0].geometry.location.lat});
			//console.log(url);

		}
		
	});
};



module.exports={
	geocodeAddress
}