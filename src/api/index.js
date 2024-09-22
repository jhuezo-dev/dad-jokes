const headers = new Headers({
  'User-Agent': 'My Library (https://github.com/jhuezo-dev/dad-jokes)',
  'Accept': 'application/json'
});

export async function getAll() {
  const url = `https://icanhazdadjoke.com/search`;
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