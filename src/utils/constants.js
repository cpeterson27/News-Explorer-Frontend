const BASE_URL = window.location.hostname === 'localhost'    ? 
'http://localhost:5001'    : 
'https://api.newsexplorer28.crabdance.com';  

console.log('Current hostname:', window.location.hostname);
console.log('BASE_URL being used:', BASE_URL);

export { BASE_URL };
