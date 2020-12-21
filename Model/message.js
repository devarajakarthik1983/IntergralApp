const moment = require('moment');

class SendMessage {
 _id;
 messsageText;
 createdDateTime;

 static _nextId = 0;
 static nextId(){
     return SendMessage._nextId++;
 }

 constructor(newText){
     this.messsageText = newText;
     this._id = SendMessage.nextId();
     this.createdDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
 }

}

module. exports = SendMessage;