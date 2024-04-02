(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        9424: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(1620)
            }])
        },
        5364: function(e, t, r) {
            "use strict";
            r.d(t, {
                A: function() {
                    return l
                }
            });
            var n = r(1527),
                a = r(959),
                o = r(424);
            let i = (0, o.ZP)("main")(() => ({
                    maxWidth: 600,
                    margin: "auto"
                })),
                l = (0, a.forwardRef)(function(e, t) {
                    return (0, n.jsx)(i, {
                        ref: t,
                        ...e
                    })
                })
        },
        6407: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return o
                }
            });
            var n = r(959),
                a = r(4988);

            function o() {
                let e = (0, n.useContext)(a.O);
                if (!e) throw Error("useGuard must be used within a GuardProvider");
                return e
            }
        },
        1620: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return M
                }
            });
            var n = r(1527),
                a = r(959),
                o = r(8568),
                i = r.n(o),
                l = r(5364),
                s = r(9465),
                c = r(5399),
                d = r(8833),
                u = r(7282),
                p = r(1970),
                g = r(4805),
                m = r(424),
                h = r(2497);
            let f = (0, m.ZP)("div", {
                    shouldForwardProp: e => "borderColor" !== e
                })(e => {
                    let {
                        theme: t,
                        borderColor: r
                    } = e;
                    return {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: t.spacing(1),
                        border: "2px dashed ".concat(t.palette.grey[300]),
                        borderRadius: t.shape.borderRadius,
                        color: t.palette.grey[200],
                        outline: "none",
                        transition: "border .24s ease-in-out",
                        ..."accept" === r && {
                            borderColor: t.palette.primary.main
                        },
                        ..."reject" === r && {
                            borderColor: t.palette.error.main
                        },
                        cursor: "pointer"
                    }
                }),
                x = (0, m.ZP)(e => (0, n.jsx)(d.Z, {
                    variant: "h5",
                    component: "p",
                    ...e
                }))(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        marginTop: t.spacing(1),
                        marginBottom: t.spacing(1),
                        textAlign: "center"
                    }
                });

            function j(e) {
                let {
                    dropzoneText: t,
                    onDrop: r
                } = e, {
                    getRootProps: o,
                    getInputProps: i,
                    isDragActive: l,
                    isDragAccept: s,
                    isDragReject: c,
                    isFileDialogActive: d,
                    isFocused: u
                } = (0, h.uI)({
                    accept: {
                        "image/*": []
                    },
                    onDrop: e => {
                        r(e)
                    }
                }), p = o(), g = (0, a.useMemo)(() => l && s || d ? "accept" : l && s ? "reject" : void 0, [l, s, d]);
                return (0, a.useEffect)(() => {
                    console.log("drag[dragBorderColor]:", g)
                }, [g]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(f, {
                        borderColor: g,
                        ...p,
                        children: [(0, n.jsx)("input", { ...i()
                        }), (0, n.jsx)(x, {
                            children: t
                        })]
                    })
                })
            }
            var b = r(4121),
                Z = r(6964);
            let k = async e => {
                let t = new FormData;
                t.append("image", e.file);
                let r = await b.Z.post("/api/image", t, {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer ".concat(e.token),
                        "Content-Type": "multipart/form-data"
                    },
                    onUploadProgress: t => {
                        if ("function" == typeof e.onUploadProgress) {
                            var r;
                            let n = Math.round(100 * t.loaded / (null !== (r = t.total) && void 0 !== r ? r : 0));
                            e.onUploadProgress(n)
                        }
                    }
                });
                return r.data
            };

            function v(e) {
                return "object" == typeof e && null !== e && (0, Z.nr)(e, "error") && (0, Z.nr)(e.error, "message")
            }

            function y(e) {
                let {
                    token: t,
                    file: r,
                    onUploaded: o
                } = e, i = (0, a.useRef)(!1), [l, c] = (0, a.useState)(void 0), [u, p] = (0, a.useState)(0);
                return (0, a.useEffect)(() => {
                    i.current || (i.current = !0, k({
                        token: t,
                        file: r,
                        onUploadProgress: e => {
                            p(e)
                        }
                    }).then(e => {
                        v(e) ? c(e.error.message) : o(r, e)
                    }).catch(e => {
                        b.Z.isAxiosError(e) && e.response && v(e.response) ? c(e.response.data.error.message) : c("Unknown exception")
                    }))
                }, [r, o, t]), (0, n.jsx)(s.Z, {
                    sx: {
                        marginTop: 1
                    },
                    children: (0, n.jsxs)(d.Z, {
                        children: [r.name, " ", l || " (progress ".concat(u, "%)")]
                    })
                })
            }

            function w(e) {
                let {
                    dropzoneText: t = "Drag 'n' drop some files here, or click to select files",
                    onUploaded: r
                } = e, [o, i] = (0, a.useState)([]), l = (0, a.useCallback)(e => {
                    let t = e.map(e => Object.assign(e, {
                        url: URL.createObjectURL(e)
                    }));
                    i(e => [...e, ...t])
                }, []);
                (0, a.useEffect)(() => () => o.forEach(e => URL.revokeObjectURL(e.url)), [o]);
                let c = (0, a.useCallback)((e, t) => {
                    "function" == typeof r && r(e.name, t), i(t => t.filter(t => t !== e))
                }, [r]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        onDrop: l,
                        dropzoneText: t
                    }), (0, n.jsx)(s.Z, {
                        children: o.map(t => (0, n.jsx)(y, {
                            token: e.token,
                            file: t,
                            onUploaded: c
                        }, t.url))
                    })]
                })
            }(0, m.ZP)("div")(() => ({
                display: "inline-flex",
                borderRadius: 2,
                border: "1px solid #eaeaea",
                marginBottom: 8,
                marginRight: 8,
                width: 100,
                height: 100,
                padding: 4,
                boxSizing: "border-box"
            })), (0, m.ZP)("div")(() => ({
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 16
            })), (0, m.ZP)("div")(() => ({
                display: "flex",
                minWidth: 0,
                overflow: "hidden"
            })), (0, m.ZP)("img")(e => {
                let {} = e;
                return {
                    display: "block",
                    width: "auto",
                    height: "100%"
                }
            });
            var C = r(2357),
                P = r(6918),
                E = r(5125),
                U = r(6277),
                _ = r(6963),
                R = r(9361);
            let S = (0, m.ZP)(_.Z)(() => ({
                color: "rgba(255, 255, 255, 0.54)",
                padding: 0
            }));

            function z(e) {
                let {
                    name: t,
                    url: r,
                    path: o
                } = e, i = (0, a.useCallback)(e => async t => "clipboard" in navigator ? await navigator.clipboard.writeText(e) : document.execCommand("copy", !0, e), []);
                return (0, n.jsx)(n.Fragment, {
                    children: o ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(U.Z, {
                            title: "Copy link v1",
                            placement: "top",
                            arrow: !0,
                            children: (0, n.jsx)(S, {
                                "aria-label": "info about ".concat(t),
                                onClick: i("https://algo.anuae.workers.dev".concat(o)),
                                children: (0, n.jsx)(R.Z, {})
                            })
                        }), (0, n.jsx)(U.Z, {
                            title: "Copy link v2",
                            placement: "top",
                            arrow: !0,
                            children: (0, n.jsx)(S, {
                                "aria-label": "info about ".concat(t),
                                onClick: i("https://algo.dating.workers.dev".concat(o)),
                                children: (0, n.jsx)(R.Z, {})
                            })
                        })]
                    }) : (0, n.jsx)(U.Z, {
                        title: "Copy link",
                        placement: "top",
                        arrow: !0,
                        children: (0, n.jsx)(S, {
                            "aria-label": "info about ".concat(t),
                            onClick: i(r),
                            children: (0, n.jsx)(R.Z, {})
                        })
                    })
                })
            }
            let I = (0, m.ZP)(d.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                    }
                }),
                A = (0, m.ZP)(P.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                        ["& .".concat(E.Z.titleWrap, ", .").concat(E.Z.actionIcon)]: {
                            padding: 0,
                            marginBottom: t.spacing(1)
                        },
                        ["& .".concat(E.Z.titleWrap)]: {
                            marginLeft: t.spacing(1)
                        },
                        ["& .".concat(E.Z.actionIcon)]: {
                            marginRight: t.spacing(1),
                            display: "flex"
                        }
                    }
                });

            function O(e) {
                let {
                    imageData: t
                } = e, r = (0, a.useMemo)(() => "https://kerjakelompok.b-cdn.net".concat(t.path), [t.path]);
                return (0, n.jsxs)(C.Z, {
                    children: [(0, n.jsx)("img", {
                        src: r,
                        srcSet: r,
                        alt: t.name,
                        loading: "lazy"
                    }), (0, n.jsx)(A, {
                        title: (0, n.jsx)(U.Z, {
                            title: t.name,
                            placement: "top",
                            arrow: !0,
                            children: (0, n.jsx)(I, {
                                children: t.name
                            })
                        }),
                        actionIcon: (0, n.jsx)(z, {
                            url: r,
                            path: t.path,
                            name: r
                        })
                    })]
                })
            }
            var D = r(6407),
                T = r(6411),
                F = r(3351),
                N = r(4006),
                B = r(9785),
                L = r(658);

            function W() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                localStorage.setItem("mtk_l", JSON.stringify(e))
            }

            function M() {
                let e = (0, g.useRouter)(),
                    t = (0, D.z)(),
                    r = t.isInitialized,
                    [o, m] = (0, a.useState)(!1),
                    [h, f] = (0, a.useState)([]),
                    x = function() {
                        let e = (0, N.Z)(),
                            t = 2,
                            r = 164,
                            n = (0, B.Z)(e.breakpoints.up("sm"));
                        n && (t = 2, r = 205);
                        let a = (0, B.Z)(e.breakpoints.up("md"));
                        a && (t = 3, r = 205);
                        let o = (0, B.Z)(e.breakpoints.up("lg"));
                        return o && (t = 4, r = 205), {
                            cols: t,
                            rowHeight: r,
                            gaps: 8
                        }
                    }(),
                    j = (0, a.useCallback)((e, t) => {
                        f(r => [{
                            name: e,
                            url: t.url,
                            path: t.path
                        }, ...r])
                    }, []);
                return (0, a.useEffect)(() => {
                    e && t.isInitialized && !t.token && e.push("/auth")
                }, [t.isInitialized, t.token, e]), (0, a.useEffect)(() => {
                    Z.jU && m(e => e || (f(function() {
                        let e, t = localStorage.getItem("mtk_l");
                        if (!t) return W([]), [];
                        try {
                            e = JSON.parse(t)
                        } catch (e) {}
                        return Array.isArray(e) ? e : (W([]), [])
                    }()), !0))
                }, [o]), (0, a.useEffect)(() => {
                    Z.jU && o && W(h)
                }, [o, h]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i(), {
                        children: (0, n.jsx)("title", {
                            children: "Matematika"
                        })
                    }), (0, n.jsxs)(l.A, {
                        children: [(0, n.jsx)(d.Z, {
                            variant: "h3",
                            children: "Matematika"
                        }), (0, n.jsx)(c.Z, {
                            sx: {
                                marginY: 1
                            }
                        }), (0, n.jsx)(L.Z, {
                            sx: {
                                marginBottom: 1
                            },
                            severity: "info",
                            children: "Upload seperlunya yah cak ✌"
                        }), r && t.token ? (0, n.jsx)(w, {
                            onUploaded: j,
                            token: t.token
                        }) : (0, n.jsxs)(s.Z, {
                            sx: {
                                textAlign: "center"
                            },
                            children: [(0, n.jsx)(u.Z, {
                                sx: {
                                    display: "block",
                                    margin: "auto",
                                    ["&.".concat(p.Z.root, ", .").concat(p.Z.circle)]: {
                                        animationDuration: "0.7s"
                                    }
                                },
                                size: 80,
                                thickness: 4.6
                            }), (0, n.jsx)(d.Z, {
                                variant: "body1",
                                mt: 1,
                                children: "Loading"
                            })]
                        })]
                    }), r && t.token && (0, n.jsx)(F.Z, {
                        maxWidth: "xl",
                        disableGutters: !0,
                        children: (0, n.jsx)(T.Z, {
                            variant: "quilted",
                            ...x,
                            children: h.map(e => (0, n.jsx)(O, {
                                imageData: e
                            }, e.path))
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [244, 60, 774, 888, 179], function() {
            return e(e.s = 9424)
        }), _N_E = e.O()
    }
]);