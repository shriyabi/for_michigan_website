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
    var homeCollegeBox = document.querySelector(".home-college-box");
    var link = document.querySelectorAll('a');
    var dropbtnhover = document.querySelector('.dropbtn');
    var swirl = document.querySelector('.body-swirl');
    var colleges = document.querySelectorAll('.colleges');
    currentIndex1 = currentIndex;
    body.style.backgroundColor = backgroundcolors[currentIndex];
    swirl.style.backgroundImage = 'url(' + bodyswirls[currentIndex] + ')';
    button.style.backgroundColor = titlecolors[currentIndex];
    homeCollegeBox.style.backgroundColor = backgroundcolors[currentIndex];
    link.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors[currentIndex - 1];
        });
        link.addEventListener('mouseleave', function () {
            link.style.color = '#000000';
            link.style.backgroundColor = 'transparent';
        });
    });
    colleges.forEach(function (college) {
        college.style.backgroundColor = boxcolors[currentIndex];
    });
    dropbtnhover.addEventListener('mouseenter', function () {
        dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
        dropbtnhover.style.color = fontcolors[currentIndex];
    });
    dropbtnhover.addEventListener('mouseleave', function () {
        dropbtnhover.style.color = '#000000';
        dropbtnhover.style.backgroundColor = 'transparent';
    });
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
}


var currentIndex1 = -1; 
function changeBackgroundColor2(){
    var body = document.body; 
    var button = document.querySelector('button'); 
    var header = document.querySelector(".wwa-header"); 
    var whoweare = document.querySelector(".mission");
    var staff = document.querySelectorAll('.staff'); 
    var link = document.querySelectorAll('a');
    var dropbtnhover = document.querySelector('.dropbtn');
    var staffCont = document.querySelectorAll('.staff-content');  
    var contact = document.querySelector('.contact-box'); 
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex]; 
    header.style.backgroundColor = boxcolors[currentIndex]; 
    contact.style.backgroundColor = boxcolors[currentIndex]; 
    whoweare.style.backgroundColor = backgroundcolors[currentIndex];
    staff.forEach(function (staff) {
        staff.style.backgroundColor = boxcolors[currentIndex];
        staff.style.backgroundImage = 'url(' + bodyswirls[currentIndex] + ')';  
        staff.style.boxShadowColor = boxcolors[currentIndex - 1];
    });
    staffCont.forEach(function (staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex]; 
    }); 
    dropbtnhover.addEventListener('mouseenter', function() {
        if (currentIndex1 >= 0) {
            dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
        }
        dropbtnhover.style.color = fontcolors[currentIndex];
    });
    dropbtnhover.addEventListener('mouseleave', function() {
        dropbtnhover.style.color = '#000000';
        dropbtnhover.style.backgroundColor = 'transparent';
    });
    link.forEach(function(link){
        link.addEventListener('mouseenter', function() {
        link.style.color = fontcolors[currentIndex];
        link.style.backgroundColor = backgroundcolors2[currentIndex1]; 
    });
    link.addEventListener('mouseleave', function() {
        link.style.color = '#000000';
        link.style.backgroundColor = 'transparent';  
    });
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
    var contact = document.querySelector('.contact-box');
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    contact.style.backgroundColor = boxcolors[currentIndex];
    whoweare.forEach(function (who) {
        who.style.backgroundColor = backgroundcolors[currentIndex];
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
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}








function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const scroll1 = document.querySelector('.scroll');
const scroll2 = document.querySelector('.scroll2');
scroll1.addEventListener('animationiteration', () => {
    scroll2.style.animationPlayState = 'running';
});
scroll2.addEventListener('animationiteration', () => {
    scroll1.style.animationPlayState = 'running';
});


var slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }