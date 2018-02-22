// The API uses fetch, for the moment, but should be replaces by axios.
// as axiso has better browser support
// Axios is a bit more convient and seems to handle errors better
// API:

export const getSeededData = ( (seed = 'foobar') => {
/**
 * Gets seeded data from the randomuser.me
 *  
 * @param {seed} seed is used to get a specific data set. It defaults to foobar
 */
  console.info('seeded data called');
  
  return fetch(`https://randomuser.me/api?seed=${seed}`)
    .then( response => response.json() )
    .then( data =>  data.results )
    .catch(error => console.log(error));
});

export const getContacts = ( (seed = 'foobar') => {
/**
 * Gets seeded data from the randomuser.me
 * Number ot item fetched is limited to the value of the resultCount constant 
 * @param {seed} seed is used to get a specific data set. It defaults to foobar
 */
  const resultCount = 10;
  console.info('seeded getContacts called');
  
  return fetch(`https://randomuser.me/api?results=${resultCount}&seed=${seed}`)
    .then( response => response.json() )
    .then( data =>  data.results )
    .catch(error => console.log(error));
});
