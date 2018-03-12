const users=[{
	id:1,
	name:"andrew",
	schoolId:101
},{
	id:2,
	name:"jessica",
	schoolId:999
}];


const grades=[{
	id:1,
	schoolId:101,
	grade:86
},{
	id:2,
	schoolId:999,
	grade:100
},
{
	id:3,
	schoolId:101,
	grade:80
}];

const getUser =(id)=>{
	return new Promise((resolve,reject)=>{
		const user=users.find((user)=>user.id === id);
		if(user){
			resolve(user);
		}else{
			reject(`unable to find id with ${id}`);
		}
	});
};
const getGrades =(schoolId)=>{
	return new Promise((resolve,reject)=>{
		resolve(grades.filter((grade)=>grade.schoolId===schoolId));
	});
};

const getStatus=(userId)=>{
	let user;
	return getUser(userId).then((tempUser)=>{
		user=tempUser;
		return getGrades(user.schoolId);
	}).then((grades)=>{
		let average=0;
		if(grades.length>0){
			average=grades.map((grade)=>grade.grade).reduce((a,b)=>a +b)/grades.length;

		}
		return `${user.name} has ${average}% in the class`;
		//console.log(average);
	});

}


const getStatusAlt=async (userId)=>{
	const user=await getUser(userId);
	const grades=await getGrades(user.schoolId);
	let average=0;
		if(grades.length>0){
			average=grades.map((grade)=>grade.grade).reduce((a,b)=>a +b)/grades.length;

		}
		return `${user.name} has ${average}% in the class`;
	//console.log(grades);
}


// const getStatusAlt=async (userId)=>{
// 	return 'Mike';
// }
//console.log(getStatusAlt()); // returns a promise if u use async (its equal to return new promise)


getStatusAlt(1).then((name)=>{
	console.log(name);
})

// getStatus(2).then((status)=>{
// 	console.log(status);
// }).catch((error)=>{
// 	console.log(error);
// });

// getUser(3).then((user)=>{
// 	console.log(user);
// }).catch((error)=>{
// 	console.log(error);
// });

// getGrades(101).then((grades)=>{
// 	console.log(grades);
// }).catch((error)=>{
// 	console.log(error);
// });