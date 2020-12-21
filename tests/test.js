const User = require('../Model/user');
const SendMessage =  require('../Model/message');

test('alice publishes post and sees in time line', async () => {
    const alice = new User('alice');
  const newMessage = new SendMessage('I love the weather today.');
  alice.publishNewMessage(newMessage);
expect(alice.userTimeline.messages).not.toBe(null);
})

test('alice views bobs timeline', async () => {
    const alice = new User('alice');
    const bob = new User('bob');
    const newMessage1 = new SendMessage('Darn! We lost!');
    bob.publishNewMessage(newMessage1);
    const newMessage2 = new SendMessage('Good game though.');
    bob.publishNewMessage(newMessage2);
    expect(alice.readMessages(bob)).toHaveLength(2);
})

test('charlie subscribes to alice and bob, views message', async () => {
    const alice = new User('alice');
    const newMessage = new SendMessage('I love the weather today.');
    alice.publishNewMessage(newMessage);
    const bob = new User('bob');
    const newMessage1 = new SendMessage('Darn! We lost!');
    bob.publishNewMessage(newMessage1);
    const newMessage2 = new SendMessage('Good game though.');
    bob.publishNewMessage(newMessage2);
    const charlie = new User('charlie');
    charlie.subscribeTo(alice);
    charlie.subscribeTo(bob);
    expect(charlie.subscriptions).toHaveLength(2);
    expect(charlie.subscriptionsTimeLine()).toHaveLength(3);
    expect(charlie.userTimeline.messages).not.toBe(null);
})




