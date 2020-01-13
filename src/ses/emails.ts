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

export {
  createEmailRequest
}