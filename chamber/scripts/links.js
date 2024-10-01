const listElement = document.querySelector("#list");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#file");
const url = "https://sjachvaecaesin.github.io/wdd231/data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let a = document.createElement("a");
        let section = document.createElement("section");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        h3.textContent = company.name;
        img.setAttribute("src", company.image);
        img.setAttribute("alt", "Company picture");
        p.innerHTML = `Address: ${company.address}<br>Phone: ${company.phone}\<br>Membership: ${company.level}<br>Extra: ${company.optional}<br><br>`
        a.setAttribute("href", company.url);
        a.setAttribute("alt", company.alt);
        a.textContent = "Company link";

        p.appendChild(a);

        section.appendChild(img);
        section.appendChild(h3);
        section.appendChild(p);
        section.classList.add("card");

        listElement.appendChild(section);
    });
};

getMembers();

gridButton.addEventListener("click", showGrid);

listButton.addEventListener("click", showList);

function showList() {
    list.classList.remove("grid");
    list.classList.add("file");
}

function showGrid() {
    list.classList.remove("file");
    list.classList.add("grid");
}