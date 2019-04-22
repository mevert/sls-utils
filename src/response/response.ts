import { IJSON } from '../types'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

const buildResponse = (statusCode: number, body: IJSON) => ({
  statusCode,
  headers,
  body: JSON.stringify(body)
})

export {
  buildResponse
}
