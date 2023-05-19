const pathBase = `${process.env.REACT_APP_SKIDDLE_URL}/events`

const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`

export const eventsPath = () => pathBase;

export const eventPath = (eventId) => 
  `${pathBase}/${eventId}${apiKey}`

export const eventsSearchPath = (searchTerm) => 
  `${pathBase}/search${apiKey}&${searchTerm}`