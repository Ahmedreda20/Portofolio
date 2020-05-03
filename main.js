
function sign(){
    var signup = document.getElementById('signup').style.display = "block";
    var container = document.getElementById('container').style.display = "block";
    var login = document.getElementById('login').style.display = "none";
    }
    function log(){
    var log = document.getElementById('login').style.display = "block";
    var container = document.getElementById('container').style.display = "block";
    var signup = document.getElementById('signup').style.display = "none";
    }
    function closeContainer(){
    var container = document.getElementById('container').style.display = "none";
    }
    function about(){
    var about = document.getElementById('aboutContainer').style.display = "block";
    }
    function closeabout(){
    var about = document.getElementById('aboutContainer').style.display = "none";
    }

    
    $(document).ready(function(){
    // Add smooth scrolling to all links
    $("#contact").on('click', function(event) {
    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    
    // Store hash
    var hash = this.hash;
    
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
    
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
    } // End if
    });
    });
    
    $('#sign').click(function(){
    $('#signup').show();
    $('.container').show();
    });
    $('#log').click(function(){
    $('#login').show();
    $('.container').show();
    $('#signup').hide();
    });
    
    function btnOpen(){
    var bar = document.getElementById('nav');   
    if ( bar.style.display === "none"){
    bar.style.display="block";
    } else{
    bar.style.display="none";
    
    }
    }   
    