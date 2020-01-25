/* eslint-disable max-len */
import { CreateEventMock } from '../types'

/**
 * Use this function for example when executing lambda functions in tests
 */
const executeLambda = (handler: any, event: any, context: any) =>
  new Promise((resolve, reject) => {
    handler(event, context, (err: any, response: any) => {
      if (err !== null) {
        return reject(err)
      }
      resolve(response)
    })
  })

/**
 * Create mock lambda event
 */
const createEventMock = ({ pathParameters, body, sub }: CreateEventMock) => ({
  pathParameters,
  body: JSON.stringify(body),
  requestContext: {
    identity: {
      cognitoIdentityId: 'f15c643d-a598-4ad4-97f0-b59b8fa195a0',
      cognitoAuthenticationProvider: `cognito-idp.eu-central-1.amazonaws.com/eu-central-1_RtCwnIlGR,cognito-idp.eu-central-1.amazonaws.com/eu-central-1_RtCwnIlGR:CognitoSignIn:${sub ||
        'df791fcc-24b7-4f69-be47-e82a3d183520'}`
    }
  }
})

export { executeLambda, createEventMock }
