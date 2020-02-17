/**
 * Generate SES send email request
 */
const createEmailRequest = (
  senderEmail: string,
  destinationEmails: string[],
  subject: string,
  message: string
) => ({
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
  Source: senderEmail
})

/**
 * Generate SES send email request with HTML message
 */
const createHtmlEmailRequest = (
  senderEmail: string,
  destinationEmails: string[],
  subject: string,
  htmlMessage: string
) => ({
  Destination: {
    ToAddresses: destinationEmails
  },
  Message: {
    Body: {
      Html: {
        Data: htmlMessage
      }
    },
    Subject: {
      Data: subject,
      Charset: 'UTF-8'
    }
  },
  Source: senderEmail
})

export { createEmailRequest, createHtmlEmailRequest }
