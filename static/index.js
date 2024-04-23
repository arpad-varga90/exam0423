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

function buildCard({ title, image, text } = element) {
  const cardRoot = createCustomElement("div", "card");
  const cardHeader = createCustomElement("div", "card__header", title);
  const cardBody = createCustomElement("div", "card__body");
  const cardBodyImage = createCustomElement("div", "card__body__image");
  const cardImage = createCustomElement("img");
  cardImage.setAttribute("src", image);
  cardImage.setAttribute("alt", title);
  const cardBodyText = createCustomElement("div", "card__body__text", text);

  cardBodyImage.append(cardImage);
  cardBody.append(cardBodyImage, cardBodyText);
  cardRoot.append(cardHeader,cardBody);

  return cardRoot;
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
  
  //Build container section
  const container = createCustomElement("section", "container");
  for (const key in data) {
    const element = data[key];
    container.append(buildCard(element));
  }
  rootEl.append(container);
}

main();
