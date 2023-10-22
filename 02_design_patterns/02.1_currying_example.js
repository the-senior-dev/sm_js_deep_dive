function apiCall(baseURL, endpoint, config) {
  // Make API call here
  console.log(`Calling ${baseURL}${endpoint} with config`, config);
}


const curriedApiCall = (baseURL) => (endpoint) => (config) => apiCall(baseURL, endpoint, config);

const callToMyAPI = curriedApiCall("https://myapi.com");

const getUser = callToMyAPI("/user");

const getPosts = callToMyAPI("/posts");

getUser({ headers: { "Authorization": "Bearer my_token" } });
getPosts({ headers: { "Authorization": "Bearer my_token" } });
