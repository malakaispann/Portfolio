import * as dotenv from 'dotenv'

dotenv.config()

let GLOBAL =  {
    mailer_addr: process.env.PASSTHROUGH_EMAIL ?? '',
    mailer_pw: process.env.PASSTHROUGH_EMAIL_PASS ?? '',

    email_addr: process.env.PROFESSIONAL_EMAIL ?? '',
}

export default GLOBAL