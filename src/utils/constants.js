const BASE_URL = import.meta.env.NODE_ENV === "production"  
? 'https://api.newsexplorer28.crabdance.com'
: "http://localhost:5001";

export { BASE_URL };
