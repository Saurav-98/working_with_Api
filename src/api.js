import axios from "axios";

const URL = `https://api.unsplash.com/search/photos`;
const MY_ACCESS_KEY = `y5c7YeOVk2teltsW1DGzAIvCo1k3HnGFoDh92MUZjf8`;

const searchImages = async (search_term) => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Client-ID ${MY_ACCESS_KEY}`,
    },
    params: {
      query: search_term,
    },
  });
  //   console.log(response.data.results[0].urls.small);
  //   return response.data.results[0].urls.small;
  return response.data.results;
};

export default searchImages;
