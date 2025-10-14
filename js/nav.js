//JavaScript 工程師養成直播班｜2025 秋季 - 函式刷題任務「 四則運算 & 字串處理 」
//JavaScript 工程師養成直播班｜2025 秋季 - 函式刷題任務「if 數值區間 + 邏輯運算子 & 物件與陣列設計 」
//JavaScript 工程師養成直播班｜2025 秋季 - 函式刷題任務「DOM 操作 」
//JavaScript 工程師養成直播班｜2025 秋季 - 函式刷題任務「進階 DOM 操作 」
const data = {
    name: "函式刷題任務",
    nav: [
        {
            menu: "四則運算、字串處理",
            page: [
                {
                    "title": "題目一：相乘三次 (*)",
                    "link": "../week1/Q1.html"
                },
                {
                    "title": "題目二：取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)",
                    "link": "../week1/Q2.html"
                },
                {
                    "title": "題目三：簡單計算機",
                    "link": "../week1/Q3.html"
                },
                {
                    "title": "題目四：商業邏輯題：增加服務費",
                    "link": "../week1/Q4.html"
                },
                {
                    "title": "題目五：重構題：消除重複，抽離變因",
                    "link": "../week1/Q5.html"
                },
                {
                    "title": "題目六：字串大小寫互換",
                    "link": "../week1/Q6.html"
                },
                {
                    "title": "題目七：字串去左右空白",
                    "link": "../week1/Q7.html"
                },
                {
                    "title": "題目八：字串切割",
                    "link": "../week1/Q8.html"
                },
                {
                    "title": "題目九：擷取字串內容",
                    "link": "../week1/Q9.html"
                },
                {
                    "title": "題目十：反轉字串",
                    "link": "../week1/Q10.html"
                }
            ]
        },
        {
            menu: "if、邏輯運算、物件陣列",
            page: [
                {
                    "title": "題目一：多重條件",
                    "link": "../week2/Q1.html"
                },
                {
                    "title": "題目二：溫標轉換",
                    "link": "../week2/Q2.html"
                },
                {
                    "title": "題目三：計算球體體積",
                    "link": "../week2/Q3.html"
                },
                {
                    "title": "題目四：BMI 計算",
                    "link": "../week2/Q4.html"
                },
                {
                    "title": "題目五：FizzBuzz",
                    "link": "../week2/Q5.html"
                },
                {
                    "title": "題目六：創建陣列與物件",
                    "link": "../week2/Q6.html"
                },
                {
                    "title": "題目七：複製陣列或物件(淺拷貝)",
                    "link": "../week2/Q7.html"
                },
                {
                    "title": "題目八：修改陣列與物件(增、刪、改)",
                    "link": "../week2/Q8.html"
                },
                {
                    "title": "題目九：複製陣列或物件(深拷貝)",
                    "link": "../week2/Q9.html"
                },
                {
                    "title": "題目十：月有陰晴圓缺🌚🌝",
                    "link": "../week2/Q10.html"
                }
            ]
        },
        {
            menu: "DOM操作",
            page: [
                {
                    "title": "題目一：選取 DOM",
                    "link": "../week3/Q1.html"
                },
                {
                    "title": "題目二：修改 DOM",
                    "link": "../week3/Q2.html"
                },
                {
                    "title": "題目三：監聽 DOM",
                    "link": "../week3/Q3.html"
                },
                {
                    "title": "題目四：創造、插入 DOM",
                    "link": "../week3/Q4.html"
                },
                {
                    "title": "題目五：監聽表單",
                    "link": "../week3/Q5.html"
                },
                {
                    "title": "題目六：加減計數器",
                    "link": "../week3/Q6.html"
                },
                {
                    "title": "題目七：加減計數器(進階)",
                    "link": "../week3/Q7.html"
                },
                {
                    "title": "題目八：手風琴",
                    "link": "../week3/Q8.html"
                },
                {
                    "title": "題目九：頁籤",
                    "link": "../week3/Q9.html"
                },
                {
                    "title": "題目十：代辦事項",
                    "link": "../week3/Q10.html"
                }
            ]
        },
        {
            menu: "進階DOM操作",
            page: [
                {
                    "title": "題目一：無障礙彈跳視窗",
                    "link": "../week4/Q1.html"
                },
                {
                    "title": "題目一：無障礙彈跳視窗(AI版)",
                    "link": "../week4/Q1AI.html"
                },
                {
                    "title": "題目二：書籍蒐尋器",
                    "link": "../week4/Q2.html"
                },
                {
                    "title": "題目三：回饋跑馬燈",
                    "link": "../week4/Q3.html"
                },
                {
                    "title": "題目四：步驟表單",
                    "link": "../week4/Q4.html"
                },
                {
                    "title": "題目五：心理測驗",
                    "link": "../week4/Q5.html"
                }
            ]
        }
    ]
};

const nav = document.createElement('nav');
nav.classList.add('navbar', 'bg-dark', 'navbar-expand-lg','sticky-top');
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



