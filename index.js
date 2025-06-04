

function myFunction() {
  var request = new XMLHttpRequest();
  var userInput = document.getElementById("movieInput").value;
  userInput = userInput.toLowerCase().replace(/\s+/g, "-");

request.open("GET", "https://yts.mx/movies/" + userInput, true);  // last parameter must be true
request.responseType = "document";
request.onload = function (e) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      var a = request.responseXML.querySelector("p.hidden-md.hidden-lg");
      var links = a.querySelectorAll("a");
      links.forEach(link => {
        console.log(link.href);
        
    });    
// Build HTML string of anchor tags
      let outputHTML = "";
      links.forEach(link => {
        outputHTML += `<a href="${link.href}" target="_blank">${link.href}</a><br>`;
      });

      // Set the innerHTML to show the links
      document.getElementById("result").innerHTML = outputHTML;
    } else {
      console.error(request.status, request.statusText);
    }
  }
};
request.onerror = function (e) {
  console.error(request.status, request.statusText);
};
request.send(null);  // not a POST request, so don't send extra data
// Close the connection
}



fetch("https://yts.mx/api/v2/list_movies.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
