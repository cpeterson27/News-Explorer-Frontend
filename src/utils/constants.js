const BASE_URL = process.env.NODE_ENV === "production"
  ? 'https://api.newsexplorer27.mooo.com'
  : 'http://localhost:5001';



export { BASE_URL };
