const tabs = document.querySelectorAll(".tab");

tabs.forEach(aba => {
    aba.addEventListener("click", () => {
        const selectedTab = document.querySelector(".tab.selected");
        selectedTab.classList.remove("selected");

        aba.classList.add("selected");

        const selectedInfo = document.querySelector(".info.selected");
        selectedInfo.classList.remove("selected");

        const elementId = `info-${aba.id}`;

        const infoShow = document.getElementById(elementId);
        infoShow.classList.add("selected");
    });
})

