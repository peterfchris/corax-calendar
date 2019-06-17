const accountSid = 'AC0509237054574ab9bcc74850090229f5'
const authToken = '12e8f82f98f16203e46f6c0eeef378a4'
const client = require('twilio')(accountSid, authToken)

module.exports = {
    confirmation: (req, res) => {
        const db = req.app.get('db')
        const {potential_phone} = req.body
        client.messages
            .create({
                body: 'You are set! We look forward to meeting you!',
                from: '+18573133871',
                to: potential_phone
            })
            .then(message => console.log('message.sid', message.sid))
    }

}
