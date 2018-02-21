

export const getSeededData =  (seed = 'foobar') => {
  console.info("seeded data called");
  
  return fetch(`https://randomuser.me/api?seed=${seed}`)
    .then( response => response.json() )
    .then( data =>  data.results )
    .catch(error => console.log(error));
};

export const getContacts = ( nat = 'dk', page = 1 ) => {
  console.info("seeded data called");

  return fetch(`https://randomuser.me/api?page=${page}&results=10&inc=picture,name,gender,nat,id,email,location,phone,cell&nat=${nat}`)
    .then( response => response.json() )
    .then( data =>  data.results )
    .catch(error => console.log(error));
};
