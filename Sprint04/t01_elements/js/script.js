const nodeList = document.querySelectorAll('li');

nodeList.forEach(node => {
   if ( !node.classList.contains("good") &&
        !node.classList.contains("evil") &&
        !node.classList.contains("unknown") )
   {
       node.classList.add("unknown");
   }

   if (!node.dataset.element) {
       node.dataset.element = "none";
   }

    const elements = node.dataset.element.split(" ");
    const br = document.createElement("br");
    node.appendChild(br);

    elements.forEach(element => {
        const div = document.createElement("div");
        div.className = `elem ${element}`;

        if (div.classList.contains("none")) {
            const line = document.createElement("div");
            line.className = `line`

            div.appendChild(line);
        }

        node.appendChild(div);
    });
});