export function getIdFromPathname(){
	const path = window.location.pathname.substr(1)
	return path.split('/')[1]
}