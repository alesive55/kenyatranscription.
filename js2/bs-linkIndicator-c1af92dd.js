define("@widget/LAYOUT/c/bs-linkIndicator-c1af92dd.js", ["exports"], (function(i) {
    "use strict";

    function n(i) {
        return {
            ":before": {
                content: '""',
                marginRight: "0.5em",
                display: "inline-block",
                height: 1,
                width: "0.5em",
                backgroundColor: "sectionContrast",
                transition: "inherit",
                verticalAlign: "middle",
                opacity: 0,
                ...i
            }
        }
    }

    function t(i) {
        return n({
            opacity: 1,
            ...i
        })
    }
    i.a = t, i.b = function(i) {
        return t({
            position: "absolute",
            right: "100%",
            top: "50%",
            ...i
        })
    }, i.g = n
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-linkIndicator-c1af92dd.js.map