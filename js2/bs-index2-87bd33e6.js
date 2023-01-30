define("@widget/LAYOUT/c/bs-index2-87bd33e6.js", ["exports"], (function(t) {
    "use strict";
    t.a = function() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "medium";
        return {
            "> :nth-child(n)": {
                marginBottom: t
            },
            " > :last-child": {
                marginBottom: "0 !important"
            }
        }
    }, t.b = function() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "medium";
        return {
            "> :nth-child(n)": {
                marginRight: t
            },
            " > :last-child": {
                marginRight: "0 !important"
            }
        }
    }, t.c = function(t) {
        const e = function(t) {
            if ("string" != typeof t || "{" !== t[0]) return null;
            try {
                return JSON.parse(t)
            } catch (t) {
                return null
            }
        }(t) || {};
        let n = 0;
        return e.blocks && e.blocks.forEach((t => {
            const e = t.text.length;
            n += (global._ || guac.lodash).clamp(e, 25, Math.max(e, 25))
        })), n
    }, t.g = () => {
        const t = document.getElementsByClassName("ux-scaled");
        let e = 1;
        return t && t.length > 0 && (e = t[0].getAttribute("data-scale")), e
    }, t.r = t => {
        let {
            count: e = 0,
            fontSizeMap: n = {},
            defaultFontSize: r
        } = t;
        const i = (global._ || guac.lodash).reduce(n, ((t, e, n) => {
            let [r, i = Number.MAX_VALUE] = e;
            return t.push({
                range: [r, i],
                fontSize: n
            }), t
        }), []);
        let l = r || void 0;
        return i.forEach((t => {
            let {
                range: [n, r],
                fontSize: i
            } = t;
            e >= n && e <= r && (l = i)
        })), l
    }, t.s = t => {
        if ("string" == typeof t) return {
            children: t.trim()
        };
        if (t && "object" == typeof t) {
            let {
                children: e = null
            } = t;
            return "string" == typeof e && (e = e.trim()), { ...t,
                children: e
            }
        }
        return {
            children: null
        }
    }
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-index2-87bd33e6.js.map