//USD CAD 23
//23 USD is worth 28 CAD.you can use in following countries

const axios=require("axios");

var urlfrom='https://api.fixer.io/latest?base';
var urlto='https://restcountries.eu/rest/v2/currency'

const getExchangeRate=async (from,to)=>{
	try{
		const response=await axios.get(`${urlfrom}=${from}`);
			return response.data.rates[to];
	}catch(e){
		throw new Error(`unable to get currency ${from} to ${to}`);
	}
	
	// return axios.get(`${urlfrom}=${from}`).then((response)=>{
	// 	return response.data.rates[to];
	// });
};

const getCountries=async (currencyCode)=>{
	try{
		const response=await axios.get(`${urlto}/${currencyCode}`);
			const rate= response.data.map((country)=>country.name);	
			if(rate){
				return rate
			}else{
				throw new Error();
			}
	}catch(e){
		throw new Error(`unable to get countries that use ${currencyCode}`);
	}	
	
	// return axios.get(`${urlto}/${currencyCode}`).then((response)=>{
	// 	return response.data.map((country)=>country.name);
	// });
};

const convertCurrency=async (from,to,amount)=>{
	const countries=await getCountries(to);
	const rate=await getExchangeRate(from,to);

	const exchnagedAmount=amount*rate;
	return `${amount}  ${from} is worth to ${exchnagedAmount} to ${to} used in following countries ${countries}`;
};

convertCurrency('USD','CAD',10).then((status)=>{
	console.log(status);
}).catch((e)=>{
	console.log(e);
})
// getExchangeRate('USD','CAD').then((rate)=>{
// 	console.log(rate);
// })
// getCountries('CAD').then((countries)=>{
// 	console.log(countries);
// })