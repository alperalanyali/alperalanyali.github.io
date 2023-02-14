// function send email click

const contactForm = document.getElementById('contactform');
function sendMsg(e) {
    e.preventDefault();
    debugger;
    const name = document.getElementById('name'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        msg = document.getElementById('message');

    Email.send({
        Host: "smtp.elasticemail.com",        
        Username: "alanyalialper@gmail.com",
        Password: "64647041AAE3647ACCA43731CA8EA90B384B",
        Port:'2525',
        To: 'alanyalialper@gmail.com',
        From: email.value,
        Subject: subject.value,
        Body: msg.value
    }).then(
        message => alert(message)
    )
};

// add the eventListener submit
contactform.addEventListener('submit', sendMsg);
