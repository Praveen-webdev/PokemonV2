export default function getData(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Response not ok!');
    })
    .then((results) => {
      console.log(url, results);
      return results;
    })
    .catch((err) => {
      console.error('error while fetching :', url, err);
      throw err;
    });
}
