export const getSeededData = ( (seed = 'foo') => {
  console.info("seeded data called");
  
  return fetch(`https://randomuser.me/api?seed=${seed}`)
    .then( response => response.json() )
    .then( data =>  data.results )
    .catch(error => console.log(error));
});

export const getContacts = ( (seed = 'foo') => {
  console.info("seeded data called");
  
  return fetch(`https://randomuser.me/api?results=10&seed=${seed}`)
    .then( response => response.json() )
    .then( data =>  data.results )
    .catch(error => console.log(error));
});
