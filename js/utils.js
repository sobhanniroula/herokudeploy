function sendMail(senderEmail, name, message){
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'VOIYSlxWdKkb8EkHZyK5mg',
      'message': {
        'from_email': senderEmail,
        'to': [
          {
            'email': 'sobhanniroula2012@gmail.com',
            'name': 'Personal Website',
            'type': 'to'
          }
        ],
        'subject': 'New message to Personal Website' + ' from ' + name,
        'text': "Name: " + name + "\n\nEmail: " + senderEmail + 
                "\n\nMessage: " + message
      }
    }
  });
}