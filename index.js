const body = document.querySelector("body");

const node = document.createElement("h1");
const textNode = document.createTextNode("My HTML adventure");
node.appendChild(textNode);
body.appendChild(node);

/*Paragraph tag*/


const par1 = document.createElement("p");
par1.innerHTML = "We're writing HTML markup to display in our <strong>browser</strong>. We're basically telling computers what to do. <em>Neat!</em>  We're writing <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>HTML</a> markup to display in our <strong>browser</strong>.";
body.appendChild(par1);
  
// create elements <table> and a <tbody>
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
const tblHead = document.createElement("thead");

// put <table> in the <body>
body.appendChild(tbl);

// append the <tbody> and <thead> inside the <table>
tbl.appendChild(tblBody);
tbl.appendChild(tblHead);

tblHead.innerHTML = `<tr>
<th>Element name</th>
<th>Display value</th>
</tr>`;

tblBody.innerHTML = `
<tr>
    <td>h1</td>
    <td>block</td>
</tr>
<tr>
    <td>p</td>
    <td>block</td>
</tr>
<tr>
    <td>strong</td>
    <td>inline</td>
</tr>
<tr>
    <td>em</td>
    <td>inline</td>
</tr>`;
