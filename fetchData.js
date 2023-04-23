export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4a35d1de4bmsh2c2d24665c2c932p1da314jsn9cc634b231b3',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '89885819c5msh1286101e509ce25p122265jsn6b7d6473dd79',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}


