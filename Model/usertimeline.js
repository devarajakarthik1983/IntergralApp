class UserMessageTimeline {
    messages = [];

    addMessageQueue(newMessage) {
        this.messages.push(newMessage);
    }
}

module.exports = UserMessageTimeline;