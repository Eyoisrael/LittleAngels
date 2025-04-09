
function toggleToggler() {
    const toggler = document.querySelector('.toggler');
    toggler.classList.toggle('active');
  }

  document.addEventListener("DOMContentLoaded", function() {
    var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"]; // Add the filenames of your images here
    var currentIndex = 0;
    var backgroundContainer = document.getElementById("background-container");
    var changeBtn = document.getElementById("change-btn");
    var indicatorsContainer = document.getElementById("indicators");
    var writeUps = document.querySelectorAll('.backgroundImageWriteUp');
    var headerContents = [
      "Exciting Learning Adventures Await!",
      "Nurturing Tomorrow's Leaders",
      "A Safe and Supportive Environment",
      "Fostering a Love for Learning"
    ];
    var bodyContents = [
      "At Little Angels Montesorri, we believe that every child's educational journey should be filled with excitement and wonder. Our dedicated team of teachers creates a vibrant learning environment where curiosity is encouraged, and exploration is celebrated. From interactive science experiments to creative arts and crafts, every day at Little Angels Montesorri is an adventure waiting to happen!",
      "We are committed to nurturing the leaders of tomorrow. At Little Angels Montesorri, we understand that each child is unique and has their own talents and strengths. Through personalized attention and a supportive community, we empower our students to discover their potential and develop essential leadership skills such as communication, collaboration, and critical thinking. Together, we're shaping confident, compassionate leaders who will make a positive impact on the world.",
      "The safety and well-being of our students are our top priorities. At Little Angels Montesorri, we provide a warm and welcoming atmosphere where every child feels valued and respected. Our dedicated staff ensures that our school is a safe and supportive environment where students can thrive academically, socially, and emotionally. With a strong emphasis on kindness and inclusion, we foster friendships that last a lifetime and create memories that our students will cherish forever.",
      "At Little Angels Montesorri, we believe that learning should be a joyful and lifelong pursuit. We're passionate about instilling a love for learning in our students by making education engaging, meaningful, and fun! From exciting field trips to captivating storytelling sessions, we inspire curiosity and ignite imaginations. Our goal is not just to teach students what to learn, but also how to learn, equipping them with the skills and enthusiasm they need to embrace learning as a lifelong adventure."
    ];
  
    // Initial setup of indicators
    for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement("div");
      indicator.classList.add("indicator");
      if (i === currentIndex) indicator.classList.add("active");
      indicator.setAttribute("data-index", i);
      indicatorsContainer.appendChild(indicator);
    }
  
    function changeBackground() {
      backgroundContainer.style.backgroundImage = "url('" + images[currentIndex] + "')";
      currentIndex = (currentIndex + 1) % images.length;
  
      // Update active indicator
      var indicators = document.querySelectorAll(".indicator");
      indicators.forEach(function(indicator, index) {
        indicator.classList.remove("active");
        if (index === currentIndex) indicator.classList.add("active");
      });

       // Update active write-up
       writeUps.forEach(function(writeUp, index) {
        writeUp.classList.remove("none");
        if (index === currentIndex) writeUp.classList.add("none");
    });

      // Update active write-up
      writeUps.forEach(function(writeUp, index) {
        writeUp.querySelector('.backgroundImageWriteUpHeader').innerText = headerContents[currentIndex];
        writeUp.querySelector('.backgroundImageWriteUpBody').innerText = bodyContents[currentIndex];
      });
    

    }

  
    // Change background image when button is clicked
    changeBtn.addEventListener("click", changeBackground);
  
    // Change background image every 5 seconds (adjust as needed)
    setInterval(changeBackground, 5000);


 });

  

  
  window.addEventListener('load', function() {
    setTimeout(function() {
      var writeUp = document.querySelector('.backgroundImageWriteUpHeader');
      writeUp.style.top = '9rem'; // Adjust the value to control the final position
      writeUp.style.left = '38.5rem';
    }, 3000); // 5000 milliseconds = 5 seconds
    
  });

  window.addEventListener('load', function() {
    setTimeout(function() {
      var writeUp = document.querySelector('.backgroundImageWriteUpBody');
      writeUp.style.top = '13rem'; // Adjust the value to control the final position
      writeUp.style.left = '41.3rem';
    }, 3000); // 5000 milliseconds = 5 seconds
    
  });

  window.addEventListener('load', function() {
    setTimeout(function() {
      var writeUp = document.querySelector('.show-more');
      writeUp.style.top = '18rem'; // Adjust the value to control the final position
      writeUp.style.left = '26.4rem';
    }, 3000); // 5000 milliseconds = 5 seconds
    
  });

  function toggleBody() {
    var body = document.querySelector('.backgroundImageWriteUpBody');
    var button = document.querySelector('.show-more');
    if (body.style.height === 'auto') {
        body.style.height = '3rem';
        button.classList.remove('clicked');
        button.innerText = "Show More";
    } else {
        body.style.height = 'auto';
        button.classList.add('clicked');
        button.innerText = "Show Less";
    }
}

document.getElementById("searchButton").addEventListener("click", function() {
  document.getElementById("searchDialog").style.display = "block";
});

 // Define the mapping of keywords to URLs
 var urlMap = {
  "home": "home.html",
  "about": "aboutUs.html",
  "contact": "contactUs.html",
  "academics": "academics.html",
  "admission": "admission.html",
  "gallery": "gallery.html"
  // Add more mappings as needed
};

document.getElementById("searchInput").addEventListener("input", function() {
  var searchTerm = this.value.toLowerCase();
  var searchSuggestions = document.getElementById("searchSuggestions");
  searchSuggestions.innerHTML = ""; // Clear previous suggestions
  for (var key in urlMap) {
      if (key.startsWith(searchTerm)) {
          var option = document.createElement("option");
          option.value = key;
          searchSuggestions.appendChild(option);
      }
  }
});

document.getElementById("searchSubmit").addEventListener("click", function() {
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();
  var elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a[href]");
  var searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = ""; // Clear previous search results
  var found = false;
  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var text = element.textContent.toLowerCase();
      var href = element.getAttribute("href");
      if (text.includes(searchTerm) || (href && href.toLowerCase().includes(searchTerm))) {
          found = true;
          var searchResult = document.createElement("div");
          searchResult.classList.add("searchResult");
          var trimmedText = element.textContent.trim().substring(0, 50); // Truncate text to 50 characters
          var link = document.createElement("a");
          link.textContent = trimmedText + "...";
          link.title = element.textContent; // Show full text on hover
          link.href = urlMap[searchTerm] ? urlMap[searchTerm] : (href ? href : "#" + element.id);
          searchResult.appendChild(link);
          searchResults.appendChild(searchResult);
      }
  }
  if (!found) {
      alert("No match found!");
  }
});


// const buttonContainer = document.getElementById('buttonContainer');
// const galleryContainer = document.getElementById('galleryContainer');

// buttonContainer.addEventListener('mouseover', () => {
//   galleryContainer.style.display = 'flex';
// });

// buttonContainer.addEventListener('mouseleave', () => {
//   galleryContainer.style.display = 'none';
// });

