import data from "./data.js";

function createCustomElement(tag, cName = "", eText = "") {
  const customTag = document.createElement(tag);
  if (cName !== "") {
    customTag.className = cName;
  }
  if (eText !== "") {
    customTag.innerText = eText;
  }
  return customTag;
}

function main() {
  console.log(data);
  const rootEl = document.querySelector("#root");

  //Build introductory section
  const introduct = createCustomElement("section", "intro");
  const h1 = createCustomElement(
    "h1",
    "intro__header",
    "Visualized and clarified by AI"
  );
  rootEl.append(introduct);
  introduct.append(h1);
}

main();
