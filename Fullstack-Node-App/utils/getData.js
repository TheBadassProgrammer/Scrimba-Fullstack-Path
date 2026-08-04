import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData() {
  try {
    const filePath = path.join("data", "data.json")
    const data = JSON.parse( await fs.readFile(filePath, "utf8"))
    return data
  }
  catch(err){
    return []
  }
  

/*
Challenge:
1. getData() should: 
    - read the json in json.data as a string 
    - parse it to JS 
    - return the parsed data. 

   If there’s an error, it should return an empty array (think, why are we doing this?).

hint.md for help
*/

  return 'I am from getData()!'
}