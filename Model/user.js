const UserMessageTimeline  = require('./usertimeline');

class User {
    name;
    userTimeline = new UserMessageTimeline();

    subscriptions = [];


    constructor(userName) {
        this.name = userName;
    }

    publishNewMessage(newMessage) {
       this.userTimeline.addMessageQueue(newMessage);
    }

    readMessages(user) {
        this.subscribeTo(user);
        return user.userTimeline.messages;
    }

    subscribeTo(user) {
        this.subscriptions.push(user)
    }

    subscriptionsTimeLine() {
        let messages =[];
        for (let i=0; i<this.subscriptions.length; i++){
            let user = this.subscriptions[i];
            for(let j=0; j< user.userTimeline.messages.length; j++){
                const  message = user.userTimeline.messages[j]
                messages.push({
                    user:user.name,
                    message:message.messsageText,
                    createDateTime: message.createdDateTime
                });
            }
        }
         return messages.sort(
            (a, b) => a.createDateTime > b.createDateTime
        )
    }
}

module. exports = User;