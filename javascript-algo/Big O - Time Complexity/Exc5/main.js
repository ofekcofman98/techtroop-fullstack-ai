const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))
    
const emailManager = function () {
  let email = generateEmail()
    
  $.get('/recepients', function (recepients) {
      sendEmails(email, recepients)
  })
}
    
/*
    Time Complexity:

    sendEmails passes single linear through all recepients => O(n)
    if generateEmail is O(1): O(n)
*/