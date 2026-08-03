export function sendResponse(res, statsuCode, contentType, payload) {

  res.statusCode = statsuCode
  res.setHeader('Content-Type', contentType)
  res.end(payload)

}



/*
Challenge 2:

- Create and export a function called sendResponse().  
  What 4 things should this function take in as parameters?

*/