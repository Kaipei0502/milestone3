let data = [[],//id 0
//id 1
[{user: "Bella", content: "好想上岸QQ" },
{user: "Judy", content: "希望今年數學可以簡單一點" },
{user: "Belle", content: "要去讀書了" },
{user: "Belle", content: "............................................................................................................................................................................................................................................................................................" },
{user: "Belle", content: "..................................................." },],
//id 2 
[{user: "Alan", content: "想逛個夜市一波三折" },
{user: "Ben", content: "東東之亂竟然還沒結束" },
{user: "Ivan", content: "分裂後變得很難逛欸" },
{user: "Jerry", content: "目前變得很難逛欸，兩邊的食物重複性高" },
{user: "Paul", content: "中間有圍籬隔場地，超級不方便" },
{user: "Kevin", content: "逛夜市還要走出去人行道，再從人行道繞回來" },
{user: "Ivy", content: "以前台南最喜歡的夜市耶😢" },
{user: "Eva", content: "難過的還是攤販吧" },
{user: "Eric", content: "超級不方便的，以後不會想來了" },
{user: "Belle", content: "..................................................." },
{user: "Belle", content: "..................................................." },
{user: "Belle", content: "..................................................." },
{user: "Belle", content: "..................................................." },

],
//id 3 
[{user: "Henry", content: "傻眼 好誇張喔" },
{user: "Belle", content: "..................................................." },],
//id 4
[{user: "Emily", content: "這篇新聞根本在亂講..." },
{user: "Cindy", content: "還是等YG發布聲明吧" },
{user: "Tony", content: "不知道是不是真的 但是希望他們可以繼續以團體呈現給大家" },
{user: "Cathy", content: "這間媒體每次的報導都是虛構的" },
{user: "Belle", content: "..................................................." },],
// id 5
[],
// id 6
[{user: "Ella", content: "這份民調感覺超級不準的" },
{user: "Eric", content: "選舉要到了欸 感覺局勢很不明朗" },
{user: "Eva", content: "永遠支持XXX" },
{user: "Emily", content: "這篇新聞根本在亂講..." },
{user: "Cathy", content: "這間媒體每次的報導都是虛構的" },
{user: "Henry", content: "這個媒體的政治傾向超級明顯 完全沒有參考價值" },
{user: "Belle", content: "..................................................." },
{user: "Belle", content: "..................................................." },
{user: "Belle", content: "..................................................." },
{user: "Belle", content: "..................................................." },
],
//id 7
[{user: "Tom", content: "天啊 超級期待" },
{user: "Mandy", content: "我跨年要去台中!!!" },
{user: "Tim", content: "好欸 剛好預計要去台中跨年" },
{user: "Paul", content: "不太喜歡她欸" },
{user: "Belle", content: "..................................................." },
{user: "Belle", content: "..................................................." },]
    // {user:"",content:""},
    // {user:"",content:""},

]

const titles = document.querySelectorAll(".select");
const list = document.querySelector(".data");
console.log(titles);


function init() {
    let str = "";
    let items = data[1];
    items.forEach(function (item) {
        str += `<div class = "comment-item"><div class ="content"><h3>${item.user}:</h3><p>${item.content}</p></div><div class ="delete"><a href="#">刪除</a></div></div>`;
    });
    list.innerHTML = str;
}
init();

titles.forEach(function (title) {
    title.addEventListener("click", function (e) {
        // 若已有active狀態，則先依序全部移除
        while (activeNow = document.querySelector(".active")) {
            activeNow.classList.remove("active");
        };
        // 對該個title加上active
        title.classList.add("active");
    })
});

function show(index) {
    let str = "";
    let items = data[index];
    items.forEach(function (item) {
        str += `<div class = "comment-item"><div class ="content"><h3>${item.user}:</h3><p>${item.content}</p></div><div class ="delete"><a href="#">刪除</a></div></div>`;
    });
    list.innerHTML = str;
    console.log(str);
}

