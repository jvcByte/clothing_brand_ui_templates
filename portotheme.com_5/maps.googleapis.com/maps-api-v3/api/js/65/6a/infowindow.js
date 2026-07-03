google.maps.__gjsload__('infowindow', function(_) {
    var iMa = function(a, b) {
            if (a.oh.size === 1) {
                let c = Array.from(a.oh.values())[0];
                c.Fs !== b.Fs && (c.set("map", null), a.oh.delete(c))
            }
            a.oh.add(b)
        },
        kMa = function(a, b, c = !1) {
            var d = a.__gm;
            a = d.get("panes");
            d = d.get("innerContainer");
            b = {
                dn: a,
                Qj: _.SB.Qj(),
                Zz: d,
                shouldFocus: b,
                Fs: c
            };
            return new jMa(b)
        },
        mL = function(a, b) {
            a.container.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? lMa(a) : a.zh = !1
        },
        mMa = function(a) {
            a.Kj.setAttribute("aria-labelledby", a.rh.id)
        },
        nMa = function(a) {
            var b = !!a.get("open"),
                c = a.get("content");
            c = b ? c : null;
            if (c === a.th) mL(a, b && a.get("position"));
            else {
                if (a.th) {
                    let d = a.th.parentNode;
                    d === a.oh && d.removeChild(a.th)
                }
                c && (a.yh = !1, a.oh.appendChild(c));
                mL(a, b && a.get("position"));
                a.th = c;
                nL(a)
            }
        },
        oL = function(a) {
            var b = !!a.get("open"),
                c = a.get("headerContent"),
                d = !!a.get("ariaLabel"),
                e = a.get("headerDisabled"),
                f = !!a.get("isPoi"),
                g = !e;
            b = b ? c : null;
            c = f && e;
            a.Kj.style.paddingTop = !f && e ? "12px" : "0";
            e = a.Kj;
            c ? _.Gw(e, "gm-style-iw-poi") : _.hF(e, "gm-style-iw-poi");
            _.mq.oh && !_.mq.wh && (a.oh.style.overflow =
                c ? "auto" : "scroll");
            b === a.wh ? a.qh.style.display = g ? "" : "none" : (a.wh && (e = a.wh.parentNode, e === a.rh && e.removeChild(a.wh)), b && (a.yh = !1, a.rh.appendChild(b), g && !d && mMa(a)), a.qh.style.display = g ? "" : "none", a.wh = b, nL(a))
        },
        pL = function(a, b) {
            var c = !!a.get("isPoi");
            a = !!a.get("headerDisabled");
            c && a && b instanceof HTMLElement && (b.style.outline = "none");
            return _.tq(b, !0)
        },
        nL = function(a) {
            var b = a.getSize();
            if (b) {
                var c = b.Yn;
                b = b.minWidth;
                a.Kj.style.maxWidth = _.Im(c.width);
                a.Kj.style.maxHeight = _.Im(c.height);
                a.Kj.style.minWidth =
                    _.Im(b);
                b = !!a.get("headerDisabled");
                b = !!a.get("isPoi") && b;
                a.oh.style.maxHeight = _.mq.oh ? _.Im(c.height - (b ? 0 : 18)) : _.Im(c.height - (b ? 0 : 36));
                qL(a);
                a.xh.start()
            }
        },
        oMa = function(a) {
            var b = a.get("pixelOffset") || new _.Jo(0, 0),
                c = new _.Jo(a.Kj.offsetWidth, a.Kj.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            b.height < 0 && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        lMa = function(a) {
            !a.zh && a.get("open") && a.get("visible") && a.get("position") && (_.Pn(a,
                "visible"), a.zh = !0)
        },
        qL = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = oMa(a);
                let d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.Kw(a.anchor, b);
                b = a.get("zIndex");
                _.Mw(a.container, _.Cm(b) ? b : e + 60);
                a.set("pixelBounds", _.bp(d, e, f, c))
            }
        },
        qMa = function(a, b, c) {
            return b instanceof _.fo ? new pMa(a, b, c) : new pMa(a, b)
        },
        sMa = function(a) {
            a.oh && a.Ii.push(_.Nn(a.oh, "pixelposition_changed", () => {
                rMa(a)
            }))
        },
        rMa = function(a) {
            var b = a.model.get("pixelPosition") || a.oh && a.oh.get("pixelPosition");
            a.rh.set("position", b)
        },
        uMa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new tMa);
            return a.get("IW_AUTO_CLOSER")
        },
        tMa = class {
            constructor() {
                this.oh = new Set
            }
        };
    var jMa = class extends _.Sn {
        constructor(a) {
            super();
            this.th = this.wh = this.uh = null;
            this.zh = this.yh = !1;
            this.Zz = a.Zz;
            this.shouldFocus = a.shouldFocus;
            this.container = document.createElement("div");
            this.container.style.cursor = "default";
            this.container.style.position = "absolute";
            this.container.style.left = this.container.style.top = "0";
            a.dn.floatPane.appendChild(this.container);
            this.anchor = document.createElement("div");
            this.container.appendChild(this.anchor);
            this.sh = document.createElement("div");
            this.anchor.appendChild(this.sh);
            this.Kj = document.createElement("div");
            this.sh.appendChild(this.Kj);
            this.Kj.setAttribute("role", "dialog");
            this.Kj.tabIndex = -1;
            this.qh = document.createElement("div");
            this.Kj.appendChild(this.qh);
            this.rh = document.createElement("div");
            this.qh.appendChild(this.rh);
            this.Ch = document.createElement("div");
            this.sh.appendChild(this.Ch);
            this.oh = document.createElement("div");
            this.Kj.appendChild(this.oh);
            _.UCa(this.container);
            _.Gw(this.Kj, "gm-style-iw");
            _.Gw(this.anchor, "gm-style-iw-a");
            _.Gw(this.sh, "gm-style-iw-t");
            _.Gw(this.Ch, "gm-style-iw-tc");
            _.Gw(this.Kj, "gm-style-iw-c");
            _.Gw(this.qh, "gm-style-iw-chr");
            _.Gw(this.rh, "gm-style-iw-ch");
            _.Gw(this.oh, "gm-style-iw-d");
            this.set("isPoi", a.Fs);
            this.rh.setAttribute("id", _.eo());
            _.mq.oh && !_.mq.wh && (this.Kj.style.paddingInlineEnd = "0", this.Kj.style.paddingBottom = "0", this.oh.style.overflow = "scroll");
            mL(this, !1);
            _.Jn(this.container, "mousedown", _.Bn);
            _.Jn(this.container, "mouseup", _.Bn);
            _.Jn(this.container, "mousemove", _.Bn);
            _.Jn(this.container, "pointerdown", _.Bn);
            _.Jn(this.container,
                "pointerup", _.Bn);
            _.Jn(this.container, "pointermove", _.Bn);
            _.Jn(this.container, "dblclick", _.Bn);
            _.Jn(this.container, "click", _.Bn);
            _.Jn(this.container, "touchstart", _.Bn);
            _.Jn(this.container, "touchend", _.Bn);
            _.Jn(this.container, "touchmove", _.Bn);
            _.xw(this.container, "contextmenu", this, this.Dh);
            _.xw(this.container, "wheel", this, _.Bn);
            a = new _.Fo(12, 12);
            var b = new _.Jo(24, 24);
            this.ph = new _.or({
                Cs: a,
                ku: b,
                offset: new _.Fo(-6, -6),
                DE: !0,
                ownerElement: this.qh
            });
            this.qh.appendChild(this.ph.element);
            _.Jn(this.ph.element,
                "click", c => {
                    _.Bn(c);
                    _.Pn(this, "closeclick");
                    this.set("open", !1)
                });
            this.xh = new _.Wp(() => {
                !this.yh && this.get("content") && this.get("visible") && (_.Pn(this, "domready"), this.yh = !0)
            }, 0);
            this.Ah = _.Jn(this.container, "keydown", c => {
                c.key !== "Escape" && c.key !== "Esc" || !this.Kj.contains(document.activeElement) || (c.stopPropagation(), _.Pn(this, "closeclick"), this.set("open", !1))
            })
        }
        ariaLabel_changed() {
            var a = this.get("ariaLabel");
            a ? this.Kj.setAttribute("aria-label", a) : (this.Kj.removeAttribute("aria-label"), this.get("headerDisabled") ||
                mMa(this))
        }
        open_changed() {
            nMa(this);
            oL(this)
        }
        headerContent_changed() {
            oL(this)
        }
        headerDisabled_changed() {
            oL(this)
        }
        content_changed() {
            nMa(this)
        }
        pendingFocus_changed() {
            this.get("pendingFocus") && (this.get("open") && this.get("visible") && this.get("position") ? pL(this, this.Kj) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."), this.set("pendingFocus", !1))
        }
        dispose() {
            setTimeout(() => {
                document.activeElement && document.activeElement !== document.body ||
                    (this.uh && this.uh !== document.body ? pL(this, this.uh) || pL(this, this.Zz) : pL(this, this.Zz))
            });
            this.Ah && _.Fn(this.Ah);
            this.container.parentNode.removeChild(this.container);
            this.xh.stop();
            this.xh.dispose()
        }
        getSize() {
            var a = this.get("layoutPixelBounds"),
                b = this.get("pixelOffset"),
                c = this.get("maxWidth") || 648,
                d = this.get("minWidth") || 0;
            if (!b) return null;
            a ? (b = a.maxY - a.minY - (11 + -b.height), a = a.maxX - a.minX - 6, a >= 240 && (a -= 120), b >= 240 && (b -= 120)) : (a = 648, b = 654);
            a = Math.min(a, c);
            a = Math.max(d, a);
            a = Math.max(0, a);
            b = Math.max(0,
                b);
            return {
                Yn: new _.Jo(a, b),
                minWidth: d
            }
        }
        pixelOffset_changed() {
            var a = this.get("pixelOffset") || new _.Jo(0, 0);
            this.sh.style.right = _.Im(-a.width);
            this.sh.style.bottom = _.Im(-a.height + 11);
            nL(this)
        }
        layoutPixelBounds_changed() {
            nL(this)
        }
        position_changed() {
            this.get("position") ? (qL(this), mL(this, !!this.get("open"))) : mL(this, !1)
        }
        zIndex_changed() {
            qL(this)
        }
        visible_changed() {
            this.container.style.display = this.get("visible") ? "" : "none";
            this.xh.start();
            if (this.get("visible")) {
                let a = this.ph.element.style.display;
                this.ph.element.style.display =
                    "none";
                this.ph.element.getBoundingClientRect();
                this.ph.element.style.display = a;
                lMa(this)
            } else this.zh = !1
        }
        Dh(a) {
            for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d === c, d = d.parentNode;
            b ? _.yn(a) : _.An(a)
        }
        focus() {
            this.uh = document.activeElement;
            var a;
            _.mq.yh && (a = this.oh.getBoundingClientRect());
            if (this.get("disableAutoPan")) pL(this, this.Kj);
            else {
                var b = _.Qw(this.oh);
                if (b.length) {
                    b = b[0];
                    a = a || this.oh.getBoundingClientRect();
                    var c = b.getBoundingClientRect();
                    pL(this, c.bottom <= a.bottom && c.right <= a.right ?
                        b : this.Kj)
                } else pL(this, this.ph.element)
            }
        }
    };
    var pMa = class {
        constructor(a, b, c) {
            this.model = a;
            this.isOpen = !0;
            this.oh = this.qh = this.Nh = null;
            this.Ii = [];
            var d = a.get("shouldFocus");
            this.rh = kMa(b, d, a.Fs);
            var e = b.__gm;
            (d = b instanceof _.fo) && c ? c.then(h => {
                this.isOpen && (this.Nh = h, this.oh = new _.dJ(k => {
                    this.qh = new _.oB(b, h, k, () => {});
                    h.Jj(this.qh);
                    return this.qh
                }), this.oh.bindTo("latLngPosition", a, "position"), sMa(this))
            }) : (this.oh = new _.dJ, this.oh.bindTo("latLngPosition", a, "position"), this.oh.bindTo("center", e, "projectionCenterQ"), this.oh.bindTo("zoom", e),
                this.oh.bindTo("offset", e), this.oh.bindTo("projection", b), this.oh.bindTo("focus", b, "position"), sMa(this));
            this.sh = d ? a.infoWindow.get("logAsInternal") ? 148284 : 148285 : null;
            var f = new _.RI(["scale"], "visible", h => h == null || h >= .3);
            this.oh && f.bindTo("scale", this.oh);
            var g = this.rh;
            g.set("logAsInternal", !!a.infoWindow.get("logAsInternal"));
            g.bindTo("ariaLabel", a);
            g.bindTo("zIndex", a);
            g.bindTo("layoutPixelBounds", e, "pixelBounds");
            g.bindTo("disableAutoPan", a);
            g.bindTo("pendingFocus", a);
            g.bindTo("maxWidth", a);
            g.bindTo("minWidth", a);
            g.bindTo("content", a);
            g.bindTo("headerContent", a);
            g.bindTo("headerDisabled", a);
            g.bindTo("pixelOffset", a);
            g.bindTo("visible", f);
            this.ph = new _.Wp(() => {
                if (b instanceof _.fo)
                    if (this.Nh) {
                        var h = a.get("position");
                        h && _.$ma(b, this.Nh, new _.mo(h), oMa(g))
                    } else c.then(() => {
                        this.ph.start()
                    });
                else(h = g.get("pixelBounds")) ? _.Pn(e, "pantobounds", h) : this.ph.start()
            }, 150);
            if (d) {
                let h = null;
                this.Ii.push(_.Nn(a, "position_changed", () => {
                    var k = a.get("position");
                    !k || a.get("disableAutoPan") || k.equals(h) ||
                        (this.ph.start(), h = k)
                }))
            } else a.get("disableAutoPan") || this.ph.start();
            g.set("open", !0);
            this.Ii.push(_.Dn(g, "domready", () => {
                a.trigger("domready")
            }));
            this.Ii.push(_.Dn(g, "visible", () => {
                a.trigger("visible")
            }));
            this.Ii.push(_.Dn(g, "closeclick", () => {
                a.close();
                a.trigger("closeclick")
            }));
            this.Ii.push(_.Nn(a, "pixelposition_changed", () => {
                rMa(this)
            }));
            this.sh && _.I(b, this.sh)
        }
        close() {
            if (this.isOpen) {
                this.isOpen = !1;
                this.model.trigger("close");
                for (var a of this.Ii) _.Fn(a);
                this.Ii.length = 0;
                this.ph.stop();
                this.ph.dispose();
                this.Nh && this.qh && this.Nh.pm(this.qh);
                a = this.rh;
                a.unbindAll();
                a.set("open", !1);
                a.dispose();
                this.oh && this.oh.unbindAll()
            }
        }
    };
    _.hm("infowindow", {
        KK: function(a) {
            var b = null;
            _.Nn(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.SF.oh.delete(a), b.qO.close(), b = null);
                if (e) {
                    let f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        qO: qMa(a, e, e instanceof _.fo ? f.ph.then(({
                            Nh: g
                        }) => g) : void 0),
                        SF: uMa(e)
                    }, iMa(b.SF, a)) : _.Mn(f, "innercontainer_changed", d) : _.Mn(f, "panes_changed", d)
                }
            })
        }
    });
});