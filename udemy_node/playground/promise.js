
var asyncAdd=(a,b)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a+b);
			}else{
				reject("Arguments must be numbers");
			}
				
	},2500);
	});
};

asyncAdd(1,2).then((res)=>{
	console.log("Result:",res);
	return asyncAdd(res,33);
}).then((res)=>{
	console.log("Result should be:",res);
	//return asyncAdd(res,33);
}).catch((error)=>{
	console.log("error:",error);
});


// var somePromise=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("hey it worked");
// 		//resolve("hey it worked");
// 		reject("unable to fullfill promise");
// 	},2500);
	
// });

// somePromise.then((message)=>{
// 	console.log("success",message);
// },(error)=>{
// 	console.log("error",error);
// });

//you can do reolve once and reject once not together,yo cant do both

//callback u can call twice,which is confusing

