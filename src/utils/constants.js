const BASE_URL = process.env.NODE_ENV === "production"  
? 'https://api.newsexplorer28.crabdance.com/api/news'
: "http://localhost:5001";

export { BASE_URL };
