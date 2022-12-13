let oLastModif = new Date(document.lastModified);

const date = new Date();
let currentYear = date.getFullYear()

let copyrightinfo = `©${currentYear} | Kelly Payne | WDD230| Last Updated: ${oLastModif}`
document.querySelector('.copyright').textContent = copyrightinfo;