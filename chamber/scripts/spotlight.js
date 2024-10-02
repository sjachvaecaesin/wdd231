const cardsElement = document.querySelector(".cards");
const members = "https://sjachvaecaesin.github.io/wdd231/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(members);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    let temp = companies;
    for (i = 0; i < 3; i++) {
        let company = Math.floor(Math.random() * temp.length);
        if (temp[company].level == "Gold" || temp[company].level == "Silver") {
            let section = document.createElement("section");
            let img = document.createElement("img");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");

            h3.textContent = companies[company].name;
            img.setAttribute("src", companies[company].image);
            img.setAttribute("alt", companies[company].alt);
            p.innerHTML = `Address: ${companies[company].address}<br>Phone: ${companies[company].phone}\<br>Membership: ${companies[company].level}<br>Extra: ${companies[company].optional}<br><br>`;

            section.appendChild(img);
            section.appendChild(h3);
            section.appendChild(p);
            section.classList.add("card");
            section.classList.add("spotlight");

            cardsElement.appendChild(section);
            temp.splice(company, 1);
        }
        else {
            i--;
        }
    }
};

getMembers();