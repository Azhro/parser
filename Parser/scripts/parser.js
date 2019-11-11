// var text, parser, xmlDoc;

// text =
//   "https://news.google.com/rss/search?cf=all&pz=1&q=league&hl=en-US&gl=US&ceid=US:en";

// parser = new DOMParser();
// xmlDoc = parser.parseFromString(text, "text/xml");

// document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName(
//   "title"
// )[0].childNodes[0].nodeValue;

var search = () => {
  var x = document.getElementById("keyword").value;
  if (x == "") {
    alert("must be filled");
    return false;
  }
  console.log(x);
};
