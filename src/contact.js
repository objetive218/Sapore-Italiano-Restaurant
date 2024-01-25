export default function contact() {
  let div = document.createElement("div");
  // const form = document.createElement("form");
  div.innerHTML = `<h3>Contact</h3>
    <p>(012)3456789</p>
    <p>Fake direcction 1234</p> 
    <p>info@fakemail.com</p>
    <div style="width: 100%"><iframe width="100%" height="480px"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
    `;
  //div.appendChild(divMap);
  div.setAttribute("id", "boxCont")
  return div;
}
