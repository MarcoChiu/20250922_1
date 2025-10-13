
const data = {
    name: "2025前端培訓班",
    nav: [
        {
            menu: " 函式刷題任務「 四則運算 & 字串處理 」",
            page: [
                {
                    "title": "題目一：相乘三次 (*)",
                    "link": "Q1.html"
                },
                {
                    "title": "題目二：取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)",
                    "link": "Q2.html"
                },
                {
                    "title": "題目三：簡單計算機",
                    "link": "Q3.html"
                },
                {
                    "title": "題目四：商業邏輯題：增加服務費",
                    "link": "Q4.html"
                },
                {
                    "title": "題目五：重構題：消除重複，抽離變因",
                    "link": "Q5.html"
                },
                {
                    "title": "題目六：字串大小寫互換",
                    "link": "Q6.html"
                },
                {
                    "title": "題目七：字串去左右空白",
                    "link": "Q7.html"
                },
                {
                    "title": "題目八：字串切割",
                    "link": "Q8.html"
                },
                {
                    "title": "題目九：擷取字串內容",
                    "link": "Q9.html"
                },
                {
                    "title": "題目十：反轉字串",
                    "link": "Q10.html"
                }
            ]
        }]
};

const nav = document.createElement('nav');
nav.classList.add('navbar','bg-dark', 'navbar-expand-lg');
nav.setAttribute('data-bs-theme', 'dark'); 
document.body.prepend(nav);
const container_fluid = document.createElement('div');
container_fluid.classList.add('container-fluid');
nav.appendChild(container_fluid);   

const brand = document.createElement('a');
brand.classList.add('navbar-brand');
brand.href = 'index.html';
brand.textContent = data.name;
container_fluid.appendChild(brand);

const button = document.createElement('button');
button.classList.add('navbar-toggler');
button.type = 'button';
button.setAttribute('data-bs-toggle', 'collapse');
button.setAttribute('data-bs-target', '#navbarNavDropdown');
button.setAttribute('aria-controls', 'navbarNavDropdown');
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', 'Toggle navigation');
const span = document.createElement('span');
span.classList.add('navbar-toggler-icon');
button.appendChild(span);
container_fluid.appendChild(button);

const collapseDiv = document.createElement('div');
collapseDiv.classList.add('collapse', 'navbar-collapse');
collapseDiv.id = 'navbarNavDropdown';
container_fluid.appendChild(collapseDiv);
const navMenu = document.createElement('ul');
navMenu.classList.add('navbar-nav');
collapseDiv.appendChild(navMenu);

// 動態產生選單
data.nav.forEach(item => {
    const dropdown = document.createElement('li');
    dropdown.classList.add('nav-item', 'dropdown');
    const dropdownToggle = document.createElement('a');
    dropdownToggle.classList.add('nav-link', 'dropdown-toggle');
    dropdownToggle.href = '#';
    dropdownToggle.role = 'button';
    dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
    dropdownToggle.setAttribute('aria-expanded', 'false');
    dropdownToggle.textContent = item.menu;

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu');

    item.page.forEach(page => {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.classList.add('dropdown-item');
        linkItem.href = page.link;
        linkItem.textContent = page.title;

        listItem.appendChild(linkItem);
        dropdownMenu.appendChild(listItem);
    });

    dropdown.appendChild(dropdownToggle);
    dropdown.appendChild(dropdownMenu);
    navMenu.appendChild(dropdown);
});



