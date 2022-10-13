import createError from 'http-errors'

/**
 * Get user sub from APIGatewayEvent
 * Throw error if event.requestContext.identity.cognitoAuthenticationProvider missing
 */
const getUserSubFromEvent = (event: AWSLambda.APIGatewayEvent): string => {
  const { cognitoAuthenticationProvider } = event.requestContext.identity
  if (cognitoAuthenticationProvider) {
    return cognitoAuthenticationProvider.split(':')[2]
  }
  throw new createError.BadRequest('Invalid user sub')
}

/**
 * Get body from APIGatewayEvent.
 * Throw error if event.body missing.
 */
const getBodyAsJSON = (event: AWSLambda.APIGatewayEvent) => {
  if (event.body) {
    return JSON.parse(event.body)
  }
  throw new createError.BadRequest('Invalid event body')
}

/**
 * Get path parameter from APIGatewayEvent.
 * Throw error if event.pathParameters missing.
 */
const getPathParameter = (event: AWSLambda.APIGatewayEvent, parameter: string) => {
  if (event.pathParameters) {
    return event.pathParameters[parameter]
  }
  throw new createError.BadRequest(`Invalid path parameter ${parameter}`)
}

export { getUserSubFromEvent, getBodyAsJSON, getPathParameter }
