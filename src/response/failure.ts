import { HTTPFailure } from '../types'
import { buildResponse } from './response'

const failure = ({ statusCode, message, name }: HTTPFailure) => {
  if (name === 'ValidationError') {
    return buildResponse(400, { message })
  }
  return statusCode
    ? buildResponse(statusCode, { message })
    : buildResponse(500, { message })
}

export default failure