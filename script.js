function submitForm() {
    var name = document.getElementById('name-app').value
    var course = "None"
    var spec = document.getElementById('spec').value
    var mail = document.getElementById('email').value
    var mno = document.getElementById('mno').value
    var dob = document.getElementById('dob').value
    var addr = document.getElementById('ta').value
    var skill = document.getElementById('skill').value
    var job = "None"
    //retrieving data
    var radio = document.getElementsByName('qualif')
    for(i=0; i<radio.length; i++) {
        if(radio[i].checked) {
            course = radio[i].value
        }
    }
    var chk = document.getElementsByName('job')
    var lst = []
    for(i=0; i<chk.length; i++) {
        if(chk[i].checked) {
            lst.push(chk[i].value)
        }
    }
    job = lst
    if(job.length==0) {
        job = "None"
    }
    //functions email
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //html code
    if(name=="" || course=="None" || job=="None" || spec=="None" || mail=="" || mno=="" || dob=="" || addr=="" || skill=="") {
        alert("Fill out all the fields")
    } 
    else if(!mail.match(validRegex)) {
        alert("Invalid Email Address");
    } else {
    document.write(`
<html>
    <head>
        <title>Page Title</title>
        <style>
* {
     margin:0;
 }
body {
    background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYPT2p3P675TxnoIrFJiyuBy8PxyVS4wpxQ&usqp=CAU");
    
}
.head {
    padding:15px;
    text-align:center;
    color:white;
}
.head text {
    font-size:35px;
    text-shadow:1px 1px 3px white;
}
.head em {
    font-family:Fantasy;
}
#main-hr {
    width:100px;
    height:1px;
    margin:10px;
}
#sub-hr {
    width:70px;
    height:0.5px;
    margin:10px;
}
.main {
    border:1px solid rgba(255,255,255,0.1);
    backdrop-filter:blur(20px);
    margin:10px;
    border-radius:15px;
    text-align:center;
    box-shadow:1px 1px 5px white;
    color:white;
}
.main h2 {
    margin:5px;
    font-family:serif;
    color:white;
    border-radius:6px;
}
.al {
    background:rgba(204, 179, 255, 0.2);
    color:white;
    font-size:13px;
    font-family:serif;
    width:80%;
    margin:3px;
    margin-left:auto;
    margin-right:auto;
    border-radius:10px;
    padding:10px;
}
.main table {
    color:white;
    width:90%;
    margin:20px;
    margin-left:auto;
    margin-right:auto;
}
caption {
    font-family:Georgia;
}
tr td{
    padding:5px 10px;
    border-radius:3px;
}
tr:nth-child(even) {
    background-color:rgba(229, 204, 255,0.2);
}
tr:nth-child(odd) {
    background-color:rgba(163, 77, 255,0.3);
}
tr .att {
    text-align:right;
}

.foot {
    color:white;
    margin:10px;
}
.foot p {
    text-align:center ;
    font-family:georgia;
}
.foot p a {
    color:white;
    text-decoration:none;
}
.btn {
    width:100px;
    height:35px;
    border:none;
    font-size:16px;
    font-family:Serif;
    color:white;
    margin:10px;
    border-radius:5px;
    box-shadow:1px 1px 3px gray;
}
#fs {
    background:rgb(150, 51, 255);
}
#fa {
    background:rgb(194, 153, 255);
}
#final,#fill {
    background:none;
    font-size:17px;
    color:yellowgreen;
    display:none;
}
#fill {
    background:rgba(204, 179, 255, 0.2);
    text-align:center;
    width:100%;
}
#ok {
    background:rgb(150, 51, 255);
}
/* Responsiveness */
@media screen and (min-width:600px) {
    .main {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }
}
@media screen and (min-width:800px) {
    .main {
        width: 45%;
        margin-left: auto;
        margin-right: auto;
    }
}
@media screen and (max-width:435px) {
    .head text {
        font-size: 25px;
    }
    .head em {
        font-size: 10px;
    }
}
        </style>
    </head>
    <body>
        <section class="head">
            <div>
                <text><strong>WORKMORE TECH</strong></text><br>
                <em>An ISO certified Software Company</em>
            </div>
        </section>
        <center><hr id="main-hr"color="white"></center>
        <section class="main" id="mainsec">
            <h2 id="ver">Verify Your Details</h2>
            <div class="al" id="chk-msg"><i>Please re-check your details before getting submitted<br>If any mistakes found, click on <b>Fill Again</b> below</i></div>
            <center><hr id="sub-hr" color="white"></center>
            <table class="details">
                <caption>Applicant Details</caption>
                <tr>
                    <td class="att">Name</td>
                    <td>`+name+`</td>
                </tr>
                <tr>
                    <td class="att">Qualification</td>
                    <td>`+course+`</td>
                </tr>
                <tr>
                    <td class="att">Specialization</td>
                    <td>`+spec+`</td>
                </tr>
                <tr>
                    <td class="att">E-mail ID</td>
                    <td>`+mail+`</td>
                </tr>
                <tr>
                    <td class="att">Mobile No</td>
                    <td>`+mno+`</td>
                </tr>
                <tr>
                    <td class="att">Date of Birth</td>
                    <td>`+dob+`</td>
                </tr>
                <tr>
                    <td class="att">Address</td>
                    <td>`+addr+`</td>
                </tr>
                <tr>
                    <td class="att">Skill</td>
                    <td>`+skill+`</td>
                </tr>
                <tr>
                    <td class="att">Jobs preferred</td>
                    <td>`+job+`</td>
                </tr>
            </table>
            <div class="al" id="sub-msg"><i>Click on <b>Submit</b> button to submit your details finally</i></div>
            <div class="al" id="final">Your application is verified and submitted successfully</div>
            <button onclick="alert('Your records have been cleared.  -WorkMoreTech'); document.getElementById('mainsec').style.display='none';document.getElementById('fill').style.display = 'inline-block';" class="btn" id="fa">Fill Again</button>
                <button onclick="document.getElementById('final').style.display = 'inline-block';alert('Thank You. -WorkMoreTech'); document.getElementById('fa').style.display='none';document.getElementById('fs').style.display='none'; document.getElementById('sub-msg').style.display='none'; document.getElementById('chk-msg').style.display='none'; document.getElementById('ver').innerHTML = 'Application Verified';" class="btn" type="submit" id="fs">Submit</button>
        </section>
        <div class="al" id="fill">Resumbit your form<br><a href="index.html"><button class="btn" id="ok">OK</button></a></div>
        <section class="foot">
            <p>&copy All Rights Reserved | <a href="https://www.sololearn.com/profile/18097926/?ref=app">Eswar V</a> | 2024</p>
        </section>
    </body>
</html>
    `);
    }
}
function welcome(){
    document.getElementById('box').style.display="none"
    document.getElementById('welc').style.filter="none"
    document.getElementById('welc').style.pointerEvents="auto"
}
function clearForm() {
    alert('All your details are cleared, Register again')
}