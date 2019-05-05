
const getUserSubFromEvent = (event: AWSLambda.APIGatewayEvent): string => {
  const { cognitoAuthenticationProvider } = event.requestContext.identity
  if (cognitoAuthenticationProvider) {
    return cognitoAuthenticationProvider.split(':')[2]
  }
  throw new Error('Failed to read user sub from event')
}

export {
  getUserSubFromEvent
}