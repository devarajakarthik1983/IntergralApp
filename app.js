const express = require('express');
const moment = require('moment');

const User = require('./Model/user');
const SendMessage =  require('./Model/message');

let port = 3000;

const app = express();

app.use(express.json());

userMessage = (name, message) =>{
  const newName = new User(name);
  const newMessage = new SendMessage(message);
  newName.publishNewMessage(newMessage);
  return newName;
};

app.use('/alice' , (req,res,next)=>{
  const alice = userMessage('alice', 'I love the weather today.');
  res.status(200).json(alice.readMessages(alice));
})

 app.use('/alice2bob' ,  async(req,res,next)=>{
  const bob = userMessage('bob', 'Darn! We lost!');
 await setTimeout(()=>{
  const newMessage2 = new SendMessage('Good game though.');
  bob.publishNewMessage(newMessage2);
  const alice = new User('alice');
   const messages = alice.readMessages(bob);
  const formattedMessages = messages.map((msg)=>{
    return {
      _id:msg._id,
      messageText:msg.messsageText,
      dateTime: moment(msg.createdDateTime, 'MMMM Do YYYY, h:mm:ss a').fromNow(true) + ' ago'

    }
  })
res.status(200).json(formattedMessages);
 },1 * 60 * 1000)
  
})

app.use('/charlie' , async(req,res,next)=>{
  const alice = userMessage('alice', 'I love the weather today.');
  const bob = userMessage('bob', 'Darn! We lost!');
  await setTimeout(()=>{
    const newMessage3 = new SendMessage('New second message');
    bob.publishNewMessage(newMessage3);
    const charlie = userMessage('charlie', 'I\'m in New York today! Anyone wants to have a coffee?');
    charlie.readMessages(charlie);
    charlie.subscribeTo(alice);
    charlie.subscribeTo(bob);
    const messages = charlie.subscriptionsTimeLine();
    const formattedMessages = messages.map((msg)=>{
      return {
        user: msg.user,
        message: msg.message,
        createDateTime: moment(msg.createDateTime, 'MMMM Do YYYY, h:mm:ss a').fromNow(true) + ' ago'
      }
    })
    res.status(200).json(formattedMessages);
  }, 1 * 60 * 1000);
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


