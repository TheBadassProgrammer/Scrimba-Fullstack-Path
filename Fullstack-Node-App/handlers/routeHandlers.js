import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import sanitizeHtml from 'sanitize-html';

export async function handleGet(res) {
  const data = await getData()
  const content = JSON.stringify(data)
  sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {

  try {
    const parsedBody = await parseJSONBody(req)
    const sanitizedBody = Object.fromEntries(
      Object.entries(parsedBody).map(([key, value]) => [key, sanitizeHtml(value, {
        allowedTags: ['b'],
        allowedAttributes: []
        })])    
    )
    await addNewSighting(sanitizedBody)
    sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))
  } catch (err) {
    sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
  }

}


