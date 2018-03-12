console.log("starting app");

setTimeout(()=>{
	console.log("Inside callback")

},2000);

setTimeout(()=>{
	console.log("Inside callback with 0 msec")

},0);

console.log("finishing app");