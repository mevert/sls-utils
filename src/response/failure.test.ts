import failure from './failure'

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*'
}

describe('failure', () => {
  it('validation error', () => {
    const response = failure({
      statusCode: 400,
      message: 'validation failed',
      name: ''
    })
    expect(response).toEqual({
      body: '{"message":"validation failed"}',
      headers,
      statusCode: 400
    })
  })
  it('custom error status and message', () => {
    const response = failure({
      statusCode: 501,
      message: 'error'
    })
    expect(response).toEqual({
      body: '{"message":"error"}',
      headers,
      statusCode: 501
    })
  })
  it('custom error message', () => {
    const response = failure({
      message: 'error'
    })
    expect(response).toEqual({
      body: '{"message":"error"}',
      headers,
      statusCode: 500
    })
  })
})
