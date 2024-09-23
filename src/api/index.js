const headers = new Headers({
  'User-Agent': 'My Library (https://github.com/jhuezo-dev/dad-jokes)',
  'Accept': 'application/json'
});

export async function getAll(page, limit, term) {
  let url = 'https://icanhazdadjoke.com/search';
  let params = new URLSearchParams();

  if(page) params.append('page',page)
  if(limit) params.append('limit',limit)
  if(term) params.append('term', term)
  if(params.size) {
    url += '?' + params;
  }
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, {headers: headers});
      if(!response.ok) {
        throw new Error(`Error retrieving random joke: ${response.status}`);
      }
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error.message);
    }
  });
}

export async function getOne(id) {
  const url = `https://icanhazdadjoke.com/j/${id}`;
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, {headers: headers});
      if(!response.ok) {
        throw new Error(`Error retrieving random joke: ${response.status}`);
      }
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error.message);
    }
  });
}

export async function getRandom() {
  const url = `https://icanhazdadjoke.com/`;
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, {headers: headers});
      if(!response.ok) {
        throw new Error(`Error retrieving random joke: ${response.status}`);
      }
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error.message);
    }
  });
}