const request=require("request");

var geocodeAddress=(address)=>{

		return new Promise((resolve,reject)=>{
		var encodedAddress=encodeURIComponent(address);
			var rfi="http://maps.googleapis.com/maps/api/geocode/json?address";
			console.log(rfi);
			request({
				url:`${rfi}=${encodedAddress}`,
				json:true
			},(error,response,body)=>{
				//console.log(JSON.stringify(body,undefined,2));

				if(error){
					reject('unable to connect to user service');
				}else if(body.status ==="ZERO_RESULTS")
				{
					reject("unable to find the address");
				}else if(body.status==="OK"){
					resolve({
						address:body.results[0].formatted_address,
						lattitude:body.results[0].geometry.location.lat,
						longitude:body.results[0].geometry.location.lng
					});
					//console.log(`latitude: ${body.results[0].geometry.location.lat});
					//console.log(url);

				}
				
			});

	});
	
};

geocodeAddress("00000").then((location)=>{
	console.log("Result:",location);
}).catch((error)=>{
	console.log("error:",error);
});