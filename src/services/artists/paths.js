const pathBase = `${process.env.REACT_APP_SKIDDLE_URL}/artist`

const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`

export const artistsPath = () => pathBase;

export const artistPath = (artistId) => 
  `${pathBase}/${artistId}${apiKey}`