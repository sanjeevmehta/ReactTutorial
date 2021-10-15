export default async function fetchAPI(url) {
	const proxy = `https://cors-anywhere.herokuapp.com/`;
	
	const response = await fetch(`${proxy}${url}`);
	const data = await response.json();
	console.log({ data });
	return data;
}