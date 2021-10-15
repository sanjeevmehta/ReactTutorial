export default async function fetchAPI(url) {
	let headers = new Headers();
	
	headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
	
	const response = await fetch(url, {'mode':'cors', 'headers': {
		 'Access-Control-Allow-Origin':'*'
	}});
	const data = await response.json();
	console.log({ data });
	return data;
}