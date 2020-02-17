import { createEmailRequest, createHtmlEmailRequest } from './emails'

describe('Emails', () => {
  test('Create email request', () => {
    const sender = 'test@test123.fi'
    const destinationEmails = ['asdf@asdf.com']
    const message = 'this is email content'
    const subject = 'test@test123.fi'
    const emailRequest = createEmailRequest(sender, destinationEmails, subject, message)
    const expected = {
      Destination: {
        ToAddresses: destinationEmails
      },
      Message: {
        Body: {
          Text: {
            Data: message,
            Charset: 'UTF-8'
          }
        },
        Subject: {
          Data: subject,
          Charset: 'UTF-8'
        }
      },
      Source: sender
    }
    expect(emailRequest).toEqual(expected)
  })
  test('Create HTML email request', () => {
    const sender = 'test@test123.fi'
    const destinationEmails = ['asdf@asdf.com']
    const message = 'this is HTML email content'
    const subject = 'test@test123.fi'
    const emailRequest = createHtmlEmailRequest(sender, destinationEmails, subject, message)
    const expected = {
      Destination: {
        ToAddresses: destinationEmails
      },
      Message: {
        Body: {
          Html: {
            Data: message
          }
        },
        Subject: {
          Data: subject,
          Charset: 'UTF-8'
        }
      },
      Source: sender
    }
    expect(emailRequest).toEqual(expected)
  })
})
