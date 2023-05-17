import axios from "axios";

const URL = `https://api.unsplash.com/search/photos`;
const MY_ACCESS_KEY = `y5c7YeOVk2teltsW1DGzAIvCo1k3HnGFoDh92MUZjf8`;

const searchImages = async () => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Client-ID ${MY_ACCESS_KEY}`,
    },
    params: {
      query: "blue cars",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
