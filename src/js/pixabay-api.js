export const requestFetch = inputValueRequest => {
  return fetch(
    `https://pixabay.com/api/?key=45720835-cd950b20c56733b9244c71a24&image_type=photo&orientation=horizontal&q=${inputValueRequest}&safesearch=true&per_page=9`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
