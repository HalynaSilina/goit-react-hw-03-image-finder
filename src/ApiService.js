const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34876532-12c4d31b2d24c62c03fddc81b';

async function fetchImages(value, page) {
  return await fetch(
    `${BASE_URL}/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}

export default fetchImages;
