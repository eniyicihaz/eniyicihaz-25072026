(() => {
    const STORAGE_SIDEBAR = "ds-sidebar";
    const STORAGE_THEME = "ds-theme";

    const root = document.documentElement;

    const sidebarToggle = document.querySelector("[data-sidebar-toggle]");
    const themeToggle = document.querySelector("[data-theme-toggle]");
    const search = document.querySelector(".sidebar__search input");

    function setSidebar(state) {
        root.dataset.sidebar = state;
        localStorage.setItem(STORAGE_SIDEBAR, state);
    }

    function setTheme(theme) {
        root.dataset.theme = theme;
        localStorage.setItem(STORAGE_THEME, theme);

        if (themeToggle) {
            themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
        }
    }

    function filterNavigation(value) {
        const term = value.trim().toLowerCase();

        document.querySelectorAll(".sidebar__group").forEach((group) => {
            let visible = 0;

            group.querySelectorAll("li").forEach((item) => {
                const match = item.textContent.toLowerCase().includes(term);

                item.style.display = match ? "" : "none";

                if (match) visible++;
            });

            group.style.display = visible ? "" : "none";
        });
    }

    setSidebar(localStorage.getItem(STORAGE_SIDEBAR) || "expanded");
    setTheme(localStorage.getItem(STORAGE_THEME) || "light");

    sidebarToggle?.addEventListener("click", () => {
        setSidebar(
            root.dataset.sidebar === "collapsed"
                ? "expanded"
                : "collapsed"
        );
    });

    themeToggle?.addEventListener("click", () => {
        setTheme(
            root.dataset.theme === "dark"
                ? "light"
                : "dark"
        );
    });

    if (search) {
        search.removeAttribute("disabled");

        search.addEventListener("input", (e) => {
            filterNavigation(e.target.value);
        });
    }
})();