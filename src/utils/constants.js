const BASE_URL = import.meta.env.PROD
  ? 'http://api.newsexplorer27.mooo.com'
  : 'http://localhost:5001';

const apiKey = '78de188aac524be7b98351628b677b25';

export { BASE_URL, apiKey };
