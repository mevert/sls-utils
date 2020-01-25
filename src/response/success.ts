import { JsonBody } from '../types'
import { buildResponse } from './response'

const success = (body: JsonBody) => buildResponse(200, body)

export default success
