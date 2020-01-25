import success from './success'

describe('success', () => {
  it('valid http response', () => {
    const response = success({ test: 'asdfg' })
    expect(response).toEqual({
      body: '{"test":"asdfg"}',
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: 200
    })
  })
})
