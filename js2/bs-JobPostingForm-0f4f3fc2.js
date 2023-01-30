define("@widget/JOB_POSTING/bs-JobPostingForm-0f4f3fc2.js", ["exports", "@wsb/guac-widget-shared@^1/lib/components/Form"], (function(e, t) {
    "use strict";

    function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l])
            }
            return e
        }, o.apply(this, arguments)
    }
    var l = (global.keyMirror || guac.keymirror)({
            JOB_POSTING_SECTION_TITLE_REND: null,
            JOB_POSTING_FORM_TITLE_REND: null,
            JOB_POSTING_FORM_CONTAINER_REND: null,
            JOB_POSTING_INTRO_HEADING_REND: null,
            JOB_POSTING_INTRO_DESC_REND: null,
            JOB_POSTING_INFO_CONTAINER_REND: null
        }),
        a = "formTitle";
    const {
        constants: {
            routes: r
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless;
    var n = { ...r,
        FORM_PIVOT: "/form",
        FORM_FIELD: "/form/$"
    };
    const c = e => {
        let {
            category: r,
            section: c,
            formTitle: i,
            containerStyle: s,
            titleStyle: u,
            fullWidth: g,
            useColumnLayout: p,
            ...O
        } = e;
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            category: r,
            section: c,
            "data-aid": l.JOB_POSTING_FORM_CONTAINER_REND,
            style: { ...s
            }
        }, (global.React || guac.react).createElement(t.default, o({
            useCloseButton: !1,
            title: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading.Minor, {
                style: {
                    marginBottom: "medium",
                    ...u
                },
                "data-aid": l.JOB_POSTING_FORM_TITLE_REND,
                "data-route": a,
                "data-field-route": n.FORM_PIVOT,
                children: i
            }),
            fullWidth: g,
            dataAidPrefix: "JOB_POSTING",
            formIdentifier: "JOB_POSTING",
            useColumnLayout: p,
            category: r
        }, O)))
    };
    c.propTypes = {
        formTitle: (global.PropTypes || guac["prop-types"]).string,
        category: (global.PropTypes || guac["prop-types"]).string,
        section: (global.PropTypes || guac["prop-types"]).string,
        containerStyle: (global.PropTypes || guac["prop-types"]).object,
        titleStyle: (global.PropTypes || guac["prop-types"]).object,
        fullWidth: (global.PropTypes || guac["prop-types"]).bool,
        ...t.default.propTypes
    }, e.default = c, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-JobPostingForm-0f4f3fc2.js.map