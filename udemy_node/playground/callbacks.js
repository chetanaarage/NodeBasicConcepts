var getUser=(id,callback)=>{
	var user={
		id:id,
		name:"chetana"
	};

	setTimeout(()=>{
	//console.log("Inside callback")
		callback(user);
	},2000);
	
};

getUser(31,(userObj)=>{
	console.log(userObj);
});