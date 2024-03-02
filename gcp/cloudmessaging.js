const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://your-project-id.firebaseio.com'
});

const sendPushNotification = function (title, body) {
    const message = {
        notification: {
            title: title,
            body: body
        },
        topic: 'new_entry' // Send notification to a specific topic
    };

    admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.error('Error sending message:', error);
        });
};