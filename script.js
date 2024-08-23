var backgroundcolors = ['#4BABF1', '#06BD91', '#F4417A', '#A992E0', '#E6D2BB'];
var backgroundcolors2 = ['#4BABF1', '#06BD91', '#F4417A', '#A992E0', '#E6D2BB'];
var fontcolors = ['#A98F92', '#E6D2BB', '#E6D2BB', '#E6D2BB', '#DD3AA6', '#E6D2BB'];
var titlecolors = ['#5363F2', '#A9992E', '#FF001F', '#DD3AA6', '#A98F92'];
var boxcolors = ['#E6D2BB', '#E6D2BB', '#E6D2BB', '#D1A5D7', '#DDA8A1'];
var bodyswirls = ['BlueSwirl.png', 'GreenSwirl.png', 'RedSwirl.png', 'PurpleSwirl.png', 'BeigeSwirl.png'];
var currentIndex = 0;
var currentIndex1 = -1;
function changeBackgroundColor() {
    var body = document.body;
    var button = document.querySelector('button');
    var staffCont = document.querySelectorAll('.dp-vr');
    var link = document.querySelectorAll('a');
    var dropbtnhover = document.querySelectorAll('.dropbtn');
    var swirl = document.querySelector('.body-swirl');
    var count = document.querySelector('.counter');
    var dpbox = document.querySelectorAll('.box-main'); 
    var headline = document.querySelector('.news-ticker')
    var headline2 = document.querySelector('.static-text');
    currentIndex1 = currentIndex;
    body.style.backgroundColor = backgroundcolors[currentIndex];
    swirl.style.backgroundImage = 'url(' + bodyswirls[currentIndex] + ')';
    button.style.backgroundColor = titlecolors[currentIndex];
    count.style.backgroundColor = titlecolors[currentIndex];
    headline.style.backgroundColor = boxcolors[currentIndex]; 
    headline2.style.backgroundColor = boxcolors[currentIndex]; 
    link.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors[currentIndex1];
        });
        link.addEventListener('mouseleave', function () {
            link.style.color = '#000000';
            link.style.backgroundColor = 'transparent';
        });
    });

    staffCont.forEach(function (staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex1];
    });
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex]; 
    });
    dropbtnhover.forEach(function (dropbtnhover) {
        dropbtnhover.addEventListener('mouseenter', function () {
            if (currentIndex1 >= 0) {
                dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            }
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener('mouseleave', function () {
            dropbtnhover.style.color = '#000000';
            dropbtnhover.style.backgroundColor = 'transparent';
        });
    });
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
}


var currentIndex1 = -1;
function changeBackgroundColor2() {
    var body = document.body;
    var button = document.querySelector('button');
    var header = document.querySelector(".wwa-header");
    var whoweare = document.querySelector(".mission");
    var staff = document.querySelectorAll('.staff');
    var link = document.querySelectorAll('a');
    var staffCont2 = document.querySelectorAll('.dp-vr');
    var dropbtnhover = document.querySelectorAll('.dropbtn');
    var staffCont = document.querySelectorAll('.staff-content');
    //var contact = document.querySelector('.contact-box');
    var dpbox = document.querySelectorAll('.box-main');
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    //contact.style.backgroundColor = boxcolors[currentIndex];
    whoweare.style.backgroundColor = backgroundcolors[currentIndex];
    var phonehead = document.querySelector('.dropdown-toggle-phone'); 
    staff.forEach(function (staff) {
        staff.style.backgroundColor = boxcolors[currentIndex];
        staff.style.backgroundImage = 'url(' + bodyswirls[currentIndex] + ')';
        staff.style.boxShadowColor = boxcolors[currentIndex - 1];
    });
    staffCont.forEach(function (staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex]; 
    });
    dropbtnhover.forEach(function (dropbtnhover) {
        dropbtnhover.addEventListener('mouseenter', function () {
            if (currentIndex1 >= 0) {
                dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            }
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener('mouseleave', function () {
            dropbtnhover.style.color = '#000000';
            dropbtnhover.style.backgroundColor = 'transparent';
        });
    });
    link.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors2[currentIndex1];
        });
        link.addEventListener('mouseleave', function () {
            link.style.color = '#000000';
            link.style.backgroundColor = 'transparent';
        });
    });
    staffCont2.forEach(function (staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    phonehead.style.backgroundColor = titlecolors[currentIndex]; 
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}

var currentIndex1 = -1;
function changeBackgroundColor4() {
    var body = document.body;
    var button = document.querySelector('button');
    var sub = document.querySelectorAll('.submit');
    var header = document.querySelector(".wwa-header");
    var link = document.querySelectorAll('a');
     var dropbtnhover = document.querySelectorAll('.dropbtn');
     //issue w contact
     var contact = document.querySelectorAll('.contact-box');
     var homeCollegeBox = document.querySelector(".home-college-box");
     var contactForm1 = document.querySelectorAll(".contact-form1");
    var events = document.querySelectorAll(".events");
     var volun = document.querySelector(".want");
    var dpbox = document.querySelectorAll('.box-main'); 
    var phonehead = document.querySelector('.dropdown-toggle-phone'); 
    volun.style.backgroundColor = titlecolors[currentIndex]; 
    body.style.backgroundColor = backgroundcolors[currentIndex];
//     /*button.forEach((press)=>{
//         press.style.backgroundColor = titlecolors[currentIndex];
//     }); */
     button.style.backgroundColor = titlecolors[currentIndex]; 
     phonehead.style.backgroundColor = titlecolors[currentIndex]; 
    sub.forEach((sub)=>{
        sub.style.backgroundColor = titlecolors[currentIndex];
        sub.style.color = boxcolors[currentIndex];
     });     

     contact.forEach((contact)=>{
        contact.style.backgroundColor = titlecolors[currentIndex];
        contact.style.color = boxcolors[currentIndex];
     });  

    header.style.backgroundColor = boxcolors[currentIndex];
    homeCollegeBox.style.backgroundColor = backgroundcolors[currentIndex];
     link.forEach(function (link) {
         link.addEventListener('mouseenter', function () {
             link.style.color = fontcolors[currentIndex];
             link.style.backgroundColor = backgroundcolors2[currentIndex1];
         });
         link.addEventListener('mouseleave', function () {
             link.style.color = '#000000';
             link.style.backgroundColor = 'transparent';
         });
     });
     dpbox.forEach((box)=>{
         box.style.backgroundColor = titlecolors[currentIndex]; 
     });
     dropbtnhover.forEach(function (dropbtnhover) {
         dropbtnhover.addEventListener('mouseenter', function () {
             if (currentIndex1 >= 0) {
                 dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
             }
             dropbtnhover.style.color = fontcolors[currentIndex];
         });
         dropbtnhover.addEventListener('mouseleave', function () {
             dropbtnhover.style.color = '#000000';
             dropbtnhover.style.backgroundColor = 'transparent';
         });
     });
     contactForm1.forEach(function (contactForm1) {
         contactForm1.style.backgroundColor = boxcolors[currentIndex];
    });
     events.forEach((event) => {
        event.style.backgroundColor = boxcolors[currentIndex];
    });
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}

var currentIndex1 = -1;
function changeBackgroundColor3() {
    var body = document.body;
    var button = document.querySelector('button');
    var header = document.querySelector(".wwa-header");
    var whoweare = document.querySelectorAll(".mission");
    var staff = document.querySelectorAll('.staff');
    var link = document.querySelectorAll('a');
    var staffCont = document.querySelectorAll('.staff-content');
    var dpvr = document.querySelectorAll('.dp-vr'); 
    //var contact = document.querySelector('.contact-box');
    var phonehead = document.querySelector('.dropdown-toggle-phone'); 
    var want = document.querySelector('.want');
    var homeCollegeBox = document.querySelector(".home-college-box");
    var colleges = document.querySelectorAll('.colleges');
     var dropbtnhover = document.querySelectorAll('.dropbtn');
     var dpbox = document.querySelectorAll('.box-main'); 
    homeCollegeBox.style.backgroundColor = backgroundcolors[currentIndex];
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    want.style.backgroundColor = titlecolors[currentIndex];
    //contact is culpirt
    //contact.style.backgroundColor = boxcolors[currentIndex];
     whoweare.forEach(function (who) {
         who.style.backgroundColor = backgroundcolors[currentIndex];
     });
     dpvr.forEach(function (dp) {
        dp.style.backgroundColor = titlecolors[currentIndex];
    });
     staff.forEach(function (staff) {
         staff.style.backgroundColor = boxcolors[currentIndex];
         staff.style.backgroundImage = 'url(' + bodyswirls[currentIndex] + ')';
         staff.style.boxShadowColor = boxcolors[currentIndex - 1];
     });
     staffCont.forEach(function (staffCont) {
         staffCont.style.backgroundColor = titlecolors[currentIndex];
     });
     link.forEach(function (link) {
         link.addEventListener('mouseenter', function () {
             link.style.color = fontcolors[currentIndex];
             link.style.backgroundColor = backgroundcolors2[currentIndex1];
         });
         link.addEventListener('mouseleave', function () {
             link.style.color = '#000000';
             link.style.backgroundColor = 'transparent';
         });
     });
     dropbtnhover.forEach(function (dropbtnhover) {
         dropbtnhover.addEventListener('mouseenter', function () {
             if (currentIndex1 >= 0) {
                 dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
             }
             dropbtnhover.style.color = fontcolors[currentIndex];
         });
         dropbtnhover.addEventListener('mouseleave', function () {
             dropbtnhover.style.color = '#000000';
             dropbtnhover.style.backgroundColor = 'transparent';
         });
     });
     colleges.forEach(function (college) {
         college.style.backgroundColor = boxcolors[currentIndex];
     });
     dpbox.forEach((box)=>{
         box.style.backgroundColor = titlecolors[currentIndex]; 
     });
     phonehead.style.backgroundColor = titlecolors[currentIndex]; 
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length; 
}


var currentIndex1 = -1;
function changeBackgroundColor2() {
    var body = document.body;
    var button = document.querySelector('button');
    var header = document.querySelector(".wwa-header");
    var whoweare = document.querySelector(".mission");
    var staff = document.querySelectorAll('.staff');
    var link = document.querySelectorAll('a');
    var staffCont2 = document.querySelectorAll('.dp-vr');
    var dropbtnhover = document.querySelectorAll('.dropbtn');
    var staffCont = document.querySelectorAll('.staff-content');
    //var contact = document.querySelector('.contact-box');
    var dpbox = document.querySelectorAll('.box-main');
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    //contact.style.backgroundColor = boxcolors[currentIndex];
    whoweare.style.backgroundColor = backgroundcolors[currentIndex];
    var phonehead = document.querySelector('.dropdown-toggle-phone'); 
    staff.forEach(function (staff) {
        staff.style.backgroundColor = boxcolors[currentIndex];
        staff.style.backgroundImage = 'url(' + bodyswirls[currentIndex] + ')';
        staff.style.boxShadowColor = boxcolors[currentIndex - 1];
    });
    staffCont.forEach(function (staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex]; 
    });
    dropbtnhover.forEach(function (dropbtnhover) {
        dropbtnhover.addEventListener('mouseenter', function () {
            if (currentIndex1 >= 0) {
                dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            }
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener('mouseleave', function () {
            dropbtnhover.style.color = '#000000';
            dropbtnhover.style.backgroundColor = 'transparent';
        });
    });
    link.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors2[currentIndex1];
        });
        link.addEventListener('mouseleave', function () {
            link.style.color = '#000000';
            link.style.backgroundColor = 'transparent';
        });
    });
    staffCont2.forEach(function (staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    phonehead.style.backgroundColor = titlecolors[currentIndex]; 
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}

var currentIndex1 = -1;
var backgroundcolors2 = ['#4BABF192', '#06BD9192', '#F4417A92', '#A992E092', '#A98F9292'];
var titlecolors2 = ['#5363F292', '#A9992E92', '#FF001F92', '#DD3AA692', '#A98F9292'];
function changeBackgroundColor5() {
    var body = document.body;
    var button = document.querySelector('button');
    var header = document.querySelector(".wwa-header");
    var link = document.querySelectorAll('a');
    var dropbtnhover = document.querySelectorAll('.dropbtn');
    var staffCont2 = document.querySelectorAll('.dp-vr');
    var count = document.querySelector('.counter');
    var homeCollegeBox = document.querySelector(".home-college-box");
    var dpbox = document.querySelectorAll('.box-main'); 
    var headline = document.querySelector('.news-ticker');
    var headline2 = document.querySelector('.static-text');
    var boxesCollegePage = document.querySelectorAll('.boxes-college-page'); 
    var boxesOther = document.querySelectorAll('.boxes-other'); 
    var cont = document.querySelectorAll('.content');
    body.style.backgroundColor = backgroundcolors[currentIndex];
    boxesCollegePage.forEach((bx) => {
        bx.style.backgroundColor = backgroundcolors2[currentIndex];
    });
    cont.forEach((cont) => {
        cont.style.backgroundColor = titlecolors2[currentIndex];
    });
    boxesOther.forEach((bxs) => {
        //bxs.style.backgroundColor = "#aab0b592";
        bxs.style.borderColor = titlecolors[currentIndex];
    });
    /*button.forEach((press) => {
        press.style.backgroundColor = titlecolors[currentIndex];
    }); */
    button.style.backgroundColor = titlecolors[currentIndex]; 
    count.style.backgroundColor = titlecolors[currentIndex];
    headline.style.backgroundColor = titlecolors[currentIndex];
    headline2.style.backgroundColor = titlecolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    homeCollegeBox.style.backgroundColor = backgroundcolors[currentIndex];
    
    link.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors2[currentIndex1];
        });
        link.addEventListener('mouseleave', function () {
            link.style.color = '#000000';
            link.style.backgroundColor = 'transparent';
        });
    });

    staffCont2.forEach(function (staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex]; 
    });
    dropbtnhover.forEach(function (dropbtnhover) {
        dropbtnhover.addEventListener('mouseenter', function () {
            if (currentIndex1 >= 0) {
                dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            }
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener('mouseleave', function () {
            dropbtnhover.style.color = '#000000';
            dropbtnhover.style.backgroundColor = 'transparent';
        });
    });

    link.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors2[currentIndex1];
        });
        link.addEventListener('mouseleave', function () {
            link.style.color = '#000000';
            link.style.backgroundColor = 'transparent';
        });
    });

    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}



/*function showCollege() {
    <>
        <div class="dropdown" style="padding-right: 4vw;">
            <h3 class="name3"><button class="dropbtn"> VOTING INFORMATION </button> </h3>
            <div class="dropdown-content">
                <a href="Central-Michigan-University" style="background-color:transparent;">
                    <div class="box-cmu">
                        <p> Central Michigan University </p>
                    </div>
                </a>
                <a href="Delta-College" style="background-color:transparent;">
                    <div class="box-del">
                        <p> Delta College </p>
                    </div>
                </a>
                <a href="Jackson-College" style="background-color:transparent;">
                    <div class="box-jc">
                        <p> Jackson College </p>
                    </div>
                </a>
                <a href="Kalamazoo-College" style="background-color:transparent;">
                    <div class="box-kc">
                        <p> Kalamazoo College </p>
                    </div>
                </a>
            </div>
        </div>
    </>
}*/

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function countDown() {
    //change to election day when time comes
    //var countDownDate = new Date("Aug 7, 2024 00:00:00").getTime();
    var countDownDate = new Date(Date.UTC(2024, 10, 6, 1, 0, 0)).getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("pres").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("pres").innerHTML = "Polls have closed.";
        }
    }, 1000);
}
countDown();

function form() {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById('my-form');
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission
            //const formData = new FormData(form); // Get form data
            var form = e.target; 
            //console.log(formData); 
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
                // Show success message
                document.getElementById('success-message').style.display = 'block';
                // Optionally, clear the form fields
                form.reset();
            }).catch(function(error) {
                console.error('Error!', error.message);
            });
                /*.then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text(); // Assuming the response is text
                })
                .then(data => {
                    // Handle successful response
                    alert("Form submitted successfully!");
                    console.log(data); // You can log the response data if needed
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                    alert("An error occurred. Please try again.");
                });*/
        });
    });
}

function toggleDropdown() {
    var content = document.getElementById("dropdown-content-phone");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}




/*document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    var form = event.target;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        // Show success message
        document.getElementById('success-message').style.display = 'block';
        // Optionally, clear the form fields
        form.reset();
    }).catch(function(error) {
        console.error('Error!', error.message);
    });
}); */

/*
//data
const apiUrl = 'https://api.mobilize.us/v1/organizations/:organization_id/events'; 
const apiKey = 'd635c1172c5df2675bffe1b88d3c7279f71c2d2e'; 
//retrieving event
function getEvents() {
    //fetching response to get data json
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    //getting data json
    .then(response => {
        if (!response.ok) {
            console.log("Failed to fetch data");
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    //parsing data json
    .then(data => {
        data.forEach(event => {
            const { title, description, timeslots, location } = event;
            document.write(`<h2>${title}</h2>`);
            document.write(`<p>${description}</p>`);
            if (timeslots.length > 0) {
                document.write('<h3>Timeslots:</h3>');
                timeslots.forEach(slot => {
                    document.write(`<p>Start Date: ${new Date(slot.start_date * 1000)}</p>`);
                    document.write(`<p>End Date: ${new Date(slot.end_date * 1000)}</p>`);
                    document.write(`<p>Is Full: ${slot.is_full ? 'Yes' : 'No'}</p>`);
                });
            }
            if (location) {
                document.write('<h3>Location:</h3>');
                document.write(`<p>Venue: ${location.venue}</p>`);
                document.write(`<p>Address: ${location.address_lines.join(', ')}</p>`);
                document.write(`<p>City: ${location.locality}</p>`);
                document.write(`<p>State: ${location.region}</p>`);
                document.write(`<p>Country: ${location.country}</p>`);
                document.write(`<p>Postal Code: ${location.postal_code}</p>`);
            }
        }); 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Call the function to get events
getEvents(); */




