(function (e, t) { typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : e.detector = t() })(this, function () { function e(e) { return Object.prototype.toString.call(e) } function t(t) { return e(t) === "[object Object]" } function n(t) { return e(t) === "[object Function]" } function r(e, t, n) { for (var r = 0, i, s = e.length; r < s; r++)if (t.call(e, e[r], r) === !1) break } function i(e) { if (!d.test(e)) return null; var t, n, r, i, s, o = !1; if (e.indexOf("trident/") !== -1) { t = /\btrident\/([0-9.]+)/.exec(e); if (t && t.length >= 2) { r = t[1]; var u = t[1].split("."); u[0] = parseInt(u[0], 10) + 4, s = u.join(".") } } t = d.exec(e), i = t[1]; var a = t[1].split("."); return "undefined" == typeof s && (s = i), a[0] = parseInt(a[0], 10) - 4, n = a.join("."), "undefined" == typeof r && (r = n), { browserVersion: s, browserMode: i, engineVersion: r, engineMode: n, compatible: r !== n } } function s(e) { if (!p) return; try { var t = p.twGetRunPath.toLowerCase(), n = p.twGetSecurityID(window), r = p.twGetVersion(n); if (t && t.indexOf(e) === -1) return !1; if (r) return { version: r } } catch (i) { } } function o(r, i, s) { var o = n(i) ? i.call(null, s) : i; if (!o) return null; var u = { name: r, version: f, codename: "" }, a = e(o); if (o === !0) return u; if (a === "[object String]") { if (s.indexOf(o) !== -1) return u } else { if (t(o)) return o.hasOwnProperty("version") && (u.version = o.version), u; if (o.exec) { var l = o.exec(s); if (l) return l.length >= 2 && l[1] ? u.version = l[1].replace(/_/g, ".") : u.version = f, u } } } function u(e, t, n, i) { var s = b; r(t, function (t) { var n = o(t[0], t[1], e); if (n) return s = n, !1 }), n.call(i, s.name, s.version) } var a = {}, f = "-1", l = navigator.userAgent || "", c = navigator.appVersion || "", h = navigator.vendor || "", p = window.external, d = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/, v = [["nokia", function (e) { return e.indexOf("nokia ") !== -1 ? /\bnokia ([0-9]+)?/ : e.indexOf("noain") !== -1 ? /\bnoain ([a-z0-9]+)/ : /\bnokia([a-z0-9]+)?/ }], ["samsung", function (e) { return e.indexOf("samsung") !== -1 ? /\bsamsung(?:\-gt)?[ \-]([a-z0-9\-]+)/ : /\b(?:gt|sch)[ \-]([a-z0-9\-]+)/ }], ["wp", function (e) { return e.indexOf("windows phone ") !== -1 || e.indexOf("xblwp") !== -1 || e.indexOf("zunewp") !== -1 || e.indexOf("windows ce") !== -1 }], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"], ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build))/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", /\b(?:meizu\/|m)([0-9]+)\b/], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function (e) { return e.indexOf("huawei-huawei") !== -1 ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : /\bhuawei[ _\-]?([a-z0-9]+)/ }], ["lenovo", function (e) { return e.indexOf("lenovo-lenovo") !== -1 ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/ }], ["zte", function (e) { return /\bzte\-[tu]/.test(e) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/ }], ["vivo", /\bvivo ([a-z0-9]+)/], ["htc", function (e) { return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/ }], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", "android"], ["blackberry", "blackberry"]], m = [["wp", function (e) { return e.indexOf("windows phone ") !== -1 ? /\bwindows phone (?:os )?([0-9.]+)/ : e.indexOf("xblwp") !== -1 ? /\bxblwp([0-9.]+)/ : e.indexOf("zunewp") !== -1 ? /\bzunewp([0-9.]+)/ : "windows phone" }], ["windows", /\bwindows nt ([0-9.]+)/], ["macosx", /\bmac os x ([0-9._]+)/], ["ios", function (e) { return /\bcpu(?: iphone)? os /.test(e) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : e.indexOf("iph os ") !== -1 ? /\biph os ([0-9_]+)/ : /\bios\b/ }], ["yunos", /\baliyunos ([0-9.]+)/], ["android", /\bandroid[\/\- ]?([0-9.x]+)?/], ["chromeos", /\bcros i686 ([0-9.]+)/], ["linux", "linux"], ["windowsce", /\bwindows ce(?: ([0-9.]+))?/], ["symbian", /\bsymbian(?:os)?\/([0-9.]+)/], ["meego", /\bmeego\b/], ["blackberry", "blackberry"]], g = [["trident", d], ["webkit", /\bapplewebkit[\/]?([0-9.+]+)/], ["gecko", /\bgecko\/(\d+)/], ["presto", /\bpresto\/([0-9.]+)/], ["androidwebkit", /\bandroidwebkit\/([0-9.]+)/], ["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/]], y = [["sg", / se ([0-9.x]+)/], ["tw", function (e) { var t = s("theworld"); return typeof t != "undefined" ? t : "theworld" }], ["360", function (e) { var t = s("360se"); return typeof t != "undefined" ? t : e.indexOf("360 aphone browser") !== -1 ? /\b360 aphone browser \(([^\)]+)\)/ : /\b360(?:se|ee|chrome|browser)\b/ }], ["mx", function (e) { try { if (p && (p.mxVersion || p.max_version)) return { version: p.mxVersion || p.max_version } } catch (t) { } return /\bmaxthon(?:[ \/]([0-9.]+))?/ }], ["qq", /\bm?qqbrowser\/([0-9.]+)/], ["green", "greenbrowser"], ["tt", /\btencenttraveler ([0-9.]+)/], ["lb", function (e) { if (e.indexOf("lbbrowser") === -1) return !1; var t; try { p && p.LiebaoGetVersion && (t = p.LiebaoGetVersion()) } catch (n) { } return { version: t || f } }], ["tao", /\btaobrowser\/([0-9.]+)/], ["fs", /\bcoolnovo\/([0-9.]+)/], ["sy", "saayaa"], ["baidu", /\bbidubrowser[ \/]([0-9.x]+)/], ["ie", d], ["mi", /\bmiuibrowser\/([0-9.]+)/], ["opera", function (e) { var t = /\bopera.+version\/([0-9.ab]+)/, n = /\bopr\/([0-9.]+)/; return t.test(e) ? t : n }], ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/], ["uc", function (e) { return e.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(e) ? /\buc\/([0-9.]+)/ : e.indexOf("ucweb") >= 0 ? /\bucweb[\/]?([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/ }], ["android", function (e) { if (e.indexOf("android") === -1) return; return /\bversion\/([0-9.]+(?: beta)?)/ }], ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//], ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/], ["firefox", /\bfirefox\/([0-9.ab]+)/], ["nokia", /\bnokiabrowser\/([0-9.]+)/]], b = { name: "na", version: f }, w = function (e) { e = (e || "").toLowerCase(); var t = {}; u(e, v, function (e, n) { var r = parseFloat(n); t.device = { name: e, version: r, fullVersion: n }, t.device[e] = r }, t), u(e, m, function (e, n) { var r = parseFloat(n); t.os = { name: e, version: r, fullVersion: n }, t.os[e] = r }, t); var n = i(e); return u(e, g, function (e, r) { var i = r; n && (r = n.engineVersion || n.engineMode, i = n.engineMode); var s = parseFloat(r); t.engine = { name: e, version: s, fullVersion: r, mode: parseFloat(i), fullMode: i, compatible: n ? n.compatible : !1 }, t.engine[e] = s }, t), u(e, y, function (e, r) { var i = r; n && (e === "ie" && (r = n.browserVersion), i = n.browserMode); var s = parseFloat(r); t.browser = { name: e, version: s, fullVersion: r, mode: parseFloat(i), fullMode: i, compatible: n ? n.compatible : !1 }, t.browser[e] = s }, t), t }; return a = w(l + " " + c + " " + h), a.parse = w, a });