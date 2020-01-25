import { JsonBody } from '../types'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

const buildResponse = (statusCode: number, body: JsonBody) => ({
  statusCode,
  headers,
  body: JSON.stringify(body)
})

export { buildResponse }
