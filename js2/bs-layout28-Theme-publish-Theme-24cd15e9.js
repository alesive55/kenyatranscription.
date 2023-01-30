define("@widget/LAYOUT/bs-layout28-Theme-publish-Theme-24cd15e9.js", ["exports", "~/c/bs-_rollupPluginBabelHelpers", "~/c/bs-index3", "~/c/bs-index", "~/c/bs-index2", "~/c/bs-modernThinRound", "~/c/bs-defaultSocialIconPack", "~/c/bs-loaders", "~/c/bs-overlayTypes", "~/c/bs-linkIndicator"], (function(e, t, r, n, a, o, i, s, l, g) {
    "use strict";
    const {
        colorPackCategories: d,
        buttons: c
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, {
        LIGHT: u,
        LIGHT_ALT: p,
        LIGHT_COLORFUL: m,
        DARK: h,
        DARK_ALT: y,
        DARK_COLORFUL: b,
        COLORFUL: f,
        CUSTOM: C
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.paintJobs, x = {
        imageTreatments: {
            [l.F]: "accent-overlay",
            [l.b]: "accent-overlay",
            [l.I]: "category-solid",
            [l.B]: "accent-overlay",
            [l.L]: "accent-overlay"
        },
        defaultHeaderTreatment: l.F
    };
    var S = {
        id: "layout28",
        name: "kai",
        packs: {
            color: "#75978D",
            font: "karla"
        },
        logo: {
            font: "primary"
        },
        packCategories: {
            color: d.ACCENT
        },
        headerProperties: {
            alignmentOption: "left",
            defaultLogoAlign: "center"
        },
        headerTreatmentsConfig: x,
        showSlideshowTab: !0,
        hasNavBackground: !1,
        paintJobs: [u, p, m, f, b, y, h],
        defaultPaintJob: C,
        buttons: {
            primary: {
                fill: c.fills.GHOST,
                shape: c.shapes.PILL,
                decoration: c.decorations.NONE,
                shadow: c.shadows.NONE,
                color: c.colors.HIGHCONTRAST
            },
            secondary: {
                fill: c.fills.GHOST,
                decoration: c.decorations.NONE,
                shadow: c.shadows.NONE,
                color: c.colors.HIGHCONTRAST
            },
            ...n.C
        }
    };
    const {
        NONE: v
    } = n.s, {
        renderModes: H,
        buttons: T
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, {
        PRIMARY: w,
        NEUTRAL: B,
        ACCENT: E
    } = n.e, k = ["about5", "content5", "mlsSearch1", "ordering1", "subscribe3", "introduction1", "introduction5"], D = "#737373", L = (e, t, r) => e[t] && r.test(e[t]), R = (e, t) => ((e, t, r) => e[t] && e[t] === r)(e, "data-aid", t), I = {
        color: "kaiDarkGrey",
        ":hover": {
            color: "kaiLightGrey"
        }
    }, A = e => e ? {
        [w]: "primaryContrastShade",
        [E]: "#242424",
        [B]: "#EEEEEE"
    } : {
        [w]: "primaryContrastShade",
        [E]: "#5B5B5B",
        [B]: "#C8C8C8"
    }, N = e => {
        const [t] = r.g(e, ["primary"]);
        return t.setAlpha(100).contrast(5)
    }, O = {
        [l.F]: "accent-overlay",
        [l.b]: "accent-overlay",
        [l.I]: "category-solid",
        [l.B]: "accent-overlay",
        [l.L]: "accent-overlay"
    }, P = {
        style: {
            font: "primary",
            color: "highContrast",
            fontSize: "xxlarge",
            fontWeight: "normal",
            letterSpacing: "2px",
            textTransform: "none"
        }
    };
    class W extends r.D {
        static get displayName() {
            return "Theme28"
        }
        static getMutatorDefaultProps(e, t) {
            const r = super.getMutatorDefaultProps(e, t);
            return "HEADER" === e ? { ...r,
                showOverlayOpacityControls: !0,
                enableVideoOverlaySlider: !0,
                hasLogoAlign: !0,
                hasNavBackgroundToggle: !0,
                useSlideshow: !0,
                headerTreatmentsConfig: { ...r.headerTreatmentsConfig,
                    defaultHeaderTreatment: l.F,
                    imageTreatments: O,
                    heroContentItems: ["tagline", "tagline2", "cta"],
                    nonHeroContentItems: ["phone"]
                }
            } : r
        }
        static getWidgetDefaultProps(e, t) {
            return { ...super.getWidgetDefaultProps(e, t),
                ..."HEADER" === e && {
                    alignmentOption: "left",
                    logoAlign: "center"
                }
            }
        }
        constructor() {
            super(), this.mappedValues = { ...this.mappedValues,
                backgroundColorKaiDarkGrey: D,
                backgroundColorBackgroundContrast() {
                    const [e] = r.g(this, ["background"]);
                    return e.setAlpha(100).contrast(5)
                },
                backgroundColorPrimaryContrast() {
                    return N(this)
                },
                borderColorPrimaryContrastShade() {
                    const e = N(this),
                        t = e.isLight() ? "darken" : "lighten";
                    return e.setAlpha(100)[t](5)
                },
                backgroundColorNavSolid() {
                    return r.g(this, "background").setAlpha(25)
                },
                borderColorKaiDarkGrey: D,
                colorKaiLightGrey: "#abb2b2",
                colorKaiDarkGrey: D,
                fillKaiDarkGrey: D,
                fontSizeCloseIconMobile: "25px",
                spacingKaiSectionVertical: "100px",
                webkitTextFillColorKaiDarkGrey: D,
                typographyOverrides: {
                    LogoAlpha: { ...P
                    },
                    HeadingAlpha: {
                        style: {
                            font: "primary",
                            color: "highContrast",
                            fontSize: "xxxlarge",
                            fontWeight: "normal",
                            letterSpacing: "4px",
                            textTransform: "none",
                            "@xs-only": {
                                letterSpacing: "2px"
                            }
                        }
                    },
                    HeadingBeta: {
                        style: {
                            font: "primary",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "2px",
                            textTransform: "none"
                        }
                    },
                    HeadingGamma: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "xlarge",
                            fontWeight: "normal",
                            letterSpacing: "2px",
                            textTransform: "none"
                        }
                    },
                    HeadingDelta: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "2px",
                            textTransform: "none"
                        }
                    },
                    HeadingEpsilon: { ...P
                    },
                    BodyAlpha: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    BodyBeta: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "mlarge",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    DetailsAlpha: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "small",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    DetailsBeta: {
                        style: {
                            font: "alternate",
                            color: "neutral",
                            fontSize: "xsmall",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    ButtonAlpha: e => {
                        const {
                            size: t = "default"
                        } = e;
                        return {
                            style: {
                                font: "primary",
                                fontWeight: "normal",
                                letterSpacing: "2px",
                                textTransform: "none",
                                ...{
                                    small: {
                                        fontSize: "small"
                                    },
                                    default: {
                                        fontSize: "medium"
                                    },
                                    large: {
                                        fontSize: "medium"
                                    }
                                }[t]
                            }
                        }
                    },
                    NavAlpha: {
                        style: {
                            font: "primary",
                            color: "highContrast",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "2px",
                            textTransform: "none",
                            ":hover": {
                                opacity: .5,
                                color: "highContrast"
                            },
                            ":active": {
                                color: "highlight"
                            }
                        }
                    },
                    SubNavAlpha: e => r.m.call(this, "NavAlpha", e),
                    NavBeta: e => {
                        let {
                            active: t = !1
                        } = e;
                        return {
                            style: {
                                font: "primary",
                                fontSize: "mlarge",
                                fontWeight: "normal",
                                letterSpacing: "2px",
                                textTransform: "none",
                                color: t ? "black" : "kaiDarkGrey",
                                ":hover": {
                                    opacity: .5,
                                    color: "kaiLightGrey"
                                }
                            }
                        }
                    },
                    SubNavBeta: e => r.m.call(this, "NavBeta", e),
                    InputAlpha: e => (global._ || guac.lodash).merge(r.m.call(this, "BodyAlpha", e), {
                        style: {
                            "@xs-only": {
                                fontSize: "medium"
                            }
                        }
                    }),
                    InputBeta: e => (global._ || guac.lodash).merge(r.m.call(this, "InputAlpha", e), {
                        style: {
                            color: "kaiDarkGrey"
                        }
                    })
                }
            }
        }
        Button(e) {
            const {
                size: t = "default"
            } = e, {
                fill: r = this.getButtonDefaults().fill
            } = e, n = r !== T.fills.OPEN ? {
                style: {
                    transitionProperty: "background-color",
                    transitionDuration: "medium",
                    transitionTimingFunction: "ease-in-out"
                }
            } : {};
            return super.Button(this.merge({
                style: { ...{
                        small: {
                            minHeight: 40
                        }
                    }[t],
                    "@xs-only": {
                        width: "auto"
                    }
                },
                customBorderWidth: "small"
            }, n, e))
        }
        Divider(e) {
            return super.Divider(this.merge({
                style: {
                    display: "none"
                }
            }, e))
        }
        Heading(e) {
            const {
                widgetPreset: t
            } = this.base, {
                level: n,
                tag: a
            } = e, o = {
                2: "HeadingEpsilon",
                5: "DetailsAlpha"
            }[r.l({
                tag: a,
                level: n
            })];
            return super.Heading(this.merge({
                style: { ...("content4" === t || "introduction4" === t) && {
                        marginBottom: "40px !important"
                    }
                },
                typography: o
            }, e))
        }
        Icon(e) {
            const {
                widgetType: t
            } = this.base, r = R(e, "MEMBERSHIP_ICON_RENDERED");
            return super.Icon(this.merge({
                iconPack: { ...o.m,
                    ...i.s
                },
                style: { ..."HEADER" === t && {
                        color: "highContrast",
                        ":hover": {
                            color: "highContrast",
                            opacity: .5
                        }
                    },
                    ...r && { ...I
                    }
                }
            }, e))
        }
        SlideshowArrowsIcon(e) {
            return this.Icon(this.merge({
                style: {
                    ":hover": {
                        opacity: 1
                    }
                }
            }, e))
        }
        MembershipHeading(e) {
            return super.MembershipHeading(this.merge({
                style: {
                    textAlign: "center"
                }
            }, e))
        }
        MembershipHR(e) {
            return this.HR(this.merge({
                style: {
                    "@xs": {
                        borderColor: "section",
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0
                    }
                }
            }, e))
        }
        MembershipText(e) {
            return this.Text(this.merge({
                style: {
                    textAlign: "center"
                }
            }, e))
        }
        Loader(e) {
            return s.B.apply(this, [e])
        }
        Nav(e) {
            return super.Nav(this.merge({
                style: {
                    maxWidth: "none"
                }
            }, e))
        }
        NavLink(e) {
            return super.NavLink(this.merge({
                style: {
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    ...g.g()
                }
            }, e))
        }
        NavLinkActive(e) {
            return super.NavLink(this.merge({
                style: g.a({
                    transform: "translateY(-50%)",
                    height: 2
                })
            }, e))
        }
        NavMoreMenuLinkActive(e) {
            return super.NavLinkActive(e)
        }
        NavDropdown(e) {
            const {
                category: t,
                isHomepage: r
            } = this.base;
            return super.Dropdown(this.merge({
                style: {
                    "@md": {
                        padding: "large",
                        borderWidth: "xsmall",
                        borderColor: A(r)[t],
                        borderStyle: "solid",
                        borderRadius: "none",
                        boxShadow: "none",
                        lineHeight: 1.65
                    }
                }
            }, e))
        }
        UtilitiesMenu(e) {
            const t = e.hasNav ? "medium" : e.pipe ? "small" : 0;
            return super.UtilitiesMenu(this.merge({
                style: {
                    justifyContent: "flex-end",
                    "@md": {
                        "> div:first-child": {
                            marginLeft: t
                        },
                        "> span:first-child": {
                            marginLeft: t
                        }
                    }
                }
            }, e))
        }
        Grid(e) {
            const {
                widgetPreset: t
            } = this.base;
            return super.Grid(this.merge({
                style: { ..."gallery4" === t && {
                        margin: "-xxsmall"
                    }
                }
            }, e))
        }
        GridCell(e) {
            const {
                widgetPreset: t,
                widgetType: r
            } = this.base, n = L(e, "data-aid", /GALLERY_IMAGE[\d]+_CELL_RENDERED/g);
            return super.GridCell(this.merge({
                style: { ..."HEADER" === r && {
                        ".nav-item.visible": {
                            paddingRight: "xlarge",
                            paddingLeft: 0
                        },
                        ".last-visible-nav-item": {
                            paddingRight: "0 !important"
                        }
                    },
                    ..."SHOP_FEATURED_CATEGORY" === r && {
                        "@xs": {
                            paddingHorizontal: 0
                        }
                    },
                    ..."about3" === t && {
                        "@md": {
                            ":first-of-type": {
                                paddingBottom: "xxxlarge"
                            }
                        }
                    },
                    ..."contact4" === t && {
                        "@md": {
                            paddingBottom: "80px !important",
                            ":last-of-type": {
                                paddingBottom: "0 !important"
                            }
                        }
                    },
                    ..."gallery4" === t && n && {
                        padding: "xsmall"
                    }
                }
            }, e))
        }
        NavigationDrawer(e) {
            const {
                renderMode: t
            } = this.base, r = L(e, "id", /Search[\d]+-container/g);
            return super.NavigationDrawer(this.merge({
                category: "neutral",
                section: "default",
                style: {
                    backgroundColor: "section",
                    paddingTop: "xxxlarge",
                    ...r && {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    },
                    ...t === H.PREVIEW && {
                        "@xs": {
                            top: 0
                        }
                    }
                }
            }, e))
        }
        NavigationDrawerInputSearch(e) {
            return super.NavigationDrawerInputSearch(this.merge({
                style: {
                    backgroundColor: "searchMobileLight"
                },
                typography: "InputBeta"
            }, e))
        }
        NavigationDrawerListItem(e) {
            return super.NavigationDrawerListItem(this.merge({
                style: {
                    borderBottomWidth: 0
                }
            }, e))
        }
        NavigationDrawerLink(e) {
            return super.NavigationDrawerLink(this.merge({
                style: {
                    justifyContent: "center",
                    paddingVertical: "25px"
                }
            }, e))
        }
        NavigationDrawerLinkActive(e) {
            let {
                children: t,
                ...r
            } = e;
            return super.NavigationDrawerLinkActive(this.merge({
                style: {
                    justifyContent: "center"
                },
                children: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: {
                        position: "relative",
                        ...g.b({
                            backgroundColor: "sectionLowContrast",
                            height: 2
                        })
                    }
                }, t)
            }, r))
        }
        NavigationDrawerLinkDropdownActive(e) {
            return this.NavigationDrawerLinkActive(e)
        }
        NavigationDrawerSubLink(e) {
            return super.NavigationDrawerSubLink(this.merge({
                style: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    display: "flex",
                    justifyContent: "center"
                }
            }, e))
        }
        CloseIcon(e) {
            const t = R(e, "SEARCH_CLOSE_RENDERED");
            return super.CloseIcon(this.merge({
                style: {
                    "@xs-only": {
                        fontSize: "closeIconMobile"
                    },
                    "@md": { ...t && {
                            zIndex: 5,
                            ...I
                        }
                    }
                }
            }, e))
        }
        NavigationDrawerCloseIcon(e) {
            const {
                renderMode: t
            } = this.base, r = R(e, "SEARCH_CLOSE_RENDERED");
            return super.CloseIcon(this.merge({
                style: {
                    "@xs": { ...I,
                        top: 15,
                        right: 10,
                        ...r && {
                            left: "50%",
                            top: "85%",
                            transform: "translateX(-50%)",
                            ...I,
                            ...t === H.PREVIEW && {
                                position: "absolute",
                                top: "80%",
                                left: "unset",
                                right: "unset",
                                transform: "unset",
                                alignSelf: "center",
                                "+ div": {
                                    position: "absolute",
                                    top: "50%",
                                    width: "100%"
                                }
                            }
                        }
                    }
                }
            }, e))
        }
        GoogleTranslate(e) {
            return super.GoogleTranslate(this.merge({
                "@xs": {
                    width: 60
                }
            }, e))
        }
        GoogleTranslateIcon(e) {
            return super.Icon(this.merge({
                style: { ...I
                }
            }, e))
        }
        LogoHeading(e) {
            return super.LogoHeading(this.merge({
                style: {
                    overflowWrap: "break-word",
                    "@md": {
                        margin: 0
                    }
                }
            }, e))
        }
        Hero(e) {
            return super.Hero(this.merge({
                style: {
                    textAlign: "center",
                    "@md": {
                        maxWidth: "100%",
                        ...a.a("small")
                    }
                }
            }, e))
        }
        HeroLeft(e) {
            return this.Hero(this.merge({
                style: {
                    "@sm": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        borderLeftStyle: "solid",
                        borderLeftWidth: "1px",
                        paddingLeft: "large"
                    },
                    border: "none",
                    paddingLeft: "none"
                }
            }, e))
        }
        HeroCenterHeading(e) {
            return this.HeroHeading(this.merge({
                style: {
                    borderBottomStyle: "solid",
                    borderBottomWidth: "1px",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    paddingBottom: "small"
                }
            }, e))
        }
        HeroRight(e) {
            return this.Hero(this.merge({
                style: {
                    "@sm": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        borderRightStyle: "solid",
                        borderRightWidth: "1px",
                        paddingRight: "large"
                    },
                    border: "none",
                    paddingRight: 0
                }
            }, e))
        }
        Tagline(e) {
            return super.Tagline(this.merge({
                style: {
                    position: "relative",
                    marginHorizontal: "auto"
                }
            }, e))
        }
        HeroText(e) {
            return super.SubTagline(this.merge({
                style: {
                    display: "inline-block",
                    lineHeight: "1.5",
                    maxWidth: "100%",
                    "@xs": {
                        marginBottom: "small"
                    }
                },
                typography: "HeadingDelta"
            }, e))
        }
        Phone(e) {
            return super.Phone(this.merge({
                style: {
                    marginBottom: "small"
                },
                typography: "BodyAlpha"
            }, e))
        }
        Section(e) {
            const {
                widgetType: t
            } = this.base, {
                children: r,
                skipDivider: n
            } = e;
            return "FOOTER" !== t || n ? super.Section(this.merge({
                style: { ..."FOOTER" !== t && {
                        paddingVertical: "kaiSectionVertical"
                    },
                    ..."SUBSCRIBE" === t && {
                        paddingVertical: "xxxlarge"
                    }
                }
            }, e)) : super.Section(this.merge({
                children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Divider, {
                    style: {
                        paddingVertical: "medium"
                    }
                }), r)
            }, e))
        }
        SectionBanner(e) {
            const {
                widgetPreset: t
            } = this.base;
            return super.SectionBanner(this.merge({
                style: { ...["gallery2"].includes(t) && {
                        padding: 0
                    }
                }
            }, e))
        }
        SectionSplit(e) {
            const {
                widgetPreset: t
            } = this.base;
            return super.SectionSplit(this.merge({
                style: {
                    "@md": { ..."about5" === t && {
                            maxWidth: "unset",
                            paddingHorizontal: "xxxlarge"
                        }
                    }
                }
            }, e))
        }
        SectionContainer(e) {
            const {
                widgetPreset: t,
                widgetType: r
            } = this.base;
            return super.Container(this.merge({
                style: {
                    "@md": {
                        paddingHorizontal: "xxlarge",
                        ..."HEADER" === r && {
                            width: "100%",
                            margin: "0 auto",
                            paddingHorizontal: "small"
                        },
                        ..."FOOTER" === r && {
                            minWidth: "100%"
                        },
                        ...k.includes(t) && {
                            paddingHorizontal: 0
                        },
                        ..."contact4" === t && {
                            paddingHorizontal: 0
                        },
                        ..."contact5" === t && {
                            "> [data-ux=Group]": {
                                display: "flex",
                                flexDirection: "column-reverse"
                            }
                        }
                    }
                }
            }, e))
        }
        SectionHeading(e) {
            let {
                alignmentOption: t,
                ...r
            } = e;
            const {
                widgetPreset: n
            } = this.base;
            return super.SectionHeading(this.merge({
                style: {
                    textAlign: t || "center",
                    "@md": { ..."content7" === n ? {
                            marginVertical: "kaiSectionVertical"
                        } : {
                            marginBottom: "kaiSectionVertical"
                        }
                    },
                    ..."contact3" === n && {
                        marginBottom: "xsmall"
                    }
                },
                sectionHeadingHR: v
            }, r))
        }
        Intro(e) {
            return super.Intro(this.merge({
                alignment: "center",
                style: {
                    "@md": {
                        marginBottom: "kaiSectionVertical"
                    }
                }
            }, e))
        }
        CardBanner(e) {
            return super.CardBanner(this.merge({
                style: {
                    "@md": {
                        flexDirection: "column !important"
                    }
                }
            }, e))
        }
        CardBannerBlock(e) {
            return super.CardBannerBlock(this.merge({
                style: {
                    display: "flex",
                    justifyContent: "center !important",
                    width: "100%",
                    "@md": {
                        padding: "0 !important"
                    }
                }
            }, e))
        }
        CardBannerHeading(e) {
            return super.CardBannerHeading(this.merge({
                style: {
                    "@md": {
                        textAlign: "center",
                        marginBottom: "large"
                    }
                }
            }, e))
        }
        Content(e) {
            const {
                widgetPreset: t
            } = this.base;
            return super.Content(this.merge({
                style: { ..."about5" === t && {
                        margin: 0
                    }
                }
            }, e))
        }
        ContentBasic(e) {
            const {
                widgetPreset: t
            } = this.base;
            return super.ContentBasic(this.merge({
                style: { ...["about5", "content1"].includes(t) && {
                        marginBottom: "80px !important"
                    }
                }
            }, e))
        }
        ContentText(e) {
            return super.ContentText(this.merge({
                style: {
                    "> p": {
                        lineHeight: 1.8
                    }
                }
            }, e))
        }
        ContentCardImageThumbnail(e) {
            const {
                widgetPreset: t
            } = this.base, r = {
                borderRadius: "none",
                width: n.A
            };
            return super.ContentCardImageThumbnail(this.merge({
                style: { ..."about1" === t && { ...r
                    }
                }
            }, e))
        }
        ContentCardHeading(e) {
            const {
                widgetPreset: t
            } = this.base;
            return super.ContentCardHeading(this.merge({
                style: { ..."about1" === t && {
                        "@md": {
                            marginTop: "medium"
                        }
                    }
                }
            }, e))
        }
        Group(e) {
            const {
                widgetType: t
            } = this.base, r = "SHOP_FEATURED_CATEGORY" === t && L(e, "data-route", /categories\/[\d]+/g), n = "90vw";
            return super.Group(this.merge({
                style: {
                    "@xs": { ...r && {
                            width: n,
                            height: n,
                            margin: "0 auto"
                        }
                    },
                    "@md": { ...r && {
                            width: 320,
                            height: 320
                        }
                    }
                }
            }, e))
        }
        Background(e) {
            const {
                widgetType: t
            } = this.base;
            return super.Background(this.merge({
                style: { ..."HEADER" === t && {
                        zIndex: 1
                    }
                }
            }, e))
        }
        Table(e) {
            return super.Table(this.merge({
                style: {
                    borderRadius: "medium"
                }
            }, e))
        }
        getSection(e) {
            return "default" === e ? "alt" : "overlay" === e ? "overlay" : "default"
        }
        Input(e) {
            const t = {
                backgroundColor: "section"
            };
            return super.Input(this.merge({
                section: this.getSection(e.section || this.base.section),
                style: {
                    backgroundColor: "transparent",
                    paddingVertical: "xsmall",
                    paddingHorizontal: "xsmall",
                    ...(r = this.base.category, {
                        borderRadius: 0,
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: "0.04rem",
                        borderBottomStyle: "solid",
                        borderColor: r === B ? "kaiDarkGrey" : "highContrast"
                    }),
                    ":hover": { ...t
                    },
                    ":focus": {
                        boxShadow: "none",
                        ...t
                    }
                }
            }, e));
            var r
        }
        InputFloatLabelLabel(e) {
            return super.InputFloatLabelLabel(this.merge({
                style: {
                    left: "xsmall"
                }
            }, e))
        }
        InputSearch(e) {
            return super.InputSearch(this.merge({
                style: {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    borderRadius: 0,
                    ":focus": {
                        backgroundColor: "transparent"
                    }
                },
                typography: "InputBeta"
            }, e))
        }
        SearchPopout(e) {
            return super.SearchPopout(this.merge({
                style: {
                    borderBottom: "1px solid #737373"
                }
            }, e))
        }
        FeaturedText(e) {
            const {
                widgetPreset: t
            } = this.base;
            return super.FeaturedText(this.merge({
                style: { ...("content4" === t || "introduction4" === t) && {
                        marginBottom: "30px !important"
                    }
                }
            }, e))
        }
        PromoBanner(e) {
            return super.PromoBanner(this.merge({
                category: "primary",
                style: {
                    position: "relative",
                    zIndex: 2,
                    backgroundColor: "primaryContrast"
                }
            }, e))
        }
        PromoBannerContainer(e) {
            return super.PromoBannerContainer(this.merge({
                style: {
                    paddingVertical: "xxsmall",
                    "@md": {
                        paddingVertical: "xxsmall"
                    }
                }
            }, e))
        }
        HeaderMediaImage(e) {
            let {
                groupType: t,
                ...r
            } = e;
            const n = [l.I, l.B].indexOf(t) >= 0 && 40;
            return super.Image(this.merge({
                style: {
                    marginTop: 0,
                    paddingHorizontal: "small",
                    "@md": {
                        paddingHorizontal: 0
                    }
                }
            }, r, {
                mobileGutterWidth: n
            }))
        }
        InputFloatLabelInput(e) {
            return super.InputFloatLabelInput(this.merge({
                style: {
                    paddingBottom: "xsmall"
                }
            }, e))
        }
        InputSelect(e) {
            return super.InputSelect(this.merge({
                style: {
                    borderWidth: "xsmall",
                    borderRadius: "medium",
                    borderStyle: "solid"
                }
            }, e))
        }
        InputSelectElement(e) {
            return super.InputSelectElement(this.merge({
                style: {
                    padding: "small"
                }
            }, e))
        }
        DividerHR(e) {
            return super.HR(this.merge({
                style: {
                    borderColor: "! #999"
                }
            }, e))
        }
        MediaObjectBackground(e) {
            return super.MediaObjectBackground(this.merge({
                style: {
                    borderRadius: "0"
                }
            }, e))
        }
        HeadingMajor(e) {
            return super.HeadingMajor(this.merge({
                typography: "HeadingEpsilon"
            }, e))
        }
        FeaturedHeading(e) {
            return super.FeaturedHeading(this.merge({
                typography: "HeadingEpsilon"
            }, e))
        }
        ContentBigHeading(e) {
            return super.ContentBigHeading(this.merge({
                typography: "HeadingDelta"
            }, e))
        }
    }
    t._(W, "config", S), e.default = W, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-layout28-Theme-publish-Theme-24cd15e9.js.map