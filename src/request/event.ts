import createError from 'http-errors'

const getUserSubFromEvent = (event: AWSLambda.APIGatewayEvent): string => {
  const { cognitoAuthenticationProvider } = event.requestContext.identity
  if (cognitoAuthenticationProvider) {
    return cognitoAuthenticationProvider.split(':')[2]
  }
  throw new createError.BadRequest('Invalid user sub')
}

const getBodyAsJSON = (event: AWSLambda.APIGatewayEvent) => {
  if (event.body) {
    return JSON.parse(event.body)
  }
  throw new createError.BadRequest('Invalid event body')
}

const getPathParameter = (event: AWSLambda.APIGatewayEvent, parameter: string) => {
  if (event.pathParameters) {
    return event.pathParameters[parameter]
  }
  throw new createError.BadRequest(`Invalid path parameter ${parameter}`)
}

export { getUserSubFromEvent, getBodyAsJSON, getPathParameter }
