(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [473], {
        6558: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/auth", function() {
                return n(5610)
            }])
        },
        5364: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return o
                }
            });
            var r = n(1527),
                a = n(959),
                u = n(424);
            let i = (0, u.ZP)("main")(() => ({
                    maxWidth: 600,
                    margin: "auto"
                })),
                o = (0, a.forwardRef)(function(e, t) {
                    return (0, r.jsx)(i, {
                        ref: t,
                        ...e
                    })
                })
        },
        6407: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return u
                }
            });
            var r = n(959),
                a = n(4988);

            function u() {
                let e = (0, r.useContext)(a.O);
                if (!e) throw Error("useGuard must be used within a GuardProvider");
                return e
            }
        },
        5610: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r = n(1527),
                a = n(959),
                u = n(8568),
                i = n.n(u),
                o = n(4805),
                s = n(5364),
                c = n(9465),
                d = n(5399),
                l = n(4520),
                f = n(6292),
                h = n(8833),
                p = n(2959),
                m = n(9017),
                j = n(6407);

            function w() {
                let [e, t] = (0, a.useState)(""), n = (0, j.z)(), u = (0, o.useRouter)(), w = (0, m.useQueryClient)(), x = (0, m.useMutation)({
                    mutationFn: async e => {
                        let t = await fetch("/api/auth", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                },
                                body: JSON.stringify(e)
                            }),
                            n = await t.json();
                        return "object" == typeof n.error && n.error.message ? Promise.reject(n) : t.ok ? n : {
                            error: {
                                message: "Error: ".concat(t.status)
                            }
                        }
                    },
                    onSuccess: e => {
                        w.invalidateQueries({
                            queryKey: ["auth"]
                        }), e.token && (n.setToken(e.token), u.push("/"))
                    }
                }), b = (0, a.useCallback)(e => {
                    t(e.target.value)
                }, []), _ = (0, a.useCallback)(t => {
                    t.preventDefault(), x.mutate({
                        password: e
                    })
                }, [x, e]);
                return (0, r.jsxs)(s.A, {
                    children: [(0, r.jsx)(i(), {
                        children: (0, r.jsx)("title", {
                            children: "Matematika | Authorization"
                        })
                    }), (0, r.jsx)(h.Z, {
                        variant: "h4",
                        children: "Authorization"
                    }), (0, r.jsx)(d.Z, {
                        sx: {
                            marginY: 1
                        }
                    }), (0, r.jsxs)(c.Z, {
                        component: "form",
                        onSubmit: _,
                        children: [(0, r.jsx)(l.Z, {
                            name: "password",
                            placeholder: "password",
                            type: "password",
                            autoComplete: "off",
                            fullWidth: !0,
                            autoFocus: !0,
                            label: "Password",
                            onChange: b,
                            margin: "dense"
                        }), (0, r.jsx)(f.Z, {
                            margin: "dense",
                            children: (0, r.jsx)(p.Z, {
                                type: "submit",
                                variant: "outlined",
                                disabled: x.isLoading,
                                children: "Submit"
                            })
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [244, 769, 774, 888, 179], function() {
            return e(e.s = 6558)
        }), _N_E = e.O()
    }
]);