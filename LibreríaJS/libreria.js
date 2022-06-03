// const header = document.createElement("header");
// header.id = "mainHeader";
// header.classList.add("main-header");

// let root = document.getElementById("root");
// root.appendChild(header);

// Se construye lo anterior mediante las siguientes funciones para poder crear headers en HTML a través del div root.

export function createElement(elem, attr = {}){
    let element = document.createElement(elem);
    element.id = attr.id;
    element.classList.add(attr.className);
    return element
};

export function render(elem, DOMelem){
    DOMelem.appendChild(elem);


};
