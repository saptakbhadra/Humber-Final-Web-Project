function canadaCu() {
    let cacu = "\"Illustrating the French influence, much of Canadian cuisine is rich and heavily spiced. It's also often heavy in carbohydrates, such as bread and potatoes, as well as game meats, such as hare and venison. Unsurprisingly, due to the cold climate, it also features a wide array of soups and stews.\""
    document.querySelector(".displaytext").innerHTML = `${cacu}`;
    document.querySelector(".dis").style.backgroundColor = "#E6E6FA";
    document.querySelector(".disbut").style.visibility = "visible";
}
function indiaCu() {
    let cacu = "\"Indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.\""
    document.querySelector(".displaytext").innerHTML = `${cacu}`;
    document.querySelector(".dis").style.backgroundColor = "#FFE4E1";
    document.querySelector(".disbut").style.visibility = "visible";
}
function iranianCu() {
    let cacu = "\"Typical Iranian main dishes are combinations of rice with meat, vegetables and nuts. Herbs are frequently used, along with fruits such as plums, pomegranates, quince, prunes, apricots and raisins.\""
    document.querySelector(".displaytext").innerHTML = `${cacu}`;
    document.querySelector(".dis").style.backgroundColor = "#F0F8FF";
    document.querySelector(".disbut").style.visibility = "visible";
}
function koreanCu() {
    let cacu = "\"Korean cuisine is largely based on rice, vegetables, seafood and meats. Dairy is largely absent from the traditional Korean diet. Traditional Korean meals are named for the number of side dishes that accompany steam-cooked short-grain rice.\""
    document.querySelector(".displaytext").innerHTML = `${cacu}`;
    document.querySelector(".dis").style.backgroundColor = "#FFF5EE";
    document.querySelector(".disbut").style.visibility = "visible";
}
function closeFun() {
    document.querySelector(".displaytext").innerHTML = "";
    document.querySelector(".dis").style.backgroundColor = "#c8d8e4";
    document.querySelector(".disbut").style.visibility = "hidden";
}

const toggle = (evt) => {
    const h2Element = evt.currentTarget;
    const divElement = h2Element.nextElementSibling;
  
    h2Element.classList.toggle('minus');
    divElement.classList.toggle('open');
  
    evt.preventDefault();
  };
  
  document.addEventListener('DOMContentLoaded', () => {
  
    const h2Elements = document.querySelectorAll('#faqs h2');
  
    for (let h2Element of h2Elements) {
      h2Element.addEventListener('click', toggle);
    }
    h2Elements[0].firstChild.focus();
  });
  
