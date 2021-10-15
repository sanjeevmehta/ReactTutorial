export default async function fetchAPI(url) {
	const response = await fetch(url, {mode:'cors'});
	const data = await response.json();
	console.log({ data });
	return data;
}