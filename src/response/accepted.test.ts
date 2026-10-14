import accepted from './accepted'

describe('accepted', () => {
  it('valid http response', () => {
    const response = accepted({ test: 'asdfg' })
    expect(response).toEqual({
      body: '{"test":"asdfg"}',
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: 202
    })
  })
})
