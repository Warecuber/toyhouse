!(function (t, e) {
	"object" == typeof module && "object" == typeof module.exports
		? (module.exports = t.document
				? e(t, !0)
				: function (t) {
						if (!t.document)
							throw new Error("jQuery requires a window with a document");
						return e(t);
				  })
		: e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
	var i = [],
		n = t.document,
		s = i.slice,
		o = i.concat,
		a = i.push,
		r = i.indexOf,
		l = {},
		h = l.toString,
		c = l.hasOwnProperty,
		u = {},
		d = "2.2.4",
		p = function (t, e) {
			return new p.fn.init(t, e);
		},
		f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		g = /^-ms-/,
		m = /-([\da-z])/gi,
		v = function (t, e) {
			return e.toUpperCase();
		};
	function _(t) {
		var e = !!t && "length" in t && t.length,
			i = p.type(t);
		return (
			"function" !== i &&
			!p.isWindow(t) &&
			("array" === i ||
				0 === e ||
				("number" == typeof e && e > 0 && e - 1 in t))
		);
	}
	(p.fn = p.prototype =
		{
			jquery: d,
			constructor: p,
			selector: "",
			length: 0,
			toArray: function () {
				return s.call(this);
			},
			get: function (t) {
				return null != t
					? 0 > t
						? this[t + this.length]
						: this[t]
					: s.call(this);
			},
			pushStack: function (t) {
				var e = p.merge(this.constructor(), t);
				return (e.prevObject = this), (e.context = this.context), e;
			},
			each: function (t) {
				return p.each(this, t);
			},
			map: function (t) {
				return this.pushStack(
					p.map(this, function (e, i) {
						return t.call(e, i, e);
					})
				);
			},
			slice: function () {
				return this.pushStack(s.apply(this, arguments));
			},
			first: function () {
				return this.eq(0);
			},
			last: function () {
				return this.eq(-1);
			},
			eq: function (t) {
				var e = this.length,
					i = +t + (0 > t ? e : 0);
				return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
			},
			end: function () {
				return this.prevObject || this.constructor();
			},
			push: a,
			sort: i.sort,
			splice: i.splice,
		}),
		(p.extend = p.fn.extend =
			function () {
				var t,
					e,
					i,
					n,
					s,
					o,
					a = arguments[0] || {},
					r = 1,
					l = arguments.length,
					h = !1;
				for (
					"boolean" == typeof a && ((h = a), (a = arguments[r] || {}), r++),
						"object" == typeof a || p.isFunction(a) || (a = {}),
						r === l && ((a = this), r--);
					l > r;
					r++
				)
					if (null != (t = arguments[r]))
						for (e in t)
							(i = a[e]),
								a !== (n = t[e]) &&
									(h && n && (p.isPlainObject(n) || (s = p.isArray(n)))
										? (s
												? ((s = !1), (o = i && p.isArray(i) ? i : []))
												: (o = i && p.isPlainObject(i) ? i : {}),
										  (a[e] = p.extend(h, o, n)))
										: void 0 !== n && (a[e] = n));
				return a;
			}),
		p.extend({
			expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (t) {
				throw new Error(t);
			},
			noop: function () {},
			isFunction: function (t) {
				return "function" === p.type(t);
			},
			isArray: Array.isArray,
			isWindow: function (t) {
				return null != t && t === t.window;
			},
			isNumeric: function (t) {
				var e = t && t.toString();
				return !p.isArray(t) && e - parseFloat(e) + 1 >= 0;
			},
			isPlainObject: function (t) {
				var e;
				if ("object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
				if (
					t.constructor &&
					!c.call(t, "constructor") &&
					!c.call(t.constructor.prototype || {}, "isPrototypeOf")
				)
					return !1;
				for (e in t);
				return void 0 === e || c.call(t, e);
			},
			isEmptyObject: function (t) {
				var e;
				for (e in t) return !1;
				return !0;
			},
			type: function (t) {
				return null == t
					? t + ""
					: "object" == typeof t || "function" == typeof t
					? l[h.call(t)] || "object"
					: typeof t;
			},
			globalEval: function (t) {
				var e,
					i = eval;
				(t = p.trim(t)) &&
					(1 === t.indexOf("use strict")
						? (((e = n.createElement("script")).text = t),
						  n.head.appendChild(e).parentNode.removeChild(e))
						: i(t));
			},
			camelCase: function (t) {
				return t.replace(g, "ms-").replace(m, v);
			},
			nodeName: function (t, e) {
				return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
			},
			each: function (t, e) {
				var i,
					n = 0;
				if (_(t))
					for (i = t.length; i > n && !1 !== e.call(t[n], n, t[n]); n++);
				else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
				return t;
			},
			trim: function (t) {
				return null == t ? "" : (t + "").replace(f, "");
			},
			makeArray: function (t, e) {
				var i = e || [];
				return (
					null != t &&
						(_(Object(t))
							? p.merge(i, "string" == typeof t ? [t] : t)
							: a.call(i, t)),
					i
				);
			},
			inArray: function (t, e, i) {
				return null == e ? -1 : r.call(e, t, i);
			},
			merge: function (t, e) {
				for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
				return (t.length = s), t;
			},
			grep: function (t, e, i) {
				for (var n = [], s = 0, o = t.length, a = !i; o > s; s++)
					!e(t[s], s) !== a && n.push(t[s]);
				return n;
			},
			map: function (t, e, i) {
				var n,
					s,
					a = 0,
					r = [];
				if (_(t))
					for (n = t.length; n > a; a++)
						null != (s = e(t[a], a, i)) && r.push(s);
				else for (a in t) null != (s = e(t[a], a, i)) && r.push(s);
				return o.apply([], r);
			},
			guid: 1,
			proxy: function (t, e) {
				var i, n, o;
				return (
					"string" == typeof e && ((i = t[e]), (e = t), (t = i)),
					p.isFunction(t)
						? ((n = s.call(arguments, 2)),
						  ((o = function () {
								return t.apply(e || this, n.concat(s.call(arguments)));
						  }).guid = t.guid =
								t.guid || p.guid++),
						  o)
						: void 0
				);
			},
			now: Date.now,
			support: u,
		}),
		"function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]),
		p.each(
			"Boolean Number String Function Array Date RegExp Object Error Symbol".split(
				" "
			),
			function (t, e) {
				l["[object " + e + "]"] = e.toLowerCase();
			}
		);
	var b = (function (t) {
		var e,
			i,
			n,
			s,
			o,
			a,
			r,
			l,
			h,
			c,
			u,
			d,
			p,
			f,
			g,
			m,
			v,
			_,
			b,
			y = "sizzle" + 1 * new Date(),
			w = t.document,
			x = 0,
			C = 0,
			k = ot(),
			T = ot(),
			D = ot(),
			S = function (t, e) {
				return t === e && (u = !0), 0;
			},
			E = 1 << 31,
			I = {}.hasOwnProperty,
			A = [],
			P = A.pop,
			O = A.push,
			F = A.push,
			M = A.slice,
			N = function (t, e) {
				for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
				return -1;
			},
			H =
				"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			$ = "[\\x20\\t\\r\\n\\f]",
			L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			z =
				"\\[" +
				$ +
				"*(" +
				L +
				")(?:" +
				$ +
				"*([*^$|!~]?=)" +
				$ +
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
				L +
				"))|)" +
				$ +
				"*\\]",
			W =
				":(" +
				L +
				")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
				z +
				")*)|.*)\\)|)",
			j = new RegExp($ + "+", "g"),
			R = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
			q = new RegExp("^" + $ + "*," + $ + "*"),
			B = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
			Y = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]", "g"),
			U = new RegExp(W),
			K = new RegExp("^" + L + "$"),
			V = {
				ID: new RegExp("^#(" + L + ")"),
				CLASS: new RegExp("^\\.(" + L + ")"),
				TAG: new RegExp("^(" + L + "|[*])"),
				ATTR: new RegExp("^" + z),
				PSEUDO: new RegExp("^" + W),
				CHILD: new RegExp(
					"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
						$ +
						"*(even|odd|(([+-]|)(\\d*)n|)" +
						$ +
						"*(?:([+-]|)" +
						$ +
						"*(\\d+)|))" +
						$ +
						"*\\)|)",
					"i"
				),
				bool: new RegExp("^(?:" + H + ")$", "i"),
				needsContext: new RegExp(
					"^" +
						$ +
						"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
						$ +
						"*((?:-\\d)?\\d*)" +
						$ +
						"*\\)|)(?=[^-]|$)",
					"i"
				),
			},
			X = /^(?:input|select|textarea|button)$/i,
			Q = /^h\d$/i,
			G = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			J = /[+~]/,
			tt = /'|\\/g,
			et = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
			it = function (t, e, i) {
				var n = "0x" + e - 65536;
				return n != n || i
					? e
					: 0 > n
					? String.fromCharCode(n + 65536)
					: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
			},
			nt = function () {
				d();
			};
		try {
			F.apply((A = M.call(w.childNodes)), w.childNodes),
				A[w.childNodes.length].nodeType;
		} catch (t) {
			F = {
				apply: A.length
					? function (t, e) {
							O.apply(t, M.call(e));
					  }
					: function (t, e) {
							for (var i = t.length, n = 0; (t[i++] = e[n++]); );
							t.length = i - 1;
					  },
			};
		}
		function st(t, e, n, s) {
			var o,
				r,
				h,
				c,
				u,
				f,
				v,
				_,
				x = e && e.ownerDocument,
				C = e ? e.nodeType : 9;
			if (
				((n = n || []),
				"string" != typeof t || !t || (1 !== C && 9 !== C && 11 !== C))
			)
				return n;
			if (
				!s &&
				((e ? e.ownerDocument || e : w) !== p && d(e), (e = e || p), g)
			) {
				if (11 !== C && (f = Z.exec(t)))
					if ((o = f[1])) {
						if (9 === C) {
							if (!(h = e.getElementById(o))) return n;
							if (h.id === o) return n.push(h), n;
						} else if (x && (h = x.getElementById(o)) && b(e, h) && h.id === o)
							return n.push(h), n;
					} else {
						if (f[2]) return F.apply(n, e.getElementsByTagName(t)), n;
						if (
							(o = f[3]) &&
							i.getElementsByClassName &&
							e.getElementsByClassName
						)
							return F.apply(n, e.getElementsByClassName(o)), n;
					}
				if (i.qsa && !D[t + " "] && (!m || !m.test(t))) {
					if (1 !== C) (x = e), (_ = t);
					else if ("object" !== e.nodeName.toLowerCase()) {
						for (
							(c = e.getAttribute("id"))
								? (c = c.replace(tt, "\\$&"))
								: e.setAttribute("id", (c = y)),
								r = (v = a(t)).length,
								u = K.test(c) ? "#" + c : "[id='" + c + "']";
							r--;

						)
							v[r] = u + " " + gt(v[r]);
						(_ = v.join(",")), (x = (J.test(t) && pt(e.parentNode)) || e);
					}
					if (_)
						try {
							return F.apply(n, x.querySelectorAll(_)), n;
						} catch (t) {
						} finally {
							c === y && e.removeAttribute("id");
						}
				}
			}
			return l(t.replace(R, "$1"), e, n, s);
		}
		function ot() {
			var t = [];
			return function e(i, s) {
				return (
					t.push(i + " ") > n.cacheLength && delete e[t.shift()],
					(e[i + " "] = s)
				);
			};
		}
		function at(t) {
			return (t[y] = !0), t;
		}
		function rt(t) {
			var e = p.createElement("div");
			try {
				return !!t(e);
			} catch (t) {
				return !1;
			} finally {
				e.parentNode && e.parentNode.removeChild(e), (e = null);
			}
		}
		function lt(t, e) {
			for (var i = t.split("|"), s = i.length; s--; ) n.attrHandle[i[s]] = e;
		}
		function ht(t, e) {
			var i = e && t,
				n =
					i &&
					1 === t.nodeType &&
					1 === e.nodeType &&
					(~e.sourceIndex || E) - (~t.sourceIndex || E);
			if (n) return n;
			if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
			return t ? 1 : -1;
		}
		function ct(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t;
			};
		}
		function ut(t) {
			return function (e) {
				var i = e.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && e.type === t;
			};
		}
		function dt(t) {
			return at(function (e) {
				return (
					(e = +e),
					at(function (i, n) {
						for (var s, o = t([], i.length, e), a = o.length; a--; )
							i[(s = o[a])] && (i[s] = !(n[s] = i[s]));
					})
				);
			});
		}
		function pt(t) {
			return t && void 0 !== t.getElementsByTagName && t;
		}
		for (e in ((i = st.support = {}),
		(o = st.isXML =
			function (t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return !!e && "HTML" !== e.nodeName;
			}),
		(d = st.setDocument =
			function (t) {
				var e,
					s,
					a = t ? t.ownerDocument || t : w;
				return a !== p && 9 === a.nodeType && a.documentElement
					? ((f = (p = a).documentElement),
					  (g = !o(p)),
					  (s = p.defaultView) &&
							s.top !== s &&
							(s.addEventListener
								? s.addEventListener("unload", nt, !1)
								: s.attachEvent && s.attachEvent("onunload", nt)),
					  (i.attributes = rt(function (t) {
							return (t.className = "i"), !t.getAttribute("className");
					  })),
					  (i.getElementsByTagName = rt(function (t) {
							return (
								t.appendChild(p.createComment("")),
								!t.getElementsByTagName("*").length
							);
					  })),
					  (i.getElementsByClassName = G.test(p.getElementsByClassName)),
					  (i.getById = rt(function (t) {
							return (
								(f.appendChild(t).id = y),
								!p.getElementsByName || !p.getElementsByName(y).length
							);
					  })),
					  i.getById
							? ((n.find.ID = function (t, e) {
									if (void 0 !== e.getElementById && g) {
										var i = e.getElementById(t);
										return i ? [i] : [];
									}
							  }),
							  (n.filter.ID = function (t) {
									var e = t.replace(et, it);
									return function (t) {
										return t.getAttribute("id") === e;
									};
							  }))
							: (delete n.find.ID,
							  (n.filter.ID = function (t) {
									var e = t.replace(et, it);
									return function (t) {
										var i =
											void 0 !== t.getAttributeNode && t.getAttributeNode("id");
										return i && i.value === e;
									};
							  })),
					  (n.find.TAG = i.getElementsByTagName
							? function (t, e) {
									return void 0 !== e.getElementsByTagName
										? e.getElementsByTagName(t)
										: i.qsa
										? e.querySelectorAll(t)
										: void 0;
							  }
							: function (t, e) {
									var i,
										n = [],
										s = 0,
										o = e.getElementsByTagName(t);
									if ("*" === t) {
										for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
										return n;
									}
									return o;
							  }),
					  (n.find.CLASS =
							i.getElementsByClassName &&
							function (t, e) {
								return void 0 !== e.getElementsByClassName && g
									? e.getElementsByClassName(t)
									: void 0;
							}),
					  (v = []),
					  (m = []),
					  (i.qsa = G.test(p.querySelectorAll)) &&
							(rt(function (t) {
								(f.appendChild(t).innerHTML =
									"<a id='" +
									y +
									"'></a><select id='" +
									y +
									"-\r\\' msallowcapture=''><option selected=''></option></select>"),
									t.querySelectorAll("[msallowcapture^='']").length &&
										m.push("[*^$]=" + $ + "*(?:''|\"\")"),
									t.querySelectorAll("[selected]").length ||
										m.push("\\[" + $ + "*(?:value|" + H + ")"),
									t.querySelectorAll("[id~=" + y + "-]").length || m.push("~="),
									t.querySelectorAll(":checked").length || m.push(":checked"),
									t.querySelectorAll("a#" + y + "+*").length ||
										m.push(".#.+[+~]");
							}),
							rt(function (t) {
								var e = p.createElement("input");
								e.setAttribute("type", "hidden"),
									t.appendChild(e).setAttribute("name", "D"),
									t.querySelectorAll("[name=d]").length &&
										m.push("name" + $ + "*[*^$|!~]?="),
									t.querySelectorAll(":enabled").length ||
										m.push(":enabled", ":disabled"),
									t.querySelectorAll("*,:x"),
									m.push(",.*:");
							})),
					  (i.matchesSelector = G.test(
							(_ =
								f.matches ||
								f.webkitMatchesSelector ||
								f.mozMatchesSelector ||
								f.oMatchesSelector ||
								f.msMatchesSelector)
					  )) &&
							rt(function (t) {
								(i.disconnectedMatch = _.call(t, "div")),
									_.call(t, "[s!='']:x"),
									v.push("!=", W);
							}),
					  (m = m.length && new RegExp(m.join("|"))),
					  (v = v.length && new RegExp(v.join("|"))),
					  (e = G.test(f.compareDocumentPosition)),
					  (b =
							e || G.test(f.contains)
								? function (t, e) {
										var i = 9 === t.nodeType ? t.documentElement : t,
											n = e && e.parentNode;
										return (
											t === n ||
											!(
												!n ||
												1 !== n.nodeType ||
												!(i.contains
													? i.contains(n)
													: t.compareDocumentPosition &&
													  16 & t.compareDocumentPosition(n))
											)
										);
								  }
								: function (t, e) {
										if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
										return !1;
								  }),
					  (S = e
							? function (t, e) {
									if (t === e) return (u = !0), 0;
									var n =
										!t.compareDocumentPosition - !e.compareDocumentPosition;
									return (
										n ||
										(1 &
											(n =
												(t.ownerDocument || t) === (e.ownerDocument || e)
													? t.compareDocumentPosition(e)
													: 1) ||
										(!i.sortDetached && e.compareDocumentPosition(t) === n)
											? t === p || (t.ownerDocument === w && b(w, t))
												? -1
												: e === p || (e.ownerDocument === w && b(w, e))
												? 1
												: c
												? N(c, t) - N(c, e)
												: 0
											: 4 & n
											? -1
											: 1)
									);
							  }
							: function (t, e) {
									if (t === e) return (u = !0), 0;
									var i,
										n = 0,
										s = t.parentNode,
										o = e.parentNode,
										a = [t],
										r = [e];
									if (!s || !o)
										return t === p
											? -1
											: e === p
											? 1
											: s
											? -1
											: o
											? 1
											: c
											? N(c, t) - N(c, e)
											: 0;
									if (s === o) return ht(t, e);
									for (i = t; (i = i.parentNode); ) a.unshift(i);
									for (i = e; (i = i.parentNode); ) r.unshift(i);
									for (; a[n] === r[n]; ) n++;
									return n
										? ht(a[n], r[n])
										: a[n] === w
										? -1
										: r[n] === w
										? 1
										: 0;
							  }),
					  p)
					: p;
			}),
		(st.matches = function (t, e) {
			return st(t, null, null, e);
		}),
		(st.matchesSelector = function (t, e) {
			if (
				((t.ownerDocument || t) !== p && d(t),
				(e = e.replace(Y, "='$1']")),
				i.matchesSelector &&
					g &&
					!D[e + " "] &&
					(!v || !v.test(e)) &&
					(!m || !m.test(e)))
			)
				try {
					var n = _.call(t, e);
					if (
						n ||
						i.disconnectedMatch ||
						(t.document && 11 !== t.document.nodeType)
					)
						return n;
				} catch (t) {}
			return st(e, p, null, [t]).length > 0;
		}),
		(st.contains = function (t, e) {
			return (t.ownerDocument || t) !== p && d(t), b(t, e);
		}),
		(st.attr = function (t, e) {
			(t.ownerDocument || t) !== p && d(t);
			var s = n.attrHandle[e.toLowerCase()],
				o = s && I.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
			return void 0 !== o
				? o
				: i.attributes || !g
				? t.getAttribute(e)
				: (o = t.getAttributeNode(e)) && o.specified
				? o.value
				: null;
		}),
		(st.error = function (t) {
			throw new Error("Syntax error, unrecognized expression: " + t);
		}),
		(st.uniqueSort = function (t) {
			var e,
				n = [],
				s = 0,
				o = 0;
			if (
				((u = !i.detectDuplicates),
				(c = !i.sortStable && t.slice(0)),
				t.sort(S),
				u)
			) {
				for (; (e = t[o++]); ) e === t[o] && (s = n.push(o));
				for (; s--; ) t.splice(n[s], 1);
			}
			return (c = null), t;
		}),
		(s = st.getText =
			function (t) {
				var e,
					i = "",
					n = 0,
					o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
					} else if (3 === o || 4 === o) return t.nodeValue;
				} else for (; (e = t[n++]); ) i += s(e);
				return i;
			}),
		((n = st.selectors =
			{
				cacheLength: 50,
				createPseudo: at,
				match: V,
				attrHandle: {},
				find: {},
				relative: {
					">": { dir: "parentNode", first: !0 },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: !0 },
					"~": { dir: "previousSibling" },
				},
				preFilter: {
					ATTR: function (t) {
						return (
							(t[1] = t[1].replace(et, it)),
							(t[3] = (t[3] || t[4] || t[5] || "").replace(et, it)),
							"~=" === t[2] && (t[3] = " " + t[3] + " "),
							t.slice(0, 4)
						);
					},
					CHILD: function (t) {
						return (
							(t[1] = t[1].toLowerCase()),
							"nth" === t[1].slice(0, 3)
								? (t[3] || st.error(t[0]),
								  (t[4] = +(t[4]
										? t[5] + (t[6] || 1)
										: 2 * ("even" === t[3] || "odd" === t[3]))),
								  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
								: t[3] && st.error(t[0]),
							t
						);
					},
					PSEUDO: function (t) {
						var e,
							i = !t[6] && t[2];
						return V.CHILD.test(t[0])
							? null
							: (t[3]
									? (t[2] = t[4] || t[5] || "")
									: i &&
									  U.test(i) &&
									  (e = a(i, !0)) &&
									  (e = i.indexOf(")", i.length - e) - i.length) &&
									  ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
							  t.slice(0, 3));
					},
				},
				filter: {
					TAG: function (t) {
						var e = t.replace(et, it).toLowerCase();
						return "*" === t
							? function () {
									return !0;
							  }
							: function (t) {
									return t.nodeName && t.nodeName.toLowerCase() === e;
							  };
					},
					CLASS: function (t) {
						var e = k[t + " "];
						return (
							e ||
							((e = new RegExp("(^|" + $ + ")" + t + "(" + $ + "|$)")) &&
								k(t, function (t) {
									return e.test(
										("string" == typeof t.className && t.className) ||
											(void 0 !== t.getAttribute && t.getAttribute("class")) ||
											""
									);
								}))
						);
					},
					ATTR: function (t, e, i) {
						return function (n) {
							var s = st.attr(n, t);
							return null == s
								? "!=" === e
								: !e ||
										((s += ""),
										"=" === e
											? s === i
											: "!=" === e
											? s !== i
											: "^=" === e
											? i && 0 === s.indexOf(i)
											: "*=" === e
											? i && s.indexOf(i) > -1
											: "$=" === e
											? i && s.slice(-i.length) === i
											: "~=" === e
											? (" " + s.replace(j, " ") + " ").indexOf(i) > -1
											: "|=" === e &&
											  (s === i || s.slice(0, i.length + 1) === i + "-"));
						};
					},
					CHILD: function (t, e, i, n, s) {
						var o = "nth" !== t.slice(0, 3),
							a = "last" !== t.slice(-4),
							r = "of-type" === e;
						return 1 === n && 0 === s
							? function (t) {
									return !!t.parentNode;
							  }
							: function (e, i, l) {
									var h,
										c,
										u,
										d,
										p,
										f,
										g = o !== a ? "nextSibling" : "previousSibling",
										m = e.parentNode,
										v = r && e.nodeName.toLowerCase(),
										_ = !l && !r,
										b = !1;
									if (m) {
										if (o) {
											for (; g; ) {
												for (d = e; (d = d[g]); )
													if (
														r
															? d.nodeName.toLowerCase() === v
															: 1 === d.nodeType
													)
														return !1;
												f = g = "only" === t && !f && "nextSibling";
											}
											return !0;
										}
										if (((f = [a ? m.firstChild : m.lastChild]), a && _)) {
											for (
												b =
													(p =
														(h =
															(c =
																(u = (d = m)[y] || (d[y] = {}))[d.uniqueID] ||
																(u[d.uniqueID] = {}))[t] || [])[0] === x &&
														h[1]) && h[2],
													d = p && m.childNodes[p];
												(d = (++p && d && d[g]) || (b = p = 0) || f.pop());

											)
												if (1 === d.nodeType && ++b && d === e) {
													c[t] = [x, p, b];
													break;
												}
										} else if (
											(_ &&
												(b = p =
													(h =
														(c =
															(u = (d = e)[y] || (d[y] = {}))[d.uniqueID] ||
															(u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]),
											!1 === b)
										)
											for (
												;
												(d = (++p && d && d[g]) || (b = p = 0) || f.pop()) &&
												((r
													? d.nodeName.toLowerCase() !== v
													: 1 !== d.nodeType) ||
													!++b ||
													(_ &&
														((c =
															(u = d[y] || (d[y] = {}))[d.uniqueID] ||
															(u[d.uniqueID] = {}))[t] = [x, b]),
													d !== e));

											);
										return (b -= s) === n || (b % n == 0 && b / n >= 0);
									}
							  };
					},
					PSEUDO: function (t, e) {
						var i,
							s =
								n.pseudos[t] ||
								n.setFilters[t.toLowerCase()] ||
								st.error("unsupported pseudo: " + t);
						return s[y]
							? s(e)
							: s.length > 1
							? ((i = [t, t, "", e]),
							  n.setFilters.hasOwnProperty(t.toLowerCase())
									? at(function (t, i) {
											for (var n, o = s(t, e), a = o.length; a--; )
												t[(n = N(t, o[a]))] = !(i[n] = o[a]);
									  })
									: function (t) {
											return s(t, 0, i);
									  })
							: s;
					},
				},
				pseudos: {
					not: at(function (t) {
						var e = [],
							i = [],
							n = r(t.replace(R, "$1"));
						return n[y]
							? at(function (t, e, i, s) {
									for (var o, a = n(t, null, s, []), r = t.length; r--; )
										(o = a[r]) && (t[r] = !(e[r] = o));
							  })
							: function (t, s, o) {
									return (e[0] = t), n(e, null, o, i), (e[0] = null), !i.pop();
							  };
					}),
					has: at(function (t) {
						return function (e) {
							return st(t, e).length > 0;
						};
					}),
					contains: at(function (t) {
						return (
							(t = t.replace(et, it)),
							function (e) {
								return (e.textContent || e.innerText || s(e)).indexOf(t) > -1;
							}
						);
					}),
					lang: at(function (t) {
						return (
							K.test(t || "") || st.error("unsupported lang: " + t),
							(t = t.replace(et, it).toLowerCase()),
							function (e) {
								var i;
								do {
									if (
										(i = g
											? e.lang
											: e.getAttribute("xml:lang") || e.getAttribute("lang"))
									)
										return (
											(i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
										);
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1;
							}
						);
					}),
					target: function (e) {
						var i = t.location && t.location.hash;
						return i && i.slice(1) === e.id;
					},
					root: function (t) {
						return t === f;
					},
					focus: function (t) {
						return (
							t === p.activeElement &&
							(!p.hasFocus || p.hasFocus()) &&
							!!(t.type || t.href || ~t.tabIndex)
						);
					},
					enabled: function (t) {
						return !1 === t.disabled;
					},
					disabled: function (t) {
						return !0 === t.disabled;
					},
					checked: function (t) {
						var e = t.nodeName.toLowerCase();
						return (
							("input" === e && !!t.checked) || ("option" === e && !!t.selected)
						);
					},
					selected: function (t) {
						return (
							t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
						);
					},
					empty: function (t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0;
					},
					parent: function (t) {
						return !n.pseudos.empty(t);
					},
					header: function (t) {
						return Q.test(t.nodeName);
					},
					input: function (t) {
						return X.test(t.nodeName);
					},
					button: function (t) {
						var e = t.nodeName.toLowerCase();
						return ("input" === e && "button" === t.type) || "button" === e;
					},
					text: function (t) {
						var e;
						return (
							"input" === t.nodeName.toLowerCase() &&
							"text" === t.type &&
							(null == (e = t.getAttribute("type")) ||
								"text" === e.toLowerCase())
						);
					},
					first: dt(function () {
						return [0];
					}),
					last: dt(function (t, e) {
						return [e - 1];
					}),
					eq: dt(function (t, e, i) {
						return [0 > i ? i + e : i];
					}),
					even: dt(function (t, e) {
						for (var i = 0; e > i; i += 2) t.push(i);
						return t;
					}),
					odd: dt(function (t, e) {
						for (var i = 1; e > i; i += 2) t.push(i);
						return t;
					}),
					lt: dt(function (t, e, i) {
						for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
						return t;
					}),
					gt: dt(function (t, e, i) {
						for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
						return t;
					}),
				},
			}).pseudos.nth = n.pseudos.eq),
		{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
			n.pseudos[e] = ct(e);
		for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ut(e);
		function ft() {}
		function gt(t) {
			for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
			return n;
		}
		function mt(t, e, i) {
			var n = e.dir,
				s = i && "parentNode" === n,
				o = C++;
			return e.first
				? function (e, i, o) {
						for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, o);
				  }
				: function (e, i, a) {
						var r,
							l,
							h,
							c = [x, o];
						if (a) {
							for (; (e = e[n]); )
								if ((1 === e.nodeType || s) && t(e, i, a)) return !0;
						} else
							for (; (e = e[n]); )
								if (1 === e.nodeType || s) {
									if (
										(r = (l =
											(h = e[y] || (e[y] = {}))[e.uniqueID] ||
											(h[e.uniqueID] = {}))[n]) &&
										r[0] === x &&
										r[1] === o
									)
										return (c[2] = r[2]);
									if (((l[n] = c), (c[2] = t(e, i, a)))) return !0;
								}
				  };
		}
		function vt(t) {
			return t.length > 1
				? function (e, i, n) {
						for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
						return !0;
				  }
				: t[0];
		}
		function _t(t, e, i, n, s) {
			for (var o, a = [], r = 0, l = t.length, h = null != e; l > r; r++)
				(o = t[r]) && ((i && !i(o, n, s)) || (a.push(o), h && e.push(r)));
			return a;
		}
		function bt(t, e, i, n, s, o) {
			return (
				n && !n[y] && (n = bt(n)),
				s && !s[y] && (s = bt(s, o)),
				at(function (o, a, r, l) {
					var h,
						c,
						u,
						d = [],
						p = [],
						f = a.length,
						g =
							o ||
							(function (t, e, i) {
								for (var n = 0, s = e.length; s > n; n++) st(t, e[n], i);
								return i;
							})(e || "*", r.nodeType ? [r] : r, []),
						m = !t || (!o && e) ? g : _t(g, d, t, r, l),
						v = i ? (s || (o ? t : f || n) ? [] : a) : m;
					if ((i && i(m, v, r, l), n))
						for (h = _t(v, p), n(h, [], r, l), c = h.length; c--; )
							(u = h[c]) && (v[p[c]] = !(m[p[c]] = u));
					if (o) {
						if (s || t) {
							if (s) {
								for (h = [], c = v.length; c--; )
									(u = v[c]) && h.push((m[c] = u));
								s(null, (v = []), h, l);
							}
							for (c = v.length; c--; )
								(u = v[c]) &&
									(h = s ? N(o, u) : d[c]) > -1 &&
									(o[h] = !(a[h] = u));
						}
					} else (v = _t(v === a ? v.splice(f, v.length) : v)), s ? s(null, a, v, l) : F.apply(a, v);
				})
			);
		}
		function yt(t) {
			for (
				var e,
					i,
					s,
					o = t.length,
					a = n.relative[t[0].type],
					r = a || n.relative[" "],
					l = a ? 1 : 0,
					c = mt(
						function (t) {
							return t === e;
						},
						r,
						!0
					),
					u = mt(
						function (t) {
							return N(e, t) > -1;
						},
						r,
						!0
					),
					d = [
						function (t, i, n) {
							var s =
								(!a && (n || i !== h)) ||
								((e = i).nodeType ? c(t, i, n) : u(t, i, n));
							return (e = null), s;
						},
					];
				o > l;
				l++
			)
				if ((i = n.relative[t[l].type])) d = [mt(vt(d), i)];
				else {
					if ((i = n.filter[t[l].type].apply(null, t[l].matches))[y]) {
						for (s = ++l; o > s && !n.relative[t[s].type]; s++);
						return bt(
							l > 1 && vt(d),
							l > 1 &&
								gt(
									t
										.slice(0, l - 1)
										.concat({ value: " " === t[l - 2].type ? "*" : "" })
								).replace(R, "$1"),
							i,
							s > l && yt(t.slice(l, s)),
							o > s && yt((t = t.slice(s))),
							o > s && gt(t)
						);
					}
					d.push(i);
				}
			return vt(d);
		}
		function wt(t, e) {
			var i = e.length > 0,
				s = t.length > 0,
				o = function (o, a, r, l, c) {
					var u,
						f,
						m,
						v = 0,
						_ = "0",
						b = o && [],
						y = [],
						w = h,
						C = o || (s && n.find.TAG("*", c)),
						k = (x += null == w ? 1 : Math.random() || 0.1),
						T = C.length;
					for (
						c && (h = a === p || a || c);
						_ !== T && null != (u = C[_]);
						_++
					) {
						if (s && u) {
							for (
								f = 0, a || u.ownerDocument === p || (d(u), (r = !g));
								(m = t[f++]);

							)
								if (m(u, a || p, r)) {
									l.push(u);
									break;
								}
							c && (x = k);
						}
						i && ((u = !m && u) && v--, o && b.push(u));
					}
					if (((v += _), i && _ !== v)) {
						for (f = 0; (m = e[f++]); ) m(b, y, a, r);
						if (o) {
							if (v > 0) for (; _--; ) b[_] || y[_] || (y[_] = P.call(l));
							y = _t(y);
						}
						F.apply(l, y),
							c && !o && y.length > 0 && v + e.length > 1 && st.uniqueSort(l);
					}
					return c && ((x = k), (h = w)), b;
				};
			return i ? at(o) : o;
		}
		return (
			(ft.prototype = n.filters = n.pseudos),
			(n.setFilters = new ft()),
			(a = st.tokenize =
				function (t, e) {
					var i,
						s,
						o,
						a,
						r,
						l,
						h,
						c = T[t + " "];
					if (c) return e ? 0 : c.slice(0);
					for (r = t, l = [], h = n.preFilter; r; ) {
						for (a in ((i && !(s = q.exec(r))) ||
							(s && (r = r.slice(s[0].length) || r), l.push((o = []))),
						(i = !1),
						(s = B.exec(r)) &&
							((i = s.shift()),
							o.push({ value: i, type: s[0].replace(R, " ") }),
							(r = r.slice(i.length))),
						n.filter))
							!(s = V[a].exec(r)) ||
								(h[a] && !(s = h[a](s))) ||
								((i = s.shift()),
								o.push({ value: i, type: a, matches: s }),
								(r = r.slice(i.length)));
						if (!i) break;
					}
					return e ? r.length : r ? st.error(t) : T(t, l).slice(0);
				}),
			(r = st.compile =
				function (t, e) {
					var i,
						n = [],
						s = [],
						o = D[t + " "];
					if (!o) {
						for (e || (e = a(t)), i = e.length; i--; )
							(o = yt(e[i]))[y] ? n.push(o) : s.push(o);
						(o = D(t, wt(s, n))).selector = t;
					}
					return o;
				}),
			(l = st.select =
				function (t, e, s, o) {
					var l,
						h,
						c,
						u,
						d,
						p = "function" == typeof t && t,
						f = !o && a((t = p.selector || t));
					if (((s = s || []), 1 === f.length)) {
						if (
							(h = f[0] = f[0].slice(0)).length > 2 &&
							"ID" === (c = h[0]).type &&
							i.getById &&
							9 === e.nodeType &&
							g &&
							n.relative[h[1].type]
						) {
							if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0]))
								return s;
							p && (e = e.parentNode), (t = t.slice(h.shift().value.length));
						}
						for (
							l = V.needsContext.test(t) ? 0 : h.length;
							l-- && ((c = h[l]), !n.relative[(u = c.type)]);

						)
							if (
								(d = n.find[u]) &&
								(o = d(
									c.matches[0].replace(et, it),
									(J.test(h[0].type) && pt(e.parentNode)) || e
								))
							) {
								if ((h.splice(l, 1), !(t = o.length && gt(h))))
									return F.apply(s, o), s;
								break;
							}
					}
					return (
						(p || r(t, f))(
							o,
							e,
							!g,
							s,
							!e || (J.test(t) && pt(e.parentNode)) || e
						),
						s
					);
				}),
			(i.sortStable = y.split("").sort(S).join("") === y),
			(i.detectDuplicates = !!u),
			d(),
			(i.sortDetached = rt(function (t) {
				return 1 & t.compareDocumentPosition(p.createElement("div"));
			})),
			rt(function (t) {
				return (
					(t.innerHTML = "<a href='#'></a>"),
					"#" === t.firstChild.getAttribute("href")
				);
			}) ||
				lt("type|href|height|width", function (t, e, i) {
					return i
						? void 0
						: t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
				}),
			(i.attributes &&
				rt(function (t) {
					return (
						(t.innerHTML = "<input/>"),
						t.firstChild.setAttribute("value", ""),
						"" === t.firstChild.getAttribute("value")
					);
				})) ||
				lt("value", function (t, e, i) {
					return i || "input" !== t.nodeName.toLowerCase()
						? void 0
						: t.defaultValue;
				}),
			rt(function (t) {
				return null == t.getAttribute("disabled");
			}) ||
				lt(H, function (t, e, i) {
					var n;
					return i
						? void 0
						: !0 === t[e]
						? e.toLowerCase()
						: (n = t.getAttributeNode(e)) && n.specified
						? n.value
						: null;
				}),
			st
		);
	})(t);
	(p.find = b),
		(p.expr = b.selectors),
		(p.expr[":"] = p.expr.pseudos),
		(p.uniqueSort = p.unique = b.uniqueSort),
		(p.text = b.getText),
		(p.isXMLDoc = b.isXML),
		(p.contains = b.contains);
	var y = function (t, e, i) {
			for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
				if (1 === t.nodeType) {
					if (s && p(t).is(i)) break;
					n.push(t);
				}
			return n;
		},
		w = function (t, e) {
			for (var i = []; t; t = t.nextSibling)
				1 === t.nodeType && t !== e && i.push(t);
			return i;
		},
		x = p.expr.match.needsContext,
		C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		k = /^.[^:#\[\.,]*$/;
	function T(t, e, i) {
		if (p.isFunction(e))
			return p.grep(t, function (t, n) {
				return !!e.call(t, n, t) !== i;
			});
		if (e.nodeType)
			return p.grep(t, function (t) {
				return (t === e) !== i;
			});
		if ("string" == typeof e) {
			if (k.test(e)) return p.filter(e, t, i);
			e = p.filter(e, t);
		}
		return p.grep(t, function (t) {
			return r.call(e, t) > -1 !== i;
		});
	}
	(p.filter = function (t, e, i) {
		var n = e[0];
		return (
			i && (t = ":not(" + t + ")"),
			1 === e.length && 1 === n.nodeType
				? p.find.matchesSelector(n, t)
					? [n]
					: []
				: p.find.matches(
						t,
						p.grep(e, function (t) {
							return 1 === t.nodeType;
						})
				  )
		);
	}),
		p.fn.extend({
			find: function (t) {
				var e,
					i = this.length,
					n = [],
					s = this;
				if ("string" != typeof t)
					return this.pushStack(
						p(t).filter(function () {
							for (e = 0; i > e; e++) if (p.contains(s[e], this)) return !0;
						})
					);
				for (e = 0; i > e; e++) p.find(t, s[e], n);
				return (
					((n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this
						.selector
						? this.selector + " " + t
						: t),
					n
				);
			},
			filter: function (t) {
				return this.pushStack(T(this, t || [], !1));
			},
			not: function (t) {
				return this.pushStack(T(this, t || [], !0));
			},
			is: function (t) {
				return !!T(this, "string" == typeof t && x.test(t) ? p(t) : t || [], !1)
					.length;
			},
		});
	var D,
		S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	((p.fn.init = function (t, e, i) {
		var s, o;
		if (!t) return this;
		if (((i = i || D), "string" == typeof t)) {
			if (
				!(s =
					"<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
						? [null, t, null]
						: S.exec(t)) ||
				(!s[1] && e)
			)
				return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
			if (s[1]) {
				if (
					((e = e instanceof p ? e[0] : e),
					p.merge(
						this,
						p.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : n, !0)
					),
					C.test(s[1]) && p.isPlainObject(e))
				)
					for (s in e)
						p.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
				return this;
			}
			return (
				(o = n.getElementById(s[2])) &&
					o.parentNode &&
					((this.length = 1), (this[0] = o)),
				(this.context = n),
				(this.selector = t),
				this
			);
		}
		return t.nodeType
			? ((this.context = this[0] = t), (this.length = 1), this)
			: p.isFunction(t)
			? void 0 !== i.ready
				? i.ready(t)
				: t(p)
			: (void 0 !== t.selector &&
					((this.selector = t.selector), (this.context = t.context)),
			  p.makeArray(t, this));
	}).prototype = p.fn),
		(D = p(n));
	var E = /^(?:parents|prev(?:Until|All))/,
		I = { children: !0, contents: !0, next: !0, prev: !0 };
	function A(t, e) {
		for (; (t = t[e]) && 1 !== t.nodeType; );
		return t;
	}
	p.fn.extend({
		has: function (t) {
			var e = p(t, this),
				i = e.length;
			return this.filter(function () {
				for (var t = 0; i > t; t++) if (p.contains(this, e[t])) return !0;
			});
		},
		closest: function (t, e) {
			for (
				var i,
					n = 0,
					s = this.length,
					o = [],
					a = x.test(t) || "string" != typeof t ? p(t, e || this.context) : 0;
				s > n;
				n++
			)
				for (i = this[n]; i && i !== e; i = i.parentNode)
					if (
						i.nodeType < 11 &&
						(a
							? a.index(i) > -1
							: 1 === i.nodeType && p.find.matchesSelector(i, t))
					) {
						o.push(i);
						break;
					}
			return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o);
		},
		index: function (t) {
			return t
				? "string" == typeof t
					? r.call(p(t), this[0])
					: r.call(this, t.jquery ? t[0] : t)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
		},
		add: function (t, e) {
			return this.pushStack(p.uniqueSort(p.merge(this.get(), p(t, e))));
		},
		addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
		},
	}),
		p.each(
			{
				parent: function (t) {
					var e = t.parentNode;
					return e && 11 !== e.nodeType ? e : null;
				},
				parents: function (t) {
					return y(t, "parentNode");
				},
				parentsUntil: function (t, e, i) {
					return y(t, "parentNode", i);
				},
				next: function (t) {
					return A(t, "nextSibling");
				},
				prev: function (t) {
					return A(t, "previousSibling");
				},
				nextAll: function (t) {
					return y(t, "nextSibling");
				},
				prevAll: function (t) {
					return y(t, "previousSibling");
				},
				nextUntil: function (t, e, i) {
					return y(t, "nextSibling", i);
				},
				prevUntil: function (t, e, i) {
					return y(t, "previousSibling", i);
				},
				siblings: function (t) {
					return w((t.parentNode || {}).firstChild, t);
				},
				children: function (t) {
					return w(t.firstChild);
				},
				contents: function (t) {
					return t.contentDocument || p.merge([], t.childNodes);
				},
			},
			function (t, e) {
				p.fn[t] = function (i, n) {
					var s = p.map(this, e, i);
					return (
						"Until" !== t.slice(-5) && (n = i),
						n && "string" == typeof n && (s = p.filter(n, s)),
						this.length > 1 &&
							(I[t] || p.uniqueSort(s), E.test(t) && s.reverse()),
						this.pushStack(s)
					);
				};
			}
		);
	var P,
		O = /\S+/g;
	function F() {
		n.removeEventListener("DOMContentLoaded", F),
			t.removeEventListener("load", F),
			p.ready();
	}
	(p.Callbacks = function (t) {
		t =
			"string" == typeof t
				? (function (t) {
						var e = {};
						return (
							p.each(t.match(O) || [], function (t, i) {
								e[i] = !0;
							}),
							e
						);
				  })(t)
				: p.extend({}, t);
		var e,
			i,
			n,
			s,
			o = [],
			a = [],
			r = -1,
			l = function () {
				for (s = t.once, n = e = !0; a.length; r = -1)
					for (i = a.shift(); ++r < o.length; )
						!1 === o[r].apply(i[0], i[1]) &&
							t.stopOnFalse &&
							((r = o.length), (i = !1));
				t.memory || (i = !1), (e = !1), s && (o = i ? [] : "");
			},
			h = {
				add: function () {
					return (
						o &&
							(i && !e && ((r = o.length - 1), a.push(i)),
							(function e(i) {
								p.each(i, function (i, n) {
									p.isFunction(n)
										? (t.unique && h.has(n)) || o.push(n)
										: n && n.length && "string" !== p.type(n) && e(n);
								});
							})(arguments),
							i && !e && l()),
						this
					);
				},
				remove: function () {
					return (
						p.each(arguments, function (t, e) {
							for (var i; (i = p.inArray(e, o, i)) > -1; )
								o.splice(i, 1), r >= i && r--;
						}),
						this
					);
				},
				has: function (t) {
					return t ? p.inArray(t, o) > -1 : o.length > 0;
				},
				empty: function () {
					return o && (o = []), this;
				},
				disable: function () {
					return (s = a = []), (o = i = ""), this;
				},
				disabled: function () {
					return !o;
				},
				lock: function () {
					return (s = a = []), i || (o = i = ""), this;
				},
				locked: function () {
					return !!s;
				},
				fireWith: function (t, i) {
					return (
						s ||
							((i = [t, (i = i || []).slice ? i.slice() : i]),
							a.push(i),
							e || l()),
						this
					);
				},
				fire: function () {
					return h.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!n;
				},
			};
		return h;
	}),
		p.extend({
			Deferred: function (t) {
				var e = [
						["resolve", "done", p.Callbacks("once memory"), "resolved"],
						["reject", "fail", p.Callbacks("once memory"), "rejected"],
						["notify", "progress", p.Callbacks("memory")],
					],
					i = "pending",
					n = {
						state: function () {
							return i;
						},
						always: function () {
							return s.done(arguments).fail(arguments), this;
						},
						then: function () {
							var t = arguments;
							return p
								.Deferred(function (i) {
									p.each(e, function (e, o) {
										var a = p.isFunction(t[e]) && t[e];
										s[o[1]](function () {
											var t = a && a.apply(this, arguments);
											t && p.isFunction(t.promise)
												? t
														.promise()
														.progress(i.notify)
														.done(i.resolve)
														.fail(i.reject)
												: i[o[0] + "With"](
														this === n ? i.promise() : this,
														a ? [t] : arguments
												  );
										});
									}),
										(t = null);
								})
								.promise();
						},
						promise: function (t) {
							return null != t ? p.extend(t, n) : n;
						},
					},
					s = {};
				return (
					(n.pipe = n.then),
					p.each(e, function (t, o) {
						var a = o[2],
							r = o[3];
						(n[o[1]] = a.add),
							r &&
								a.add(
									function () {
										i = r;
									},
									e[1 ^ t][2].disable,
									e[2][2].lock
								),
							(s[o[0]] = function () {
								return s[o[0] + "With"](this === s ? n : this, arguments), this;
							}),
							(s[o[0] + "With"] = a.fireWith);
					}),
					n.promise(s),
					t && t.call(s, s),
					s
				);
			},
			when: function (t) {
				var e,
					i,
					n,
					o = 0,
					a = s.call(arguments),
					r = a.length,
					l = 1 !== r || (t && p.isFunction(t.promise)) ? r : 0,
					h = 1 === l ? t : p.Deferred(),
					c = function (t, i, n) {
						return function (o) {
							(i[t] = this),
								(n[t] = arguments.length > 1 ? s.call(arguments) : o),
								n === e ? h.notifyWith(i, n) : --l || h.resolveWith(i, n);
						};
					};
				if (r > 1)
					for (e = new Array(r), i = new Array(r), n = new Array(r); r > o; o++)
						a[o] && p.isFunction(a[o].promise)
							? a[o]
									.promise()
									.progress(c(o, i, e))
									.done(c(o, n, a))
									.fail(h.reject)
							: --l;
				return l || h.resolveWith(n, a), h.promise();
			},
		}),
		(p.fn.ready = function (t) {
			return p.ready.promise().done(t), this;
		}),
		p.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (t) {
				t ? p.readyWait++ : p.ready(!0);
			},
			ready: function (t) {
				(!0 === t ? --p.readyWait : p.isReady) ||
					((p.isReady = !0),
					(!0 !== t && --p.readyWait > 0) ||
						(P.resolveWith(n, [p]),
						p.fn.triggerHandler &&
							(p(n).triggerHandler("ready"), p(n).off("ready"))));
			},
		}),
		(p.ready.promise = function (e) {
			return (
				P ||
					((P = p.Deferred()),
					"complete" === n.readyState ||
					("loading" !== n.readyState && !n.documentElement.doScroll)
						? t.setTimeout(p.ready)
						: (n.addEventListener("DOMContentLoaded", F),
						  t.addEventListener("load", F))),
				P.promise(e)
			);
		}),
		p.ready.promise();
	var M = function (t, e, i, n, s, o, a) {
			var r = 0,
				l = t.length,
				h = null == i;
			if ("object" === p.type(i))
				for (r in ((s = !0), i)) M(t, e, r, i[r], !0, o, a);
			else if (
				void 0 !== n &&
				((s = !0),
				p.isFunction(n) || (a = !0),
				h &&
					(a
						? (e.call(t, n), (e = null))
						: ((h = e),
						  (e = function (t, e, i) {
								return h.call(p(t), i);
						  }))),
				e)
			)
				for (; l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
			return s ? t : h ? e.call(t) : l ? e(t[0], i) : o;
		},
		N = function (t) {
			return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
		};
	function H() {
		this.expando = p.expando + H.uid++;
	}
	(H.uid = 1),
		(H.prototype = {
			register: function (t, e) {
				var i = e || {};
				return (
					t.nodeType
						? (t[this.expando] = i)
						: Object.defineProperty(t, this.expando, {
								value: i,
								writable: !0,
								configurable: !0,
						  }),
					t[this.expando]
				);
			},
			cache: function (t) {
				if (!N(t)) return {};
				var e = t[this.expando];
				return (
					e ||
						((e = {}),
						N(t) &&
							(t.nodeType
								? (t[this.expando] = e)
								: Object.defineProperty(t, this.expando, {
										value: e,
										configurable: !0,
								  }))),
					e
				);
			},
			set: function (t, e, i) {
				var n,
					s = this.cache(t);
				if ("string" == typeof e) s[e] = i;
				else for (n in e) s[n] = e[n];
				return s;
			},
			get: function (t, e) {
				return void 0 === e
					? this.cache(t)
					: t[this.expando] && t[this.expando][e];
			},
			access: function (t, e, i) {
				var n;
				return void 0 === e || (e && "string" == typeof e && void 0 === i)
					? void 0 !== (n = this.get(t, e))
						? n
						: this.get(t, p.camelCase(e))
					: (this.set(t, e, i), void 0 !== i ? i : e);
			},
			remove: function (t, e) {
				var i,
					n,
					s,
					o = t[this.expando];
				if (void 0 !== o) {
					if (void 0 === e) this.register(t);
					else {
						p.isArray(e)
							? (n = e.concat(e.map(p.camelCase)))
							: ((s = p.camelCase(e)),
							  e in o
									? (n = [e, s])
									: (n = (n = s) in o ? [n] : n.match(O) || [])),
							(i = n.length);
						for (; i--; ) delete o[n[i]];
					}
					(void 0 === e || p.isEmptyObject(o)) &&
						(t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
				}
			},
			hasData: function (t) {
				var e = t[this.expando];
				return void 0 !== e && !p.isEmptyObject(e);
			},
		});
	var $ = new H(),
		L = new H(),
		z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		W = /[A-Z]/g;
	function j(t, e, i) {
		var n;
		if (void 0 === i && 1 === t.nodeType)
			if (
				((n = "data-" + e.replace(W, "-$&").toLowerCase()),
				"string" == typeof (i = t.getAttribute(n)))
			) {
				try {
					i =
						"true" === i ||
						("false" !== i &&
							("null" === i
								? null
								: +i + "" === i
								? +i
								: z.test(i)
								? p.parseJSON(i)
								: i));
				} catch (t) {}
				L.set(t, e, i);
			} else i = void 0;
		return i;
	}
	p.extend({
		hasData: function (t) {
			return L.hasData(t) || $.hasData(t);
		},
		data: function (t, e, i) {
			return L.access(t, e, i);
		},
		removeData: function (t, e) {
			L.remove(t, e);
		},
		_data: function (t, e, i) {
			return $.access(t, e, i);
		},
		_removeData: function (t, e) {
			$.remove(t, e);
		},
	}),
		p.fn.extend({
			data: function (t, e) {
				var i,
					n,
					s,
					o = this[0],
					a = o && o.attributes;
				if (void 0 === t) {
					if (
						this.length &&
						((s = L.get(o)), 1 === o.nodeType && !$.get(o, "hasDataAttrs"))
					) {
						for (i = a.length; i--; )
							a[i] &&
								0 === (n = a[i].name).indexOf("data-") &&
								((n = p.camelCase(n.slice(5))), j(o, n, s[n]));
						$.set(o, "hasDataAttrs", !0);
					}
					return s;
				}
				return "object" == typeof t
					? this.each(function () {
							L.set(this, t);
					  })
					: M(
							this,
							function (e) {
								var i, n;
								if (o && void 0 === e) {
									if (
										void 0 !==
										(i =
											L.get(o, t) ||
											L.get(o, t.replace(W, "-$&").toLowerCase()))
									)
										return i;
									if (((n = p.camelCase(t)), void 0 !== (i = L.get(o, n))))
										return i;
									if (void 0 !== (i = j(o, n, void 0))) return i;
								} else
									(n = p.camelCase(t)),
										this.each(function () {
											var i = L.get(this, n);
											L.set(this, n, e),
												t.indexOf("-") > -1 &&
													void 0 !== i &&
													L.set(this, t, e);
										});
							},
							null,
							e,
							arguments.length > 1,
							null,
							!0
					  );
			},
			removeData: function (t) {
				return this.each(function () {
					L.remove(this, t);
				});
			},
		}),
		p.extend({
			queue: function (t, e, i) {
				var n;
				return t
					? ((e = (e || "fx") + "queue"),
					  (n = $.get(t, e)),
					  i &&
							(!n || p.isArray(i)
								? (n = $.access(t, e, p.makeArray(i)))
								: n.push(i)),
					  n || [])
					: void 0;
			},
			dequeue: function (t, e) {
				e = e || "fx";
				var i = p.queue(t, e),
					n = i.length,
					s = i.shift(),
					o = p._queueHooks(t, e);
				"inprogress" === s && ((s = i.shift()), n--),
					s &&
						("fx" === e && i.unshift("inprogress"),
						delete o.stop,
						s.call(
							t,
							function () {
								p.dequeue(t, e);
							},
							o
						)),
					!n && o && o.empty.fire();
			},
			_queueHooks: function (t, e) {
				var i = e + "queueHooks";
				return (
					$.get(t, i) ||
					$.access(t, i, {
						empty: p.Callbacks("once memory").add(function () {
							$.remove(t, [e + "queue", i]);
						}),
					})
				);
			},
		}),
		p.fn.extend({
			queue: function (t, e) {
				var i = 2;
				return (
					"string" != typeof t && ((e = t), (t = "fx"), i--),
					arguments.length < i
						? p.queue(this[0], t)
						: void 0 === e
						? this
						: this.each(function () {
								var i = p.queue(this, t, e);
								p._queueHooks(this, t),
									"fx" === t && "inprogress" !== i[0] && p.dequeue(this, t);
						  })
				);
			},
			dequeue: function (t) {
				return this.each(function () {
					p.dequeue(this, t);
				});
			},
			clearQueue: function (t) {
				return this.queue(t || "fx", []);
			},
			promise: function (t, e) {
				var i,
					n = 1,
					s = p.Deferred(),
					o = this,
					a = this.length,
					r = function () {
						--n || s.resolveWith(o, [o]);
					};
				for (
					"string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
					a--;

				)
					(i = $.get(o[a], t + "queueHooks")) &&
						i.empty &&
						(n++, i.empty.add(r));
				return r(), s.promise(e);
			},
		});
	var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		q = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
		B = ["Top", "Right", "Bottom", "Left"],
		Y = function (t, e) {
			return (
				(t = e || t),
				"none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
			);
		};
	function U(t, e, i, n) {
		var s,
			o = 1,
			a = 20,
			r = n
				? function () {
						return n.cur();
				  }
				: function () {
						return p.css(t, e, "");
				  },
			l = r(),
			h = (i && i[3]) || (p.cssNumber[e] ? "" : "px"),
			c = (p.cssNumber[e] || ("px" !== h && +l)) && q.exec(p.css(t, e));
		if (c && c[3] !== h) {
			(h = h || c[3]), (i = i || []), (c = +l || 1);
			do {
				(c /= o = o || ".5"), p.style(t, e, c + h);
			} while (o !== (o = r() / l) && 1 !== o && --a);
		}
		return (
			i &&
				((c = +c || +l || 0),
				(s = i[1] ? c + (i[1] + 1) * i[2] : +i[2]),
				n && ((n.unit = h), (n.start = c), (n.end = s))),
			s
		);
	}
	var K = /^(?:checkbox|radio)$/i,
		V = /<([\w:-]+)/,
		X = /^$|\/(?:java|ecma)script/i,
		Q = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""],
		};
	function G(t, e) {
		var i =
			void 0 !== t.getElementsByTagName
				? t.getElementsByTagName(e || "*")
				: void 0 !== t.querySelectorAll
				? t.querySelectorAll(e || "*")
				: [];
		return void 0 === e || (e && p.nodeName(t, e)) ? p.merge([t], i) : i;
	}
	function Z(t, e) {
		for (var i = 0, n = t.length; n > i; i++)
			$.set(t[i], "globalEval", !e || $.get(e[i], "globalEval"));
	}
	(Q.optgroup = Q.option),
		(Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead),
		(Q.th = Q.td);
	var J = /<|&#?\w+;/;
	function tt(t, e, i, n, s) {
		for (
			var o,
				a,
				r,
				l,
				h,
				c,
				u = e.createDocumentFragment(),
				d = [],
				f = 0,
				g = t.length;
			g > f;
			f++
		)
			if ((o = t[f]) || 0 === o)
				if ("object" === p.type(o)) p.merge(d, o.nodeType ? [o] : o);
				else if (J.test(o)) {
					for (
						a = a || u.appendChild(e.createElement("div")),
							r = (V.exec(o) || ["", ""])[1].toLowerCase(),
							l = Q[r] || Q._default,
							a.innerHTML = l[1] + p.htmlPrefilter(o) + l[2],
							c = l[0];
						c--;

					)
						a = a.lastChild;
					p.merge(d, a.childNodes), ((a = u.firstChild).textContent = "");
				} else d.push(e.createTextNode(o));
		for (u.textContent = "", f = 0; (o = d[f++]); )
			if (n && p.inArray(o, n) > -1) s && s.push(o);
			else if (
				((h = p.contains(o.ownerDocument, o)),
				(a = G(u.appendChild(o), "script")),
				h && Z(a),
				i)
			)
				for (c = 0; (o = a[c++]); ) X.test(o.type || "") && i.push(o);
		return u;
	}
	!(function () {
		var t = n.createDocumentFragment().appendChild(n.createElement("div")),
			e = n.createElement("input");
		e.setAttribute("type", "radio"),
			e.setAttribute("checked", "checked"),
			e.setAttribute("name", "t"),
			t.appendChild(e),
			(u.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
			(t.innerHTML = "<textarea>x</textarea>"),
			(u.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
	})();
	var et = /^key/,
		it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		nt = /^([^.]*)(?:\.(.+)|)/;
	function st() {
		return !0;
	}
	function ot() {
		return !1;
	}
	function at() {
		try {
			return n.activeElement;
		} catch (t) {}
	}
	function rt(t, e, i, n, s, o) {
		var a, r;
		if ("object" == typeof e) {
			for (r in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
				rt(t, r, i, n, e[r], o);
			return t;
		}
		if (
			(null == n && null == s
				? ((s = i), (n = i = void 0))
				: null == s &&
				  ("string" == typeof i
						? ((s = n), (n = void 0))
						: ((s = n), (n = i), (i = void 0))),
			!1 === s)
		)
			s = ot;
		else if (!s) return t;
		return (
			1 === o &&
				((a = s),
				((s = function (t) {
					return p().off(t), a.apply(this, arguments);
				}).guid = a.guid || (a.guid = p.guid++))),
			t.each(function () {
				p.event.add(this, e, s, n, i);
			})
		);
	}
	(p.event = {
		global: {},
		add: function (t, e, i, n, s) {
			var o,
				a,
				r,
				l,
				h,
				c,
				u,
				d,
				f,
				g,
				m,
				v = $.get(t);
			if (v)
				for (
					i.handler && ((i = (o = i).handler), (s = o.selector)),
						i.guid || (i.guid = p.guid++),
						(l = v.events) || (l = v.events = {}),
						(a = v.handle) ||
							(a = v.handle =
								function (e) {
									return void 0 !== p && p.event.triggered !== e.type
										? p.event.dispatch.apply(t, arguments)
										: void 0;
								}),
						h = (e = (e || "").match(O) || [""]).length;
					h--;

				)
					(f = m = (r = nt.exec(e[h]) || [])[1]),
						(g = (r[2] || "").split(".").sort()),
						f &&
							((u = p.event.special[f] || {}),
							(f = (s ? u.delegateType : u.bindType) || f),
							(u = p.event.special[f] || {}),
							(c = p.extend(
								{
									type: f,
									origType: m,
									data: n,
									handler: i,
									guid: i.guid,
									selector: s,
									needsContext: s && p.expr.match.needsContext.test(s),
									namespace: g.join("."),
								},
								o
							)),
							(d = l[f]) ||
								(((d = l[f] = []).delegateCount = 0),
								(u.setup && !1 !== u.setup.call(t, n, g, a)) ||
									(t.addEventListener && t.addEventListener(f, a))),
							u.add &&
								(u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)),
							s ? d.splice(d.delegateCount++, 0, c) : d.push(c),
							(p.event.global[f] = !0));
		},
		remove: function (t, e, i, n, s) {
			var o,
				a,
				r,
				l,
				h,
				c,
				u,
				d,
				f,
				g,
				m,
				v = $.hasData(t) && $.get(t);
			if (v && (l = v.events)) {
				for (h = (e = (e || "").match(O) || [""]).length; h--; )
					if (
						((f = m = (r = nt.exec(e[h]) || [])[1]),
						(g = (r[2] || "").split(".").sort()),
						f)
					) {
						for (
							u = p.event.special[f] || {},
								d = l[(f = (n ? u.delegateType : u.bindType) || f)] || [],
								r =
									r[2] &&
									new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
								a = o = d.length;
							o--;

						)
							(c = d[o]),
								(!s && m !== c.origType) ||
									(i && i.guid !== c.guid) ||
									(r && !r.test(c.namespace)) ||
									(n && n !== c.selector && ("**" !== n || !c.selector)) ||
									(d.splice(o, 1),
									c.selector && d.delegateCount--,
									u.remove && u.remove.call(t, c));
						a &&
							!d.length &&
							((u.teardown && !1 !== u.teardown.call(t, g, v.handle)) ||
								p.removeEvent(t, f, v.handle),
							delete l[f]);
					} else for (f in l) p.event.remove(t, f + e[h], i, n, !0);
				p.isEmptyObject(l) && $.remove(t, "handle events");
			}
		},
		dispatch: function (t) {
			t = p.event.fix(t);
			var e,
				i,
				n,
				o,
				a,
				r = [],
				l = s.call(arguments),
				h = ($.get(this, "events") || {})[t.type] || [],
				c = p.event.special[t.type] || {};
			if (
				((l[0] = t),
				(t.delegateTarget = this),
				!c.preDispatch || !1 !== c.preDispatch.call(this, t))
			) {
				for (
					r = p.event.handlers.call(this, t, h), e = 0;
					(o = r[e++]) && !t.isPropagationStopped();

				)
					for (
						t.currentTarget = o.elem, i = 0;
						(a = o.handlers[i++]) && !t.isImmediatePropagationStopped();

					)
						(t.rnamespace && !t.rnamespace.test(a.namespace)) ||
							((t.handleObj = a),
							(t.data = a.data),
							void 0 !==
								(n = (
									(p.event.special[a.origType] || {}).handle || a.handler
								).apply(o.elem, l)) &&
								!1 === (t.result = n) &&
								(t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result;
			}
		},
		handlers: function (t, e) {
			var i,
				n,
				s,
				o,
				a = [],
				r = e.delegateCount,
				l = t.target;
			if (
				r &&
				l.nodeType &&
				("click" !== t.type || isNaN(t.button) || t.button < 1)
			)
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
						for (n = [], i = 0; r > i; i++)
							void 0 === n[(s = (o = e[i]).selector + " ")] &&
								(n[s] = o.needsContext
									? p(s, this).index(l) > -1
									: p.find(s, this, null, [l]).length),
								n[s] && n.push(o);
						n.length && a.push({ elem: l, handlers: n });
					}
			return r < e.length && a.push({ elem: this, handlers: e.slice(r) }), a;
		},
		props:
			"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
				" "
			),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (t, e) {
				return (
					null == t.which &&
						(t.which = null != e.charCode ? e.charCode : e.keyCode),
					t
				);
			},
		},
		mouseHooks: {
			props:
				"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
					" "
				),
			filter: function (t, e) {
				var i,
					s,
					o,
					a = e.button;
				return (
					null == t.pageX &&
						null != e.clientX &&
						((s = (i = t.target.ownerDocument || n).documentElement),
						(o = i.body),
						(t.pageX =
							e.clientX +
							((s && s.scrollLeft) || (o && o.scrollLeft) || 0) -
							((s && s.clientLeft) || (o && o.clientLeft) || 0)),
						(t.pageY =
							e.clientY +
							((s && s.scrollTop) || (o && o.scrollTop) || 0) -
							((s && s.clientTop) || (o && o.clientTop) || 0))),
					t.which ||
						void 0 === a ||
						(t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
					t
				);
			},
		},
		fix: function (t) {
			if (t[p.expando]) return t;
			var e,
				i,
				s,
				o = t.type,
				a = t,
				r = this.fixHooks[o];
			for (
				r ||
					(this.fixHooks[o] = r =
						it.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}),
					s = r.props ? this.props.concat(r.props) : this.props,
					t = new p.Event(a),
					e = s.length;
				e--;

			)
				t[(i = s[e])] = a[i];
			return (
				t.target || (t.target = n),
				3 === t.target.nodeType && (t.target = t.target.parentNode),
				r.filter ? r.filter(t, a) : t
			);
		},
		special: {
			load: { noBubble: !0 },
			focus: {
				trigger: function () {
					return this !== at() && this.focus ? (this.focus(), !1) : void 0;
				},
				delegateType: "focusin",
			},
			blur: {
				trigger: function () {
					return this === at() && this.blur ? (this.blur(), !1) : void 0;
				},
				delegateType: "focusout",
			},
			click: {
				trigger: function () {
					return "checkbox" === this.type &&
						this.click &&
						p.nodeName(this, "input")
						? (this.click(), !1)
						: void 0;
				},
				_default: function (t) {
					return p.nodeName(t.target, "a");
				},
			},
			beforeunload: {
				postDispatch: function (t) {
					void 0 !== t.result &&
						t.originalEvent &&
						(t.originalEvent.returnValue = t.result);
				},
			},
		},
	}),
		(p.removeEvent = function (t, e, i) {
			t.removeEventListener && t.removeEventListener(e, i);
		}),
		(p.Event = function (t, e) {
			return this instanceof p.Event
				? (t && t.type
						? ((this.originalEvent = t),
						  (this.type = t.type),
						  (this.isDefaultPrevented =
								t.defaultPrevented ||
								(void 0 === t.defaultPrevented && !1 === t.returnValue)
									? st
									: ot))
						: (this.type = t),
				  e && p.extend(this, e),
				  (this.timeStamp = (t && t.timeStamp) || p.now()),
				  void (this[p.expando] = !0))
				: new p.Event(t, e);
		}),
		(p.Event.prototype = {
			constructor: p.Event,
			isDefaultPrevented: ot,
			isPropagationStopped: ot,
			isImmediatePropagationStopped: ot,
			isSimulated: !1,
			preventDefault: function () {
				var t = this.originalEvent;
				(this.isDefaultPrevented = st),
					t && !this.isSimulated && t.preventDefault();
			},
			stopPropagation: function () {
				var t = this.originalEvent;
				(this.isPropagationStopped = st),
					t && !this.isSimulated && t.stopPropagation();
			},
			stopImmediatePropagation: function () {
				var t = this.originalEvent;
				(this.isImmediatePropagationStopped = st),
					t && !this.isSimulated && t.stopImmediatePropagation(),
					this.stopPropagation();
			},
		}),
		p.each(
			{
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout",
			},
			function (t, e) {
				p.event.special[t] = {
					delegateType: e,
					bindType: e,
					handle: function (t) {
						var i,
							n = t.relatedTarget,
							s = t.handleObj;
						return (
							(n && (n === this || p.contains(this, n))) ||
								((t.type = s.origType),
								(i = s.handler.apply(this, arguments)),
								(t.type = e)),
							i
						);
					},
				};
			}
		),
		p.fn.extend({
			on: function (t, e, i, n) {
				return rt(this, t, e, i, n);
			},
			one: function (t, e, i, n) {
				return rt(this, t, e, i, n, 1);
			},
			off: function (t, e, i) {
				var n, s;
				if (t && t.preventDefault && t.handleObj)
					return (
						(n = t.handleObj),
						p(t.delegateTarget).off(
							n.namespace ? n.origType + "." + n.namespace : n.origType,
							n.selector,
							n.handler
						),
						this
					);
				if ("object" == typeof t) {
					for (s in t) this.off(s, e, t[s]);
					return this;
				}
				return (
					(!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
					!1 === i && (i = ot),
					this.each(function () {
						p.event.remove(this, t, i, e);
					})
				);
			},
		});
	var lt =
			/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		ht = /<script|<style|<link/i,
		ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ut = /^true\/(.*)/,
		dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	function pt(t, e) {
		return p.nodeName(t, "table") &&
			p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
			? t.getElementsByTagName("tbody")[0] ||
					t.appendChild(t.ownerDocument.createElement("tbody"))
			: t;
	}
	function ft(t) {
		return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
	}
	function gt(t) {
		var e = ut.exec(t.type);
		return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
	}
	function mt(t, e) {
		var i, n, s, o, a, r, l, h;
		if (1 === e.nodeType) {
			if (
				$.hasData(t) &&
				((o = $.access(t)), (a = $.set(e, o)), (h = o.events))
			)
				for (s in (delete a.handle, (a.events = {}), h))
					for (i = 0, n = h[s].length; n > i; i++) p.event.add(e, s, h[s][i]);
			L.hasData(t) && ((r = L.access(t)), (l = p.extend({}, r)), L.set(e, l));
		}
	}
	function vt(t, e) {
		var i = e.nodeName.toLowerCase();
		"input" === i && K.test(t.type)
			? (e.checked = t.checked)
			: ("input" !== i && "textarea" !== i) ||
			  (e.defaultValue = t.defaultValue);
	}
	function _t(t, e, i, n) {
		e = o.apply([], e);
		var s,
			a,
			r,
			l,
			h,
			c,
			d = 0,
			f = t.length,
			g = f - 1,
			m = e[0],
			v = p.isFunction(m);
		if (v || (f > 1 && "string" == typeof m && !u.checkClone && ct.test(m)))
			return t.each(function (s) {
				var o = t.eq(s);
				v && (e[0] = m.call(this, s, o.html())), _t(o, e, i, n);
			});
		if (
			f &&
			((a = (s = tt(e, t[0].ownerDocument, !1, t, n)).firstChild),
			1 === s.childNodes.length && (s = a),
			a || n)
		) {
			for (l = (r = p.map(G(s, "script"), ft)).length; f > d; d++)
				(h = s),
					d !== g &&
						((h = p.clone(h, !0, !0)), l && p.merge(r, G(h, "script"))),
					i.call(t[d], h, d);
			if (l)
				for (c = r[r.length - 1].ownerDocument, p.map(r, gt), d = 0; l > d; d++)
					(h = r[d]),
						X.test(h.type || "") &&
							!$.access(h, "globalEval") &&
							p.contains(c, h) &&
							(h.src
								? p._evalUrl && p._evalUrl(h.src)
								: p.globalEval(h.textContent.replace(dt, "")));
		}
		return t;
	}
	function bt(t, e, i) {
		for (var n, s = e ? p.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
			i || 1 !== n.nodeType || p.cleanData(G(n)),
				n.parentNode &&
					(i && p.contains(n.ownerDocument, n) && Z(G(n, "script")),
					n.parentNode.removeChild(n));
		return t;
	}
	p.extend({
		htmlPrefilter: function (t) {
			return t.replace(lt, "<$1></$2>");
		},
		clone: function (t, e, i) {
			var n,
				s,
				o,
				a,
				r = t.cloneNode(!0),
				l = p.contains(t.ownerDocument, t);
			if (
				!(
					u.noCloneChecked ||
					(1 !== t.nodeType && 11 !== t.nodeType) ||
					p.isXMLDoc(t)
				)
			)
				for (a = G(r), n = 0, s = (o = G(t)).length; s > n; n++) vt(o[n], a[n]);
			if (e)
				if (i)
					for (o = o || G(t), a = a || G(r), n = 0, s = o.length; s > n; n++)
						mt(o[n], a[n]);
				else mt(t, r);
			return (a = G(r, "script")).length > 0 && Z(a, !l && G(t, "script")), r;
		},
		cleanData: function (t) {
			for (var e, i, n, s = p.event.special, o = 0; void 0 !== (i = t[o]); o++)
				if (N(i)) {
					if ((e = i[$.expando])) {
						if (e.events)
							for (n in e.events)
								s[n] ? p.event.remove(i, n) : p.removeEvent(i, n, e.handle);
						i[$.expando] = void 0;
					}
					i[L.expando] && (i[L.expando] = void 0);
				}
		},
	}),
		p.fn.extend({
			domManip: _t,
			detach: function (t) {
				return bt(this, t, !0);
			},
			remove: function (t) {
				return bt(this, t);
			},
			text: function (t) {
				return M(
					this,
					function (t) {
						return void 0 === t
							? p.text(this)
							: this.empty().each(function () {
									(1 !== this.nodeType &&
										11 !== this.nodeType &&
										9 !== this.nodeType) ||
										(this.textContent = t);
							  });
					},
					null,
					t,
					arguments.length
				);
			},
			append: function () {
				return _t(this, arguments, function (t) {
					(1 !== this.nodeType &&
						11 !== this.nodeType &&
						9 !== this.nodeType) ||
						pt(this, t).appendChild(t);
				});
			},
			prepend: function () {
				return _t(this, arguments, function (t) {
					if (
						1 === this.nodeType ||
						11 === this.nodeType ||
						9 === this.nodeType
					) {
						var e = pt(this, t);
						e.insertBefore(t, e.firstChild);
					}
				});
			},
			before: function () {
				return _t(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this);
				});
			},
			after: function () {
				return _t(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
				});
			},
			empty: function () {
				for (var t, e = 0; null != (t = this[e]); e++)
					1 === t.nodeType && (p.cleanData(G(t, !1)), (t.textContent = ""));
				return this;
			},
			clone: function (t, e) {
				return (
					(t = null != t && t),
					(e = null == e ? t : e),
					this.map(function () {
						return p.clone(this, t, e);
					})
				);
			},
			html: function (t) {
				return M(
					this,
					function (t) {
						var e = this[0] || {},
							i = 0,
							n = this.length;
						if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
						if (
							"string" == typeof t &&
							!ht.test(t) &&
							!Q[(V.exec(t) || ["", ""])[1].toLowerCase()]
						) {
							t = p.htmlPrefilter(t);
							try {
								for (; n > i; i++)
									1 === (e = this[i] || {}).nodeType &&
										(p.cleanData(G(e, !1)), (e.innerHTML = t));
								e = 0;
							} catch (t) {}
						}
						e && this.empty().append(t);
					},
					null,
					t,
					arguments.length
				);
			},
			replaceWith: function () {
				var t = [];
				return _t(
					this,
					arguments,
					function (e) {
						var i = this.parentNode;
						p.inArray(this, t) < 0 &&
							(p.cleanData(G(this)), i && i.replaceChild(e, this));
					},
					t
				);
			},
		}),
		p.each(
			{
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith",
			},
			function (t, e) {
				p.fn[t] = function (t) {
					for (var i, n = [], s = p(t), o = s.length - 1, r = 0; o >= r; r++)
						(i = r === o ? this : this.clone(!0)),
							p(s[r])[e](i),
							a.apply(n, i.get());
					return this.pushStack(n);
				};
			}
		);
	var yt,
		wt = { HTML: "block", BODY: "block" };
	function xt(t, e) {
		var i = p(e.createElement(t)).appendTo(e.body),
			n = p.css(i[0], "display");
		return i.detach(), n;
	}
	function Ct(t) {
		var e = n,
			i = wt[t];
		return (
			i ||
				(("none" !== (i = xt(t, e)) && i) ||
					((e = (yt = (
						yt || p("<iframe frameborder='0' width='0' height='0'/>")
					).appendTo(e.documentElement))[0].contentDocument).write(),
					e.close(),
					(i = xt(t, e)),
					yt.detach()),
				(wt[t] = i)),
			i
		);
	}
	var kt = /^margin/,
		Tt = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
		Dt = function (e) {
			var i = e.ownerDocument.defaultView;
			return (i && i.opener) || (i = t), i.getComputedStyle(e);
		},
		St = function (t, e, i, n) {
			var s,
				o,
				a = {};
			for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
			for (o in ((s = i.apply(t, n || [])), e)) t.style[o] = a[o];
			return s;
		},
		Et = n.documentElement;
	function It(t, e, i) {
		var n,
			s,
			o,
			a,
			r = t.style;
		return (
			("" !== (a = (i = i || Dt(t)) ? i.getPropertyValue(e) || i[e] : void 0) &&
				void 0 !== a) ||
				p.contains(t.ownerDocument, t) ||
				(a = p.style(t, e)),
			i &&
				!u.pixelMarginRight() &&
				Tt.test(a) &&
				kt.test(e) &&
				((n = r.width),
				(s = r.minWidth),
				(o = r.maxWidth),
				(r.minWidth = r.maxWidth = r.width = a),
				(a = i.width),
				(r.width = n),
				(r.minWidth = s),
				(r.maxWidth = o)),
			void 0 !== a ? a + "" : a
		);
	}
	function At(t, e) {
		return {
			get: function () {
				return t()
					? void delete this.get
					: (this.get = e).apply(this, arguments);
			},
		};
	}
	!(function () {
		var e,
			i,
			s,
			o,
			a = n.createElement("div"),
			r = n.createElement("div");
		if (r.style) {
			function l() {
				(r.style.cssText =
					"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
					(r.innerHTML = ""),
					Et.appendChild(a);
				var n = t.getComputedStyle(r);
				(e = "1%" !== n.top),
					(o = "2px" === n.marginLeft),
					(i = "4px" === n.width),
					(r.style.marginRight = "50%"),
					(s = "4px" === n.marginRight),
					Et.removeChild(a);
			}
			(r.style.backgroundClip = "content-box"),
				(r.cloneNode(!0).style.backgroundClip = ""),
				(u.clearCloneStyle = "content-box" === r.style.backgroundClip),
				(a.style.cssText =
					"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
				a.appendChild(r),
				p.extend(u, {
					pixelPosition: function () {
						return l(), e;
					},
					boxSizingReliable: function () {
						return null == i && l(), i;
					},
					pixelMarginRight: function () {
						return null == i && l(), s;
					},
					reliableMarginLeft: function () {
						return null == i && l(), o;
					},
					reliableMarginRight: function () {
						var e,
							i = r.appendChild(n.createElement("div"));
						return (
							(i.style.cssText = r.style.cssText =
								"-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
							(i.style.marginRight = i.style.width = "0"),
							(r.style.width = "1px"),
							Et.appendChild(a),
							(e = !parseFloat(t.getComputedStyle(i).marginRight)),
							Et.removeChild(a),
							r.removeChild(i),
							e
						);
					},
				});
		}
	})();
	var Pt = /^(none|table(?!-c[ea]).+)/,
		Ot = { position: "absolute", visibility: "hidden", display: "block" },
		Ft = { letterSpacing: "0", fontWeight: "400" },
		Mt = ["Webkit", "O", "Moz", "ms"],
		Nt = n.createElement("div").style;
	function Ht(t) {
		if (t in Nt) return t;
		for (var e = t[0].toUpperCase() + t.slice(1), i = Mt.length; i--; )
			if ((t = Mt[i] + e) in Nt) return t;
	}
	function $t(t, e, i) {
		var n = q.exec(e);
		return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
	}
	function Lt(t, e, i, n, s) {
		for (
			var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
				a = 0;
			4 > o;
			o += 2
		)
			"margin" === i && (a += p.css(t, i + B[o], !0, s)),
				n
					? ("content" === i && (a -= p.css(t, "padding" + B[o], !0, s)),
					  "margin" !== i && (a -= p.css(t, "border" + B[o] + "Width", !0, s)))
					: ((a += p.css(t, "padding" + B[o], !0, s)),
					  "padding" !== i &&
							(a += p.css(t, "border" + B[o] + "Width", !0, s)));
		return a;
	}
	function zt(t, e, i) {
		var n = !0,
			s = "width" === e ? t.offsetWidth : t.offsetHeight,
			o = Dt(t),
			a = "border-box" === p.css(t, "boxSizing", !1, o);
		if (0 >= s || null == s) {
			if (
				((0 > (s = It(t, e, o)) || null == s) && (s = t.style[e]), Tt.test(s))
			)
				return s;
			(n = a && (u.boxSizingReliable() || s === t.style[e])),
				(s = parseFloat(s) || 0);
		}
		return s + Lt(t, e, i || (a ? "border" : "content"), n, o) + "px";
	}
	function Wt(t, e) {
		for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++)
			(n = t[a]).style &&
				((o[a] = $.get(n, "olddisplay")),
				(i = n.style.display),
				e
					? (o[a] || "none" !== i || (n.style.display = ""),
					  "" === n.style.display &&
							Y(n) &&
							(o[a] = $.access(n, "olddisplay", Ct(n.nodeName))))
					: ((s = Y(n)),
					  ("none" === i && s) ||
							$.set(n, "olddisplay", s ? i : p.css(n, "display"))));
		for (a = 0; r > a; a++)
			(n = t[a]).style &&
				((e && "none" !== n.style.display && "" !== n.style.display) ||
					(n.style.display = e ? o[a] || "" : "none"));
		return t;
	}
	function jt(t, e, i, n, s) {
		return new jt.prototype.init(t, e, i, n, s);
	}
	p.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var i = It(t, "opacity");
						return "" === i ? "1" : i;
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
		},
		cssProps: { float: "cssFloat" },
		style: function (t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var s,
					o,
					a,
					r = p.camelCase(e),
					l = t.style;
				return (
					(e = p.cssProps[r] || (p.cssProps[r] = Ht(r) || r)),
					(a = p.cssHooks[e] || p.cssHooks[r]),
					void 0 === i
						? a && "get" in a && void 0 !== (s = a.get(t, !1, n))
							? s
							: l[e]
						: ("string" === (o = typeof i) &&
								(s = q.exec(i)) &&
								s[1] &&
								((i = U(t, e, s)), (o = "number")),
						  void (
								null != i &&
								i == i &&
								("number" === o &&
									(i += (s && s[3]) || (p.cssNumber[r] ? "" : "px")),
								u.clearCloneStyle ||
									"" !== i ||
									0 !== e.indexOf("background") ||
									(l[e] = "inherit"),
								(a && "set" in a && void 0 === (i = a.set(t, i, n))) ||
									(l[e] = i))
						  ))
				);
			}
		},
		css: function (t, e, i, n) {
			var s,
				o,
				a,
				r = p.camelCase(e);
			return (
				(e = p.cssProps[r] || (p.cssProps[r] = Ht(r) || r)),
				(a = p.cssHooks[e] || p.cssHooks[r]) &&
					"get" in a &&
					(s = a.get(t, !0, i)),
				void 0 === s && (s = It(t, e, n)),
				"normal" === s && e in Ft && (s = Ft[e]),
				"" === i || i
					? ((o = parseFloat(s)), !0 === i || isFinite(o) ? o || 0 : s)
					: s
			);
		},
	}),
		p.each(["height", "width"], function (t, e) {
			p.cssHooks[e] = {
				get: function (t, i, n) {
					return i
						? Pt.test(p.css(t, "display")) && 0 === t.offsetWidth
							? St(t, Ot, function () {
									return zt(t, e, n);
							  })
							: zt(t, e, n)
						: void 0;
				},
				set: function (t, i, n) {
					var s,
						o = n && Dt(t),
						a =
							n &&
							Lt(t, e, n, "border-box" === p.css(t, "boxSizing", !1, o), o);
					return (
						a &&
							(s = q.exec(i)) &&
							"px" !== (s[3] || "px") &&
							((t.style[e] = i), (i = p.css(t, e))),
						$t(0, i, a)
					);
				},
			};
		}),
		(p.cssHooks.marginLeft = At(u.reliableMarginLeft, function (t, e) {
			return e
				? (parseFloat(It(t, "marginLeft")) ||
						t.getBoundingClientRect().left -
							St(t, { marginLeft: 0 }, function () {
								return t.getBoundingClientRect().left;
							})) + "px"
				: void 0;
		})),
		(p.cssHooks.marginRight = At(u.reliableMarginRight, function (t, e) {
			return e
				? St(t, { display: "inline-block" }, It, [t, "marginRight"])
				: void 0;
		})),
		p.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
			(p.cssHooks[t + e] = {
				expand: function (i) {
					for (
						var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
						4 > n;
						n++
					)
						s[t + B[n] + e] = o[n] || o[n - 2] || o[0];
					return s;
				},
			}),
				kt.test(t) || (p.cssHooks[t + e].set = $t);
		}),
		p.fn.extend({
			css: function (t, e) {
				return M(
					this,
					function (t, e, i) {
						var n,
							s,
							o = {},
							a = 0;
						if (p.isArray(e)) {
							for (n = Dt(t), s = e.length; s > a; a++)
								o[e[a]] = p.css(t, e[a], !1, n);
							return o;
						}
						return void 0 !== i ? p.style(t, e, i) : p.css(t, e);
					},
					t,
					e,
					arguments.length > 1
				);
			},
			show: function () {
				return Wt(this, !0);
			},
			hide: function () {
				return Wt(this);
			},
			toggle: function (t) {
				return "boolean" == typeof t
					? t
						? this.show()
						: this.hide()
					: this.each(function () {
							Y(this) ? p(this).show() : p(this).hide();
					  });
			},
		}),
		(p.Tween = jt),
		(jt.prototype = {
			constructor: jt,
			init: function (t, e, i, n, s, o) {
				(this.elem = t),
					(this.prop = i),
					(this.easing = s || p.easing._default),
					(this.options = e),
					(this.start = this.now = this.cur()),
					(this.end = n),
					(this.unit = o || (p.cssNumber[i] ? "" : "px"));
			},
			cur: function () {
				var t = jt.propHooks[this.prop];
				return t && t.get ? t.get(this) : jt.propHooks._default.get(this);
			},
			run: function (t) {
				var e,
					i = jt.propHooks[this.prop];
				return (
					this.options.duration
						? (this.pos = e =
								p.easing[this.easing](
									t,
									this.options.duration * t,
									0,
									1,
									this.options.duration
								))
						: (this.pos = e = t),
					(this.now = (this.end - this.start) * e + this.start),
					this.options.step &&
						this.options.step.call(this.elem, this.now, this),
					i && i.set ? i.set(this) : jt.propHooks._default.set(this),
					this
				);
			},
		}),
		(jt.prototype.init.prototype = jt.prototype),
		(jt.propHooks = {
			_default: {
				get: function (t) {
					var e;
					return 1 !== t.elem.nodeType ||
						(null != t.elem[t.prop] && null == t.elem.style[t.prop])
						? t.elem[t.prop]
						: (e = p.css(t.elem, t.prop, "")) && "auto" !== e
						? e
						: 0;
				},
				set: function (t) {
					p.fx.step[t.prop]
						? p.fx.step[t.prop](t)
						: 1 !== t.elem.nodeType ||
						  (null == t.elem.style[p.cssProps[t.prop]] && !p.cssHooks[t.prop])
						? (t.elem[t.prop] = t.now)
						: p.style(t.elem, t.prop, t.now + t.unit);
				},
			},
		}),
		(jt.propHooks.scrollTop = jt.propHooks.scrollLeft =
			{
				set: function (t) {
					t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
				},
			}),
		(p.easing = {
			linear: function (t) {
				return t;
			},
			swing: function (t) {
				return 0.5 - Math.cos(t * Math.PI) / 2;
			},
			_default: "swing",
		}),
		(p.fx = jt.prototype.init),
		(p.fx.step = {});
	var Rt,
		qt,
		Bt = /^(?:toggle|show|hide)$/,
		Yt = /queueHooks$/;
	function Ut() {
		return (
			t.setTimeout(function () {
				Rt = void 0;
			}),
			(Rt = p.now())
		);
	}
	function Kt(t, e) {
		var i,
			n = 0,
			s = { height: t };
		for (e = e ? 1 : 0; 4 > n; n += 2 - e)
			s["margin" + (i = B[n])] = s["padding" + i] = t;
		return e && (s.opacity = s.width = t), s;
	}
	function Vt(t, e, i) {
		for (
			var n,
				s = (Xt.tweeners[e] || []).concat(Xt.tweeners["*"]),
				o = 0,
				a = s.length;
			a > o;
			o++
		)
			if ((n = s[o].call(i, e, t))) return n;
	}
	function Xt(t, e, i) {
		var n,
			s,
			o = 0,
			a = Xt.prefilters.length,
			r = p.Deferred().always(function () {
				delete l.elem;
			}),
			l = function () {
				if (s) return !1;
				for (
					var e = Rt || Ut(),
						i = Math.max(0, h.startTime + h.duration - e),
						n = 1 - (i / h.duration || 0),
						o = 0,
						a = h.tweens.length;
					a > o;
					o++
				)
					h.tweens[o].run(n);
				return (
					r.notifyWith(t, [h, n, i]),
					1 > n && a ? i : (r.resolveWith(t, [h]), !1)
				);
			},
			h = r.promise({
				elem: t,
				props: p.extend({}, e),
				opts: p.extend(!0, { specialEasing: {}, easing: p.easing._default }, i),
				originalProperties: e,
				originalOptions: i,
				startTime: Rt || Ut(),
				duration: i.duration,
				tweens: [],
				createTween: function (e, i) {
					var n = p.Tween(
						t,
						h.opts,
						e,
						i,
						h.opts.specialEasing[e] || h.opts.easing
					);
					return h.tweens.push(n), n;
				},
				stop: function (e) {
					var i = 0,
						n = e ? h.tweens.length : 0;
					if (s) return this;
					for (s = !0; n > i; i++) h.tweens[i].run(1);
					return (
						e
							? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e]))
							: r.rejectWith(t, [h, e]),
						this
					);
				},
			}),
			c = h.props;
		for (
			(function (t, e) {
				var i, n, s, o, a;
				for (i in t)
					if (
						((s = e[(n = p.camelCase(i))]),
						(o = t[i]),
						p.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
						i !== n && ((t[n] = o), delete t[i]),
						(a = p.cssHooks[n]) && ("expand" in a))
					)
						for (i in ((o = a.expand(o)), delete t[n], o))
							(i in t) || ((t[i] = o[i]), (e[i] = s));
					else e[n] = s;
			})(c, h.opts.specialEasing);
			a > o;
			o++
		)
			if ((n = Xt.prefilters[o].call(h, t, c, h.opts)))
				return (
					p.isFunction(n.stop) &&
						(p._queueHooks(h.elem, h.opts.queue).stop = p.proxy(n.stop, n)),
					n
				);
		return (
			p.map(c, Vt, h),
			p.isFunction(h.opts.start) && h.opts.start.call(t, h),
			p.fx.timer(p.extend(l, { elem: t, anim: h, queue: h.opts.queue })),
			h
				.progress(h.opts.progress)
				.done(h.opts.done, h.opts.complete)
				.fail(h.opts.fail)
				.always(h.opts.always)
		);
	}
	(p.Animation = p.extend(Xt, {
		tweeners: {
			"*": [
				function (t, e) {
					var i = this.createTween(t, e);
					return U(i.elem, t, q.exec(e), i), i;
				},
			],
		},
		tweener: function (t, e) {
			p.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(O));
			for (var i, n = 0, s = t.length; s > n; n++)
				(i = t[n]),
					(Xt.tweeners[i] = Xt.tweeners[i] || []),
					Xt.tweeners[i].unshift(e);
		},
		prefilters: [
			function (t, e, i) {
				var n,
					s,
					o,
					a,
					r,
					l,
					h,
					c = this,
					u = {},
					d = t.style,
					f = t.nodeType && Y(t),
					g = $.get(t, "fxshow");
				for (n in (i.queue ||
					(null == (r = p._queueHooks(t, "fx")).unqueued &&
						((r.unqueued = 0),
						(l = r.empty.fire),
						(r.empty.fire = function () {
							r.unqueued || l();
						})),
					r.unqueued++,
					c.always(function () {
						c.always(function () {
							r.unqueued--, p.queue(t, "fx").length || r.empty.fire();
						});
					})),
				1 === t.nodeType &&
					("height" in e || "width" in e) &&
					((i.overflow = [d.overflow, d.overflowX, d.overflowY]),
					"inline" ===
						("none" === (h = p.css(t, "display"))
							? $.get(t, "olddisplay") || Ct(t.nodeName)
							: h) &&
						"none" === p.css(t, "float") &&
						(d.display = "inline-block")),
				i.overflow &&
					((d.overflow = "hidden"),
					c.always(function () {
						(d.overflow = i.overflow[0]),
							(d.overflowX = i.overflow[1]),
							(d.overflowY = i.overflow[2]);
					})),
				e))
					if (((s = e[n]), Bt.exec(s))) {
						if (
							(delete e[n],
							(o = o || "toggle" === s),
							s === (f ? "hide" : "show"))
						) {
							if ("show" !== s || !g || void 0 === g[n]) continue;
							f = !0;
						}
						u[n] = (g && g[n]) || p.style(t, n);
					} else h = void 0;
				if (p.isEmptyObject(u))
					"inline" === ("none" === h ? Ct(t.nodeName) : h) && (d.display = h);
				else
					for (n in (g
						? "hidden" in g && (f = g.hidden)
						: (g = $.access(t, "fxshow", {})),
					o && (g.hidden = !f),
					f
						? p(t).show()
						: c.done(function () {
								p(t).hide();
						  }),
					c.done(function () {
						var e;
						for (e in ($.remove(t, "fxshow"), u)) p.style(t, e, u[e]);
					}),
					u))
						(a = Vt(f ? g[n] : 0, n, c)),
							n in g ||
								((g[n] = a.start),
								f &&
									((a.end = a.start),
									(a.start = "width" === n || "height" === n ? 1 : 0)));
			},
		],
		prefilter: function (t, e) {
			e ? Xt.prefilters.unshift(t) : Xt.prefilters.push(t);
		},
	})),
		(p.speed = function (t, e, i) {
			var n =
				t && "object" == typeof t
					? p.extend({}, t)
					: {
							complete: i || (!i && e) || (p.isFunction(t) && t),
							duration: t,
							easing: (i && e) || (e && !p.isFunction(e) && e),
					  };
			return (
				(n.duration = p.fx.off
					? 0
					: "number" == typeof n.duration
					? n.duration
					: n.duration in p.fx.speeds
					? p.fx.speeds[n.duration]
					: p.fx.speeds._default),
				(null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
				(n.old = n.complete),
				(n.complete = function () {
					p.isFunction(n.old) && n.old.call(this),
						n.queue && p.dequeue(this, n.queue);
				}),
				n
			);
		}),
		p.fn.extend({
			fadeTo: function (t, e, i, n) {
				return this.filter(Y)
					.css("opacity", 0)
					.show()
					.end()
					.animate({ opacity: e }, t, i, n);
			},
			animate: function (t, e, i, n) {
				var s = p.isEmptyObject(t),
					o = p.speed(e, i, n),
					a = function () {
						var e = Xt(this, p.extend({}, t), o);
						(s || $.get(this, "finish")) && e.stop(!0);
					};
				return (
					(a.finish = a),
					s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
				);
			},
			stop: function (t, e, i) {
				var n = function (t) {
					var e = t.stop;
					delete t.stop, e(i);
				};
				return (
					"string" != typeof t && ((i = e), (e = t), (t = void 0)),
					e && !1 !== t && this.queue(t || "fx", []),
					this.each(function () {
						var e = !0,
							s = null != t && t + "queueHooks",
							o = p.timers,
							a = $.get(this);
						if (s) a[s] && a[s].stop && n(a[s]);
						else for (s in a) a[s] && a[s].stop && Yt.test(s) && n(a[s]);
						for (s = o.length; s--; )
							o[s].elem !== this ||
								(null != t && o[s].queue !== t) ||
								(o[s].anim.stop(i), (e = !1), o.splice(s, 1));
						(!e && i) || p.dequeue(this, t);
					})
				);
			},
			finish: function (t) {
				return (
					!1 !== t && (t = t || "fx"),
					this.each(function () {
						var e,
							i = $.get(this),
							n = i[t + "queue"],
							s = i[t + "queueHooks"],
							o = p.timers,
							a = n ? n.length : 0;
						for (
							i.finish = !0,
								p.queue(this, t, []),
								s && s.stop && s.stop.call(this, !0),
								e = o.length;
							e--;

						)
							o[e].elem === this &&
								o[e].queue === t &&
								(o[e].anim.stop(!0), o.splice(e, 1));
						for (e = 0; a > e; e++)
							n[e] && n[e].finish && n[e].finish.call(this);
						delete i.finish;
					})
				);
			},
		}),
		p.each(["toggle", "show", "hide"], function (t, e) {
			var i = p.fn[e];
			p.fn[e] = function (t, n, s) {
				return null == t || "boolean" == typeof t
					? i.apply(this, arguments)
					: this.animate(Kt(e, !0), t, n, s);
			};
		}),
		p.each(
			{
				slideDown: Kt("show"),
				slideUp: Kt("hide"),
				slideToggle: Kt("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" },
			},
			function (t, e) {
				p.fn[t] = function (t, i, n) {
					return this.animate(e, t, i, n);
				};
			}
		),
		(p.timers = []),
		(p.fx.tick = function () {
			var t,
				e = 0,
				i = p.timers;
			for (Rt = p.now(); e < i.length; e++)
				(t = i[e])() || i[e] !== t || i.splice(e--, 1);
			i.length || p.fx.stop(), (Rt = void 0);
		}),
		(p.fx.timer = function (t) {
			p.timers.push(t), t() ? p.fx.start() : p.timers.pop();
		}),
		(p.fx.interval = 13),
		(p.fx.start = function () {
			qt || (qt = t.setInterval(p.fx.tick, p.fx.interval));
		}),
		(p.fx.stop = function () {
			t.clearInterval(qt), (qt = null);
		}),
		(p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
		(p.fn.delay = function (e, i) {
			return (
				(e = (p.fx && p.fx.speeds[e]) || e),
				(i = i || "fx"),
				this.queue(i, function (i, n) {
					var s = t.setTimeout(i, e);
					n.stop = function () {
						t.clearTimeout(s);
					};
				})
			);
		}),
		(function () {
			var t = n.createElement("input"),
				e = n.createElement("select"),
				i = e.appendChild(n.createElement("option"));
			(t.type = "checkbox"),
				(u.checkOn = "" !== t.value),
				(u.optSelected = i.selected),
				(e.disabled = !0),
				(u.optDisabled = !i.disabled),
				((t = n.createElement("input")).value = "t"),
				(t.type = "radio"),
				(u.radioValue = "t" === t.value);
		})();
	var Qt,
		Gt = p.expr.attrHandle;
	p.fn.extend({
		attr: function (t, e) {
			return M(this, p.attr, t, e, arguments.length > 1);
		},
		removeAttr: function (t) {
			return this.each(function () {
				p.removeAttr(this, t);
			});
		},
	}),
		p.extend({
			attr: function (t, e, i) {
				var n,
					s,
					o = t.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return void 0 === t.getAttribute
						? p.prop(t, e, i)
						: ((1 === o && p.isXMLDoc(t)) ||
								((e = e.toLowerCase()),
								(s =
									p.attrHooks[e] || (p.expr.match.bool.test(e) ? Qt : void 0))),
						  void 0 !== i
								? null === i
									? void p.removeAttr(t, e)
									: s && "set" in s && void 0 !== (n = s.set(t, i, e))
									? n
									: (t.setAttribute(e, i + ""), i)
								: s && "get" in s && null !== (n = s.get(t, e))
								? n
								: null == (n = p.find.attr(t, e))
								? void 0
								: n);
			},
			attrHooks: {
				type: {
					set: function (t, e) {
						if (!u.radioValue && "radio" === e && p.nodeName(t, "input")) {
							var i = t.value;
							return t.setAttribute("type", e), i && (t.value = i), e;
						}
					},
				},
			},
			removeAttr: function (t, e) {
				var i,
					n,
					s = 0,
					o = e && e.match(O);
				if (o && 1 === t.nodeType)
					for (; (i = o[s++]); )
						(n = p.propFix[i] || i),
							p.expr.match.bool.test(i) && (t[n] = !1),
							t.removeAttribute(i);
			},
		}),
		(Qt = {
			set: function (t, e, i) {
				return !1 === e ? p.removeAttr(t, i) : t.setAttribute(i, i), i;
			},
		}),
		p.each(p.expr.match.bool.source.match(/\w+/g), function (t, e) {
			var i = Gt[e] || p.find.attr;
			Gt[e] = function (t, e, n) {
				var s, o;
				return (
					n ||
						((o = Gt[e]),
						(Gt[e] = s),
						(s = null != i(t, e, n) ? e.toLowerCase() : null),
						(Gt[e] = o)),
					s
				);
			};
		});
	var Zt = /^(?:input|select|textarea|button)$/i,
		Jt = /^(?:a|area)$/i;
	p.fn.extend({
		prop: function (t, e) {
			return M(this, p.prop, t, e, arguments.length > 1);
		},
		removeProp: function (t) {
			return this.each(function () {
				delete this[p.propFix[t] || t];
			});
		},
	}),
		p.extend({
			prop: function (t, e, i) {
				var n,
					s,
					o = t.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return (
						(1 === o && p.isXMLDoc(t)) ||
							((e = p.propFix[e] || e), (s = p.propHooks[e])),
						void 0 !== i
							? s && "set" in s && void 0 !== (n = s.set(t, i, e))
								? n
								: (t[e] = i)
							: s && "get" in s && null !== (n = s.get(t, e))
							? n
							: t[e]
					);
			},
			propHooks: {
				tabIndex: {
					get: function (t) {
						var e = p.find.attr(t, "tabindex");
						return e
							? parseInt(e, 10)
							: Zt.test(t.nodeName) || (Jt.test(t.nodeName) && t.href)
							? 0
							: -1;
					},
				},
			},
			propFix: { for: "htmlFor", class: "className" },
		}),
		u.optSelected ||
			(p.propHooks.selected = {
				get: function (t) {
					var e = t.parentNode;
					return e && e.parentNode && e.parentNode.selectedIndex, null;
				},
				set: function (t) {
					var e = t.parentNode;
					e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
				},
			}),
		p.each(
			[
				"tabIndex",
				"readOnly",
				"maxLength",
				"cellSpacing",
				"cellPadding",
				"rowSpan",
				"colSpan",
				"useMap",
				"frameBorder",
				"contentEditable",
			],
			function () {
				p.propFix[this.toLowerCase()] = this;
			}
		);
	var te = /[\t\r\n\f]/g;
	function ee(t) {
		return (t.getAttribute && t.getAttribute("class")) || "";
	}
	p.fn.extend({
		addClass: function (t) {
			var e,
				i,
				n,
				s,
				o,
				a,
				r,
				l = 0;
			if (p.isFunction(t))
				return this.each(function (e) {
					p(this).addClass(t.call(this, e, ee(this)));
				});
			if ("string" == typeof t && t)
				for (e = t.match(O) || []; (i = this[l++]); )
					if (
						((s = ee(i)),
						(n = 1 === i.nodeType && (" " + s + " ").replace(te, " ")))
					) {
						for (a = 0; (o = e[a++]); )
							n.indexOf(" " + o + " ") < 0 && (n += o + " ");
						s !== (r = p.trim(n)) && i.setAttribute("class", r);
					}
			return this;
		},
		removeClass: function (t) {
			var e,
				i,
				n,
				s,
				o,
				a,
				r,
				l = 0;
			if (p.isFunction(t))
				return this.each(function (e) {
					p(this).removeClass(t.call(this, e, ee(this)));
				});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t)
				for (e = t.match(O) || []; (i = this[l++]); )
					if (
						((s = ee(i)),
						(n = 1 === i.nodeType && (" " + s + " ").replace(te, " ")))
					) {
						for (a = 0; (o = e[a++]); )
							for (; n.indexOf(" " + o + " ") > -1; )
								n = n.replace(" " + o + " ", " ");
						s !== (r = p.trim(n)) && i.setAttribute("class", r);
					}
			return this;
		},
		toggleClass: function (t, e) {
			var i = typeof t;
			return "boolean" == typeof e && "string" === i
				? e
					? this.addClass(t)
					: this.removeClass(t)
				: p.isFunction(t)
				? this.each(function (i) {
						p(this).toggleClass(t.call(this, i, ee(this), e), e);
				  })
				: this.each(function () {
						var e, n, s, o;
						if ("string" === i)
							for (n = 0, s = p(this), o = t.match(O) || []; (e = o[n++]); )
								s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
						else
							(void 0 !== t && "boolean" !== i) ||
								((e = ee(this)) && $.set(this, "__className__", e),
								this.setAttribute &&
									this.setAttribute(
										"class",
										e || !1 === t ? "" : $.get(this, "__className__") || ""
									));
				  });
		},
		hasClass: function (t) {
			var e,
				i,
				n = 0;
			for (e = " " + t + " "; (i = this[n++]); )
				if (
					1 === i.nodeType &&
					(" " + ee(i) + " ").replace(te, " ").indexOf(e) > -1
				)
					return !0;
			return !1;
		},
	});
	var ie = /\r/g,
		ne = /[\x20\t\r\n\f]+/g;
	p.fn.extend({
		val: function (t) {
			var e,
				i,
				n,
				s = this[0];
			return arguments.length
				? ((n = p.isFunction(t)),
				  this.each(function (i) {
						var s;
						1 === this.nodeType &&
							(null == (s = n ? t.call(this, i, p(this).val()) : t)
								? (s = "")
								: "number" == typeof s
								? (s += "")
								: p.isArray(s) &&
								  (s = p.map(s, function (t) {
										return null == t ? "" : t + "";
								  })),
							((e =
								p.valHooks[this.type] ||
								p.valHooks[this.nodeName.toLowerCase()]) &&
								"set" in e &&
								void 0 !== e.set(this, s, "value")) ||
								(this.value = s));
				  }))
				: s
				? (e = p.valHooks[s.type] || p.valHooks[s.nodeName.toLowerCase()]) &&
				  "get" in e &&
				  void 0 !== (i = e.get(s, "value"))
					? i
					: "string" == typeof (i = s.value)
					? i.replace(ie, "")
					: null == i
					? ""
					: i
				: void 0;
		},
	}),
		p.extend({
			valHooks: {
				option: {
					get: function (t) {
						var e = p.find.attr(t, "value");
						return null != e ? e : p.trim(p.text(t)).replace(ne, " ");
					},
				},
				select: {
					get: function (t) {
						for (
							var e,
								i,
								n = t.options,
								s = t.selectedIndex,
								o = "select-one" === t.type || 0 > s,
								a = o ? null : [],
								r = o ? s + 1 : n.length,
								l = 0 > s ? r : o ? s : 0;
							r > l;
							l++
						)
							if (
								((i = n[l]).selected || l === s) &&
								(u.optDisabled
									? !i.disabled
									: null === i.getAttribute("disabled")) &&
								(!i.parentNode.disabled ||
									!p.nodeName(i.parentNode, "optgroup"))
							) {
								if (((e = p(i).val()), o)) return e;
								a.push(e);
							}
						return a;
					},
					set: function (t, e) {
						for (
							var i, n, s = t.options, o = p.makeArray(e), a = s.length;
							a--;

						)
							((n = s[a]).selected =
								p.inArray(p.valHooks.option.get(n), o) > -1) && (i = !0);
						return i || (t.selectedIndex = -1), o;
					},
				},
			},
		}),
		p.each(["radio", "checkbox"], function () {
			(p.valHooks[this] = {
				set: function (t, e) {
					return p.isArray(e)
						? (t.checked = p.inArray(p(t).val(), e) > -1)
						: void 0;
				},
			}),
				u.checkOn ||
					(p.valHooks[this].get = function (t) {
						return null === t.getAttribute("value") ? "on" : t.value;
					});
		});
	var se = /^(?:focusinfocus|focusoutblur)$/;
	p.extend(p.event, {
		trigger: function (e, i, s, o) {
			var a,
				r,
				l,
				h,
				u,
				d,
				f,
				g = [s || n],
				m = c.call(e, "type") ? e.type : e,
				v = c.call(e, "namespace") ? e.namespace.split(".") : [];
			if (
				((r = l = s = s || n),
				3 !== s.nodeType &&
					8 !== s.nodeType &&
					!se.test(m + p.event.triggered) &&
					(m.indexOf(".") > -1 &&
						((v = m.split(".")), (m = v.shift()), v.sort()),
					(u = m.indexOf(":") < 0 && "on" + m),
					((e = e[p.expando]
						? e
						: new p.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
					(e.namespace = v.join(".")),
					(e.rnamespace = e.namespace
						? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
						: null),
					(e.result = void 0),
					e.target || (e.target = s),
					(i = null == i ? [e] : p.makeArray(i, [e])),
					(f = p.event.special[m] || {}),
					o || !f.trigger || !1 !== f.trigger.apply(s, i)))
			) {
				if (!o && !f.noBubble && !p.isWindow(s)) {
					for (
						h = f.delegateType || m, se.test(h + m) || (r = r.parentNode);
						r;
						r = r.parentNode
					)
						g.push(r), (l = r);
					l === (s.ownerDocument || n) &&
						g.push(l.defaultView || l.parentWindow || t);
				}
				for (a = 0; (r = g[a++]) && !e.isPropagationStopped(); )
					(e.type = a > 1 ? h : f.bindType || m),
						(d = ($.get(r, "events") || {})[e.type] && $.get(r, "handle")) &&
							d.apply(r, i),
						(d = u && r[u]) &&
							d.apply &&
							N(r) &&
							((e.result = d.apply(r, i)),
							!1 === e.result && e.preventDefault());
				return (
					(e.type = m),
					o ||
						e.isDefaultPrevented() ||
						(f._default && !1 !== f._default.apply(g.pop(), i)) ||
						!N(s) ||
						(u &&
							p.isFunction(s[m]) &&
							!p.isWindow(s) &&
							((l = s[u]) && (s[u] = null),
							(p.event.triggered = m),
							s[m](),
							(p.event.triggered = void 0),
							l && (s[u] = l))),
					e.result
				);
			}
		},
		simulate: function (t, e, i) {
			var n = p.extend(new p.Event(), i, { type: t, isSimulated: !0 });
			p.event.trigger(n, null, e);
		},
	}),
		p.fn.extend({
			trigger: function (t, e) {
				return this.each(function () {
					p.event.trigger(t, e, this);
				});
			},
			triggerHandler: function (t, e) {
				var i = this[0];
				return i ? p.event.trigger(t, e, i, !0) : void 0;
			},
		}),
		p.each(
			"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
				" "
			),
			function (t, e) {
				p.fn[e] = function (t, i) {
					return arguments.length > 0
						? this.on(e, null, t, i)
						: this.trigger(e);
				};
			}
		),
		p.fn.extend({
			hover: function (t, e) {
				return this.mouseenter(t).mouseleave(e || t);
			},
		}),
		(u.focusin = "onfocusin" in t),
		u.focusin ||
			p.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
				var i = function (t) {
					p.event.simulate(e, t.target, p.event.fix(t));
				};
				p.event.special[e] = {
					setup: function () {
						var n = this.ownerDocument || this,
							s = $.access(n, e);
						s || n.addEventListener(t, i, !0), $.access(n, e, (s || 0) + 1);
					},
					teardown: function () {
						var n = this.ownerDocument || this,
							s = $.access(n, e) - 1;
						s
							? $.access(n, e, s)
							: (n.removeEventListener(t, i, !0), $.remove(n, e));
					},
				};
			});
	var oe = t.location,
		ae = p.now(),
		re = /\?/;
	(p.parseJSON = function (t) {
		return JSON.parse(t + "");
	}),
		(p.parseXML = function (e) {
			var i;
			if (!e || "string" != typeof e) return null;
			try {
				i = new t.DOMParser().parseFromString(e, "text/xml");
			} catch (t) {
				i = void 0;
			}
			return (
				(i && !i.getElementsByTagName("parsererror").length) ||
					p.error("Invalid XML: " + e),
				i
			);
		});
	var le = /#.*$/,
		he = /([?&])_=[^&]*/,
		ce = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ue = /^(?:GET|HEAD)$/,
		de = /^\/\//,
		pe = {},
		fe = {},
		ge = "*/".concat("*"),
		me = n.createElement("a");
	function ve(t) {
		return function (e, i) {
			"string" != typeof e && ((i = e), (e = "*"));
			var n,
				s = 0,
				o = e.toLowerCase().match(O) || [];
			if (p.isFunction(i))
				for (; (n = o[s++]); )
					"+" === n[0]
						? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
						: (t[n] = t[n] || []).push(i);
		};
	}
	function _e(t, e, i, n) {
		var s = {},
			o = t === fe;
		function a(r) {
			var l;
			return (
				(s[r] = !0),
				p.each(t[r] || [], function (t, r) {
					var h = r(e, i, n);
					return "string" != typeof h || o || s[h]
						? o
							? !(l = h)
							: void 0
						: (e.dataTypes.unshift(h), a(h), !1);
				}),
				l
			);
		}
		return a(e.dataTypes[0]) || (!s["*"] && a("*"));
	}
	function be(t, e) {
		var i,
			n,
			s = p.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
		return n && p.extend(!0, t, n), t;
	}
	(me.href = oe.href),
		p.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: oe.href,
				type: "GET",
				isLocal:
					/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
						oe.protocol
					),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": ge,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript",
				},
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON",
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": p.parseJSON,
					"text xml": p.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (t, e) {
				return e ? be(be(t, p.ajaxSettings), e) : be(p.ajaxSettings, t);
			},
			ajaxPrefilter: ve(pe),
			ajaxTransport: ve(fe),
			ajax: function (e, i) {
				"object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
				var s,
					o,
					a,
					r,
					l,
					h,
					c,
					u,
					d = p.ajaxSetup({}, i),
					f = d.context || d,
					g = d.context && (f.nodeType || f.jquery) ? p(f) : p.event,
					m = p.Deferred(),
					v = p.Callbacks("once memory"),
					_ = d.statusCode || {},
					b = {},
					y = {},
					w = 0,
					x = "canceled",
					C = {
						readyState: 0,
						getResponseHeader: function (t) {
							var e;
							if (2 === w) {
								if (!r)
									for (r = {}; (e = ce.exec(a)); ) r[e[1].toLowerCase()] = e[2];
								e = r[t.toLowerCase()];
							}
							return null == e ? null : e;
						},
						getAllResponseHeaders: function () {
							return 2 === w ? a : null;
						},
						setRequestHeader: function (t, e) {
							var i = t.toLowerCase();
							return w || ((t = y[i] = y[i] || t), (b[t] = e)), this;
						},
						overrideMimeType: function (t) {
							return w || (d.mimeType = t), this;
						},
						statusCode: function (t) {
							var e;
							if (t)
								if (2 > w) for (e in t) _[e] = [_[e], t[e]];
								else C.always(t[C.status]);
							return this;
						},
						abort: function (t) {
							var e = t || x;
							return s && s.abort(e), k(0, e), this;
						},
					};
				if (
					((m.promise(C).complete = v.add),
					(C.success = C.done),
					(C.error = C.fail),
					(d.url = ((e || d.url || oe.href) + "")
						.replace(le, "")
						.replace(de, oe.protocol + "//")),
					(d.type = i.method || i.type || d.method || d.type),
					(d.dataTypes = p
						.trim(d.dataType || "*")
						.toLowerCase()
						.match(O) || [""]),
					null == d.crossDomain)
				) {
					h = n.createElement("a");
					try {
						(h.href = d.url),
							(h.href = h.href),
							(d.crossDomain =
								me.protocol + "//" + me.host != h.protocol + "//" + h.host);
					} catch (t) {
						d.crossDomain = !0;
					}
				}
				if (
					(d.data &&
						d.processData &&
						"string" != typeof d.data &&
						(d.data = p.param(d.data, d.traditional)),
					_e(pe, d, i, C),
					2 === w)
				)
					return C;
				for (u in ((c = p.event && d.global) &&
					0 == p.active++ &&
					p.event.trigger("ajaxStart"),
				(d.type = d.type.toUpperCase()),
				(d.hasContent = !ue.test(d.type)),
				(o = d.url),
				d.hasContent ||
					(d.data &&
						((o = d.url += (re.test(o) ? "&" : "?") + d.data), delete d.data),
					!1 === d.cache &&
						(d.url = he.test(o)
							? o.replace(he, "$1_=" + ae++)
							: o + (re.test(o) ? "&" : "?") + "_=" + ae++)),
				d.ifModified &&
					(p.lastModified[o] &&
						C.setRequestHeader("If-Modified-Since", p.lastModified[o]),
					p.etag[o] && C.setRequestHeader("If-None-Match", p.etag[o])),
				((d.data && d.hasContent && !1 !== d.contentType) || i.contentType) &&
					C.setRequestHeader("Content-Type", d.contentType),
				C.setRequestHeader(
					"Accept",
					d.dataTypes[0] && d.accepts[d.dataTypes[0]]
						? d.accepts[d.dataTypes[0]] +
								("*" !== d.dataTypes[0] ? ", " + ge + "; q=0.01" : "")
						: d.accepts["*"]
				),
				d.headers))
					C.setRequestHeader(u, d.headers[u]);
				if (d.beforeSend && (!1 === d.beforeSend.call(f, C, d) || 2 === w))
					return C.abort();
				for (u in ((x = "abort"), { success: 1, error: 1, complete: 1 }))
					C[u](d[u]);
				if ((s = _e(fe, d, i, C))) {
					if (((C.readyState = 1), c && g.trigger("ajaxSend", [C, d]), 2 === w))
						return C;
					d.async &&
						d.timeout > 0 &&
						(l = t.setTimeout(function () {
							C.abort("timeout");
						}, d.timeout));
					try {
						(w = 1), s.send(b, k);
					} catch (t) {
						if (!(2 > w)) throw t;
						k(-1, t);
					}
				} else k(-1, "No Transport");
				function k(e, i, n, r) {
					var h,
						u,
						b,
						y,
						x,
						k = i;
					2 !== w &&
						((w = 2),
						l && t.clearTimeout(l),
						(s = void 0),
						(a = r || ""),
						(C.readyState = e > 0 ? 4 : 0),
						(h = (e >= 200 && 300 > e) || 304 === e),
						n &&
							(y = (function (t, e, i) {
								for (
									var n, s, o, a, r = t.contents, l = t.dataTypes;
									"*" === l[0];

								)
									l.shift(),
										void 0 === n &&
											(n = t.mimeType || e.getResponseHeader("Content-Type"));
								if (n)
									for (s in r)
										if (r[s] && r[s].test(n)) {
											l.unshift(s);
											break;
										}
								if (l[0] in i) o = l[0];
								else {
									for (s in i) {
										if (!l[0] || t.converters[s + " " + l[0]]) {
											o = s;
											break;
										}
										a || (a = s);
									}
									o = o || a;
								}
								return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
							})(d, C, n)),
						(y = (function (t, e, i, n) {
							var s,
								o,
								a,
								r,
								l,
								h = {},
								c = t.dataTypes.slice();
							if (c[1])
								for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
							for (o = c.shift(); o; )
								if (
									(t.responseFields[o] && (i[t.responseFields[o]] = e),
									!l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
									(l = o),
									(o = c.shift()))
								)
									if ("*" === o) o = l;
									else if ("*" !== l && l !== o) {
										if (!(a = h[l + " " + o] || h["* " + o]))
											for (s in h)
												if (
													(r = s.split(" "))[1] === o &&
													(a = h[l + " " + r[0]] || h["* " + r[0]])
												) {
													!0 === a
														? (a = h[s])
														: !0 !== h[s] && ((o = r[0]), c.unshift(r[1]));
													break;
												}
										if (!0 !== a)
											if (a && t.throws) e = a(e);
											else
												try {
													e = a(e);
												} catch (t) {
													return {
														state: "parsererror",
														error: a
															? t
															: "No conversion from " + l + " to " + o,
													};
												}
									}
							return { state: "success", data: e };
						})(d, y, C, h)),
						h
							? (d.ifModified &&
									((x = C.getResponseHeader("Last-Modified")) &&
										(p.lastModified[o] = x),
									(x = C.getResponseHeader("etag")) && (p.etag[o] = x)),
							  204 === e || "HEAD" === d.type
									? (k = "nocontent")
									: 304 === e
									? (k = "notmodified")
									: ((k = y.state), (u = y.data), (h = !(b = y.error))))
							: ((b = k), (!e && k) || ((k = "error"), 0 > e && (e = 0))),
						(C.status = e),
						(C.statusText = (i || k) + ""),
						h ? m.resolveWith(f, [u, k, C]) : m.rejectWith(f, [C, k, b]),
						C.statusCode(_),
						(_ = void 0),
						c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, d, h ? u : b]),
						v.fireWith(f, [C, k]),
						c &&
							(g.trigger("ajaxComplete", [C, d]),
							--p.active || p.event.trigger("ajaxStop")));
				}
				return C;
			},
			getJSON: function (t, e, i) {
				return p.get(t, e, i, "json");
			},
			getScript: function (t, e) {
				return p.get(t, void 0, e, "script");
			},
		}),
		p.each(["get", "post"], function (t, e) {
			p[e] = function (t, i, n, s) {
				return (
					p.isFunction(i) && ((s = s || n), (n = i), (i = void 0)),
					p.ajax(
						p.extend(
							{ url: t, type: e, dataType: s, data: i, success: n },
							p.isPlainObject(t) && t
						)
					)
				);
			};
		}),
		(p._evalUrl = function (t) {
			return p.ajax({
				url: t,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				throws: !0,
			});
		}),
		p.fn.extend({
			wrapAll: function (t) {
				var e;
				return p.isFunction(t)
					? this.each(function (e) {
							p(this).wrapAll(t.call(this, e));
					  })
					: (this[0] &&
							((e = p(t, this[0].ownerDocument).eq(0).clone(!0)),
							this[0].parentNode && e.insertBefore(this[0]),
							e
								.map(function () {
									for (var t = this; t.firstElementChild; )
										t = t.firstElementChild;
									return t;
								})
								.append(this)),
					  this);
			},
			wrapInner: function (t) {
				return p.isFunction(t)
					? this.each(function (e) {
							p(this).wrapInner(t.call(this, e));
					  })
					: this.each(function () {
							var e = p(this),
								i = e.contents();
							i.length ? i.wrapAll(t) : e.append(t);
					  });
			},
			wrap: function (t) {
				var e = p.isFunction(t);
				return this.each(function (i) {
					p(this).wrapAll(e ? t.call(this, i) : t);
				});
			},
			unwrap: function () {
				return this.parent()
					.each(function () {
						p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
					})
					.end();
			},
		}),
		(p.expr.filters.hidden = function (t) {
			return !p.expr.filters.visible(t);
		}),
		(p.expr.filters.visible = function (t) {
			return (
				t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
			);
		});
	var ye = /%20/g,
		we = /\[\]$/,
		xe = /\r?\n/g,
		Ce = /^(?:submit|button|image|reset|file)$/i,
		ke = /^(?:input|select|textarea|keygen)/i;
	function Te(t, e, i, n) {
		var s;
		if (p.isArray(e))
			p.each(e, function (e, s) {
				i || we.test(t)
					? n(t, s)
					: Te(
							t + "[" + ("object" == typeof s && null != s ? e : "") + "]",
							s,
							i,
							n
					  );
			});
		else if (i || "object" !== p.type(e)) n(t, e);
		else for (s in e) Te(t + "[" + s + "]", e[s], i, n);
	}
	(p.param = function (t, e) {
		var i,
			n = [],
			s = function (t, e) {
				(e = p.isFunction(e) ? e() : null == e ? "" : e),
					(n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
			};
		if (
			(void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional),
			p.isArray(t) || (t.jquery && !p.isPlainObject(t)))
		)
			p.each(t, function () {
				s(this.name, this.value);
			});
		else for (i in t) Te(i, t[i], e, s);
		return n.join("&").replace(ye, "+");
	}),
		p.fn.extend({
			serialize: function () {
				return p.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var t = p.prop(this, "elements");
					return t ? p.makeArray(t) : this;
				})
					.filter(function () {
						var t = this.type;
						return (
							this.name &&
							!p(this).is(":disabled") &&
							ke.test(this.nodeName) &&
							!Ce.test(t) &&
							(this.checked || !K.test(t))
						);
					})
					.map(function (t, e) {
						var i = p(this).val();
						return null == i
							? null
							: p.isArray(i)
							? p.map(i, function (t) {
									return { name: e.name, value: t.replace(xe, "\r\n") };
							  })
							: { name: e.name, value: i.replace(xe, "\r\n") };
					})
					.get();
			},
		}),
		(p.ajaxSettings.xhr = function () {
			try {
				return new t.XMLHttpRequest();
			} catch (t) {}
		});
	var De = { 0: 200, 1223: 204 },
		Se = p.ajaxSettings.xhr();
	(u.cors = !!Se && "withCredentials" in Se),
		(u.ajax = Se = !!Se),
		p.ajaxTransport(function (e) {
			var i, n;
			return u.cors || (Se && !e.crossDomain)
				? {
						send: function (s, o) {
							var a,
								r = e.xhr();
							if (
								(r.open(e.type, e.url, e.async, e.username, e.password),
								e.xhrFields)
							)
								for (a in e.xhrFields) r[a] = e.xhrFields[a];
							for (a in (e.mimeType &&
								r.overrideMimeType &&
								r.overrideMimeType(e.mimeType),
							e.crossDomain ||
								s["X-Requested-With"] ||
								(s["X-Requested-With"] = "XMLHttpRequest"),
							s))
								r.setRequestHeader(a, s[a]);
							(i = function (t) {
								return function () {
									i &&
										((i =
											n =
											r.onload =
											r.onerror =
											r.onabort =
											r.onreadystatechange =
												null),
										"abort" === t
											? r.abort()
											: "error" === t
											? "number" != typeof r.status
												? o(0, "error")
												: o(r.status, r.statusText)
											: o(
													De[r.status] || r.status,
													r.statusText,
													"text" !== (r.responseType || "text") ||
														"string" != typeof r.responseText
														? { binary: r.response }
														: { text: r.responseText },
													r.getAllResponseHeaders()
											  ));
								};
							}),
								(r.onload = i()),
								(n = r.onerror = i("error")),
								void 0 !== r.onabort
									? (r.onabort = n)
									: (r.onreadystatechange = function () {
											4 === r.readyState &&
												t.setTimeout(function () {
													i && n();
												});
									  }),
								(i = i("abort"));
							try {
								r.send((e.hasContent && e.data) || null);
							} catch (t) {
								if (i) throw t;
							}
						},
						abort: function () {
							i && i();
						},
				  }
				: void 0;
		}),
		p.ajaxSetup({
			accepts: {
				script:
					"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
			},
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: {
				"text script": function (t) {
					return p.globalEval(t), t;
				},
			},
		}),
		p.ajaxPrefilter("script", function (t) {
			void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
		}),
		p.ajaxTransport("script", function (t) {
			var e, i;
			if (t.crossDomain)
				return {
					send: function (s, o) {
						(e = p("<script>")
							.prop({ charset: t.scriptCharset, src: t.url })
							.on(
								"load error",
								(i = function (t) {
									e.remove(),
										(i = null),
										t && o("error" === t.type ? 404 : 200, t.type);
								})
							)),
							n.head.appendChild(e[0]);
					},
					abort: function () {
						i && i();
					},
				};
		});
	var Ee = [],
		Ie = /(=)\?(?=&|$)|\?\?/;
	p.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var t = Ee.pop() || p.expando + "_" + ae++;
			return (this[t] = !0), t;
		},
	}),
		p.ajaxPrefilter("json jsonp", function (e, i, n) {
			var s,
				o,
				a,
				r =
					!1 !== e.jsonp &&
					(Ie.test(e.url)
						? "url"
						: "string" == typeof e.data &&
						  0 ===
								(e.contentType || "").indexOf(
									"application/x-www-form-urlencoded"
								) &&
						  Ie.test(e.data) &&
						  "data");
			return r || "jsonp" === e.dataTypes[0]
				? ((s = e.jsonpCallback =
						p.isFunction(e.jsonpCallback)
							? e.jsonpCallback()
							: e.jsonpCallback),
				  r
						? (e[r] = e[r].replace(Ie, "$1" + s))
						: !1 !== e.jsonp &&
						  (e.url += (re.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
				  (e.converters["script json"] = function () {
						return a || p.error(s + " was not called"), a[0];
				  }),
				  (e.dataTypes[0] = "json"),
				  (o = t[s]),
				  (t[s] = function () {
						a = arguments;
				  }),
				  n.always(function () {
						void 0 === o ? p(t).removeProp(s) : (t[s] = o),
							e[s] && ((e.jsonpCallback = i.jsonpCallback), Ee.push(s)),
							a && p.isFunction(o) && o(a[0]),
							(a = o = void 0);
				  }),
				  "script")
				: void 0;
		}),
		(p.parseHTML = function (t, e, i) {
			if (!t || "string" != typeof t) return null;
			"boolean" == typeof e && ((i = e), (e = !1)), (e = e || n);
			var s = C.exec(t),
				o = !i && [];
			return s
				? [e.createElement(s[1])]
				: ((s = tt([t], e, o)),
				  o && o.length && p(o).remove(),
				  p.merge([], s.childNodes));
		});
	var Ae = p.fn.load;
	function Pe(t) {
		return p.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
	}
	(p.fn.load = function (t, e, i) {
		if ("string" != typeof t && Ae) return Ae.apply(this, arguments);
		var n,
			s,
			o,
			a = this,
			r = t.indexOf(" ");
		return (
			r > -1 && ((n = p.trim(t.slice(r))), (t = t.slice(0, r))),
			p.isFunction(e)
				? ((i = e), (e = void 0))
				: e && "object" == typeof e && (s = "POST"),
			a.length > 0 &&
				p
					.ajax({ url: t, type: s || "GET", dataType: "html", data: e })
					.done(function (t) {
						(o = arguments),
							a.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t);
					})
					.always(
						i &&
							function (t, e) {
								a.each(function () {
									i.apply(this, o || [t.responseText, e, t]);
								});
							}
					),
			this
		);
	}),
		p.each(
			[
				"ajaxStart",
				"ajaxStop",
				"ajaxComplete",
				"ajaxError",
				"ajaxSuccess",
				"ajaxSend",
			],
			function (t, e) {
				p.fn[e] = function (t) {
					return this.on(e, t);
				};
			}
		),
		(p.expr.filters.animated = function (t) {
			return p.grep(p.timers, function (e) {
				return t === e.elem;
			}).length;
		}),
		(p.offset = {
			setOffset: function (t, e, i) {
				var n,
					s,
					o,
					a,
					r,
					l,
					h = p.css(t, "position"),
					c = p(t),
					u = {};
				"static" === h && (t.style.position = "relative"),
					(r = c.offset()),
					(o = p.css(t, "top")),
					(l = p.css(t, "left")),
					("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1
						? ((a = (n = c.position()).top), (s = n.left))
						: ((a = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
					p.isFunction(e) && (e = e.call(t, i, p.extend({}, r))),
					null != e.top && (u.top = e.top - r.top + a),
					null != e.left && (u.left = e.left - r.left + s),
					"using" in e ? e.using.call(t, u) : c.css(u);
			},
		}),
		p.fn.extend({
			offset: function (t) {
				if (arguments.length)
					return void 0 === t
						? this
						: this.each(function (e) {
								p.offset.setOffset(this, t, e);
						  });
				var e,
					i,
					n = this[0],
					s = { top: 0, left: 0 },
					o = n && n.ownerDocument;
				return o
					? ((e = o.documentElement),
					  p.contains(e, n)
							? ((s = n.getBoundingClientRect()),
							  (i = Pe(o)),
							  {
									top: s.top + i.pageYOffset - e.clientTop,
									left: s.left + i.pageXOffset - e.clientLeft,
							  })
							: s)
					: void 0;
			},
			position: function () {
				if (this[0]) {
					var t,
						e,
						i = this[0],
						n = { top: 0, left: 0 };
					return (
						"fixed" === p.css(i, "position")
							? (e = i.getBoundingClientRect())
							: ((t = this.offsetParent()),
							  (e = this.offset()),
							  p.nodeName(t[0], "html") || (n = t.offset()),
							  (n.top += p.css(t[0], "borderTopWidth", !0)),
							  (n.left += p.css(t[0], "borderLeftWidth", !0))),
						{
							top: e.top - n.top - p.css(i, "marginTop", !0),
							left: e.left - n.left - p.css(i, "marginLeft", !0),
						}
					);
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (
						var t = this.offsetParent;
						t && "static" === p.css(t, "position");

					)
						t = t.offsetParent;
					return t || Et;
				});
			},
		}),
		p.each(
			{ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
			function (t, e) {
				var i = "pageYOffset" === e;
				p.fn[t] = function (n) {
					return M(
						this,
						function (t, n, s) {
							var o = Pe(t);
							return void 0 === s
								? o
									? o[e]
									: t[n]
								: void (o
										? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset)
										: (t[n] = s));
						},
						t,
						n,
						arguments.length
					);
				};
			}
		),
		p.each(["top", "left"], function (t, e) {
			p.cssHooks[e] = At(u.pixelPosition, function (t, i) {
				return i
					? ((i = It(t, e)), Tt.test(i) ? p(t).position()[e] + "px" : i)
					: void 0;
			});
		}),
		p.each({ Height: "height", Width: "width" }, function (t, e) {
			p.each(
				{ padding: "inner" + t, content: e, "": "outer" + t },
				function (i, n) {
					p.fn[n] = function (n, s) {
						var o = arguments.length && (i || "boolean" != typeof n),
							a = i || (!0 === n || !0 === s ? "margin" : "border");
						return M(
							this,
							function (e, i, n) {
								var s;
								return p.isWindow(e)
									? e.document.documentElement["client" + t]
									: 9 === e.nodeType
									? ((s = e.documentElement),
									  Math.max(
											e.body["scroll" + t],
											s["scroll" + t],
											e.body["offset" + t],
											s["offset" + t],
											s["client" + t]
									  ))
									: void 0 === n
									? p.css(e, i, a)
									: p.style(e, i, n, a);
							},
							e,
							o ? n : void 0,
							o,
							null
						);
					};
				}
			);
		}),
		p.fn.extend({
			bind: function (t, e, i) {
				return this.on(t, null, e, i);
			},
			unbind: function (t, e) {
				return this.off(t, null, e);
			},
			delegate: function (t, e, i, n) {
				return this.on(e, t, i, n);
			},
			undelegate: function (t, e, i) {
				return 1 === arguments.length
					? this.off(t, "**")
					: this.off(e, t || "**", i);
			},
			size: function () {
				return this.length;
			},
		}),
		(p.fn.andSelf = p.fn.addBack),
		"function" == typeof define &&
			define.amd &&
			define("jquery", [], function () {
				return p;
			});
	var Oe = t.jQuery,
		Fe = t.$;
	return (
		(p.noConflict = function (e) {
			return t.$ === p && (t.$ = Fe), e && t.jQuery === p && (t.jQuery = Oe), p;
		}),
		e || (t.jQuery = t.$ = p),
		p
	);
}),
	(function (t) {
		"function" == typeof define && define.amd
			? define(["jquery"], t)
			: t(jQuery);
	})(function (t) {
		function e() {
			(this._curInst = null),
				(this._keyEvent = !1),
				(this._disabledInputs = []),
				(this._datepickerShowing = !1),
				(this._inDialog = !1),
				(this._mainDivId = "ui-datepicker-div"),
				(this._inlineClass = "ui-datepicker-inline"),
				(this._appendClass = "ui-datepicker-append"),
				(this._triggerClass = "ui-datepicker-trigger"),
				(this._dialogClass = "ui-datepicker-dialog"),
				(this._disableClass = "ui-datepicker-disabled"),
				(this._unselectableClass = "ui-datepicker-unselectable"),
				(this._currentClass = "ui-datepicker-current-day"),
				(this._dayOverClass = "ui-datepicker-days-cell-over"),
				(this.regional = []),
				(this.regional[""] = {
					closeText: "Done",
					prevText: "Prev",
					nextText: "Next",
					currentText: "Today",
					monthNames: [
						"January",
						"February",
						"March",
						"April",
						"May",
						"June",
						"July",
						"August",
						"September",
						"October",
						"November",
						"December",
					],
					monthNamesShort: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					],
					dayNames: [
						"Sunday",
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
					],
					dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
					weekHeader: "Wk",
					dateFormat: "mm/dd/yy",
					firstDay: 0,
					isRTL: !1,
					showMonthAfterYear: !1,
					yearSuffix: "",
				}),
				(this._defaults = {
					showOn: "focus",
					showAnim: "fadeIn",
					showOptions: {},
					defaultDate: null,
					appendText: "",
					buttonText: "...",
					buttonImage: "",
					buttonImageOnly: !1,
					hideIfNoPrevNext: !1,
					navigationAsDateFormat: !1,
					gotoCurrent: !1,
					changeMonth: !1,
					changeYear: !1,
					yearRange: "c-10:c+10",
					showOtherMonths: !1,
					selectOtherMonths: !1,
					showWeek: !1,
					calculateWeek: this.iso8601Week,
					shortYearCutoff: "+10",
					minDate: null,
					maxDate: null,
					duration: "fast",
					beforeShowDay: null,
					beforeShow: null,
					onSelect: null,
					onChangeMonthYear: null,
					onClose: null,
					numberOfMonths: 1,
					showCurrentAtPos: 0,
					stepMonths: 1,
					stepBigMonths: 12,
					altField: "",
					altFormat: "",
					constrainInput: !0,
					showButtonPanel: !1,
					autoSize: !1,
					disabled: !1,
				}),
				t.extend(this._defaults, this.regional[""]),
				(this.regional.en = t.extend(!0, {}, this.regional[""])),
				(this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
				(this.dpDiv = i(
					t(
						"<div id='" +
							this._mainDivId +
							"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
					)
				));
		}
		function i(e) {
			var i =
				"button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
			return e
				.on("mouseout", i, function () {
					t(this).removeClass("ui-state-hover"),
						-1 !== this.className.indexOf("ui-datepicker-prev") &&
							t(this).removeClass("ui-datepicker-prev-hover"),
						-1 !== this.className.indexOf("ui-datepicker-next") &&
							t(this).removeClass("ui-datepicker-next-hover");
				})
				.on("mouseover", i, n);
		}
		function n() {
			t.datepicker._isDisabledDatepicker(
				d.inline ? d.dpDiv.parent()[0] : d.input[0]
			) ||
				(t(this)
					.parents(".ui-datepicker-calendar")
					.find("a")
					.removeClass("ui-state-hover"),
				t(this).addClass("ui-state-hover"),
				-1 !== this.className.indexOf("ui-datepicker-prev") &&
					t(this).addClass("ui-datepicker-prev-hover"),
				-1 !== this.className.indexOf("ui-datepicker-next") &&
					t(this).addClass("ui-datepicker-next-hover"));
		}
		function s(e, i) {
			for (var n in (t.extend(e, i), i)) null == i[n] && (e[n] = i[n]);
			return e;
		}
		function o(t) {
			return function () {
				var e = this.element.val();
				t.apply(this, arguments),
					this._refresh(),
					e !== this.element.val() && this._trigger("change");
			};
		}
		(t.ui = t.ui || {}), (t.ui.version = "1.12.1");
		var a = 0,
			r = Array.prototype.slice;
		(t.cleanData = (function (e) {
			return function (i) {
				var n, s, o;
				for (o = 0; null != (s = i[o]); o++)
					try {
						(n = t._data(s, "events")) &&
							n.remove &&
							t(s).triggerHandler("remove");
					} catch (t) {}
				e(i);
			};
		})(t.cleanData)),
			(t.widget = function (e, i, n) {
				var s,
					o,
					a,
					r = {},
					l = e.split(".")[0],
					h = l + "-" + (e = e.split(".")[1]);
				return (
					n || ((n = i), (i = t.Widget)),
					t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
					(t.expr[":"][h.toLowerCase()] = function (e) {
						return !!t.data(e, h);
					}),
					(t[l] = t[l] || {}),
					(s = t[l][e]),
					(o = t[l][e] =
						function (t, e) {
							return this._createWidget
								? void (arguments.length && this._createWidget(t, e))
								: new o(t, e);
						}),
					t.extend(o, s, {
						version: n.version,
						_proto: t.extend({}, n),
						_childConstructors: [],
					}),
					((a = new i()).options = t.widget.extend({}, a.options)),
					t.each(n, function (e, n) {
						return t.isFunction(n)
							? void (r[e] = (function () {
									function t() {
										return i.prototype[e].apply(this, arguments);
									}
									function s(t) {
										return i.prototype[e].apply(this, t);
									}
									return function () {
										var e,
											i = this._super,
											o = this._superApply;
										return (
											(this._super = t),
											(this._superApply = s),
											(e = n.apply(this, arguments)),
											(this._super = i),
											(this._superApply = o),
											e
										);
									};
							  })())
							: void (r[e] = n);
					}),
					(o.prototype = t.widget.extend(
						a,
						{ widgetEventPrefix: (s && a.widgetEventPrefix) || e },
						r,
						{ constructor: o, namespace: l, widgetName: e, widgetFullName: h }
					)),
					s
						? (t.each(s._childConstructors, function (e, i) {
								var n = i.prototype;
								t.widget(n.namespace + "." + n.widgetName, o, i._proto);
						  }),
						  delete s._childConstructors)
						: i._childConstructors.push(o),
					t.widget.bridge(e, o),
					o
				);
			}),
			(t.widget.extend = function (e) {
				for (
					var i, n, s = r.call(arguments, 1), o = 0, a = s.length;
					a > o;
					o++
				)
					for (i in s[o])
						(n = s[o][i]),
							s[o].hasOwnProperty(i) &&
								void 0 !== n &&
								(e[i] = t.isPlainObject(n)
									? t.isPlainObject(e[i])
										? t.widget.extend({}, e[i], n)
										: t.widget.extend({}, n)
									: n);
				return e;
			}),
			(t.widget.bridge = function (e, i) {
				var n = i.prototype.widgetFullName || e;
				t.fn[e] = function (s) {
					var o = "string" == typeof s,
						a = r.call(arguments, 1),
						l = this;
					return (
						o
							? this.length || "instance" !== s
								? this.each(function () {
										var i,
											o = t.data(this, n);
										return "instance" === s
											? ((l = o), !1)
											: o
											? t.isFunction(o[s]) && "_" !== s.charAt(0)
												? (i = o[s].apply(o, a)) !== o && void 0 !== i
													? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
													: void 0
												: t.error(
														"no such method '" +
															s +
															"' for " +
															e +
															" widget instance"
												  )
											: t.error(
													"cannot call methods on " +
														e +
														" prior to initialization; attempted to call method '" +
														s +
														"'"
											  );
								  })
								: (l = void 0)
							: (a.length && (s = t.widget.extend.apply(null, [s].concat(a))),
							  this.each(function () {
									var e = t.data(this, n);
									e
										? (e.option(s || {}), e._init && e._init())
										: t.data(this, n, new i(s, this));
							  })),
						l
					);
				};
			}),
			(t.Widget = function () {}),
			(t.Widget._childConstructors = []),
			(t.Widget.prototype = {
				widgetName: "widget",
				widgetEventPrefix: "",
				defaultElement: "<div>",
				options: { classes: {}, disabled: !1, create: null },
				_createWidget: function (e, i) {
					(i = t(i || this.defaultElement || this)[0]),
						(this.element = t(i)),
						(this.uuid = a++),
						(this.eventNamespace = "." + this.widgetName + this.uuid),
						(this.bindings = t()),
						(this.hoverable = t()),
						(this.focusable = t()),
						(this.classesElementLookup = {}),
						i !== this &&
							(t.data(i, this.widgetFullName, this),
							this._on(!0, this.element, {
								remove: function (t) {
									t.target === i && this.destroy();
								},
							}),
							(this.document = t(i.style ? i.ownerDocument : i.document || i)),
							(this.window = t(
								this.document[0].defaultView || this.document[0].parentWindow
							))),
						(this.options = t.widget.extend(
							{},
							this.options,
							this._getCreateOptions(),
							e
						)),
						this._create(),
						this.options.disabled &&
							this._setOptionDisabled(this.options.disabled),
						this._trigger("create", null, this._getCreateEventData()),
						this._init();
				},
				_getCreateOptions: function () {
					return {};
				},
				_getCreateEventData: t.noop,
				_create: t.noop,
				_init: t.noop,
				destroy: function () {
					var e = this;
					this._destroy(),
						t.each(this.classesElementLookup, function (t, i) {
							e._removeClass(i, t);
						}),
						this.element
							.off(this.eventNamespace)
							.removeData(this.widgetFullName),
						this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
						this.bindings.off(this.eventNamespace);
				},
				_destroy: t.noop,
				widget: function () {
					return this.element;
				},
				option: function (e, i) {
					var n,
						s,
						o,
						a = e;
					if (0 === arguments.length) return t.widget.extend({}, this.options);
					if ("string" == typeof e)
						if (((a = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
							for (
								s = a[e] = t.widget.extend({}, this.options[e]), o = 0;
								n.length - 1 > o;
								o++
							)
								(s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
							if (((e = n.pop()), 1 === arguments.length))
								return void 0 === s[e] ? null : s[e];
							s[e] = i;
						} else {
							if (1 === arguments.length)
								return void 0 === this.options[e] ? null : this.options[e];
							a[e] = i;
						}
					return this._setOptions(a), this;
				},
				_setOptions: function (t) {
					var e;
					for (e in t) this._setOption(e, t[e]);
					return this;
				},
				_setOption: function (t, e) {
					return (
						"classes" === t && this._setOptionClasses(e),
						(this.options[t] = e),
						"disabled" === t && this._setOptionDisabled(e),
						this
					);
				},
				_setOptionClasses: function (e) {
					var i, n, s;
					for (i in e)
						(s = this.classesElementLookup[i]),
							e[i] !== this.options.classes[i] &&
								s &&
								s.length &&
								((n = t(s.get())),
								this._removeClass(s, i),
								n.addClass(
									this._classes({ element: n, keys: i, classes: e, add: !0 })
								));
				},
				_setOptionDisabled: function (t) {
					this._toggleClass(
						this.widget(),
						this.widgetFullName + "-disabled",
						null,
						!!t
					),
						t &&
							(this._removeClass(this.hoverable, null, "ui-state-hover"),
							this._removeClass(this.focusable, null, "ui-state-focus"));
				},
				enable: function () {
					return this._setOptions({ disabled: !1 });
				},
				disable: function () {
					return this._setOptions({ disabled: !0 });
				},
				_classes: function (e) {
					function i(i, o) {
						var a, r;
						for (r = 0; i.length > r; r++)
							(a = s.classesElementLookup[i[r]] || t()),
								(a = e.add
									? t(t.unique(a.get().concat(e.element.get())))
									: t(a.not(e.element).get())),
								(s.classesElementLookup[i[r]] = a),
								n.push(i[r]),
								o && e.classes[i[r]] && n.push(e.classes[i[r]]);
					}
					var n = [],
						s = this;
					return (
						(e = t.extend(
							{ element: this.element, classes: this.options.classes || {} },
							e
						)),
						this._on(e.element, { remove: "_untrackClassesElement" }),
						e.keys && i(e.keys.match(/\S+/g) || [], !0),
						e.extra && i(e.extra.match(/\S+/g) || []),
						n.join(" ")
					);
				},
				_untrackClassesElement: function (e) {
					var i = this;
					t.each(i.classesElementLookup, function (n, s) {
						-1 !== t.inArray(e.target, s) &&
							(i.classesElementLookup[n] = t(s.not(e.target).get()));
					});
				},
				_removeClass: function (t, e, i) {
					return this._toggleClass(t, e, i, !1);
				},
				_addClass: function (t, e, i) {
					return this._toggleClass(t, e, i, !0);
				},
				_toggleClass: function (t, e, i, n) {
					n = "boolean" == typeof n ? n : i;
					var s = "string" == typeof t || null === t,
						o = {
							extra: s ? e : i,
							keys: s ? t : e,
							element: s ? this.element : t,
							add: n,
						};
					return o.element.toggleClass(this._classes(o), n), this;
				},
				_on: function (e, i, n) {
					var s,
						o = this;
					"boolean" != typeof e && ((n = i), (i = e), (e = !1)),
						n
							? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
							: ((n = i), (i = this.element), (s = this.widget())),
						t.each(n, function (n, a) {
							function r() {
								return e ||
									(!0 !== o.options.disabled &&
										!t(this).hasClass("ui-state-disabled"))
									? ("string" == typeof a ? o[a] : a).apply(o, arguments)
									: void 0;
							}
							"string" != typeof a &&
								(r.guid = a.guid = a.guid || r.guid || t.guid++);
							var l = n.match(/^([\w:-]*)\s*(.*)$/),
								h = l[1] + o.eventNamespace,
								c = l[2];
							c ? s.on(h, c, r) : i.on(h, r);
						});
				},
				_off: function (e, i) {
					(i =
						(i || "").split(" ").join(this.eventNamespace + " ") +
						this.eventNamespace),
						e.off(i).off(i),
						(this.bindings = t(this.bindings.not(e).get())),
						(this.focusable = t(this.focusable.not(e).get())),
						(this.hoverable = t(this.hoverable.not(e).get()));
				},
				_delay: function (t, e) {
					var i = this;
					return setTimeout(function () {
						return ("string" == typeof t ? i[t] : t).apply(i, arguments);
					}, e || 0);
				},
				_hoverable: function (e) {
					(this.hoverable = this.hoverable.add(e)),
						this._on(e, {
							mouseenter: function (e) {
								this._addClass(t(e.currentTarget), null, "ui-state-hover");
							},
							mouseleave: function (e) {
								this._removeClass(t(e.currentTarget), null, "ui-state-hover");
							},
						});
				},
				_focusable: function (e) {
					(this.focusable = this.focusable.add(e)),
						this._on(e, {
							focusin: function (e) {
								this._addClass(t(e.currentTarget), null, "ui-state-focus");
							},
							focusout: function (e) {
								this._removeClass(t(e.currentTarget), null, "ui-state-focus");
							},
						});
				},
				_trigger: function (e, i, n) {
					var s,
						o,
						a = this.options[e];
					if (
						((n = n || {}),
						((i = t.Event(i)).type = (
							e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
						).toLowerCase()),
						(i.target = this.element[0]),
						(o = i.originalEvent))
					)
						for (s in o) s in i || (i[s] = o[s]);
					return (
						this.element.trigger(i, n),
						!(
							(t.isFunction(a) &&
								!1 === a.apply(this.element[0], [i].concat(n))) ||
							i.isDefaultPrevented()
						)
					);
				},
			}),
			t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
				t.Widget.prototype["_" + e] = function (n, s, o) {
					"string" == typeof s && (s = { effect: s });
					var a,
						r = s ? (!0 === s || "number" == typeof s ? i : s.effect || i) : e;
					"number" == typeof (s = s || {}) && (s = { duration: s }),
						(a = !t.isEmptyObject(s)),
						(s.complete = o),
						s.delay && n.delay(s.delay),
						a && t.effects && t.effects.effect[r]
							? n[e](s)
							: r !== e && n[r]
							? n[r](s.duration, s.easing, o)
							: n.queue(function (i) {
									t(this)[e](), o && o.call(n[0]), i();
							  });
				};
			}),
			t.widget,
			(function () {
				function e(t, e, i) {
					return [
						parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1),
						parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1),
					];
				}
				function i(e, i) {
					return parseInt(t.css(e, i), 10) || 0;
				}
				var n,
					s = Math.max,
					o = Math.abs,
					a = /left|center|right/,
					r = /top|center|bottom/,
					l = /[\+\-]\d+(\.[\d]+)?%?/,
					h = /^\w+/,
					c = /%$/,
					u = t.fn.position;
				(t.position = {
					scrollbarWidth: function () {
						if (void 0 !== n) return n;
						var e,
							i,
							s = t(
								"<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
							),
							o = s.children()[0];
						return (
							t("body").append(s),
							(e = o.offsetWidth),
							s.css("overflow", "scroll"),
							e === (i = o.offsetWidth) && (i = s[0].clientWidth),
							s.remove(),
							(n = e - i)
						);
					},
					getScrollInfo: function (e) {
						var i =
								e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
							n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
							s =
								"scroll" === i ||
								("auto" === i && e.width < e.element[0].scrollWidth);
						return {
							width:
								"scroll" === n ||
								("auto" === n && e.height < e.element[0].scrollHeight)
									? t.position.scrollbarWidth()
									: 0,
							height: s ? t.position.scrollbarWidth() : 0,
						};
					},
					getWithinInfo: function (e) {
						var i = t(e || window),
							n = t.isWindow(i[0]),
							s = !!i[0] && 9 === i[0].nodeType;
						return {
							element: i,
							isWindow: n,
							isDocument: s,
							offset: !n && !s ? t(e).offset() : { left: 0, top: 0 },
							scrollLeft: i.scrollLeft(),
							scrollTop: i.scrollTop(),
							width: i.outerWidth(),
							height: i.outerHeight(),
						};
					},
				}),
					(t.fn.position = function (n) {
						if (!n || !n.of) return u.apply(this, arguments);
						n = t.extend({}, n);
						var c,
							d,
							p,
							f,
							g,
							m,
							v = t(n.of),
							_ = t.position.getWithinInfo(n.within),
							b = t.position.getScrollInfo(_),
							y = (n.collision || "flip").split(" "),
							w = {};
						return (
							(m = (function (e) {
								var i = e[0];
								return 9 === i.nodeType
									? {
											width: e.width(),
											height: e.height(),
											offset: { top: 0, left: 0 },
									  }
									: t.isWindow(i)
									? {
											width: e.width(),
											height: e.height(),
											offset: { top: e.scrollTop(), left: e.scrollLeft() },
									  }
									: i.preventDefault
									? {
											width: 0,
											height: 0,
											offset: { top: i.pageY, left: i.pageX },
									  }
									: {
											width: e.outerWidth(),
											height: e.outerHeight(),
											offset: e.offset(),
									  };
							})(v)),
							v[0].preventDefault && (n.at = "left top"),
							(d = m.width),
							(p = m.height),
							(f = m.offset),
							(g = t.extend({}, f)),
							t.each(["my", "at"], function () {
								var t,
									e,
									i = (n[this] || "").split(" ");
								1 === i.length &&
									(i = a.test(i[0])
										? i.concat(["center"])
										: r.test(i[0])
										? ["center"].concat(i)
										: ["center", "center"]),
									(i[0] = a.test(i[0]) ? i[0] : "center"),
									(i[1] = r.test(i[1]) ? i[1] : "center"),
									(t = l.exec(i[0])),
									(e = l.exec(i[1])),
									(w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
									(n[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]);
							}),
							1 === y.length && (y[1] = y[0]),
							"right" === n.at[0]
								? (g.left += d)
								: "center" === n.at[0] && (g.left += d / 2),
							"bottom" === n.at[1]
								? (g.top += p)
								: "center" === n.at[1] && (g.top += p / 2),
							(c = e(w.at, d, p)),
							(g.left += c[0]),
							(g.top += c[1]),
							this.each(function () {
								var a,
									r,
									l = t(this),
									h = l.outerWidth(),
									u = l.outerHeight(),
									m = i(this, "marginLeft"),
									x = i(this, "marginTop"),
									C = h + m + i(this, "marginRight") + b.width,
									k = u + x + i(this, "marginBottom") + b.height,
									T = t.extend({}, g),
									D = e(w.my, l.outerWidth(), l.outerHeight());
								"right" === n.my[0]
									? (T.left -= h)
									: "center" === n.my[0] && (T.left -= h / 2),
									"bottom" === n.my[1]
										? (T.top -= u)
										: "center" === n.my[1] && (T.top -= u / 2),
									(T.left += D[0]),
									(T.top += D[1]),
									(a = { marginLeft: m, marginTop: x }),
									t.each(["left", "top"], function (e, i) {
										t.ui.position[y[e]] &&
											t.ui.position[y[e]][i](T, {
												targetWidth: d,
												targetHeight: p,
												elemWidth: h,
												elemHeight: u,
												collisionPosition: a,
												collisionWidth: C,
												collisionHeight: k,
												offset: [c[0] + D[0], c[1] + D[1]],
												my: n.my,
												at: n.at,
												within: _,
												elem: l,
											});
									}),
									n.using &&
										(r = function (t) {
											var e = f.left - T.left,
												i = e + d - h,
												a = f.top - T.top,
												r = a + p - u,
												c = {
													target: {
														element: v,
														left: f.left,
														top: f.top,
														width: d,
														height: p,
													},
													element: {
														element: l,
														left: T.left,
														top: T.top,
														width: h,
														height: u,
													},
													horizontal:
														0 > i ? "left" : e > 0 ? "right" : "center",
													vertical: 0 > r ? "top" : a > 0 ? "bottom" : "middle",
												};
											h > d && d > o(e + i) && (c.horizontal = "center"),
												u > p && p > o(a + r) && (c.vertical = "middle"),
												(c.important =
													s(o(e), o(i)) > s(o(a), o(r))
														? "horizontal"
														: "vertical"),
												n.using.call(this, t, c);
										}),
									l.offset(t.extend(T, { using: r }));
							})
						);
					}),
					(t.ui.position = {
						fit: {
							left: function (t, e) {
								var i,
									n = e.within,
									o = n.isWindow ? n.scrollLeft : n.offset.left,
									a = n.width,
									r = t.left - e.collisionPosition.marginLeft,
									l = o - r,
									h = r + e.collisionWidth - a - o;
								e.collisionWidth > a
									? l > 0 && 0 >= h
										? ((i = t.left + l + e.collisionWidth - a - o),
										  (t.left += l - i))
										: (t.left =
												h > 0 && 0 >= l
													? o
													: l > h
													? o + a - e.collisionWidth
													: o)
									: l > 0
									? (t.left += l)
									: h > 0
									? (t.left -= h)
									: (t.left = s(t.left - r, t.left));
							},
							top: function (t, e) {
								var i,
									n = e.within,
									o = n.isWindow ? n.scrollTop : n.offset.top,
									a = e.within.height,
									r = t.top - e.collisionPosition.marginTop,
									l = o - r,
									h = r + e.collisionHeight - a - o;
								e.collisionHeight > a
									? l > 0 && 0 >= h
										? ((i = t.top + l + e.collisionHeight - a - o),
										  (t.top += l - i))
										: (t.top =
												h > 0 && 0 >= l
													? o
													: l > h
													? o + a - e.collisionHeight
													: o)
									: l > 0
									? (t.top += l)
									: h > 0
									? (t.top -= h)
									: (t.top = s(t.top - r, t.top));
							},
						},
						flip: {
							left: function (t, e) {
								var i,
									n,
									s = e.within,
									a = s.offset.left + s.scrollLeft,
									r = s.width,
									l = s.isWindow ? s.scrollLeft : s.offset.left,
									h = t.left - e.collisionPosition.marginLeft,
									c = h - l,
									u = h + e.collisionWidth - r - l,
									d =
										"left" === e.my[0]
											? -e.elemWidth
											: "right" === e.my[0]
											? e.elemWidth
											: 0,
									p =
										"left" === e.at[0]
											? e.targetWidth
											: "right" === e.at[0]
											? -e.targetWidth
											: 0,
									f = -2 * e.offset[0];
								0 > c
									? (0 > (i = t.left + d + p + f + e.collisionWidth - r - a) ||
											o(c) > i) &&
									  (t.left += d + p + f)
									: u > 0 &&
									  ((n =
											t.left - e.collisionPosition.marginLeft + d + p + f - l) >
											0 ||
											u > o(n)) &&
									  (t.left += d + p + f);
							},
							top: function (t, e) {
								var i,
									n,
									s = e.within,
									a = s.offset.top + s.scrollTop,
									r = s.height,
									l = s.isWindow ? s.scrollTop : s.offset.top,
									h = t.top - e.collisionPosition.marginTop,
									c = h - l,
									u = h + e.collisionHeight - r - l,
									d =
										"top" === e.my[1]
											? -e.elemHeight
											: "bottom" === e.my[1]
											? e.elemHeight
											: 0,
									p =
										"top" === e.at[1]
											? e.targetHeight
											: "bottom" === e.at[1]
											? -e.targetHeight
											: 0,
									f = -2 * e.offset[1];
								0 > c
									? (0 > (n = t.top + d + p + f + e.collisionHeight - r - a) ||
											o(c) > n) &&
									  (t.top += d + p + f)
									: u > 0 &&
									  ((i =
											t.top - e.collisionPosition.marginTop + d + p + f - l) >
											0 ||
											u > o(i)) &&
									  (t.top += d + p + f);
							},
						},
						flipfit: {
							left: function () {
								t.ui.position.flip.left.apply(this, arguments),
									t.ui.position.fit.left.apply(this, arguments);
							},
							top: function () {
								t.ui.position.flip.top.apply(this, arguments),
									t.ui.position.fit.top.apply(this, arguments);
							},
						},
					});
			})(),
			t.ui.position,
			t.extend(t.expr[":"], {
				data: t.expr.createPseudo
					? t.expr.createPseudo(function (e) {
							return function (i) {
								return !!t.data(i, e);
							};
					  })
					: function (e, i, n) {
							return !!t.data(e, n[3]);
					  },
			}),
			t.fn.extend({
				disableSelection: (function () {
					var t =
						"onselectstart" in document.createElement("div")
							? "selectstart"
							: "mousedown";
					return function () {
						return this.on(t + ".ui-disableSelection", function (t) {
							t.preventDefault();
						});
					};
				})(),
				enableSelection: function () {
					return this.off(".ui-disableSelection");
				},
			});
		var l = "ui-effects-",
			h = "ui-effects-style",
			c = "ui-effects-animated",
			u = t;
		(t.effects = { effect: {} }),
			(function (t, e) {
				function i(t, e, i) {
					var n = c[e.type] || {};
					return null == t
						? i || !e.def
							? null
							: e.def
						: ((t = n.floor ? ~~t : parseFloat(t)),
						  isNaN(t)
								? e.def
								: n.mod
								? (t + n.mod) % n.mod
								: 0 > t
								? 0
								: t > n.max
								? n.max
								: t);
				}
				function n(i) {
					var n = l(),
						s = (n._rgba = []);
					return (
						(i = i.toLowerCase()),
						p(r, function (t, o) {
							var a,
								r = o.re.exec(i),
								l = r && o.parse(r),
								c = o.space || "rgba";
							return l
								? ((a = n[c](l)),
								  (n[h[c].cache] = a[h[c].cache]),
								  (s = n._rgba = a._rgba),
								  !1)
								: e;
						}),
						s.length
							? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n)
							: o[i]
					);
				}
				function s(t, e, i) {
					return 1 > 6 * (i = (i + 1) % 1)
						? t + 6 * (e - t) * i
						: 1 > 2 * i
						? e
						: 2 > 3 * i
						? t + 6 * (e - t) * (2 / 3 - i)
						: t;
				}
				var o,
					a = /^([\-+])=\s*(\d+\.?\d*)/,
					r = [
						{
							re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
							parse: function (t) {
								return [t[1], t[2], t[3], t[4]];
							},
						},
						{
							re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
							parse: function (t) {
								return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
							},
						},
						{
							re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
							parse: function (t) {
								return [
									parseInt(t[1], 16),
									parseInt(t[2], 16),
									parseInt(t[3], 16),
								];
							},
						},
						{
							re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
							parse: function (t) {
								return [
									parseInt(t[1] + t[1], 16),
									parseInt(t[2] + t[2], 16),
									parseInt(t[3] + t[3], 16),
								];
							},
						},
						{
							re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
							space: "hsla",
							parse: function (t) {
								return [t[1], t[2] / 100, t[3] / 100, t[4]];
							},
						},
					],
					l = (t.Color = function (e, i, n, s) {
						return new t.Color.fn.parse(e, i, n, s);
					}),
					h = {
						rgba: {
							props: {
								red: { idx: 0, type: "byte" },
								green: { idx: 1, type: "byte" },
								blue: { idx: 2, type: "byte" },
							},
						},
						hsla: {
							props: {
								hue: { idx: 0, type: "degrees" },
								saturation: { idx: 1, type: "percent" },
								lightness: { idx: 2, type: "percent" },
							},
						},
					},
					c = {
						byte: { floor: !0, max: 255 },
						percent: { max: 1 },
						degrees: { mod: 360, floor: !0 },
					},
					u = (l.support = {}),
					d = t("<p>")[0],
					p = t.each;
				(d.style.cssText = "background-color:rgba(1,1,1,.5)"),
					(u.rgba = d.style.backgroundColor.indexOf("rgba") > -1),
					p(h, function (t, e) {
						(e.cache = "_" + t),
							(e.props.alpha = { idx: 3, type: "percent", def: 1 });
					}),
					(l.fn = t.extend(l.prototype, {
						parse: function (s, a, r, c) {
							if (s === e) return (this._rgba = [null, null, null, null]), this;
							(s.jquery || s.nodeType) && ((s = t(s).css(a)), (a = e));
							var u = this,
								d = t.type(s),
								f = (this._rgba = []);
							return (
								a !== e && ((s = [s, a, r, c]), (d = "array")),
								"string" === d
									? this.parse(n(s) || o._default)
									: "array" === d
									? (p(h.rgba.props, function (t, e) {
											f[e.idx] = i(s[e.idx], e);
									  }),
									  this)
									: "object" === d
									? (p(
											h,
											s instanceof l
												? function (t, e) {
														s[e.cache] && (u[e.cache] = s[e.cache].slice());
												  }
												: function (e, n) {
														var o = n.cache;
														p(n.props, function (t, e) {
															if (!u[o] && n.to) {
																if ("alpha" === t || null == s[t]) return;
																u[o] = n.to(u._rgba);
															}
															u[o][e.idx] = i(s[t], e, !0);
														}),
															u[o] &&
																0 > t.inArray(null, u[o].slice(0, 3)) &&
																((u[o][3] = 1),
																n.from && (u._rgba = n.from(u[o])));
												  }
									  ),
									  this)
									: e
							);
						},
						is: function (t) {
							var i = l(t),
								n = !0,
								s = this;
							return (
								p(h, function (t, o) {
									var a,
										r = i[o.cache];
									return (
										r &&
											((a = s[o.cache] || (o.to && o.to(s._rgba)) || []),
											p(o.props, function (t, i) {
												return null != r[i.idx]
													? (n = r[i.idx] === a[i.idx])
													: e;
											})),
										n
									);
								}),
								n
							);
						},
						_space: function () {
							var t = [],
								e = this;
							return (
								p(h, function (i, n) {
									e[n.cache] && t.push(i);
								}),
								t.pop()
							);
						},
						transition: function (t, e) {
							var n = l(t),
								s = n._space(),
								o = h[s],
								a = 0 === this.alpha() ? l("transparent") : this,
								r = a[o.cache] || o.to(a._rgba),
								u = r.slice();
							return (
								(n = n[o.cache]),
								p(o.props, function (t, s) {
									var o = s.idx,
										a = r[o],
										l = n[o],
										h = c[s.type] || {};
									null !== l &&
										(null === a
											? (u[o] = l)
											: (h.mod &&
													(l - a > h.mod / 2
														? (a += h.mod)
														: a - l > h.mod / 2 && (a -= h.mod)),
											  (u[o] = i((l - a) * e + a, s))));
								}),
								this[s](u)
							);
						},
						blend: function (e) {
							if (1 === this._rgba[3]) return this;
							var i = this._rgba.slice(),
								n = i.pop(),
								s = l(e)._rgba;
							return l(
								t.map(i, function (t, e) {
									return (1 - n) * s[e] + n * t;
								})
							);
						},
						toRgbaString: function () {
							var e = "rgba(",
								i = t.map(this._rgba, function (t, e) {
									return null == t ? (e > 2 ? 1 : 0) : t;
								});
							return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
						},
						toHslaString: function () {
							var e = "hsla(",
								i = t.map(this.hsla(), function (t, e) {
									return (
										null == t && (t = e > 2 ? 1 : 0),
										e && 3 > e && (t = Math.round(100 * t) + "%"),
										t
									);
								});
							return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
						},
						toHexString: function (e) {
							var i = this._rgba.slice(),
								n = i.pop();
							return (
								e && i.push(~~(255 * n)),
								"#" +
									t
										.map(i, function (t) {
											return 1 === (t = (t || 0).toString(16)).length
												? "0" + t
												: t;
										})
										.join("")
							);
						},
						toString: function () {
							return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
						},
					})),
					(l.fn.parse.prototype = l.fn),
					(h.hsla.to = function (t) {
						if (null == t[0] || null == t[1] || null == t[2])
							return [null, null, null, t[3]];
						var e,
							i,
							n = t[0] / 255,
							s = t[1] / 255,
							o = t[2] / 255,
							a = t[3],
							r = Math.max(n, s, o),
							l = Math.min(n, s, o),
							h = r - l,
							c = r + l,
							u = 0.5 * c;
						return (
							(e =
								l === r
									? 0
									: n === r
									? (60 * (s - o)) / h + 360
									: s === r
									? (60 * (o - n)) / h + 120
									: (60 * (n - s)) / h + 240),
							(i = 0 === h ? 0 : 0.5 >= u ? h / c : h / (2 - c)),
							[Math.round(e) % 360, i, u, null == a ? 1 : a]
						);
					}),
					(h.hsla.from = function (t) {
						if (null == t[0] || null == t[1] || null == t[2])
							return [null, null, null, t[3]];
						var e = t[0] / 360,
							i = t[1],
							n = t[2],
							o = t[3],
							a = 0.5 >= n ? n * (1 + i) : n + i - n * i,
							r = 2 * n - a;
						return [
							Math.round(255 * s(r, a, e + 1 / 3)),
							Math.round(255 * s(r, a, e)),
							Math.round(255 * s(r, a, e - 1 / 3)),
							o,
						];
					}),
					p(h, function (n, s) {
						var o = s.props,
							r = s.cache,
							h = s.to,
							c = s.from;
						(l.fn[n] = function (n) {
							if ((h && !this[r] && (this[r] = h(this._rgba)), n === e))
								return this[r].slice();
							var s,
								a = t.type(n),
								u = "array" === a || "object" === a ? n : arguments,
								d = this[r].slice();
							return (
								p(o, function (t, e) {
									var n = u["object" === a ? t : e.idx];
									null == n && (n = d[e.idx]), (d[e.idx] = i(n, e));
								}),
								c ? (((s = l(c(d)))[r] = d), s) : l(d)
							);
						}),
							p(o, function (e, i) {
								l.fn[e] ||
									(l.fn[e] = function (s) {
										var o,
											r = t.type(s),
											l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : n,
											h = this[l](),
											c = h[i.idx];
										return "undefined" === r
											? c
											: ("function" === r &&
													((s = s.call(this, c)), (r = t.type(s))),
											  null == s && i.empty
													? this
													: ("string" === r &&
															(o = a.exec(s)) &&
															(s =
																c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)),
													  (h[i.idx] = s),
													  this[l](h)));
									});
							});
					}),
					(l.hook = function (e) {
						var i = e.split(" ");
						p(i, function (e, i) {
							(t.cssHooks[i] = {
								set: function (e, s) {
									var o,
										a,
										r = "";
									if (
										"transparent" !== s &&
										("string" !== t.type(s) || (o = n(s)))
									) {
										if (((s = l(o || s)), !u.rgba && 1 !== s._rgba[3])) {
											for (
												a = "backgroundColor" === i ? e.parentNode : e;
												("" === r || "transparent" === r) && a && a.style;

											)
												try {
													(r = t.css(a, "backgroundColor")), (a = a.parentNode);
												} catch (t) {}
											s = s.blend(r && "transparent" !== r ? r : "_default");
										}
										s = s.toRgbaString();
									}
									try {
										e.style[i] = s;
									} catch (t) {}
								},
							}),
								(t.fx.step[i] = function (e) {
									e.colorInit ||
										((e.start = l(e.elem, i)),
										(e.end = l(e.end)),
										(e.colorInit = !0)),
										t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
								});
						});
					}),
					l.hook(
						"backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
					),
					(t.cssHooks.borderColor = {
						expand: function (t) {
							var e = {};
							return (
								p(["Top", "Right", "Bottom", "Left"], function (i, n) {
									e["border" + n + "Color"] = t;
								}),
								e
							);
						},
					}),
					(o = t.Color.names =
						{
							aqua: "#00ffff",
							black: "#000000",
							blue: "#0000ff",
							fuchsia: "#ff00ff",
							gray: "#808080",
							green: "#008000",
							lime: "#00ff00",
							maroon: "#800000",
							navy: "#000080",
							olive: "#808000",
							purple: "#800080",
							red: "#ff0000",
							silver: "#c0c0c0",
							teal: "#008080",
							white: "#ffffff",
							yellow: "#ffff00",
							transparent: [null, null, null, 0],
							_default: "#ffffff",
						});
			})(u),
			(function () {
				function e(e) {
					var i,
						n,
						s = e.ownerDocument.defaultView
							? e.ownerDocument.defaultView.getComputedStyle(e, null)
							: e.currentStyle,
						o = {};
					if (s && s.length && s[0] && s[s[0]])
						for (n = s.length; n--; )
							"string" == typeof s[(i = s[n])] && (o[t.camelCase(i)] = s[i]);
					else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
					return o;
				}
				function i(e, i) {
					var n,
						o,
						a = {};
					for (n in i)
						(o = i[n]),
							e[n] !== o &&
								(s[n] ||
									((t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o)));
					return a;
				}
				var n = ["add", "remove", "toggle"],
					s = {
						border: 1,
						borderBottom: 1,
						borderColor: 1,
						borderLeft: 1,
						borderRight: 1,
						borderTop: 1,
						borderWidth: 1,
						margin: 1,
						padding: 1,
					};
				t.each(
					[
						"borderLeftStyle",
						"borderRightStyle",
						"borderBottomStyle",
						"borderTopStyle",
					],
					function (e, i) {
						t.fx.step[i] = function (t) {
							(("none" !== t.end && !t.setAttr) ||
								(1 === t.pos && !t.setAttr)) &&
								(u.style(t.elem, i, t.end), (t.setAttr = !0));
						};
					}
				),
					t.fn.addBack ||
						(t.fn.addBack = function (t) {
							return this.add(
								null == t ? this.prevObject : this.prevObject.filter(t)
							);
						}),
					(t.effects.animateClass = function (s, o, a, r) {
						var l = t.speed(o, a, r);
						return this.queue(function () {
							var o,
								a = t(this),
								r = a.attr("class") || "",
								h = l.children ? a.find("*").addBack() : a;
							(h = h.map(function () {
								return { el: t(this), start: e(this) };
							})),
								(o = function () {
									t.each(n, function (t, e) {
										s[e] && a[e + "Class"](s[e]);
									});
								})(),
								(h = h.map(function () {
									return (
										(this.end = e(this.el[0])),
										(this.diff = i(this.start, this.end)),
										this
									);
								})),
								a.attr("class", r),
								(h = h.map(function () {
									var e = this,
										i = t.Deferred(),
										n = t.extend({}, l, {
											queue: !1,
											complete: function () {
												i.resolve(e);
											},
										});
									return this.el.animate(this.diff, n), i.promise();
								})),
								t.when.apply(t, h.get()).done(function () {
									o(),
										t.each(arguments, function () {
											var e = this.el;
											t.each(this.diff, function (t) {
												e.css(t, "");
											});
										}),
										l.complete.call(a[0]);
								});
						});
					}),
					t.fn.extend({
						addClass: (function (e) {
							return function (i, n, s, o) {
								return n
									? t.effects.animateClass.call(this, { add: i }, n, s, o)
									: e.apply(this, arguments);
							};
						})(t.fn.addClass),
						removeClass: (function (e) {
							return function (i, n, s, o) {
								return arguments.length > 1
									? t.effects.animateClass.call(this, { remove: i }, n, s, o)
									: e.apply(this, arguments);
							};
						})(t.fn.removeClass),
						toggleClass: (function (e) {
							return function (i, n, s, o, a) {
								return "boolean" == typeof n || void 0 === n
									? s
										? t.effects.animateClass.call(
												this,
												n ? { add: i } : { remove: i },
												s,
												o,
												a
										  )
										: e.apply(this, arguments)
									: t.effects.animateClass.call(this, { toggle: i }, n, s, o);
							};
						})(t.fn.toggleClass),
						switchClass: function (e, i, n, s, o) {
							return t.effects.animateClass.call(
								this,
								{ add: i, remove: e },
								n,
								s,
								o
							);
						},
					});
			})(),
			(function () {
				function e(e, i, n, s) {
					return (
						t.isPlainObject(e) && ((i = e), (e = e.effect)),
						(e = { effect: e }),
						null == i && (i = {}),
						t.isFunction(i) && ((s = i), (n = null), (i = {})),
						("number" == typeof i || t.fx.speeds[i]) &&
							((s = n), (n = i), (i = {})),
						t.isFunction(n) && ((s = n), (n = null)),
						i && t.extend(e, i),
						(n = n || i.duration),
						(e.duration = t.fx.off
							? 0
							: "number" == typeof n
							? n
							: n in t.fx.speeds
							? t.fx.speeds[n]
							: t.fx.speeds._default),
						(e.complete = s || i.complete),
						e
					);
				}
				function i(e) {
					return (
						!(e && "number" != typeof e && !t.fx.speeds[e]) ||
						("string" == typeof e && !t.effects.effect[e]) ||
						!!t.isFunction(e) ||
						("object" == typeof e && !e.effect)
					);
				}
				function n(t, e) {
					var i = e.outerWidth(),
						n = e.outerHeight(),
						s =
							/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
								t
							) || ["", 0, i, n, 0];
					return {
						top: parseFloat(s[1]) || 0,
						right: "auto" === s[2] ? i : parseFloat(s[2]),
						bottom: "auto" === s[3] ? n : parseFloat(s[3]),
						left: parseFloat(s[4]) || 0,
					};
				}
				t.expr &&
					t.expr.filters &&
					t.expr.filters.animated &&
					(t.expr.filters.animated = (function (e) {
						return function (i) {
							return !!t(i).data(c) || e(i);
						};
					})(t.expr.filters.animated)),
					!1 !== t.uiBackCompat &&
						t.extend(t.effects, {
							save: function (t, e) {
								for (var i = 0, n = e.length; n > i; i++)
									null !== e[i] && t.data(l + e[i], t[0].style[e[i]]);
							},
							restore: function (t, e) {
								for (var i, n = 0, s = e.length; s > n; n++)
									null !== e[n] && ((i = t.data(l + e[n])), t.css(e[n], i));
							},
							setMode: function (t, e) {
								return (
									"toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
								);
							},
							createWrapper: function (e) {
								if (e.parent().is(".ui-effects-wrapper")) return e.parent();
								var i = {
										width: e.outerWidth(!0),
										height: e.outerHeight(!0),
										float: e.css("float"),
									},
									n = t("<div></div>")
										.addClass("ui-effects-wrapper")
										.css({
											fontSize: "100%",
											background: "transparent",
											border: "none",
											margin: 0,
											padding: 0,
										}),
									s = { width: e.width(), height: e.height() },
									o = document.activeElement;
								try {
									o.id;
								} catch (t) {
									o = document.body;
								}
								return (
									e.wrap(n),
									(e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
									(n = e.parent()),
									"static" === e.css("position")
										? (n.css({ position: "relative" }),
										  e.css({ position: "relative" }))
										: (t.extend(i, {
												position: e.css("position"),
												zIndex: e.css("z-index"),
										  }),
										  t.each(
												["top", "left", "bottom", "right"],
												function (t, n) {
													(i[n] = e.css(n)),
														isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
												}
										  ),
										  e.css({
												position: "relative",
												top: 0,
												left: 0,
												right: "auto",
												bottom: "auto",
										  })),
									e.css(s),
									n.css(i).show()
								);
							},
							removeWrapper: function (e) {
								var i = document.activeElement;
								return (
									e.parent().is(".ui-effects-wrapper") &&
										(e.parent().replaceWith(e),
										(e[0] === i || t.contains(e[0], i)) &&
											t(i).trigger("focus")),
									e
								);
							},
						}),
					t.extend(t.effects, {
						version: "1.12.1",
						define: function (e, i, n) {
							return (
								n || ((n = i), (i = "effect")),
								(t.effects.effect[e] = n),
								(t.effects.effect[e].mode = i),
								n
							);
						},
						scaledDimensions: function (t, e, i) {
							if (0 === e)
								return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
							var n = "horizontal" !== i ? (e || 100) / 100 : 1,
								s = "vertical" !== i ? (e || 100) / 100 : 1;
							return {
								height: t.height() * s,
								width: t.width() * n,
								outerHeight: t.outerHeight() * s,
								outerWidth: t.outerWidth() * n,
							};
						},
						clipToBox: function (t) {
							return {
								width: t.clip.right - t.clip.left,
								height: t.clip.bottom - t.clip.top,
								left: t.clip.left,
								top: t.clip.top,
							};
						},
						unshift: function (t, e, i) {
							var n = t.queue();
							e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))),
								t.dequeue();
						},
						saveStyle: function (t) {
							t.data(h, t[0].style.cssText);
						},
						restoreStyle: function (t) {
							(t[0].style.cssText = t.data(h) || ""), t.removeData(h);
						},
						mode: function (t, e) {
							var i = t.is(":hidden");
							return (
								"toggle" === e && (e = i ? "show" : "hide"),
								(i ? "hide" === e : "show" === e) && (e = "none"),
								e
							);
						},
						getBaseline: function (t, e) {
							var i, n;
							switch (t[0]) {
								case "top":
									i = 0;
									break;
								case "middle":
									i = 0.5;
									break;
								case "bottom":
									i = 1;
									break;
								default:
									i = t[0] / e.height;
							}
							switch (t[1]) {
								case "left":
									n = 0;
									break;
								case "center":
									n = 0.5;
									break;
								case "right":
									n = 1;
									break;
								default:
									n = t[1] / e.width;
							}
							return { x: n, y: i };
						},
						createPlaceholder: function (e) {
							var i,
								n = e.css("position"),
								s = e.position();
							return (
								e
									.css({
										marginTop: e.css("marginTop"),
										marginBottom: e.css("marginBottom"),
										marginLeft: e.css("marginLeft"),
										marginRight: e.css("marginRight"),
									})
									.outerWidth(e.outerWidth())
									.outerHeight(e.outerHeight()),
								/^(static|relative)/.test(n) &&
									((n = "absolute"),
									(i = t("<" + e[0].nodeName + ">")
										.insertAfter(e)
										.css({
											display: /^(inline|ruby)/.test(e.css("display"))
												? "inline-block"
												: "block",
											visibility: "hidden",
											marginTop: e.css("marginTop"),
											marginBottom: e.css("marginBottom"),
											marginLeft: e.css("marginLeft"),
											marginRight: e.css("marginRight"),
											float: e.css("float"),
										})
										.outerWidth(e.outerWidth())
										.outerHeight(e.outerHeight())
										.addClass("ui-effects-placeholder")),
									e.data(l + "placeholder", i)),
								e.css({ position: n, left: s.left, top: s.top }),
								i
							);
						},
						removePlaceholder: function (t) {
							var e = l + "placeholder",
								i = t.data(e);
							i && (i.remove(), t.removeData(e));
						},
						cleanUp: function (e) {
							t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
						},
						setTransition: function (e, i, n, s) {
							return (
								(s = s || {}),
								t.each(i, function (t, i) {
									var o = e.cssUnit(i);
									o[0] > 0 && (s[i] = o[0] * n + o[1]);
								}),
								s
							);
						},
					}),
					t.fn.extend({
						effect: function () {
							function i(e) {
								function i() {
									t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e();
								}
								var a = t(this);
								(n.mode = u.shift()),
									!1 === t.uiBackCompat || o
										? "none" === n.mode
											? (a[h](), i())
											: s.call(a[0], n, function () {
													a.removeData(c),
														t.effects.cleanUp(a),
														"hide" === n.mode && a.hide(),
														i();
											  })
										: (a.is(":hidden") ? "hide" === h : "show" === h)
										? (a[h](), i())
										: s.call(a[0], n, i);
							}
							var n = e.apply(this, arguments),
								s = t.effects.effect[n.effect],
								o = s.mode,
								a = n.queue,
								r = a || "fx",
								l = n.complete,
								h = n.mode,
								u = [],
								d = function (e) {
									var i = t(this),
										n = t.effects.mode(i, h) || o;
									i.data(c, !0),
										u.push(n),
										o &&
											("show" === n || (n === o && "hide" === n)) &&
											i.show(),
										(o && "none" === n) || t.effects.saveStyle(i),
										t.isFunction(e) && e();
								};
							return t.fx.off || !s
								? h
									? this[h](n.duration, l)
									: this.each(function () {
											l && l.call(this);
									  })
								: !1 === a
								? this.each(d).each(i)
								: this.queue(r, d).queue(r, i);
						},
						show: (function (t) {
							return function (n) {
								if (i(n)) return t.apply(this, arguments);
								var s = e.apply(this, arguments);
								return (s.mode = "show"), this.effect.call(this, s);
							};
						})(t.fn.show),
						hide: (function (t) {
							return function (n) {
								if (i(n)) return t.apply(this, arguments);
								var s = e.apply(this, arguments);
								return (s.mode = "hide"), this.effect.call(this, s);
							};
						})(t.fn.hide),
						toggle: (function (t) {
							return function (n) {
								if (i(n) || "boolean" == typeof n)
									return t.apply(this, arguments);
								var s = e.apply(this, arguments);
								return (s.mode = "toggle"), this.effect.call(this, s);
							};
						})(t.fn.toggle),
						cssUnit: function (e) {
							var i = this.css(e),
								n = [];
							return (
								t.each(["em", "px", "%", "pt"], function (t, e) {
									i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
								}),
								n
							);
						},
						cssClip: function (t) {
							return t
								? this.css(
										"clip",
										"rect(" +
											t.top +
											"px " +
											t.right +
											"px " +
											t.bottom +
											"px " +
											t.left +
											"px)"
								  )
								: n(this.css("clip"), this);
						},
						transfer: function (e, i) {
							var n = t(this),
								s = t(e.to),
								o = "fixed" === s.css("position"),
								a = t("body"),
								r = o ? a.scrollTop() : 0,
								l = o ? a.scrollLeft() : 0,
								h = s.offset(),
								c = {
									top: h.top - r,
									left: h.left - l,
									height: s.innerHeight(),
									width: s.innerWidth(),
								},
								u = n.offset(),
								d = t("<div class='ui-effects-transfer'></div>")
									.appendTo("body")
									.addClass(e.className)
									.css({
										top: u.top - r,
										left: u.left - l,
										height: n.innerHeight(),
										width: n.innerWidth(),
										position: o ? "fixed" : "absolute",
									})
									.animate(c, e.duration, e.easing, function () {
										d.remove(), t.isFunction(i) && i();
									});
						},
					}),
					(t.fx.step.clip = function (e) {
						e.clipInit ||
							((e.start = t(e.elem).cssClip()),
							"string" == typeof e.end && (e.end = n(e.end, e.elem)),
							(e.clipInit = !0)),
							t(e.elem).cssClip({
								top: e.pos * (e.end.top - e.start.top) + e.start.top,
								right: e.pos * (e.end.right - e.start.right) + e.start.right,
								bottom:
									e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
								left: e.pos * (e.end.left - e.start.left) + e.start.left,
							});
					});
			})(),
			(function () {
				var e = {};
				t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
					e[i] = function (e) {
						return Math.pow(e, t + 2);
					};
				}),
					t.extend(e, {
						Sine: function (t) {
							return 1 - Math.cos((t * Math.PI) / 2);
						},
						Circ: function (t) {
							return 1 - Math.sqrt(1 - t * t);
						},
						Elastic: function (t) {
							return 0 === t || 1 === t
								? t
								: -Math.pow(2, 8 * (t - 1)) *
										Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
						},
						Back: function (t) {
							return t * t * (3 * t - 2);
						},
						Bounce: function (t) {
							for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
							return (
								1 / Math.pow(4, 3 - i) -
								7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
							);
						},
					}),
					t.each(e, function (e, i) {
						(t.easing["easeIn" + e] = i),
							(t.easing["easeOut" + e] = function (t) {
								return 1 - i(1 - t);
							}),
							(t.easing["easeInOut" + e] = function (t) {
								return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
							});
					});
			})();
		t.effects;
		t.effects.define("blind", "hide", function (e, i) {
			var n = {
					up: ["bottom", "top"],
					vertical: ["bottom", "top"],
					down: ["top", "bottom"],
					left: ["right", "left"],
					horizontal: ["right", "left"],
					right: ["left", "right"],
				},
				s = t(this),
				o = e.direction || "up",
				a = s.cssClip(),
				r = { clip: t.extend({}, a) },
				l = t.effects.createPlaceholder(s);
			(r.clip[n[o][0]] = r.clip[n[o][1]]),
				"show" === e.mode &&
					(s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), (r.clip = a)),
				l && l.animate(t.effects.clipToBox(r), e.duration, e.easing),
				s.animate(r, {
					queue: !1,
					duration: e.duration,
					easing: e.easing,
					complete: i,
				});
		}),
			t.effects.define("bounce", function (e, i) {
				var n,
					s,
					o,
					a = t(this),
					r = e.mode,
					l = "hide" === r,
					h = "show" === r,
					c = e.direction || "up",
					u = e.distance,
					d = e.times || 5,
					p = 2 * d + (h || l ? 1 : 0),
					f = e.duration / p,
					g = e.easing,
					m = "up" === c || "down" === c ? "top" : "left",
					v = "up" === c || "left" === c,
					_ = 0,
					b = a.queue().length;
				for (
					t.effects.createPlaceholder(a),
						o = a.css(m),
						u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3),
						h &&
							(((s = { opacity: 1 })[m] = o),
							a
								.css("opacity", 0)
								.css(m, v ? 2 * -u : 2 * u)
								.animate(s, f, g)),
						l && (u /= Math.pow(2, d - 1)),
						(s = {})[m] = o;
					d > _;
					_++
				)
					((n = {})[m] = (v ? "-=" : "+=") + u),
						a.animate(n, f, g).animate(s, f, g),
						(u = l ? 2 * u : u / 2);
				l &&
					(((n = { opacity: 0 })[m] = (v ? "-=" : "+=") + u),
					a.animate(n, f, g)),
					a.queue(i),
					t.effects.unshift(a, b, p + 1);
			}),
			t.effects.define("clip", "hide", function (e, i) {
				var n,
					s = {},
					o = t(this),
					a = e.direction || "vertical",
					r = "both" === a,
					l = r || "horizontal" === a,
					h = r || "vertical" === a;
				(n = o.cssClip()),
					(s.clip = {
						top: h ? (n.bottom - n.top) / 2 : n.top,
						right: l ? (n.right - n.left) / 2 : n.right,
						bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
						left: l ? (n.right - n.left) / 2 : n.left,
					}),
					t.effects.createPlaceholder(o),
					"show" === e.mode && (o.cssClip(s.clip), (s.clip = n)),
					o.animate(s, {
						queue: !1,
						duration: e.duration,
						easing: e.easing,
						complete: i,
					});
			}),
			t.effects.define("drop", "hide", function (e, i) {
				var n,
					s = t(this),
					o = "show" === e.mode,
					a = e.direction || "left",
					r = "up" === a || "down" === a ? "top" : "left",
					l = "up" === a || "left" === a ? "-=" : "+=",
					h = "+=" === l ? "-=" : "+=",
					c = { opacity: 0 };
				t.effects.createPlaceholder(s),
					(n =
						e.distance ||
						s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2),
					(c[r] = l + n),
					o && (s.css(c), (c[r] = h + n), (c.opacity = 1)),
					s.animate(c, {
						queue: !1,
						duration: e.duration,
						easing: e.easing,
						complete: i,
					});
			}),
			t.effects.define("explode", "hide", function (e, i) {
				function n() {
					v.push(this),
						v.length === c * u &&
							(d.css({ visibility: "visible" }), t(v).remove(), i());
				}
				var s,
					o,
					a,
					r,
					l,
					h,
					c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
					u = c,
					d = t(this),
					p = "show" === e.mode,
					f = d.show().css("visibility", "hidden").offset(),
					g = Math.ceil(d.outerWidth() / u),
					m = Math.ceil(d.outerHeight() / c),
					v = [];
				for (s = 0; c > s; s++)
					for (r = f.top + s * m, h = s - (c - 1) / 2, o = 0; u > o; o++)
						(a = f.left + o * g),
							(l = o - (u - 1) / 2),
							d
								.clone()
								.appendTo("body")
								.wrap("<div></div>")
								.css({
									position: "absolute",
									visibility: "visible",
									left: -o * g,
									top: -s * m,
								})
								.parent()
								.addClass("ui-effects-explode")
								.css({
									position: "absolute",
									overflow: "hidden",
									width: g,
									height: m,
									left: a + (p ? l * g : 0),
									top: r + (p ? h * m : 0),
									opacity: p ? 0 : 1,
								})
								.animate(
									{
										left: a + (p ? 0 : l * g),
										top: r + (p ? 0 : h * m),
										opacity: p ? 1 : 0,
									},
									e.duration || 500,
									e.easing,
									n
								);
			}),
			t.effects.define("fade", "toggle", function (e, i) {
				var n = "show" === e.mode;
				t(this)
					.css("opacity", n ? 0 : 1)
					.animate(
						{ opacity: n ? 1 : 0 },
						{ queue: !1, duration: e.duration, easing: e.easing, complete: i }
					);
			}),
			t.effects.define("fold", "hide", function (e, i) {
				var n = t(this),
					s = e.mode,
					o = "show" === s,
					a = "hide" === s,
					r = e.size || 15,
					l = /([0-9]+)%/.exec(r),
					h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
					c = e.duration / 2,
					u = t.effects.createPlaceholder(n),
					d = n.cssClip(),
					p = { clip: t.extend({}, d) },
					f = { clip: t.extend({}, d) },
					g = [d[h[0]], d[h[1]]],
					m = n.queue().length;
				l && (r = (parseInt(l[1], 10) / 100) * g[a ? 0 : 1]),
					(p.clip[h[0]] = r),
					(f.clip[h[0]] = r),
					(f.clip[h[1]] = 0),
					o &&
						(n.cssClip(f.clip),
						u && u.css(t.effects.clipToBox(f)),
						(f.clip = d)),
					n
						.queue(function (i) {
							u &&
								u
									.animate(t.effects.clipToBox(p), c, e.easing)
									.animate(t.effects.clipToBox(f), c, e.easing),
								i();
						})
						.animate(p, c, e.easing)
						.animate(f, c, e.easing)
						.queue(i),
					t.effects.unshift(n, m, 4);
			}),
			t.effects.define("highlight", "show", function (e, i) {
				var n = t(this),
					s = { backgroundColor: n.css("backgroundColor") };
				"hide" === e.mode && (s.opacity = 0),
					t.effects.saveStyle(n),
					n
						.css({
							backgroundImage: "none",
							backgroundColor: e.color || "#ffff99",
						})
						.animate(s, {
							queue: !1,
							duration: e.duration,
							easing: e.easing,
							complete: i,
						});
			}),
			t.effects.define("size", function (e, i) {
				var n,
					s,
					o,
					a = t(this),
					r = ["fontSize"],
					l = [
						"borderTopWidth",
						"borderBottomWidth",
						"paddingTop",
						"paddingBottom",
					],
					h = [
						"borderLeftWidth",
						"borderRightWidth",
						"paddingLeft",
						"paddingRight",
					],
					c = e.mode,
					u = "effect" !== c,
					d = e.scale || "both",
					p = e.origin || ["middle", "center"],
					f = a.css("position"),
					g = a.position(),
					m = t.effects.scaledDimensions(a),
					v = e.from || m,
					_ = e.to || t.effects.scaledDimensions(a, 0);
				t.effects.createPlaceholder(a),
					"show" === c && ((o = v), (v = _), (_ = o)),
					(s = {
						from: { y: v.height / m.height, x: v.width / m.width },
						to: { y: _.height / m.height, x: _.width / m.width },
					}),
					("box" === d || "both" === d) &&
						(s.from.y !== s.to.y &&
							((v = t.effects.setTransition(a, l, s.from.y, v)),
							(_ = t.effects.setTransition(a, l, s.to.y, _))),
						s.from.x !== s.to.x &&
							((v = t.effects.setTransition(a, h, s.from.x, v)),
							(_ = t.effects.setTransition(a, h, s.to.x, _)))),
					("content" === d || "both" === d) &&
						s.from.y !== s.to.y &&
						((v = t.effects.setTransition(a, r, s.from.y, v)),
						(_ = t.effects.setTransition(a, r, s.to.y, _))),
					p &&
						((n = t.effects.getBaseline(p, m)),
						(v.top = (m.outerHeight - v.outerHeight) * n.y + g.top),
						(v.left = (m.outerWidth - v.outerWidth) * n.x + g.left),
						(_.top = (m.outerHeight - _.outerHeight) * n.y + g.top),
						(_.left = (m.outerWidth - _.outerWidth) * n.x + g.left)),
					a.css(v),
					("content" === d || "both" === d) &&
						((l = l.concat(["marginTop", "marginBottom"]).concat(r)),
						(h = h.concat(["marginLeft", "marginRight"])),
						a.find("*[width]").each(function () {
							var i = t(this),
								n = t.effects.scaledDimensions(i),
								o = {
									height: n.height * s.from.y,
									width: n.width * s.from.x,
									outerHeight: n.outerHeight * s.from.y,
									outerWidth: n.outerWidth * s.from.x,
								},
								a = {
									height: n.height * s.to.y,
									width: n.width * s.to.x,
									outerHeight: n.height * s.to.y,
									outerWidth: n.width * s.to.x,
								};
							s.from.y !== s.to.y &&
								((o = t.effects.setTransition(i, l, s.from.y, o)),
								(a = t.effects.setTransition(i, l, s.to.y, a))),
								s.from.x !== s.to.x &&
									((o = t.effects.setTransition(i, h, s.from.x, o)),
									(a = t.effects.setTransition(i, h, s.to.x, a))),
								u && t.effects.saveStyle(i),
								i.css(o),
								i.animate(a, e.duration, e.easing, function () {
									u && t.effects.restoreStyle(i);
								});
						})),
					a.animate(_, {
						queue: !1,
						duration: e.duration,
						easing: e.easing,
						complete: function () {
							var e = a.offset();
							0 === _.opacity && a.css("opacity", v.opacity),
								u ||
									(a.css("position", "static" === f ? "relative" : f).offset(e),
									t.effects.saveStyle(a)),
								i();
						},
					});
			}),
			t.effects.define("scale", function (e, i) {
				var n = t(this),
					s = e.mode,
					o =
						parseInt(e.percent, 10) ||
						(0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
					a = t.extend(
						!0,
						{
							from: t.effects.scaledDimensions(n),
							to: t.effects.scaledDimensions(n, o, e.direction || "both"),
							origin: e.origin || ["middle", "center"],
						},
						e
					);
				e.fade && ((a.from.opacity = 1), (a.to.opacity = 0)),
					t.effects.effect.size.call(this, a, i);
			}),
			t.effects.define("puff", "hide", function (e, i) {
				var n = t.extend(!0, {}, e, {
					fade: !0,
					percent: parseInt(e.percent, 10) || 150,
				});
				t.effects.effect.scale.call(this, n, i);
			}),
			t.effects.define("pulsate", "show", function (e, i) {
				var n = t(this),
					s = e.mode,
					o = "show" === s,
					a = o || "hide" === s,
					r = 2 * (e.times || 5) + (a ? 1 : 0),
					l = e.duration / r,
					h = 0,
					c = 1,
					u = n.queue().length;
				for (
					(o || !n.is(":visible")) && (n.css("opacity", 0).show(), (h = 1));
					r > c;
					c++
				)
					n.animate({ opacity: h }, l, e.easing), (h = 1 - h);
				n.animate({ opacity: h }, l, e.easing),
					n.queue(i),
					t.effects.unshift(n, u, r + 1);
			}),
			t.effects.define("shake", function (e, i) {
				var n = 1,
					s = t(this),
					o = e.direction || "left",
					a = e.distance || 20,
					r = e.times || 3,
					l = 2 * r + 1,
					h = Math.round(e.duration / l),
					c = "up" === o || "down" === o ? "top" : "left",
					u = "up" === o || "left" === o,
					d = {},
					p = {},
					f = {},
					g = s.queue().length;
				for (
					t.effects.createPlaceholder(s),
						d[c] = (u ? "-=" : "+=") + a,
						p[c] = (u ? "+=" : "-=") + 2 * a,
						f[c] = (u ? "-=" : "+=") + 2 * a,
						s.animate(d, h, e.easing);
					r > n;
					n++
				)
					s.animate(p, h, e.easing).animate(f, h, e.easing);
				s
					.animate(p, h, e.easing)
					.animate(d, h / 2, e.easing)
					.queue(i),
					t.effects.unshift(s, g, l + 1);
			}),
			t.effects.define("slide", "show", function (e, i) {
				var n,
					s,
					o = t(this),
					a = {
						up: ["bottom", "top"],
						down: ["top", "bottom"],
						left: ["right", "left"],
						right: ["left", "right"],
					},
					r = e.mode,
					l = e.direction || "left",
					h = "up" === l || "down" === l ? "top" : "left",
					c = "up" === l || "left" === l,
					u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
					d = {};
				t.effects.createPlaceholder(o),
					(n = o.cssClip()),
					(s = o.position()[h]),
					(d[h] = (c ? -1 : 1) * u + s),
					(d.clip = o.cssClip()),
					(d.clip[a[l][1]] = d.clip[a[l][0]]),
					"show" === r &&
						(o.cssClip(d.clip), o.css(h, d[h]), (d.clip = n), (d[h] = s)),
					o.animate(d, {
						queue: !1,
						duration: e.duration,
						easing: e.easing,
						complete: i,
					});
			}),
			!1 !== t.uiBackCompat &&
				t.effects.define("transfer", function (e, i) {
					t(this).transfer(e, i);
				}),
			(t.ui.focusable = function (e, i) {
				var n,
					s,
					o,
					a,
					r,
					l = e.nodeName.toLowerCase();
				return "area" === l
					? ((s = (n = e.parentNode).name),
					  !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) &&
							(o = t("img[usemap='#" + s + "']")).length > 0 &&
							o.is(":visible"))
					: (/^(input|select|textarea|button|object)$/.test(l)
							? (a = !e.disabled) &&
							  (r = t(e).closest("fieldset")[0]) &&
							  (a = !r.disabled)
							: (a = ("a" === l && e.href) || i),
					  a &&
							t(e).is(":visible") &&
							(function (t) {
								for (var e = t.css("visibility"); "inherit" === e; )
									e = (t = t.parent()).css("visibility");
								return "hidden" !== e;
							})(t(e)));
			}),
			t.extend(t.expr[":"], {
				focusable: function (e) {
					return t.ui.focusable(e, null != t.attr(e, "tabindex"));
				},
			}),
			t.ui.focusable,
			(t.fn.form = function () {
				return "string" == typeof this[0].form
					? this.closest("form")
					: t(this[0].form);
			}),
			(t.ui.formResetMixin = {
				_formResetHandler: function () {
					var e = t(this);
					setTimeout(function () {
						var i = e.data("ui-form-reset-instances");
						t.each(i, function () {
							this.refresh();
						});
					});
				},
				_bindFormResetHandler: function () {
					if (((this.form = this.element.form()), this.form.length)) {
						var t = this.form.data("ui-form-reset-instances") || [];
						t.length ||
							this.form.on("reset.ui-form-reset", this._formResetHandler),
							t.push(this),
							this.form.data("ui-form-reset-instances", t);
					}
				},
				_unbindFormResetHandler: function () {
					if (this.form.length) {
						var e = this.form.data("ui-form-reset-instances");
						e.splice(t.inArray(this, e), 1),
							e.length
								? this.form.data("ui-form-reset-instances", e)
								: this.form
										.removeData("ui-form-reset-instances")
										.off("reset.ui-form-reset");
					}
				},
			}),
			"1.7" === t.fn.jquery.substring(0, 3) &&
				(t.each(["Width", "Height"], function (e, i) {
					function n(e, i, n, o) {
						return (
							t.each(s, function () {
								(i -= parseFloat(t.css(e, "padding" + this)) || 0),
									n &&
										(i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
									o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
							}),
							i
						);
					}
					var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
						o = i.toLowerCase(),
						a = {
							innerWidth: t.fn.innerWidth,
							innerHeight: t.fn.innerHeight,
							outerWidth: t.fn.outerWidth,
							outerHeight: t.fn.outerHeight,
						};
					(t.fn["inner" + i] = function (e) {
						return void 0 === e
							? a["inner" + i].call(this)
							: this.each(function () {
									t(this).css(o, n(this, e) + "px");
							  });
					}),
						(t.fn["outer" + i] = function (e, s) {
							return "number" != typeof e
								? a["outer" + i].call(this, e)
								: this.each(function () {
										t(this).css(o, n(this, e, !0, s) + "px");
								  });
						});
				}),
				(t.fn.addBack = function (t) {
					return this.add(
						null == t ? this.prevObject : this.prevObject.filter(t)
					);
				})),
			(t.ui.keyCode = {
				BACKSPACE: 8,
				COMMA: 188,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				LEFT: 37,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SPACE: 32,
				TAB: 9,
				UP: 38,
			}),
			(t.ui.escapeSelector = (function () {
				var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
				return function (e) {
					return e.replace(t, "\\$1");
				};
			})()),
			(t.fn.labels = function () {
				var e, i, n, s, o;
				return this[0].labels && this[0].labels.length
					? this.pushStack(this[0].labels)
					: ((s = this.eq(0).parents("label")),
					  (n = this.attr("id")) &&
							((o = (e = this.eq(0).parents().last()).add(
								e.length ? e.siblings() : this.siblings()
							)),
							(i = "label[for='" + t.ui.escapeSelector(n) + "']"),
							(s = s.add(o.find(i).addBack(i)))),
					  this.pushStack(s));
			}),
			(t.fn.scrollParent = function (e) {
				var i = this.css("position"),
					n = "absolute" === i,
					s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
					o = this.parents()
						.filter(function () {
							var e = t(this);
							return (
								(!n || "static" !== e.css("position")) &&
								s.test(
									e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
								)
							);
						})
						.eq(0);
				return "fixed" !== i && o.length
					? o
					: t(this[0].ownerDocument || document);
			}),
			t.extend(t.expr[":"], {
				tabbable: function (e) {
					var i = t.attr(e, "tabindex"),
						n = null != i;
					return (!n || i >= 0) && t.ui.focusable(e, n);
				},
			}),
			t.fn.extend({
				uniqueId: (function () {
					var t = 0;
					return function () {
						return this.each(function () {
							this.id || (this.id = "ui-id-" + ++t);
						});
					};
				})(),
				removeUniqueId: function () {
					return this.each(function () {
						/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
					});
				},
			}),
			t.widget("ui.accordion", {
				version: "1.12.1",
				options: {
					active: 0,
					animate: {},
					classes: {
						"ui-accordion-header": "ui-corner-top",
						"ui-accordion-header-collapsed": "ui-corner-all",
						"ui-accordion-content": "ui-corner-bottom",
					},
					collapsible: !1,
					event: "click",
					header: "> li > :first-child, > :not(li):even",
					heightStyle: "auto",
					icons: {
						activeHeader: "ui-icon-triangle-1-s",
						header: "ui-icon-triangle-1-e",
					},
					activate: null,
					beforeActivate: null,
				},
				hideProps: {
					borderTopWidth: "hide",
					borderBottomWidth: "hide",
					paddingTop: "hide",
					paddingBottom: "hide",
					height: "hide",
				},
				showProps: {
					borderTopWidth: "show",
					borderBottomWidth: "show",
					paddingTop: "show",
					paddingBottom: "show",
					height: "show",
				},
				_create: function () {
					var e = this.options;
					(this.prevShow = this.prevHide = t()),
						this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
						this.element.attr("role", "tablist"),
						e.collapsible ||
							(!1 !== e.active && null != e.active) ||
							(e.active = 0),
						this._processPanels(),
						0 > e.active && (e.active += this.headers.length),
						this._refresh();
				},
				_getCreateEventData: function () {
					return {
						header: this.active,
						panel: this.active.length ? this.active.next() : t(),
					};
				},
				_createIcons: function () {
					var e,
						i,
						n = this.options.icons;
					n &&
						((e = t("<span>")),
						this._addClass(
							e,
							"ui-accordion-header-icon",
							"ui-icon " + n.header
						),
						e.prependTo(this.headers),
						(i = this.active.children(".ui-accordion-header-icon")),
						this._removeClass(i, n.header)
							._addClass(i, null, n.activeHeader)
							._addClass(this.headers, "ui-accordion-icons"));
				},
				_destroyIcons: function () {
					this._removeClass(this.headers, "ui-accordion-icons"),
						this.headers.children(".ui-accordion-header-icon").remove();
				},
				_destroy: function () {
					var t;
					this.element.removeAttr("role"),
						this.headers
							.removeAttr(
								"role aria-expanded aria-selected aria-controls tabIndex"
							)
							.removeUniqueId(),
						this._destroyIcons(),
						(t = this.headers
							.next()
							.css("display", "")
							.removeAttr("role aria-hidden aria-labelledby")
							.removeUniqueId()),
						"content" !== this.options.heightStyle && t.css("height", "");
				},
				_setOption: function (t, e) {
					return "active" === t
						? void this._activate(e)
						: ("event" === t &&
								(this.options.event &&
									this._off(this.headers, this.options.event),
								this._setupEvents(e)),
						  this._super(t, e),
						  "collapsible" !== t ||
								e ||
								!1 !== this.options.active ||
								this._activate(0),
						  void (
								"icons" === t &&
								(this._destroyIcons(), e && this._createIcons())
						  ));
				},
				_setOptionDisabled: function (t) {
					this._super(t),
						this.element.attr("aria-disabled", t),
						this._toggleClass(null, "ui-state-disabled", !!t),
						this._toggleClass(
							this.headers.add(this.headers.next()),
							null,
							"ui-state-disabled",
							!!t
						);
				},
				_keydown: function (e) {
					if (!e.altKey && !e.ctrlKey) {
						var i = t.ui.keyCode,
							n = this.headers.length,
							s = this.headers.index(e.target),
							o = !1;
						switch (e.keyCode) {
							case i.RIGHT:
							case i.DOWN:
								o = this.headers[(s + 1) % n];
								break;
							case i.LEFT:
							case i.UP:
								o = this.headers[(s - 1 + n) % n];
								break;
							case i.SPACE:
							case i.ENTER:
								this._eventHandler(e);
								break;
							case i.HOME:
								o = this.headers[0];
								break;
							case i.END:
								o = this.headers[n - 1];
						}
						o &&
							(t(e.target).attr("tabIndex", -1),
							t(o).attr("tabIndex", 0),
							t(o).trigger("focus"),
							e.preventDefault());
					}
				},
				_panelKeyDown: function (e) {
					e.keyCode === t.ui.keyCode.UP &&
						e.ctrlKey &&
						t(e.currentTarget).prev().trigger("focus");
				},
				refresh: function () {
					var e = this.options;
					this._processPanels(),
						(!1 === e.active && !0 === e.collapsible) || !this.headers.length
							? ((e.active = !1), (this.active = t()))
							: !1 === e.active
							? this._activate(0)
							: this.active.length &&
							  !t.contains(this.element[0], this.active[0])
							? this.headers.length ===
							  this.headers.find(".ui-state-disabled").length
								? ((e.active = !1), (this.active = t()))
								: this._activate(Math.max(0, e.active - 1))
							: (e.active = this.headers.index(this.active)),
						this._destroyIcons(),
						this._refresh();
				},
				_processPanels: function () {
					var t = this.headers,
						e = this.panels;
					(this.headers = this.element.find(this.options.header)),
						this._addClass(
							this.headers,
							"ui-accordion-header ui-accordion-header-collapsed",
							"ui-state-default"
						),
						(this.panels = this.headers
							.next()
							.filter(":not(.ui-accordion-content-active)")
							.hide()),
						this._addClass(
							this.panels,
							"ui-accordion-content",
							"ui-helper-reset ui-widget-content"
						),
						e &&
							(this._off(t.not(this.headers)), this._off(e.not(this.panels)));
				},
				_refresh: function () {
					var e,
						i = this.options,
						n = i.heightStyle,
						s = this.element.parent();
					(this.active = this._findActive(i.active)),
						this._addClass(
							this.active,
							"ui-accordion-header-active",
							"ui-state-active"
						)._removeClass(this.active, "ui-accordion-header-collapsed"),
						this._addClass(this.active.next(), "ui-accordion-content-active"),
						this.active.next().show(),
						this.headers
							.attr("role", "tab")
							.each(function () {
								var e = t(this),
									i = e.uniqueId().attr("id"),
									n = e.next(),
									s = n.uniqueId().attr("id");
								e.attr("aria-controls", s), n.attr("aria-labelledby", i);
							})
							.next()
							.attr("role", "tabpanel"),
						this.headers
							.not(this.active)
							.attr({
								"aria-selected": "false",
								"aria-expanded": "false",
								tabIndex: -1,
							})
							.next()
							.attr({ "aria-hidden": "true" })
							.hide(),
						this.active.length
							? this.active
									.attr({
										"aria-selected": "true",
										"aria-expanded": "true",
										tabIndex: 0,
									})
									.next()
									.attr({ "aria-hidden": "false" })
							: this.headers.eq(0).attr("tabIndex", 0),
						this._createIcons(),
						this._setupEvents(i.event),
						"fill" === n
							? ((e = s.height()),
							  this.element.siblings(":visible").each(function () {
									var i = t(this),
										n = i.css("position");
									"absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
							  }),
							  this.headers.each(function () {
									e -= t(this).outerHeight(!0);
							  }),
							  this.headers
									.next()
									.each(function () {
										t(this).height(
											Math.max(0, e - t(this).innerHeight() + t(this).height())
										);
									})
									.css("overflow", "auto"))
							: "auto" === n &&
							  ((e = 0),
							  this.headers
									.next()
									.each(function () {
										var i = t(this).is(":visible");
										i || t(this).show(),
											(e = Math.max(e, t(this).css("height", "").height())),
											i || t(this).hide();
									})
									.height(e));
				},
				_activate: function (e) {
					var i = this._findActive(e)[0];
					i !== this.active[0] &&
						((i = i || this.active[0]),
						this._eventHandler({
							target: i,
							currentTarget: i,
							preventDefault: t.noop,
						}));
				},
				_findActive: function (e) {
					return "number" == typeof e ? this.headers.eq(e) : t();
				},
				_setupEvents: function (e) {
					var i = { keydown: "_keydown" };
					e &&
						t.each(e.split(" "), function (t, e) {
							i[e] = "_eventHandler";
						}),
						this._off(this.headers.add(this.headers.next())),
						this._on(this.headers, i),
						this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
						this._hoverable(this.headers),
						this._focusable(this.headers);
				},
				_eventHandler: function (e) {
					var i,
						n,
						s = this.options,
						o = this.active,
						a = t(e.currentTarget),
						r = a[0] === o[0],
						l = r && s.collapsible,
						h = l ? t() : a.next(),
						c = o.next(),
						u = {
							oldHeader: o,
							oldPanel: c,
							newHeader: l ? t() : a,
							newPanel: h,
						};
					e.preventDefault(),
						(r && !s.collapsible) ||
							!1 === this._trigger("beforeActivate", e, u) ||
							((s.active = !l && this.headers.index(a)),
							(this.active = r ? t() : a),
							this._toggle(u),
							this._removeClass(
								o,
								"ui-accordion-header-active",
								"ui-state-active"
							),
							s.icons &&
								((i = o.children(".ui-accordion-header-icon")),
								this._removeClass(i, null, s.icons.activeHeader)._addClass(
									i,
									null,
									s.icons.header
								)),
							r ||
								(this._removeClass(
									a,
									"ui-accordion-header-collapsed"
								)._addClass(a, "ui-accordion-header-active", "ui-state-active"),
								s.icons &&
									((n = a.children(".ui-accordion-header-icon")),
									this._removeClass(n, null, s.icons.header)._addClass(
										n,
										null,
										s.icons.activeHeader
									)),
								this._addClass(a.next(), "ui-accordion-content-active")));
				},
				_toggle: function (e) {
					var i = e.newPanel,
						n = this.prevShow.length ? this.prevShow : e.oldPanel;
					this.prevShow.add(this.prevHide).stop(!0, !0),
						(this.prevShow = i),
						(this.prevHide = n),
						this.options.animate
							? this._animate(i, n, e)
							: (n.hide(), i.show(), this._toggleComplete(e)),
						n.attr({ "aria-hidden": "true" }),
						n
							.prev()
							.attr({ "aria-selected": "false", "aria-expanded": "false" }),
						i.length && n.length
							? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
							: i.length &&
							  this.headers
									.filter(function () {
										return 0 === parseInt(t(this).attr("tabIndex"), 10);
									})
									.attr("tabIndex", -1),
						i
							.attr("aria-hidden", "false")
							.prev()
							.attr({
								"aria-selected": "true",
								"aria-expanded": "true",
								tabIndex: 0,
							});
				},
				_animate: function (t, e, i) {
					var n,
						s,
						o,
						a = this,
						r = 0,
						l = t.css("box-sizing"),
						h = t.length && (!e.length || t.index() < e.index()),
						c = this.options.animate || {},
						u = (h && c.down) || c,
						d = function () {
							a._toggleComplete(i);
						};
					return (
						"number" == typeof u && (o = u),
						"string" == typeof u && (s = u),
						(s = s || u.easing || c.easing),
						(o = o || u.duration || c.duration),
						e.length
							? t.length
								? ((n = t.show().outerHeight()),
								  e.animate(this.hideProps, {
										duration: o,
										easing: s,
										step: function (t, e) {
											e.now = Math.round(t);
										},
								  }),
								  void t.hide().animate(this.showProps, {
										duration: o,
										easing: s,
										complete: d,
										step: function (t, i) {
											(i.now = Math.round(t)),
												"height" !== i.prop
													? "content-box" === l && (r += i.now)
													: "content" !== a.options.heightStyle &&
													  ((i.now = Math.round(n - e.outerHeight() - r)),
													  (r = 0));
										},
								  }))
								: e.animate(this.hideProps, o, s, d)
							: t.animate(this.showProps, o, s, d)
					);
				},
				_toggleComplete: function (t) {
					var e = t.oldPanel,
						i = e.prev();
					this._removeClass(e, "ui-accordion-content-active"),
						this._removeClass(i, "ui-accordion-header-active")._addClass(
							i,
							"ui-accordion-header-collapsed"
						),
						e.length && (e.parent()[0].className = e.parent()[0].className),
						this._trigger("activate", null, t);
				},
			}),
			(t.ui.safeActiveElement = function (t) {
				var e;
				try {
					e = t.activeElement;
				} catch (i) {
					e = t.body;
				}
				return e || (e = t.body), e.nodeName || (e = t.body), e;
			}),
			t.widget("ui.menu", {
				version: "1.12.1",
				defaultElement: "<ul>",
				delay: 300,
				options: {
					icons: { submenu: "ui-icon-caret-1-e" },
					items: "> *",
					menus: "ul",
					position: { my: "left top", at: "right top" },
					role: "menu",
					blur: null,
					focus: null,
					select: null,
				},
				_create: function () {
					(this.activeMenu = this.element),
						(this.mouseHandled = !1),
						this.element
							.uniqueId()
							.attr({ role: this.options.role, tabIndex: 0 }),
						this._addClass("ui-menu", "ui-widget ui-widget-content"),
						this._on({
							"mousedown .ui-menu-item": function (t) {
								t.preventDefault();
							},
							"click .ui-menu-item": function (e) {
								var i = t(e.target),
									n = t(t.ui.safeActiveElement(this.document[0]));
								!this.mouseHandled &&
									i.not(".ui-state-disabled").length &&
									(this.select(e),
									e.isPropagationStopped() || (this.mouseHandled = !0),
									i.has(".ui-menu").length
										? this.expand(e)
										: !this.element.is(":focus") &&
										  n.closest(".ui-menu").length &&
										  (this.element.trigger("focus", [!0]),
										  this.active &&
												1 === this.active.parents(".ui-menu").length &&
												clearTimeout(this.timer)));
							},
							"mouseenter .ui-menu-item": function (e) {
								if (!this.previousFilter) {
									var i = t(e.target).closest(".ui-menu-item"),
										n = t(e.currentTarget);
									i[0] === n[0] &&
										(this._removeClass(
											n.siblings().children(".ui-state-active"),
											null,
											"ui-state-active"
										),
										this.focus(e, n));
								}
							},
							mouseleave: "collapseAll",
							"mouseleave .ui-menu": "collapseAll",
							focus: function (t, e) {
								var i =
									this.active || this.element.find(this.options.items).eq(0);
								e || this.focus(t, i);
							},
							blur: function (e) {
								this._delay(function () {
									!t.contains(
										this.element[0],
										t.ui.safeActiveElement(this.document[0])
									) && this.collapseAll(e);
								});
							},
							keydown: "_keydown",
						}),
						this.refresh(),
						this._on(this.document, {
							click: function (t) {
								this._closeOnDocumentClick(t) && this.collapseAll(t),
									(this.mouseHandled = !1);
							},
						});
				},
				_destroy: function () {
					var e = this.element
						.find(".ui-menu-item")
						.removeAttr("role aria-disabled")
						.children(".ui-menu-item-wrapper")
						.removeUniqueId()
						.removeAttr("tabIndex role aria-haspopup");
					this.element
						.removeAttr("aria-activedescendant")
						.find(".ui-menu")
						.addBack()
						.removeAttr(
							"role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
						)
						.removeUniqueId()
						.show(),
						e.children().each(function () {
							var e = t(this);
							e.data("ui-menu-submenu-caret") && e.remove();
						});
				},
				_keydown: function (e) {
					var i,
						n,
						s,
						o,
						a = !0;
					switch (e.keyCode) {
						case t.ui.keyCode.PAGE_UP:
							this.previousPage(e);
							break;
						case t.ui.keyCode.PAGE_DOWN:
							this.nextPage(e);
							break;
						case t.ui.keyCode.HOME:
							this._move("first", "first", e);
							break;
						case t.ui.keyCode.END:
							this._move("last", "last", e);
							break;
						case t.ui.keyCode.UP:
							this.previous(e);
							break;
						case t.ui.keyCode.DOWN:
							this.next(e);
							break;
						case t.ui.keyCode.LEFT:
							this.collapse(e);
							break;
						case t.ui.keyCode.RIGHT:
							this.active &&
								!this.active.is(".ui-state-disabled") &&
								this.expand(e);
							break;
						case t.ui.keyCode.ENTER:
						case t.ui.keyCode.SPACE:
							this._activate(e);
							break;
						case t.ui.keyCode.ESCAPE:
							this.collapse(e);
							break;
						default:
							(a = !1),
								(n = this.previousFilter || ""),
								(o = !1),
								(s =
									e.keyCode >= 96 && 105 >= e.keyCode
										? "" + (e.keyCode - 96)
										: String.fromCharCode(e.keyCode)),
								clearTimeout(this.filterTimer),
								s === n ? (o = !0) : (s = n + s),
								(i = this._filterMenuItems(s)),
								(i =
									o && -1 !== i.index(this.active.next())
										? this.active.nextAll(".ui-menu-item")
										: i).length ||
									((s = String.fromCharCode(e.keyCode)),
									(i = this._filterMenuItems(s))),
								i.length
									? (this.focus(e, i),
									  (this.previousFilter = s),
									  (this.filterTimer = this._delay(function () {
											delete this.previousFilter;
									  }, 1e3)))
									: delete this.previousFilter;
					}
					a && e.preventDefault();
				},
				_activate: function (t) {
					this.active &&
						!this.active.is(".ui-state-disabled") &&
						(this.active.children("[aria-haspopup='true']").length
							? this.expand(t)
							: this.select(t));
				},
				refresh: function () {
					var e,
						i,
						n,
						s,
						o = this,
						a = this.options.icons.submenu,
						r = this.element.find(this.options.menus);
					this._toggleClass(
						"ui-menu-icons",
						null,
						!!this.element.find(".ui-icon").length
					),
						(i = r
							.filter(":not(.ui-menu)")
							.hide()
							.attr({
								role: this.options.role,
								"aria-hidden": "true",
								"aria-expanded": "false",
							})
							.each(function () {
								var e = t(this),
									i = e.prev(),
									n = t("<span>").data("ui-menu-submenu-caret", !0);
								o._addClass(n, "ui-menu-icon", "ui-icon " + a),
									i.attr("aria-haspopup", "true").prepend(n),
									e.attr("aria-labelledby", i.attr("id"));
							})),
						this._addClass(
							i,
							"ui-menu",
							"ui-widget ui-widget-content ui-front"
						),
						(e = r.add(this.element).find(this.options.items))
							.not(".ui-menu-item")
							.each(function () {
								var e = t(this);
								o._isDivider(e) &&
									o._addClass(e, "ui-menu-divider", "ui-widget-content");
							}),
						(s = (n = e.not(".ui-menu-item, .ui-menu-divider"))
							.children()
							.not(".ui-menu")
							.uniqueId()
							.attr({ tabIndex: -1, role: this._itemRole() })),
						this._addClass(n, "ui-menu-item")._addClass(
							s,
							"ui-menu-item-wrapper"
						),
						e.filter(".ui-state-disabled").attr("aria-disabled", "true"),
						this.active &&
							!t.contains(this.element[0], this.active[0]) &&
							this.blur();
				},
				_itemRole: function () {
					return { menu: "menuitem", listbox: "option" }[this.options.role];
				},
				_setOption: function (t, e) {
					if ("icons" === t) {
						var i = this.element.find(".ui-menu-icon");
						this._removeClass(i, null, this.options.icons.submenu)._addClass(
							i,
							null,
							e.submenu
						);
					}
					this._super(t, e);
				},
				_setOptionDisabled: function (t) {
					this._super(t),
						this.element.attr("aria-disabled", t + ""),
						this._toggleClass(null, "ui-state-disabled", !!t);
				},
				focus: function (t, e) {
					var i, n, s;
					this.blur(t, t && "focus" === t.type),
						this._scrollIntoView(e),
						(this.active = e.first()),
						(n = this.active.children(".ui-menu-item-wrapper")),
						this._addClass(n, null, "ui-state-active"),
						this.options.role &&
							this.element.attr("aria-activedescendant", n.attr("id")),
						(s = this.active
							.parent()
							.closest(".ui-menu-item")
							.children(".ui-menu-item-wrapper")),
						this._addClass(s, null, "ui-state-active"),
						t && "keydown" === t.type
							? this._close()
							: (this.timer = this._delay(function () {
									this._close();
							  }, this.delay)),
						(i = e.children(".ui-menu")).length &&
							t &&
							/^mouse/.test(t.type) &&
							this._startOpening(i),
						(this.activeMenu = e.parent()),
						this._trigger("focus", t, { item: e });
				},
				_scrollIntoView: function (e) {
					var i, n, s, o, a, r;
					this._hasScroll() &&
						((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
						(n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
						(s = e.offset().top - this.activeMenu.offset().top - i - n),
						(o = this.activeMenu.scrollTop()),
						(a = this.activeMenu.height()),
						(r = e.outerHeight()),
						0 > s
							? this.activeMenu.scrollTop(o + s)
							: s + r > a && this.activeMenu.scrollTop(o + s - a + r));
				},
				blur: function (t, e) {
					e || clearTimeout(this.timer),
						this.active &&
							(this._removeClass(
								this.active.children(".ui-menu-item-wrapper"),
								null,
								"ui-state-active"
							),
							this._trigger("blur", t, { item: this.active }),
							(this.active = null));
				},
				_startOpening: function (t) {
					clearTimeout(this.timer),
						"true" === t.attr("aria-hidden") &&
							(this.timer = this._delay(function () {
								this._close(), this._open(t);
							}, this.delay));
				},
				_open: function (e) {
					var i = t.extend({ of: this.active }, this.options.position);
					clearTimeout(this.timer),
						this.element
							.find(".ui-menu")
							.not(e.parents(".ui-menu"))
							.hide()
							.attr("aria-hidden", "true"),
						e
							.show()
							.removeAttr("aria-hidden")
							.attr("aria-expanded", "true")
							.position(i);
				},
				collapseAll: function (e, i) {
					clearTimeout(this.timer),
						(this.timer = this._delay(function () {
							var n = i
								? this.element
								: t(e && e.target).closest(this.element.find(".ui-menu"));
							n.length || (n = this.element),
								this._close(n),
								this.blur(e),
								this._removeClass(
									n.find(".ui-state-active"),
									null,
									"ui-state-active"
								),
								(this.activeMenu = n);
						}, this.delay));
				},
				_close: function (t) {
					t || (t = this.active ? this.active.parent() : this.element),
						t
							.find(".ui-menu")
							.hide()
							.attr("aria-hidden", "true")
							.attr("aria-expanded", "false");
				},
				_closeOnDocumentClick: function (e) {
					return !t(e.target).closest(".ui-menu").length;
				},
				_isDivider: function (t) {
					return !/[^\-\u2014\u2013\s]/.test(t.text());
				},
				collapse: function (t) {
					var e =
						this.active &&
						this.active.parent().closest(".ui-menu-item", this.element);
					e && e.length && (this._close(), this.focus(t, e));
				},
				expand: function (t) {
					var e =
						this.active &&
						this.active.children(".ui-menu ").find(this.options.items).first();
					e &&
						e.length &&
						(this._open(e.parent()),
						this._delay(function () {
							this.focus(t, e);
						}));
				},
				next: function (t) {
					this._move("next", "first", t);
				},
				previous: function (t) {
					this._move("prev", "last", t);
				},
				isFirstItem: function () {
					return this.active && !this.active.prevAll(".ui-menu-item").length;
				},
				isLastItem: function () {
					return this.active && !this.active.nextAll(".ui-menu-item").length;
				},
				_move: function (t, e, i) {
					var n;
					this.active &&
						(n =
							"first" === t || "last" === t
								? this.active["first" === t ? "prevAll" : "nextAll"](
										".ui-menu-item"
								  ).eq(-1)
								: this.active[t + "All"](".ui-menu-item").eq(0)),
						(n && n.length && this.active) ||
							(n = this.activeMenu.find(this.options.items)[e]()),
						this.focus(i, n);
				},
				nextPage: function (e) {
					var i, n, s;
					return this.active
						? void (
								this.isLastItem() ||
								(this._hasScroll()
									? ((n = this.active.offset().top),
									  (s = this.element.height()),
									  this.active.nextAll(".ui-menu-item").each(function () {
											return 0 > (i = t(this)).offset().top - n - s;
									  }),
									  this.focus(e, i))
									: this.focus(
											e,
											this.activeMenu
												.find(this.options.items)
												[this.active ? "last" : "first"]()
									  ))
						  )
						: void this.next(e);
				},
				previousPage: function (e) {
					var i, n, s;
					return this.active
						? void (
								this.isFirstItem() ||
								(this._hasScroll()
									? ((n = this.active.offset().top),
									  (s = this.element.height()),
									  this.active.prevAll(".ui-menu-item").each(function () {
											return (i = t(this)).offset().top - n + s > 0;
									  }),
									  this.focus(e, i))
									: this.focus(
											e,
											this.activeMenu.find(this.options.items).first()
									  ))
						  )
						: void this.next(e);
				},
				_hasScroll: function () {
					return this.element.outerHeight() < this.element.prop("scrollHeight");
				},
				select: function (e) {
					this.active = this.active || t(e.target).closest(".ui-menu-item");
					var i = { item: this.active };
					this.active.has(".ui-menu").length || this.collapseAll(e, !0),
						this._trigger("select", e, i);
				},
				_filterMenuItems: function (e) {
					var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
						n = RegExp("^" + i, "i");
					return this.activeMenu
						.find(this.options.items)
						.filter(".ui-menu-item")
						.filter(function () {
							return n.test(
								t.trim(t(this).children(".ui-menu-item-wrapper").text())
							);
						});
				},
			}),
			t.widget("ui.autocomplete", {
				version: "1.12.1",
				defaultElement: "<input>",
				options: {
					appendTo: null,
					autoFocus: !1,
					delay: 300,
					minLength: 1,
					position: { my: "left top", at: "left bottom", collision: "none" },
					source: null,
					change: null,
					close: null,
					focus: null,
					open: null,
					response: null,
					search: null,
					select: null,
				},
				requestIndex: 0,
				pending: 0,
				_create: function () {
					var e,
						i,
						n,
						s = this.element[0].nodeName.toLowerCase(),
						o = "textarea" === s,
						a = "input" === s;
					(this.isMultiLine =
						o || (!a && this._isContentEditable(this.element))),
						(this.valueMethod = this.element[o || a ? "val" : "text"]),
						(this.isNewMenu = !0),
						this._addClass("ui-autocomplete-input"),
						this.element.attr("autocomplete", "off"),
						this._on(this.element, {
							keydown: function (s) {
								if (this.element.prop("readOnly"))
									return (e = !0), (n = !0), void (i = !0);
								(e = !1), (n = !1), (i = !1);
								var o = t.ui.keyCode;
								switch (s.keyCode) {
									case o.PAGE_UP:
										(e = !0), this._move("previousPage", s);
										break;
									case o.PAGE_DOWN:
										(e = !0), this._move("nextPage", s);
										break;
									case o.UP:
										(e = !0), this._keyEvent("previous", s);
										break;
									case o.DOWN:
										(e = !0), this._keyEvent("next", s);
										break;
									case o.ENTER:
										this.menu.active &&
											((e = !0), s.preventDefault(), this.menu.select(s));
										break;
									case o.TAB:
										this.menu.active && this.menu.select(s);
										break;
									case o.ESCAPE:
										this.menu.element.is(":visible") &&
											(this.isMultiLine || this._value(this.term),
											this.close(s),
											s.preventDefault());
										break;
									default:
										(i = !0), this._searchTimeout(s);
								}
							},
							keypress: function (n) {
								if (e)
									return (
										(e = !1),
										void (
											(!this.isMultiLine || this.menu.element.is(":visible")) &&
											n.preventDefault()
										)
									);
								if (!i) {
									var s = t.ui.keyCode;
									switch (n.keyCode) {
										case s.PAGE_UP:
											this._move("previousPage", n);
											break;
										case s.PAGE_DOWN:
											this._move("nextPage", n);
											break;
										case s.UP:
											this._keyEvent("previous", n);
											break;
										case s.DOWN:
											this._keyEvent("next", n);
									}
								}
							},
							input: function (t) {
								return n
									? ((n = !1), void t.preventDefault())
									: void this._searchTimeout(t);
							},
							focus: function () {
								(this.selectedItem = null), (this.previous = this._value());
							},
							blur: function (t) {
								return this.cancelBlur
									? void delete this.cancelBlur
									: (clearTimeout(this.searching),
									  this.close(t),
									  void this._change(t));
							},
						}),
						this._initSource(),
						(this.menu = t("<ul>")
							.appendTo(this._appendTo())
							.menu({ role: null })
							.hide()
							.menu("instance")),
						this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
						this._on(this.menu.element, {
							mousedown: function (e) {
								e.preventDefault(),
									(this.cancelBlur = !0),
									this._delay(function () {
										delete this.cancelBlur,
											this.element[0] !==
												t.ui.safeActiveElement(this.document[0]) &&
												this.element.trigger("focus");
									});
							},
							menufocus: function (e, i) {
								var n, s;
								return this.isNewMenu &&
									((this.isNewMenu = !1),
									e.originalEvent && /^mouse/.test(e.originalEvent.type))
									? (this.menu.blur(),
									  void this.document.one("mousemove", function () {
											t(e.target).trigger(e.originalEvent);
									  }))
									: ((s = i.item.data("ui-autocomplete-item")),
									  !1 !== this._trigger("focus", e, { item: s }) &&
											e.originalEvent &&
											/^key/.test(e.originalEvent.type) &&
											this._value(s.value),
									  void (
											(n = i.item.attr("aria-label") || s.value) &&
											t.trim(n).length &&
											(this.liveRegion.children().hide(),
											t("<div>").text(n).appendTo(this.liveRegion))
									  ));
							},
							menuselect: function (e, i) {
								var n = i.item.data("ui-autocomplete-item"),
									s = this.previous;
								this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
									(this.element.trigger("focus"),
									(this.previous = s),
									this._delay(function () {
										(this.previous = s), (this.selectedItem = n);
									})),
									!1 !== this._trigger("select", e, { item: n }) &&
										this._value(n.value),
									(this.term = this._value()),
									this.close(e),
									(this.selectedItem = n);
							},
						}),
						(this.liveRegion = t("<div>", {
							role: "status",
							"aria-live": "assertive",
							"aria-relevant": "additions",
						}).appendTo(this.document[0].body)),
						this._addClass(
							this.liveRegion,
							null,
							"ui-helper-hidden-accessible"
						),
						this._on(this.window, {
							beforeunload: function () {
								this.element.removeAttr("autocomplete");
							},
						});
				},
				_destroy: function () {
					clearTimeout(this.searching),
						this.element.removeAttr("autocomplete"),
						this.menu.element.remove(),
						this.liveRegion.remove();
				},
				_setOption: function (t, e) {
					this._super(t, e),
						"source" === t && this._initSource(),
						"appendTo" === t && this.menu.element.appendTo(this._appendTo()),
						"disabled" === t && e && this.xhr && this.xhr.abort();
				},
				_isEventTargetInWidget: function (e) {
					var i = this.menu.element[0];
					return (
						e.target === this.element[0] ||
						e.target === i ||
						t.contains(i, e.target)
					);
				},
				_closeOnClickOutside: function (t) {
					this._isEventTargetInWidget(t) || this.close();
				},
				_appendTo: function () {
					var e = this.options.appendTo;
					return (
						e &&
							(e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
						(e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
						e.length || (e = this.document[0].body),
						e
					);
				},
				_initSource: function () {
					var e,
						i,
						n = this;
					t.isArray(this.options.source)
						? ((e = this.options.source),
						  (this.source = function (i, n) {
								n(t.ui.autocomplete.filter(e, i.term));
						  }))
						: "string" == typeof this.options.source
						? ((i = this.options.source),
						  (this.source = function (e, s) {
								n.xhr && n.xhr.abort(),
									(n.xhr = t.ajax({
										url: i,
										data: e,
										dataType: "json",
										success: function (t) {
											s(t);
										},
										error: function () {
											s([]);
										},
									}));
						  }))
						: (this.source = this.options.source);
				},
				_searchTimeout: function (t) {
					clearTimeout(this.searching),
						(this.searching = this._delay(function () {
							var e = this.term === this._value(),
								i = this.menu.element.is(":visible"),
								n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
							(!e || (e && !i && !n)) &&
								((this.selectedItem = null), this.search(null, t));
						}, this.options.delay));
				},
				search: function (t, e) {
					return (
						(t = null != t ? t : this._value()),
						(this.term = this._value()),
						t.length < this.options.minLength
							? this.close(e)
							: !1 !== this._trigger("search", e)
							? this._search(t)
							: void 0
					);
				},
				_search: function (t) {
					this.pending++,
						this._addClass("ui-autocomplete-loading"),
						(this.cancelSearch = !1),
						this.source({ term: t }, this._response());
				},
				_response: function () {
					var e = ++this.requestIndex;
					return t.proxy(function (t) {
						e === this.requestIndex && this.__response(t),
							this.pending--,
							this.pending || this._removeClass("ui-autocomplete-loading");
					}, this);
				},
				__response: function (t) {
					t && (t = this._normalize(t)),
						this._trigger("response", null, { content: t }),
						!this.options.disabled && t && t.length && !this.cancelSearch
							? (this._suggest(t), this._trigger("open"))
							: this._close();
				},
				close: function (t) {
					(this.cancelSearch = !0), this._close(t);
				},
				_close: function (t) {
					this._off(this.document, "mousedown"),
						this.menu.element.is(":visible") &&
							(this.menu.element.hide(),
							this.menu.blur(),
							(this.isNewMenu = !0),
							this._trigger("close", t));
				},
				_change: function (t) {
					this.previous !== this._value() &&
						this._trigger("change", t, { item: this.selectedItem });
				},
				_normalize: function (e) {
					return e.length && e[0].label && e[0].value
						? e
						: t.map(e, function (e) {
								return "string" == typeof e
									? { label: e, value: e }
									: t.extend({}, e, {
											label: e.label || e.value,
											value: e.value || e.label,
									  });
						  });
				},
				_suggest: function (e) {
					var i = this.menu.element.empty();
					this._renderMenu(i, e),
						(this.isNewMenu = !0),
						this.menu.refresh(),
						i.show(),
						this._resizeMenu(),
						i.position(t.extend({ of: this.element }, this.options.position)),
						this.options.autoFocus && this.menu.next(),
						this._on(this.document, { mousedown: "_closeOnClickOutside" });
				},
				_resizeMenu: function () {
					var t = this.menu.element;
					t.outerWidth(
						Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
					);
				},
				_renderMenu: function (e, i) {
					var n = this;
					t.each(i, function (t, i) {
						n._renderItemData(e, i);
					});
				},
				_renderItemData: function (t, e) {
					return this._renderItem(t, e).data("ui-autocomplete-item", e);
				},
				_renderItem: function (e, i) {
					return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
				},
				_move: function (t, e) {
					return this.menu.element.is(":visible")
						? (this.menu.isFirstItem() && /^previous/.test(t)) ||
						  (this.menu.isLastItem() && /^next/.test(t))
							? (this.isMultiLine || this._value(this.term),
							  void this.menu.blur())
							: void this.menu[t](e)
						: void this.search(null, e);
				},
				widget: function () {
					return this.menu.element;
				},
				_value: function () {
					return this.valueMethod.apply(this.element, arguments);
				},
				_keyEvent: function (t, e) {
					(!this.isMultiLine || this.menu.element.is(":visible")) &&
						(this._move(t, e), e.preventDefault());
				},
				_isContentEditable: function (t) {
					if (!t.length) return !1;
					var e = t.prop("contentEditable");
					return "inherit" === e
						? this._isContentEditable(t.parent())
						: "true" === e;
				},
			}),
			t.extend(t.ui.autocomplete, {
				escapeRegex: function (t) {
					return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
				},
				filter: function (e, i) {
					var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
					return t.grep(e, function (t) {
						return n.test(t.label || t.value || t);
					});
				},
			}),
			t.widget("ui.autocomplete", t.ui.autocomplete, {
				options: {
					messages: {
						noResults: "No search results.",
						results: function (t) {
							return (
								t +
								(t > 1 ? " results are" : " result is") +
								" available, use up and down arrow keys to navigate."
							);
						},
					},
				},
				__response: function (e) {
					var i;
					this._superApply(arguments),
						this.options.disabled ||
							this.cancelSearch ||
							((i =
								e && e.length
									? this.options.messages.results(e.length)
									: this.options.messages.noResults),
							this.liveRegion.children().hide(),
							t("<div>").text(i).appendTo(this.liveRegion));
				},
			}),
			t.ui.autocomplete;
		var d,
			p = /ui-corner-([a-z]){2,6}/g;
		t.widget("ui.controlgroup", {
			version: "1.12.1",
			defaultElement: "<div>",
			options: {
				direction: "horizontal",
				disabled: null,
				onlyVisible: !0,
				items: {
					button:
						"input[type=button], input[type=submit], input[type=reset], button, a",
					controlgroupLabel: ".ui-controlgroup-label",
					checkboxradio: "input[type='checkbox'], input[type='radio']",
					selectmenu: "select",
					spinner: ".ui-spinner-input",
				},
			},
			_create: function () {
				this._enhance();
			},
			_enhance: function () {
				this.element.attr("role", "toolbar"), this.refresh();
			},
			_destroy: function () {
				this._callChildMethod("destroy"),
					this.childWidgets.removeData("ui-controlgroup-data"),
					this.element.removeAttr("role"),
					this.options.items.controlgroupLabel &&
						this.element
							.find(this.options.items.controlgroupLabel)
							.find(".ui-controlgroup-label-contents")
							.contents()
							.unwrap();
			},
			_initWidgets: function () {
				var e = this,
					i = [];
				t.each(this.options.items, function (n, s) {
					var o,
						a = {};
					return s
						? "controlgroupLabel" === n
							? ((o = e.element.find(s)).each(function () {
									var e = t(this);
									e.children(".ui-controlgroup-label-contents").length ||
										e
											.contents()
											.wrapAll(
												"<span class='ui-controlgroup-label-contents'></span>"
											);
							  }),
							  e._addClass(
									o,
									null,
									"ui-widget ui-widget-content ui-state-default"
							  ),
							  void (i = i.concat(o.get())))
							: void (
									t.fn[n] &&
									((a = e["_" + n + "Options"]
										? e["_" + n + "Options"]("middle")
										: { classes: {} }),
									e.element.find(s).each(function () {
										var s = t(this),
											o = s[n]("instance"),
											r = t.widget.extend({}, a);
										if ("button" !== n || !s.parent(".ui-spinner").length) {
											o || (o = s[n]()[n]("instance")),
												o &&
													(r.classes = e._resolveClassesValues(r.classes, o)),
												s[n](r);
											var l = s[n]("widget");
											t.data(
												l[0],
												"ui-controlgroup-data",
												o || s[n]("instance")
											),
												i.push(l[0]);
										}
									}))
							  )
						: void 0;
				}),
					(this.childWidgets = t(t.unique(i))),
					this._addClass(this.childWidgets, "ui-controlgroup-item");
			},
			_callChildMethod: function (e) {
				this.childWidgets.each(function () {
					var i = t(this).data("ui-controlgroup-data");
					i && i[e] && i[e]();
				});
			},
			_updateCornerClass: function (t, e) {
				var i = this._buildSimpleOptions(e, "label").classes.label;
				this._removeClass(
					t,
					null,
					"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
				),
					this._addClass(t, null, i);
			},
			_buildSimpleOptions: function (t, e) {
				var i = "vertical" === this.options.direction,
					n = { classes: {} };
				return (
					(n.classes[e] = {
						middle: "",
						first: "ui-corner-" + (i ? "top" : "left"),
						last: "ui-corner-" + (i ? "bottom" : "right"),
						only: "ui-corner-all",
					}[t]),
					n
				);
			},
			_spinnerOptions: function (t) {
				var e = this._buildSimpleOptions(t, "ui-spinner");
				return (
					(e.classes["ui-spinner-up"] = ""),
					(e.classes["ui-spinner-down"] = ""),
					e
				);
			},
			_buttonOptions: function (t) {
				return this._buildSimpleOptions(t, "ui-button");
			},
			_checkboxradioOptions: function (t) {
				return this._buildSimpleOptions(t, "ui-checkboxradio-label");
			},
			_selectmenuOptions: function (t) {
				var e = "vertical" === this.options.direction;
				return {
					width: !!e && "auto",
					classes: {
						middle: {
							"ui-selectmenu-button-open": "",
							"ui-selectmenu-button-closed": "",
						},
						first: {
							"ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
							"ui-selectmenu-button-closed":
								"ui-corner-" + (e ? "top" : "left"),
						},
						last: {
							"ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
							"ui-selectmenu-button-closed":
								"ui-corner-" + (e ? "bottom" : "right"),
						},
						only: {
							"ui-selectmenu-button-open": "ui-corner-top",
							"ui-selectmenu-button-closed": "ui-corner-all",
						},
					}[t],
				};
			},
			_resolveClassesValues: function (e, i) {
				var n = {};
				return (
					t.each(e, function (s) {
						var o = i.options.classes[s] || "";
						(o = t.trim(o.replace(p, ""))),
							(n[s] = (o + " " + e[s]).replace(/\s+/g, " "));
					}),
					n
				);
			},
			_setOption: function (t, e) {
				return (
					"direction" === t &&
						this._removeClass("ui-controlgroup-" + this.options.direction),
					this._super(t, e),
					"disabled" === t
						? void this._callChildMethod(e ? "disable" : "enable")
						: void this.refresh()
				);
			},
			refresh: function () {
				var e,
					i = this;
				this._addClass(
					"ui-controlgroup ui-controlgroup-" + this.options.direction
				),
					"horizontal" === this.options.direction &&
						this._addClass(null, "ui-helper-clearfix"),
					this._initWidgets(),
					(e = this.childWidgets),
					this.options.onlyVisible && (e = e.filter(":visible")),
					e.length &&
						(t.each(["first", "last"], function (t, n) {
							var s = e[n]().data("ui-controlgroup-data");
							if (s && i["_" + s.widgetName + "Options"]) {
								var o = i["_" + s.widgetName + "Options"](
									1 === e.length ? "only" : n
								);
								(o.classes = i._resolveClassesValues(o.classes, s)),
									s.element[s.widgetName](o);
							} else i._updateCornerClass(e[n](), n);
						}),
						this._callChildMethod("refresh"));
			},
		}),
			t.widget("ui.checkboxradio", [
				t.ui.formResetMixin,
				{
					version: "1.12.1",
					options: {
						disabled: null,
						label: null,
						icon: !0,
						classes: {
							"ui-checkboxradio-label": "ui-corner-all",
							"ui-checkboxradio-icon": "ui-corner-all",
						},
					},
					_getCreateOptions: function () {
						var e,
							i,
							n = this,
							s = this._super() || {};
						return (
							this._readType(),
							(i = this.element.labels()),
							(this.label = t(i[i.length - 1])),
							this.label.length ||
								t.error("No label found for checkboxradio widget"),
							(this.originalLabel = ""),
							this.label
								.contents()
								.not(this.element[0])
								.each(function () {
									n.originalLabel +=
										3 === this.nodeType ? t(this).text() : this.outerHTML;
								}),
							this.originalLabel && (s.label = this.originalLabel),
							null != (e = this.element[0].disabled) && (s.disabled = e),
							s
						);
					},
					_create: function () {
						var t = this.element[0].checked;
						this._bindFormResetHandler(),
							null == this.options.disabled &&
								(this.options.disabled = this.element[0].disabled),
							this._setOption("disabled", this.options.disabled),
							this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
							this._addClass(
								this.label,
								"ui-checkboxradio-label",
								"ui-button ui-widget"
							),
							"radio" === this.type &&
								this._addClass(this.label, "ui-checkboxradio-radio-label"),
							this.options.label && this.options.label !== this.originalLabel
								? this._updateLabel()
								: this.originalLabel &&
								  (this.options.label = this.originalLabel),
							this._enhance(),
							t &&
								(this._addClass(
									this.label,
									"ui-checkboxradio-checked",
									"ui-state-active"
								),
								this.icon && this._addClass(this.icon, null, "ui-state-hover")),
							this._on({
								change: "_toggleClasses",
								focus: function () {
									this._addClass(
										this.label,
										null,
										"ui-state-focus ui-visual-focus"
									);
								},
								blur: function () {
									this._removeClass(
										this.label,
										null,
										"ui-state-focus ui-visual-focus"
									);
								},
							});
					},
					_readType: function () {
						var e = this.element[0].nodeName.toLowerCase();
						(this.type = this.element[0].type),
							("input" === e && /radio|checkbox/.test(this.type)) ||
								t.error(
									"Can't create checkboxradio on element.nodeName=" +
										e +
										" and element.type=" +
										this.type
								);
					},
					_enhance: function () {
						this._updateIcon(this.element[0].checked);
					},
					widget: function () {
						return this.label;
					},
					_getRadioGroup: function () {
						var e = this.element[0].name,
							i = "input[name='" + t.ui.escapeSelector(e) + "']";
						return e
							? (this.form.length
									? t(this.form[0].elements).filter(i)
									: t(i).filter(function () {
											return 0 === t(this).form().length;
									  })
							  ).not(this.element)
							: t([]);
					},
					_toggleClasses: function () {
						var e = this.element[0].checked;
						this._toggleClass(
							this.label,
							"ui-checkboxradio-checked",
							"ui-state-active",
							e
						),
							this.options.icon &&
								"checkbox" === this.type &&
								this._toggleClass(
									this.icon,
									null,
									"ui-icon-check ui-state-checked",
									e
								)._toggleClass(this.icon, null, "ui-icon-blank", !e),
							"radio" === this.type &&
								this._getRadioGroup().each(function () {
									var e = t(this).checkboxradio("instance");
									e &&
										e._removeClass(
											e.label,
											"ui-checkboxradio-checked",
											"ui-state-active"
										);
								});
					},
					_destroy: function () {
						this._unbindFormResetHandler(),
							this.icon && (this.icon.remove(), this.iconSpace.remove());
					},
					_setOption: function (t, e) {
						return "label" !== t || e
							? (this._super(t, e),
							  "disabled" === t
									? (this._toggleClass(
											this.label,
											null,
											"ui-state-disabled",
											e
									  ),
									  void (this.element[0].disabled = e))
									: void this.refresh())
							: void 0;
					},
					_updateIcon: function (e) {
						var i = "ui-icon ui-icon-background ";
						this.options.icon
							? (this.icon ||
									((this.icon = t("<span>")),
									(this.iconSpace = t("<span> </span>")),
									this._addClass(
										this.iconSpace,
										"ui-checkboxradio-icon-space"
									)),
							  "checkbox" === this.type
									? ((i += e
											? "ui-icon-check ui-state-checked"
											: "ui-icon-blank"),
									  this._removeClass(
											this.icon,
											null,
											e ? "ui-icon-blank" : "ui-icon-check"
									  ))
									: (i += "ui-icon-blank"),
							  this._addClass(this.icon, "ui-checkboxradio-icon", i),
							  e ||
									this._removeClass(
										this.icon,
										null,
										"ui-icon-check ui-state-checked"
									),
							  this.icon.prependTo(this.label).after(this.iconSpace))
							: void 0 !== this.icon &&
							  (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
					},
					_updateLabel: function () {
						var t = this.label.contents().not(this.element[0]);
						this.icon && (t = t.not(this.icon[0])),
							this.iconSpace && (t = t.not(this.iconSpace[0])),
							t.remove(),
							this.label.append(this.options.label);
					},
					refresh: function () {
						var t = this.element[0].checked,
							e = this.element[0].disabled;
						this._updateIcon(t),
							this._toggleClass(
								this.label,
								"ui-checkboxradio-checked",
								"ui-state-active",
								t
							),
							null !== this.options.label && this._updateLabel(),
							e !== this.options.disabled && this._setOptions({ disabled: e });
					},
				},
			]),
			t.ui.checkboxradio,
			t.widget("ui.button", {
				version: "1.12.1",
				defaultElement: "<button>",
				options: {
					classes: { "ui-button": "ui-corner-all" },
					disabled: null,
					icon: null,
					iconPosition: "beginning",
					label: null,
					showLabel: !0,
				},
				_getCreateOptions: function () {
					var t,
						e = this._super() || {};
					return (
						(this.isInput = this.element.is("input")),
						null != (t = this.element[0].disabled) && (e.disabled = t),
						(this.originalLabel = this.isInput
							? this.element.val()
							: this.element.html()),
						this.originalLabel && (e.label = this.originalLabel),
						e
					);
				},
				_create: function () {
					!this.option.showLabel & !this.options.icon &&
						(this.options.showLabel = !0),
						null == this.options.disabled &&
							(this.options.disabled = this.element[0].disabled || !1),
						(this.hasTitle = !!this.element.attr("title")),
						this.options.label &&
							this.options.label !== this.originalLabel &&
							(this.isInput
								? this.element.val(this.options.label)
								: this.element.html(this.options.label)),
						this._addClass("ui-button", "ui-widget"),
						this._setOption("disabled", this.options.disabled),
						this._enhance(),
						this.element.is("a") &&
							this._on({
								keyup: function (e) {
									e.keyCode === t.ui.keyCode.SPACE &&
										(e.preventDefault(),
										this.element[0].click
											? this.element[0].click()
											: this.element.trigger("click"));
								},
							});
				},
				_enhance: function () {
					this.element.is("button") || this.element.attr("role", "button"),
						this.options.icon &&
							(this._updateIcon("icon", this.options.icon),
							this._updateTooltip());
				},
				_updateTooltip: function () {
					(this.title = this.element.attr("title")),
						this.options.showLabel ||
							this.title ||
							this.element.attr("title", this.options.label);
				},
				_updateIcon: function (e, i) {
					var n = "iconPosition" !== e,
						s = n ? this.options.iconPosition : i,
						o = "top" === s || "bottom" === s;
					this.icon
						? n && this._removeClass(this.icon, null, this.options.icon)
						: ((this.icon = t("<span>")),
						  this._addClass(this.icon, "ui-button-icon", "ui-icon"),
						  this.options.showLabel || this._addClass("ui-button-icon-only")),
						n && this._addClass(this.icon, null, i),
						this._attachIcon(s),
						o
							? (this._addClass(this.icon, null, "ui-widget-icon-block"),
							  this.iconSpace && this.iconSpace.remove())
							: (this.iconSpace ||
									((this.iconSpace = t("<span> </span>")),
									this._addClass(this.iconSpace, "ui-button-icon-space")),
							  this._removeClass(this.icon, null, "ui-wiget-icon-block"),
							  this._attachIconSpace(s));
				},
				_destroy: function () {
					this.element.removeAttr("role"),
						this.icon && this.icon.remove(),
						this.iconSpace && this.iconSpace.remove(),
						this.hasTitle || this.element.removeAttr("title");
				},
				_attachIconSpace: function (t) {
					this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](
						this.iconSpace
					);
				},
				_attachIcon: function (t) {
					this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](
						this.icon
					);
				},
				_setOptions: function (t) {
					var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
						i = void 0 === t.icon ? this.options.icon : t.icon;
					e || i || (t.showLabel = !0), this._super(t);
				},
				_setOption: function (t, e) {
					"icon" === t &&
						(e
							? this._updateIcon(t, e)
							: this.icon &&
							  (this.icon.remove(),
							  this.iconSpace && this.iconSpace.remove())),
						"iconPosition" === t && this._updateIcon(t, e),
						"showLabel" === t &&
							(this._toggleClass("ui-button-icon-only", null, !e),
							this._updateTooltip()),
						"label" === t &&
							(this.isInput
								? this.element.val(e)
								: (this.element.html(e),
								  this.icon &&
										(this._attachIcon(this.options.iconPosition),
										this._attachIconSpace(this.options.iconPosition)))),
						this._super(t, e),
						"disabled" === t &&
							(this._toggleClass(null, "ui-state-disabled", e),
							(this.element[0].disabled = e),
							e && this.element.blur());
				},
				refresh: function () {
					var t = this.element.is("input, button")
						? this.element[0].disabled
						: this.element.hasClass("ui-button-disabled");
					t !== this.options.disabled && this._setOptions({ disabled: t }),
						this._updateTooltip();
				},
			}),
			!1 !== t.uiBackCompat &&
				(t.widget("ui.button", t.ui.button, {
					options: { text: !0, icons: { primary: null, secondary: null } },
					_create: function () {
						this.options.showLabel &&
							!this.options.text &&
							(this.options.showLabel = this.options.text),
							!this.options.showLabel &&
								this.options.text &&
								(this.options.text = this.options.showLabel),
							this.options.icon ||
							(!this.options.icons.primary && !this.options.icons.secondary)
								? this.options.icon &&
								  (this.options.icons.primary = this.options.icon)
								: this.options.icons.primary
								? (this.options.icon = this.options.icons.primary)
								: ((this.options.icon = this.options.icons.secondary),
								  (this.options.iconPosition = "end")),
							this._super();
					},
					_setOption: function (t, e) {
						return "text" === t
							? void this._super("showLabel", e)
							: ("showLabel" === t && (this.options.text = e),
							  "icon" === t && (this.options.icons.primary = e),
							  "icons" === t &&
									(e.primary
										? (this._super("icon", e.primary),
										  this._super("iconPosition", "beginning"))
										: e.secondary &&
										  (this._super("icon", e.secondary),
										  this._super("iconPosition", "end"))),
							  void this._superApply(arguments));
					},
				}),
				(t.fn.button = (function (e) {
					return function () {
						return !this.length ||
							(this.length && "INPUT" !== this[0].tagName) ||
							(this.length &&
								"INPUT" === this[0].tagName &&
								"checkbox" !== this.attr("type") &&
								"radio" !== this.attr("type"))
							? e.apply(this, arguments)
							: (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
							  0 === arguments.length
									? this.checkboxradio({ icon: !1 })
									: this.checkboxradio.apply(this, arguments));
					};
				})(t.fn.button)),
				(t.fn.buttonset = function () {
					return (
						t.ui.controlgroup || t.error("Controlgroup widget missing"),
						"option" === arguments[0] &&
						"items" === arguments[1] &&
						arguments[2]
							? this.controlgroup.apply(this, [
									arguments[0],
									"items.button",
									arguments[2],
							  ])
							: "option" === arguments[0] && "items" === arguments[1]
							? this.controlgroup.apply(this, [arguments[0], "items.button"])
							: ("object" == typeof arguments[0] &&
									arguments[0].items &&
									(arguments[0].items = { button: arguments[0].items }),
							  this.controlgroup.apply(this, arguments))
					);
				})),
			t.ui.button,
			t.extend(t.ui, { datepicker: { version: "1.12.1" } }),
			t.extend(e.prototype, {
				markerClassName: "hasDatepicker",
				maxRows: 4,
				_widgetDatepicker: function () {
					return this.dpDiv;
				},
				setDefaults: function (t) {
					return s(this._defaults, t || {}), this;
				},
				_attachDatepicker: function (e, i) {
					var n, s, o;
					(s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n),
						e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
						((o = this._newInst(t(e), s)).settings = t.extend({}, i || {})),
						"input" === n
							? this._connectDatepicker(e, o)
							: s && this._inlineDatepicker(e, o);
				},
				_newInst: function (e, n) {
					return {
						id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
						input: e,
						selectedDay: 0,
						selectedMonth: 0,
						selectedYear: 0,
						drawMonth: 0,
						drawYear: 0,
						inline: n,
						dpDiv: n
							? i(
									t(
										"<div class='" +
											this._inlineClass +
											" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
									)
							  )
							: this.dpDiv,
					};
				},
				_connectDatepicker: function (e, i) {
					var n = t(e);
					(i.append = t([])),
						(i.trigger = t([])),
						n.hasClass(this.markerClassName) ||
							(this._attachments(n, i),
							n
								.addClass(this.markerClassName)
								.on("keydown", this._doKeyDown)
								.on("keypress", this._doKeyPress)
								.on("keyup", this._doKeyUp),
							this._autoSize(i),
							t.data(e, "datepicker", i),
							i.settings.disabled && this._disableDatepicker(e));
				},
				_attachments: function (e, i) {
					var n,
						s,
						o,
						a = this._get(i, "appendText"),
						r = this._get(i, "isRTL");
					i.append && i.append.remove(),
						a &&
							((i.append = t(
								"<span class='" + this._appendClass + "'>" + a + "</span>"
							)),
							e[r ? "before" : "after"](i.append)),
						e.off("focus", this._showDatepicker),
						i.trigger && i.trigger.remove(),
						("focus" === (n = this._get(i, "showOn")) || "both" === n) &&
							e.on("focus", this._showDatepicker),
						("button" === n || "both" === n) &&
							((s = this._get(i, "buttonText")),
							(o = this._get(i, "buttonImage")),
							(i.trigger = t(
								this._get(i, "buttonImageOnly")
									? t("<img/>")
											.addClass(this._triggerClass)
											.attr({ src: o, alt: s, title: s })
									: t("<button type='button'></button>")
											.addClass(this._triggerClass)
											.html(
												o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s
											)
							)),
							e[r ? "before" : "after"](i.trigger),
							i.trigger.on("click", function () {
								return (
									t.datepicker._datepickerShowing &&
									t.datepicker._lastInput === e[0]
										? t.datepicker._hideDatepicker()
										: t.datepicker._datepickerShowing &&
										  t.datepicker._lastInput !== e[0]
										? (t.datepicker._hideDatepicker(),
										  t.datepicker._showDatepicker(e[0]))
										: t.datepicker._showDatepicker(e[0]),
									!1
								);
							}));
				},
				_autoSize: function (t) {
					if (this._get(t, "autoSize") && !t.inline) {
						var e,
							i,
							n,
							s,
							o = new Date(2009, 11, 20),
							a = this._get(t, "dateFormat");
						a.match(/[DM]/) &&
							((e = function (t) {
								for (i = 0, n = 0, s = 0; t.length > s; s++)
									t[s].length > i && ((i = t[s].length), (n = s));
								return n;
							}),
							o.setMonth(
								e(
									this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort")
								)
							),
							o.setDate(
								e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
									20 -
									o.getDay()
							)),
							t.input.attr("size", this._formatDate(t, o).length);
					}
				},
				_inlineDatepicker: function (e, i) {
					var n = t(e);
					n.hasClass(this.markerClassName) ||
						(n.addClass(this.markerClassName).append(i.dpDiv),
						t.data(e, "datepicker", i),
						this._setDate(i, this._getDefaultDate(i), !0),
						this._updateDatepicker(i),
						this._updateAlternate(i),
						i.settings.disabled && this._disableDatepicker(e),
						i.dpDiv.css("display", "block"));
				},
				_dialogDatepicker: function (e, i, n, o, a) {
					var r,
						l,
						h,
						c,
						u,
						d = this._dialogInst;
					return (
						d ||
							((this.uuid += 1),
							(r = "dp" + this.uuid),
							(this._dialogInput = t(
								"<input type='text' id='" +
									r +
									"' style='position: absolute; top: -100px; width: 0px;'/>"
							)),
							this._dialogInput.on("keydown", this._doKeyDown),
							t("body").append(this._dialogInput),
							((d = this._dialogInst =
								this._newInst(this._dialogInput, !1)).settings = {}),
							t.data(this._dialogInput[0], "datepicker", d)),
						s(d.settings, o || {}),
						(i = i && i.constructor === Date ? this._formatDate(d, i) : i),
						this._dialogInput.val(i),
						(this._pos = a ? (a.length ? a : [a.pageX, a.pageY]) : null),
						this._pos ||
							((l = document.documentElement.clientWidth),
							(h = document.documentElement.clientHeight),
							(c =
								document.documentElement.scrollLeft ||
								document.body.scrollLeft),
							(u =
								document.documentElement.scrollTop || document.body.scrollTop),
							(this._pos = [l / 2 - 100 + c, h / 2 - 150 + u])),
						this._dialogInput
							.css("left", this._pos[0] + 20 + "px")
							.css("top", this._pos[1] + "px"),
						(d.settings.onSelect = n),
						(this._inDialog = !0),
						this.dpDiv.addClass(this._dialogClass),
						this._showDatepicker(this._dialogInput[0]),
						t.blockUI && t.blockUI(this.dpDiv),
						t.data(this._dialogInput[0], "datepicker", d),
						this
					);
				},
				_destroyDatepicker: function (e) {
					var i,
						n = t(e),
						s = t.data(e, "datepicker");
					n.hasClass(this.markerClassName) &&
						((i = e.nodeName.toLowerCase()),
						t.removeData(e, "datepicker"),
						"input" === i
							? (s.append.remove(),
							  s.trigger.remove(),
							  n
									.removeClass(this.markerClassName)
									.off("focus", this._showDatepicker)
									.off("keydown", this._doKeyDown)
									.off("keypress", this._doKeyPress)
									.off("keyup", this._doKeyUp))
							: ("div" === i || "span" === i) &&
							  n.removeClass(this.markerClassName).empty(),
						d === s && (d = null));
				},
				_enableDatepicker: function (e) {
					var i,
						n,
						s = t(e),
						o = t.data(e, "datepicker");
					s.hasClass(this.markerClassName) &&
						("input" === (i = e.nodeName.toLowerCase())
							? ((e.disabled = !1),
							  o.trigger
									.filter("button")
									.each(function () {
										this.disabled = !1;
									})
									.end()
									.filter("img")
									.css({ opacity: "1.0", cursor: "" }))
							: ("div" === i || "span" === i) &&
							  ((n = s.children("." + this._inlineClass))
									.children()
									.removeClass("ui-state-disabled"),
							  n
									.find("select.ui-datepicker-month, select.ui-datepicker-year")
									.prop("disabled", !1)),
						(this._disabledInputs = t.map(this._disabledInputs, function (t) {
							return t === e ? null : t;
						})));
				},
				_disableDatepicker: function (e) {
					var i,
						n,
						s = t(e),
						o = t.data(e, "datepicker");
					s.hasClass(this.markerClassName) &&
						("input" === (i = e.nodeName.toLowerCase())
							? ((e.disabled = !0),
							  o.trigger
									.filter("button")
									.each(function () {
										this.disabled = !0;
									})
									.end()
									.filter("img")
									.css({ opacity: "0.5", cursor: "default" }))
							: ("div" === i || "span" === i) &&
							  ((n = s.children("." + this._inlineClass))
									.children()
									.addClass("ui-state-disabled"),
							  n
									.find("select.ui-datepicker-month, select.ui-datepicker-year")
									.prop("disabled", !0)),
						(this._disabledInputs = t.map(this._disabledInputs, function (t) {
							return t === e ? null : t;
						})),
						(this._disabledInputs[this._disabledInputs.length] = e));
				},
				_isDisabledDatepicker: function (t) {
					if (!t) return !1;
					for (var e = 0; this._disabledInputs.length > e; e++)
						if (this._disabledInputs[e] === t) return !0;
					return !1;
				},
				_getInst: function (e) {
					try {
						return t.data(e, "datepicker");
					} catch (t) {
						throw "Missing instance data for this datepicker";
					}
				},
				_optionDatepicker: function (e, i, n) {
					var o,
						a,
						r,
						l,
						h = this._getInst(e);
					return 2 === arguments.length && "string" == typeof i
						? "defaults" === i
							? t.extend({}, t.datepicker._defaults)
							: h
							? "all" === i
								? t.extend({}, h.settings)
								: this._get(h, i)
							: null
						: ((o = i || {}),
						  "string" == typeof i && ((o = {})[i] = n),
						  void (
								h &&
								(this._curInst === h && this._hideDatepicker(),
								(a = this._getDateDatepicker(e, !0)),
								(r = this._getMinMaxDate(h, "min")),
								(l = this._getMinMaxDate(h, "max")),
								s(h.settings, o),
								null !== r &&
									void 0 !== o.dateFormat &&
									void 0 === o.minDate &&
									(h.settings.minDate = this._formatDate(h, r)),
								null !== l &&
									void 0 !== o.dateFormat &&
									void 0 === o.maxDate &&
									(h.settings.maxDate = this._formatDate(h, l)),
								"disabled" in o &&
									(o.disabled
										? this._disableDatepicker(e)
										: this._enableDatepicker(e)),
								this._attachments(t(e), h),
								this._autoSize(h),
								this._setDate(h, a),
								this._updateAlternate(h),
								this._updateDatepicker(h))
						  ));
				},
				_changeDatepicker: function (t, e, i) {
					this._optionDatepicker(t, e, i);
				},
				_refreshDatepicker: function (t) {
					var e = this._getInst(t);
					e && this._updateDatepicker(e);
				},
				_setDateDatepicker: function (t, e) {
					var i = this._getInst(t);
					i &&
						(this._setDate(i, e),
						this._updateDatepicker(i),
						this._updateAlternate(i));
				},
				_getDateDatepicker: function (t, e) {
					var i = this._getInst(t);
					return (
						i && !i.inline && this._setDateFromField(i, e),
						i ? this._getDate(i) : null
					);
				},
				_doKeyDown: function (e) {
					var i,
						n,
						s,
						o = t.datepicker._getInst(e.target),
						a = !0,
						r = o.dpDiv.is(".ui-datepicker-rtl");
					if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
						switch (e.keyCode) {
							case 9:
								t.datepicker._hideDatepicker(), (a = !1);
								break;
							case 13:
								return (
									(s = t(
										"td." +
											t.datepicker._dayOverClass +
											":not(." +
											t.datepicker._currentClass +
											")",
										o.dpDiv
									))[0] &&
										t.datepicker._selectDay(
											e.target,
											o.selectedMonth,
											o.selectedYear,
											s[0]
										),
									(i = t.datepicker._get(o, "onSelect"))
										? ((n = t.datepicker._formatDate(o)),
										  i.apply(o.input ? o.input[0] : null, [n, o]))
										: t.datepicker._hideDatepicker(),
									!1
								);
							case 27:
								t.datepicker._hideDatepicker();
								break;
							case 33:
								t.datepicker._adjustDate(
									e.target,
									e.ctrlKey
										? -t.datepicker._get(o, "stepBigMonths")
										: -t.datepicker._get(o, "stepMonths"),
									"M"
								);
								break;
							case 34:
								t.datepicker._adjustDate(
									e.target,
									e.ctrlKey
										? +t.datepicker._get(o, "stepBigMonths")
										: +t.datepicker._get(o, "stepMonths"),
									"M"
								);
								break;
							case 35:
								(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
									(a = e.ctrlKey || e.metaKey);
								break;
							case 36:
								(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
									(a = e.ctrlKey || e.metaKey);
								break;
							case 37:
								(e.ctrlKey || e.metaKey) &&
									t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
									(a = e.ctrlKey || e.metaKey),
									e.originalEvent.altKey &&
										t.datepicker._adjustDate(
											e.target,
											e.ctrlKey
												? -t.datepicker._get(o, "stepBigMonths")
												: -t.datepicker._get(o, "stepMonths"),
											"M"
										);
								break;
							case 38:
								(e.ctrlKey || e.metaKey) &&
									t.datepicker._adjustDate(e.target, -7, "D"),
									(a = e.ctrlKey || e.metaKey);
								break;
							case 39:
								(e.ctrlKey || e.metaKey) &&
									t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
									(a = e.ctrlKey || e.metaKey),
									e.originalEvent.altKey &&
										t.datepicker._adjustDate(
											e.target,
											e.ctrlKey
												? +t.datepicker._get(o, "stepBigMonths")
												: +t.datepicker._get(o, "stepMonths"),
											"M"
										);
								break;
							case 40:
								(e.ctrlKey || e.metaKey) &&
									t.datepicker._adjustDate(e.target, 7, "D"),
									(a = e.ctrlKey || e.metaKey);
								break;
							default:
								a = !1;
						}
					else
						36 === e.keyCode && e.ctrlKey
							? t.datepicker._showDatepicker(this)
							: (a = !1);
					a && (e.preventDefault(), e.stopPropagation());
				},
				_doKeyPress: function (e) {
					var i,
						n,
						s = t.datepicker._getInst(e.target);
					return t.datepicker._get(s, "constrainInput")
						? ((i = t.datepicker._possibleChars(
								t.datepicker._get(s, "dateFormat")
						  )),
						  (n = String.fromCharCode(
								null == e.charCode ? e.keyCode : e.charCode
						  )),
						  e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1)
						: void 0;
				},
				_doKeyUp: function (e) {
					var i = t.datepicker._getInst(e.target);
					if (i.input.val() !== i.lastVal)
						try {
							t.datepicker.parseDate(
								t.datepicker._get(i, "dateFormat"),
								i.input ? i.input.val() : null,
								t.datepicker._getFormatConfig(i)
							) &&
								(t.datepicker._setDateFromField(i),
								t.datepicker._updateAlternate(i),
								t.datepicker._updateDatepicker(i));
						} catch (t) {}
					return !0;
				},
				_showDatepicker: function (e) {
					var i, n, o, a, r, l, h;
					("input" !== (e = e.target || e).nodeName.toLowerCase() &&
						(e = t("input", e.parentNode)[0]),
					t.datepicker._isDisabledDatepicker(e) ||
						t.datepicker._lastInput === e) ||
						((i = t.datepicker._getInst(e)),
						t.datepicker._curInst &&
							t.datepicker._curInst !== i &&
							(t.datepicker._curInst.dpDiv.stop(!0, !0),
							i &&
								t.datepicker._datepickerShowing &&
								t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
						!1 !==
							(o = (n = t.datepicker._get(i, "beforeShow"))
								? n.apply(e, [e, i])
								: {}) &&
							(s(i.settings, o),
							(i.lastVal = null),
							(t.datepicker._lastInput = e),
							t.datepicker._setDateFromField(i),
							t.datepicker._inDialog && (e.value = ""),
							t.datepicker._pos ||
								((t.datepicker._pos = t.datepicker._findPos(e)),
								(t.datepicker._pos[1] += e.offsetHeight)),
							(a = !1),
							t(e)
								.parents()
								.each(function () {
									return !(a |= "fixed" === t(this).css("position"));
								}),
							(r = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
							(t.datepicker._pos = null),
							i.dpDiv.empty(),
							i.dpDiv.css({
								position: "absolute",
								display: "block",
								top: "-1000px",
							}),
							t.datepicker._updateDatepicker(i),
							(r = t.datepicker._checkOffset(i, r, a)),
							i.dpDiv.css({
								position:
									t.datepicker._inDialog && t.blockUI
										? "static"
										: a
										? "fixed"
										: "absolute",
								display: "none",
								left: r.left + "px",
								top: r.top + "px",
							}),
							i.inline ||
								((l = t.datepicker._get(i, "showAnim")),
								(h = t.datepicker._get(i, "duration")),
								i.dpDiv.css(
									"z-index",
									(function (t) {
										for (var e, i; t.length && t[0] !== document; ) {
											if (
												("absolute" === (e = t.css("position")) ||
													"relative" === e ||
													"fixed" === e) &&
												((i = parseInt(t.css("zIndex"), 10)),
												!isNaN(i) && 0 !== i)
											)
												return i;
											t = t.parent();
										}
										return 0;
									})(t(e)) + 1
								),
								(t.datepicker._datepickerShowing = !0),
								t.effects && t.effects.effect[l]
									? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h)
									: i.dpDiv[l || "show"](l ? h : null),
								t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
								(t.datepicker._curInst = i))));
				},
				_updateDatepicker: function (e) {
					(this.maxRows = 4),
						(d = e),
						e.dpDiv.empty().append(this._generateHTML(e)),
						this._attachHandlers(e);
					var i,
						s = this._getNumberOfMonths(e),
						o = s[1],
						a = e.dpDiv.find("." + this._dayOverClass + " a");
					a.length > 0 && n.apply(a.get(0)),
						e.dpDiv
							.removeClass(
								"ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
							)
							.width(""),
						o > 1 &&
							e.dpDiv
								.addClass("ui-datepicker-multi-" + o)
								.css("width", 17 * o + "em"),
						e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"](
							"ui-datepicker-multi"
						),
						e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
							"ui-datepicker-rtl"
						),
						e === t.datepicker._curInst &&
							t.datepicker._datepickerShowing &&
							t.datepicker._shouldFocusInput(e) &&
							e.input.trigger("focus"),
						e.yearshtml &&
							((i = e.yearshtml),
							setTimeout(function () {
								i === e.yearshtml &&
									e.yearshtml &&
									e.dpDiv
										.find("select.ui-datepicker-year:first")
										.replaceWith(e.yearshtml),
									(i = e.yearshtml = null);
							}, 0));
				},
				_shouldFocusInput: function (t) {
					return (
						t.input &&
						t.input.is(":visible") &&
						!t.input.is(":disabled") &&
						!t.input.is(":focus")
					);
				},
				_checkOffset: function (e, i, n) {
					var s = e.dpDiv.outerWidth(),
						o = e.dpDiv.outerHeight(),
						a = e.input ? e.input.outerWidth() : 0,
						r = e.input ? e.input.outerHeight() : 0,
						l =
							document.documentElement.clientWidth +
							(n ? 0 : t(document).scrollLeft()),
						h =
							document.documentElement.clientHeight +
							(n ? 0 : t(document).scrollTop());
					return (
						(i.left -= this._get(e, "isRTL") ? s - a : 0),
						(i.left -=
							n && i.left === e.input.offset().left
								? t(document).scrollLeft()
								: 0),
						(i.top -=
							n && i.top === e.input.offset().top + r
								? t(document).scrollTop()
								: 0),
						(i.left -= Math.min(
							i.left,
							i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0
						)),
						(i.top -= Math.min(
							i.top,
							i.top + o > h && h > o ? Math.abs(o + r) : 0
						)),
						i
					);
				},
				_findPos: function (e) {
					for (
						var i, n = this._getInst(e), s = this._get(n, "isRTL");
						e &&
						("hidden" === e.type ||
							1 !== e.nodeType ||
							t.expr.filters.hidden(e));

					)
						e = e[s ? "previousSibling" : "nextSibling"];
					return [(i = t(e).offset()).left, i.top];
				},
				_hideDatepicker: function (e) {
					var i,
						n,
						s,
						o,
						a = this._curInst;
					!a ||
						(e && a !== t.data(e, "datepicker")) ||
						(this._datepickerShowing &&
							((i = this._get(a, "showAnim")),
							(n = this._get(a, "duration")),
							(s = function () {
								t.datepicker._tidyDialog(a);
							}),
							t.effects && (t.effects.effect[i] || t.effects[i])
								? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s)
								: a.dpDiv[
										"slideDown" === i
											? "slideUp"
											: "fadeIn" === i
											? "fadeOut"
											: "hide"
								  ](i ? n : null, s),
							i || s(),
							(this._datepickerShowing = !1),
							(o = this._get(a, "onClose")) &&
								o.apply(a.input ? a.input[0] : null, [
									a.input ? a.input.val() : "",
									a,
								]),
							(this._lastInput = null),
							this._inDialog &&
								(this._dialogInput.css({
									position: "absolute",
									left: "0",
									top: "-100px",
								}),
								t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
							(this._inDialog = !1)));
				},
				_tidyDialog: function (t) {
					t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
				},
				_checkExternalClick: function (e) {
					if (t.datepicker._curInst) {
						var i = t(e.target),
							n = t.datepicker._getInst(i[0]);
						((i[0].id !== t.datepicker._mainDivId &&
							0 === i.parents("#" + t.datepicker._mainDivId).length &&
							!i.hasClass(t.datepicker.markerClassName) &&
							!i.closest("." + t.datepicker._triggerClass).length &&
							t.datepicker._datepickerShowing &&
							(!t.datepicker._inDialog || !t.blockUI)) ||
							(i.hasClass(t.datepicker.markerClassName) &&
								t.datepicker._curInst !== n)) &&
							t.datepicker._hideDatepicker();
					}
				},
				_adjustDate: function (e, i, n) {
					var s = t(e),
						o = this._getInst(s[0]);
					this._isDisabledDatepicker(s[0]) ||
						(this._adjustInstDate(
							o,
							i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0),
							n
						),
						this._updateDatepicker(o));
				},
				_gotoToday: function (e) {
					var i,
						n = t(e),
						s = this._getInst(n[0]);
					this._get(s, "gotoCurrent") && s.currentDay
						? ((s.selectedDay = s.currentDay),
						  (s.drawMonth = s.selectedMonth = s.currentMonth),
						  (s.drawYear = s.selectedYear = s.currentYear))
						: ((i = new Date()),
						  (s.selectedDay = i.getDate()),
						  (s.drawMonth = s.selectedMonth = i.getMonth()),
						  (s.drawYear = s.selectedYear = i.getFullYear())),
						this._notifyChange(s),
						this._adjustDate(n);
				},
				_selectMonthYear: function (e, i, n) {
					var s = t(e),
						o = this._getInst(s[0]);
					(o["selected" + ("M" === n ? "Month" : "Year")] = o[
						"draw" + ("M" === n ? "Month" : "Year")
					] =
						parseInt(i.options[i.selectedIndex].value, 10)),
						this._notifyChange(o),
						this._adjustDate(s);
				},
				_selectDay: function (e, i, n, s) {
					var o,
						a = t(e);
					t(s).hasClass(this._unselectableClass) ||
						this._isDisabledDatepicker(a[0]) ||
						(((o = this._getInst(a[0])).selectedDay = o.currentDay =
							t("a", s).html()),
						(o.selectedMonth = o.currentMonth = i),
						(o.selectedYear = o.currentYear = n),
						this._selectDate(
							e,
							this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
						));
				},
				_clearDate: function (e) {
					var i = t(e);
					this._selectDate(i, "");
				},
				_selectDate: function (e, i) {
					var n,
						s = t(e),
						o = this._getInst(s[0]);
					(i = null != i ? i : this._formatDate(o)),
						o.input && o.input.val(i),
						this._updateAlternate(o),
						(n = this._get(o, "onSelect"))
							? n.apply(o.input ? o.input[0] : null, [i, o])
							: o.input && o.input.trigger("change"),
						o.inline
							? this._updateDatepicker(o)
							: (this._hideDatepicker(),
							  (this._lastInput = o.input[0]),
							  "object" != typeof o.input[0] && o.input.trigger("focus"),
							  (this._lastInput = null));
				},
				_updateAlternate: function (e) {
					var i,
						n,
						s,
						o = this._get(e, "altField");
					o &&
						((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
						(n = this._getDate(e)),
						(s = this.formatDate(i, n, this._getFormatConfig(e))),
						t(o).val(s));
				},
				noWeekends: function (t) {
					var e = t.getDay();
					return [e > 0 && 6 > e, ""];
				},
				iso8601Week: function (t) {
					var e,
						i = new Date(t.getTime());
					return (
						i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
						(e = i.getTime()),
						i.setMonth(0),
						i.setDate(1),
						Math.floor(Math.round((e - i) / 864e5) / 7) + 1
					);
				},
				parseDate: function (e, i, n) {
					if (null == e || null == i) throw "Invalid arguments";
					if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
					var s,
						o,
						a,
						r,
						l = 0,
						h =
							(n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
						c =
							"string" != typeof h
								? h
								: (new Date().getFullYear() % 100) + parseInt(h, 10),
						u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
						d = (n ? n.dayNames : null) || this._defaults.dayNames,
						p =
							(n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
						f = (n ? n.monthNames : null) || this._defaults.monthNames,
						g = -1,
						m = -1,
						v = -1,
						_ = -1,
						b = !1,
						y = function (t) {
							var i = e.length > s + 1 && e.charAt(s + 1) === t;
							return i && s++, i;
						},
						w = function (t) {
							var e = y(t),
								n =
									"@" === t
										? 14
										: "!" === t
										? 20
										: "y" === t && e
										? 4
										: "o" === t
										? 3
										: 2,
								s = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
								o = i.substring(l).match(s);
							if (!o) throw "Missing number at position " + l;
							return (l += o[0].length), parseInt(o[0], 10);
						},
						x = function (e, n, s) {
							var o = -1,
								a = t
									.map(y(e) ? s : n, function (t, e) {
										return [[e, t]];
									})
									.sort(function (t, e) {
										return -(t[1].length - e[1].length);
									});
							if (
								(t.each(a, function (t, e) {
									var n = e[1];
									return i.substr(l, n.length).toLowerCase() === n.toLowerCase()
										? ((o = e[0]), (l += n.length), !1)
										: void 0;
								}),
								-1 !== o)
							)
								return o + 1;
							throw "Unknown name at position " + l;
						},
						C = function () {
							if (i.charAt(l) !== e.charAt(s))
								throw "Unexpected literal at position " + l;
							l++;
						};
					for (s = 0; e.length > s; s++)
						if (b) "'" !== e.charAt(s) || y("'") ? C() : (b = !1);
						else
							switch (e.charAt(s)) {
								case "d":
									v = w("d");
									break;
								case "D":
									x("D", u, d);
									break;
								case "o":
									_ = w("o");
									break;
								case "m":
									m = w("m");
									break;
								case "M":
									m = x("M", p, f);
									break;
								case "y":
									g = w("y");
									break;
								case "@":
									(g = (r = new Date(w("@"))).getFullYear()),
										(m = r.getMonth() + 1),
										(v = r.getDate());
									break;
								case "!":
									(g = (r = new Date(
										(w("!") - this._ticksTo1970) / 1e4
									)).getFullYear()),
										(m = r.getMonth() + 1),
										(v = r.getDate());
									break;
								case "'":
									y("'") ? C() : (b = !0);
									break;
								default:
									C();
							}
					if (i.length > l && ((a = i.substr(l)), !/^\s+/.test(a)))
						throw "Extra/unparsed characters found in date: " + a;
					if (
						(-1 === g
							? (g = new Date().getFullYear())
							: 100 > g &&
							  (g +=
									new Date().getFullYear() -
									(new Date().getFullYear() % 100) +
									(c >= g ? 0 : -100)),
						_ > -1)
					)
						for (m = 1, v = _; !((o = this._getDaysInMonth(g, m - 1)) >= v); )
							m++, (v -= o);
					if (
						(r = this._daylightSavingAdjust(
							new Date(g, m - 1, v)
						)).getFullYear() !== g ||
						r.getMonth() + 1 !== m ||
						r.getDate() !== v
					)
						throw "Invalid date";
					return r;
				},
				ATOM: "yy-mm-dd",
				COOKIE: "D, dd M yy",
				ISO_8601: "yy-mm-dd",
				RFC_822: "D, d M y",
				RFC_850: "DD, dd-M-y",
				RFC_1036: "D, d M y",
				RFC_1123: "D, d M yy",
				RFC_2822: "D, d M yy",
				RSS: "D, d M y",
				TICKS: "!",
				TIMESTAMP: "@",
				W3C: "yy-mm-dd",
				_ticksTo1970:
					864e9 *
					(718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
				formatDate: function (t, e, i) {
					if (!e) return "";
					var n,
						s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
						o = (i ? i.dayNames : null) || this._defaults.dayNames,
						a =
							(i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
						r = (i ? i.monthNames : null) || this._defaults.monthNames,
						l = function (e) {
							var i = t.length > n + 1 && t.charAt(n + 1) === e;
							return i && n++, i;
						},
						h = function (t, e, i) {
							var n = "" + e;
							if (l(t)) for (; i > n.length; ) n = "0" + n;
							return n;
						},
						c = function (t, e, i, n) {
							return l(t) ? n[e] : i[e];
						},
						u = "",
						d = !1;
					if (e)
						for (n = 0; t.length > n; n++)
							if (d)
								"'" !== t.charAt(n) || l("'") ? (u += t.charAt(n)) : (d = !1);
							else
								switch (t.charAt(n)) {
									case "d":
										u += h("d", e.getDate(), 2);
										break;
									case "D":
										u += c("D", e.getDay(), s, o);
										break;
									case "o":
										u += h(
											"o",
											Math.round(
												(new Date(
													e.getFullYear(),
													e.getMonth(),
													e.getDate()
												).getTime() -
													new Date(e.getFullYear(), 0, 0).getTime()) /
													864e5
											),
											3
										);
										break;
									case "m":
										u += h("m", e.getMonth() + 1, 2);
										break;
									case "M":
										u += c("M", e.getMonth(), a, r);
										break;
									case "y":
										u += l("y")
											? e.getFullYear()
											: (10 > e.getFullYear() % 100 ? "0" : "") +
											  (e.getFullYear() % 100);
										break;
									case "@":
										u += e.getTime();
										break;
									case "!":
										u += 1e4 * e.getTime() + this._ticksTo1970;
										break;
									case "'":
										l("'") ? (u += "'") : (d = !0);
										break;
									default:
										u += t.charAt(n);
								}
					return u;
				},
				_possibleChars: function (t) {
					var e,
						i = "",
						n = !1,
						s = function (i) {
							var n = t.length > e + 1 && t.charAt(e + 1) === i;
							return n && e++, n;
						};
					for (e = 0; t.length > e; e++)
						if (n)
							"'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
						else
							switch (t.charAt(e)) {
								case "d":
								case "m":
								case "y":
								case "@":
									i += "0123456789";
									break;
								case "D":
								case "M":
									return null;
								case "'":
									s("'") ? (i += "'") : (n = !0);
									break;
								default:
									i += t.charAt(e);
							}
					return i;
				},
				_get: function (t, e) {
					return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
				},
				_setDateFromField: function (t, e) {
					if (t.input.val() !== t.lastVal) {
						var i = this._get(t, "dateFormat"),
							n = (t.lastVal = t.input ? t.input.val() : null),
							s = this._getDefaultDate(t),
							o = s,
							a = this._getFormatConfig(t);
						try {
							o = this.parseDate(i, n, a) || s;
						} catch (t) {
							n = e ? "" : n;
						}
						(t.selectedDay = o.getDate()),
							(t.drawMonth = t.selectedMonth = o.getMonth()),
							(t.drawYear = t.selectedYear = o.getFullYear()),
							(t.currentDay = n ? o.getDate() : 0),
							(t.currentMonth = n ? o.getMonth() : 0),
							(t.currentYear = n ? o.getFullYear() : 0),
							this._adjustInstDate(t);
					}
				},
				_getDefaultDate: function (t) {
					return this._restrictMinMax(
						t,
						this._determineDate(t, this._get(t, "defaultDate"), new Date())
					);
				},
				_determineDate: function (e, i, n) {
					var s =
						null == i || "" === i
							? n
							: "string" == typeof i
							? (function (i) {
									try {
										return t.datepicker.parseDate(
											t.datepicker._get(e, "dateFormat"),
											i,
											t.datepicker._getFormatConfig(e)
										);
									} catch (t) {}
									for (
										var n =
												(i.toLowerCase().match(/^c/)
													? t.datepicker._getDate(e)
													: null) || new Date(),
											s = n.getFullYear(),
											o = n.getMonth(),
											a = n.getDate(),
											r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
											l = r.exec(i);
										l;

									) {
										switch (l[2] || "d") {
											case "d":
											case "D":
												a += parseInt(l[1], 10);
												break;
											case "w":
											case "W":
												a += 7 * parseInt(l[1], 10);
												break;
											case "m":
											case "M":
												(o += parseInt(l[1], 10)),
													(a = Math.min(a, t.datepicker._getDaysInMonth(s, o)));
												break;
											case "y":
											case "Y":
												(s += parseInt(l[1], 10)),
													(a = Math.min(a, t.datepicker._getDaysInMonth(s, o)));
										}
										l = r.exec(i);
									}
									return new Date(s, o, a);
							  })(i)
							: "number" == typeof i
							? isNaN(i)
								? n
								: (function (t) {
										var e = new Date();
										return e.setDate(e.getDate() + t), e;
								  })(i)
							: new Date(i.getTime());
					return (
						(s = s && "Invalid Date" == "" + s ? n : s) &&
							(s.setHours(0),
							s.setMinutes(0),
							s.setSeconds(0),
							s.setMilliseconds(0)),
						this._daylightSavingAdjust(s)
					);
				},
				_daylightSavingAdjust: function (t) {
					return t
						? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
						: null;
				},
				_setDate: function (t, e, i) {
					var n = !e,
						s = t.selectedMonth,
						o = t.selectedYear,
						a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
					(t.selectedDay = t.currentDay = a.getDate()),
						(t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
						(t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
						(s === t.selectedMonth && o === t.selectedYear) ||
							i ||
							this._notifyChange(t),
						this._adjustInstDate(t),
						t.input && t.input.val(n ? "" : this._formatDate(t));
				},
				_getDate: function (t) {
					return !t.currentYear || (t.input && "" === t.input.val())
						? null
						: this._daylightSavingAdjust(
								new Date(t.currentYear, t.currentMonth, t.currentDay)
						  );
				},
				_attachHandlers: function (e) {
					var i = this._get(e, "stepMonths"),
						n = "#" + e.id.replace(/\\\\/g, "\\");
					e.dpDiv.find("[data-handler]").map(function () {
						var e = {
							prev: function () {
								t.datepicker._adjustDate(n, -i, "M");
							},
							next: function () {
								t.datepicker._adjustDate(n, +i, "M");
							},
							hide: function () {
								t.datepicker._hideDatepicker();
							},
							today: function () {
								t.datepicker._gotoToday(n);
							},
							selectDay: function () {
								return (
									t.datepicker._selectDay(
										n,
										+this.getAttribute("data-month"),
										+this.getAttribute("data-year"),
										this
									),
									!1
								);
							},
							selectMonth: function () {
								return t.datepicker._selectMonthYear(n, this, "M"), !1;
							},
							selectYear: function () {
								return t.datepicker._selectMonthYear(n, this, "Y"), !1;
							},
						};
						t(this).on(
							this.getAttribute("data-event"),
							e[this.getAttribute("data-handler")]
						);
					});
				},
				_generateHTML: function (t) {
					var e,
						i,
						n,
						s,
						o,
						a,
						r,
						l,
						h,
						c,
						u,
						d,
						p,
						f,
						g,
						m,
						v,
						_,
						b,
						y,
						w,
						x,
						C,
						k,
						T,
						D,
						S,
						E,
						I,
						A,
						P,
						O,
						F,
						M,
						N,
						H,
						$,
						L,
						z,
						W = new Date(),
						j = this._daylightSavingAdjust(
							new Date(W.getFullYear(), W.getMonth(), W.getDate())
						),
						R = this._get(t, "isRTL"),
						q = this._get(t, "showButtonPanel"),
						B = this._get(t, "hideIfNoPrevNext"),
						Y = this._get(t, "navigationAsDateFormat"),
						U = this._getNumberOfMonths(t),
						K = this._get(t, "showCurrentAtPos"),
						V = this._get(t, "stepMonths"),
						X = 1 !== U[0] || 1 !== U[1],
						Q = this._daylightSavingAdjust(
							t.currentDay
								? new Date(t.currentYear, t.currentMonth, t.currentDay)
								: new Date(9999, 9, 9)
						),
						G = this._getMinMaxDate(t, "min"),
						Z = this._getMinMaxDate(t, "max"),
						J = t.drawMonth - K,
						tt = t.drawYear;
					if ((0 > J && ((J += 12), tt--), Z))
						for (
							e = this._daylightSavingAdjust(
								new Date(
									Z.getFullYear(),
									Z.getMonth() - U[0] * U[1] + 1,
									Z.getDate()
								)
							),
								e = G && G > e ? G : e;
							this._daylightSavingAdjust(new Date(tt, J, 1)) > e;

						)
							0 > --J && ((J = 11), tt--);
					for (
						t.drawMonth = J,
							t.drawYear = tt,
							i = this._get(t, "prevText"),
							i = Y
								? this.formatDate(
										i,
										this._daylightSavingAdjust(new Date(tt, J - V, 1)),
										this._getFormatConfig(t)
								  )
								: i,
							n = this._canAdjustMonth(t, -1, tt, J)
								? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
								  i +
								  "'><span class='ui-icon ui-icon-circle-triangle-" +
								  (R ? "e" : "w") +
								  "'>" +
								  i +
								  "</span></a>"
								: B
								? ""
								: "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
								  i +
								  "'><span class='ui-icon ui-icon-circle-triangle-" +
								  (R ? "e" : "w") +
								  "'>" +
								  i +
								  "</span></a>",
							s = this._get(t, "nextText"),
							s = Y
								? this.formatDate(
										s,
										this._daylightSavingAdjust(new Date(tt, J + V, 1)),
										this._getFormatConfig(t)
								  )
								: s,
							o = this._canAdjustMonth(t, 1, tt, J)
								? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
								  s +
								  "'><span class='ui-icon ui-icon-circle-triangle-" +
								  (R ? "w" : "e") +
								  "'>" +
								  s +
								  "</span></a>"
								: B
								? ""
								: "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
								  s +
								  "'><span class='ui-icon ui-icon-circle-triangle-" +
								  (R ? "w" : "e") +
								  "'>" +
								  s +
								  "</span></a>",
							a = this._get(t, "currentText"),
							r = this._get(t, "gotoCurrent") && t.currentDay ? Q : j,
							a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
							l = t.inline
								? ""
								: "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
								  this._get(t, "closeText") +
								  "</button>",
							h = q
								? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
								  (R ? l : "") +
								  (this._isInRange(t, r)
										? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
										  a +
										  "</button>"
										: "") +
								  (R ? "" : l) +
								  "</div>"
								: "",
							c = parseInt(this._get(t, "firstDay"), 10),
							c = isNaN(c) ? 0 : c,
							u = this._get(t, "showWeek"),
							d = this._get(t, "dayNames"),
							p = this._get(t, "dayNamesMin"),
							f = this._get(t, "monthNames"),
							g = this._get(t, "monthNamesShort"),
							m = this._get(t, "beforeShowDay"),
							v = this._get(t, "showOtherMonths"),
							_ = this._get(t, "selectOtherMonths"),
							b = this._getDefaultDate(t),
							y = "",
							x = 0;
						U[0] > x;
						x++
					) {
						for (C = "", this.maxRows = 4, k = 0; U[1] > k; k++) {
							if (
								((T = this._daylightSavingAdjust(
									new Date(tt, J, t.selectedDay)
								)),
								(D = " ui-corner-all"),
								(S = ""),
								X)
							) {
								if (((S += "<div class='ui-datepicker-group"), U[1] > 1))
									switch (k) {
										case 0:
											(S += " ui-datepicker-group-first"),
												(D = " ui-corner-" + (R ? "right" : "left"));
											break;
										case U[1] - 1:
											(S += " ui-datepicker-group-last"),
												(D = " ui-corner-" + (R ? "left" : "right"));
											break;
										default:
											(S += " ui-datepicker-group-middle"), (D = "");
									}
								S += "'>";
							}
							for (
								S +=
									"<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
									D +
									"'>" +
									(/all|left/.test(D) && 0 === x ? (R ? o : n) : "") +
									(/all|right/.test(D) && 0 === x ? (R ? n : o) : "") +
									this._generateMonthYearHeader(
										t,
										J,
										tt,
										G,
										Z,
										x > 0 || k > 0,
										f,
										g
									) +
									"</div><table class='ui-datepicker-calendar'><thead><tr>",
									E = u
										? "<th class='ui-datepicker-week-col'>" +
										  this._get(t, "weekHeader") +
										  "</th>"
										: "",
									w = 0;
								7 > w;
								w++
							)
								E +=
									"<th scope='col'" +
									((w + c + 6) % 7 >= 5
										? " class='ui-datepicker-week-end'"
										: "") +
									"><span title='" +
									d[(I = (w + c) % 7)] +
									"'>" +
									p[I] +
									"</span></th>";
							for (
								S += E + "</tr></thead><tbody>",
									A = this._getDaysInMonth(tt, J),
									tt === t.selectedYear &&
										J === t.selectedMonth &&
										(t.selectedDay = Math.min(t.selectedDay, A)),
									P = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7,
									O = Math.ceil((P + A) / 7),
									F = X && this.maxRows > O ? this.maxRows : O,
									this.maxRows = F,
									M = this._daylightSavingAdjust(new Date(tt, J, 1 - P)),
									N = 0;
								F > N;
								N++
							) {
								for (
									S += "<tr>",
										H = u
											? "<td class='ui-datepicker-week-col'>" +
											  this._get(t, "calculateWeek")(M) +
											  "</td>"
											: "",
										w = 0;
									7 > w;
									w++
								)
									($ = m
										? m.apply(t.input ? t.input[0] : null, [M])
										: [!0, ""]),
										(z =
											((L = M.getMonth() !== J) && !_) ||
											!$[0] ||
											(G && G > M) ||
											(Z && M > Z)),
										(H +=
											"<td class='" +
											((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
											(L ? " ui-datepicker-other-month" : "") +
											((M.getTime() === T.getTime() &&
												J === t.selectedMonth &&
												t._keyEvent) ||
											(b.getTime() === M.getTime() &&
												b.getTime() === T.getTime())
												? " " + this._dayOverClass
												: "") +
											(z
												? " " + this._unselectableClass + " ui-state-disabled"
												: "") +
											(L && !v
												? ""
												: " " +
												  $[1] +
												  (M.getTime() === Q.getTime()
														? " " + this._currentClass
														: "") +
												  (M.getTime() === j.getTime()
														? " ui-datepicker-today"
														: "")) +
											"'" +
											((L && !v) || !$[2]
												? ""
												: " title='" + $[2].replace(/'/g, "&#39;") + "'") +
											(z
												? ""
												: " data-handler='selectDay' data-event='click' data-month='" +
												  M.getMonth() +
												  "' data-year='" +
												  M.getFullYear() +
												  "'") +
											">" +
											(L && !v
												? "&#xa0;"
												: z
												? "<span class='ui-state-default'>" +
												  M.getDate() +
												  "</span>"
												: "<a class='ui-state-default" +
												  (M.getTime() === j.getTime()
														? " ui-state-highlight"
														: "") +
												  (M.getTime() === Q.getTime()
														? " ui-state-active"
														: "") +
												  (L ? " ui-priority-secondary" : "") +
												  "' href='#'>" +
												  M.getDate() +
												  "</a>") +
											"</td>"),
										M.setDate(M.getDate() + 1),
										(M = this._daylightSavingAdjust(M));
								S += H + "</tr>";
							}
							++J > 11 && ((J = 0), tt++),
								(C += S +=
									"</tbody></table>" +
									(X
										? "</div>" +
										  (U[0] > 0 && k === U[1] - 1
												? "<div class='ui-datepicker-row-break'></div>"
												: "")
										: ""));
						}
						y += C;
					}
					return (y += h), (t._keyEvent = !1), y;
				},
				_generateMonthYearHeader: function (t, e, i, n, s, o, a, r) {
					var l,
						h,
						c,
						u,
						d,
						p,
						f,
						g,
						m = this._get(t, "changeMonth"),
						v = this._get(t, "changeYear"),
						_ = this._get(t, "showMonthAfterYear"),
						b = "<div class='ui-datepicker-title'>",
						y = "";
					if (o || !m)
						y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
					else {
						for (
							l = n && n.getFullYear() === i,
								h = s && s.getFullYear() === i,
								y +=
									"<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
								c = 0;
							12 > c;
							c++
						)
							(!l || c >= n.getMonth()) &&
								(!h || s.getMonth() >= c) &&
								(y +=
									"<option value='" +
									c +
									"'" +
									(c === e ? " selected='selected'" : "") +
									">" +
									r[c] +
									"</option>");
						y += "</select>";
					}
					if ((_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml))
						if (((t.yearshtml = ""), o || !v))
							b += "<span class='ui-datepicker-year'>" + i + "</span>";
						else {
							for (
								u = this._get(t, "yearRange").split(":"),
									d = new Date().getFullYear(),
									f = (p = function (t) {
										var e = t.match(/c[+\-].*/)
											? i + parseInt(t.substring(1), 10)
											: t.match(/[+\-].*/)
											? d + parseInt(t, 10)
											: parseInt(t, 10);
										return isNaN(e) ? d : e;
									})(u[0]),
									g = Math.max(f, p(u[1] || "")),
									f = n ? Math.max(f, n.getFullYear()) : f,
									g = s ? Math.min(g, s.getFullYear()) : g,
									t.yearshtml +=
										"<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
								g >= f;
								f++
							)
								t.yearshtml +=
									"<option value='" +
									f +
									"'" +
									(f === i ? " selected='selected'" : "") +
									">" +
									f +
									"</option>";
							(t.yearshtml += "</select>"),
								(b += t.yearshtml),
								(t.yearshtml = null);
						}
					return (
						(b += this._get(t, "yearSuffix")),
						_ && (b += (!o && m && v ? "" : "&#xa0;") + y),
						b + "</div>"
					);
				},
				_adjustInstDate: function (t, e, i) {
					var n = t.selectedYear + ("Y" === i ? e : 0),
						s = t.selectedMonth + ("M" === i ? e : 0),
						o =
							Math.min(t.selectedDay, this._getDaysInMonth(n, s)) +
							("D" === i ? e : 0),
						a = this._restrictMinMax(
							t,
							this._daylightSavingAdjust(new Date(n, s, o))
						);
					(t.selectedDay = a.getDate()),
						(t.drawMonth = t.selectedMonth = a.getMonth()),
						(t.drawYear = t.selectedYear = a.getFullYear()),
						("M" === i || "Y" === i) && this._notifyChange(t);
				},
				_restrictMinMax: function (t, e) {
					var i = this._getMinMaxDate(t, "min"),
						n = this._getMinMaxDate(t, "max"),
						s = i && i > e ? i : e;
					return n && s > n ? n : s;
				},
				_notifyChange: function (t) {
					var e = this._get(t, "onChangeMonthYear");
					e &&
						e.apply(t.input ? t.input[0] : null, [
							t.selectedYear,
							t.selectedMonth + 1,
							t,
						]);
				},
				_getNumberOfMonths: function (t) {
					var e = this._get(t, "numberOfMonths");
					return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
				},
				_getMinMaxDate: function (t, e) {
					return this._determineDate(t, this._get(t, e + "Date"), null);
				},
				_getDaysInMonth: function (t, e) {
					return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
				},
				_getFirstDayOfMonth: function (t, e) {
					return new Date(t, e, 1).getDay();
				},
				_canAdjustMonth: function (t, e, i, n) {
					var s = this._getNumberOfMonths(t),
						o = this._daylightSavingAdjust(
							new Date(i, n + (0 > e ? e : s[0] * s[1]), 1)
						);
					return (
						0 > e &&
							o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
						this._isInRange(t, o)
					);
				},
				_isInRange: function (t, e) {
					var i,
						n,
						s = this._getMinMaxDate(t, "min"),
						o = this._getMinMaxDate(t, "max"),
						a = null,
						r = null,
						l = this._get(t, "yearRange");
					return (
						l &&
							((i = l.split(":")),
							(n = new Date().getFullYear()),
							(a = parseInt(i[0], 10)),
							(r = parseInt(i[1], 10)),
							i[0].match(/[+\-].*/) && (a += n),
							i[1].match(/[+\-].*/) && (r += n)),
						(!s || e.getTime() >= s.getTime()) &&
							(!o || e.getTime() <= o.getTime()) &&
							(!a || e.getFullYear() >= a) &&
							(!r || r >= e.getFullYear())
					);
				},
				_getFormatConfig: function (t) {
					var e = this._get(t, "shortYearCutoff");
					return {
						shortYearCutoff: (e =
							"string" != typeof e
								? e
								: (new Date().getFullYear() % 100) + parseInt(e, 10)),
						dayNamesShort: this._get(t, "dayNamesShort"),
						dayNames: this._get(t, "dayNames"),
						monthNamesShort: this._get(t, "monthNamesShort"),
						monthNames: this._get(t, "monthNames"),
					};
				},
				_formatDate: function (t, e, i, n) {
					e ||
						((t.currentDay = t.selectedDay),
						(t.currentMonth = t.selectedMonth),
						(t.currentYear = t.selectedYear));
					var s = e
						? "object" == typeof e
							? e
							: this._daylightSavingAdjust(new Date(n, i, e))
						: this._daylightSavingAdjust(
								new Date(t.currentYear, t.currentMonth, t.currentDay)
						  );
					return this.formatDate(
						this._get(t, "dateFormat"),
						s,
						this._getFormatConfig(t)
					);
				},
			}),
			(t.fn.datepicker = function (e) {
				if (!this.length) return this;
				t.datepicker.initialized ||
					(t(document).on("mousedown", t.datepicker._checkExternalClick),
					(t.datepicker.initialized = !0)),
					0 === t("#" + t.datepicker._mainDivId).length &&
						t("body").append(t.datepicker.dpDiv);
				var i = Array.prototype.slice.call(arguments, 1);
				return "string" != typeof e ||
					("isDisabled" !== e && "getDate" !== e && "widget" !== e)
					? "option" === e &&
					  2 === arguments.length &&
					  "string" == typeof arguments[1]
						? t.datepicker["_" + e + "Datepicker"].apply(
								t.datepicker,
								[this[0]].concat(i)
						  )
						: this.each(function () {
								"string" == typeof e
									? t.datepicker["_" + e + "Datepicker"].apply(
											t.datepicker,
											[this].concat(i)
									  )
									: t.datepicker._attachDatepicker(this, e);
						  })
					: t.datepicker["_" + e + "Datepicker"].apply(
							t.datepicker,
							[this[0]].concat(i)
					  );
			}),
			(t.datepicker = new e()),
			(t.datepicker.initialized = !1),
			(t.datepicker.uuid = new Date().getTime()),
			(t.datepicker.version = "1.12.1"),
			t.datepicker,
			(t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
		var f = !1;
		t(document).on("mouseup", function () {
			f = !1;
		}),
			t.widget("ui.mouse", {
				version: "1.12.1",
				options: {
					cancel: "input, textarea, button, select, option",
					distance: 1,
					delay: 0,
				},
				_mouseInit: function () {
					var e = this;
					this.element
						.on("mousedown." + this.widgetName, function (t) {
							return e._mouseDown(t);
						})
						.on("click." + this.widgetName, function (i) {
							return !0 ===
								t.data(i.target, e.widgetName + ".preventClickEvent")
								? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
								  i.stopImmediatePropagation(),
								  !1)
								: void 0;
						}),
						(this.started = !1);
				},
				_mouseDestroy: function () {
					this.element.off("." + this.widgetName),
						this._mouseMoveDelegate &&
							this.document
								.off("mousemove." + this.widgetName, this._mouseMoveDelegate)
								.off("mouseup." + this.widgetName, this._mouseUpDelegate);
				},
				_mouseDown: function (e) {
					if (!f) {
						(this._mouseMoved = !1),
							this._mouseStarted && this._mouseUp(e),
							(this._mouseDownEvent = e);
						var i = this,
							n = 1 === e.which,
							s =
								!(
									"string" != typeof this.options.cancel || !e.target.nodeName
								) && t(e.target).closest(this.options.cancel).length;
						return (
							!(n && !s && this._mouseCapture(e)) ||
							((this.mouseDelayMet = !this.options.delay),
							this.mouseDelayMet ||
								(this._mouseDelayTimer = setTimeout(function () {
									i.mouseDelayMet = !0;
								}, this.options.delay)),
							this._mouseDistanceMet(e) &&
							this._mouseDelayMet(e) &&
							((this._mouseStarted = !1 !== this._mouseStart(e)),
							!this._mouseStarted)
								? (e.preventDefault(), !0)
								: (!0 ===
										t.data(e.target, this.widgetName + ".preventClickEvent") &&
										t.removeData(
											e.target,
											this.widgetName + ".preventClickEvent"
										),
								  (this._mouseMoveDelegate = function (t) {
										return i._mouseMove(t);
								  }),
								  (this._mouseUpDelegate = function (t) {
										return i._mouseUp(t);
								  }),
								  this.document
										.on("mousemove." + this.widgetName, this._mouseMoveDelegate)
										.on("mouseup." + this.widgetName, this._mouseUpDelegate),
								  e.preventDefault(),
								  (f = !0),
								  !0))
						);
					}
				},
				_mouseMove: function (e) {
					if (this._mouseMoved) {
						if (
							t.ui.ie &&
							(!document.documentMode || 9 > document.documentMode) &&
							!e.button
						)
							return this._mouseUp(e);
						if (!e.which)
							if (
								e.originalEvent.altKey ||
								e.originalEvent.ctrlKey ||
								e.originalEvent.metaKey ||
								e.originalEvent.shiftKey
							)
								this.ignoreMissingWhich = !0;
							else if (!this.ignoreMissingWhich) return this._mouseUp(e);
					}
					return (
						(e.which || e.button) && (this._mouseMoved = !0),
						this._mouseStarted
							? (this._mouseDrag(e), e.preventDefault())
							: (this._mouseDistanceMet(e) &&
									this._mouseDelayMet(e) &&
									((this._mouseStarted =
										!1 !== this._mouseStart(this._mouseDownEvent, e)),
									this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
							  !this._mouseStarted)
					);
				},
				_mouseUp: function (e) {
					this.document
						.off("mousemove." + this.widgetName, this._mouseMoveDelegate)
						.off("mouseup." + this.widgetName, this._mouseUpDelegate),
						this._mouseStarted &&
							((this._mouseStarted = !1),
							e.target === this._mouseDownEvent.target &&
								t.data(e.target, this.widgetName + ".preventClickEvent", !0),
							this._mouseStop(e)),
						this._mouseDelayTimer &&
							(clearTimeout(this._mouseDelayTimer),
							delete this._mouseDelayTimer),
						(this.ignoreMissingWhich = !1),
						(f = !1),
						e.preventDefault();
				},
				_mouseDistanceMet: function (t) {
					return (
						Math.max(
							Math.abs(this._mouseDownEvent.pageX - t.pageX),
							Math.abs(this._mouseDownEvent.pageY - t.pageY)
						) >= this.options.distance
					);
				},
				_mouseDelayMet: function () {
					return this.mouseDelayMet;
				},
				_mouseStart: function () {},
				_mouseDrag: function () {},
				_mouseStop: function () {},
				_mouseCapture: function () {
					return !0;
				},
			}),
			(t.ui.plugin = {
				add: function (e, i, n) {
					var s,
						o = t.ui[e].prototype;
					for (s in n)
						(o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
				},
				call: function (t, e, i, n) {
					var s,
						o = t.plugins[e];
					if (
						o &&
						(n ||
							(t.element[0].parentNode &&
								11 !== t.element[0].parentNode.nodeType))
					)
						for (s = 0; o.length > s; s++)
							t.options[o[s][0]] && o[s][1].apply(t.element, i);
				},
			}),
			(t.ui.safeBlur = function (e) {
				e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
			}),
			t.widget("ui.draggable", t.ui.mouse, {
				version: "1.12.1",
				widgetEventPrefix: "drag",
				options: {
					addClasses: !0,
					appendTo: "parent",
					axis: !1,
					connectToSortable: !1,
					containment: !1,
					cursor: "auto",
					cursorAt: !1,
					grid: !1,
					handle: !1,
					helper: "original",
					iframeFix: !1,
					opacity: !1,
					refreshPositions: !1,
					revert: !1,
					revertDuration: 500,
					scope: "default",
					scroll: !0,
					scrollSensitivity: 20,
					scrollSpeed: 20,
					snap: !1,
					snapMode: "both",
					snapTolerance: 20,
					stack: !1,
					zIndex: !1,
					drag: null,
					start: null,
					stop: null,
				},
				_create: function () {
					"original" === this.options.helper && this._setPositionRelative(),
						this.options.addClasses && this._addClass("ui-draggable"),
						this._setHandleClassName(),
						this._mouseInit();
				},
				_setOption: function (t, e) {
					this._super(t, e),
						"handle" === t &&
							(this._removeHandleClassName(), this._setHandleClassName());
				},
				_destroy: function () {
					return (this.helper || this.element).is(".ui-draggable-dragging")
						? void (this.destroyOnClear = !0)
						: (this._removeHandleClassName(), void this._mouseDestroy());
				},
				_mouseCapture: function (e) {
					var i = this.options;
					return (
						!(
							this.helper ||
							i.disabled ||
							t(e.target).closest(".ui-resizable-handle").length > 0
						) &&
						((this.handle = this._getHandle(e)),
						!!this.handle &&
							(this._blurActiveElement(e),
							this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
							!0))
					);
				},
				_blockFrames: function (e) {
					this.iframeBlocks = this.document.find(e).map(function () {
						var e = t(this);
						return t("<div>")
							.css("position", "absolute")
							.appendTo(e.parent())
							.outerWidth(e.outerWidth())
							.outerHeight(e.outerHeight())
							.offset(e.offset())[0];
					});
				},
				_unblockFrames: function () {
					this.iframeBlocks &&
						(this.iframeBlocks.remove(), delete this.iframeBlocks);
				},
				_blurActiveElement: function (e) {
					var i = t.ui.safeActiveElement(this.document[0]);
					t(e.target).closest(i).length || t.ui.safeBlur(i);
				},
				_mouseStart: function (e) {
					var i = this.options;
					return (
						(this.helper = this._createHelper(e)),
						this._addClass(this.helper, "ui-draggable-dragging"),
						this._cacheHelperProportions(),
						t.ui.ddmanager && (t.ui.ddmanager.current = this),
						this._cacheMargins(),
						(this.cssPosition = this.helper.css("position")),
						(this.scrollParent = this.helper.scrollParent(!0)),
						(this.offsetParent = this.helper.offsetParent()),
						(this.hasFixedAncestor =
							this.helper.parents().filter(function () {
								return "fixed" === t(this).css("position");
							}).length > 0),
						(this.positionAbs = this.element.offset()),
						this._refreshOffsets(e),
						(this.originalPosition = this.position =
							this._generatePosition(e, !1)),
						(this.originalPageX = e.pageX),
						(this.originalPageY = e.pageY),
						i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
						this._setContainment(),
						!1 === this._trigger("start", e)
							? (this._clear(), !1)
							: (this._cacheHelperProportions(),
							  t.ui.ddmanager &&
									!i.dropBehaviour &&
									t.ui.ddmanager.prepareOffsets(this, e),
							  this._mouseDrag(e, !0),
							  t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
							  !0)
					);
				},
				_refreshOffsets: function (t) {
					(this.offset = {
						top: this.positionAbs.top - this.margins.top,
						left: this.positionAbs.left - this.margins.left,
						scroll: !1,
						parent: this._getParentOffset(),
						relative: this._getRelativeOffset(),
					}),
						(this.offset.click = {
							left: t.pageX - this.offset.left,
							top: t.pageY - this.offset.top,
						});
				},
				_mouseDrag: function (e, i) {
					if (
						(this.hasFixedAncestor &&
							(this.offset.parent = this._getParentOffset()),
						(this.position = this._generatePosition(e, !0)),
						(this.positionAbs = this._convertPositionTo("absolute")),
						!i)
					) {
						var n = this._uiHash();
						if (!1 === this._trigger("drag", e, n))
							return this._mouseUp(new t.Event("mouseup", e)), !1;
						this.position = n.position;
					}
					return (
						(this.helper[0].style.left = this.position.left + "px"),
						(this.helper[0].style.top = this.position.top + "px"),
						t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
						!1
					);
				},
				_mouseStop: function (e) {
					var i = this,
						n = !1;
					return (
						t.ui.ddmanager &&
							!this.options.dropBehaviour &&
							(n = t.ui.ddmanager.drop(this, e)),
						this.dropped && ((n = this.dropped), (this.dropped = !1)),
						("invalid" === this.options.revert && !n) ||
						("valid" === this.options.revert && n) ||
						!0 === this.options.revert ||
						(t.isFunction(this.options.revert) &&
							this.options.revert.call(this.element, n))
							? t(this.helper).animate(
									this.originalPosition,
									parseInt(this.options.revertDuration, 10),
									function () {
										!1 !== i._trigger("stop", e) && i._clear();
									}
							  )
							: !1 !== this._trigger("stop", e) && this._clear(),
						!1
					);
				},
				_mouseUp: function (e) {
					return (
						this._unblockFrames(),
						t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
						this.handleElement.is(e.target) && this.element.trigger("focus"),
						t.ui.mouse.prototype._mouseUp.call(this, e)
					);
				},
				cancel: function () {
					return (
						this.helper.is(".ui-draggable-dragging")
							? this._mouseUp(
									new t.Event("mouseup", { target: this.element[0] })
							  )
							: this._clear(),
						this
					);
				},
				_getHandle: function (e) {
					return (
						!this.options.handle ||
						!!t(e.target).closest(this.element.find(this.options.handle)).length
					);
				},
				_setHandleClassName: function () {
					(this.handleElement = this.options.handle
						? this.element.find(this.options.handle)
						: this.element),
						this._addClass(this.handleElement, "ui-draggable-handle");
				},
				_removeHandleClassName: function () {
					this._removeClass(this.handleElement, "ui-draggable-handle");
				},
				_createHelper: function (e) {
					var i = this.options,
						n = t.isFunction(i.helper),
						s = n
							? t(i.helper.apply(this.element[0], [e]))
							: "clone" === i.helper
							? this.element.clone().removeAttr("id")
							: this.element;
					return (
						s.parents("body").length ||
							s.appendTo(
								"parent" === i.appendTo
									? this.element[0].parentNode
									: i.appendTo
							),
						n && s[0] === this.element[0] && this._setPositionRelative(),
						s[0] === this.element[0] ||
							/(fixed|absolute)/.test(s.css("position")) ||
							s.css("position", "absolute"),
						s
					);
				},
				_setPositionRelative: function () {
					/^(?:r|a|f)/.test(this.element.css("position")) ||
						(this.element[0].style.position = "relative");
				},
				_adjustOffsetFromHelper: function (e) {
					"string" == typeof e && (e = e.split(" ")),
						t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
						"left" in e &&
							(this.offset.click.left = e.left + this.margins.left),
						"right" in e &&
							(this.offset.click.left =
								this.helperProportions.width - e.right + this.margins.left),
						"top" in e && (this.offset.click.top = e.top + this.margins.top),
						"bottom" in e &&
							(this.offset.click.top =
								this.helperProportions.height - e.bottom + this.margins.top);
				},
				_isRootNode: function (t) {
					return /(html|body)/i.test(t.tagName) || t === this.document[0];
				},
				_getParentOffset: function () {
					var e = this.offsetParent.offset(),
						i = this.document[0];
					return (
						"absolute" === this.cssPosition &&
							this.scrollParent[0] !== i &&
							t.contains(this.scrollParent[0], this.offsetParent[0]) &&
							((e.left += this.scrollParent.scrollLeft()),
							(e.top += this.scrollParent.scrollTop())),
						this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
						{
							top:
								e.top +
								(parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
							left:
								e.left +
								(parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
						}
					);
				},
				_getRelativeOffset: function () {
					if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
					var t = this.element.position(),
						e = this._isRootNode(this.scrollParent[0]);
					return {
						top:
							t.top -
							(parseInt(this.helper.css("top"), 10) || 0) +
							(e ? 0 : this.scrollParent.scrollTop()),
						left:
							t.left -
							(parseInt(this.helper.css("left"), 10) || 0) +
							(e ? 0 : this.scrollParent.scrollLeft()),
					};
				},
				_cacheMargins: function () {
					this.margins = {
						left: parseInt(this.element.css("marginLeft"), 10) || 0,
						top: parseInt(this.element.css("marginTop"), 10) || 0,
						right: parseInt(this.element.css("marginRight"), 10) || 0,
						bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
					};
				},
				_cacheHelperProportions: function () {
					this.helperProportions = {
						width: this.helper.outerWidth(),
						height: this.helper.outerHeight(),
					};
				},
				_setContainment: function () {
					var e,
						i,
						n,
						s = this.options,
						o = this.document[0];
					return (
						(this.relativeContainer = null),
						s.containment
							? "window" === s.containment
								? void (this.containment = [
										t(window).scrollLeft() -
											this.offset.relative.left -
											this.offset.parent.left,
										t(window).scrollTop() -
											this.offset.relative.top -
											this.offset.parent.top,
										t(window).scrollLeft() +
											t(window).width() -
											this.helperProportions.width -
											this.margins.left,
										t(window).scrollTop() +
											(t(window).height() || o.body.parentNode.scrollHeight) -
											this.helperProportions.height -
											this.margins.top,
								  ])
								: "document" === s.containment
								? void (this.containment = [
										0,
										0,
										t(o).width() -
											this.helperProportions.width -
											this.margins.left,
										(t(o).height() || o.body.parentNode.scrollHeight) -
											this.helperProportions.height -
											this.margins.top,
								  ])
								: s.containment.constructor === Array
								? void (this.containment = s.containment)
								: ("parent" === s.containment &&
										(s.containment = this.helper[0].parentNode),
								  void (
										(n = (i = t(s.containment))[0]) &&
										((e = /(scroll|auto)/.test(i.css("overflow"))),
										(this.containment = [
											(parseInt(i.css("borderLeftWidth"), 10) || 0) +
												(parseInt(i.css("paddingLeft"), 10) || 0),
											(parseInt(i.css("borderTopWidth"), 10) || 0) +
												(parseInt(i.css("paddingTop"), 10) || 0),
											(e
												? Math.max(n.scrollWidth, n.offsetWidth)
												: n.offsetWidth) -
												(parseInt(i.css("borderRightWidth"), 10) || 0) -
												(parseInt(i.css("paddingRight"), 10) || 0) -
												this.helperProportions.width -
												this.margins.left -
												this.margins.right,
											(e
												? Math.max(n.scrollHeight, n.offsetHeight)
												: n.offsetHeight) -
												(parseInt(i.css("borderBottomWidth"), 10) || 0) -
												(parseInt(i.css("paddingBottom"), 10) || 0) -
												this.helperProportions.height -
												this.margins.top -
												this.margins.bottom,
										]),
										(this.relativeContainer = i))
								  ))
							: void (this.containment = null)
					);
				},
				_convertPositionTo: function (t, e) {
					e || (e = this.position);
					var i = "absolute" === t ? 1 : -1,
						n = this._isRootNode(this.scrollParent[0]);
					return {
						top:
							e.top +
							this.offset.relative.top * i +
							this.offset.parent.top * i -
							("fixed" === this.cssPosition
								? -this.offset.scroll.top
								: n
								? 0
								: this.offset.scroll.top) *
								i,
						left:
							e.left +
							this.offset.relative.left * i +
							this.offset.parent.left * i -
							("fixed" === this.cssPosition
								? -this.offset.scroll.left
								: n
								? 0
								: this.offset.scroll.left) *
								i,
					};
				},
				_generatePosition: function (t, e) {
					var i,
						n,
						s,
						o,
						a = this.options,
						r = this._isRootNode(this.scrollParent[0]),
						l = t.pageX,
						h = t.pageY;
					return (
						(r && this.offset.scroll) ||
							(this.offset.scroll = {
								top: this.scrollParent.scrollTop(),
								left: this.scrollParent.scrollLeft(),
							}),
						e &&
							(this.containment &&
								(this.relativeContainer
									? ((n = this.relativeContainer.offset()),
									  (i = [
											this.containment[0] + n.left,
											this.containment[1] + n.top,
											this.containment[2] + n.left,
											this.containment[3] + n.top,
									  ]))
									: (i = this.containment),
								t.pageX - this.offset.click.left < i[0] &&
									(l = i[0] + this.offset.click.left),
								t.pageY - this.offset.click.top < i[1] &&
									(h = i[1] + this.offset.click.top),
								t.pageX - this.offset.click.left > i[2] &&
									(l = i[2] + this.offset.click.left),
								t.pageY - this.offset.click.top > i[3] &&
									(h = i[3] + this.offset.click.top)),
							a.grid &&
								((s = a.grid[1]
									? this.originalPageY +
									  Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1]
									: this.originalPageY),
								(h = i
									? s - this.offset.click.top >= i[1] ||
									  s - this.offset.click.top > i[3]
										? s
										: s - this.offset.click.top >= i[1]
										? s - a.grid[1]
										: s + a.grid[1]
									: s),
								(o = a.grid[0]
									? this.originalPageX +
									  Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0]
									: this.originalPageX),
								(l = i
									? o - this.offset.click.left >= i[0] ||
									  o - this.offset.click.left > i[2]
										? o
										: o - this.offset.click.left >= i[0]
										? o - a.grid[0]
										: o + a.grid[0]
									: o)),
							"y" === a.axis && (l = this.originalPageX),
							"x" === a.axis && (h = this.originalPageY)),
						{
							top:
								h -
								this.offset.click.top -
								this.offset.relative.top -
								this.offset.parent.top +
								("fixed" === this.cssPosition
									? -this.offset.scroll.top
									: r
									? 0
									: this.offset.scroll.top),
							left:
								l -
								this.offset.click.left -
								this.offset.relative.left -
								this.offset.parent.left +
								("fixed" === this.cssPosition
									? -this.offset.scroll.left
									: r
									? 0
									: this.offset.scroll.left),
						}
					);
				},
				_clear: function () {
					this._removeClass(this.helper, "ui-draggable-dragging"),
						this.helper[0] === this.element[0] ||
							this.cancelHelperRemoval ||
							this.helper.remove(),
						(this.helper = null),
						(this.cancelHelperRemoval = !1),
						this.destroyOnClear && this.destroy();
				},
				_trigger: function (e, i, n) {
					return (
						(n = n || this._uiHash()),
						t.ui.plugin.call(this, e, [i, n, this], !0),
						/^(drag|start|stop)/.test(e) &&
							((this.positionAbs = this._convertPositionTo("absolute")),
							(n.offset = this.positionAbs)),
						t.Widget.prototype._trigger.call(this, e, i, n)
					);
				},
				plugins: {},
				_uiHash: function () {
					return {
						helper: this.helper,
						position: this.position,
						originalPosition: this.originalPosition,
						offset: this.positionAbs,
					};
				},
			}),
			t.ui.plugin.add("draggable", "connectToSortable", {
				start: function (e, i, n) {
					var s = t.extend({}, i, { item: n.element });
					(n.sortables = []),
						t(n.options.connectToSortable).each(function () {
							var i = t(this).sortable("instance");
							i &&
								!i.options.disabled &&
								(n.sortables.push(i),
								i.refreshPositions(),
								i._trigger("activate", e, s));
						});
				},
				stop: function (e, i, n) {
					var s = t.extend({}, i, { item: n.element });
					(n.cancelHelperRemoval = !1),
						t.each(n.sortables, function () {
							var t = this;
							t.isOver
								? ((t.isOver = 0),
								  (n.cancelHelperRemoval = !0),
								  (t.cancelHelperRemoval = !1),
								  (t._storedCSS = {
										position: t.placeholder.css("position"),
										top: t.placeholder.css("top"),
										left: t.placeholder.css("left"),
								  }),
								  t._mouseStop(e),
								  (t.options.helper = t.options._helper))
								: ((t.cancelHelperRemoval = !0),
								  t._trigger("deactivate", e, s));
						});
				},
				drag: function (e, i, n) {
					t.each(n.sortables, function () {
						var s = !1,
							o = this;
						(o.positionAbs = n.positionAbs),
							(o.helperProportions = n.helperProportions),
							(o.offset.click = n.offset.click),
							o._intersectsWith(o.containerCache) &&
								((s = !0),
								t.each(n.sortables, function () {
									return (
										(this.positionAbs = n.positionAbs),
										(this.helperProportions = n.helperProportions),
										(this.offset.click = n.offset.click),
										this !== o &&
											this._intersectsWith(this.containerCache) &&
											t.contains(o.element[0], this.element[0]) &&
											(s = !1),
										s
									);
								})),
							s
								? (o.isOver ||
										((o.isOver = 1),
										(n._parent = i.helper.parent()),
										(o.currentItem = i.helper
											.appendTo(o.element)
											.data("ui-sortable-item", !0)),
										(o.options._helper = o.options.helper),
										(o.options.helper = function () {
											return i.helper[0];
										}),
										(e.target = o.currentItem[0]),
										o._mouseCapture(e, !0),
										o._mouseStart(e, !0, !0),
										(o.offset.click.top = n.offset.click.top),
										(o.offset.click.left = n.offset.click.left),
										(o.offset.parent.left -=
											n.offset.parent.left - o.offset.parent.left),
										(o.offset.parent.top -=
											n.offset.parent.top - o.offset.parent.top),
										n._trigger("toSortable", e),
										(n.dropped = o.element),
										t.each(n.sortables, function () {
											this.refreshPositions();
										}),
										(n.currentItem = n.element),
										(o.fromOutside = n)),
								  o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
								: o.isOver &&
								  ((o.isOver = 0),
								  (o.cancelHelperRemoval = !0),
								  (o.options._revert = o.options.revert),
								  (o.options.revert = !1),
								  o._trigger("out", e, o._uiHash(o)),
								  o._mouseStop(e, !0),
								  (o.options.revert = o.options._revert),
								  (o.options.helper = o.options._helper),
								  o.placeholder && o.placeholder.remove(),
								  i.helper.appendTo(n._parent),
								  n._refreshOffsets(e),
								  (i.position = n._generatePosition(e, !0)),
								  n._trigger("fromSortable", e),
								  (n.dropped = !1),
								  t.each(n.sortables, function () {
										this.refreshPositions();
								  }));
					});
				},
			}),
			t.ui.plugin.add("draggable", "cursor", {
				start: function (e, i, n) {
					var s = t("body"),
						o = n.options;
					s.css("cursor") && (o._cursor = s.css("cursor")),
						s.css("cursor", o.cursor);
				},
				stop: function (e, i, n) {
					var s = n.options;
					s._cursor && t("body").css("cursor", s._cursor);
				},
			}),
			t.ui.plugin.add("draggable", "opacity", {
				start: function (e, i, n) {
					var s = t(i.helper),
						o = n.options;
					s.css("opacity") && (o._opacity = s.css("opacity")),
						s.css("opacity", o.opacity);
				},
				stop: function (e, i, n) {
					var s = n.options;
					s._opacity && t(i.helper).css("opacity", s._opacity);
				},
			}),
			t.ui.plugin.add("draggable", "scroll", {
				start: function (t, e, i) {
					i.scrollParentNotHidden ||
						(i.scrollParentNotHidden = i.helper.scrollParent(!1)),
						i.scrollParentNotHidden[0] !== i.document[0] &&
							"HTML" !== i.scrollParentNotHidden[0].tagName &&
							(i.overflowOffset = i.scrollParentNotHidden.offset());
				},
				drag: function (e, i, n) {
					var s = n.options,
						o = !1,
						a = n.scrollParentNotHidden[0],
						r = n.document[0];
					a !== r && "HTML" !== a.tagName
						? ((s.axis && "x" === s.axis) ||
								(n.overflowOffset.top + a.offsetHeight - e.pageY <
								s.scrollSensitivity
									? (a.scrollTop = o = a.scrollTop + s.scrollSpeed)
									: e.pageY - n.overflowOffset.top < s.scrollSensitivity &&
									  (a.scrollTop = o = a.scrollTop - s.scrollSpeed)),
						  (s.axis && "y" === s.axis) ||
								(n.overflowOffset.left + a.offsetWidth - e.pageX <
								s.scrollSensitivity
									? (a.scrollLeft = o = a.scrollLeft + s.scrollSpeed)
									: e.pageX - n.overflowOffset.left < s.scrollSensitivity &&
									  (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed)))
						: ((s.axis && "x" === s.axis) ||
								(e.pageY - t(r).scrollTop() < s.scrollSensitivity
									? (o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed))
									: t(window).height() - (e.pageY - t(r).scrollTop()) <
											s.scrollSensitivity &&
									  (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))),
						  (s.axis && "y" === s.axis) ||
								(e.pageX - t(r).scrollLeft() < s.scrollSensitivity
									? (o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed))
									: t(window).width() - (e.pageX - t(r).scrollLeft()) <
											s.scrollSensitivity &&
									  (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))),
						!1 !== o &&
							t.ui.ddmanager &&
							!s.dropBehaviour &&
							t.ui.ddmanager.prepareOffsets(n, e);
				},
			}),
			t.ui.plugin.add("draggable", "snap", {
				start: function (e, i, n) {
					var s = n.options;
					(n.snapElements = []),
						t(
							s.snap.constructor !== String
								? s.snap.items || ":data(ui-draggable)"
								: s.snap
						).each(function () {
							var e = t(this),
								i = e.offset();
							this !== n.element[0] &&
								n.snapElements.push({
									item: this,
									width: e.outerWidth(),
									height: e.outerHeight(),
									top: i.top,
									left: i.left,
								});
						});
				},
				drag: function (e, i, n) {
					var s,
						o,
						a,
						r,
						l,
						h,
						c,
						u,
						d,
						p,
						f = n.options,
						g = f.snapTolerance,
						m = i.offset.left,
						v = m + n.helperProportions.width,
						_ = i.offset.top,
						b = _ + n.helperProportions.height;
					for (d = n.snapElements.length - 1; d >= 0; d--)
						(h =
							(l = n.snapElements[d].left - n.margins.left) +
							n.snapElements[d].width),
							(u =
								(c = n.snapElements[d].top - n.margins.top) +
								n.snapElements[d].height),
							l - g > v ||
							m > h + g ||
							c - g > b ||
							_ > u + g ||
							!t.contains(
								n.snapElements[d].item.ownerDocument,
								n.snapElements[d].item
							)
								? (n.snapElements[d].snapping &&
										n.options.snap.release &&
										n.options.snap.release.call(
											n.element,
											e,
											t.extend(n._uiHash(), {
												snapItem: n.snapElements[d].item,
											})
										),
								  (n.snapElements[d].snapping = !1))
								: ("inner" !== f.snapMode &&
										((s = g >= Math.abs(c - b)),
										(o = g >= Math.abs(u - _)),
										(a = g >= Math.abs(l - v)),
										(r = g >= Math.abs(h - m)),
										s &&
											(i.position.top = n._convertPositionTo("relative", {
												top: c - n.helperProportions.height,
												left: 0,
											}).top),
										o &&
											(i.position.top = n._convertPositionTo("relative", {
												top: u,
												left: 0,
											}).top),
										a &&
											(i.position.left = n._convertPositionTo("relative", {
												top: 0,
												left: l - n.helperProportions.width,
											}).left),
										r &&
											(i.position.left = n._convertPositionTo("relative", {
												top: 0,
												left: h,
											}).left)),
								  (p = s || o || a || r),
								  "outer" !== f.snapMode &&
										((s = g >= Math.abs(c - _)),
										(o = g >= Math.abs(u - b)),
										(a = g >= Math.abs(l - m)),
										(r = g >= Math.abs(h - v)),
										s &&
											(i.position.top = n._convertPositionTo("relative", {
												top: c,
												left: 0,
											}).top),
										o &&
											(i.position.top = n._convertPositionTo("relative", {
												top: u - n.helperProportions.height,
												left: 0,
											}).top),
										a &&
											(i.position.left = n._convertPositionTo("relative", {
												top: 0,
												left: l,
											}).left),
										r &&
											(i.position.left = n._convertPositionTo("relative", {
												top: 0,
												left: h - n.helperProportions.width,
											}).left)),
								  !n.snapElements[d].snapping &&
										(s || o || a || r || p) &&
										n.options.snap.snap &&
										n.options.snap.snap.call(
											n.element,
											e,
											t.extend(n._uiHash(), {
												snapItem: n.snapElements[d].item,
											})
										),
								  (n.snapElements[d].snapping = s || o || a || r || p));
				},
			}),
			t.ui.plugin.add("draggable", "stack", {
				start: function (e, i, n) {
					var s,
						o = n.options,
						a = t.makeArray(t(o.stack)).sort(function (e, i) {
							return (
								(parseInt(t(e).css("zIndex"), 10) || 0) -
								(parseInt(t(i).css("zIndex"), 10) || 0)
							);
						});
					a.length &&
						((s = parseInt(t(a[0]).css("zIndex"), 10) || 0),
						t(a).each(function (e) {
							t(this).css("zIndex", s + e);
						}),
						this.css("zIndex", s + a.length));
				},
			}),
			t.ui.plugin.add("draggable", "zIndex", {
				start: function (e, i, n) {
					var s = t(i.helper),
						o = n.options;
					s.css("zIndex") && (o._zIndex = s.css("zIndex")),
						s.css("zIndex", o.zIndex);
				},
				stop: function (e, i, n) {
					var s = n.options;
					s._zIndex && t(i.helper).css("zIndex", s._zIndex);
				},
			}),
			t.ui.draggable,
			t.widget("ui.resizable", t.ui.mouse, {
				version: "1.12.1",
				widgetEventPrefix: "resize",
				options: {
					alsoResize: !1,
					animate: !1,
					animateDuration: "slow",
					animateEasing: "swing",
					aspectRatio: !1,
					autoHide: !1,
					classes: {
						"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se",
					},
					containment: !1,
					ghost: !1,
					grid: !1,
					handles: "e,s,se",
					helper: !1,
					maxHeight: null,
					maxWidth: null,
					minHeight: 10,
					minWidth: 10,
					zIndex: 90,
					resize: null,
					start: null,
					stop: null,
				},
				_num: function (t) {
					return parseFloat(t) || 0;
				},
				_isNumber: function (t) {
					return !isNaN(parseFloat(t));
				},
				_hasScroll: function (e, i) {
					if ("hidden" === t(e).css("overflow")) return !1;
					var n = i && "left" === i ? "scrollLeft" : "scrollTop",
						s = !1;
					return e[n] > 0 || ((e[n] = 1), (s = e[n] > 0), (e[n] = 0), s);
				},
				_create: function () {
					var e,
						i = this.options,
						n = this;
					this._addClass("ui-resizable"),
						t.extend(this, {
							_aspectRatio: !!i.aspectRatio,
							aspectRatio: i.aspectRatio,
							originalElement: this.element,
							_proportionallyResizeElements: [],
							_helper:
								i.helper || i.ghost || i.animate
									? i.helper || "ui-resizable-helper"
									: null,
						}),
						this.element[0].nodeName.match(
							/^(canvas|textarea|input|select|button|img)$/i
						) &&
							(this.element.wrap(
								t(
									"<div class='ui-wrapper' style='overflow: hidden;'></div>"
								).css({
									position: this.element.css("position"),
									width: this.element.outerWidth(),
									height: this.element.outerHeight(),
									top: this.element.css("top"),
									left: this.element.css("left"),
								})
							),
							(this.element = this.element
								.parent()
								.data("ui-resizable", this.element.resizable("instance"))),
							(this.elementIsWrapper = !0),
							(e = {
								marginTop: this.originalElement.css("marginTop"),
								marginRight: this.originalElement.css("marginRight"),
								marginBottom: this.originalElement.css("marginBottom"),
								marginLeft: this.originalElement.css("marginLeft"),
							}),
							this.element.css(e),
							this.originalElement.css("margin", 0),
							(this.originalResizeStyle = this.originalElement.css("resize")),
							this.originalElement.css("resize", "none"),
							this._proportionallyResizeElements.push(
								this.originalElement.css({
									position: "static",
									zoom: 1,
									display: "block",
								})
							),
							this.originalElement.css(e),
							this._proportionallyResize()),
						this._setupHandles(),
						i.autoHide &&
							t(this.element)
								.on("mouseenter", function () {
									i.disabled ||
										(n._removeClass("ui-resizable-autohide"),
										n._handles.show());
								})
								.on("mouseleave", function () {
									i.disabled ||
										n.resizing ||
										(n._addClass("ui-resizable-autohide"), n._handles.hide());
								}),
						this._mouseInit();
				},
				_destroy: function () {
					this._mouseDestroy();
					var e,
						i = function (e) {
							t(e)
								.removeData("resizable")
								.removeData("ui-resizable")
								.off(".resizable")
								.find(".ui-resizable-handle")
								.remove();
						};
					return (
						this.elementIsWrapper &&
							(i(this.element),
							(e = this.element),
							this.originalElement
								.css({
									position: e.css("position"),
									width: e.outerWidth(),
									height: e.outerHeight(),
									top: e.css("top"),
									left: e.css("left"),
								})
								.insertAfter(e),
							e.remove()),
						this.originalElement.css("resize", this.originalResizeStyle),
						i(this.originalElement),
						this
					);
				},
				_setOption: function (t, e) {
					switch ((this._super(t, e), t)) {
						case "handles":
							this._removeHandles(), this._setupHandles();
					}
				},
				_setupHandles: function () {
					var e,
						i,
						n,
						s,
						o,
						a = this.options,
						r = this;
					if (
						((this.handles =
							a.handles ||
							(t(".ui-resizable-handle", this.element).length
								? {
										n: ".ui-resizable-n",
										e: ".ui-resizable-e",
										s: ".ui-resizable-s",
										w: ".ui-resizable-w",
										se: ".ui-resizable-se",
										sw: ".ui-resizable-sw",
										ne: ".ui-resizable-ne",
										nw: ".ui-resizable-nw",
								  }
								: "e,s,se")),
						(this._handles = t()),
						this.handles.constructor === String)
					)
						for (
							"all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
								n = this.handles.split(","),
								this.handles = {},
								i = 0;
							n.length > i;
							i++
						)
							(s = "ui-resizable-" + (e = t.trim(n[i]))),
								(o = t("<div>")),
								this._addClass(o, "ui-resizable-handle " + s),
								o.css({ zIndex: a.zIndex }),
								(this.handles[e] = ".ui-resizable-" + e),
								this.element.append(o);
					(this._renderAxis = function (e) {
						var i, n, s, o;
						for (i in ((e = e || this.element), this.handles))
							this.handles[i].constructor === String
								? (this.handles[i] = this.element
										.children(this.handles[i])
										.first()
										.show())
								: (this.handles[i].jquery || this.handles[i].nodeType) &&
								  ((this.handles[i] = t(this.handles[i])),
								  this._on(this.handles[i], { mousedown: r._mouseDown })),
								this.elementIsWrapper &&
									this.originalElement[0].nodeName.match(
										/^(textarea|input|select|button)$/i
									) &&
									((n = t(this.handles[i], this.element)),
									(o = /sw|ne|nw|se|n|s/.test(i)
										? n.outerHeight()
										: n.outerWidth()),
									(s = [
										"padding",
										/ne|nw|n/.test(i)
											? "Top"
											: /se|sw|s/.test(i)
											? "Bottom"
											: /^e$/.test(i)
											? "Right"
											: "Left",
									].join("")),
									e.css(s, o),
									this._proportionallyResize()),
								(this._handles = this._handles.add(this.handles[i]));
					}),
						this._renderAxis(this.element),
						(this._handles = this._handles.add(
							this.element.find(".ui-resizable-handle")
						)),
						this._handles.disableSelection(),
						this._handles.on("mouseover", function () {
							r.resizing ||
								(this.className &&
									(o = this.className.match(
										/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
									)),
								(r.axis = o && o[1] ? o[1] : "se"));
						}),
						a.autoHide &&
							(this._handles.hide(), this._addClass("ui-resizable-autohide"));
				},
				_removeHandles: function () {
					this._handles.remove();
				},
				_mouseCapture: function (e) {
					var i,
						n,
						s = !1;
					for (i in this.handles)
						((n = t(this.handles[i])[0]) === e.target ||
							t.contains(n, e.target)) &&
							(s = !0);
					return !this.options.disabled && s;
				},
				_mouseStart: function (e) {
					var i,
						n,
						s,
						o = this.options,
						a = this.element;
					return (
						(this.resizing = !0),
						this._renderProxy(),
						(i = this._num(this.helper.css("left"))),
						(n = this._num(this.helper.css("top"))),
						o.containment &&
							((i += t(o.containment).scrollLeft() || 0),
							(n += t(o.containment).scrollTop() || 0)),
						(this.offset = this.helper.offset()),
						(this.position = { left: i, top: n }),
						(this.size = this._helper
							? { width: this.helper.width(), height: this.helper.height() }
							: { width: a.width(), height: a.height() }),
						(this.originalSize = this._helper
							? { width: a.outerWidth(), height: a.outerHeight() }
							: { width: a.width(), height: a.height() }),
						(this.sizeDiff = {
							width: a.outerWidth() - a.width(),
							height: a.outerHeight() - a.height(),
						}),
						(this.originalPosition = { left: i, top: n }),
						(this.originalMousePosition = { left: e.pageX, top: e.pageY }),
						(this.aspectRatio =
							"number" == typeof o.aspectRatio
								? o.aspectRatio
								: this.originalSize.width / this.originalSize.height || 1),
						(s = t(".ui-resizable-" + this.axis).css("cursor")),
						t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
						this._addClass("ui-resizable-resizing"),
						this._propagate("start", e),
						!0
					);
				},
				_mouseDrag: function (e) {
					var i,
						n,
						s = this.originalMousePosition,
						o = this.axis,
						a = e.pageX - s.left || 0,
						r = e.pageY - s.top || 0,
						l = this._change[o];
					return (
						this._updatePrevProperties(),
						!!l &&
							((i = l.apply(this, [e, a, r])),
							this._updateVirtualBoundaries(e.shiftKey),
							(this._aspectRatio || e.shiftKey) &&
								(i = this._updateRatio(i, e)),
							(i = this._respectSize(i, e)),
							this._updateCache(i),
							this._propagate("resize", e),
							(n = this._applyChanges()),
							!this._helper &&
								this._proportionallyResizeElements.length &&
								this._proportionallyResize(),
							t.isEmptyObject(n) ||
								(this._updatePrevProperties(),
								this._trigger("resize", e, this.ui()),
								this._applyChanges()),
							!1)
					);
				},
				_mouseStop: function (e) {
					this.resizing = !1;
					var i,
						n,
						s,
						o,
						a,
						r,
						l,
						h = this.options,
						c = this;
					return (
						this._helper &&
							((s =
								(n =
									(i = this._proportionallyResizeElements).length &&
									/textarea/i.test(i[0].nodeName)) &&
								this._hasScroll(i[0], "left")
									? 0
									: c.sizeDiff.height),
							(o = n ? 0 : c.sizeDiff.width),
							(a = {
								width: c.helper.width() - o,
								height: c.helper.height() - s,
							}),
							(r =
								parseFloat(c.element.css("left")) +
									(c.position.left - c.originalPosition.left) || null),
							(l =
								parseFloat(c.element.css("top")) +
									(c.position.top - c.originalPosition.top) || null),
							h.animate || this.element.css(t.extend(a, { top: l, left: r })),
							c.helper.height(c.size.height),
							c.helper.width(c.size.width),
							this._helper && !h.animate && this._proportionallyResize()),
						t("body").css("cursor", "auto"),
						this._removeClass("ui-resizable-resizing"),
						this._propagate("stop", e),
						this._helper && this.helper.remove(),
						!1
					);
				},
				_updatePrevProperties: function () {
					(this.prevPosition = {
						top: this.position.top,
						left: this.position.left,
					}),
						(this.prevSize = {
							width: this.size.width,
							height: this.size.height,
						});
				},
				_applyChanges: function () {
					var t = {};
					return (
						this.position.top !== this.prevPosition.top &&
							(t.top = this.position.top + "px"),
						this.position.left !== this.prevPosition.left &&
							(t.left = this.position.left + "px"),
						this.size.width !== this.prevSize.width &&
							(t.width = this.size.width + "px"),
						this.size.height !== this.prevSize.height &&
							(t.height = this.size.height + "px"),
						this.helper.css(t),
						t
					);
				},
				_updateVirtualBoundaries: function (t) {
					var e,
						i,
						n,
						s,
						o,
						a = this.options;
					(o = {
						minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
						maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
						minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
						maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
					}),
						(this._aspectRatio || t) &&
							((e = o.minHeight * this.aspectRatio),
							(n = o.minWidth / this.aspectRatio),
							(i = o.maxHeight * this.aspectRatio),
							(s = o.maxWidth / this.aspectRatio),
							e > o.minWidth && (o.minWidth = e),
							n > o.minHeight && (o.minHeight = n),
							o.maxWidth > i && (o.maxWidth = i),
							o.maxHeight > s && (o.maxHeight = s)),
						(this._vBoundaries = o);
				},
				_updateCache: function (t) {
					(this.offset = this.helper.offset()),
						this._isNumber(t.left) && (this.position.left = t.left),
						this._isNumber(t.top) && (this.position.top = t.top),
						this._isNumber(t.height) && (this.size.height = t.height),
						this._isNumber(t.width) && (this.size.width = t.width);
				},
				_updateRatio: function (t) {
					var e = this.position,
						i = this.size,
						n = this.axis;
					return (
						this._isNumber(t.height)
							? (t.width = t.height * this.aspectRatio)
							: this._isNumber(t.width) &&
							  (t.height = t.width / this.aspectRatio),
						"sw" === n &&
							((t.left = e.left + (i.width - t.width)), (t.top = null)),
						"nw" === n &&
							((t.top = e.top + (i.height - t.height)),
							(t.left = e.left + (i.width - t.width))),
						t
					);
				},
				_respectSize: function (t) {
					var e = this._vBoundaries,
						i = this.axis,
						n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
						s =
							this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
						o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
						a =
							this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
						r = this.originalPosition.left + this.originalSize.width,
						l = this.originalPosition.top + this.originalSize.height,
						h = /sw|nw|w/.test(i),
						c = /nw|ne|n/.test(i);
					return (
						o && (t.width = e.minWidth),
						a && (t.height = e.minHeight),
						n && (t.width = e.maxWidth),
						s && (t.height = e.maxHeight),
						o && h && (t.left = r - e.minWidth),
						n && h && (t.left = r - e.maxWidth),
						a && c && (t.top = l - e.minHeight),
						s && c && (t.top = l - e.maxHeight),
						t.width || t.height || t.left || !t.top
							? t.width || t.height || t.top || !t.left || (t.left = null)
							: (t.top = null),
						t
					);
				},
				_getPaddingPlusBorderDimensions: function (t) {
					for (
						var e = 0,
							i = [],
							n = [
								t.css("borderTopWidth"),
								t.css("borderRightWidth"),
								t.css("borderBottomWidth"),
								t.css("borderLeftWidth"),
							],
							s = [
								t.css("paddingTop"),
								t.css("paddingRight"),
								t.css("paddingBottom"),
								t.css("paddingLeft"),
							];
						4 > e;
						e++
					)
						(i[e] = parseFloat(n[e]) || 0), (i[e] += parseFloat(s[e]) || 0);
					return { height: i[0] + i[2], width: i[1] + i[3] };
				},
				_proportionallyResize: function () {
					if (this._proportionallyResizeElements.length)
						for (
							var t, e = 0, i = this.helper || this.element;
							this._proportionallyResizeElements.length > e;
							e++
						)
							(t = this._proportionallyResizeElements[e]),
								this.outerDimensions ||
									(this.outerDimensions =
										this._getPaddingPlusBorderDimensions(t)),
								t.css({
									height: i.height() - this.outerDimensions.height || 0,
									width: i.width() - this.outerDimensions.width || 0,
								});
				},
				_renderProxy: function () {
					var e = this.element,
						i = this.options;
					(this.elementOffset = e.offset()),
						this._helper
							? ((this.helper =
									this.helper || t("<div style='overflow:hidden;'></div>")),
							  this._addClass(this.helper, this._helper),
							  this.helper.css({
									width: this.element.outerWidth(),
									height: this.element.outerHeight(),
									position: "absolute",
									left: this.elementOffset.left + "px",
									top: this.elementOffset.top + "px",
									zIndex: ++i.zIndex,
							  }),
							  this.helper.appendTo("body").disableSelection())
							: (this.helper = this.element);
				},
				_change: {
					e: function (t, e) {
						return { width: this.originalSize.width + e };
					},
					w: function (t, e) {
						var i = this.originalSize;
						return { left: this.originalPosition.left + e, width: i.width - e };
					},
					n: function (t, e, i) {
						var n = this.originalSize;
						return { top: this.originalPosition.top + i, height: n.height - i };
					},
					s: function (t, e, i) {
						return { height: this.originalSize.height + i };
					},
					se: function (e, i, n) {
						return t.extend(
							this._change.s.apply(this, arguments),
							this._change.e.apply(this, [e, i, n])
						);
					},
					sw: function (e, i, n) {
						return t.extend(
							this._change.s.apply(this, arguments),
							this._change.w.apply(this, [e, i, n])
						);
					},
					ne: function (e, i, n) {
						return t.extend(
							this._change.n.apply(this, arguments),
							this._change.e.apply(this, [e, i, n])
						);
					},
					nw: function (e, i, n) {
						return t.extend(
							this._change.n.apply(this, arguments),
							this._change.w.apply(this, [e, i, n])
						);
					},
				},
				_propagate: function (e, i) {
					t.ui.plugin.call(this, e, [i, this.ui()]),
						"resize" !== e && this._trigger(e, i, this.ui());
				},
				plugins: {},
				ui: function () {
					return {
						originalElement: this.originalElement,
						element: this.element,
						helper: this.helper,
						position: this.position,
						size: this.size,
						originalSize: this.originalSize,
						originalPosition: this.originalPosition,
					};
				},
			}),
			t.ui.plugin.add("resizable", "animate", {
				stop: function (e) {
					var i = t(this).resizable("instance"),
						n = i.options,
						s = i._proportionallyResizeElements,
						o = s.length && /textarea/i.test(s[0].nodeName),
						a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
						r = o ? 0 : i.sizeDiff.width,
						l = { width: i.size.width - r, height: i.size.height - a },
						h =
							parseFloat(i.element.css("left")) +
								(i.position.left - i.originalPosition.left) || null,
						c =
							parseFloat(i.element.css("top")) +
								(i.position.top - i.originalPosition.top) || null;
					i.element.animate(t.extend(l, c && h ? { top: c, left: h } : {}), {
						duration: n.animateDuration,
						easing: n.animateEasing,
						step: function () {
							var n = {
								width: parseFloat(i.element.css("width")),
								height: parseFloat(i.element.css("height")),
								top: parseFloat(i.element.css("top")),
								left: parseFloat(i.element.css("left")),
							};
							s &&
								s.length &&
								t(s[0]).css({ width: n.width, height: n.height }),
								i._updateCache(n),
								i._propagate("resize", e);
						},
					});
				},
			}),
			t.ui.plugin.add("resizable", "containment", {
				start: function () {
					var e,
						i,
						n,
						s,
						o,
						a,
						r,
						l = t(this).resizable("instance"),
						h = l.options,
						c = l.element,
						u = h.containment,
						d =
							u instanceof t
								? u.get(0)
								: /parent/.test(u)
								? c.parent().get(0)
								: u;
					d &&
						((l.containerElement = t(d)),
						/document/.test(u) || u === document
							? ((l.containerOffset = { left: 0, top: 0 }),
							  (l.containerPosition = { left: 0, top: 0 }),
							  (l.parentData = {
									element: t(document),
									left: 0,
									top: 0,
									width: t(document).width(),
									height:
										t(document).height() ||
										document.body.parentNode.scrollHeight,
							  }))
							: ((e = t(d)),
							  (i = []),
							  t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
									i[t] = l._num(e.css("padding" + n));
							  }),
							  (l.containerOffset = e.offset()),
							  (l.containerPosition = e.position()),
							  (l.containerSize = {
									height: e.innerHeight() - i[3],
									width: e.innerWidth() - i[1],
							  }),
							  (n = l.containerOffset),
							  (s = l.containerSize.height),
							  (o = l.containerSize.width),
							  (a = l._hasScroll(d, "left") ? d.scrollWidth : o),
							  (r = l._hasScroll(d) ? d.scrollHeight : s),
							  (l.parentData = {
									element: d,
									left: n.left,
									top: n.top,
									width: a,
									height: r,
							  })));
				},
				resize: function (e) {
					var i,
						n,
						s,
						o,
						a = t(this).resizable("instance"),
						r = a.options,
						l = a.containerOffset,
						h = a.position,
						c = a._aspectRatio || e.shiftKey,
						u = { top: 0, left: 0 },
						d = a.containerElement,
						p = !0;
					d[0] !== document && /static/.test(d.css("position")) && (u = l),
						h.left < (a._helper ? l.left : 0) &&
							((a.size.width =
								a.size.width +
								(a._helper
									? a.position.left - l.left
									: a.position.left - u.left)),
							c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)),
							(a.position.left = r.helper ? l.left : 0)),
						h.top < (a._helper ? l.top : 0) &&
							((a.size.height =
								a.size.height +
								(a._helper ? a.position.top - l.top : a.position.top)),
							c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)),
							(a.position.top = a._helper ? l.top : 0)),
						(s = a.containerElement.get(0) === a.element.parent().get(0)),
						(o = /relative|absolute/.test(a.containerElement.css("position"))),
						s && o
							? ((a.offset.left = a.parentData.left + a.position.left),
							  (a.offset.top = a.parentData.top + a.position.top))
							: ((a.offset.left = a.element.offset().left),
							  (a.offset.top = a.element.offset().top)),
						(i = Math.abs(
							a.sizeDiff.width +
								(a._helper ? a.offset.left - u.left : a.offset.left - l.left)
						)),
						(n = Math.abs(
							a.sizeDiff.height +
								(a._helper ? a.offset.top - u.top : a.offset.top - l.top)
						)),
						i + a.size.width >= a.parentData.width &&
							((a.size.width = a.parentData.width - i),
							c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
						n + a.size.height >= a.parentData.height &&
							((a.size.height = a.parentData.height - n),
							c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
						p ||
							((a.position.left = a.prevPosition.left),
							(a.position.top = a.prevPosition.top),
							(a.size.width = a.prevSize.width),
							(a.size.height = a.prevSize.height));
				},
				stop: function () {
					var e = t(this).resizable("instance"),
						i = e.options,
						n = e.containerOffset,
						s = e.containerPosition,
						o = e.containerElement,
						a = t(e.helper),
						r = a.offset(),
						l = a.outerWidth() - e.sizeDiff.width,
						h = a.outerHeight() - e.sizeDiff.height;
					e._helper &&
						!i.animate &&
						/relative/.test(o.css("position")) &&
						t(this).css({
							left: r.left - s.left - n.left,
							width: l,
							height: h,
						}),
						e._helper &&
							!i.animate &&
							/static/.test(o.css("position")) &&
							t(this).css({
								left: r.left - s.left - n.left,
								width: l,
								height: h,
							});
				},
			}),
			t.ui.plugin.add("resizable", "alsoResize", {
				start: function () {
					var e = t(this).resizable("instance").options;
					t(e.alsoResize).each(function () {
						var e = t(this);
						e.data("ui-resizable-alsoresize", {
							width: parseFloat(e.width()),
							height: parseFloat(e.height()),
							left: parseFloat(e.css("left")),
							top: parseFloat(e.css("top")),
						});
					});
				},
				resize: function (e, i) {
					var n = t(this).resizable("instance"),
						s = n.options,
						o = n.originalSize,
						a = n.originalPosition,
						r = {
							height: n.size.height - o.height || 0,
							width: n.size.width - o.width || 0,
							top: n.position.top - a.top || 0,
							left: n.position.left - a.left || 0,
						};
					t(s.alsoResize).each(function () {
						var e = t(this),
							n = t(this).data("ui-resizable-alsoresize"),
							s = {},
							o = e.parents(i.originalElement[0]).length
								? ["width", "height"]
								: ["width", "height", "top", "left"];
						t.each(o, function (t, e) {
							var i = (n[e] || 0) + (r[e] || 0);
							i && i >= 0 && (s[e] = i || null);
						}),
							e.css(s);
					});
				},
				stop: function () {
					t(this).removeData("ui-resizable-alsoresize");
				},
			}),
			t.ui.plugin.add("resizable", "ghost", {
				start: function () {
					var e = t(this).resizable("instance"),
						i = e.size;
					(e.ghost = e.originalElement.clone()),
						e.ghost.css({
							opacity: 0.25,
							display: "block",
							position: "relative",
							height: i.height,
							width: i.width,
							margin: 0,
							left: 0,
							top: 0,
						}),
						e._addClass(e.ghost, "ui-resizable-ghost"),
						!1 !== t.uiBackCompat &&
							"string" == typeof e.options.ghost &&
							e.ghost.addClass(this.options.ghost),
						e.ghost.appendTo(e.helper);
				},
				resize: function () {
					var e = t(this).resizable("instance");
					e.ghost &&
						e.ghost.css({
							position: "relative",
							height: e.size.height,
							width: e.size.width,
						});
				},
				stop: function () {
					var e = t(this).resizable("instance");
					e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
				},
			}),
			t.ui.plugin.add("resizable", "grid", {
				resize: function () {
					var e,
						i = t(this).resizable("instance"),
						n = i.options,
						s = i.size,
						o = i.originalSize,
						a = i.originalPosition,
						r = i.axis,
						l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
						h = l[0] || 1,
						c = l[1] || 1,
						u = Math.round((s.width - o.width) / h) * h,
						d = Math.round((s.height - o.height) / c) * c,
						p = o.width + u,
						f = o.height + d,
						g = n.maxWidth && p > n.maxWidth,
						m = n.maxHeight && f > n.maxHeight,
						v = n.minWidth && n.minWidth > p,
						_ = n.minHeight && n.minHeight > f;
					(n.grid = l),
						v && (p += h),
						_ && (f += c),
						g && (p -= h),
						m && (f -= c),
						/^(se|s|e)$/.test(r)
							? ((i.size.width = p), (i.size.height = f))
							: /^(ne)$/.test(r)
							? ((i.size.width = p),
							  (i.size.height = f),
							  (i.position.top = a.top - d))
							: /^(sw)$/.test(r)
							? ((i.size.width = p),
							  (i.size.height = f),
							  (i.position.left = a.left - u))
							: ((0 >= f - c || 0 >= p - h) &&
									(e = i._getPaddingPlusBorderDimensions(this)),
							  f - c > 0
									? ((i.size.height = f), (i.position.top = a.top - d))
									: ((f = c - e.height),
									  (i.size.height = f),
									  (i.position.top = a.top + o.height - f)),
							  p - h > 0
									? ((i.size.width = p), (i.position.left = a.left - u))
									: ((p = h - e.width),
									  (i.size.width = p),
									  (i.position.left = a.left + o.width - p)));
				},
			}),
			t.ui.resizable,
			t.widget("ui.dialog", {
				version: "1.12.1",
				options: {
					appendTo: "body",
					autoOpen: !0,
					buttons: [],
					classes: {
						"ui-dialog": "ui-corner-all",
						"ui-dialog-titlebar": "ui-corner-all",
					},
					closeOnEscape: !0,
					closeText: "Close",
					draggable: !0,
					hide: null,
					height: "auto",
					maxHeight: null,
					maxWidth: null,
					minHeight: 150,
					minWidth: 150,
					modal: !1,
					position: {
						my: "center",
						at: "center",
						of: window,
						collision: "fit",
						using: function (e) {
							var i = t(this).css(e).offset().top;
							0 > i && t(this).css("top", e.top - i);
						},
					},
					resizable: !0,
					show: null,
					title: null,
					width: 300,
					beforeClose: null,
					close: null,
					drag: null,
					dragStart: null,
					dragStop: null,
					focus: null,
					open: null,
					resize: null,
					resizeStart: null,
					resizeStop: null,
				},
				sizeRelatedOptions: {
					buttons: !0,
					height: !0,
					maxHeight: !0,
					maxWidth: !0,
					minHeight: !0,
					minWidth: !0,
					width: !0,
				},
				resizableRelatedOptions: {
					maxHeight: !0,
					maxWidth: !0,
					minHeight: !0,
					minWidth: !0,
				},
				_create: function () {
					(this.originalCss = {
						display: this.element[0].style.display,
						width: this.element[0].style.width,
						minHeight: this.element[0].style.minHeight,
						maxHeight: this.element[0].style.maxHeight,
						height: this.element[0].style.height,
					}),
						(this.originalPosition = {
							parent: this.element.parent(),
							index: this.element.parent().children().index(this.element),
						}),
						(this.originalTitle = this.element.attr("title")),
						null == this.options.title &&
							null != this.originalTitle &&
							(this.options.title = this.originalTitle),
						this.options.disabled && (this.options.disabled = !1),
						this._createWrapper(),
						this.element.show().removeAttr("title").appendTo(this.uiDialog),
						this._addClass("ui-dialog-content", "ui-widget-content"),
						this._createTitlebar(),
						this._createButtonPane(),
						this.options.draggable && t.fn.draggable && this._makeDraggable(),
						this.options.resizable && t.fn.resizable && this._makeResizable(),
						(this._isOpen = !1),
						this._trackFocus();
				},
				_init: function () {
					this.options.autoOpen && this.open();
				},
				_appendTo: function () {
					var e = this.options.appendTo;
					return e && (e.jquery || e.nodeType)
						? t(e)
						: this.document.find(e || "body").eq(0);
				},
				_destroy: function () {
					var t,
						e = this.originalPosition;
					this._untrackInstance(),
						this._destroyOverlay(),
						this.element.removeUniqueId().css(this.originalCss).detach(),
						this.uiDialog.remove(),
						this.originalTitle &&
							this.element.attr("title", this.originalTitle),
						(t = e.parent.children().eq(e.index)).length &&
						t[0] !== this.element[0]
							? t.before(this.element)
							: e.parent.append(this.element);
				},
				widget: function () {
					return this.uiDialog;
				},
				disable: t.noop,
				enable: t.noop,
				close: function (e) {
					var i = this;
					this._isOpen &&
						!1 !== this._trigger("beforeClose", e) &&
						((this._isOpen = !1),
						(this._focusedElement = null),
						this._destroyOverlay(),
						this._untrackInstance(),
						this.opener.filter(":focusable").trigger("focus").length ||
							t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
						this._hide(this.uiDialog, this.options.hide, function () {
							i._trigger("close", e);
						}));
				},
				isOpen: function () {
					return this._isOpen;
				},
				moveToTop: function () {
					this._moveToTop();
				},
				_moveToTop: function (e, i) {
					var n = !1,
						s = this.uiDialog
							.siblings(".ui-front:visible")
							.map(function () {
								return +t(this).css("z-index");
							})
							.get(),
						o = Math.max.apply(null, s);
					return (
						o >= +this.uiDialog.css("z-index") &&
							(this.uiDialog.css("z-index", o + 1), (n = !0)),
						n && !i && this._trigger("focus", e),
						n
					);
				},
				open: function () {
					var e = this;
					return this._isOpen
						? void (this._moveToTop() && this._focusTabbable())
						: ((this._isOpen = !0),
						  (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
						  this._size(),
						  this._position(),
						  this._createOverlay(),
						  this._moveToTop(null, !0),
						  this.overlay &&
								this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
						  this._show(this.uiDialog, this.options.show, function () {
								e._focusTabbable(), e._trigger("focus");
						  }),
						  this._makeFocusTarget(),
						  void this._trigger("open"));
				},
				_focusTabbable: function () {
					var t = this._focusedElement;
					t || (t = this.element.find("[autofocus]")),
						t.length || (t = this.element.find(":tabbable")),
						t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
						t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
						t.length || (t = this.uiDialog),
						t.eq(0).trigger("focus");
				},
				_keepFocus: function (e) {
					function i() {
						var e = t.ui.safeActiveElement(this.document[0]);
						this.uiDialog[0] === e ||
							t.contains(this.uiDialog[0], e) ||
							this._focusTabbable();
					}
					e.preventDefault(), i.call(this), this._delay(i);
				},
				_createWrapper: function () {
					(this.uiDialog = t("<div>")
						.hide()
						.attr({ tabIndex: -1, role: "dialog" })
						.appendTo(this._appendTo())),
						this._addClass(
							this.uiDialog,
							"ui-dialog",
							"ui-widget ui-widget-content ui-front"
						),
						this._on(this.uiDialog, {
							keydown: function (e) {
								if (
									this.options.closeOnEscape &&
									!e.isDefaultPrevented() &&
									e.keyCode &&
									e.keyCode === t.ui.keyCode.ESCAPE
								)
									return e.preventDefault(), void this.close(e);
								if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
									var i = this.uiDialog.find(":tabbable"),
										n = i.filter(":first"),
										s = i.filter(":last");
									(e.target !== s[0] && e.target !== this.uiDialog[0]) ||
									e.shiftKey
										? (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
										  !e.shiftKey ||
										  (this._delay(function () {
												s.trigger("focus");
										  }),
										  e.preventDefault())
										: (this._delay(function () {
												n.trigger("focus");
										  }),
										  e.preventDefault());
								}
							},
							mousedown: function (t) {
								this._moveToTop(t) && this._focusTabbable();
							},
						}),
						this.element.find("[aria-describedby]").length ||
							this.uiDialog.attr({
								"aria-describedby": this.element.uniqueId().attr("id"),
							});
				},
				_createTitlebar: function () {
					var e;
					(this.uiDialogTitlebar = t("<div>")),
						this._addClass(
							this.uiDialogTitlebar,
							"ui-dialog-titlebar",
							"ui-widget-header ui-helper-clearfix"
						),
						this._on(this.uiDialogTitlebar, {
							mousedown: function (e) {
								t(e.target).closest(".ui-dialog-titlebar-close") ||
									this.uiDialog.trigger("focus");
							},
						}),
						(this.uiDialogTitlebarClose = t("<button type='button'></button>")
							.button({
								label: t("<a>").text(this.options.closeText).html(),
								icon: "ui-icon-closethick",
								showLabel: !1,
							})
							.appendTo(this.uiDialogTitlebar)),
						this._addClass(
							this.uiDialogTitlebarClose,
							"ui-dialog-titlebar-close"
						),
						this._on(this.uiDialogTitlebarClose, {
							click: function (t) {
								t.preventDefault(), this.close(t);
							},
						}),
						(e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
						this._addClass(e, "ui-dialog-title"),
						this._title(e),
						this.uiDialogTitlebar.prependTo(this.uiDialog),
						this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
				},
				_title: function (t) {
					this.options.title ? t.text(this.options.title) : t.html("&#160;");
				},
				_createButtonPane: function () {
					(this.uiDialogButtonPane = t("<div>")),
						this._addClass(
							this.uiDialogButtonPane,
							"ui-dialog-buttonpane",
							"ui-widget-content ui-helper-clearfix"
						),
						(this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane)),
						this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
						this._createButtons();
				},
				_createButtons: function () {
					var e = this,
						i = this.options.buttons;
					return (
						this.uiDialogButtonPane.remove(),
						this.uiButtonSet.empty(),
						t.isEmptyObject(i) || (t.isArray(i) && !i.length)
							? void this._removeClass(this.uiDialog, "ui-dialog-buttons")
							: (t.each(i, function (i, n) {
									var s, o;
									(n = t.isFunction(n) ? { click: n, text: i } : n),
										(n = t.extend({ type: "button" }, n)),
										(s = n.click),
										(o = {
											icon: n.icon,
											iconPosition: n.iconPosition,
											showLabel: n.showLabel,
											icons: n.icons,
											text: n.text,
										}),
										delete n.click,
										delete n.icon,
										delete n.iconPosition,
										delete n.showLabel,
										delete n.icons,
										"boolean" == typeof n.text && delete n.text,
										t("<button></button>", n)
											.button(o)
											.appendTo(e.uiButtonSet)
											.on("click", function () {
												s.apply(e.element[0], arguments);
											});
							  }),
							  this._addClass(this.uiDialog, "ui-dialog-buttons"),
							  void this.uiDialogButtonPane.appendTo(this.uiDialog))
					);
				},
				_makeDraggable: function () {
					function e(t) {
						return { position: t.position, offset: t.offset };
					}
					var i = this,
						n = this.options;
					this.uiDialog.draggable({
						cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
						handle: ".ui-dialog-titlebar",
						containment: "document",
						start: function (n, s) {
							i._addClass(t(this), "ui-dialog-dragging"),
								i._blockFrames(),
								i._trigger("dragStart", n, e(s));
						},
						drag: function (t, n) {
							i._trigger("drag", t, e(n));
						},
						stop: function (s, o) {
							var a = o.offset.left - i.document.scrollLeft(),
								r = o.offset.top - i.document.scrollTop();
							(n.position = {
								my: "left top",
								at:
									"left" +
									(a >= 0 ? "+" : "") +
									a +
									" top" +
									(r >= 0 ? "+" : "") +
									r,
								of: i.window,
							}),
								i._removeClass(t(this), "ui-dialog-dragging"),
								i._unblockFrames(),
								i._trigger("dragStop", s, e(o));
						},
					});
				},
				_makeResizable: function () {
					function e(t) {
						return {
							originalPosition: t.originalPosition,
							originalSize: t.originalSize,
							position: t.position,
							size: t.size,
						};
					}
					var i = this,
						n = this.options,
						s = n.resizable,
						o = this.uiDialog.css("position"),
						a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
					this.uiDialog
						.resizable({
							cancel: ".ui-dialog-content",
							containment: "document",
							alsoResize: this.element,
							maxWidth: n.maxWidth,
							maxHeight: n.maxHeight,
							minWidth: n.minWidth,
							minHeight: this._minHeight(),
							handles: a,
							start: function (n, s) {
								i._addClass(t(this), "ui-dialog-resizing"),
									i._blockFrames(),
									i._trigger("resizeStart", n, e(s));
							},
							resize: function (t, n) {
								i._trigger("resize", t, e(n));
							},
							stop: function (s, o) {
								var a = i.uiDialog.offset(),
									r = a.left - i.document.scrollLeft(),
									l = a.top - i.document.scrollTop();
								(n.height = i.uiDialog.height()),
									(n.width = i.uiDialog.width()),
									(n.position = {
										my: "left top",
										at:
											"left" +
											(r >= 0 ? "+" : "") +
											r +
											" top" +
											(l >= 0 ? "+" : "") +
											l,
										of: i.window,
									}),
									i._removeClass(t(this), "ui-dialog-resizing"),
									i._unblockFrames(),
									i._trigger("resizeStop", s, e(o));
							},
						})
						.css("position", o);
				},
				_trackFocus: function () {
					this._on(this.widget(), {
						focusin: function (e) {
							this._makeFocusTarget(), (this._focusedElement = t(e.target));
						},
					});
				},
				_makeFocusTarget: function () {
					this._untrackInstance(), this._trackingInstances().unshift(this);
				},
				_untrackInstance: function () {
					var e = this._trackingInstances(),
						i = t.inArray(this, e);
					-1 !== i && e.splice(i, 1);
				},
				_trackingInstances: function () {
					var t = this.document.data("ui-dialog-instances");
					return (
						t || ((t = []), this.document.data("ui-dialog-instances", t)), t
					);
				},
				_minHeight: function () {
					var t = this.options;
					return "auto" === t.height
						? t.minHeight
						: Math.min(t.minHeight, t.height);
				},
				_position: function () {
					var t = this.uiDialog.is(":visible");
					t || this.uiDialog.show(),
						this.uiDialog.position(this.options.position),
						t || this.uiDialog.hide();
				},
				_setOptions: function (e) {
					var i = this,
						n = !1,
						s = {};
					t.each(e, function (t, e) {
						i._setOption(t, e),
							t in i.sizeRelatedOptions && (n = !0),
							t in i.resizableRelatedOptions && (s[t] = e);
					}),
						n && (this._size(), this._position()),
						this.uiDialog.is(":data(ui-resizable)") &&
							this.uiDialog.resizable("option", s);
				},
				_setOption: function (e, i) {
					var n,
						s,
						o = this.uiDialog;
					"disabled" !== e &&
						(this._super(e, i),
						"appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
						"buttons" === e && this._createButtons(),
						"closeText" === e &&
							this.uiDialogTitlebarClose.button({
								label: t("<a>")
									.text("" + this.options.closeText)
									.html(),
							}),
						"draggable" === e &&
							((n = o.is(":data(ui-draggable)")) &&
								!i &&
								o.draggable("destroy"),
							!n && i && this._makeDraggable()),
						"position" === e && this._position(),
						"resizable" === e &&
							((s = o.is(":data(ui-resizable)")) &&
								!i &&
								o.resizable("destroy"),
							s && "string" == typeof i && o.resizable("option", "handles", i),
							s || !1 === i || this._makeResizable()),
						"title" === e &&
							this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
				},
				_size: function () {
					var t,
						e,
						i,
						n = this.options;
					this.element
						.show()
						.css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
						n.minWidth > n.width && (n.width = n.minWidth),
						(t = this.uiDialog
							.css({ height: "auto", width: n.width })
							.outerHeight()),
						(e = Math.max(0, n.minHeight - t)),
						(i =
							"number" == typeof n.maxHeight
								? Math.max(0, n.maxHeight - t)
								: "none"),
						"auto" === n.height
							? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
							: this.element.height(Math.max(0, n.height - t)),
						this.uiDialog.is(":data(ui-resizable)") &&
							this.uiDialog.resizable("option", "minHeight", this._minHeight());
				},
				_blockFrames: function () {
					this.iframeBlocks = this.document.find("iframe").map(function () {
						var e = t(this);
						return t("<div>")
							.css({
								position: "absolute",
								width: e.outerWidth(),
								height: e.outerHeight(),
							})
							.appendTo(e.parent())
							.offset(e.offset())[0];
					});
				},
				_unblockFrames: function () {
					this.iframeBlocks &&
						(this.iframeBlocks.remove(), delete this.iframeBlocks);
				},
				_allowInteraction: function (e) {
					return (
						!!t(e.target).closest(".ui-dialog").length ||
						!!t(e.target).closest(".ui-datepicker").length
					);
				},
				_createOverlay: function () {
					if (this.options.modal) {
						var e = !0;
						this._delay(function () {
							e = !1;
						}),
							this.document.data("ui-dialog-overlays") ||
								this._on(this.document, {
									focusin: function (t) {
										e ||
											this._allowInteraction(t) ||
											(t.preventDefault(),
											this._trackingInstances()[0]._focusTabbable());
									},
								}),
							(this.overlay = t("<div>").appendTo(this._appendTo())),
							this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
							this._on(this.overlay, { mousedown: "_keepFocus" }),
							this.document.data(
								"ui-dialog-overlays",
								(this.document.data("ui-dialog-overlays") || 0) + 1
							);
					}
				},
				_destroyOverlay: function () {
					if (this.options.modal && this.overlay) {
						var t = this.document.data("ui-dialog-overlays") - 1;
						t
							? this.document.data("ui-dialog-overlays", t)
							: (this._off(this.document, "focusin"),
							  this.document.removeData("ui-dialog-overlays")),
							this.overlay.remove(),
							(this.overlay = null);
					}
				},
			}),
			!1 !== t.uiBackCompat &&
				t.widget("ui.dialog", t.ui.dialog, {
					options: { dialogClass: "" },
					_createWrapper: function () {
						this._super(), this.uiDialog.addClass(this.options.dialogClass);
					},
					_setOption: function (t, e) {
						"dialogClass" === t &&
							this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
							this._superApply(arguments);
					},
				}),
			t.ui.dialog,
			t.widget("ui.droppable", {
				version: "1.12.1",
				widgetEventPrefix: "drop",
				options: {
					accept: "*",
					addClasses: !0,
					greedy: !1,
					scope: "default",
					tolerance: "intersect",
					activate: null,
					deactivate: null,
					drop: null,
					out: null,
					over: null,
				},
				_create: function () {
					var e,
						i = this.options,
						n = i.accept;
					(this.isover = !1),
						(this.isout = !0),
						(this.accept = t.isFunction(n)
							? n
							: function (t) {
									return t.is(n);
							  }),
						(this.proportions = function () {
							return arguments.length
								? void (e = arguments[0])
								: e ||
										(e = {
											width: this.element[0].offsetWidth,
											height: this.element[0].offsetHeight,
										});
						}),
						this._addToManager(i.scope),
						i.addClasses && this._addClass("ui-droppable");
				},
				_addToManager: function (e) {
					(t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
						t.ui.ddmanager.droppables[e].push(this);
				},
				_splice: function (t) {
					for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
				},
				_destroy: function () {
					var e = t.ui.ddmanager.droppables[this.options.scope];
					this._splice(e);
				},
				_setOption: function (e, i) {
					if ("accept" === e)
						this.accept = t.isFunction(i)
							? i
							: function (t) {
									return t.is(i);
							  };
					else if ("scope" === e) {
						var n = t.ui.ddmanager.droppables[this.options.scope];
						this._splice(n), this._addToManager(i);
					}
					this._super(e, i);
				},
				_activate: function (e) {
					var i = t.ui.ddmanager.current;
					this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
				},
				_deactivate: function (e) {
					var i = t.ui.ddmanager.current;
					this._removeActiveClass(),
						i && this._trigger("deactivate", e, this.ui(i));
				},
				_over: function (e) {
					var i = t.ui.ddmanager.current;
					i &&
						(i.currentItem || i.element)[0] !== this.element[0] &&
						this.accept.call(this.element[0], i.currentItem || i.element) &&
						(this._addHoverClass(), this._trigger("over", e, this.ui(i)));
				},
				_out: function (e) {
					var i = t.ui.ddmanager.current;
					i &&
						(i.currentItem || i.element)[0] !== this.element[0] &&
						this.accept.call(this.element[0], i.currentItem || i.element) &&
						(this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
				},
				_drop: function (e, i) {
					var n = i || t.ui.ddmanager.current,
						s = !1;
					return (
						!(!n || (n.currentItem || n.element)[0] === this.element[0]) &&
						(this.element
							.find(":data(ui-droppable)")
							.not(".ui-draggable-dragging")
							.each(function () {
								var i = t(this).droppable("instance");
								return i.options.greedy &&
									!i.options.disabled &&
									i.options.scope === n.options.scope &&
									i.accept.call(i.element[0], n.currentItem || n.element) &&
									g(
										n,
										t.extend(i, { offset: i.element.offset() }),
										i.options.tolerance,
										e
									)
									? ((s = !0), !1)
									: void 0;
							}),
						!s &&
							!!this.accept.call(this.element[0], n.currentItem || n.element) &&
							(this._removeActiveClass(),
							this._removeHoverClass(),
							this._trigger("drop", e, this.ui(n)),
							this.element))
					);
				},
				ui: function (t) {
					return {
						draggable: t.currentItem || t.element,
						helper: t.helper,
						position: t.position,
						offset: t.positionAbs,
					};
				},
				_addHoverClass: function () {
					this._addClass("ui-droppable-hover");
				},
				_removeHoverClass: function () {
					this._removeClass("ui-droppable-hover");
				},
				_addActiveClass: function () {
					this._addClass("ui-droppable-active");
				},
				_removeActiveClass: function () {
					this._removeClass("ui-droppable-active");
				},
			});
		var g = (t.ui.intersect = (function () {
			function t(t, e, i) {
				return t >= e && e + i > t;
			}
			return function (e, i, n, s) {
				if (!i.offset) return !1;
				var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
					a = (e.positionAbs || e.position.absolute).top + e.margins.top,
					r = o + e.helperProportions.width,
					l = a + e.helperProportions.height,
					h = i.offset.left,
					c = i.offset.top,
					u = h + i.proportions().width,
					d = c + i.proportions().height;
				switch (n) {
					case "fit":
						return o >= h && u >= r && a >= c && d >= l;
					case "intersect":
						return (
							o + e.helperProportions.width / 2 > h &&
							u > r - e.helperProportions.width / 2 &&
							a + e.helperProportions.height / 2 > c &&
							d > l - e.helperProportions.height / 2
						);
					case "pointer":
						return (
							t(s.pageY, c, i.proportions().height) &&
							t(s.pageX, h, i.proportions().width)
						);
					case "touch":
						return (
							((a >= c && d >= a) || (l >= c && d >= l) || (c > a && l > d)) &&
							((o >= h && u >= o) || (r >= h && u >= r) || (h > o && r > u))
						);
					default:
						return !1;
				}
			};
		})());
		(t.ui.ddmanager = {
			current: null,
			droppables: { default: [] },
			prepareOffsets: function (e, i) {
				var n,
					s,
					o = t.ui.ddmanager.droppables[e.options.scope] || [],
					a = i ? i.type : null,
					r = (e.currentItem || e.element)
						.find(":data(ui-droppable)")
						.addBack();
				t: for (n = 0; o.length > n; n++)
					if (
						!(
							o[n].options.disabled ||
							(e &&
								!o[n].accept.call(o[n].element[0], e.currentItem || e.element))
						)
					) {
						for (s = 0; r.length > s; s++)
							if (r[s] === o[n].element[0]) {
								o[n].proportions().height = 0;
								continue t;
							}
						(o[n].visible = "none" !== o[n].element.css("display")),
							o[n].visible &&
								("mousedown" === a && o[n]._activate.call(o[n], i),
								(o[n].offset = o[n].element.offset()),
								o[n].proportions({
									width: o[n].element[0].offsetWidth,
									height: o[n].element[0].offsetHeight,
								}));
					}
			},
			drop: function (e, i) {
				var n = !1;
				return (
					t.each(
						(t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
						function () {
							this.options &&
								(!this.options.disabled &&
									this.visible &&
									g(e, this, this.options.tolerance, i) &&
									(n = this._drop.call(this, i) || n),
								!this.options.disabled &&
									this.visible &&
									this.accept.call(
										this.element[0],
										e.currentItem || e.element
									) &&
									((this.isout = !0),
									(this.isover = !1),
									this._deactivate.call(this, i)));
						}
					),
					n
				);
			},
			dragStart: function (e, i) {
				e.element.parentsUntil("body").on("scroll.droppable", function () {
					e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
				});
			},
			drag: function (e, i) {
				e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
					t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
						if (!this.options.disabled && !this.greedyChild && this.visible) {
							var n,
								s,
								o,
								a = g(e, this, this.options.tolerance, i),
								r =
									!a && this.isover
										? "isout"
										: a && !this.isover
										? "isover"
										: null;
							r &&
								(this.options.greedy &&
									((s = this.options.scope),
									(o = this.element
										.parents(":data(ui-droppable)")
										.filter(function () {
											return t(this).droppable("instance").options.scope === s;
										})).length &&
										((n = t(o[0]).droppable("instance")).greedyChild =
											"isover" === r)),
								n &&
									"isover" === r &&
									((n.isover = !1), (n.isout = !0), n._out.call(n, i)),
								(this[r] = !0),
								(this["isout" === r ? "isover" : "isout"] = !1),
								this["isover" === r ? "_over" : "_out"].call(this, i),
								n &&
									"isout" === r &&
									((n.isout = !1), (n.isover = !0), n._over.call(n, i)));
						}
					});
			},
			dragStop: function (e, i) {
				e.element.parentsUntil("body").off("scroll.droppable"),
					e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
			},
		}),
			!1 !== t.uiBackCompat &&
				t.widget("ui.droppable", t.ui.droppable, {
					options: { hoverClass: !1, activeClass: !1 },
					_addActiveClass: function () {
						this._super(),
							this.options.activeClass &&
								this.element.addClass(this.options.activeClass);
					},
					_removeActiveClass: function () {
						this._super(),
							this.options.activeClass &&
								this.element.removeClass(this.options.activeClass);
					},
					_addHoverClass: function () {
						this._super(),
							this.options.hoverClass &&
								this.element.addClass(this.options.hoverClass);
					},
					_removeHoverClass: function () {
						this._super(),
							this.options.hoverClass &&
								this.element.removeClass(this.options.hoverClass);
					},
				}),
			t.ui.droppable,
			t.widget("ui.progressbar", {
				version: "1.12.1",
				options: {
					classes: {
						"ui-progressbar": "ui-corner-all",
						"ui-progressbar-value": "ui-corner-left",
						"ui-progressbar-complete": "ui-corner-right",
					},
					max: 100,
					value: 0,
					change: null,
					complete: null,
				},
				min: 0,
				_create: function () {
					(this.oldValue = this.options.value = this._constrainedValue()),
						this.element.attr({
							role: "progressbar",
							"aria-valuemin": this.min,
						}),
						this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
						(this.valueDiv = t("<div>").appendTo(this.element)),
						this._addClass(
							this.valueDiv,
							"ui-progressbar-value",
							"ui-widget-header"
						),
						this._refreshValue();
				},
				_destroy: function () {
					this.element.removeAttr(
						"role aria-valuemin aria-valuemax aria-valuenow"
					),
						this.valueDiv.remove();
				},
				value: function (t) {
					return void 0 === t
						? this.options.value
						: ((this.options.value = this._constrainedValue(t)),
						  void this._refreshValue());
				},
				_constrainedValue: function (t) {
					return (
						void 0 === t && (t = this.options.value),
						(this.indeterminate = !1 === t),
						"number" != typeof t && (t = 0),
						!this.indeterminate &&
							Math.min(this.options.max, Math.max(this.min, t))
					);
				},
				_setOptions: function (t) {
					var e = t.value;
					delete t.value,
						this._super(t),
						(this.options.value = this._constrainedValue(e)),
						this._refreshValue();
				},
				_setOption: function (t, e) {
					"max" === t && (e = Math.max(this.min, e)), this._super(t, e);
				},
				_setOptionDisabled: function (t) {
					this._super(t),
						this.element.attr("aria-disabled", t),
						this._toggleClass(null, "ui-state-disabled", !!t);
				},
				_percentage: function () {
					return this.indeterminate
						? 100
						: (100 * (this.options.value - this.min)) /
								(this.options.max - this.min);
				},
				_refreshValue: function () {
					var e = this.options.value,
						i = this._percentage();
					this.valueDiv
						.toggle(this.indeterminate || e > this.min)
						.width(i.toFixed(0) + "%"),
						this._toggleClass(
							this.valueDiv,
							"ui-progressbar-complete",
							null,
							e === this.options.max
						)._toggleClass(
							"ui-progressbar-indeterminate",
							null,
							this.indeterminate
						),
						this.indeterminate
							? (this.element.removeAttr("aria-valuenow"),
							  this.overlayDiv ||
									((this.overlayDiv = t("<div>").appendTo(this.valueDiv)),
									this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
							: (this.element.attr({
									"aria-valuemax": this.options.max,
									"aria-valuenow": e,
							  }),
							  this.overlayDiv &&
									(this.overlayDiv.remove(), (this.overlayDiv = null))),
						this.oldValue !== e &&
							((this.oldValue = e), this._trigger("change")),
						e === this.options.max && this._trigger("complete");
				},
			}),
			t.widget("ui.selectable", t.ui.mouse, {
				version: "1.12.1",
				options: {
					appendTo: "body",
					autoRefresh: !0,
					distance: 0,
					filter: "*",
					tolerance: "touch",
					selected: null,
					selecting: null,
					start: null,
					stop: null,
					unselected: null,
					unselecting: null,
				},
				_create: function () {
					var e = this;
					this._addClass("ui-selectable"),
						(this.dragged = !1),
						(this.refresh = function () {
							(e.elementPos = t(e.element[0]).offset()),
								(e.selectees = t(e.options.filter, e.element[0])),
								e._addClass(e.selectees, "ui-selectee"),
								e.selectees.each(function () {
									var i = t(this),
										n = i.offset(),
										s = {
											left: n.left - e.elementPos.left,
											top: n.top - e.elementPos.top,
										};
									t.data(this, "selectable-item", {
										element: this,
										$element: i,
										left: s.left,
										top: s.top,
										right: s.left + i.outerWidth(),
										bottom: s.top + i.outerHeight(),
										startselected: !1,
										selected: i.hasClass("ui-selected"),
										selecting: i.hasClass("ui-selecting"),
										unselecting: i.hasClass("ui-unselecting"),
									});
								});
						}),
						this.refresh(),
						this._mouseInit(),
						(this.helper = t("<div>")),
						this._addClass(this.helper, "ui-selectable-helper");
				},
				_destroy: function () {
					this.selectees.removeData("selectable-item"), this._mouseDestroy();
				},
				_mouseStart: function (e) {
					var i = this,
						n = this.options;
					(this.opos = [e.pageX, e.pageY]),
						(this.elementPos = t(this.element[0]).offset()),
						this.options.disabled ||
							((this.selectees = t(n.filter, this.element[0])),
							this._trigger("start", e),
							t(n.appendTo).append(this.helper),
							this.helper.css({
								left: e.pageX,
								top: e.pageY,
								width: 0,
								height: 0,
							}),
							n.autoRefresh && this.refresh(),
							this.selectees.filter(".ui-selected").each(function () {
								var n = t.data(this, "selectable-item");
								(n.startselected = !0),
									e.metaKey ||
										e.ctrlKey ||
										(i._removeClass(n.$element, "ui-selected"),
										(n.selected = !1),
										i._addClass(n.$element, "ui-unselecting"),
										(n.unselecting = !0),
										i._trigger("unselecting", e, { unselecting: n.element }));
							}),
							t(e.target)
								.parents()
								.addBack()
								.each(function () {
									var n,
										s = t.data(this, "selectable-item");
									return s
										? ((n =
												(!e.metaKey && !e.ctrlKey) ||
												!s.$element.hasClass("ui-selected")),
										  i
												._removeClass(
													s.$element,
													n ? "ui-unselecting" : "ui-selected"
												)
												._addClass(
													s.$element,
													n ? "ui-selecting" : "ui-unselecting"
												),
										  (s.unselecting = !n),
										  (s.selecting = n),
										  (s.selected = n),
										  n
												? i._trigger("selecting", e, { selecting: s.element })
												: i._trigger("unselecting", e, {
														unselecting: s.element,
												  }),
										  !1)
										: void 0;
								}));
				},
				_mouseDrag: function (e) {
					if (((this.dragged = !0), !this.options.disabled)) {
						var i,
							n = this,
							s = this.options,
							o = this.opos[0],
							a = this.opos[1],
							r = e.pageX,
							l = e.pageY;
						return (
							o > r && ((i = r), (r = o), (o = i)),
							a > l && ((i = l), (l = a), (a = i)),
							this.helper.css({ left: o, top: a, width: r - o, height: l - a }),
							this.selectees.each(function () {
								var i = t.data(this, "selectable-item"),
									h = !1,
									c = {};
								i &&
									i.element !== n.element[0] &&
									((c.left = i.left + n.elementPos.left),
									(c.right = i.right + n.elementPos.left),
									(c.top = i.top + n.elementPos.top),
									(c.bottom = i.bottom + n.elementPos.top),
									"touch" === s.tolerance
										? (h = !(
												c.left > r ||
												o > c.right ||
												c.top > l ||
												a > c.bottom
										  ))
										: "fit" === s.tolerance &&
										  (h =
												c.left > o && r > c.right && c.top > a && l > c.bottom),
									h
										? (i.selected &&
												(n._removeClass(i.$element, "ui-selected"),
												(i.selected = !1)),
										  i.unselecting &&
												(n._removeClass(i.$element, "ui-unselecting"),
												(i.unselecting = !1)),
										  i.selecting ||
												(n._addClass(i.$element, "ui-selecting"),
												(i.selecting = !0),
												n._trigger("selecting", e, { selecting: i.element })))
										: (i.selecting &&
												((e.metaKey || e.ctrlKey) && i.startselected
													? (n._removeClass(i.$element, "ui-selecting"),
													  (i.selecting = !1),
													  n._addClass(i.$element, "ui-selected"),
													  (i.selected = !0))
													: (n._removeClass(i.$element, "ui-selecting"),
													  (i.selecting = !1),
													  i.startselected &&
															(n._addClass(i.$element, "ui-unselecting"),
															(i.unselecting = !0)),
													  n._trigger("unselecting", e, {
															unselecting: i.element,
													  }))),
										  i.selected &&
												(e.metaKey ||
													e.ctrlKey ||
													i.startselected ||
													(n._removeClass(i.$element, "ui-selected"),
													(i.selected = !1),
													n._addClass(i.$element, "ui-unselecting"),
													(i.unselecting = !0),
													n._trigger("unselecting", e, {
														unselecting: i.element,
													})))));
							}),
							!1
						);
					}
				},
				_mouseStop: function (e) {
					var i = this;
					return (
						(this.dragged = !1),
						t(".ui-unselecting", this.element[0]).each(function () {
							var n = t.data(this, "selectable-item");
							i._removeClass(n.$element, "ui-unselecting"),
								(n.unselecting = !1),
								(n.startselected = !1),
								i._trigger("unselected", e, { unselected: n.element });
						}),
						t(".ui-selecting", this.element[0]).each(function () {
							var n = t.data(this, "selectable-item");
							i
								._removeClass(n.$element, "ui-selecting")
								._addClass(n.$element, "ui-selected"),
								(n.selecting = !1),
								(n.selected = !0),
								(n.startselected = !0),
								i._trigger("selected", e, { selected: n.element });
						}),
						this._trigger("stop", e),
						this.helper.remove(),
						!1
					);
				},
			}),
			t.widget("ui.selectmenu", [
				t.ui.formResetMixin,
				{
					version: "1.12.1",
					defaultElement: "<select>",
					options: {
						appendTo: null,
						classes: {
							"ui-selectmenu-button-open": "ui-corner-top",
							"ui-selectmenu-button-closed": "ui-corner-all",
						},
						disabled: null,
						icons: { button: "ui-icon-triangle-1-s" },
						position: { my: "left top", at: "left bottom", collision: "none" },
						width: !1,
						change: null,
						close: null,
						focus: null,
						open: null,
						select: null,
					},
					_create: function () {
						var e = this.element.uniqueId().attr("id");
						(this.ids = {
							element: e,
							button: e + "-button",
							menu: e + "-menu",
						}),
							this._drawButton(),
							this._drawMenu(),
							this._bindFormResetHandler(),
							(this._rendered = !1),
							(this.menuItems = t());
					},
					_drawButton: function () {
						var e,
							i = this,
							n = this._parseOption(
								this.element.find("option:selected"),
								this.element[0].selectedIndex
							);
						(this.labels = this.element.labels().attr("for", this.ids.button)),
							this._on(this.labels, {
								click: function (t) {
									this.button.focus(), t.preventDefault();
								},
							}),
							this.element.hide(),
							(this.button = t("<span>", {
								tabindex: this.options.disabled ? -1 : 0,
								id: this.ids.button,
								role: "combobox",
								"aria-expanded": "false",
								"aria-autocomplete": "list",
								"aria-owns": this.ids.menu,
								"aria-haspopup": "true",
								title: this.element.attr("title"),
							}).insertAfter(this.element)),
							this._addClass(
								this.button,
								"ui-selectmenu-button ui-selectmenu-button-closed",
								"ui-button ui-widget"
							),
							(e = t("<span>").appendTo(this.button)),
							this._addClass(
								e,
								"ui-selectmenu-icon",
								"ui-icon " + this.options.icons.button
							),
							(this.buttonItem = this._renderButtonItem(n).appendTo(
								this.button
							)),
							!1 !== this.options.width && this._resizeButton(),
							this._on(this.button, this._buttonEvents),
							this.button.one("focusin", function () {
								i._rendered || i._refreshMenu();
							});
					},
					_drawMenu: function () {
						var e = this;
						(this.menu = t("<ul>", {
							"aria-hidden": "true",
							"aria-labelledby": this.ids.button,
							id: this.ids.menu,
						})),
							(this.menuWrap = t("<div>").append(this.menu)),
							this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
							this.menuWrap.appendTo(this._appendTo()),
							(this.menuInstance = this.menu
								.menu({
									classes: { "ui-menu": "ui-corner-bottom" },
									role: "listbox",
									select: function (t, i) {
										t.preventDefault(),
											e._setSelection(),
											e._select(i.item.data("ui-selectmenu-item"), t);
									},
									focus: function (t, i) {
										var n = i.item.data("ui-selectmenu-item");
										null != e.focusIndex &&
											n.index !== e.focusIndex &&
											(e._trigger("focus", t, { item: n }),
											e.isOpen || e._select(n, t)),
											(e.focusIndex = n.index),
											e.button.attr(
												"aria-activedescendant",
												e.menuItems.eq(n.index).attr("id")
											);
									},
								})
								.menu("instance")),
							this.menuInstance._off(this.menu, "mouseleave"),
							(this.menuInstance._closeOnDocumentClick = function () {
								return !1;
							}),
							(this.menuInstance._isDivider = function () {
								return !1;
							});
					},
					refresh: function () {
						this._refreshMenu(),
							this.buttonItem.replaceWith(
								(this.buttonItem = this._renderButtonItem(
									this._getSelectedItem().data("ui-selectmenu-item") || {}
								))
							),
							null === this.options.width && this._resizeButton();
					},
					_refreshMenu: function () {
						var t,
							e = this.element.find("option");
						this.menu.empty(),
							this._parseOptions(e),
							this._renderMenu(this.menu, this.items),
							this.menuInstance.refresh(),
							(this.menuItems = this.menu
								.find("li")
								.not(".ui-selectmenu-optgroup")
								.find(".ui-menu-item-wrapper")),
							(this._rendered = !0),
							e.length &&
								((t = this._getSelectedItem()),
								this.menuInstance.focus(null, t),
								this._setAria(t.data("ui-selectmenu-item")),
								this._setOption("disabled", this.element.prop("disabled")));
					},
					open: function (t) {
						this.options.disabled ||
							(this._rendered
								? (this._removeClass(
										this.menu.find(".ui-state-active"),
										null,
										"ui-state-active"
								  ),
								  this.menuInstance.focus(null, this._getSelectedItem()))
								: this._refreshMenu(),
							this.menuItems.length &&
								((this.isOpen = !0),
								this._toggleAttr(),
								this._resizeMenu(),
								this._position(),
								this._on(this.document, this._documentClick),
								this._trigger("open", t)));
					},
					_position: function () {
						this.menuWrap.position(
							t.extend({ of: this.button }, this.options.position)
						);
					},
					close: function (t) {
						this.isOpen &&
							((this.isOpen = !1),
							this._toggleAttr(),
							(this.range = null),
							this._off(this.document),
							this._trigger("close", t));
					},
					widget: function () {
						return this.button;
					},
					menuWidget: function () {
						return this.menu;
					},
					_renderButtonItem: function (e) {
						var i = t("<span>");
						return (
							this._setText(i, e.label),
							this._addClass(i, "ui-selectmenu-text"),
							i
						);
					},
					_renderMenu: function (e, i) {
						var n = this,
							s = "";
						t.each(i, function (i, o) {
							var a;
							o.optgroup !== s &&
								((a = t("<li>", { text: o.optgroup })),
								n._addClass(
									a,
									"ui-selectmenu-optgroup",
									"ui-menu-divider" +
										(o.element.parent("optgroup").prop("disabled")
											? " ui-state-disabled"
											: "")
								),
								a.appendTo(e),
								(s = o.optgroup)),
								n._renderItemData(e, o);
						});
					},
					_renderItemData: function (t, e) {
						return this._renderItem(t, e).data("ui-selectmenu-item", e);
					},
					_renderItem: function (e, i) {
						var n = t("<li>"),
							s = t("<div>", { title: i.element.attr("title") });
						return (
							i.disabled && this._addClass(n, null, "ui-state-disabled"),
							this._setText(s, i.label),
							n.append(s).appendTo(e)
						);
					},
					_setText: function (t, e) {
						e ? t.text(e) : t.html("&#160;");
					},
					_move: function (t, e) {
						var i,
							n,
							s = ".ui-menu-item";
						this.isOpen
							? (i = this.menuItems.eq(this.focusIndex).parent("li"))
							: ((i = this.menuItems
									.eq(this.element[0].selectedIndex)
									.parent("li")),
							  (s += ":not(.ui-state-disabled)")),
							(n =
								"first" === t || "last" === t
									? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
									: i[t + "All"](s).eq(0)).length &&
								this.menuInstance.focus(e, n);
					},
					_getSelectedItem: function () {
						return this.menuItems
							.eq(this.element[0].selectedIndex)
							.parent("li");
					},
					_toggle: function (t) {
						this[this.isOpen ? "close" : "open"](t);
					},
					_setSelection: function () {
						var t;
						this.range &&
							(window.getSelection
								? ((t = window.getSelection()).removeAllRanges(),
								  t.addRange(this.range))
								: this.range.select(),
							this.button.focus());
					},
					_documentClick: {
						mousedown: function (e) {
							this.isOpen &&
								(t(e.target).closest(
									".ui-selectmenu-menu, #" +
										t.ui.escapeSelector(this.ids.button)
								).length ||
									this.close(e));
						},
					},
					_buttonEvents: {
						mousedown: function () {
							var t;
							window.getSelection
								? (t = window.getSelection()).rangeCount &&
								  (this.range = t.getRangeAt(0))
								: (this.range = document.selection.createRange());
						},
						click: function (t) {
							this._setSelection(), this._toggle(t);
						},
						keydown: function (e) {
							var i = !0;
							switch (e.keyCode) {
								case t.ui.keyCode.TAB:
								case t.ui.keyCode.ESCAPE:
									this.close(e), (i = !1);
									break;
								case t.ui.keyCode.ENTER:
									this.isOpen && this._selectFocusedItem(e);
									break;
								case t.ui.keyCode.UP:
									e.altKey ? this._toggle(e) : this._move("prev", e);
									break;
								case t.ui.keyCode.DOWN:
									e.altKey ? this._toggle(e) : this._move("next", e);
									break;
								case t.ui.keyCode.SPACE:
									this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
									break;
								case t.ui.keyCode.LEFT:
									this._move("prev", e);
									break;
								case t.ui.keyCode.RIGHT:
									this._move("next", e);
									break;
								case t.ui.keyCode.HOME:
								case t.ui.keyCode.PAGE_UP:
									this._move("first", e);
									break;
								case t.ui.keyCode.END:
								case t.ui.keyCode.PAGE_DOWN:
									this._move("last", e);
									break;
								default:
									this.menu.trigger(e), (i = !1);
							}
							i && e.preventDefault();
						},
					},
					_selectFocusedItem: function (t) {
						var e = this.menuItems.eq(this.focusIndex).parent("li");
						e.hasClass("ui-state-disabled") ||
							this._select(e.data("ui-selectmenu-item"), t);
					},
					_select: function (t, e) {
						var i = this.element[0].selectedIndex;
						(this.element[0].selectedIndex = t.index),
							this.buttonItem.replaceWith(
								(this.buttonItem = this._renderButtonItem(t))
							),
							this._setAria(t),
							this._trigger("select", e, { item: t }),
							t.index !== i && this._trigger("change", e, { item: t }),
							this.close(e);
					},
					_setAria: function (t) {
						var e = this.menuItems.eq(t.index).attr("id");
						this.button.attr({
							"aria-labelledby": e,
							"aria-activedescendant": e,
						}),
							this.menu.attr("aria-activedescendant", e);
					},
					_setOption: function (t, e) {
						if ("icons" === t) {
							var i = this.button.find("span.ui-icon");
							this._removeClass(i, null, this.options.icons.button)._addClass(
								i,
								null,
								e.button
							);
						}
						this._super(t, e),
							"appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
							"width" === t && this._resizeButton();
					},
					_setOptionDisabled: function (t) {
						this._super(t),
							this.menuInstance.option("disabled", t),
							this.button.attr("aria-disabled", t),
							this._toggleClass(this.button, null, "ui-state-disabled", t),
							this.element.prop("disabled", t),
							t
								? (this.button.attr("tabindex", -1), this.close())
								: this.button.attr("tabindex", 0);
					},
					_appendTo: function () {
						var e = this.options.appendTo;
						return (
							e &&
								(e =
									e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
							(e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
							e.length || (e = this.document[0].body),
							e
						);
					},
					_toggleAttr: function () {
						this.button.attr("aria-expanded", this.isOpen),
							this._removeClass(
								this.button,
								"ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
							)
								._addClass(
									this.button,
									"ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
								)
								._toggleClass(
									this.menuWrap,
									"ui-selectmenu-open",
									null,
									this.isOpen
								),
							this.menu.attr("aria-hidden", !this.isOpen);
					},
					_resizeButton: function () {
						var t = this.options.width;
						return !1 === t
							? void this.button.css("width", "")
							: (null === t &&
									((t = this.element.show().outerWidth()), this.element.hide()),
							  void this.button.outerWidth(t));
					},
					_resizeMenu: function () {
						this.menu.outerWidth(
							Math.max(
								this.button.outerWidth(),
								this.menu.width("").outerWidth() + 1
							)
						);
					},
					_getCreateOptions: function () {
						var t = this._super();
						return (t.disabled = this.element.prop("disabled")), t;
					},
					_parseOptions: function (e) {
						var i = this,
							n = [];
						e.each(function (e, s) {
							n.push(i._parseOption(t(s), e));
						}),
							(this.items = n);
					},
					_parseOption: function (t, e) {
						var i = t.parent("optgroup");
						return {
							element: t,
							index: e,
							value: t.val(),
							label: t.text(),
							optgroup: i.attr("label") || "",
							disabled: i.prop("disabled") || t.prop("disabled"),
						};
					},
					_destroy: function () {
						this._unbindFormResetHandler(),
							this.menuWrap.remove(),
							this.button.remove(),
							this.element.show(),
							this.element.removeUniqueId(),
							this.labels.attr("for", this.ids.element);
					},
				},
			]),
			t.widget("ui.slider", t.ui.mouse, {
				version: "1.12.1",
				widgetEventPrefix: "slide",
				options: {
					animate: !1,
					classes: {
						"ui-slider": "ui-corner-all",
						"ui-slider-handle": "ui-corner-all",
						"ui-slider-range": "ui-corner-all ui-widget-header",
					},
					distance: 0,
					max: 100,
					min: 0,
					orientation: "horizontal",
					range: !1,
					step: 1,
					value: 0,
					values: null,
					change: null,
					slide: null,
					start: null,
					stop: null,
				},
				numPages: 5,
				_create: function () {
					(this._keySliding = !1),
						(this._mouseSliding = !1),
						(this._animateOff = !0),
						(this._handleIndex = null),
						this._detectOrientation(),
						this._mouseInit(),
						this._calculateNewMax(),
						this._addClass(
							"ui-slider ui-slider-" + this.orientation,
							"ui-widget ui-widget-content"
						),
						this._refresh(),
						(this._animateOff = !1);
				},
				_refresh: function () {
					this._createRange(),
						this._createHandles(),
						this._setupEvents(),
						this._refreshValue();
				},
				_createHandles: function () {
					var e,
						i,
						n = this.options,
						s = this.element.find(".ui-slider-handle"),
						o = [];
					for (
						i = (n.values && n.values.length) || 1,
							s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
							e = s.length;
						i > e;
						e++
					)
						o.push("<span tabindex='0'></span>");
					(this.handles = s.add(t(o.join("")).appendTo(this.element))),
						this._addClass(
							this.handles,
							"ui-slider-handle",
							"ui-state-default"
						),
						(this.handle = this.handles.eq(0)),
						this.handles.each(function (e) {
							t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
						});
				},
				_createRange: function () {
					var e = this.options;
					e.range
						? (!0 === e.range &&
								(e.values
									? e.values.length && 2 !== e.values.length
										? (e.values = [e.values[0], e.values[0]])
										: t.isArray(e.values) && (e.values = e.values.slice(0))
									: (e.values = [this._valueMin(), this._valueMin()])),
						  this.range && this.range.length
								? (this._removeClass(
										this.range,
										"ui-slider-range-min ui-slider-range-max"
								  ),
								  this.range.css({ left: "", bottom: "" }))
								: ((this.range = t("<div>").appendTo(this.element)),
								  this._addClass(this.range, "ui-slider-range")),
						  ("min" === e.range || "max" === e.range) &&
								this._addClass(this.range, "ui-slider-range-" + e.range))
						: (this.range && this.range.remove(), (this.range = null));
				},
				_setupEvents: function () {
					this._off(this.handles),
						this._on(this.handles, this._handleEvents),
						this._hoverable(this.handles),
						this._focusable(this.handles);
				},
				_destroy: function () {
					this.handles.remove(),
						this.range && this.range.remove(),
						this._mouseDestroy();
				},
				_mouseCapture: function (e) {
					var i,
						n,
						s,
						o,
						a,
						r,
						l,
						h = this,
						c = this.options;
					return (
						!c.disabled &&
						((this.elementSize = {
							width: this.element.outerWidth(),
							height: this.element.outerHeight(),
						}),
						(this.elementOffset = this.element.offset()),
						(i = { x: e.pageX, y: e.pageY }),
						(n = this._normValueFromMouse(i)),
						(s = this._valueMax() - this._valueMin() + 1),
						this.handles.each(function (e) {
							var i = Math.abs(n - h.values(e));
							(s > i ||
								(s === i &&
									(e === h._lastChangedValue || h.values(e) === c.min))) &&
								((s = i), (o = t(this)), (a = e));
						}),
						!1 !== this._start(e, a) &&
							((this._mouseSliding = !0),
							(this._handleIndex = a),
							this._addClass(o, null, "ui-state-active"),
							o.trigger("focus"),
							(r = o.offset()),
							(l = !t(e.target).parents().addBack().is(".ui-slider-handle")),
							(this._clickOffset = l
								? { left: 0, top: 0 }
								: {
										left: e.pageX - r.left - o.width() / 2,
										top:
											e.pageY -
											r.top -
											o.height() / 2 -
											(parseInt(o.css("borderTopWidth"), 10) || 0) -
											(parseInt(o.css("borderBottomWidth"), 10) || 0) +
											(parseInt(o.css("marginTop"), 10) || 0),
								  }),
							this.handles.hasClass("ui-state-hover") || this._slide(e, a, n),
							(this._animateOff = !0),
							!0))
					);
				},
				_mouseStart: function () {
					return !0;
				},
				_mouseDrag: function (t) {
					var e = { x: t.pageX, y: t.pageY },
						i = this._normValueFromMouse(e);
					return this._slide(t, this._handleIndex, i), !1;
				},
				_mouseStop: function (t) {
					return (
						this._removeClass(this.handles, null, "ui-state-active"),
						(this._mouseSliding = !1),
						this._stop(t, this._handleIndex),
						this._change(t, this._handleIndex),
						(this._handleIndex = null),
						(this._clickOffset = null),
						(this._animateOff = !1),
						!1
					);
				},
				_detectOrientation: function () {
					this.orientation =
						"vertical" === this.options.orientation ? "vertical" : "horizontal";
				},
				_normValueFromMouse: function (t) {
					var e, i, n, s, o;
					return (
						"horizontal" === this.orientation
							? ((e = this.elementSize.width),
							  (i =
									t.x -
									this.elementOffset.left -
									(this._clickOffset ? this._clickOffset.left : 0)))
							: ((e = this.elementSize.height),
							  (i =
									t.y -
									this.elementOffset.top -
									(this._clickOffset ? this._clickOffset.top : 0))),
						(n = i / e) > 1 && (n = 1),
						0 > n && (n = 0),
						"vertical" === this.orientation && (n = 1 - n),
						(s = this._valueMax() - this._valueMin()),
						(o = this._valueMin() + n * s),
						this._trimAlignValue(o)
					);
				},
				_uiHash: function (t, e, i) {
					var n = {
						handle: this.handles[t],
						handleIndex: t,
						value: void 0 !== e ? e : this.value(),
					};
					return (
						this._hasMultipleValues() &&
							((n.value = void 0 !== e ? e : this.values(t)),
							(n.values = i || this.values())),
						n
					);
				},
				_hasMultipleValues: function () {
					return this.options.values && this.options.values.length;
				},
				_start: function (t, e) {
					return this._trigger("start", t, this._uiHash(e));
				},
				_slide: function (t, e, i) {
					var n,
						s = this.value(),
						o = this.values();
					this._hasMultipleValues() &&
						((n = this.values(e ? 0 : 1)),
						(s = this.values(e)),
						2 === this.options.values.length &&
							!0 === this.options.range &&
							(i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
						(o[e] = i)),
						i !== s &&
							!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) &&
							(this._hasMultipleValues() ? this.values(e, i) : this.value(i));
				},
				_stop: function (t, e) {
					this._trigger("stop", t, this._uiHash(e));
				},
				_change: function (t, e) {
					this._keySliding ||
						this._mouseSliding ||
						((this._lastChangedValue = e),
						this._trigger("change", t, this._uiHash(e)));
				},
				value: function (t) {
					return arguments.length
						? ((this.options.value = this._trimAlignValue(t)),
						  this._refreshValue(),
						  void this._change(null, 0))
						: this._value();
				},
				values: function (e, i) {
					var n, s, o;
					if (arguments.length > 1)
						return (
							(this.options.values[e] = this._trimAlignValue(i)),
							this._refreshValue(),
							void this._change(null, e)
						);
					if (!arguments.length) return this._values();
					if (!t.isArray(arguments[0]))
						return this._hasMultipleValues() ? this._values(e) : this.value();
					for (
						n = this.options.values, s = arguments[0], o = 0;
						n.length > o;
						o += 1
					)
						(n[o] = this._trimAlignValue(s[o])), this._change(null, o);
					this._refreshValue();
				},
				_setOption: function (e, i) {
					var n,
						s = 0;
					switch (
						("range" === e &&
							!0 === this.options.range &&
							("min" === i
								? ((this.options.value = this._values(0)),
								  (this.options.values = null))
								: "max" === i &&
								  ((this.options.value = this._values(
										this.options.values.length - 1
								  )),
								  (this.options.values = null))),
						t.isArray(this.options.values) && (s = this.options.values.length),
						this._super(e, i),
						e)
					) {
						case "orientation":
							this._detectOrientation(),
								this._removeClass(
									"ui-slider-horizontal ui-slider-vertical"
								)._addClass("ui-slider-" + this.orientation),
								this._refreshValue(),
								this.options.range && this._refreshRange(i),
								this.handles.css("horizontal" === i ? "bottom" : "left", "");
							break;
						case "value":
							(this._animateOff = !0),
								this._refreshValue(),
								this._change(null, 0),
								(this._animateOff = !1);
							break;
						case "values":
							for (
								this._animateOff = !0, this._refreshValue(), n = s - 1;
								n >= 0;
								n--
							)
								this._change(null, n);
							this._animateOff = !1;
							break;
						case "step":
						case "min":
						case "max":
							(this._animateOff = !0),
								this._calculateNewMax(),
								this._refreshValue(),
								(this._animateOff = !1);
							break;
						case "range":
							(this._animateOff = !0), this._refresh(), (this._animateOff = !1);
					}
				},
				_setOptionDisabled: function (t) {
					this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
				},
				_value: function () {
					var t = this.options.value;
					return this._trimAlignValue(t);
				},
				_values: function (t) {
					var e, i, n;
					if (arguments.length)
						return (e = this.options.values[t]), this._trimAlignValue(e);
					if (this._hasMultipleValues()) {
						for (i = this.options.values.slice(), n = 0; i.length > n; n += 1)
							i[n] = this._trimAlignValue(i[n]);
						return i;
					}
					return [];
				},
				_trimAlignValue: function (t) {
					if (this._valueMin() >= t) return this._valueMin();
					if (t >= this._valueMax()) return this._valueMax();
					var e = this.options.step > 0 ? this.options.step : 1,
						i = (t - this._valueMin()) % e,
						n = t - i;
					return (
						2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
						parseFloat(n.toFixed(5))
					);
				},
				_calculateNewMax: function () {
					var t = this.options.max,
						e = this._valueMin(),
						i = this.options.step;
					(t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
						(this.max = parseFloat(t.toFixed(this._precision())));
				},
				_precision: function () {
					var t = this._precisionOf(this.options.step);
					return (
						null !== this.options.min &&
							(t = Math.max(t, this._precisionOf(this.options.min))),
						t
					);
				},
				_precisionOf: function (t) {
					var e = "" + t,
						i = e.indexOf(".");
					return -1 === i ? 0 : e.length - i - 1;
				},
				_valueMin: function () {
					return this.options.min;
				},
				_valueMax: function () {
					return this.max;
				},
				_refreshRange: function (t) {
					"vertical" === t && this.range.css({ width: "", left: "" }),
						"horizontal" === t && this.range.css({ height: "", bottom: "" });
				},
				_refreshValue: function () {
					var e,
						i,
						n,
						s,
						o,
						a = this.options.range,
						r = this.options,
						l = this,
						h = !this._animateOff && r.animate,
						c = {};
					this._hasMultipleValues()
						? this.handles.each(function (n) {
								(i =
									((l.values(n) - l._valueMin()) /
										(l._valueMax() - l._valueMin())) *
									100),
									(c["horizontal" === l.orientation ? "left" : "bottom"] =
										i + "%"),
									t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate),
									!0 === l.options.range &&
										("horizontal" === l.orientation
											? (0 === n &&
													l.range
														.stop(1, 1)
														[h ? "animate" : "css"](
															{ left: i + "%" },
															r.animate
														),
											  1 === n &&
													l.range[h ? "animate" : "css"](
														{ width: i - e + "%" },
														{ queue: !1, duration: r.animate }
													))
											: (0 === n &&
													l.range
														.stop(1, 1)
														[h ? "animate" : "css"](
															{ bottom: i + "%" },
															r.animate
														),
											  1 === n &&
													l.range[h ? "animate" : "css"](
														{ height: i - e + "%" },
														{ queue: !1, duration: r.animate }
													))),
									(e = i);
						  })
						: ((n = this.value()),
						  (s = this._valueMin()),
						  (o = this._valueMax()),
						  (i = o !== s ? ((n - s) / (o - s)) * 100 : 0),
						  (c["horizontal" === this.orientation ? "left" : "bottom"] =
								i + "%"),
						  this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate),
						  "min" === a &&
								"horizontal" === this.orientation &&
								this.range
									.stop(1, 1)
									[h ? "animate" : "css"]({ width: i + "%" }, r.animate),
						  "max" === a &&
								"horizontal" === this.orientation &&
								this.range
									.stop(1, 1)
									[h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
						  "min" === a &&
								"vertical" === this.orientation &&
								this.range
									.stop(1, 1)
									[h ? "animate" : "css"]({ height: i + "%" }, r.animate),
						  "max" === a &&
								"vertical" === this.orientation &&
								this.range
									.stop(1, 1)
									[h ? "animate" : "css"](
										{ height: 100 - i + "%" },
										r.animate
									));
				},
				_handleEvents: {
					keydown: function (e) {
						var i,
							n,
							s,
							o = t(e.target).data("ui-slider-handle-index");
						switch (e.keyCode) {
							case t.ui.keyCode.HOME:
							case t.ui.keyCode.END:
							case t.ui.keyCode.PAGE_UP:
							case t.ui.keyCode.PAGE_DOWN:
							case t.ui.keyCode.UP:
							case t.ui.keyCode.RIGHT:
							case t.ui.keyCode.DOWN:
							case t.ui.keyCode.LEFT:
								if (
									(e.preventDefault(),
									!this._keySliding &&
										((this._keySliding = !0),
										this._addClass(t(e.target), null, "ui-state-active"),
										!1 === this._start(e, o)))
								)
									return;
						}
						switch (
							((s = this.options.step),
							(i = n =
								this._hasMultipleValues() ? this.values(o) : this.value()),
							e.keyCode)
						) {
							case t.ui.keyCode.HOME:
								n = this._valueMin();
								break;
							case t.ui.keyCode.END:
								n = this._valueMax();
								break;
							case t.ui.keyCode.PAGE_UP:
								n = this._trimAlignValue(
									i + (this._valueMax() - this._valueMin()) / this.numPages
								);
								break;
							case t.ui.keyCode.PAGE_DOWN:
								n = this._trimAlignValue(
									i - (this._valueMax() - this._valueMin()) / this.numPages
								);
								break;
							case t.ui.keyCode.UP:
							case t.ui.keyCode.RIGHT:
								if (i === this._valueMax()) return;
								n = this._trimAlignValue(i + s);
								break;
							case t.ui.keyCode.DOWN:
							case t.ui.keyCode.LEFT:
								if (i === this._valueMin()) return;
								n = this._trimAlignValue(i - s);
						}
						this._slide(e, o, n);
					},
					keyup: function (e) {
						var i = t(e.target).data("ui-slider-handle-index");
						this._keySliding &&
							((this._keySliding = !1),
							this._stop(e, i),
							this._change(e, i),
							this._removeClass(t(e.target), null, "ui-state-active"));
					},
				},
			}),
			t.widget("ui.sortable", t.ui.mouse, {
				version: "1.12.1",
				widgetEventPrefix: "sort",
				ready: !1,
				options: {
					appendTo: "parent",
					axis: !1,
					connectWith: !1,
					containment: !1,
					cursor: "auto",
					cursorAt: !1,
					dropOnEmpty: !0,
					forcePlaceholderSize: !1,
					forceHelperSize: !1,
					grid: !1,
					handle: !1,
					helper: "original",
					items: "> *",
					opacity: !1,
					placeholder: !1,
					revert: !1,
					scroll: !0,
					scrollSensitivity: 20,
					scrollSpeed: 20,
					scope: "default",
					tolerance: "intersect",
					zIndex: 1e3,
					activate: null,
					beforeStop: null,
					change: null,
					deactivate: null,
					out: null,
					over: null,
					receive: null,
					remove: null,
					sort: null,
					start: null,
					stop: null,
					update: null,
				},
				_isOverAxis: function (t, e, i) {
					return t >= e && e + i > t;
				},
				_isFloating: function (t) {
					return (
						/left|right/.test(t.css("float")) ||
						/inline|table-cell/.test(t.css("display"))
					);
				},
				_create: function () {
					(this.containerCache = {}),
						this._addClass("ui-sortable"),
						this.refresh(),
						(this.offset = this.element.offset()),
						this._mouseInit(),
						this._setHandleClassName(),
						(this.ready = !0);
				},
				_setOption: function (t, e) {
					this._super(t, e), "handle" === t && this._setHandleClassName();
				},
				_setHandleClassName: function () {
					var e = this;
					this._removeClass(
						this.element.find(".ui-sortable-handle"),
						"ui-sortable-handle"
					),
						t.each(this.items, function () {
							e._addClass(
								this.instance.options.handle
									? this.item.find(this.instance.options.handle)
									: this.item,
								"ui-sortable-handle"
							);
						});
				},
				_destroy: function () {
					this._mouseDestroy();
					for (var t = this.items.length - 1; t >= 0; t--)
						this.items[t].item.removeData(this.widgetName + "-item");
					return this;
				},
				_mouseCapture: function (e, i) {
					var n = null,
						s = !1,
						o = this;
					return (
						!this.reverting &&
						!this.options.disabled &&
						"static" !== this.options.type &&
						(this._refreshItems(e),
						t(e.target)
							.parents()
							.each(function () {
								return t.data(this, o.widgetName + "-item") === o
									? ((n = t(this)), !1)
									: void 0;
							}),
						t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
						!!n &&
							!(
								this.options.handle &&
								!i &&
								(t(this.options.handle, n)
									.find("*")
									.addBack()
									.each(function () {
										this === e.target && (s = !0);
									}),
								!s)
							) &&
							((this.currentItem = n), this._removeCurrentsFromItems(), !0))
					);
				},
				_mouseStart: function (e, i, n) {
					var s,
						o,
						a = this.options;
					if (
						((this.currentContainer = this),
						this.refreshPositions(),
						(this.helper = this._createHelper(e)),
						this._cacheHelperProportions(),
						this._cacheMargins(),
						(this.scrollParent = this.helper.scrollParent()),
						(this.offset = this.currentItem.offset()),
						(this.offset = {
							top: this.offset.top - this.margins.top,
							left: this.offset.left - this.margins.left,
						}),
						t.extend(this.offset, {
							click: {
								left: e.pageX - this.offset.left,
								top: e.pageY - this.offset.top,
							},
							parent: this._getParentOffset(),
							relative: this._getRelativeOffset(),
						}),
						this.helper.css("position", "absolute"),
						(this.cssPosition = this.helper.css("position")),
						(this.originalPosition = this._generatePosition(e)),
						(this.originalPageX = e.pageX),
						(this.originalPageY = e.pageY),
						a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
						(this.domPosition = {
							prev: this.currentItem.prev()[0],
							parent: this.currentItem.parent()[0],
						}),
						this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
						this._createPlaceholder(),
						a.containment && this._setContainment(),
						a.cursor &&
							"auto" !== a.cursor &&
							((o = this.document.find("body")),
							(this.storedCursor = o.css("cursor")),
							o.css("cursor", a.cursor),
							(this.storedStylesheet = t(
								"<style>*{ cursor: " + a.cursor + " !important; }</style>"
							).appendTo(o))),
						a.opacity &&
							(this.helper.css("opacity") &&
								(this._storedOpacity = this.helper.css("opacity")),
							this.helper.css("opacity", a.opacity)),
						a.zIndex &&
							(this.helper.css("zIndex") &&
								(this._storedZIndex = this.helper.css("zIndex")),
							this.helper.css("zIndex", a.zIndex)),
						this.scrollParent[0] !== this.document[0] &&
							"HTML" !== this.scrollParent[0].tagName &&
							(this.overflowOffset = this.scrollParent.offset()),
						this._trigger("start", e, this._uiHash()),
						this._preserveHelperProportions || this._cacheHelperProportions(),
						!n)
					)
						for (s = this.containers.length - 1; s >= 0; s--)
							this.containers[s]._trigger("activate", e, this._uiHash(this));
					return (
						t.ui.ddmanager && (t.ui.ddmanager.current = this),
						t.ui.ddmanager &&
							!a.dropBehaviour &&
							t.ui.ddmanager.prepareOffsets(this, e),
						(this.dragging = !0),
						this._addClass(this.helper, "ui-sortable-helper"),
						this._mouseDrag(e),
						!0
					);
				},
				_mouseDrag: function (e) {
					var i,
						n,
						s,
						o,
						a = this.options,
						r = !1;
					for (
						this.position = this._generatePosition(e),
							this.positionAbs = this._convertPositionTo("absolute"),
							this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
							this.options.scroll &&
								(this.scrollParent[0] !== this.document[0] &&
								"HTML" !== this.scrollParent[0].tagName
									? (this.overflowOffset.top +
											this.scrollParent[0].offsetHeight -
											e.pageY <
									  a.scrollSensitivity
											? (this.scrollParent[0].scrollTop = r =
													this.scrollParent[0].scrollTop + a.scrollSpeed)
											: e.pageY - this.overflowOffset.top <
													a.scrollSensitivity &&
											  (this.scrollParent[0].scrollTop = r =
													this.scrollParent[0].scrollTop - a.scrollSpeed),
									  this.overflowOffset.left +
											this.scrollParent[0].offsetWidth -
											e.pageX <
									  a.scrollSensitivity
											? (this.scrollParent[0].scrollLeft = r =
													this.scrollParent[0].scrollLeft + a.scrollSpeed)
											: e.pageX - this.overflowOffset.left <
													a.scrollSensitivity &&
											  (this.scrollParent[0].scrollLeft = r =
													this.scrollParent[0].scrollLeft - a.scrollSpeed))
									: (e.pageY - this.document.scrollTop() < a.scrollSensitivity
											? (r = this.document.scrollTop(
													this.document.scrollTop() - a.scrollSpeed
											  ))
											: this.window.height() -
													(e.pageY - this.document.scrollTop()) <
													a.scrollSensitivity &&
											  (r = this.document.scrollTop(
													this.document.scrollTop() + a.scrollSpeed
											  )),
									  e.pageX - this.document.scrollLeft() < a.scrollSensitivity
											? (r = this.document.scrollLeft(
													this.document.scrollLeft() - a.scrollSpeed
											  ))
											: this.window.width() -
													(e.pageX - this.document.scrollLeft()) <
													a.scrollSensitivity &&
											  (r = this.document.scrollLeft(
													this.document.scrollLeft() + a.scrollSpeed
											  ))),
								!1 !== r &&
									t.ui.ddmanager &&
									!a.dropBehaviour &&
									t.ui.ddmanager.prepareOffsets(this, e)),
							this.positionAbs = this._convertPositionTo("absolute"),
							(this.options.axis && "y" === this.options.axis) ||
								(this.helper[0].style.left = this.position.left + "px"),
							(this.options.axis && "x" === this.options.axis) ||
								(this.helper[0].style.top = this.position.top + "px"),
							i = this.items.length - 1;
						i >= 0;
						i--
					)
						if (
							((s = (n = this.items[i]).item[0]),
							(o = this._intersectsWithPointer(n)) &&
								n.instance === this.currentContainer &&
								s !== this.currentItem[0] &&
								this.placeholder[1 === o ? "next" : "prev"]()[0] !== s &&
								!t.contains(this.placeholder[0], s) &&
								("semi-dynamic" !== this.options.type ||
									!t.contains(this.element[0], s)))
						) {
							if (
								((this.direction = 1 === o ? "down" : "up"),
								"pointer" !== this.options.tolerance &&
									!this._intersectsWithSides(n))
							)
								break;
							this._rearrange(e, n), this._trigger("change", e, this._uiHash());
							break;
						}
					return (
						this._contactContainers(e),
						t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
						this._trigger("sort", e, this._uiHash()),
						(this.lastPositionAbs = this.positionAbs),
						!1
					);
				},
				_mouseStop: function (e, i) {
					if (e) {
						if (
							(t.ui.ddmanager &&
								!this.options.dropBehaviour &&
								t.ui.ddmanager.drop(this, e),
							this.options.revert)
						) {
							var n = this,
								s = this.placeholder.offset(),
								o = this.options.axis,
								a = {};
							(o && "x" !== o) ||
								(a.left =
									s.left -
									this.offset.parent.left -
									this.margins.left +
									(this.offsetParent[0] === this.document[0].body
										? 0
										: this.offsetParent[0].scrollLeft)),
								(o && "y" !== o) ||
									(a.top =
										s.top -
										this.offset.parent.top -
										this.margins.top +
										(this.offsetParent[0] === this.document[0].body
											? 0
											: this.offsetParent[0].scrollTop)),
								(this.reverting = !0),
								t(this.helper).animate(
									a,
									parseInt(this.options.revert, 10) || 500,
									function () {
										n._clear(e);
									}
								);
						} else this._clear(e, i);
						return !1;
					}
				},
				cancel: function () {
					if (this.dragging) {
						this._mouseUp(new t.Event("mouseup", { target: null })),
							"original" === this.options.helper
								? (this.currentItem.css(this._storedCSS),
								  this._removeClass(this.currentItem, "ui-sortable-helper"))
								: this.currentItem.show();
						for (var e = this.containers.length - 1; e >= 0; e--)
							this.containers[e]._trigger(
								"deactivate",
								null,
								this._uiHash(this)
							),
								this.containers[e].containerCache.over &&
									(this.containers[e]._trigger("out", null, this._uiHash(this)),
									(this.containers[e].containerCache.over = 0));
					}
					return (
						this.placeholder &&
							(this.placeholder[0].parentNode &&
								this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
							"original" !== this.options.helper &&
								this.helper &&
								this.helper[0].parentNode &&
								this.helper.remove(),
							t.extend(this, {
								helper: null,
								dragging: !1,
								reverting: !1,
								_noFinalSort: null,
							}),
							this.domPosition.prev
								? t(this.domPosition.prev).after(this.currentItem)
								: t(this.domPosition.parent).prepend(this.currentItem)),
						this
					);
				},
				serialize: function (e) {
					var i = this._getItemsAsjQuery(e && e.connected),
						n = [];
					return (
						(e = e || {}),
						t(i).each(function () {
							var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
								e.expression || /(.+)[\-=_](.+)/
							);
							i &&
								n.push(
									(e.key || i[1] + "[]") +
										"=" +
										(e.key && e.expression ? i[1] : i[2])
								);
						}),
						!n.length && e.key && n.push(e.key + "="),
						n.join("&")
					);
				},
				toArray: function (e) {
					var i = this._getItemsAsjQuery(e && e.connected),
						n = [];
					return (
						(e = e || {}),
						i.each(function () {
							n.push(t(e.item || this).attr(e.attribute || "id") || "");
						}),
						n
					);
				},
				_intersectsWith: function (t) {
					var e = this.positionAbs.left,
						i = e + this.helperProportions.width,
						n = this.positionAbs.top,
						s = n + this.helperProportions.height,
						o = t.left,
						a = o + t.width,
						r = t.top,
						l = r + t.height,
						h = this.offset.click.top,
						c = this.offset.click.left,
						u = "x" === this.options.axis || (n + h > r && l > n + h),
						d = "y" === this.options.axis || (e + c > o && a > e + c),
						p = u && d;
					return "pointer" === this.options.tolerance ||
						this.options.forcePointerForContainers ||
						("pointer" !== this.options.tolerance &&
							this.helperProportions[this.floating ? "width" : "height"] >
								t[this.floating ? "width" : "height"])
						? p
						: e + this.helperProportions.width / 2 > o &&
								a > i - this.helperProportions.width / 2 &&
								n + this.helperProportions.height / 2 > r &&
								l > s - this.helperProportions.height / 2;
				},
				_intersectsWithPointer: function (t) {
					var e,
						i,
						n =
							"x" === this.options.axis ||
							this._isOverAxis(
								this.positionAbs.top + this.offset.click.top,
								t.top,
								t.height
							),
						s =
							"y" === this.options.axis ||
							this._isOverAxis(
								this.positionAbs.left + this.offset.click.left,
								t.left,
								t.width
							);
					return (
						!!(n && s) &&
						((e = this._getDragVerticalDirection()),
						(i = this._getDragHorizontalDirection()),
						this.floating
							? "right" === i || "down" === e
								? 2
								: 1
							: e && ("down" === e ? 2 : 1))
					);
				},
				_intersectsWithSides: function (t) {
					var e = this._isOverAxis(
							this.positionAbs.top + this.offset.click.top,
							t.top + t.height / 2,
							t.height
						),
						i = this._isOverAxis(
							this.positionAbs.left + this.offset.click.left,
							t.left + t.width / 2,
							t.width
						),
						n = this._getDragVerticalDirection(),
						s = this._getDragHorizontalDirection();
					return this.floating && s
						? ("right" === s && i) || ("left" === s && !i)
						: n && (("down" === n && e) || ("up" === n && !e));
				},
				_getDragVerticalDirection: function () {
					var t = this.positionAbs.top - this.lastPositionAbs.top;
					return 0 !== t && (t > 0 ? "down" : "up");
				},
				_getDragHorizontalDirection: function () {
					var t = this.positionAbs.left - this.lastPositionAbs.left;
					return 0 !== t && (t > 0 ? "right" : "left");
				},
				refresh: function (t) {
					return (
						this._refreshItems(t),
						this._setHandleClassName(),
						this.refreshPositions(),
						this
					);
				},
				_connectWith: function () {
					var t = this.options;
					return t.connectWith.constructor === String
						? [t.connectWith]
						: t.connectWith;
				},
				_getItemsAsjQuery: function (e) {
					function i() {
						r.push(this);
					}
					var n,
						s,
						o,
						a,
						r = [],
						l = [],
						h = this._connectWith();
					if (h && e)
						for (n = h.length - 1; n >= 0; n--)
							for (s = (o = t(h[n], this.document[0])).length - 1; s >= 0; s--)
								(a = t.data(o[s], this.widgetFullName)) &&
									a !== this &&
									!a.options.disabled &&
									l.push([
										t.isFunction(a.options.items)
											? a.options.items.call(a.element)
											: t(a.options.items, a.element)
													.not(".ui-sortable-helper")
													.not(".ui-sortable-placeholder"),
										a,
									]);
					for (
						l.push([
							t.isFunction(this.options.items)
								? this.options.items.call(this.element, null, {
										options: this.options,
										item: this.currentItem,
								  })
								: t(this.options.items, this.element)
										.not(".ui-sortable-helper")
										.not(".ui-sortable-placeholder"),
							this,
						]),
							n = l.length - 1;
						n >= 0;
						n--
					)
						l[n][0].each(i);
					return t(r);
				},
				_removeCurrentsFromItems: function () {
					var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
					this.items = t.grep(this.items, function (t) {
						for (var i = 0; e.length > i; i++)
							if (e[i] === t.item[0]) return !1;
						return !0;
					});
				},
				_refreshItems: function (e) {
					(this.items = []), (this.containers = [this]);
					var i,
						n,
						s,
						o,
						a,
						r,
						l,
						h,
						c = this.items,
						u = [
							[
								t.isFunction(this.options.items)
									? this.options.items.call(this.element[0], e, {
											item: this.currentItem,
									  })
									: t(this.options.items, this.element),
								this,
							],
						],
						d = this._connectWith();
					if (d && this.ready)
						for (i = d.length - 1; i >= 0; i--)
							for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--)
								(o = t.data(s[n], this.widgetFullName)) &&
									o !== this &&
									!o.options.disabled &&
									(u.push([
										t.isFunction(o.options.items)
											? o.options.items.call(o.element[0], e, {
													item: this.currentItem,
											  })
											: t(o.options.items, o.element),
										o,
									]),
									this.containers.push(o));
					for (i = u.length - 1; i >= 0; i--)
						for (a = u[i][1], n = 0, h = (r = u[i][0]).length; h > n; n++)
							(l = t(r[n])).data(this.widgetName + "-item", a),
								c.push({
									item: l,
									instance: a,
									width: 0,
									height: 0,
									left: 0,
									top: 0,
								});
				},
				refreshPositions: function (e) {
					var i, n, s, o;
					for (
						this.floating =
							!!this.items.length &&
							("x" === this.options.axis ||
								this._isFloating(this.items[0].item)),
							this.offsetParent &&
								this.helper &&
								(this.offset.parent = this._getParentOffset()),
							i = this.items.length - 1;
						i >= 0;
						i--
					)
						((n = this.items[i]).instance !== this.currentContainer &&
							this.currentContainer &&
							n.item[0] !== this.currentItem[0]) ||
							((s = this.options.toleranceElement
								? t(this.options.toleranceElement, n.item)
								: n.item),
							e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
							(o = s.offset()),
							(n.left = o.left),
							(n.top = o.top));
					if (this.options.custom && this.options.custom.refreshContainers)
						this.options.custom.refreshContainers.call(this);
					else
						for (i = this.containers.length - 1; i >= 0; i--)
							(o = this.containers[i].element.offset()),
								(this.containers[i].containerCache.left = o.left),
								(this.containers[i].containerCache.top = o.top),
								(this.containers[i].containerCache.width =
									this.containers[i].element.outerWidth()),
								(this.containers[i].containerCache.height =
									this.containers[i].element.outerHeight());
					return this;
				},
				_createPlaceholder: function (e) {
					var i,
						n = (e = e || this).options;
					(n.placeholder && n.placeholder.constructor !== String) ||
						((i = n.placeholder),
						(n.placeholder = {
							element: function () {
								var n = e.currentItem[0].nodeName.toLowerCase(),
									s = t("<" + n + ">", e.document[0]);
								return (
									e
										._addClass(
											s,
											"ui-sortable-placeholder",
											i || e.currentItem[0].className
										)
										._removeClass(s, "ui-sortable-helper"),
									"tbody" === n
										? e._createTrPlaceholder(
												e.currentItem.find("tr").eq(0),
												t("<tr>", e.document[0]).appendTo(s)
										  )
										: "tr" === n
										? e._createTrPlaceholder(e.currentItem, s)
										: "img" === n && s.attr("src", e.currentItem.attr("src")),
									i || s.css("visibility", "hidden"),
									s
								);
							},
							update: function (t, s) {
								(!i || n.forcePlaceholderSize) &&
									(s.height() ||
										s.height(
											e.currentItem.innerHeight() -
												parseInt(e.currentItem.css("paddingTop") || 0, 10) -
												parseInt(e.currentItem.css("paddingBottom") || 0, 10)
										),
									s.width() ||
										s.width(
											e.currentItem.innerWidth() -
												parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
												parseInt(e.currentItem.css("paddingRight") || 0, 10)
										));
							},
						})),
						(e.placeholder = t(
							n.placeholder.element.call(e.element, e.currentItem)
						)),
						e.currentItem.after(e.placeholder),
						n.placeholder.update(e, e.placeholder);
				},
				_createTrPlaceholder: function (e, i) {
					var n = this;
					e.children().each(function () {
						t("<td>&#160;</td>", n.document[0])
							.attr("colspan", t(this).attr("colspan") || 1)
							.appendTo(i);
					});
				},
				_contactContainers: function (e) {
					var i,
						n,
						s,
						o,
						a,
						r,
						l,
						h,
						c,
						u,
						d = null,
						p = null;
					for (i = this.containers.length - 1; i >= 0; i--)
						if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
							if (this._intersectsWith(this.containers[i].containerCache)) {
								if (
									d &&
									t.contains(this.containers[i].element[0], d.element[0])
								)
									continue;
								(d = this.containers[i]), (p = i);
							} else
								this.containers[i].containerCache.over &&
									(this.containers[i]._trigger("out", e, this._uiHash(this)),
									(this.containers[i].containerCache.over = 0));
					if (d)
						if (1 === this.containers.length)
							this.containers[p].containerCache.over ||
								(this.containers[p]._trigger("over", e, this._uiHash(this)),
								(this.containers[p].containerCache.over = 1));
						else {
							for (
								s = 1e4,
									o = null,
									a = (c = d.floating || this._isFloating(this.currentItem))
										? "left"
										: "top",
									r = c ? "width" : "height",
									u = c ? "pageX" : "pageY",
									n = this.items.length - 1;
								n >= 0;
								n--
							)
								t.contains(
									this.containers[p].element[0],
									this.items[n].item[0]
								) &&
									this.items[n].item[0] !== this.currentItem[0] &&
									((l = this.items[n].item.offset()[a]),
									(h = !1),
									e[u] - l > this.items[n][r] / 2 && (h = !0),
									s > Math.abs(e[u] - l) &&
										((s = Math.abs(e[u] - l)),
										(o = this.items[n]),
										(this.direction = h ? "up" : "down")));
							if (!o && !this.options.dropOnEmpty) return;
							if (this.currentContainer === this.containers[p])
								return void (
									this.currentContainer.containerCache.over ||
									(this.containers[p]._trigger("over", e, this._uiHash()),
									(this.currentContainer.containerCache.over = 1))
								);
							o
								? this._rearrange(e, o, null, !0)
								: this._rearrange(e, null, this.containers[p].element, !0),
								this._trigger("change", e, this._uiHash()),
								this.containers[p]._trigger("change", e, this._uiHash(this)),
								(this.currentContainer = this.containers[p]),
								this.options.placeholder.update(
									this.currentContainer,
									this.placeholder
								),
								this.containers[p]._trigger("over", e, this._uiHash(this)),
								(this.containers[p].containerCache.over = 1);
						}
				},
				_createHelper: function (e) {
					var i = this.options,
						n = t.isFunction(i.helper)
							? t(i.helper.apply(this.element[0], [e, this.currentItem]))
							: "clone" === i.helper
							? this.currentItem.clone()
							: this.currentItem;
					return (
						n.parents("body").length ||
							t(
								"parent" !== i.appendTo
									? i.appendTo
									: this.currentItem[0].parentNode
							)[0].appendChild(n[0]),
						n[0] === this.currentItem[0] &&
							(this._storedCSS = {
								width: this.currentItem[0].style.width,
								height: this.currentItem[0].style.height,
								position: this.currentItem.css("position"),
								top: this.currentItem.css("top"),
								left: this.currentItem.css("left"),
							}),
						(!n[0].style.width || i.forceHelperSize) &&
							n.width(this.currentItem.width()),
						(!n[0].style.height || i.forceHelperSize) &&
							n.height(this.currentItem.height()),
						n
					);
				},
				_adjustOffsetFromHelper: function (e) {
					"string" == typeof e && (e = e.split(" ")),
						t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
						"left" in e &&
							(this.offset.click.left = e.left + this.margins.left),
						"right" in e &&
							(this.offset.click.left =
								this.helperProportions.width - e.right + this.margins.left),
						"top" in e && (this.offset.click.top = e.top + this.margins.top),
						"bottom" in e &&
							(this.offset.click.top =
								this.helperProportions.height - e.bottom + this.margins.top);
				},
				_getParentOffset: function () {
					this.offsetParent = this.helper.offsetParent();
					var e = this.offsetParent.offset();
					return (
						"absolute" === this.cssPosition &&
							this.scrollParent[0] !== this.document[0] &&
							t.contains(this.scrollParent[0], this.offsetParent[0]) &&
							((e.left += this.scrollParent.scrollLeft()),
							(e.top += this.scrollParent.scrollTop())),
						(this.offsetParent[0] === this.document[0].body ||
							(this.offsetParent[0].tagName &&
								"html" === this.offsetParent[0].tagName.toLowerCase() &&
								t.ui.ie)) &&
							(e = { top: 0, left: 0 }),
						{
							top:
								e.top +
								(parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
							left:
								e.left +
								(parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
						}
					);
				},
				_getRelativeOffset: function () {
					if ("relative" === this.cssPosition) {
						var t = this.currentItem.position();
						return {
							top:
								t.top -
								(parseInt(this.helper.css("top"), 10) || 0) +
								this.scrollParent.scrollTop(),
							left:
								t.left -
								(parseInt(this.helper.css("left"), 10) || 0) +
								this.scrollParent.scrollLeft(),
						};
					}
					return { top: 0, left: 0 };
				},
				_cacheMargins: function () {
					this.margins = {
						left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
						top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
					};
				},
				_cacheHelperProportions: function () {
					this.helperProportions = {
						width: this.helper.outerWidth(),
						height: this.helper.outerHeight(),
					};
				},
				_setContainment: function () {
					var e,
						i,
						n,
						s = this.options;
					"parent" === s.containment &&
						(s.containment = this.helper[0].parentNode),
						("document" === s.containment || "window" === s.containment) &&
							(this.containment = [
								0 - this.offset.relative.left - this.offset.parent.left,
								0 - this.offset.relative.top - this.offset.parent.top,
								"document" === s.containment
									? this.document.width()
									: this.window.width() -
									  this.helperProportions.width -
									  this.margins.left,
								("document" === s.containment
									? this.document.height() ||
									  document.body.parentNode.scrollHeight
									: this.window.height() ||
									  this.document[0].body.parentNode.scrollHeight) -
									this.helperProportions.height -
									this.margins.top,
							]),
						/^(document|window|parent)$/.test(s.containment) ||
							((e = t(s.containment)[0]),
							(i = t(s.containment).offset()),
							(n = "hidden" !== t(e).css("overflow")),
							(this.containment = [
								i.left +
									(parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
									(parseInt(t(e).css("paddingLeft"), 10) || 0) -
									this.margins.left,
								i.top +
									(parseInt(t(e).css("borderTopWidth"), 10) || 0) +
									(parseInt(t(e).css("paddingTop"), 10) || 0) -
									this.margins.top,
								i.left +
									(n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
									(parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
									(parseInt(t(e).css("paddingRight"), 10) || 0) -
									this.helperProportions.width -
									this.margins.left,
								i.top +
									(n
										? Math.max(e.scrollHeight, e.offsetHeight)
										: e.offsetHeight) -
									(parseInt(t(e).css("borderTopWidth"), 10) || 0) -
									(parseInt(t(e).css("paddingBottom"), 10) || 0) -
									this.helperProportions.height -
									this.margins.top,
							]));
				},
				_convertPositionTo: function (e, i) {
					i || (i = this.position);
					var n = "absolute" === e ? 1 : -1,
						s =
							"absolute" !== this.cssPosition ||
							(this.scrollParent[0] !== this.document[0] &&
								t.contains(this.scrollParent[0], this.offsetParent[0]))
								? this.scrollParent
								: this.offsetParent,
						o = /(html|body)/i.test(s[0].tagName);
					return {
						top:
							i.top +
							this.offset.relative.top * n +
							this.offset.parent.top * n -
							("fixed" === this.cssPosition
								? -this.scrollParent.scrollTop()
								: o
								? 0
								: s.scrollTop()) *
								n,
						left:
							i.left +
							this.offset.relative.left * n +
							this.offset.parent.left * n -
							("fixed" === this.cssPosition
								? -this.scrollParent.scrollLeft()
								: o
								? 0
								: s.scrollLeft()) *
								n,
					};
				},
				_generatePosition: function (e) {
					var i,
						n,
						s = this.options,
						o = e.pageX,
						a = e.pageY,
						r =
							"absolute" !== this.cssPosition ||
							(this.scrollParent[0] !== this.document[0] &&
								t.contains(this.scrollParent[0], this.offsetParent[0]))
								? this.scrollParent
								: this.offsetParent,
						l = /(html|body)/i.test(r[0].tagName);
					return (
						"relative" !== this.cssPosition ||
							(this.scrollParent[0] !== this.document[0] &&
								this.scrollParent[0] !== this.offsetParent[0]) ||
							(this.offset.relative = this._getRelativeOffset()),
						this.originalPosition &&
							(this.containment &&
								(e.pageX - this.offset.click.left < this.containment[0] &&
									(o = this.containment[0] + this.offset.click.left),
								e.pageY - this.offset.click.top < this.containment[1] &&
									(a = this.containment[1] + this.offset.click.top),
								e.pageX - this.offset.click.left > this.containment[2] &&
									(o = this.containment[2] + this.offset.click.left),
								e.pageY - this.offset.click.top > this.containment[3] &&
									(a = this.containment[3] + this.offset.click.top)),
							s.grid &&
								((i =
									this.originalPageY +
									Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]),
								(a = this.containment
									? i - this.offset.click.top >= this.containment[1] &&
									  i - this.offset.click.top <= this.containment[3]
										? i
										: i - this.offset.click.top >= this.containment[1]
										? i - s.grid[1]
										: i + s.grid[1]
									: i),
								(n =
									this.originalPageX +
									Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]),
								(o = this.containment
									? n - this.offset.click.left >= this.containment[0] &&
									  n - this.offset.click.left <= this.containment[2]
										? n
										: n - this.offset.click.left >= this.containment[0]
										? n - s.grid[0]
										: n + s.grid[0]
									: n))),
						{
							top:
								a -
								this.offset.click.top -
								this.offset.relative.top -
								this.offset.parent.top +
								("fixed" === this.cssPosition
									? -this.scrollParent.scrollTop()
									: l
									? 0
									: r.scrollTop()),
							left:
								o -
								this.offset.click.left -
								this.offset.relative.left -
								this.offset.parent.left +
								("fixed" === this.cssPosition
									? -this.scrollParent.scrollLeft()
									: l
									? 0
									: r.scrollLeft()),
						}
					);
				},
				_rearrange: function (t, e, i, n) {
					i
						? i[0].appendChild(this.placeholder[0])
						: e.item[0].parentNode.insertBefore(
								this.placeholder[0],
								"down" === this.direction ? e.item[0] : e.item[0].nextSibling
						  ),
						(this.counter = this.counter ? ++this.counter : 1);
					var s = this.counter;
					this._delay(function () {
						s === this.counter && this.refreshPositions(!n);
					});
				},
				_clear: function (t, e) {
					function i(t, e, i) {
						return function (n) {
							i._trigger(t, n, e._uiHash(e));
						};
					}
					this.reverting = !1;
					var n,
						s = [];
					if (
						(!this._noFinalSort &&
							this.currentItem.parent().length &&
							this.placeholder.before(this.currentItem),
						(this._noFinalSort = null),
						this.helper[0] === this.currentItem[0])
					) {
						for (n in this._storedCSS)
							("auto" === this._storedCSS[n] ||
								"static" === this._storedCSS[n]) &&
								(this._storedCSS[n] = "");
						this.currentItem.css(this._storedCSS),
							this._removeClass(this.currentItem, "ui-sortable-helper");
					} else this.currentItem.show();
					for (
						this.fromOutside &&
							!e &&
							s.push(function (t) {
								this._trigger("receive", t, this._uiHash(this.fromOutside));
							}),
							(!this.fromOutside &&
								this.domPosition.prev ===
									this.currentItem.prev().not(".ui-sortable-helper")[0] &&
								this.domPosition.parent === this.currentItem.parent()[0]) ||
								e ||
								s.push(function (t) {
									this._trigger("update", t, this._uiHash());
								}),
							this !== this.currentContainer &&
								(e ||
									(s.push(function (t) {
										this._trigger("remove", t, this._uiHash());
									}),
									s.push(
										function (t) {
											return function (e) {
												t._trigger("receive", e, this._uiHash(this));
											};
										}.call(this, this.currentContainer)
									),
									s.push(
										function (t) {
											return function (e) {
												t._trigger("update", e, this._uiHash(this));
											};
										}.call(this, this.currentContainer)
									))),
							n = this.containers.length - 1;
						n >= 0;
						n--
					)
						e || s.push(i("deactivate", this, this.containers[n])),
							this.containers[n].containerCache.over &&
								(s.push(i("out", this, this.containers[n])),
								(this.containers[n].containerCache.over = 0));
					if (
						(this.storedCursor &&
							(this.document.find("body").css("cursor", this.storedCursor),
							this.storedStylesheet.remove()),
						this._storedOpacity &&
							this.helper.css("opacity", this._storedOpacity),
						this._storedZIndex &&
							this.helper.css(
								"zIndex",
								"auto" === this._storedZIndex ? "" : this._storedZIndex
							),
						(this.dragging = !1),
						e || this._trigger("beforeStop", t, this._uiHash()),
						this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
						this.cancelHelperRemoval ||
							(this.helper[0] !== this.currentItem[0] && this.helper.remove(),
							(this.helper = null)),
						!e)
					) {
						for (n = 0; s.length > n; n++) s[n].call(this, t);
						this._trigger("stop", t, this._uiHash());
					}
					return (this.fromOutside = !1), !this.cancelHelperRemoval;
				},
				_trigger: function () {
					!1 === t.Widget.prototype._trigger.apply(this, arguments) &&
						this.cancel();
				},
				_uiHash: function (e) {
					var i = e || this;
					return {
						helper: i.helper,
						placeholder: i.placeholder || t([]),
						position: i.position,
						originalPosition: i.originalPosition,
						offset: i.positionAbs,
						item: i.currentItem,
						sender: e ? e.element : null,
					};
				},
			}),
			t.widget("ui.spinner", {
				version: "1.12.1",
				defaultElement: "<input>",
				widgetEventPrefix: "spin",
				options: {
					classes: {
						"ui-spinner": "ui-corner-all",
						"ui-spinner-down": "ui-corner-br",
						"ui-spinner-up": "ui-corner-tr",
					},
					culture: null,
					icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
					incremental: !0,
					max: null,
					min: null,
					numberFormat: null,
					page: 10,
					step: 1,
					change: null,
					spin: null,
					start: null,
					stop: null,
				},
				_create: function () {
					this._setOption("max", this.options.max),
						this._setOption("min", this.options.min),
						this._setOption("step", this.options.step),
						"" !== this.value() && this._value(this.element.val(), !0),
						this._draw(),
						this._on(this._events),
						this._refresh(),
						this._on(this.window, {
							beforeunload: function () {
								this.element.removeAttr("autocomplete");
							},
						});
				},
				_getCreateOptions: function () {
					var e = this._super(),
						i = this.element;
					return (
						t.each(["min", "max", "step"], function (t, n) {
							var s = i.attr(n);
							null != s && s.length && (e[n] = s);
						}),
						e
					);
				},
				_events: {
					keydown: function (t) {
						this._start(t) && this._keydown(t) && t.preventDefault();
					},
					keyup: "_stop",
					focus: function () {
						this.previous = this.element.val();
					},
					blur: function (t) {
						return this.cancelBlur
							? void delete this.cancelBlur
							: (this._stop(),
							  this._refresh(),
							  void (
									this.previous !== this.element.val() &&
									this._trigger("change", t)
							  ));
					},
					mousewheel: function (t, e) {
						if (e) {
							if (!this.spinning && !this._start(t)) return !1;
							this._spin((e > 0 ? 1 : -1) * this.options.step, t),
								clearTimeout(this.mousewheelTimer),
								(this.mousewheelTimer = this._delay(function () {
									this.spinning && this._stop(t);
								}, 100)),
								t.preventDefault();
						}
					},
					"mousedown .ui-spinner-button": function (e) {
						function i() {
							this.element[0] === t.ui.safeActiveElement(this.document[0]) ||
								(this.element.trigger("focus"),
								(this.previous = n),
								this._delay(function () {
									this.previous = n;
								}));
						}
						var n;
						(n =
							this.element[0] === t.ui.safeActiveElement(this.document[0])
								? this.previous
								: this.element.val()),
							e.preventDefault(),
							i.call(this),
							(this.cancelBlur = !0),
							this._delay(function () {
								delete this.cancelBlur, i.call(this);
							}),
							!1 !== this._start(e) &&
								this._repeat(
									null,
									t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
									e
								);
					},
					"mouseup .ui-spinner-button": "_stop",
					"mouseenter .ui-spinner-button": function (e) {
						return t(e.currentTarget).hasClass("ui-state-active")
							? !1 !== this._start(e) &&
									void this._repeat(
										null,
										t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
										e
									)
							: void 0;
					},
					"mouseleave .ui-spinner-button": "_stop",
				},
				_enhance: function () {
					this.uiSpinner = this.element
						.attr("autocomplete", "off")
						.wrap("<span>")
						.parent()
						.append("<a></a><a></a>");
				},
				_draw: function () {
					this._enhance(),
						this._addClass(
							this.uiSpinner,
							"ui-spinner",
							"ui-widget ui-widget-content"
						),
						this._addClass("ui-spinner-input"),
						this.element.attr("role", "spinbutton"),
						(this.buttons = this.uiSpinner
							.children("a")
							.attr("tabIndex", -1)
							.attr("aria-hidden", !0)
							.button({ classes: { "ui-button": "" } })),
						this._removeClass(this.buttons, "ui-corner-all"),
						this._addClass(
							this.buttons.first(),
							"ui-spinner-button ui-spinner-up"
						),
						this._addClass(
							this.buttons.last(),
							"ui-spinner-button ui-spinner-down"
						),
						this.buttons
							.first()
							.button({ icon: this.options.icons.up, showLabel: !1 }),
						this.buttons
							.last()
							.button({ icon: this.options.icons.down, showLabel: !1 }),
						this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
							this.uiSpinner.height() > 0 &&
							this.uiSpinner.height(this.uiSpinner.height());
				},
				_keydown: function (e) {
					var i = this.options,
						n = t.ui.keyCode;
					switch (e.keyCode) {
						case n.UP:
							return this._repeat(null, 1, e), !0;
						case n.DOWN:
							return this._repeat(null, -1, e), !0;
						case n.PAGE_UP:
							return this._repeat(null, i.page, e), !0;
						case n.PAGE_DOWN:
							return this._repeat(null, -i.page, e), !0;
					}
					return !1;
				},
				_start: function (t) {
					return (
						!(!this.spinning && !1 === this._trigger("start", t)) &&
						(this.counter || (this.counter = 1), (this.spinning = !0), !0)
					);
				},
				_repeat: function (t, e, i) {
					(t = t || 500),
						clearTimeout(this.timer),
						(this.timer = this._delay(function () {
							this._repeat(40, e, i);
						}, t)),
						this._spin(e * this.options.step, i);
				},
				_spin: function (t, e) {
					var i = this.value() || 0;
					this.counter || (this.counter = 1),
						(i = this._adjustValue(i + t * this._increment(this.counter))),
						(this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
							(this._value(i), this.counter++);
				},
				_increment: function (e) {
					var i = this.options.incremental;
					return i
						? t.isFunction(i)
							? i(e)
							: Math.floor(
									(e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1
							  )
						: 1;
				},
				_precision: function () {
					var t = this._precisionOf(this.options.step);
					return (
						null !== this.options.min &&
							(t = Math.max(t, this._precisionOf(this.options.min))),
						t
					);
				},
				_precisionOf: function (t) {
					var e = "" + t,
						i = e.indexOf(".");
					return -1 === i ? 0 : e.length - i - 1;
				},
				_adjustValue: function (t) {
					var e,
						i,
						n = this.options;
					return (
						(i = t - (e = null !== n.min ? n.min : 0)),
						(t = e + (i = Math.round(i / n.step) * n.step)),
						(t = parseFloat(t.toFixed(this._precision()))),
						null !== n.max && t > n.max
							? n.max
							: null !== n.min && n.min > t
							? n.min
							: t
					);
				},
				_stop: function (t) {
					this.spinning &&
						(clearTimeout(this.timer),
						clearTimeout(this.mousewheelTimer),
						(this.counter = 0),
						(this.spinning = !1),
						this._trigger("stop", t));
				},
				_setOption: function (t, e) {
					var i, n, s;
					return "culture" === t || "numberFormat" === t
						? ((i = this._parse(this.element.val())),
						  (this.options[t] = e),
						  void this.element.val(this._format(i)))
						: (("max" === t || "min" === t || "step" === t) &&
								"string" == typeof e &&
								(e = this._parse(e)),
						  "icons" === t &&
								((n = this.buttons.first().find(".ui-icon")),
								this._removeClass(n, null, this.options.icons.up),
								this._addClass(n, null, e.up),
								(s = this.buttons.last().find(".ui-icon")),
								this._removeClass(s, null, this.options.icons.down),
								this._addClass(s, null, e.down)),
						  void this._super(t, e));
				},
				_setOptionDisabled: function (t) {
					this._super(t),
						this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
						this.element.prop("disabled", !!t),
						this.buttons.button(t ? "disable" : "enable");
				},
				_setOptions: o(function (t) {
					this._super(t);
				}),
				_parse: function (t) {
					return (
						"string" == typeof t &&
							"" !== t &&
							(t =
								window.Globalize && this.options.numberFormat
									? Globalize.parseFloat(t, 10, this.options.culture)
									: +t),
						"" === t || isNaN(t) ? null : t
					);
				},
				_format: function (t) {
					return "" === t
						? ""
						: window.Globalize && this.options.numberFormat
						? Globalize.format(
								t,
								this.options.numberFormat,
								this.options.culture
						  )
						: t;
				},
				_refresh: function () {
					this.element.attr({
						"aria-valuemin": this.options.min,
						"aria-valuemax": this.options.max,
						"aria-valuenow": this._parse(this.element.val()),
					});
				},
				isValid: function () {
					var t = this.value();
					return null !== t && t === this._adjustValue(t);
				},
				_value: function (t, e) {
					var i;
					"" !== t &&
						null !== (i = this._parse(t)) &&
						(e || (i = this._adjustValue(i)), (t = this._format(i))),
						this.element.val(t),
						this._refresh();
				},
				_destroy: function () {
					this.element
						.prop("disabled", !1)
						.removeAttr(
							"autocomplete role aria-valuemin aria-valuemax aria-valuenow"
						),
						this.uiSpinner.replaceWith(this.element);
				},
				stepUp: o(function (t) {
					this._stepUp(t);
				}),
				_stepUp: function (t) {
					this._start() &&
						(this._spin((t || 1) * this.options.step), this._stop());
				},
				stepDown: o(function (t) {
					this._stepDown(t);
				}),
				_stepDown: function (t) {
					this._start() &&
						(this._spin((t || 1) * -this.options.step), this._stop());
				},
				pageUp: o(function (t) {
					this._stepUp((t || 1) * this.options.page);
				}),
				pageDown: o(function (t) {
					this._stepDown((t || 1) * this.options.page);
				}),
				value: function (t) {
					return arguments.length
						? void o(this._value).call(this, t)
						: this._parse(this.element.val());
				},
				widget: function () {
					return this.uiSpinner;
				},
			}),
			!1 !== t.uiBackCompat &&
				t.widget("ui.spinner", t.ui.spinner, {
					_enhance: function () {
						this.uiSpinner = this.element
							.attr("autocomplete", "off")
							.wrap(this._uiSpinnerHtml())
							.parent()
							.append(this._buttonHtml());
					},
					_uiSpinnerHtml: function () {
						return "<span>";
					},
					_buttonHtml: function () {
						return "<a></a><a></a>";
					},
				}),
			t.ui.spinner,
			t.widget("ui.tabs", {
				version: "1.12.1",
				delay: 300,
				options: {
					active: null,
					classes: {
						"ui-tabs": "ui-corner-all",
						"ui-tabs-nav": "ui-corner-all",
						"ui-tabs-panel": "ui-corner-bottom",
						"ui-tabs-tab": "ui-corner-top",
					},
					collapsible: !1,
					event: "click",
					heightStyle: "content",
					hide: null,
					show: null,
					activate: null,
					beforeActivate: null,
					beforeLoad: null,
					load: null,
				},
				_isLocal: (function () {
					var t = /#.*$/;
					return function (e) {
						var i, n;
						(i = e.href.replace(t, "")), (n = location.href.replace(t, ""));
						try {
							i = decodeURIComponent(i);
						} catch (t) {}
						try {
							n = decodeURIComponent(n);
						} catch (t) {}
						return e.hash.length > 1 && i === n;
					};
				})(),
				_create: function () {
					var e = this,
						i = this.options;
					(this.running = !1),
						this._addClass("ui-tabs", "ui-widget ui-widget-content"),
						this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
						this._processTabs(),
						(i.active = this._initialActive()),
						t.isArray(i.disabled) &&
							(i.disabled = t
								.unique(
									i.disabled.concat(
										t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
											return e.tabs.index(t);
										})
									)
								)
								.sort()),
						(this.active =
							!1 !== this.options.active && this.anchors.length
								? this._findActive(i.active)
								: t()),
						this._refresh(),
						this.active.length && this.load(i.active);
				},
				_initialActive: function () {
					var e = this.options.active,
						i = this.options.collapsible,
						n = location.hash.substring(1);
					return (
						null === e &&
							(n &&
								this.tabs.each(function (i, s) {
									return t(s).attr("aria-controls") === n
										? ((e = i), !1)
										: void 0;
								}),
							null === e &&
								(e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
							(null === e || -1 === e) && (e = !!this.tabs.length && 0)),
						!1 !== e &&
							-1 === (e = this.tabs.index(this.tabs.eq(e))) &&
							(e = !i && 0),
						!i && !1 === e && this.anchors.length && (e = 0),
						e
					);
				},
				_getCreateEventData: function () {
					return {
						tab: this.active,
						panel: this.active.length ? this._getPanelForTab(this.active) : t(),
					};
				},
				_tabKeydown: function (e) {
					var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
						n = this.tabs.index(i),
						s = !0;
					if (!this._handlePageNav(e)) {
						switch (e.keyCode) {
							case t.ui.keyCode.RIGHT:
							case t.ui.keyCode.DOWN:
								n++;
								break;
							case t.ui.keyCode.UP:
							case t.ui.keyCode.LEFT:
								(s = !1), n--;
								break;
							case t.ui.keyCode.END:
								n = this.anchors.length - 1;
								break;
							case t.ui.keyCode.HOME:
								n = 0;
								break;
							case t.ui.keyCode.SPACE:
								return (
									e.preventDefault(),
									clearTimeout(this.activating),
									void this._activate(n)
								);
							case t.ui.keyCode.ENTER:
								return (
									e.preventDefault(),
									clearTimeout(this.activating),
									void this._activate(n !== this.options.active && n)
								);
							default:
								return;
						}
						e.preventDefault(),
							clearTimeout(this.activating),
							(n = this._focusNextTab(n, s)),
							e.ctrlKey ||
								e.metaKey ||
								(i.attr("aria-selected", "false"),
								this.tabs.eq(n).attr("aria-selected", "true"),
								(this.activating = this._delay(function () {
									this.option("active", n);
								}, this.delay)));
					}
				},
				_panelKeydown: function (e) {
					this._handlePageNav(e) ||
						(e.ctrlKey &&
							e.keyCode === t.ui.keyCode.UP &&
							(e.preventDefault(), this.active.trigger("focus")));
				},
				_handlePageNav: function (e) {
					return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
						? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
						  !0)
						: e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
						? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
						  !0)
						: void 0;
				},
				_findNextTab: function (e, i) {
					for (
						var n = this.tabs.length - 1;
						-1 !==
						t.inArray(
							(e > n && (e = 0), 0 > e && (e = n), e),
							this.options.disabled
						);

					)
						e = i ? e + 1 : e - 1;
					return e;
				},
				_focusNextTab: function (t, e) {
					return (
						(t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t
					);
				},
				_setOption: function (t, e) {
					return "active" === t
						? void this._activate(e)
						: (this._super(t, e),
						  "collapsible" === t &&
								(this._toggleClass("ui-tabs-collapsible", null, e),
								e || !1 !== this.options.active || this._activate(0)),
						  "event" === t && this._setupEvents(e),
						  void ("heightStyle" === t && this._setupHeightStyle(e)));
				},
				_sanitizeSelector: function (t) {
					return t
						? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
						: "";
				},
				refresh: function () {
					var e = this.options,
						i = this.tablist.children(":has(a[href])");
					(e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
						return i.index(t);
					})),
						this._processTabs(),
						!1 !== e.active && this.anchors.length
							? this.active.length &&
							  !t.contains(this.tablist[0], this.active[0])
								? this.tabs.length === e.disabled.length
									? ((e.active = !1), (this.active = t()))
									: this._activate(
											this._findNextTab(Math.max(0, e.active - 1), !1)
									  )
								: (e.active = this.tabs.index(this.active))
							: ((e.active = !1), (this.active = t())),
						this._refresh();
				},
				_refresh: function () {
					this._setOptionDisabled(this.options.disabled),
						this._setupEvents(this.options.event),
						this._setupHeightStyle(this.options.heightStyle),
						this.tabs
							.not(this.active)
							.attr({
								"aria-selected": "false",
								"aria-expanded": "false",
								tabIndex: -1,
							}),
						this.panels
							.not(this._getPanelForTab(this.active))
							.hide()
							.attr({ "aria-hidden": "true" }),
						this.active.length
							? (this.active.attr({
									"aria-selected": "true",
									"aria-expanded": "true",
									tabIndex: 0,
							  }),
							  this._addClass(
									this.active,
									"ui-tabs-active",
									"ui-state-active"
							  ),
							  this._getPanelForTab(this.active)
									.show()
									.attr({ "aria-hidden": "false" }))
							: this.tabs.eq(0).attr("tabIndex", 0);
				},
				_processTabs: function () {
					var e = this,
						i = this.tabs,
						n = this.anchors,
						s = this.panels;
					(this.tablist = this._getList().attr("role", "tablist")),
						this._addClass(
							this.tablist,
							"ui-tabs-nav",
							"ui-helper-reset ui-helper-clearfix ui-widget-header"
						),
						this.tablist
							.on("mousedown" + this.eventNamespace, "> li", function (e) {
								t(this).is(".ui-state-disabled") && e.preventDefault();
							})
							.on(
								"focus" + this.eventNamespace,
								".ui-tabs-anchor",
								function () {
									t(this).closest("li").is(".ui-state-disabled") && this.blur();
								}
							),
						(this.tabs = this.tablist
							.find("> li:has(a[href])")
							.attr({ role: "tab", tabIndex: -1 })),
						this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
						(this.anchors = this.tabs
							.map(function () {
								return t("a", this)[0];
							})
							.attr({ role: "presentation", tabIndex: -1 })),
						this._addClass(this.anchors, "ui-tabs-anchor"),
						(this.panels = t()),
						this.anchors.each(function (i, n) {
							var s,
								o,
								a,
								r = t(n).uniqueId().attr("id"),
								l = t(n).closest("li"),
								h = l.attr("aria-controls");
							e._isLocal(n)
								? ((a = (s = n.hash).substring(1)),
								  (o = e.element.find(e._sanitizeSelector(s))))
								: ((s =
										"#" +
										(a = l.attr("aria-controls") || t({}).uniqueId()[0].id)),
								  (o = e.element.find(s)).length ||
										(o = e._createPanel(a)).insertAfter(
											e.panels[i - 1] || e.tablist
										),
								  o.attr("aria-live", "polite")),
								o.length && (e.panels = e.panels.add(o)),
								h && l.data("ui-tabs-aria-controls", h),
								l.attr({ "aria-controls": a, "aria-labelledby": r }),
								o.attr("aria-labelledby", r);
						}),
						this.panels.attr("role", "tabpanel"),
						this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
						i &&
							(this._off(i.not(this.tabs)),
							this._off(n.not(this.anchors)),
							this._off(s.not(this.panels)));
				},
				_getList: function () {
					return this.tablist || this.element.find("ol, ul").eq(0);
				},
				_createPanel: function (e) {
					return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
				},
				_setOptionDisabled: function (e) {
					var i, n, s;
					for (
						t.isArray(e) &&
							(e.length
								? e.length === this.anchors.length && (e = !0)
								: (e = !1)),
							s = 0;
						(n = this.tabs[s]);
						s++
					)
						(i = t(n)),
							!0 === e || -1 !== t.inArray(s, e)
								? (i.attr("aria-disabled", "true"),
								  this._addClass(i, null, "ui-state-disabled"))
								: (i.removeAttr("aria-disabled"),
								  this._removeClass(i, null, "ui-state-disabled"));
					(this.options.disabled = e),
						this._toggleClass(
							this.widget(),
							this.widgetFullName + "-disabled",
							null,
							!0 === e
						);
				},
				_setupEvents: function (e) {
					var i = {};
					e &&
						t.each(e.split(" "), function (t, e) {
							i[e] = "_eventHandler";
						}),
						this._off(this.anchors.add(this.tabs).add(this.panels)),
						this._on(!0, this.anchors, {
							click: function (t) {
								t.preventDefault();
							},
						}),
						this._on(this.anchors, i),
						this._on(this.tabs, { keydown: "_tabKeydown" }),
						this._on(this.panels, { keydown: "_panelKeydown" }),
						this._focusable(this.tabs),
						this._hoverable(this.tabs);
				},
				_setupHeightStyle: function (e) {
					var i,
						n = this.element.parent();
					"fill" === e
						? ((i = n.height()),
						  (i -= this.element.outerHeight() - this.element.height()),
						  this.element.siblings(":visible").each(function () {
								var e = t(this),
									n = e.css("position");
								"absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
						  }),
						  this.element
								.children()
								.not(this.panels)
								.each(function () {
									i -= t(this).outerHeight(!0);
								}),
						  this.panels
								.each(function () {
									t(this).height(
										Math.max(0, i - t(this).innerHeight() + t(this).height())
									);
								})
								.css("overflow", "auto"))
						: "auto" === e &&
						  ((i = 0),
						  this.panels
								.each(function () {
									i = Math.max(i, t(this).height("").height());
								})
								.height(i));
				},
				_eventHandler: function (e) {
					var i = this.options,
						n = this.active,
						s = t(e.currentTarget).closest("li"),
						o = s[0] === n[0],
						a = o && i.collapsible,
						r = a ? t() : this._getPanelForTab(s),
						l = n.length ? this._getPanelForTab(n) : t(),
						h = { oldTab: n, oldPanel: l, newTab: a ? t() : s, newPanel: r };
					e.preventDefault(),
						s.hasClass("ui-state-disabled") ||
							s.hasClass("ui-tabs-loading") ||
							this.running ||
							(o && !i.collapsible) ||
							!1 === this._trigger("beforeActivate", e, h) ||
							((i.active = !a && this.tabs.index(s)),
							(this.active = o ? t() : s),
							this.xhr && this.xhr.abort(),
							l.length ||
								r.length ||
								t.error("jQuery UI Tabs: Mismatching fragment identifier."),
							r.length && this.load(this.tabs.index(s), e),
							this._toggle(e, h));
				},
				_toggle: function (e, i) {
					function n() {
						(o.running = !1), o._trigger("activate", e, i);
					}
					function s() {
						o._addClass(
							i.newTab.closest("li"),
							"ui-tabs-active",
							"ui-state-active"
						),
							a.length && o.options.show
								? o._show(a, o.options.show, n)
								: (a.show(), n());
					}
					var o = this,
						a = i.newPanel,
						r = i.oldPanel;
					(this.running = !0),
						r.length && this.options.hide
							? this._hide(r, this.options.hide, function () {
									o._removeClass(
										i.oldTab.closest("li"),
										"ui-tabs-active",
										"ui-state-active"
									),
										s();
							  })
							: (this._removeClass(
									i.oldTab.closest("li"),
									"ui-tabs-active",
									"ui-state-active"
							  ),
							  r.hide(),
							  s()),
						r.attr("aria-hidden", "true"),
						i.oldTab.attr({
							"aria-selected": "false",
							"aria-expanded": "false",
						}),
						a.length && r.length
							? i.oldTab.attr("tabIndex", -1)
							: a.length &&
							  this.tabs
									.filter(function () {
										return 0 === t(this).attr("tabIndex");
									})
									.attr("tabIndex", -1),
						a.attr("aria-hidden", "false"),
						i.newTab.attr({
							"aria-selected": "true",
							"aria-expanded": "true",
							tabIndex: 0,
						});
				},
				_activate: function (e) {
					var i,
						n = this._findActive(e);
					n[0] !== this.active[0] &&
						(n.length || (n = this.active),
						(i = n.find(".ui-tabs-anchor")[0]),
						this._eventHandler({
							target: i,
							currentTarget: i,
							preventDefault: t.noop,
						}));
				},
				_findActive: function (e) {
					return !1 === e ? t() : this.tabs.eq(e);
				},
				_getIndex: function (e) {
					return (
						"string" == typeof e &&
							(e = this.anchors.index(
								this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']")
							)),
						e
					);
				},
				_destroy: function () {
					this.xhr && this.xhr.abort(),
						this.tablist.removeAttr("role").off(this.eventNamespace),
						this.anchors.removeAttr("role tabIndex").removeUniqueId(),
						this.tabs.add(this.panels).each(function () {
							t.data(this, "ui-tabs-destroy")
								? t(this).remove()
								: t(this).removeAttr(
										"role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
								  );
						}),
						this.tabs.each(function () {
							var e = t(this),
								i = e.data("ui-tabs-aria-controls");
							i
								? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
								: e.removeAttr("aria-controls");
						}),
						this.panels.show(),
						"content" !== this.options.heightStyle &&
							this.panels.css("height", "");
				},
				enable: function (e) {
					var i = this.options.disabled;
					!1 !== i &&
						(void 0 === e
							? (i = !1)
							: ((e = this._getIndex(e)),
							  (i = t.isArray(i)
									? t.map(i, function (t) {
											return t !== e ? t : null;
									  })
									: t.map(this.tabs, function (t, i) {
											return i !== e ? i : null;
									  }))),
						this._setOptionDisabled(i));
				},
				disable: function (e) {
					var i = this.options.disabled;
					if (!0 !== i) {
						if (void 0 === e) i = !0;
						else {
							if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
							i = t.isArray(i) ? t.merge([e], i).sort() : [e];
						}
						this._setOptionDisabled(i);
					}
				},
				load: function (e, i) {
					e = this._getIndex(e);
					var n = this,
						s = this.tabs.eq(e),
						o = s.find(".ui-tabs-anchor"),
						a = this._getPanelForTab(s),
						r = { tab: s, panel: a },
						l = function (t, e) {
							"abort" === e && n.panels.stop(!1, !0),
								n._removeClass(s, "ui-tabs-loading"),
								a.removeAttr("aria-busy"),
								t === n.xhr && delete n.xhr;
						};
					this._isLocal(o[0]) ||
						((this.xhr = t.ajax(this._ajaxSettings(o, i, r))),
						this.xhr &&
							"canceled" !== this.xhr.statusText &&
							(this._addClass(s, "ui-tabs-loading"),
							a.attr("aria-busy", "true"),
							this.xhr
								.done(function (t, e, s) {
									setTimeout(function () {
										a.html(t), n._trigger("load", i, r), l(s, e);
									}, 1);
								})
								.fail(function (t, e) {
									setTimeout(function () {
										l(t, e);
									}, 1);
								})));
				},
				_ajaxSettings: function (e, i, n) {
					var s = this;
					return {
						url: e.attr("href").replace(/#.*$/, ""),
						beforeSend: function (e, o) {
							return s._trigger(
								"beforeLoad",
								i,
								t.extend({ jqXHR: e, ajaxSettings: o }, n)
							);
						},
					};
				},
				_getPanelForTab: function (e) {
					var i = t(e).attr("aria-controls");
					return this.element.find(this._sanitizeSelector("#" + i));
				},
			}),
			!1 !== t.uiBackCompat &&
				t.widget("ui.tabs", t.ui.tabs, {
					_processTabs: function () {
						this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
					},
				}),
			t.ui.tabs,
			t.widget("ui.tooltip", {
				version: "1.12.1",
				options: {
					classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
					content: function () {
						var e = t(this).attr("title") || "";
						return t("<a>").text(e).html();
					},
					hide: !0,
					items: "[title]:not([disabled])",
					position: {
						my: "left top+15",
						at: "left bottom",
						collision: "flipfit flip",
					},
					show: !0,
					track: !1,
					close: null,
					open: null,
				},
				_addDescribedBy: function (e, i) {
					var n = (e.attr("aria-describedby") || "").split(/\s+/);
					n.push(i),
						e
							.data("ui-tooltip-id", i)
							.attr("aria-describedby", t.trim(n.join(" ")));
				},
				_removeDescribedBy: function (e) {
					var i = e.data("ui-tooltip-id"),
						n = (e.attr("aria-describedby") || "").split(/\s+/),
						s = t.inArray(i, n);
					-1 !== s && n.splice(s, 1),
						e.removeData("ui-tooltip-id"),
						(n = t.trim(n.join(" ")))
							? e.attr("aria-describedby", n)
							: e.removeAttr("aria-describedby");
				},
				_create: function () {
					this._on({ mouseover: "open", focusin: "open" }),
						(this.tooltips = {}),
						(this.parents = {}),
						(this.liveRegion = t("<div>")
							.attr({
								role: "log",
								"aria-live": "assertive",
								"aria-relevant": "additions",
							})
							.appendTo(this.document[0].body)),
						this._addClass(
							this.liveRegion,
							null,
							"ui-helper-hidden-accessible"
						),
						(this.disabledTitles = t([]));
				},
				_setOption: function (e, i) {
					var n = this;
					this._super(e, i),
						"content" === e &&
							t.each(this.tooltips, function (t, e) {
								n._updateContent(e.element);
							});
				},
				_setOptionDisabled: function (t) {
					this[t ? "_disable" : "_enable"]();
				},
				_disable: function () {
					var e = this;
					t.each(this.tooltips, function (i, n) {
						var s = t.Event("blur");
						(s.target = s.currentTarget = n.element[0]), e.close(s, !0);
					}),
						(this.disabledTitles = this.disabledTitles.add(
							this.element
								.find(this.options.items)
								.addBack()
								.filter(function () {
									var e = t(this);
									return e.is("[title]")
										? e
												.data("ui-tooltip-title", e.attr("title"))
												.removeAttr("title")
										: void 0;
								})
						));
				},
				_enable: function () {
					this.disabledTitles.each(function () {
						var e = t(this);
						e.data("ui-tooltip-title") &&
							e.attr("title", e.data("ui-tooltip-title"));
					}),
						(this.disabledTitles = t([]));
				},
				open: function (e) {
					var i = this,
						n = t(e ? e.target : this.element).closest(this.options.items);
					n.length &&
						!n.data("ui-tooltip-id") &&
						(n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
						n.data("ui-tooltip-open", !0),
						e &&
							"mouseover" === e.type &&
							n.parents().each(function () {
								var e,
									n = t(this);
								n.data("ui-tooltip-open") &&
									(((e = t.Event("blur")).target = e.currentTarget = this),
									i.close(e, !0)),
									n.attr("title") &&
										(n.uniqueId(),
										(i.parents[this.id] = {
											element: this,
											title: n.attr("title"),
										}),
										n.attr("title", ""));
							}),
						this._registerCloseHandlers(e, n),
						this._updateContent(n, e));
				},
				_updateContent: function (t, e) {
					var i,
						n = this.options.content,
						s = this,
						o = e ? e.type : null;
					return "string" == typeof n || n.nodeType || n.jquery
						? this._open(e, t, n)
						: void (
								(i = n.call(t[0], function (i) {
									s._delay(function () {
										t.data("ui-tooltip-open") &&
											(e && (e.type = o), this._open(e, t, i));
									});
								})) && this._open(e, t, i)
						  );
				},
				_open: function (e, i, n) {
					function s(t) {
						(h.of = t), a.is(":hidden") || a.position(h);
					}
					var o,
						a,
						r,
						l,
						h = t.extend({}, this.options.position);
					if (n) {
						if ((o = this._find(i)))
							return void o.tooltip.find(".ui-tooltip-content").html(n);
						i.is("[title]") &&
							(e && "mouseover" === e.type
								? i.attr("title", "")
								: i.removeAttr("title")),
							(o = this._tooltip(i)),
							(a = o.tooltip),
							this._addDescribedBy(i, a.attr("id")),
							a.find(".ui-tooltip-content").html(n),
							this.liveRegion.children().hide(),
							(l = t("<div>").html(a.find(".ui-tooltip-content").html()))
								.removeAttr("name")
								.find("[name]")
								.removeAttr("name"),
							l.removeAttr("id").find("[id]").removeAttr("id"),
							l.appendTo(this.liveRegion),
							this.options.track && e && /^mouse/.test(e.type)
								? (this._on(this.document, { mousemove: s }), s(e))
								: a.position(t.extend({ of: i }, this.options.position)),
							a.hide(),
							this._show(a, this.options.show),
							this.options.track &&
								this.options.show &&
								this.options.show.delay &&
								(r = this.delayedShow =
									setInterval(function () {
										a.is(":visible") && (s(h.of), clearInterval(r));
									}, t.fx.interval)),
							this._trigger("open", e, { tooltip: a });
					}
				},
				_registerCloseHandlers: function (e, i) {
					var n = {
						keyup: function (e) {
							if (e.keyCode === t.ui.keyCode.ESCAPE) {
								var n = t.Event(e);
								(n.currentTarget = i[0]), this.close(n, !0);
							}
						},
					};
					i[0] !== this.element[0] &&
						(n.remove = function () {
							this._removeTooltip(this._find(i).tooltip);
						}),
						(e && "mouseover" !== e.type) || (n.mouseleave = "close"),
						(e && "focusin" !== e.type) || (n.focusout = "close"),
						this._on(!0, i, n);
				},
				close: function (e) {
					var i,
						n = this,
						s = t(e ? e.currentTarget : this.element),
						o = this._find(s);
					return o
						? ((i = o.tooltip),
						  void (
								o.closing ||
								(clearInterval(this.delayedShow),
								s.data("ui-tooltip-title") &&
									!s.attr("title") &&
									s.attr("title", s.data("ui-tooltip-title")),
								this._removeDescribedBy(s),
								(o.hiding = !0),
								i.stop(!0),
								this._hide(i, this.options.hide, function () {
									n._removeTooltip(t(this));
								}),
								s.removeData("ui-tooltip-open"),
								this._off(s, "mouseleave focusout keyup"),
								s[0] !== this.element[0] && this._off(s, "remove"),
								this._off(this.document, "mousemove"),
								e &&
									"mouseleave" === e.type &&
									t.each(this.parents, function (e, i) {
										t(i.element).attr("title", i.title), delete n.parents[e];
									}),
								(o.closing = !0),
								this._trigger("close", e, { tooltip: i }),
								o.hiding || (o.closing = !1))
						  ))
						: void s.removeData("ui-tooltip-open");
				},
				_tooltip: function (e) {
					var i = t("<div>").attr("role", "tooltip"),
						n = t("<div>").appendTo(i),
						s = i.uniqueId().attr("id");
					return (
						this._addClass(n, "ui-tooltip-content"),
						this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
						i.appendTo(this._appendTo(e)),
						(this.tooltips[s] = { element: e, tooltip: i })
					);
				},
				_find: function (t) {
					var e = t.data("ui-tooltip-id");
					return e ? this.tooltips[e] : null;
				},
				_removeTooltip: function (t) {
					t.remove(), delete this.tooltips[t.attr("id")];
				},
				_appendTo: function (t) {
					var e = t.closest(".ui-front, dialog");
					return e.length || (e = this.document[0].body), e;
				},
				_destroy: function () {
					var e = this;
					t.each(this.tooltips, function (i, n) {
						var s = t.Event("blur"),
							o = n.element;
						(s.target = s.currentTarget = o[0]),
							e.close(s, !0),
							t("#" + i).remove(),
							o.data("ui-tooltip-title") &&
								(o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
								o.removeData("ui-tooltip-title"));
					}),
						this.liveRegion.remove();
				},
			}),
			!1 !== t.uiBackCompat &&
				t.widget("ui.tooltip", t.ui.tooltip, {
					options: { tooltipClass: null },
					_tooltip: function () {
						var t = this._superApply(arguments);
						return (
							this.options.tooltipClass &&
								t.tooltip.addClass(this.options.tooltipClass),
							t
						);
					},
				}),
			t.ui.tooltip;
	}),
	(function (t) {
		function e(t, e) {
			if (!(t.originalEvent.touches.length > 1)) {
				t.preventDefault();
				var i = t.originalEvent.changedTouches[0],
					n = document.createEvent("MouseEvents");
				n.initMouseEvent(
					e,
					!0,
					!0,
					window,
					1,
					i.screenX,
					i.screenY,
					i.clientX,
					i.clientY,
					!1,
					!1,
					!1,
					!1,
					0,
					null
				),
					t.target.dispatchEvent(n);
			}
		}
		if (((t.support.touch = "ontouchend" in document), t.support.touch)) {
			var i,
				n = t.ui.mouse.prototype,
				s = n._mouseInit,
				o = n._mouseDestroy;
			(n._touchStart = function (t) {
				!i &&
					this._mouseCapture(t.originalEvent.changedTouches[0]) &&
					((i = !0),
					(this._touchMoved = !1),
					e(t, "mouseover"),
					e(t, "mousemove"),
					e(t, "mousedown"));
			}),
				(n._touchMove = function (t) {
					i && ((this._touchMoved = !0), e(t, "mousemove"));
				}),
				(n._touchEnd = function (t) {
					i &&
						(e(t, "mouseup"),
						e(t, "mouseout"),
						this._touchMoved || e(t, "click"),
						(i = !1));
				}),
				(n._mouseInit = function () {
					var e = this;
					e.element.bind({
						touchstart: t.proxy(e, "_touchStart"),
						touchmove: t.proxy(e, "_touchMove"),
						touchend: t.proxy(e, "_touchEnd"),
					}),
						s.call(e);
				}),
				(n._mouseDestroy = function () {
					var e = this;
					e.element.unbind({
						touchstart: t.proxy(e, "_touchStart"),
						touchmove: t.proxy(e, "_touchMove"),
						touchend: t.proxy(e, "_touchEnd"),
					}),
						o.call(e);
				});
		}
	})(jQuery),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define([], e)
			: "object" == typeof exports
			? (module.exports = e())
			: (t.Tether = e());
	})(this, function () {
		"use strict";
		function t(t, e) {
			if (!(t instanceof e))
				throw new TypeError("Cannot call a class as a function");
		}
		function e(t) {
			var i = t.getBoundingClientRect(),
				n = {};
			for (var s in i) n[s] = i[s];
			try {
				if (t.ownerDocument !== document) {
					var o = t.ownerDocument.defaultView.frameElement;
					if (o) {
						var a = e(o);
						(n.top += a.top),
							(n.bottom += a.top),
							(n.left += a.left),
							(n.right += a.left);
					}
				}
			} catch (t) {}
			return n;
		}
		function i(t) {
			var e = (getComputedStyle(t) || {}).position,
				i = [];
			if ("fixed" === e) return [t];
			for (var n = t; (n = n.parentNode) && n && 1 === n.nodeType; ) {
				var s = void 0;
				try {
					s = getComputedStyle(n);
				} catch (t) {}
				if (null == s) return i.push(n), i;
				var o = s,
					a = o.overflow,
					r = o.overflowX,
					l = o.overflowY;
				/(auto|scroll|overlay)/.test(a + l + r) &&
					("absolute" !== e ||
						["relative", "absolute", "fixed"].indexOf(s.position) >= 0) &&
					i.push(n);
			}
			return (
				i.push(t.ownerDocument.body),
				t.ownerDocument !== document && i.push(t.ownerDocument.defaultView),
				i
			);
		}
		function n() {
			w && document.body.removeChild(w), (w = null);
		}
		function s(t) {
			var i = void 0;
			t === document
				? ((i = document), (t = document.documentElement))
				: (i = t.ownerDocument);
			var n = i.documentElement,
				s = e(t),
				o = k();
			return (
				(s.top -= o.top),
				(s.left -= o.left),
				void 0 === s.width &&
					(s.width = document.body.scrollWidth - s.left - s.right),
				void 0 === s.height &&
					(s.height = document.body.scrollHeight - s.top - s.bottom),
				(s.top = s.top - n.clientTop),
				(s.left = s.left - n.clientLeft),
				(s.right = i.body.clientWidth - s.width - s.left),
				(s.bottom = i.body.clientHeight - s.height - s.top),
				s
			);
		}
		function o(t) {
			return t.offsetParent || document.documentElement;
		}
		function a() {
			if (T) return T;
			var t = document.createElement("div");
			(t.style.width = "100%"), (t.style.height = "200px");
			var e = document.createElement("div");
			r(e.style, {
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none",
				visibility: "hidden",
				width: "200px",
				height: "150px",
				overflow: "hidden",
			}),
				e.appendChild(t),
				document.body.appendChild(e);
			var i = t.offsetWidth;
			e.style.overflow = "scroll";
			var n = t.offsetWidth;
			i === n && (n = e.clientWidth), document.body.removeChild(e);
			var s = i - n;
			return (T = { width: s, height: s });
		}
		function r() {
			var t =
					arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				e = [];
			return (
				Array.prototype.push.apply(e, arguments),
				e.slice(1).forEach(function (e) {
					if (e)
						for (var i in e) ({}.hasOwnProperty.call(e, i) && (t[i] = e[i]));
				}),
				t
			);
		}
		function l(t, e) {
			if (void 0 !== t.classList)
				e.split(" ").forEach(function (e) {
					e.trim() && t.classList.remove(e);
				});
			else {
				var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
					n = u(t).replace(i, " ");
				d(t, n);
			}
		}
		function h(t, e) {
			if (void 0 !== t.classList)
				e.split(" ").forEach(function (e) {
					e.trim() && t.classList.add(e);
				});
			else {
				l(t, e);
				var i = u(t) + " " + e;
				d(t, i);
			}
		}
		function c(t, e) {
			if (void 0 !== t.classList) return t.classList.contains(e);
			var i = u(t);
			return new RegExp("(^| )" + e + "( |$)", "gi").test(i);
		}
		function u(t) {
			return t.className instanceof
				t.ownerDocument.defaultView.SVGAnimatedString
				? t.className.baseVal
				: t.className;
		}
		function d(t, e) {
			t.setAttribute("class", e);
		}
		function p(t, e, i) {
			i.forEach(function (i) {
				-1 === e.indexOf(i) && c(t, i) && l(t, i);
			}),
				e.forEach(function (e) {
					c(t, e) || h(t, e);
				});
		}
		function t(t, e) {
			if (!(t instanceof e))
				throw new TypeError("Cannot call a class as a function");
		}
		function f(t, e) {
			var i =
				arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
			return t + i >= e && e >= t - i;
		}
		function g() {
			return "object" == typeof performance &&
				"function" == typeof performance.now
				? performance.now()
				: +new Date();
		}
		function m() {
			for (
				var t = { top: 0, left: 0 }, e = arguments.length, i = Array(e), n = 0;
				n < e;
				n++
			)
				i[n] = arguments[n];
			return (
				i.forEach(function (e) {
					var i = e.top,
						n = e.left;
					"string" == typeof i && (i = parseFloat(i, 10)),
						"string" == typeof n && (n = parseFloat(n, 10)),
						(t.top += i),
						(t.left += n);
				}),
				t
			);
		}
		function v(t, e) {
			return (
				"string" == typeof t.left &&
					-1 !== t.left.indexOf("%") &&
					(t.left = (parseFloat(t.left, 10) / 100) * e.width),
				"string" == typeof t.top &&
					-1 !== t.top.indexOf("%") &&
					(t.top = (parseFloat(t.top, 10) / 100) * e.height),
				t
			);
		}
		function _(t, e) {
			return (
				"scrollParent" === e
					? (e = t.scrollParents[0])
					: "window" === e &&
					  (e = [
							pageXOffset,
							pageYOffset,
							innerWidth + pageXOffset,
							innerHeight + pageYOffset,
					  ]),
				e === document && (e = e.documentElement),
				void 0 !== e.nodeType &&
					(function () {
						var t = e,
							i = s(e),
							n = i,
							o = getComputedStyle(e);
						if (
							((e = [n.left, n.top, i.width + n.left, i.height + n.top]),
							t.ownerDocument !== document)
						) {
							var a = t.ownerDocument.defaultView;
							(e[0] += a.pageXOffset),
								(e[1] += a.pageYOffset),
								(e[2] += a.pageXOffset),
								(e[3] += a.pageYOffset);
						}
						q.forEach(function (t, i) {
							"Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t
								? (e[i] += parseFloat(o["border" + t + "Width"]))
								: (e[i] -= parseFloat(o["border" + t + "Width"]));
						});
					})(),
				e
			);
		}
		var b = (function () {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var n = e[i];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n);
					}
				}
				return function (e, i, n) {
					return i && t(e.prototype, i), n && t(e, n), e;
				};
			})(),
			y = void 0;
		void 0 === y && (y = { modules: [] });
		var w = null,
			x = (function () {
				var t = 0;
				return function () {
					return ++t;
				};
			})(),
			C = {},
			k = function () {
				var t = w;
				(t && document.body.contains(t)) ||
					((t = document.createElement("div")).setAttribute(
						"data-tether-id",
						x()
					),
					r(t.style, { top: 0, left: 0, position: "absolute" }),
					document.body.appendChild(t),
					(w = t));
				var i = t.getAttribute("data-tether-id");
				return (
					void 0 === C[i] &&
						((C[i] = e(t)),
						S(function () {
							delete C[i];
						})),
					C[i]
				);
			},
			T = null,
			D = [],
			S = function (t) {
				D.push(t);
			},
			E = function () {
				for (var t = void 0; (t = D.pop()); ) t();
			},
			I = (function () {
				function e() {
					t(this, e);
				}
				return (
					b(e, [
						{
							key: "on",
							value: function (t, e, i) {
								var n =
									!(arguments.length <= 3 || void 0 === arguments[3]) &&
									arguments[3];
								void 0 === this.bindings && (this.bindings = {}),
									void 0 === this.bindings[t] && (this.bindings[t] = []),
									this.bindings[t].push({ handler: e, ctx: i, once: n });
							},
						},
						{
							key: "once",
							value: function (t, e, i) {
								this.on(t, e, i, !0);
							},
						},
						{
							key: "off",
							value: function (t, e) {
								if (void 0 !== this.bindings && void 0 !== this.bindings[t])
									if (void 0 === e) delete this.bindings[t];
									else
										for (var i = 0; i < this.bindings[t].length; )
											this.bindings[t][i].handler === e
												? this.bindings[t].splice(i, 1)
												: ++i;
							},
						},
						{
							key: "trigger",
							value: function (t) {
								if (void 0 !== this.bindings && this.bindings[t]) {
									for (
										var e = 0,
											i = arguments.length,
											n = Array(i > 1 ? i - 1 : 0),
											s = 1;
										s < i;
										s++
									)
										n[s - 1] = arguments[s];
									for (; e < this.bindings[t].length; ) {
										var o = this.bindings[t][e],
											a = o.handler,
											r = o.ctx,
											l = o.once,
											h = r;
										void 0 === h && (h = this),
											a.apply(h, n),
											l ? this.bindings[t].splice(e, 1) : ++e;
									}
								}
							},
						},
					]),
					e
				);
			})();
		y.Utils = {
			getActualBoundingClientRect: e,
			getScrollParents: i,
			getBounds: s,
			getOffsetParent: o,
			extend: r,
			addClass: h,
			removeClass: l,
			hasClass: c,
			updateClasses: p,
			defer: S,
			flush: E,
			uniqueId: x,
			Evented: I,
			getScrollBarSize: a,
			removeUtilElements: n,
		};
		var A = (function () {
				return function (t, e) {
					if (Array.isArray(t)) return t;
					if (Symbol.iterator in Object(t))
						return (function (t, e) {
							var i = [],
								n = !0,
								s = !1,
								o = void 0;
							try {
								for (
									var a, r = t[Symbol.iterator]();
									!(n = (a = r.next()).done) &&
									(i.push(a.value), !e || i.length !== e);
									n = !0
								);
							} catch (t) {
								(s = !0), (o = t);
							} finally {
								try {
									!n && r.return && r.return();
								} finally {
									if (s) throw o;
								}
							}
							return i;
						})(t, e);
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				};
			})(),
			P =
				((b = (function () {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var n = e[i];
							(n.enumerable = n.enumerable || !1),
								(n.configurable = !0),
								"value" in n && (n.writable = !0),
								Object.defineProperty(t, n.key, n);
						}
					}
					return function (e, i, n) {
						return i && t(e.prototype, i), n && t(e, n), e;
					};
				})()),
				function (t, e, i) {
					for (var n = !0; n; ) {
						var s = t,
							o = e,
							a = i;
						(n = !1), null === s && (s = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(s, o);
						if (void 0 !== r) {
							if ("value" in r) return r.value;
							var l = r.get;
							if (void 0 === l) return;
							return l.call(a);
						}
						var h = Object.getPrototypeOf(s);
						if (null === h) return;
						(t = h), (e = o), (i = a), (n = !0), (r = h = void 0);
					}
				});
		if (void 0 === y)
			throw new Error("You must include the utils.js file before tether.js");
		var i = (B = y.Utils).getScrollParents,
			o = ((s = B.getBounds), B.getOffsetParent),
			h = ((r = B.extend), B.addClass),
			l = B.removeClass,
			a =
				((p = B.updateClasses),
				(S = B.defer),
				(E = B.flush),
				B.getScrollBarSize),
			n = B.removeUtilElements,
			O = (function () {
				if ("undefined" == typeof document) return "";
				for (
					var t = document.createElement("div"),
						e = [
							"transform",
							"WebkitTransform",
							"OTransform",
							"MozTransform",
							"msTransform",
						],
						i = 0;
					i < e.length;
					++i
				) {
					var n = e[i];
					if (void 0 !== t.style[n]) return n;
				}
			})(),
			F = [],
			M = function () {
				F.forEach(function (t) {
					t.position(!1);
				}),
					E();
			};
		!(function () {
			var t = null,
				e = null,
				i = null,
				n = function n() {
					return void 0 !== e && e > 16
						? ((e = Math.min(e - 16, 250)), void (i = setTimeout(n, 250)))
						: void (
								(void 0 !== t && g() - t < 10) ||
								(null != i && (clearTimeout(i), (i = null)),
								(t = g()),
								M(),
								(e = g() - t))
						  );
				};
			"undefined" != typeof window &&
				void 0 !== window.addEventListener &&
				["resize", "scroll", "touchmove"].forEach(function (t) {
					window.addEventListener(t, n);
				});
		})();
		var N = { center: "center", left: "right", right: "left" },
			H = { middle: "middle", top: "bottom", bottom: "top" },
			$ = {
				top: 0,
				left: 0,
				middle: "50%",
				center: "50%",
				bottom: "100%",
				right: "100%",
			},
			L = function (t) {
				var e = t.left,
					i = t.top;
				return (
					void 0 !== $[t.left] && (e = $[t.left]),
					void 0 !== $[t.top] && (i = $[t.top]),
					{ left: e, top: i }
				);
			},
			z = function (t) {
				var e = t.split(" "),
					i = A(e, 2);
				return { top: i[0], left: i[1] };
			},
			W = z,
			j = (function (e) {
				function c(e) {
					var i = this;
					t(this, c),
						P(Object.getPrototypeOf(c.prototype), "constructor", this).call(
							this
						),
						(this.position = this.position.bind(this)),
						F.push(this),
						(this.history = []),
						this.setOptions(e, !1),
						y.modules.forEach(function (t) {
							void 0 !== t.initialize && t.initialize.call(i);
						}),
						this.position();
				}
				return (
					(function (t, e) {
						if ("function" != typeof e && null !== e)
							throw new TypeError(
								"Super expression must either be null or a function, not " +
									typeof e
							);
						(t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							e &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(t, e)
									: (t.__proto__ = e));
					})(c, I),
					b(c, [
						{
							key: "getClass",
							value: function () {
								var t =
										arguments.length <= 0 || void 0 === arguments[0]
											? ""
											: arguments[0],
									e = this.options.classes;
								return void 0 !== e && e[t]
									? this.options.classes[t]
									: this.options.classPrefix
									? this.options.classPrefix + "-" + t
									: t;
							},
						},
						{
							key: "setOptions",
							value: function (t) {
								var e = this,
									n =
										arguments.length <= 1 ||
										void 0 === arguments[1] ||
										arguments[1];
								this.options = r(
									{
										offset: "0 0",
										targetOffset: "0 0",
										targetAttachment: "auto auto",
										classPrefix: "tether",
									},
									t
								);
								var s = this.options,
									o = s.element,
									a = s.target,
									l = s.targetModifier;
								if (
									((this.element = o),
									(this.target = a),
									(this.targetModifier = l),
									"viewport" === this.target
										? ((this.target = document.body),
										  (this.targetModifier = "visible"))
										: "scroll-handle" === this.target &&
										  ((this.target = document.body),
										  (this.targetModifier = "scroll-handle")),
									["element", "target"].forEach(function (t) {
										if (void 0 === e[t])
											throw new Error(
												"Tether Error: Both element and target must be defined"
											);
										void 0 !== e[t].jquery
											? (e[t] = e[t][0])
											: "string" == typeof e[t] &&
											  (e[t] = document.querySelector(e[t]));
									}),
									h(this.element, this.getClass("element")),
									!1 !== this.options.addTargetClasses &&
										h(this.target, this.getClass("target")),
									!this.options.attachment)
								)
									throw new Error(
										"Tether Error: You must provide an attachment"
									);
								(this.targetAttachment = W(this.options.targetAttachment)),
									(this.attachment = W(this.options.attachment)),
									(this.offset = z(this.options.offset)),
									(this.targetOffset = z(this.options.targetOffset)),
									void 0 !== this.scrollParents && this.disable(),
									"scroll-handle" === this.targetModifier
										? (this.scrollParents = [this.target])
										: (this.scrollParents = i(this.target)),
									!1 !== this.options.enabled && this.enable(n);
							},
						},
						{
							key: "getTargetBounds",
							value: function () {
								if (void 0 === this.targetModifier) return s(this.target);
								if ("visible" === this.targetModifier)
									return this.target === document.body
										? {
												top: pageYOffset,
												left: pageXOffset,
												height: innerHeight,
												width: innerWidth,
										  }
										: (((a = {
												height: (t = s(this.target)).height,
												width: t.width,
												top: t.top,
												left: t.left,
										  }).height = Math.min(
												a.height,
												t.height - (pageYOffset - t.top)
										  )),
										  (a.height = Math.min(
												a.height,
												t.height -
													(t.top + t.height - (pageYOffset + innerHeight))
										  )),
										  (a.height = Math.min(innerHeight, a.height)),
										  (a.height -= 2),
										  (a.width = Math.min(
												a.width,
												t.width - (pageXOffset - t.left)
										  )),
										  (a.width = Math.min(
												a.width,
												t.width -
													(t.left + t.width - (pageXOffset + innerWidth))
										  )),
										  (a.width = Math.min(innerWidth, a.width)),
										  (a.width -= 2),
										  a.top < pageYOffset && (a.top = pageYOffset),
										  a.left < pageXOffset && (a.left = pageXOffset),
										  a);
								if ("scroll-handle" === this.targetModifier) {
									var t = void 0,
										e = this.target;
									e === document.body
										? ((e = document.documentElement),
										  (t = {
												left: pageXOffset,
												top: pageYOffset,
												height: innerHeight,
												width: innerWidth,
										  }))
										: (t = s(e));
									var i = getComputedStyle(e),
										n = 0;
									(e.scrollWidth > e.clientWidth ||
										[i.overflow, i.overflowX].indexOf("scroll") >= 0 ||
										this.target !== document.body) &&
										(n = 15);
									var o =
											t.height -
											parseFloat(i.borderTopWidth) -
											parseFloat(i.borderBottomWidth) -
											n,
										a = {
											width: 15,
											height: 0.975 * o * (o / e.scrollHeight),
											left:
												t.left + t.width - parseFloat(i.borderLeftWidth) - 15,
										},
										r = 0;
									o < 408 &&
										this.target === document.body &&
										(r = -11e-5 * Math.pow(o, 2) - 0.00727 * o + 22.58),
										this.target !== document.body &&
											(a.height = Math.max(a.height, 24));
									var l = this.target.scrollTop / (e.scrollHeight - o);
									return (
										(a.top =
											l * (o - a.height - r) +
											t.top +
											parseFloat(i.borderTopWidth)),
										this.target === document.body &&
											(a.height = Math.max(a.height, 24)),
										a
									);
								}
							},
						},
						{
							key: "clearCache",
							value: function () {
								this._cache = {};
							},
						},
						{
							key: "cache",
							value: function (t, e) {
								return (
									void 0 === this._cache && (this._cache = {}),
									void 0 === this._cache[t] && (this._cache[t] = e.call(this)),
									this._cache[t]
								);
							},
						},
						{
							key: "enable",
							value: function () {
								var t = this,
									e =
										arguments.length <= 0 ||
										void 0 === arguments[0] ||
										arguments[0];
								!1 !== this.options.addTargetClasses &&
									h(this.target, this.getClass("enabled")),
									h(this.element, this.getClass("enabled")),
									(this.enabled = !0),
									this.scrollParents.forEach(function (e) {
										e !== t.target.ownerDocument &&
											e.addEventListener("scroll", t.position);
									}),
									e && this.position();
							},
						},
						{
							key: "disable",
							value: function () {
								var t = this;
								l(this.target, this.getClass("enabled")),
									l(this.element, this.getClass("enabled")),
									(this.enabled = !1),
									void 0 !== this.scrollParents &&
										this.scrollParents.forEach(function (e) {
											e.removeEventListener("scroll", t.position);
										});
							},
						},
						{
							key: "destroy",
							value: function () {
								var t = this;
								this.disable(),
									F.forEach(function (e, i) {
										e === t && F.splice(i, 1);
									}),
									0 === F.length && n();
							},
						},
						{
							key: "updateAttachClasses",
							value: function (t, e) {
								var i = this;
								(t = t || this.attachment), (e = e || this.targetAttachment);
								void 0 !== this._addAttachClasses &&
									this._addAttachClasses.length &&
									this._addAttachClasses.splice(
										0,
										this._addAttachClasses.length
									),
									void 0 === this._addAttachClasses &&
										(this._addAttachClasses = []);
								var n = this._addAttachClasses;
								t.top &&
									n.push(this.getClass("element-attached") + "-" + t.top),
									t.left &&
										n.push(this.getClass("element-attached") + "-" + t.left),
									e.top &&
										n.push(this.getClass("target-attached") + "-" + e.top),
									e.left &&
										n.push(this.getClass("target-attached") + "-" + e.left);
								var s = [];
								["left", "top", "bottom", "right", "middle", "center"].forEach(
									function (t) {
										s.push(i.getClass("element-attached") + "-" + t),
											s.push(i.getClass("target-attached") + "-" + t);
									}
								),
									S(function () {
										void 0 !== i._addAttachClasses &&
											(p(i.element, i._addAttachClasses, s),
											!1 !== i.options.addTargetClasses &&
												p(i.target, i._addAttachClasses, s),
											delete i._addAttachClasses);
									});
							},
						},
						{
							key: "position",
							value: function () {
								var t = this,
									e =
										arguments.length <= 0 ||
										void 0 === arguments[0] ||
										arguments[0];
								if (this.enabled) {
									this.clearCache();
									var i = (function (t, e) {
										var i = t.left,
											n = t.top;
										return (
											"auto" === i && (i = N[e.left]),
											"auto" === n && (n = H[e.top]),
											{ left: i, top: n }
										);
									})(this.targetAttachment, this.attachment);
									this.updateAttachClasses(this.attachment, i);
									var n = this.cache("element-bounds", function () {
											return s(t.element);
										}),
										r = n.width,
										l = n.height;
									if (0 === r && 0 === l && void 0 !== this.lastSize) {
										var h = this.lastSize;
										(r = h.width), (l = h.height);
									} else this.lastSize = { width: r, height: l };
									var c = this.cache("target-bounds", function () {
											return t.getTargetBounds();
										}),
										u = c,
										d = v(L(this.attachment), { width: r, height: l }),
										p = v(L(i), u),
										f = v(this.offset, { width: r, height: l }),
										g = v(this.targetOffset, u);
									(d = m(d, f)), (p = m(p, g));
									for (
										var _ = c.left + p.left - d.left,
											b = c.top + p.top - d.top,
											w = 0;
										w < y.modules.length;
										++w
									) {
										var x = y.modules[w].position.call(this, {
											left: _,
											top: b,
											targetAttachment: i,
											targetPos: c,
											elementPos: n,
											offset: d,
											targetOffset: p,
											manualOffset: f,
											manualTargetOffset: g,
											scrollbarSize: D,
											attachment: this.attachment,
										});
										if (!1 === x) return !1;
										void 0 !== x &&
											"object" == typeof x &&
											((b = x.top), (_ = x.left));
									}
									var C = {
											page: { top: b, left: _ },
											viewport: {
												top: b - pageYOffset,
												bottom: pageYOffset - b - l + innerHeight,
												left: _ - pageXOffset,
												right: pageXOffset - _ - r + innerWidth,
											},
										},
										k = this.target.ownerDocument,
										T = k.defaultView,
										D = void 0;
									return (
										T.innerHeight > k.documentElement.clientHeight &&
											((D = this.cache("scrollbar-size", a)),
											(C.viewport.bottom -= D.height)),
										T.innerWidth > k.documentElement.clientWidth &&
											((D = this.cache("scrollbar-size", a)),
											(C.viewport.right -= D.width)),
										(-1 !== ["", "static"].indexOf(k.body.style.position) &&
											-1 !==
												["", "static"].indexOf(
													k.body.parentElement.style.position
												)) ||
											((C.page.bottom = k.body.scrollHeight - b - l),
											(C.page.right = k.body.scrollWidth - _ - r)),
										void 0 !== this.options.optimizations &&
											!1 !== this.options.optimizations.moveElement &&
											void 0 === this.targetModifier &&
											(function () {
												var e = t.cache("target-offsetparent", function () {
														return o(t.target);
													}),
													i = t.cache(
														"target-offsetparent-bounds",
														function () {
															return s(e);
														}
													),
													n = getComputedStyle(e),
													a = i,
													r = {};
												if (
													(["Top", "Left", "Bottom", "Right"].forEach(function (
														t
													) {
														r[t.toLowerCase()] = parseFloat(
															n["border" + t + "Width"]
														);
													}),
													(i.right =
														k.body.scrollWidth - i.left - a.width + r.right),
													(i.bottom =
														k.body.scrollHeight - i.top - a.height + r.bottom),
													C.page.top >= i.top + r.top &&
														C.page.bottom >= i.bottom &&
														C.page.left >= i.left + r.left &&
														C.page.right >= i.right)
												) {
													var l = e.scrollTop,
														h = e.scrollLeft;
													C.offset = {
														top: C.page.top - i.top + l - r.top,
														left: C.page.left - i.left + h - r.left,
													};
												}
											})(),
										this.move(C),
										this.history.unshift(C),
										this.history.length > 3 && this.history.pop(),
										e && E(),
										!0
									);
								}
							},
						},
						{
							key: "move",
							value: function (t) {
								var e = this;
								if (void 0 !== this.element.parentNode) {
									var i = {};
									for (var n in t)
										for (var s in ((i[n] = {}), t[n])) {
											for (var a = !1, l = 0; l < this.history.length; ++l) {
												var h = this.history[l];
												if (void 0 !== h[n] && !f(h[n][s], t[n][s])) {
													a = !0;
													break;
												}
											}
											a || (i[n][s] = !0);
										}
									var c = { top: "", left: "", right: "", bottom: "" },
										u = function (t, i) {
											if (
												!1 !==
												(void 0 !== e.options.optimizations
													? e.options.optimizations.gpu
													: null)
											) {
												var n = void 0,
													s = void 0;
												t.top
													? ((c.top = 0), (n = i.top))
													: ((c.bottom = 0), (n = -i.bottom)),
													t.left
														? ((c.left = 0), (s = i.left))
														: ((c.right = 0), (s = -i.right)),
													"number" == typeof window.devicePixelRatio &&
														devicePixelRatio % 1 == 0 &&
														((s =
															Math.round(s * devicePixelRatio) /
															devicePixelRatio),
														(n =
															Math.round(n * devicePixelRatio) /
															devicePixelRatio)),
													(c[O] =
														"translateX(" + s + "px) translateY(" + n + "px)"),
													"msTransform" !== O && (c[O] += " translateZ(0)");
											} else
												t.top
													? (c.top = i.top + "px")
													: (c.bottom = i.bottom + "px"),
													t.left
														? (c.left = i.left + "px")
														: (c.right = i.right + "px");
										},
										d = !1;
									if (
										((i.page.top || i.page.bottom) &&
										(i.page.left || i.page.right)
											? ((c.position = "absolute"), u(i.page, t.page))
											: (i.viewport.top || i.viewport.bottom) &&
											  (i.viewport.left || i.viewport.right)
											? ((c.position = "fixed"), u(i.viewport, t.viewport))
											: void 0 !== i.offset && i.offset.top && i.offset.left
											? (function () {
													c.position = "absolute";
													var n = e.cache("target-offsetparent", function () {
														return o(e.target);
													});
													o(e.element) !== n &&
														S(function () {
															e.element.parentNode.removeChild(e.element),
																n.appendChild(e.element);
														}),
														u(i.offset, t.offset),
														(d = !0);
											  })()
											: ((c.position = "absolute"),
											  u({ top: !0, left: !0 }, t.page)),
										!d)
									)
										if (this.options.bodyElement)
											this.element.parentNode !== this.options.bodyElement &&
												this.options.bodyElement.appendChild(this.element);
										else {
											for (
												var p = function (t) {
														var e = t.ownerDocument;
														return (
															(e.fullscreenElement ||
																e.webkitFullscreenElement ||
																e.mozFullScreenElement ||
																e.msFullscreenElement) === t
														);
													},
													g = !0,
													m = this.element.parentNode;
												m && 1 === m.nodeType && "BODY" !== m.tagName && !p(m);

											) {
												if ("static" !== getComputedStyle(m).position) {
													g = !1;
													break;
												}
												m = m.parentNode;
											}
											g ||
												(this.element.parentNode.removeChild(this.element),
												this.element.ownerDocument.body.appendChild(
													this.element
												));
										}
									var v = {},
										_ = !1;
									for (var s in c) {
										var b = c[s];
										this.element.style[s] !== b && ((_ = !0), (v[s] = b));
									}
									_ &&
										S(function () {
											r(e.element.style, v), e.trigger("repositioned");
										});
								}
							},
						},
					]),
					c
				);
			})();
		(j.modules = []), (y.position = M);
		var R = r(j, y),
			r =
				((A = (function () {
					return function (t, e) {
						if (Array.isArray(t)) return t;
						if (Symbol.iterator in Object(t))
							return (function (t, e) {
								var i = [],
									n = !0,
									s = !1,
									o = void 0;
								try {
									for (
										var a, r = t[Symbol.iterator]();
										!(n = (a = r.next()).done) &&
										(i.push(a.value), !e || i.length !== e);
										n = !0
									);
								} catch (t) {
									(s = !0), (o = t);
								} finally {
									try {
										!n && r.return && r.return();
									} finally {
										if (s) throw o;
									}
								}
								return i;
							})(t, e);
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance"
						);
					};
				})()),
				(s = (B = y.Utils).getBounds),
				B.extend),
			q =
				((p = B.updateClasses),
				(S = B.defer),
				["left", "top", "right", "bottom"]);
		y.modules.push({
			position: function (t) {
				var e = this,
					i = t.top,
					n = t.left,
					o = t.targetAttachment;
				if (!this.options.constraints) return !0;
				var a = this.cache("element-bounds", function () {
						return s(e.element);
					}),
					l = a.height,
					h = a.width;
				if (0 === h && 0 === l && void 0 !== this.lastSize) {
					var c = this.lastSize;
					(h = c.width), (l = c.height);
				}
				var u = this.cache("target-bounds", function () {
						return e.getTargetBounds();
					}),
					d = u.height,
					f = u.width,
					g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
				this.options.constraints.forEach(function (t) {
					var e = t.outOfBoundsClass,
						i = t.pinnedClass;
					e && g.push(e), i && g.push(i);
				}),
					g.forEach(function (t) {
						["left", "top", "right", "bottom"].forEach(function (e) {
							g.push(t + "-" + e);
						});
					});
				var m = [],
					v = r({}, o),
					b = r({}, this.attachment);
				return (
					this.options.constraints.forEach(function (t) {
						var s = t.to,
							a = t.attachment,
							r = t.pin;
						void 0 === a && (a = "");
						var c = void 0,
							u = void 0;
						if (a.indexOf(" ") >= 0) {
							var p = a.split(" "),
								g = A(p, 2);
							(u = g[0]), (c = g[1]);
						} else c = u = a;
						var y = _(e, s);
						("target" !== u && "both" !== u) ||
							(i < y[1] && "top" === v.top && ((i += d), (v.top = "bottom")),
							i + l > y[3] &&
								"bottom" === v.top &&
								((i -= d), (v.top = "top"))),
							"together" === u &&
								("top" === v.top &&
									("bottom" === b.top && i < y[1]
										? ((i += d), (v.top = "bottom"), (i += l), (b.top = "top"))
										: "top" === b.top &&
										  i + l > y[3] &&
										  i - (l - d) >= y[1] &&
										  ((i -= l - d), (v.top = "bottom"), (b.top = "bottom"))),
								"bottom" === v.top &&
									("top" === b.top && i + l > y[3]
										? ((i -= d), (v.top = "top"), (i -= l), (b.top = "bottom"))
										: "bottom" === b.top &&
										  i < y[1] &&
										  i + (2 * l - d) <= y[3] &&
										  ((i += l - d), (v.top = "top"), (b.top = "top"))),
								"middle" === v.top &&
									(i + l > y[3] && "top" === b.top
										? ((i -= l), (b.top = "bottom"))
										: i < y[1] &&
										  "bottom" === b.top &&
										  ((i += l), (b.top = "top")))),
							("target" !== c && "both" !== c) ||
								(n < y[0] &&
									"left" === v.left &&
									((n += f), (v.left = "right")),
								n + h > y[2] &&
									"right" === v.left &&
									((n -= f), (v.left = "left"))),
							"together" === c &&
								(n < y[0] && "left" === v.left
									? "right" === b.left
										? ((n += f),
										  (v.left = "right"),
										  (n += h),
										  (b.left = "left"))
										: "left" === b.left &&
										  ((n += f),
										  (v.left = "right"),
										  (n -= h),
										  (b.left = "right"))
									: n + h > y[2] && "right" === v.left
									? "left" === b.left
										? ((n -= f),
										  (v.left = "left"),
										  (n -= h),
										  (b.left = "right"))
										: "right" === b.left &&
										  ((n -= f), (v.left = "left"), (n += h), (b.left = "left"))
									: "center" === v.left &&
									  (n + h > y[2] && "left" === b.left
											? ((n -= h), (b.left = "right"))
											: n < y[0] &&
											  "right" === b.left &&
											  ((n += h), (b.left = "left")))),
							("element" !== u && "both" !== u) ||
								(i < y[1] && "bottom" === b.top && ((i += l), (b.top = "top")),
								i + l > y[3] &&
									"top" === b.top &&
									((i -= l), (b.top = "bottom"))),
							("element" !== c && "both" !== c) ||
								(n < y[0] &&
									("right" === b.left
										? ((n += h), (b.left = "left"))
										: "center" === b.left && ((n += h / 2), (b.left = "left"))),
								n + h > y[2] &&
									("left" === b.left
										? ((n -= h), (b.left = "right"))
										: "center" === b.left &&
										  ((n -= h / 2), (b.left = "right")))),
							"string" == typeof r
								? (r = r.split(",").map(function (t) {
										return t.trim();
								  }))
								: !0 === r && (r = ["top", "left", "right", "bottom"]),
							(r = r || []);
						var w = [],
							x = [];
						i < y[1] &&
							(r.indexOf("top") >= 0
								? ((i = y[1]), w.push("top"))
								: x.push("top")),
							i + l > y[3] &&
								(r.indexOf("bottom") >= 0
									? ((i = y[3] - l), w.push("bottom"))
									: x.push("bottom")),
							n < y[0] &&
								(r.indexOf("left") >= 0
									? ((n = y[0]), w.push("left"))
									: x.push("left")),
							n + h > y[2] &&
								(r.indexOf("right") >= 0
									? ((n = y[2] - h), w.push("right"))
									: x.push("right")),
							w.length &&
								(function () {
									var t;
									(t =
										void 0 !== e.options.pinnedClass
											? e.options.pinnedClass
											: e.getClass("pinned")),
										m.push(t),
										w.forEach(function (e) {
											m.push(t + "-" + e);
										});
								})(),
							x.length &&
								(function () {
									var t;
									(t =
										void 0 !== e.options.outOfBoundsClass
											? e.options.outOfBoundsClass
											: e.getClass("out-of-bounds")),
										m.push(t),
										x.forEach(function (e) {
											m.push(t + "-" + e);
										});
								})(),
							(w.indexOf("left") >= 0 || w.indexOf("right") >= 0) &&
								(b.left = v.left = !1),
							(w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) &&
								(b.top = v.top = !1),
							(v.top === o.top &&
								v.left === o.left &&
								b.top === e.attachment.top &&
								b.left === e.attachment.left) ||
								(e.updateAttachClasses(b, v),
								e.trigger("update", { attachment: b, targetAttachment: v }));
					}),
					S(function () {
						!1 !== e.options.addTargetClasses && p(e.target, m, g),
							p(e.element, m, g);
					}),
					{ top: i, left: n }
				);
			},
		});
		var B,
			s = (B = y.Utils).getBounds,
			p = B.updateClasses;
		S = B.defer;
		y.modules.push({
			position: function (t) {
				var e = this,
					i = t.top,
					n = t.left,
					o = this.cache("element-bounds", function () {
						return s(e.element);
					}),
					a = o.height,
					r = o.width,
					l = this.getTargetBounds(),
					h = i + a,
					c = n + r,
					u = [];
				i <= l.bottom &&
					h >= l.top &&
					["left", "right"].forEach(function (t) {
						var e = l[t];
						(e !== n && e !== c) || u.push(t);
					}),
					n <= l.right &&
						c >= l.left &&
						["top", "bottom"].forEach(function (t) {
							var e = l[t];
							(e !== i && e !== h) || u.push(t);
						});
				var d = [],
					f = [];
				return (
					d.push(this.getClass("abutted")),
					["left", "top", "right", "bottom"].forEach(function (t) {
						d.push(e.getClass("abutted") + "-" + t);
					}),
					u.length && f.push(this.getClass("abutted")),
					u.forEach(function (t) {
						f.push(e.getClass("abutted") + "-" + t);
					}),
					S(function () {
						!1 !== e.options.addTargetClasses && p(e.target, f, d),
							p(e.element, f, d);
					}),
					!0
				);
			},
		});
		A = (function () {
			return function (t, e) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t))
					return (function (t, e) {
						var i = [],
							n = !0,
							s = !1,
							o = void 0;
						try {
							for (
								var a, r = t[Symbol.iterator]();
								!(n = (a = r.next()).done) &&
								(i.push(a.value), !e || i.length !== e);
								n = !0
							);
						} catch (t) {
							(s = !0), (o = t);
						} finally {
							try {
								!n && r.return && r.return();
							} finally {
								if (s) throw o;
							}
						}
						return i;
					})(t, e);
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance"
				);
			};
		})();
		return (
			y.modules.push({
				position: function (t) {
					var e = t.top,
						i = t.left;
					if (this.options.shift) {
						var n = this.options.shift;
						"function" == typeof this.options.shift &&
							(n = this.options.shift.call(this, { top: e, left: i }));
						var s = void 0,
							o = void 0;
						if ("string" == typeof n) {
							(n = n.split(" "))[1] = n[1] || n[0];
							var a = A(n, 2);
							(s = a[0]),
								(o = a[1]),
								(s = parseFloat(s, 10)),
								(o = parseFloat(o, 10));
						} else (s = n.top), (o = n.left);
						return { top: (e += s), left: (i += o) };
					}
				},
			}),
			R
		);
	}),
	(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module
			? (module.exports = e())
			: "function" == typeof define && define.amd
			? define(e)
			: (t.Popper = e());
	})(this, function () {
		"use strict";
		function t(t) {
			return t && "[object Function]" === {}.toString.call(t);
		}
		function e(t, e) {
			if (1 !== t.nodeType) return [];
			var i = t.ownerDocument.defaultView.getComputedStyle(t, null);
			return e ? i[e] : i;
		}
		function i(t) {
			return "HTML" === t.nodeName ? t : t.parentNode || t.host;
		}
		function n(t) {
			if (!t) return document.body;
			switch (t.nodeName) {
				case "HTML":
				case "BODY":
					return t.ownerDocument.body;
				case "#document":
					return t.body;
			}
			var s = e(t),
				o = s.overflow,
				a = s.overflowX,
				r = s.overflowY;
			return /(auto|scroll|overlay)/.test(o + r + a) ? t : n(i(t));
		}
		function s(t) {
			return 11 === t ? K : 10 === t ? V : K || V;
		}
		function o(t) {
			if (!t) return document.documentElement;
			for (
				var i = s(10) ? document.body : null, n = t.offsetParent || null;
				n === i && t.nextElementSibling;

			)
				n = (t = t.nextElementSibling).offsetParent;
			var a = n && n.nodeName;
			return a && "BODY" !== a && "HTML" !== a
				? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
				  "static" === e(n, "position")
					? o(n)
					: n
				: t
				? t.ownerDocument.documentElement
				: document.documentElement;
		}
		function a(t) {
			return null === t.parentNode ? t : a(t.parentNode);
		}
		function r(t, e) {
			if (!(t && t.nodeType && e && e.nodeType))
				return document.documentElement;
			var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
				n = i ? t : e,
				s = i ? e : t,
				l = document.createRange();
			l.setStart(n, 0), l.setEnd(s, 0);
			var h = l.commonAncestorContainer;
			if ((t !== h && e !== h) || n.contains(s))
				return (function (t) {
					var e = t.nodeName;
					return "BODY" !== e && ("HTML" === e || o(t.firstElementChild) === t);
				})(h)
					? h
					: o(h);
			var c = a(t);
			return c.host ? r(c.host, e) : r(t, a(e).host);
		}
		function l(t) {
			var e =
					"top" ===
					(1 < arguments.length && void 0 !== arguments[1]
						? arguments[1]
						: "top")
						? "scrollTop"
						: "scrollLeft",
				i = t.nodeName;
			if ("BODY" === i || "HTML" === i) {
				var n = t.ownerDocument.documentElement;
				return (t.ownerDocument.scrollingElement || n)[e];
			}
			return t[e];
		}
		function h(t, e) {
			var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
				n = l(e, "top"),
				s = l(e, "left"),
				o = i ? -1 : 1;
			return (
				(t.top += n * o),
				(t.bottom += n * o),
				(t.left += s * o),
				(t.right += s * o),
				t
			);
		}
		function c(t, e) {
			var i = "x" === e ? "Left" : "Top",
				n = "Left" == i ? "Right" : "Bottom";
			return (
				parseFloat(t["border" + i + "Width"], 10) +
				parseFloat(t["border" + n + "Width"], 10)
			);
		}
		function u(t, e, i, n) {
			return j(
				e["offset" + t],
				e["scroll" + t],
				i["client" + t],
				i["offset" + t],
				i["scroll" + t],
				s(10)
					? parseInt(i["offset" + t]) +
							parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) +
							parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")])
					: 0
			);
		}
		function d(t) {
			var e = t.body,
				i = t.documentElement,
				n = s(10) && getComputedStyle(i);
			return { height: u("Height", e, i, n), width: u("Width", e, i, n) };
		}
		function p(t) {
			return Z({}, t, { right: t.left + t.width, bottom: t.top + t.height });
		}
		function f(t) {
			var i = {};
			try {
				if (s(10)) {
					i = t.getBoundingClientRect();
					var n = l(t, "top"),
						o = l(t, "left");
					(i.top += n), (i.left += o), (i.bottom += n), (i.right += o);
				} else i = t.getBoundingClientRect();
			} catch (t) {}
			var a = {
					left: i.left,
					top: i.top,
					width: i.right - i.left,
					height: i.bottom - i.top,
				},
				r = "HTML" === t.nodeName ? d(t.ownerDocument) : {},
				h = r.width || t.clientWidth || a.right - a.left,
				u = r.height || t.clientHeight || a.bottom - a.top,
				f = t.offsetWidth - h,
				g = t.offsetHeight - u;
			if (f || g) {
				var m = e(t);
				(f -= c(m, "x")), (g -= c(m, "y")), (a.width -= f), (a.height -= g);
			}
			return p(a);
		}
		function g(t, i) {
			var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
				a = s(10),
				r = "HTML" === i.nodeName,
				l = f(t),
				c = f(i),
				u = n(t),
				d = e(i),
				g = parseFloat(d.borderTopWidth, 10),
				m = parseFloat(d.borderLeftWidth, 10);
			o && r && ((c.top = j(c.top, 0)), (c.left = j(c.left, 0)));
			var v = p({
				top: l.top - c.top - g,
				left: l.left - c.left - m,
				width: l.width,
				height: l.height,
			});
			if (((v.marginTop = 0), (v.marginLeft = 0), !a && r)) {
				var _ = parseFloat(d.marginTop, 10),
					b = parseFloat(d.marginLeft, 10);
				(v.top -= g - _),
					(v.bottom -= g - _),
					(v.left -= m - b),
					(v.right -= m - b),
					(v.marginTop = _),
					(v.marginLeft = b);
			}
			return (
				(a && !o ? i.contains(u) : i === u && "BODY" !== u.nodeName) &&
					(v = h(v, i)),
				v
			);
		}
		function m(t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
				i = t.ownerDocument.documentElement,
				n = g(t, i),
				s = j(i.clientWidth, window.innerWidth || 0),
				o = j(i.clientHeight, window.innerHeight || 0),
				a = e ? 0 : l(i),
				r = e ? 0 : l(i, "left");
			return p({
				top: a - n.top + n.marginTop,
				left: r - n.left + n.marginLeft,
				width: s,
				height: o,
			});
		}
		function v(t) {
			var n = t.nodeName;
			if ("BODY" === n || "HTML" === n) return !1;
			if ("fixed" === e(t, "position")) return !0;
			var s = i(t);
			return !!s && v(s);
		}
		function _(t) {
			if (!t || !t.parentElement || s()) return document.documentElement;
			for (var i = t.parentElement; i && "none" === e(i, "transform"); )
				i = i.parentElement;
			return i || document.documentElement;
		}
		function b(t, e, s, o) {
			var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
				l = { top: 0, left: 0 },
				h = a ? _(t) : r(t, e);
			if ("viewport" === o) l = m(h, a);
			else {
				var c;
				"scrollParent" === o
					? "BODY" === (c = n(i(e))).nodeName &&
					  (c = t.ownerDocument.documentElement)
					: (c = "window" === o ? t.ownerDocument.documentElement : o);
				var u = g(c, h, a);
				if ("HTML" !== c.nodeName || v(h)) l = u;
				else {
					var p = d(t.ownerDocument),
						f = p.height,
						b = p.width;
					(l.top += u.top - u.marginTop),
						(l.bottom = f + u.top),
						(l.left += u.left - u.marginLeft),
						(l.right = b + u.left);
				}
			}
			var y = "number" == typeof (s = s || 0);
			return (
				(l.left += y ? s : s.left || 0),
				(l.top += y ? s : s.top || 0),
				(l.right -= y ? s : s.right || 0),
				(l.bottom -= y ? s : s.bottom || 0),
				l
			);
		}
		function y(t) {
			return t.width * t.height;
		}
		function w(t, e, i, n, s) {
			var o =
				5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
			if (-1 === t.indexOf("auto")) return t;
			var a = b(i, n, o, s),
				r = {
					top: { width: a.width, height: e.top - a.top },
					right: { width: a.right - e.right, height: a.height },
					bottom: { width: a.width, height: a.bottom - e.bottom },
					left: { width: e.left - a.left, height: a.height },
				},
				l = Object.keys(r)
					.map(function (t) {
						return Z({ key: t }, r[t], { area: y(r[t]) });
					})
					.sort(function (t, e) {
						return e.area - t.area;
					}),
				h = l.filter(function (t) {
					var e = t.width,
						n = t.height;
					return e >= i.clientWidth && n >= i.clientHeight;
				}),
				c = 0 < h.length ? h[0].key : l[0].key,
				u = t.split("-")[1];
			return c + (u ? "-" + u : "");
		}
		function x(t, e, i) {
			var n =
				3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return g(i, n ? _(e) : r(e, i), n);
		}
		function C(t) {
			var e = t.ownerDocument.defaultView.getComputedStyle(t),
				i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
				n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
			return { width: t.offsetWidth + n, height: t.offsetHeight + i };
		}
		function k(t) {
			var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
			return t.replace(/left|right|bottom|top/g, function (t) {
				return e[t];
			});
		}
		function T(t, e, i) {
			i = i.split("-")[0];
			var n = C(t),
				s = { width: n.width, height: n.height },
				o = -1 !== ["right", "left"].indexOf(i),
				a = o ? "top" : "left",
				r = o ? "left" : "top",
				l = o ? "height" : "width",
				h = o ? "width" : "height";
			return (
				(s[a] = e[a] + e[l] / 2 - n[l] / 2),
				(s[r] = i === r ? e[r] - n[h] : e[k(r)]),
				s
			);
		}
		function D(t, e) {
			return Array.prototype.find ? t.find(e) : t.filter(e)[0];
		}
		function S(e, i, n) {
			return (
				(void 0 === n
					? e
					: e.slice(
							0,
							(function (t, e, i) {
								if (Array.prototype.findIndex)
									return t.findIndex(function (t) {
										return t[e] === i;
									});
								var n = D(t, function (t) {
									return t[e] === i;
								});
								return t.indexOf(n);
							})(e, "name", n)
					  )
				).forEach(function (e) {
					e.function &&
						console.warn(
							"`modifier.function` is deprecated, use `modifier.fn`!"
						);
					var n = e.function || e.fn;
					e.enabled &&
						t(n) &&
						((i.offsets.popper = p(i.offsets.popper)),
						(i.offsets.reference = p(i.offsets.reference)),
						(i = n(i, e)));
				}),
				i
			);
		}
		function E(t, e) {
			return t.some(function (t) {
				var i = t.name;
				return t.enabled && i === e;
			});
		}
		function I(t) {
			for (
				var e = [!1, "ms", "Webkit", "Moz", "O"],
					i = t.charAt(0).toUpperCase() + t.slice(1),
					n = 0;
				n < e.length;
				n++
			) {
				var s = e[n],
					o = s ? "" + s + i : t;
				if (void 0 !== document.body.style[o]) return o;
			}
			return null;
		}
		function A(t) {
			var e = t.ownerDocument;
			return e ? e.defaultView : window;
		}
		function P(t, e, i, s) {
			(i.updateBound = s),
				A(t).addEventListener("resize", i.updateBound, { passive: !0 });
			var o = n(t);
			return (
				(function t(e, i, s, o) {
					var a = "BODY" === e.nodeName,
						r = a ? e.ownerDocument.defaultView : e;
					r.addEventListener(i, s, { passive: !0 }),
						a || t(n(r.parentNode), i, s, o),
						o.push(r);
				})(o, "scroll", i.updateBound, i.scrollParents),
				(i.scrollElement = o),
				(i.eventsEnabled = !0),
				i
			);
		}
		function O() {
			var t, e;
			this.state.eventsEnabled &&
				(cancelAnimationFrame(this.scheduleUpdate),
				(this.state =
					((t = this.reference),
					(e = this.state),
					A(t).removeEventListener("resize", e.updateBound),
					e.scrollParents.forEach(function (t) {
						t.removeEventListener("scroll", e.updateBound);
					}),
					(e.updateBound = null),
					(e.scrollParents = []),
					(e.scrollElement = null),
					(e.eventsEnabled = !1),
					e)));
		}
		function F(t) {
			return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
		}
		function M(t, e) {
			Object.keys(e).forEach(function (i) {
				var n = "";
				-1 !==
					["width", "height", "top", "right", "bottom", "left"].indexOf(i) &&
					F(e[i]) &&
					(n = "px"),
					(t.style[i] = e[i] + n);
			});
		}
		function N(t, e, i) {
			var n = D(t, function (t) {
					return t.name === e;
				}),
				s =
					!!n &&
					t.some(function (t) {
						return t.name === i && t.enabled && t.order < n.order;
					});
			if (!s) {
				var o = "`" + e + "`";
				console.warn(
					"`" +
						i +
						"` modifier is required by " +
						o +
						" modifier in order to work, be sure to include it before " +
						o +
						"!"
				);
			}
			return s;
		}
		function H(t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
				i = et.indexOf(t),
				n = et.slice(i + 1).concat(et.slice(0, i));
			return e ? n.reverse() : n;
		}
		function $(t, e, i, n) {
			var s = [0, 0],
				o = -1 !== ["right", "left"].indexOf(n),
				a = t.split(/(\+|\-)/).map(function (t) {
					return t.trim();
				}),
				r = a.indexOf(
					D(a, function (t) {
						return -1 !== t.search(/,|\s/);
					})
				);
			a[r] &&
				-1 === a[r].indexOf(",") &&
				console.warn(
					"Offsets separated by white space(s) are deprecated, use a comma (,) instead."
				);
			var l = /\s*,\s*|\s+/,
				h =
					-1 === r
						? [a]
						: [
								a.slice(0, r).concat([a[r].split(l)[0]]),
								[a[r].split(l)[1]].concat(a.slice(r + 1)),
						  ];
			return (
				(h = h.map(function (t, n) {
					var s = (1 === n ? !o : o) ? "height" : "width",
						a = !1;
					return t
						.reduce(function (t, e) {
							return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
								? ((t[t.length - 1] = e), (a = !0), t)
								: a
								? ((t[t.length - 1] += e), (a = !1), t)
								: t.concat(e);
						}, [])
						.map(function (t) {
							return (function (t, e, i, n) {
								var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
									o = +s[1],
									a = s[2];
								if (!o) return t;
								if (0 === a.indexOf("%")) {
									var r;
									switch (a) {
										case "%p":
											r = i;
											break;
										case "%":
										case "%r":
										default:
											r = n;
									}
									return (p(r)[e] / 100) * o;
								}
								return "vh" === a || "vw" === a
									? (("vh" === a
											? j(
													document.documentElement.clientHeight,
													window.innerHeight || 0
											  )
											: j(
													document.documentElement.clientWidth,
													window.innerWidth || 0
											  )) /
											100) *
											o
									: o;
							})(t, s, e, i);
						});
				})).forEach(function (t, e) {
					t.forEach(function (i, n) {
						F(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1));
					});
				}),
				s
			);
		}
		for (
			var L = Math.min,
				z = Math.floor,
				W = Math.round,
				j = Math.max,
				R = "undefined" != typeof window && "undefined" != typeof document,
				q = ["Edge", "Trident", "Firefox"],
				B = 0,
				Y = 0;
			Y < q.length;
			Y += 1
		)
			if (R && 0 <= navigator.userAgent.indexOf(q[Y])) {
				B = 1;
				break;
			}
		var U =
				R && window.Promise
					? function (t) {
							var e = !1;
							return function () {
								e ||
									((e = !0),
									window.Promise.resolve().then(function () {
										(e = !1), t();
									}));
							};
					  }
					: function (t) {
							var e = !1;
							return function () {
								e ||
									((e = !0),
									setTimeout(function () {
										(e = !1), t();
									}, B));
							};
					  },
			K = R && !(!window.MSInputMethodContext || !document.documentMode),
			V = R && /MSIE 10/.test(navigator.userAgent),
			X = function (t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function");
			},
			Q = (function () {
				function t(t, e) {
					for (var i, n = 0; n < e.length; n++)
						((i = e[n]).enumerable = i.enumerable || !1),
							(i.configurable = !0),
							"value" in i && (i.writable = !0),
							Object.defineProperty(t, i.key, i);
				}
				return function (e, i, n) {
					return i && t(e.prototype, i), n && t(e, n), e;
				};
			})(),
			G = function (t, e, i) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = i),
					t
				);
			},
			Z =
				Object.assign ||
				function (t) {
					for (var e, i = 1; i < arguments.length; i++)
						for (var n in (e = arguments[i]))
							Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t;
				},
			J = R && /Firefox/i.test(navigator.userAgent),
			tt = [
				"auto-start",
				"auto",
				"auto-end",
				"top-start",
				"top",
				"top-end",
				"right-start",
				"right",
				"right-end",
				"bottom-end",
				"bottom",
				"bottom-start",
				"left-end",
				"left",
				"left-start",
			],
			et = tt.slice(3),
			it = "flip",
			nt = "clockwise",
			st = "counterclockwise",
			ot = (function () {
				function e(i, n) {
					var s = this,
						o =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: {};
					X(this, e),
						(this.scheduleUpdate = function () {
							return requestAnimationFrame(s.update);
						}),
						(this.update = U(this.update.bind(this))),
						(this.options = Z({}, e.Defaults, o)),
						(this.state = {
							isDestroyed: !1,
							isCreated: !1,
							scrollParents: [],
						}),
						(this.reference = i && i.jquery ? i[0] : i),
						(this.popper = n && n.jquery ? n[0] : n),
						(this.options.modifiers = {}),
						Object.keys(Z({}, e.Defaults.modifiers, o.modifiers)).forEach(
							function (t) {
								s.options.modifiers[t] = Z(
									{},
									e.Defaults.modifiers[t] || {},
									o.modifiers ? o.modifiers[t] : {}
								);
							}
						),
						(this.modifiers = Object.keys(this.options.modifiers)
							.map(function (t) {
								return Z({ name: t }, s.options.modifiers[t]);
							})
							.sort(function (t, e) {
								return t.order - e.order;
							})),
						this.modifiers.forEach(function (e) {
							e.enabled &&
								t(e.onLoad) &&
								e.onLoad(s.reference, s.popper, s.options, e, s.state);
						}),
						this.update();
					var a = this.options.eventsEnabled;
					a && this.enableEventListeners(), (this.state.eventsEnabled = a);
				}
				return (
					Q(e, [
						{
							key: "update",
							value: function () {
								return function () {
									if (!this.state.isDestroyed) {
										var t = {
											instance: this,
											styles: {},
											arrowStyles: {},
											attributes: {},
											flipped: !1,
											offsets: {},
										};
										(t.offsets.reference = x(
											this.state,
											this.popper,
											this.reference,
											this.options.positionFixed
										)),
											(t.placement = w(
												this.options.placement,
												t.offsets.reference,
												this.popper,
												this.reference,
												this.options.modifiers.flip.boundariesElement,
												this.options.modifiers.flip.padding
											)),
											(t.originalPlacement = t.placement),
											(t.positionFixed = this.options.positionFixed),
											(t.offsets.popper = T(
												this.popper,
												t.offsets.reference,
												t.placement
											)),
											(t.offsets.popper.position = this.options.positionFixed
												? "fixed"
												: "absolute"),
											(t = S(this.modifiers, t)),
											this.state.isCreated
												? this.options.onUpdate(t)
												: ((this.state.isCreated = !0),
												  this.options.onCreate(t));
									}
								}.call(this);
							},
						},
						{
							key: "destroy",
							value: function () {
								return function () {
									return (
										(this.state.isDestroyed = !0),
										E(this.modifiers, "applyStyle") &&
											(this.popper.removeAttribute("x-placement"),
											(this.popper.style.position = ""),
											(this.popper.style.top = ""),
											(this.popper.style.left = ""),
											(this.popper.style.right = ""),
											(this.popper.style.bottom = ""),
											(this.popper.style.willChange = ""),
											(this.popper.style[I("transform")] = "")),
										this.disableEventListeners(),
										this.options.removeOnDestroy &&
											this.popper.parentNode.removeChild(this.popper),
										this
									);
								}.call(this);
							},
						},
						{
							key: "enableEventListeners",
							value: function () {
								return function () {
									this.state.eventsEnabled ||
										(this.state = P(
											this.reference,
											this.options,
											this.state,
											this.scheduleUpdate
										));
								}.call(this);
							},
						},
						{
							key: "disableEventListeners",
							value: function () {
								return O.call(this);
							},
						},
					]),
					e
				);
			})();
		return (
			(ot.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
			(ot.placements = tt),
			(ot.Defaults = {
				placement: "bottom",
				positionFixed: !1,
				eventsEnabled: !0,
				removeOnDestroy: !1,
				onCreate: function () {},
				onUpdate: function () {},
				modifiers: {
					shift: {
						order: 100,
						enabled: !0,
						fn: function (t) {
							var e = t.placement,
								i = e.split("-")[0],
								n = e.split("-")[1];
							if (n) {
								var s = t.offsets,
									o = s.reference,
									a = s.popper,
									r = -1 !== ["bottom", "top"].indexOf(i),
									l = r ? "left" : "top",
									h = r ? "width" : "height",
									c = {
										start: G({}, l, o[l]),
										end: G({}, l, o[l] + o[h] - a[h]),
									};
								t.offsets.popper = Z({}, a, c[n]);
							}
							return t;
						},
					},
					offset: {
						order: 200,
						enabled: !0,
						fn: function (t, e) {
							var i,
								n = e.offset,
								s = t.placement,
								o = t.offsets,
								a = o.popper,
								r = o.reference,
								l = s.split("-")[0];
							return (
								(i = F(+n) ? [+n, 0] : $(n, a, r, l)),
								"left" === l
									? ((a.top += i[0]), (a.left -= i[1]))
									: "right" === l
									? ((a.top += i[0]), (a.left += i[1]))
									: "top" === l
									? ((a.left += i[0]), (a.top -= i[1]))
									: "bottom" === l && ((a.left += i[0]), (a.top += i[1])),
								(t.popper = a),
								t
							);
						},
						offset: 0,
					},
					preventOverflow: {
						order: 300,
						enabled: !0,
						fn: function (t, e) {
							var i = e.boundariesElement || o(t.instance.popper);
							t.instance.reference === i && (i = o(i));
							var n = I("transform"),
								s = t.instance.popper.style,
								a = s.top,
								r = s.left,
								l = s[n];
							(s.top = ""), (s.left = ""), (s[n] = "");
							var h = b(
								t.instance.popper,
								t.instance.reference,
								e.padding,
								i,
								t.positionFixed
							);
							(s.top = a), (s.left = r), (s[n] = l), (e.boundaries = h);
							var c = e.priority,
								u = t.offsets.popper,
								d = {
									primary: function (t) {
										var i = u[t];
										return (
											u[t] < h[t] &&
												!e.escapeWithReference &&
												(i = j(u[t], h[t])),
											G({}, t, i)
										);
									},
									secondary: function (t) {
										var i = "right" === t ? "left" : "top",
											n = u[i];
										return (
											u[t] > h[t] &&
												!e.escapeWithReference &&
												(n = L(
													u[i],
													h[t] - ("right" === t ? u.width : u.height)
												)),
											G({}, i, n)
										);
									},
								};
							return (
								c.forEach(function (t) {
									var e =
										-1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
									u = Z({}, u, d[e](t));
								}),
								(t.offsets.popper = u),
								t
							);
						},
						priority: ["left", "right", "top", "bottom"],
						padding: 5,
						boundariesElement: "scrollParent",
					},
					keepTogether: {
						order: 400,
						enabled: !0,
						fn: function (t) {
							var e = t.offsets,
								i = e.popper,
								n = e.reference,
								s = t.placement.split("-")[0],
								o = z,
								a = -1 !== ["top", "bottom"].indexOf(s),
								r = a ? "right" : "bottom",
								l = a ? "left" : "top",
								h = a ? "width" : "height";
							return (
								i[r] < o(n[l]) && (t.offsets.popper[l] = o(n[l]) - i[h]),
								i[l] > o(n[r]) && (t.offsets.popper[l] = o(n[r])),
								t
							);
						},
					},
					arrow: {
						order: 500,
						enabled: !0,
						fn: function (t, i) {
							var n;
							if (!N(t.instance.modifiers, "arrow", "keepTogether")) return t;
							var s = i.element;
							if ("string" == typeof s) {
								if (!(s = t.instance.popper.querySelector(s))) return t;
							} else if (!t.instance.popper.contains(s))
								return (
									console.warn(
										"WARNING: `arrow.element` must be child of its popper element!"
									),
									t
								);
							var o = t.placement.split("-")[0],
								a = t.offsets,
								r = a.popper,
								l = a.reference,
								h = -1 !== ["left", "right"].indexOf(o),
								c = h ? "height" : "width",
								u = h ? "Top" : "Left",
								d = u.toLowerCase(),
								f = h ? "left" : "top",
								g = h ? "bottom" : "right",
								m = C(s)[c];
							l[g] - m < r[d] && (t.offsets.popper[d] -= r[d] - (l[g] - m)),
								l[d] + m > r[g] && (t.offsets.popper[d] += l[d] + m - r[g]),
								(t.offsets.popper = p(t.offsets.popper));
							var v = l[d] + l[c] / 2 - m / 2,
								_ = e(t.instance.popper),
								b = parseFloat(_["margin" + u], 10),
								y = parseFloat(_["border" + u + "Width"], 10),
								w = v - t.offsets.popper[d] - b - y;
							return (
								(w = j(L(r[c] - m, w), 0)),
								(t.arrowElement = s),
								(t.offsets.arrow = (G((n = {}), d, W(w)), G(n, f, ""), n)),
								t
							);
						},
						element: "[x-arrow]",
					},
					flip: {
						order: 600,
						enabled: !0,
						fn: function (t, e) {
							if (E(t.instance.modifiers, "inner")) return t;
							if (t.flipped && t.placement === t.originalPlacement) return t;
							var i = b(
									t.instance.popper,
									t.instance.reference,
									e.padding,
									e.boundariesElement,
									t.positionFixed
								),
								n = t.placement.split("-")[0],
								s = k(n),
								o = t.placement.split("-")[1] || "",
								a = [];
							switch (e.behavior) {
								case it:
									a = [n, s];
									break;
								case nt:
									a = H(n);
									break;
								case st:
									a = H(n, !0);
									break;
								default:
									a = e.behavior;
							}
							return (
								a.forEach(function (r, l) {
									if (n !== r || a.length === l + 1) return t;
									(n = t.placement.split("-")[0]), (s = k(n));
									var h = t.offsets.popper,
										c = t.offsets.reference,
										u = z,
										d =
											("left" === n && u(h.right) > u(c.left)) ||
											("right" === n && u(h.left) < u(c.right)) ||
											("top" === n && u(h.bottom) > u(c.top)) ||
											("bottom" === n && u(h.top) < u(c.bottom)),
										p = u(h.left) < u(i.left),
										f = u(h.right) > u(i.right),
										g = u(h.top) < u(i.top),
										m = u(h.bottom) > u(i.bottom),
										v =
											("left" === n && p) ||
											("right" === n && f) ||
											("top" === n && g) ||
											("bottom" === n && m),
										_ = -1 !== ["top", "bottom"].indexOf(n),
										b =
											!!e.flipVariations &&
											((_ && "start" === o && p) ||
												(_ && "end" === o && f) ||
												(!_ && "start" === o && g) ||
												(!_ && "end" === o && m));
									(d || v || b) &&
										((t.flipped = !0),
										(d || v) && (n = a[l + 1]),
										b &&
											(o = (function (t) {
												return "end" === t
													? "start"
													: "start" === t
													? "end"
													: t;
											})(o)),
										(t.placement = n + (o ? "-" + o : "")),
										(t.offsets.popper = Z(
											{},
											t.offsets.popper,
											T(t.instance.popper, t.offsets.reference, t.placement)
										)),
										(t = S(t.instance.modifiers, t, "flip")));
								}),
								t
							);
						},
						behavior: "flip",
						padding: 5,
						boundariesElement: "viewport",
					},
					inner: {
						order: 700,
						enabled: !1,
						fn: function (t) {
							var e = t.placement,
								i = e.split("-")[0],
								n = t.offsets,
								s = n.popper,
								o = n.reference,
								a = -1 !== ["left", "right"].indexOf(i),
								r = -1 === ["top", "left"].indexOf(i);
							return (
								(s[a ? "left" : "top"] =
									o[i] - (r ? s[a ? "width" : "height"] : 0)),
								(t.placement = k(e)),
								(t.offsets.popper = p(s)),
								t
							);
						},
					},
					hide: {
						order: 800,
						enabled: !0,
						fn: function (t) {
							if (!N(t.instance.modifiers, "hide", "preventOverflow")) return t;
							var e = t.offsets.reference,
								i = D(t.instance.modifiers, function (t) {
									return "preventOverflow" === t.name;
								}).boundaries;
							if (
								e.bottom < i.top ||
								e.left > i.right ||
								e.top > i.bottom ||
								e.right < i.left
							) {
								if (!0 === t.hide) return t;
								(t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
							} else {
								if (!1 === t.hide) return t;
								(t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
							}
							return t;
						},
					},
					computeStyle: {
						order: 850,
						enabled: !0,
						fn: function (t, e) {
							var i = e.x,
								n = e.y,
								s = t.offsets.popper,
								a = D(t.instance.modifiers, function (t) {
									return "applyStyle" === t.name;
								}).gpuAcceleration;
							void 0 !== a &&
								console.warn(
									"WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
								);
							var r,
								l,
								h = void 0 === a ? e.gpuAcceleration : a,
								c = o(t.instance.popper),
								u = f(c),
								d = { position: s.position },
								p = (function (t, e) {
									var i = t.offsets,
										n = i.popper,
										s = i.reference,
										o = W,
										a = function (t) {
											return t;
										},
										r = o(s.width),
										l = o(n.width),
										h = -1 !== ["left", "right"].indexOf(t.placement),
										c = -1 !== t.placement.indexOf("-"),
										u = e ? (h || c || r % 2 == l % 2 ? o : z) : a,
										d = e ? o : a;
									return {
										left: u(
											1 == r % 2 && 1 == l % 2 && !c && e ? n.left - 1 : n.left
										),
										top: d(n.top),
										bottom: d(n.bottom),
										right: u(n.right),
									};
								})(t, 2 > window.devicePixelRatio || !J),
								g = "bottom" === i ? "top" : "bottom",
								m = "right" === n ? "left" : "right",
								v = I("transform");
							if (
								((l =
									"bottom" == g
										? "HTML" === c.nodeName
											? -c.clientHeight + p.bottom
											: -u.height + p.bottom
										: p.top),
								(r =
									"right" == m
										? "HTML" === c.nodeName
											? -c.clientWidth + p.right
											: -u.width + p.right
										: p.left),
								h && v)
							)
								(d[v] = "translate3d(" + r + "px, " + l + "px, 0)"),
									(d[g] = 0),
									(d[m] = 0),
									(d.willChange = "transform");
							else {
								var _ = "bottom" == g ? -1 : 1,
									b = "right" == m ? -1 : 1;
								(d[g] = l * _), (d[m] = r * b), (d.willChange = g + ", " + m);
							}
							var y = { "x-placement": t.placement };
							return (
								(t.attributes = Z({}, y, t.attributes)),
								(t.styles = Z({}, d, t.styles)),
								(t.arrowStyles = Z({}, t.offsets.arrow, t.arrowStyles)),
								t
							);
						},
						gpuAcceleration: !0,
						x: "bottom",
						y: "right",
					},
					applyStyle: {
						order: 900,
						enabled: !0,
						fn: function (t) {
							return (
								M(t.instance.popper, t.styles),
								(function (t, e) {
									Object.keys(e).forEach(function (i) {
										!1 === e[i]
											? t.removeAttribute(i)
											: t.setAttribute(i, e[i]);
									});
								})(t.instance.popper, t.attributes),
								t.arrowElement &&
									Object.keys(t.arrowStyles).length &&
									M(t.arrowElement, t.arrowStyles),
								t
							);
						},
						onLoad: function (t, e, i, n, s) {
							var o = x(s, e, t, i.positionFixed),
								a = w(
									i.placement,
									o,
									e,
									t,
									i.modifiers.flip.boundariesElement,
									i.modifiers.flip.padding
								);
							return (
								e.setAttribute("x-placement", a),
								M(e, { position: i.positionFixed ? "fixed" : "absolute" }),
								i
							);
						},
						gpuAcceleration: void 0,
					},
				},
			}),
			ot
		);
	}),
	(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module
			? e(exports, require("popper.js"), require("jquery"))
			: "function" == typeof define && define.amd
			? define(["exports", "popper.js", "jquery"], e)
			: e((t.bootstrap = {}), t.Popper, t.jQuery);
	})(this, function (t, e, i) {
		"use strict";
		function n(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n);
			}
		}
		function s(t, e, i) {
			return e && n(t.prototype, e), i && n(t, i), t;
		}
		function o(t) {
			for (var e = 1; e < arguments.length; e++) {
				var i = null != arguments[e] ? arguments[e] : {},
					n = Object.keys(i);
				"function" == typeof Object.getOwnPropertySymbols &&
					(n = n.concat(
						Object.getOwnPropertySymbols(i).filter(function (t) {
							return Object.getOwnPropertyDescriptor(i, t).enumerable;
						})
					)),
					n.forEach(function (e) {
						var n, s, o;
						(n = t),
							(o = i[(s = e)]),
							s in n
								? Object.defineProperty(n, s, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (n[s] = o);
					});
			}
			return t;
		}
		(e = e && e.hasOwnProperty("default") ? e.default : e),
			(i = i && i.hasOwnProperty("default") ? i.default : i);
		var a = "transitionend";
		var r = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function (t) {
				for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
				return t;
			},
			getSelectorFromElement: function (t) {
				var e = t.getAttribute("data-target");
				if (!e || "#" === e) {
					var i = t.getAttribute("href");
					e = i && "#" !== i ? i.trim() : "";
				}
				return e && document.querySelector(e) ? e : null;
			},
			getTransitionDurationFromElement: function (t) {
				if (!t) return 0;
				var e = i(t).css("transition-duration"),
					n = i(t).css("transition-delay"),
					s = parseFloat(e),
					o = parseFloat(n);
				return s || o
					? ((e = e.split(",")[0]),
					  (n = n.split(",")[0]),
					  1e3 * (parseFloat(e) + parseFloat(n)))
					: 0;
			},
			reflow: function (t) {
				return t.offsetHeight;
			},
			triggerTransitionEnd: function (t) {
				i(t).trigger(a);
			},
			supportsTransitionEnd: function () {
				return Boolean(a);
			},
			isElement: function (t) {
				return (t[0] || t).nodeType;
			},
			typeCheckConfig: function (t, e, i) {
				for (var n in i)
					if (Object.prototype.hasOwnProperty.call(i, n)) {
						var s = i[n],
							o = e[n],
							a =
								o && r.isElement(o)
									? "element"
									: ((l = o),
									  {}.toString
											.call(l)
											.match(/\s([a-z]+)/i)[1]
											.toLowerCase());
						if (!new RegExp(s).test(a))
							throw new Error(
								t.toUpperCase() +
									': Option "' +
									n +
									'" provided type "' +
									a +
									'" but expected type "' +
									s +
									'".'
							);
					}
				var l;
			},
			findShadowRoot: function (t) {
				if (!document.documentElement.attachShadow) return null;
				if ("function" != typeof t.getRootNode)
					return t instanceof ShadowRoot
						? t
						: t.parentNode
						? r.findShadowRoot(t.parentNode)
						: null;
				var e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null;
			},
		};
		(i.fn.emulateTransitionEnd = function (t) {
			var e = this,
				n = !1;
			return (
				i(this).one(r.TRANSITION_END, function () {
					n = !0;
				}),
				setTimeout(function () {
					n || r.triggerTransitionEnd(e);
				}, t),
				this
			);
		}),
			(i.event.special[r.TRANSITION_END] = {
				bindType: a,
				delegateType: a,
				handle: function (t) {
					if (i(t.target).is(this))
						return t.handleObj.handler.apply(this, arguments);
				},
			});
		var l = "alert",
			h = "bs.alert",
			c = "." + h,
			u = i.fn[l],
			d = {
				CLOSE: "close" + c,
				CLOSED: "closed" + c,
				CLICK_DATA_API: "click" + c + ".data-api",
			},
			p = (function () {
				function t(t) {
					this._element = t;
				}
				var e = t.prototype;
				return (
					(e.close = function (t) {
						var e = this._element;
						t && (e = this._getRootElement(t)),
							this._triggerCloseEvent(e).isDefaultPrevented() ||
								this._removeElement(e);
					}),
					(e.dispose = function () {
						i.removeData(this._element, h), (this._element = null);
					}),
					(e._getRootElement = function (t) {
						var e = r.getSelectorFromElement(t),
							n = !1;
						return (
							e && (n = document.querySelector(e)),
							n || (n = i(t).closest(".alert")[0]),
							n
						);
					}),
					(e._triggerCloseEvent = function (t) {
						var e = i.Event(d.CLOSE);
						return i(t).trigger(e), e;
					}),
					(e._removeElement = function (t) {
						var e = this;
						if ((i(t).removeClass("show"), i(t).hasClass("fade"))) {
							var n = r.getTransitionDurationFromElement(t);
							i(t)
								.one(r.TRANSITION_END, function (i) {
									return e._destroyElement(t, i);
								})
								.emulateTransitionEnd(n);
						} else this._destroyElement(t);
					}),
					(e._destroyElement = function (t) {
						i(t).detach().trigger(d.CLOSED).remove();
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this),
								s = n.data(h);
							s || ((s = new t(this)), n.data(h, s)),
								"close" === e && s[e](this);
						});
					}),
					(t._handleDismiss = function (t) {
						return function (e) {
							e && e.preventDefault(), t.close(this);
						};
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
					]),
					t
				);
			})();
		i(document).on(
			d.CLICK_DATA_API,
			'[data-dismiss="alert"]',
			p._handleDismiss(new p())
		),
			(i.fn[l] = p._jQueryInterface),
			(i.fn[l].Constructor = p),
			(i.fn[l].noConflict = function () {
				return (i.fn[l] = u), p._jQueryInterface;
			});
		var f = "button",
			g = "bs.button",
			m = "." + g,
			v = ".data-api",
			_ = i.fn[f],
			b = "active",
			y = '[data-toggle^="button"]',
			w = ".btn",
			x = {
				CLICK_DATA_API: "click" + m + v,
				FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v,
			},
			C = (function () {
				function t(t) {
					this._element = t;
				}
				var e = t.prototype;
				return (
					(e.toggle = function () {
						var t = !0,
							e = !0,
							n = i(this._element).closest('[data-toggle="buttons"]')[0];
						if (n) {
							var s = this._element.querySelector('input:not([type="hidden"])');
							if (s) {
								if ("radio" === s.type)
									if (s.checked && this._element.classList.contains(b)) t = !1;
									else {
										var o = n.querySelector(".active");
										o && i(o).removeClass(b);
									}
								if (t) {
									if (
										s.hasAttribute("disabled") ||
										n.hasAttribute("disabled") ||
										s.classList.contains("disabled") ||
										n.classList.contains("disabled")
									)
										return;
									(s.checked = !this._element.classList.contains(b)),
										i(s).trigger("change");
								}
								s.focus(), (e = !1);
							}
						}
						e &&
							this._element.setAttribute(
								"aria-pressed",
								!this._element.classList.contains(b)
							),
							t && i(this._element).toggleClass(b);
					}),
					(e.dispose = function () {
						i.removeData(this._element, g), (this._element = null);
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this).data(g);
							n || ((n = new t(this)), i(this).data(g, n)),
								"toggle" === e && n[e]();
						});
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
					]),
					t
				);
			})();
		i(document)
			.on(x.CLICK_DATA_API, y, function (t) {
				t.preventDefault();
				var e = t.target;
				i(e).hasClass("btn") || (e = i(e).closest(w)),
					C._jQueryInterface.call(i(e), "toggle");
			})
			.on(x.FOCUS_BLUR_DATA_API, y, function (t) {
				var e = i(t.target).closest(w)[0];
				i(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
			}),
			(i.fn[f] = C._jQueryInterface),
			(i.fn[f].Constructor = C),
			(i.fn[f].noConflict = function () {
				return (i.fn[f] = _), C._jQueryInterface;
			});
		var k = "carousel",
			T = "bs.carousel",
			D = "." + T,
			S = ".data-api",
			E = i.fn[k],
			I = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0,
				touch: !0,
			},
			A = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean",
				touch: "boolean",
			},
			P = "next",
			O = "prev",
			F = {
				SLIDE: "slide" + D,
				SLID: "slid" + D,
				KEYDOWN: "keydown" + D,
				MOUSEENTER: "mouseenter" + D,
				MOUSELEAVE: "mouseleave" + D,
				TOUCHSTART: "touchstart" + D,
				TOUCHMOVE: "touchmove" + D,
				TOUCHEND: "touchend" + D,
				POINTERDOWN: "pointerdown" + D,
				POINTERUP: "pointerup" + D,
				DRAG_START: "dragstart" + D,
				LOAD_DATA_API: "load" + D + S,
				CLICK_DATA_API: "click" + D + S,
			},
			M = "active",
			N = ".active.carousel-item",
			H = ".carousel-indicators",
			$ = { TOUCH: "touch", PEN: "pen" },
			L = (function () {
				function t(t, e) {
					(this._items = null),
						(this._interval = null),
						(this._activeElement = null),
						(this._isPaused = !1),
						(this._isSliding = !1),
						(this.touchTimeout = null),
						(this.touchStartX = 0),
						(this.touchDeltaX = 0),
						(this._config = this._getConfig(e)),
						(this._element = t),
						(this._indicatorsElement = this._element.querySelector(H)),
						(this._touchSupported =
							"ontouchstart" in document.documentElement ||
							0 < navigator.maxTouchPoints),
						(this._pointerEvent = Boolean(
							window.PointerEvent || window.MSPointerEvent
						)),
						this._addEventListeners();
				}
				var e = t.prototype;
				return (
					(e.next = function () {
						this._isSliding || this._slide(P);
					}),
					(e.nextWhenVisible = function () {
						!document.hidden &&
							i(this._element).is(":visible") &&
							"hidden" !== i(this._element).css("visibility") &&
							this.next();
					}),
					(e.prev = function () {
						this._isSliding || this._slide(O);
					}),
					(e.pause = function (t) {
						t || (this._isPaused = !0),
							this._element.querySelector(
								".carousel-item-next, .carousel-item-prev"
							) && (r.triggerTransitionEnd(this._element), this.cycle(!0)),
							clearInterval(this._interval),
							(this._interval = null);
					}),
					(e.cycle = function (t) {
						t || (this._isPaused = !1),
							this._interval &&
								(clearInterval(this._interval), (this._interval = null)),
							this._config.interval &&
								!this._isPaused &&
								(this._interval = setInterval(
									(document.visibilityState
										? this.nextWhenVisible
										: this.next
									).bind(this),
									this._config.interval
								));
					}),
					(e.to = function (t) {
						var e = this;
						this._activeElement = this._element.querySelector(N);
						var n = this._getItemIndex(this._activeElement);
						if (!(t > this._items.length - 1 || t < 0))
							if (this._isSliding)
								i(this._element).one(F.SLID, function () {
									return e.to(t);
								});
							else {
								if (n === t) return this.pause(), void this.cycle();
								var s = n < t ? P : O;
								this._slide(s, this._items[t]);
							}
					}),
					(e.dispose = function () {
						i(this._element).off(D),
							i.removeData(this._element, T),
							(this._items = null),
							(this._config = null),
							(this._element = null),
							(this._interval = null),
							(this._isPaused = null),
							(this._isSliding = null),
							(this._activeElement = null),
							(this._indicatorsElement = null);
					}),
					(e._getConfig = function (t) {
						return (t = o({}, I, t)), r.typeCheckConfig(k, t, A), t;
					}),
					(e._handleSwipe = function () {
						var t = Math.abs(this.touchDeltaX);
						if (!(t <= 40)) {
							var e = t / this.touchDeltaX;
							0 < e && this.prev(), e < 0 && this.next();
						}
					}),
					(e._addEventListeners = function () {
						var t = this;
						this._config.keyboard &&
							i(this._element).on(F.KEYDOWN, function (e) {
								return t._keydown(e);
							}),
							"hover" === this._config.pause &&
								i(this._element)
									.on(F.MOUSEENTER, function (e) {
										return t.pause(e);
									})
									.on(F.MOUSELEAVE, function (e) {
										return t.cycle(e);
									}),
							this._addTouchEventListeners();
					}),
					(e._addTouchEventListeners = function () {
						var t = this;
						if (this._touchSupported) {
							var e = function (e) {
									t._pointerEvent &&
									$[e.originalEvent.pointerType.toUpperCase()]
										? (t.touchStartX = e.originalEvent.clientX)
										: t._pointerEvent ||
										  (t.touchStartX = e.originalEvent.touches[0].clientX);
								},
								n = function (e) {
									t._pointerEvent &&
										$[e.originalEvent.pointerType.toUpperCase()] &&
										(t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
										t._handleSwipe(),
										"hover" === t._config.pause &&
											(t.pause(),
											t.touchTimeout && clearTimeout(t.touchTimeout),
											(t.touchTimeout = setTimeout(function (e) {
												return t.cycle(e);
											}, 500 + t._config.interval)));
								};
							i(this._element.querySelectorAll(".carousel-item img")).on(
								F.DRAG_START,
								function (t) {
									return t.preventDefault();
								}
							),
								this._pointerEvent
									? (i(this._element).on(F.POINTERDOWN, function (t) {
											return e(t);
									  }),
									  i(this._element).on(F.POINTERUP, function (t) {
											return n(t);
									  }),
									  this._element.classList.add("pointer-event"))
									: (i(this._element).on(F.TOUCHSTART, function (t) {
											return e(t);
									  }),
									  i(this._element).on(F.TOUCHMOVE, function (e) {
											var i;
											(i = e).originalEvent.touches &&
											1 < i.originalEvent.touches.length
												? (t.touchDeltaX = 0)
												: (t.touchDeltaX =
														i.originalEvent.touches[0].clientX - t.touchStartX);
									  }),
									  i(this._element).on(F.TOUCHEND, function (t) {
											return n(t);
									  }));
						}
					}),
					(e._keydown = function (t) {
						if (!/input|textarea/i.test(t.target.tagName))
							switch (t.which) {
								case 37:
									t.preventDefault(), this.prev();
									break;
								case 39:
									t.preventDefault(), this.next();
							}
					}),
					(e._getItemIndex = function (t) {
						return (
							(this._items =
								t && t.parentNode
									? [].slice.call(
											t.parentNode.querySelectorAll(".carousel-item")
									  )
									: []),
							this._items.indexOf(t)
						);
					}),
					(e._getItemByDirection = function (t, e) {
						var i = t === P,
							n = t === O,
							s = this._getItemIndex(e),
							o = this._items.length - 1;
						if (((n && 0 === s) || (i && s === o)) && !this._config.wrap)
							return e;
						var a = (s + (t === O ? -1 : 1)) % this._items.length;
						return -1 === a
							? this._items[this._items.length - 1]
							: this._items[a];
					}),
					(e._triggerSlideEvent = function (t, e) {
						var n = this._getItemIndex(t),
							s = this._getItemIndex(this._element.querySelector(N)),
							o = i.Event(F.SLIDE, {
								relatedTarget: t,
								direction: e,
								from: s,
								to: n,
							});
						return i(this._element).trigger(o), o;
					}),
					(e._setActiveIndicatorElement = function (t) {
						if (this._indicatorsElement) {
							var e = [].slice.call(
								this._indicatorsElement.querySelectorAll(".active")
							);
							i(e).removeClass(M);
							var n = this._indicatorsElement.children[this._getItemIndex(t)];
							n && i(n).addClass(M);
						}
					}),
					(e._slide = function (t, e) {
						var n,
							s,
							o,
							a = this,
							l = this._element.querySelector(N),
							h = this._getItemIndex(l),
							c = e || (l && this._getItemByDirection(t, l)),
							u = this._getItemIndex(c),
							d = Boolean(this._interval);
						if (
							((o =
								t === P
									? ((n = "carousel-item-left"),
									  (s = "carousel-item-next"),
									  "left")
									: ((n = "carousel-item-right"),
									  (s = "carousel-item-prev"),
									  "right")),
							c && i(c).hasClass(M))
						)
							this._isSliding = !1;
						else if (
							!this._triggerSlideEvent(c, o).isDefaultPrevented() &&
							l &&
							c
						) {
							(this._isSliding = !0),
								d && this.pause(),
								this._setActiveIndicatorElement(c);
							var p = i.Event(F.SLID, {
								relatedTarget: c,
								direction: o,
								from: h,
								to: u,
							});
							if (i(this._element).hasClass("slide")) {
								i(c).addClass(s),
									r.reflow(c),
									i(l).addClass(n),
									i(c).addClass(n);
								var f = parseInt(c.getAttribute("data-interval"), 10);
								this._config.interval = f
									? ((this._config.defaultInterval =
											this._config.defaultInterval || this._config.interval),
									  f)
									: this._config.defaultInterval || this._config.interval;
								var g = r.getTransitionDurationFromElement(l);
								i(l)
									.one(r.TRANSITION_END, function () {
										i(c)
											.removeClass(n + " " + s)
											.addClass(M),
											i(l).removeClass(M + " " + s + " " + n),
											(a._isSliding = !1),
											setTimeout(function () {
												return i(a._element).trigger(p);
											}, 0);
									})
									.emulateTransitionEnd(g);
							} else
								i(l).removeClass(M),
									i(c).addClass(M),
									(this._isSliding = !1),
									i(this._element).trigger(p);
							d && this.cycle();
						}
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this).data(T),
								s = o({}, I, i(this).data());
							"object" == typeof e && (s = o({}, s, e));
							var a = "string" == typeof e ? e : s.slide;
							if (
								(n || ((n = new t(this, s)), i(this).data(T, n)),
								"number" == typeof e)
							)
								n.to(e);
							else if ("string" == typeof a) {
								if (void 0 === n[a])
									throw new TypeError('No method named "' + a + '"');
								n[a]();
							} else s.interval && (n.pause(), n.cycle());
						});
					}),
					(t._dataApiClickHandler = function (e) {
						var n = r.getSelectorFromElement(this);
						if (n) {
							var s = i(n)[0];
							if (s && i(s).hasClass("carousel")) {
								var a = o({}, i(s).data(), i(this).data()),
									l = this.getAttribute("data-slide-to");
								l && (a.interval = !1),
									t._jQueryInterface.call(i(s), a),
									l && i(s).data(T).to(l),
									e.preventDefault();
							}
						}
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return I;
							},
						},
					]),
					t
				);
			})();
		i(document).on(
			F.CLICK_DATA_API,
			"[data-slide], [data-slide-to]",
			L._dataApiClickHandler
		),
			i(window).on(F.LOAD_DATA_API, function () {
				for (
					var t = [].slice.call(
							document.querySelectorAll('[data-ride="carousel"]')
						),
						e = 0,
						n = t.length;
					e < n;
					e++
				) {
					var s = i(t[e]);
					L._jQueryInterface.call(s, s.data());
				}
			}),
			(i.fn[k] = L._jQueryInterface),
			(i.fn[k].Constructor = L),
			(i.fn[k].noConflict = function () {
				return (i.fn[k] = E), L._jQueryInterface;
			});
		var z = "collapse",
			W = "bs.collapse",
			j = "." + W,
			R = i.fn[z],
			q = { toggle: !0, parent: "" },
			B = { toggle: "boolean", parent: "(string|element)" },
			Y = {
				SHOW: "show" + j,
				SHOWN: "shown" + j,
				HIDE: "hide" + j,
				HIDDEN: "hidden" + j,
				CLICK_DATA_API: "click" + j + ".data-api",
			},
			U = "show",
			K = "collapse",
			V = "collapsing",
			X = "collapsed",
			Q = '[data-toggle="collapse"]',
			G = (function () {
				function t(t, e) {
					(this._isTransitioning = !1),
						(this._element = t),
						(this._config = this._getConfig(e)),
						(this._triggerArray = [].slice.call(
							document.querySelectorAll(
								'[data-toggle="collapse"][href="#' +
									t.id +
									'"],[data-toggle="collapse"][data-target="#' +
									t.id +
									'"]'
							)
						));
					for (
						var i = [].slice.call(document.querySelectorAll(Q)),
							n = 0,
							s = i.length;
						n < s;
						n++
					) {
						var o = i[n],
							a = r.getSelectorFromElement(o),
							l = [].slice
								.call(document.querySelectorAll(a))
								.filter(function (e) {
									return e === t;
								});
						null !== a &&
							0 < l.length &&
							((this._selector = a), this._triggerArray.push(o));
					}
					(this._parent = this._config.parent ? this._getParent() : null),
						this._config.parent ||
							this._addAriaAndCollapsedClass(this._element, this._triggerArray),
						this._config.toggle && this.toggle();
				}
				var e = t.prototype;
				return (
					(e.toggle = function () {
						i(this._element).hasClass(U) ? this.hide() : this.show();
					}),
					(e.show = function () {
						var e,
							n,
							s = this;
						if (
							!(
								this._isTransitioning ||
								i(this._element).hasClass(U) ||
								(this._parent &&
									0 ===
										(e = [].slice
											.call(this._parent.querySelectorAll(".show, .collapsing"))
											.filter(function (t) {
												return "string" == typeof s._config.parent
													? t.getAttribute("data-parent") === s._config.parent
													: t.classList.contains(K);
											})).length &&
									(e = null),
								e &&
									(n = i(e).not(this._selector).data(W)) &&
									n._isTransitioning)
							)
						) {
							var o = i.Event(Y.SHOW);
							if ((i(this._element).trigger(o), !o.isDefaultPrevented())) {
								e &&
									(t._jQueryInterface.call(i(e).not(this._selector), "hide"),
									n || i(e).data(W, null));
								var a = this._getDimension();
								i(this._element).removeClass(K).addClass(V),
									(this._element.style[a] = 0),
									this._triggerArray.length &&
										i(this._triggerArray)
											.removeClass(X)
											.attr("aria-expanded", !0),
									this.setTransitioning(!0);
								var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
									h = r.getTransitionDurationFromElement(this._element);
								i(this._element)
									.one(r.TRANSITION_END, function () {
										i(s._element).removeClass(V).addClass(K).addClass(U),
											(s._element.style[a] = ""),
											s.setTransitioning(!1),
											i(s._element).trigger(Y.SHOWN);
									})
									.emulateTransitionEnd(h),
									(this._element.style[a] = this._element[l] + "px");
							}
						}
					}),
					(e.hide = function () {
						var t = this;
						if (!this._isTransitioning && i(this._element).hasClass(U)) {
							var e = i.Event(Y.HIDE);
							if ((i(this._element).trigger(e), !e.isDefaultPrevented())) {
								var n = this._getDimension();
								(this._element.style[n] =
									this._element.getBoundingClientRect()[n] + "px"),
									r.reflow(this._element),
									i(this._element).addClass(V).removeClass(K).removeClass(U);
								var s = this._triggerArray.length;
								if (0 < s)
									for (var o = 0; o < s; o++) {
										var a = this._triggerArray[o],
											l = r.getSelectorFromElement(a);
										null !== l &&
											(i([].slice.call(document.querySelectorAll(l))).hasClass(
												U
											) ||
												i(a).addClass(X).attr("aria-expanded", !1));
									}
								this.setTransitioning(!0), (this._element.style[n] = "");
								var h = r.getTransitionDurationFromElement(this._element);
								i(this._element)
									.one(r.TRANSITION_END, function () {
										t.setTransitioning(!1),
											i(t._element)
												.removeClass(V)
												.addClass(K)
												.trigger(Y.HIDDEN);
									})
									.emulateTransitionEnd(h);
							}
						}
					}),
					(e.setTransitioning = function (t) {
						this._isTransitioning = t;
					}),
					(e.dispose = function () {
						i.removeData(this._element, W),
							(this._config = null),
							(this._parent = null),
							(this._element = null),
							(this._triggerArray = null),
							(this._isTransitioning = null);
					}),
					(e._getConfig = function (t) {
						return (
							((t = o({}, q, t)).toggle = Boolean(t.toggle)),
							r.typeCheckConfig(z, t, B),
							t
						);
					}),
					(e._getDimension = function () {
						return i(this._element).hasClass("width") ? "width" : "height";
					}),
					(e._getParent = function () {
						var e,
							n = this;
						r.isElement(this._config.parent)
							? ((e = this._config.parent),
							  void 0 !== this._config.parent.jquery &&
									(e = this._config.parent[0]))
							: (e = document.querySelector(this._config.parent));
						var s =
								'[data-toggle="collapse"][data-parent="' +
								this._config.parent +
								'"]',
							o = [].slice.call(e.querySelectorAll(s));
						return (
							i(o).each(function (e, i) {
								n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
							}),
							e
						);
					}),
					(e._addAriaAndCollapsedClass = function (t, e) {
						var n = i(t).hasClass(U);
						e.length && i(e).toggleClass(X, !n).attr("aria-expanded", n);
					}),
					(t._getTargetFromElement = function (t) {
						var e = r.getSelectorFromElement(t);
						return e ? document.querySelector(e) : null;
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this),
								s = n.data(W),
								a = o({}, q, n.data(), "object" == typeof e && e ? e : {});
							if (
								(!s && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
								s || ((s = new t(this, a)), n.data(W, s)),
								"string" == typeof e)
							) {
								if (void 0 === s[e])
									throw new TypeError('No method named "' + e + '"');
								s[e]();
							}
						});
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return q;
							},
						},
					]),
					t
				);
			})();
		i(document).on(Y.CLICK_DATA_API, Q, function (t) {
			"A" === t.currentTarget.tagName && t.preventDefault();
			var e = i(this),
				n = r.getSelectorFromElement(this),
				s = [].slice.call(document.querySelectorAll(n));
			i(s).each(function () {
				var t = i(this),
					n = t.data(W) ? "toggle" : e.data();
				G._jQueryInterface.call(t, n);
			});
		}),
			(i.fn[z] = G._jQueryInterface),
			(i.fn[z].Constructor = G),
			(i.fn[z].noConflict = function () {
				return (i.fn[z] = R), G._jQueryInterface;
			});
		var Z = "dropdown",
			J = "bs.dropdown",
			tt = "." + J,
			et = ".data-api",
			it = i.fn[Z],
			nt = new RegExp("38|40|27"),
			st = {
				HIDE: "hide" + tt,
				HIDDEN: "hidden" + tt,
				SHOW: "show" + tt,
				SHOWN: "shown" + tt,
				CLICK: "click" + tt,
				CLICK_DATA_API: "click" + tt + et,
				KEYDOWN_DATA_API: "keydown" + tt + et,
				KEYUP_DATA_API: "keyup" + tt + et,
			},
			ot = "disabled",
			at = "show",
			rt = "dropdown-menu-right",
			lt = '[data-toggle="dropdown"]',
			ht = ".dropdown-menu",
			ct = {
				offset: 0,
				flip: !0,
				boundary: "scrollParent",
				reference: "toggle",
				display: "dynamic",
			},
			ut = {
				offset: "(number|string|function)",
				flip: "boolean",
				boundary: "(string|element)",
				reference: "(string|element)",
				display: "string",
			},
			dt = (function () {
				function t(t, e) {
					(this._element = t),
						(this._popper = null),
						(this._config = this._getConfig(e)),
						(this._menu = this._getMenuElement()),
						(this._inNavbar = this._detectNavbar()),
						this._addEventListeners();
				}
				var n = t.prototype;
				return (
					(n.toggle = function () {
						if (!this._element.disabled && !i(this._element).hasClass(ot)) {
							var n = t._getParentFromElement(this._element),
								s = i(this._menu).hasClass(at);
							if ((t._clearMenus(), !s)) {
								var o = { relatedTarget: this._element },
									a = i.Event(st.SHOW, o);
								if ((i(n).trigger(a), !a.isDefaultPrevented())) {
									if (!this._inNavbar) {
										if (void 0 === e)
											throw new TypeError(
												"Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
											);
										var l = this._element;
										"parent" === this._config.reference
											? (l = n)
											: r.isElement(this._config.reference) &&
											  ((l = this._config.reference),
											  void 0 !== this._config.reference.jquery &&
													(l = this._config.reference[0])),
											"scrollParent" !== this._config.boundary &&
												i(n).addClass("position-static"),
											(this._popper = new e(
												l,
												this._menu,
												this._getPopperConfig()
											));
									}
									"ontouchstart" in document.documentElement &&
										0 === i(n).closest(".navbar-nav").length &&
										i(document.body).children().on("mouseover", null, i.noop),
										this._element.focus(),
										this._element.setAttribute("aria-expanded", !0),
										i(this._menu).toggleClass(at),
										i(n).toggleClass(at).trigger(i.Event(st.SHOWN, o));
								}
							}
						}
					}),
					(n.show = function () {
						if (
							!(
								this._element.disabled ||
								i(this._element).hasClass(ot) ||
								i(this._menu).hasClass(at)
							)
						) {
							var e = { relatedTarget: this._element },
								n = i.Event(st.SHOW, e),
								s = t._getParentFromElement(this._element);
							i(s).trigger(n),
								n.isDefaultPrevented() ||
									(i(this._menu).toggleClass(at),
									i(s).toggleClass(at).trigger(i.Event(st.SHOWN, e)));
						}
					}),
					(n.hide = function () {
						if (
							!this._element.disabled &&
							!i(this._element).hasClass(ot) &&
							i(this._menu).hasClass(at)
						) {
							var e = { relatedTarget: this._element },
								n = i.Event(st.HIDE, e),
								s = t._getParentFromElement(this._element);
							i(s).trigger(n),
								n.isDefaultPrevented() ||
									(i(this._menu).toggleClass(at),
									i(s).toggleClass(at).trigger(i.Event(st.HIDDEN, e)));
						}
					}),
					(n.dispose = function () {
						i.removeData(this._element, J),
							i(this._element).off(tt),
							(this._element = null),
							(this._menu = null) !== this._popper &&
								(this._popper.destroy(), (this._popper = null));
					}),
					(n.update = function () {
						(this._inNavbar = this._detectNavbar()),
							null !== this._popper && this._popper.scheduleUpdate();
					}),
					(n._addEventListeners = function () {
						var t = this;
						i(this._element).on(st.CLICK, function (e) {
							e.preventDefault(), e.stopPropagation(), t.toggle();
						});
					}),
					(n._getConfig = function (t) {
						return (
							(t = o({}, this.constructor.Default, i(this._element).data(), t)),
							r.typeCheckConfig(Z, t, this.constructor.DefaultType),
							t
						);
					}),
					(n._getMenuElement = function () {
						if (!this._menu) {
							var e = t._getParentFromElement(this._element);
							e && (this._menu = e.querySelector(ht));
						}
						return this._menu;
					}),
					(n._getPlacement = function () {
						var t = i(this._element.parentNode),
							e = "bottom-start";
						return (
							t.hasClass("dropup")
								? ((e = "top-start"),
								  i(this._menu).hasClass(rt) && (e = "top-end"))
								: t.hasClass("dropright")
								? (e = "right-start")
								: t.hasClass("dropleft")
								? (e = "left-start")
								: i(this._menu).hasClass(rt) && (e = "bottom-end"),
							e
						);
					}),
					(n._detectNavbar = function () {
						return 0 < i(this._element).closest(".navbar").length;
					}),
					(n._getPopperConfig = function () {
						var t = this,
							e = {};
						"function" == typeof this._config.offset
							? (e.fn = function (e) {
									return (
										(e.offsets = o(
											{},
											e.offsets,
											t._config.offset(e.offsets) || {}
										)),
										e
									);
							  })
							: (e.offset = this._config.offset);
						var i = {
							placement: this._getPlacement(),
							modifiers: {
								offset: e,
								flip: { enabled: this._config.flip },
								preventOverflow: { boundariesElement: this._config.boundary },
							},
						};
						return (
							"static" === this._config.display &&
								(i.modifiers.applyStyle = { enabled: !1 }),
							i
						);
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this).data(J);
							if (
								(n ||
									((n = new t(this, "object" == typeof e ? e : null)),
									i(this).data(J, n)),
								"string" == typeof e)
							) {
								if (void 0 === n[e])
									throw new TypeError('No method named "' + e + '"');
								n[e]();
							}
						});
					}),
					(t._clearMenus = function (e) {
						if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
							for (
								var n = [].slice.call(document.querySelectorAll(lt)),
									s = 0,
									o = n.length;
								s < o;
								s++
							) {
								var a = t._getParentFromElement(n[s]),
									r = i(n[s]).data(J),
									l = { relatedTarget: n[s] };
								if ((e && "click" === e.type && (l.clickEvent = e), r)) {
									var h = r._menu;
									if (
										i(a).hasClass(at) &&
										!(
											e &&
											(("click" === e.type &&
												/input|textarea/i.test(e.target.tagName)) ||
												("keyup" === e.type && 9 === e.which)) &&
											i.contains(a, e.target)
										)
									) {
										var c = i.Event(st.HIDE, l);
										i(a).trigger(c),
											c.isDefaultPrevented() ||
												("ontouchstart" in document.documentElement &&
													i(document.body)
														.children()
														.off("mouseover", null, i.noop),
												n[s].setAttribute("aria-expanded", "false"),
												i(h).removeClass(at),
												i(a).removeClass(at).trigger(i.Event(st.HIDDEN, l)));
									}
								}
							}
					}),
					(t._getParentFromElement = function (t) {
						var e,
							i = r.getSelectorFromElement(t);
						return i && (e = document.querySelector(i)), e || t.parentNode;
					}),
					(t._dataApiKeydownHandler = function (e) {
						if (
							(/input|textarea/i.test(e.target.tagName)
								? !(
										32 === e.which ||
										(27 !== e.which &&
											((40 !== e.which && 38 !== e.which) ||
												i(e.target).closest(ht).length))
								  )
								: nt.test(e.which)) &&
							(e.preventDefault(),
							e.stopPropagation(),
							!this.disabled && !i(this).hasClass(ot))
						) {
							var n = t._getParentFromElement(this),
								s = i(n).hasClass(at);
							if (s && (!s || (27 !== e.which && 32 !== e.which))) {
								var o = [].slice.call(
									n.querySelectorAll(
										".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
									)
								);
								if (0 !== o.length) {
									var a = o.indexOf(e.target);
									38 === e.which && 0 < a && a--,
										40 === e.which && a < o.length - 1 && a++,
										a < 0 && (a = 0),
										o[a].focus();
								}
							} else {
								if (27 === e.which) {
									var r = n.querySelector(lt);
									i(r).trigger("focus");
								}
								i(this).trigger("click");
							}
						}
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return ct;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return ut;
							},
						},
					]),
					t
				);
			})();
		i(document)
			.on(st.KEYDOWN_DATA_API, lt, dt._dataApiKeydownHandler)
			.on(st.KEYDOWN_DATA_API, ht, dt._dataApiKeydownHandler)
			.on(st.CLICK_DATA_API + " " + st.KEYUP_DATA_API, dt._clearMenus)
			.on(st.CLICK_DATA_API, lt, function (t) {
				t.preventDefault(),
					t.stopPropagation(),
					dt._jQueryInterface.call(i(this), "toggle");
			})
			.on(st.CLICK_DATA_API, ".dropdown form", function (t) {
				t.stopPropagation();
			}),
			(i.fn[Z] = dt._jQueryInterface),
			(i.fn[Z].Constructor = dt),
			(i.fn[Z].noConflict = function () {
				return (i.fn[Z] = it), dt._jQueryInterface;
			});
		var pt = "modal",
			ft = "bs.modal",
			gt = "." + ft,
			mt = i.fn[pt],
			vt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
			_t = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
				show: "boolean",
			},
			bt = {
				HIDE: "hide" + gt,
				HIDDEN: "hidden" + gt,
				SHOW: "show" + gt,
				SHOWN: "shown" + gt,
				FOCUSIN: "focusin" + gt,
				RESIZE: "resize" + gt,
				CLICK_DISMISS: "click.dismiss" + gt,
				KEYDOWN_DISMISS: "keydown.dismiss" + gt,
				MOUSEUP_DISMISS: "mouseup.dismiss" + gt,
				MOUSEDOWN_DISMISS: "mousedown.dismiss" + gt,
				CLICK_DATA_API: "click" + gt + ".data-api",
			},
			yt = "modal-open",
			wt = "fade",
			xt = "show",
			Ct = ".modal-dialog",
			kt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
			Tt = ".sticky-top",
			Dt = (function () {
				function t(t, e) {
					(this._config = this._getConfig(e)),
						(this._element = t),
						(this._dialog = t.querySelector(Ct)),
						(this._backdrop = null),
						(this._isShown = !1),
						(this._isBodyOverflowing = !1),
						(this._ignoreBackdropClick = !1),
						(this._isTransitioning = !1),
						(this._scrollbarWidth = 0);
				}
				var e = t.prototype;
				return (
					(e.toggle = function (t) {
						return this._isShown ? this.hide() : this.show(t);
					}),
					(e.show = function (t) {
						var e = this;
						if (!this._isShown && !this._isTransitioning) {
							i(this._element).hasClass(wt) && (this._isTransitioning = !0);
							var n = i.Event(bt.SHOW, { relatedTarget: t });
							i(this._element).trigger(n),
								this._isShown ||
									n.isDefaultPrevented() ||
									((this._isShown = !0),
									this._checkScrollbar(),
									this._setScrollbar(),
									this._adjustDialog(),
									this._setEscapeEvent(),
									this._setResizeEvent(),
									i(this._element).on(
										bt.CLICK_DISMISS,
										'[data-dismiss="modal"]',
										function (t) {
											return e.hide(t);
										}
									),
									i(this._dialog).on(bt.MOUSEDOWN_DISMISS, function () {
										i(e._element).one(bt.MOUSEUP_DISMISS, function (t) {
											i(t.target).is(e._element) &&
												(e._ignoreBackdropClick = !0);
										});
									}),
									this._showBackdrop(function () {
										return e._showElement(t);
									}));
						}
					}),
					(e.hide = function (t) {
						var e = this;
						if (
							(t && t.preventDefault(), this._isShown && !this._isTransitioning)
						) {
							var n = i.Event(bt.HIDE);
							if (
								(i(this._element).trigger(n),
								this._isShown && !n.isDefaultPrevented())
							) {
								this._isShown = !1;
								var s = i(this._element).hasClass(wt);
								if (
									(s && (this._isTransitioning = !0),
									this._setEscapeEvent(),
									this._setResizeEvent(),
									i(document).off(bt.FOCUSIN),
									i(this._element).removeClass(xt),
									i(this._element).off(bt.CLICK_DISMISS),
									i(this._dialog).off(bt.MOUSEDOWN_DISMISS),
									s)
								) {
									var o = r.getTransitionDurationFromElement(this._element);
									i(this._element)
										.one(r.TRANSITION_END, function (t) {
											return e._hideModal(t);
										})
										.emulateTransitionEnd(o);
								} else this._hideModal();
							}
						}
					}),
					(e.dispose = function () {
						[window, this._element, this._dialog].forEach(function (t) {
							return i(t).off(gt);
						}),
							i(document).off(bt.FOCUSIN),
							i.removeData(this._element, ft),
							(this._config = null),
							(this._element = null),
							(this._dialog = null),
							(this._backdrop = null),
							(this._isShown = null),
							(this._isBodyOverflowing = null),
							(this._ignoreBackdropClick = null),
							(this._isTransitioning = null),
							(this._scrollbarWidth = null);
					}),
					(e.handleUpdate = function () {
						this._adjustDialog();
					}),
					(e._getConfig = function (t) {
						return (t = o({}, vt, t)), r.typeCheckConfig(pt, t, _t), t;
					}),
					(e._showElement = function (t) {
						var e = this,
							n = i(this._element).hasClass(wt);
						(this._element.parentNode &&
							this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
							document.body.appendChild(this._element),
							(this._element.style.display = "block"),
							this._element.removeAttribute("aria-hidden"),
							this._element.setAttribute("aria-modal", !0),
							(this._element.scrollTop = 0),
							n && r.reflow(this._element),
							i(this._element).addClass(xt),
							this._config.focus && this._enforceFocus();
						var s = i.Event(bt.SHOWN, { relatedTarget: t }),
							o = function () {
								e._config.focus && e._element.focus(),
									(e._isTransitioning = !1),
									i(e._element).trigger(s);
							};
						if (n) {
							var a = r.getTransitionDurationFromElement(this._dialog);
							i(this._dialog).one(r.TRANSITION_END, o).emulateTransitionEnd(a);
						} else o();
					}),
					(e._enforceFocus = function () {
						var t = this;
						i(document)
							.off(bt.FOCUSIN)
							.on(bt.FOCUSIN, function (e) {
								document !== e.target &&
									t._element !== e.target &&
									0 === i(t._element).has(e.target).length &&
									t._element.focus();
							});
					}),
					(e._setEscapeEvent = function () {
						var t = this;
						this._isShown && this._config.keyboard
							? i(this._element).on(bt.KEYDOWN_DISMISS, function (e) {
									27 === e.which && (e.preventDefault(), t.hide());
							  })
							: this._isShown || i(this._element).off(bt.KEYDOWN_DISMISS);
					}),
					(e._setResizeEvent = function () {
						var t = this;
						this._isShown
							? i(window).on(bt.RESIZE, function (e) {
									return t.handleUpdate(e);
							  })
							: i(window).off(bt.RESIZE);
					}),
					(e._hideModal = function () {
						var t = this;
						(this._element.style.display = "none"),
							this._element.setAttribute("aria-hidden", !0),
							this._element.removeAttribute("aria-modal"),
							(this._isTransitioning = !1),
							this._showBackdrop(function () {
								i(document.body).removeClass(yt),
									t._resetAdjustments(),
									t._resetScrollbar(),
									i(t._element).trigger(bt.HIDDEN);
							});
					}),
					(e._removeBackdrop = function () {
						this._backdrop &&
							(i(this._backdrop).remove(), (this._backdrop = null));
					}),
					(e._showBackdrop = function (t) {
						var e = this,
							n = i(this._element).hasClass(wt) ? wt : "";
						if (this._isShown && this._config.backdrop) {
							if (
								((this._backdrop = document.createElement("div")),
								(this._backdrop.className = "modal-backdrop"),
								n && this._backdrop.classList.add(n),
								i(this._backdrop).appendTo(document.body),
								i(this._element).on(bt.CLICK_DISMISS, function (t) {
									e._ignoreBackdropClick
										? (e._ignoreBackdropClick = !1)
										: t.target === t.currentTarget &&
										  ("static" === e._config.backdrop
												? e._element.focus()
												: e.hide());
								}),
								n && r.reflow(this._backdrop),
								i(this._backdrop).addClass(xt),
								!t)
							)
								return;
							if (!n) return void t();
							var s = r.getTransitionDurationFromElement(this._backdrop);
							i(this._backdrop)
								.one(r.TRANSITION_END, t)
								.emulateTransitionEnd(s);
						} else if (!this._isShown && this._backdrop) {
							i(this._backdrop).removeClass(xt);
							var o = function () {
								e._removeBackdrop(), t && t();
							};
							if (i(this._element).hasClass(wt)) {
								var a = r.getTransitionDurationFromElement(this._backdrop);
								i(this._backdrop)
									.one(r.TRANSITION_END, o)
									.emulateTransitionEnd(a);
							} else o();
						} else t && t();
					}),
					(e._adjustDialog = function () {
						var t =
							this._element.scrollHeight >
							document.documentElement.clientHeight;
						!this._isBodyOverflowing &&
							t &&
							(this._element.style.paddingLeft = this._scrollbarWidth + "px"),
							this._isBodyOverflowing &&
								!t &&
								(this._element.style.paddingRight =
									this._scrollbarWidth + "px");
					}),
					(e._resetAdjustments = function () {
						(this._element.style.paddingLeft = ""),
							(this._element.style.paddingRight = "");
					}),
					(e._checkScrollbar = function () {
						var t = document.body.getBoundingClientRect();
						(this._isBodyOverflowing = t.left + t.right < window.innerWidth),
							(this._scrollbarWidth = this._getScrollbarWidth());
					}),
					(e._setScrollbar = function () {
						var t = this;
						if (this._isBodyOverflowing) {
							var e = [].slice.call(document.querySelectorAll(kt)),
								n = [].slice.call(document.querySelectorAll(Tt));
							i(e).each(function (e, n) {
								var s = n.style.paddingRight,
									o = i(n).css("padding-right");
								i(n)
									.data("padding-right", s)
									.css(
										"padding-right",
										parseFloat(o) + t._scrollbarWidth + "px"
									);
							}),
								i(n).each(function (e, n) {
									var s = n.style.marginRight,
										o = i(n).css("margin-right");
									i(n)
										.data("margin-right", s)
										.css(
											"margin-right",
											parseFloat(o) - t._scrollbarWidth + "px"
										);
								});
							var s = document.body.style.paddingRight,
								o = i(document.body).css("padding-right");
							i(document.body)
								.data("padding-right", s)
								.css(
									"padding-right",
									parseFloat(o) + this._scrollbarWidth + "px"
								);
						}
						i(document.body).addClass(yt);
					}),
					(e._resetScrollbar = function () {
						var t = [].slice.call(document.querySelectorAll(kt));
						i(t).each(function (t, e) {
							var n = i(e).data("padding-right");
							i(e).removeData("padding-right"),
								(e.style.paddingRight = n || "");
						});
						var e = [].slice.call(document.querySelectorAll("" + Tt));
						i(e).each(function (t, e) {
							var n = i(e).data("margin-right");
							void 0 !== n &&
								i(e).css("margin-right", n).removeData("margin-right");
						});
						var n = i(document.body).data("padding-right");
						i(document.body).removeData("padding-right"),
							(document.body.style.paddingRight = n || "");
					}),
					(e._getScrollbarWidth = function () {
						var t = document.createElement("div");
						(t.className = "modal-scrollbar-measure"),
							document.body.appendChild(t);
						var e = t.getBoundingClientRect().width - t.clientWidth;
						return document.body.removeChild(t), e;
					}),
					(t._jQueryInterface = function (e, n) {
						return this.each(function () {
							var s = i(this).data(ft),
								a = o(
									{},
									vt,
									i(this).data(),
									"object" == typeof e && e ? e : {}
								);
							if (
								(s || ((s = new t(this, a)), i(this).data(ft, s)),
								"string" == typeof e)
							) {
								if (void 0 === s[e])
									throw new TypeError('No method named "' + e + '"');
								s[e](n);
							} else a.show && s.show(n);
						});
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return vt;
							},
						},
					]),
					t
				);
			})();
		i(document).on(bt.CLICK_DATA_API, '[data-toggle="modal"]', function (t) {
			var e,
				n = this,
				s = r.getSelectorFromElement(this);
			s && (e = document.querySelector(s));
			var a = i(e).data(ft) ? "toggle" : o({}, i(e).data(), i(this).data());
			("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
			var l = i(e).one(bt.SHOW, function (t) {
				t.isDefaultPrevented() ||
					l.one(bt.HIDDEN, function () {
						i(n).is(":visible") && n.focus();
					});
			});
			Dt._jQueryInterface.call(i(e), a, this);
		}),
			(i.fn[pt] = Dt._jQueryInterface),
			(i.fn[pt].Constructor = Dt),
			(i.fn[pt].noConflict = function () {
				return (i.fn[pt] = mt), Dt._jQueryInterface;
			});
		var St = "tooltip",
			Et = "bs.tooltip",
			It = "." + Et,
			At = i.fn[St],
			Pt = "bs-tooltip",
			Ot = new RegExp("(^|\\s)" + Pt + "\\S+", "g"),
			Ft = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(number|string)",
				container: "(string|element|boolean)",
				fallbackPlacement: "(string|array)",
				boundary: "(string|element)",
			},
			Mt = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: "right",
				BOTTOM: "bottom",
				LEFT: "left",
			},
			Nt = {
				animation: !0,
				template:
					'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: 0,
				container: !1,
				fallbackPlacement: "flip",
				boundary: "scrollParent",
			},
			Ht = "show",
			$t = {
				HIDE: "hide" + It,
				HIDDEN: "hidden" + It,
				SHOW: "show" + It,
				SHOWN: "shown" + It,
				INSERTED: "inserted" + It,
				CLICK: "click" + It,
				FOCUSIN: "focusin" + It,
				FOCUSOUT: "focusout" + It,
				MOUSEENTER: "mouseenter" + It,
				MOUSELEAVE: "mouseleave" + It,
			},
			Lt = "fade",
			zt = "show",
			Wt = "hover",
			jt = "focus",
			Rt = (function () {
				function t(t, i) {
					if (void 0 === e)
						throw new TypeError(
							"Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
						);
					(this._isEnabled = !0),
						(this._timeout = 0),
						(this._hoverState = ""),
						(this._activeTrigger = {}),
						(this._popper = null),
						(this.element = t),
						(this.config = this._getConfig(i)),
						(this.tip = null),
						this._setListeners();
				}
				var n = t.prototype;
				return (
					(n.enable = function () {
						this._isEnabled = !0;
					}),
					(n.disable = function () {
						this._isEnabled = !1;
					}),
					(n.toggleEnabled = function () {
						this._isEnabled = !this._isEnabled;
					}),
					(n.toggle = function (t) {
						if (this._isEnabled)
							if (t) {
								var e = this.constructor.DATA_KEY,
									n = i(t.currentTarget).data(e);
								n ||
									((n = new this.constructor(
										t.currentTarget,
										this._getDelegateConfig()
									)),
									i(t.currentTarget).data(e, n)),
									(n._activeTrigger.click = !n._activeTrigger.click),
									n._isWithActiveTrigger()
										? n._enter(null, n)
										: n._leave(null, n);
							} else {
								if (i(this.getTipElement()).hasClass(zt))
									return void this._leave(null, this);
								this._enter(null, this);
							}
					}),
					(n.dispose = function () {
						clearTimeout(this._timeout),
							i.removeData(this.element, this.constructor.DATA_KEY),
							i(this.element).off(this.constructor.EVENT_KEY),
							i(this.element).closest(".modal").off("hide.bs.modal"),
							this.tip && i(this.tip).remove(),
							(this._isEnabled = null),
							(this._timeout = null),
							(this._hoverState = null),
							(this._activeTrigger = null) !== this._popper &&
								this._popper.destroy(),
							(this._popper = null),
							(this.element = null),
							(this.config = null),
							(this.tip = null);
					}),
					(n.show = function () {
						var t = this;
						if ("none" === i(this.element).css("display"))
							throw new Error("Please use show on visible elements");
						var n = i.Event(this.constructor.Event.SHOW);
						if (this.isWithContent() && this._isEnabled) {
							i(this.element).trigger(n);
							var s = r.findShadowRoot(this.element),
								o = i.contains(
									null !== s ? s : this.element.ownerDocument.documentElement,
									this.element
								);
							if (n.isDefaultPrevented() || !o) return;
							var a = this.getTipElement(),
								l = r.getUID(this.constructor.NAME);
							a.setAttribute("id", l),
								this.element.setAttribute("aria-describedby", l),
								this.setContent(),
								this.config.animation && i(a).addClass(Lt);
							var h =
									"function" == typeof this.config.placement
										? this.config.placement.call(this, a, this.element)
										: this.config.placement,
								c = this._getAttachment(h);
							this.addAttachmentClass(c);
							var u = this._getContainer();
							i(a).data(this.constructor.DATA_KEY, this),
								i.contains(
									this.element.ownerDocument.documentElement,
									this.tip
								) || i(a).appendTo(u),
								i(this.element).trigger(this.constructor.Event.INSERTED),
								(this._popper = new e(this.element, a, {
									placement: c,
									modifiers: {
										offset: { offset: this.config.offset },
										flip: { behavior: this.config.fallbackPlacement },
										arrow: { element: ".arrow" },
										preventOverflow: {
											boundariesElement: this.config.boundary,
										},
									},
									onCreate: function (e) {
										e.originalPlacement !== e.placement &&
											t._handlePopperPlacementChange(e);
									},
									onUpdate: function (e) {
										return t._handlePopperPlacementChange(e);
									},
								})),
								i(a).addClass(zt),
								"ontouchstart" in document.documentElement &&
									i(document.body).children().on("mouseover", null, i.noop);
							var d = function () {
								t.config.animation && t._fixTransition();
								var e = t._hoverState;
								(t._hoverState = null),
									i(t.element).trigger(t.constructor.Event.SHOWN),
									"out" === e && t._leave(null, t);
							};
							if (i(this.tip).hasClass(Lt)) {
								var p = r.getTransitionDurationFromElement(this.tip);
								i(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(p);
							} else d();
						}
					}),
					(n.hide = function (t) {
						var e = this,
							n = this.getTipElement(),
							s = i.Event(this.constructor.Event.HIDE),
							o = function () {
								e._hoverState !== Ht &&
									n.parentNode &&
									n.parentNode.removeChild(n),
									e._cleanTipClass(),
									e.element.removeAttribute("aria-describedby"),
									i(e.element).trigger(e.constructor.Event.HIDDEN),
									null !== e._popper && e._popper.destroy(),
									t && t();
							};
						if ((i(this.element).trigger(s), !s.isDefaultPrevented())) {
							if (
								(i(n).removeClass(zt),
								"ontouchstart" in document.documentElement &&
									i(document.body).children().off("mouseover", null, i.noop),
								(this._activeTrigger.click = !1),
								(this._activeTrigger[jt] = !1),
								(this._activeTrigger[Wt] = !1),
								i(this.tip).hasClass(Lt))
							) {
								var a = r.getTransitionDurationFromElement(n);
								i(n).one(r.TRANSITION_END, o).emulateTransitionEnd(a);
							} else o();
							this._hoverState = "";
						}
					}),
					(n.update = function () {
						null !== this._popper && this._popper.scheduleUpdate();
					}),
					(n.isWithContent = function () {
						return Boolean(this.getTitle());
					}),
					(n.addAttachmentClass = function (t) {
						i(this.getTipElement()).addClass(Pt + "-" + t);
					}),
					(n.getTipElement = function () {
						return (
							(this.tip = this.tip || i(this.config.template)[0]), this.tip
						);
					}),
					(n.setContent = function () {
						var t = this.getTipElement();
						this.setElementContent(
							i(t.querySelectorAll(".tooltip-inner")),
							this.getTitle()
						),
							i(t).removeClass(Lt + " " + zt);
					}),
					(n.setElementContent = function (t, e) {
						var n = this.config.html;
						"object" == typeof e && (e.nodeType || e.jquery)
							? n
								? i(e).parent().is(t) || t.empty().append(e)
								: t.text(i(e).text())
							: t[n ? "html" : "text"](e);
					}),
					(n.getTitle = function () {
						var t = this.element.getAttribute("data-original-title");
						return (
							t ||
								(t =
									"function" == typeof this.config.title
										? this.config.title.call(this.element)
										: this.config.title),
							t
						);
					}),
					(n._getContainer = function () {
						return !1 === this.config.container
							? document.body
							: r.isElement(this.config.container)
							? i(this.config.container)
							: i(document).find(this.config.container);
					}),
					(n._getAttachment = function (t) {
						return Mt[t.toUpperCase()];
					}),
					(n._setListeners = function () {
						var t = this;
						this.config.trigger.split(" ").forEach(function (e) {
							if ("click" === e)
								i(t.element).on(
									t.constructor.Event.CLICK,
									t.config.selector,
									function (e) {
										return t.toggle(e);
									}
								);
							else if ("manual" !== e) {
								var n =
										e === Wt
											? t.constructor.Event.MOUSEENTER
											: t.constructor.Event.FOCUSIN,
									s =
										e === Wt
											? t.constructor.Event.MOUSELEAVE
											: t.constructor.Event.FOCUSOUT;
								i(t.element)
									.on(n, t.config.selector, function (e) {
										return t._enter(e);
									})
									.on(s, t.config.selector, function (e) {
										return t._leave(e);
									});
							}
						}),
							i(this.element)
								.closest(".modal")
								.on("hide.bs.modal", function () {
									t.element && t.hide();
								}),
							this.config.selector
								? (this.config = o({}, this.config, {
										trigger: "manual",
										selector: "",
								  }))
								: this._fixTitle();
					}),
					(n._fixTitle = function () {
						var t = typeof this.element.getAttribute("data-original-title");
						(this.element.getAttribute("title") || "string" !== t) &&
							(this.element.setAttribute(
								"data-original-title",
								this.element.getAttribute("title") || ""
							),
							this.element.setAttribute("title", ""));
					}),
					(n._enter = function (t, e) {
						var n = this.constructor.DATA_KEY;
						(e = e || i(t.currentTarget).data(n)) ||
							((e = new this.constructor(
								t.currentTarget,
								this._getDelegateConfig()
							)),
							i(t.currentTarget).data(n, e)),
							t && (e._activeTrigger["focusin" === t.type ? jt : Wt] = !0),
							i(e.getTipElement()).hasClass(zt) || e._hoverState === Ht
								? (e._hoverState = Ht)
								: (clearTimeout(e._timeout),
								  (e._hoverState = Ht),
								  e.config.delay && e.config.delay.show
										? (e._timeout = setTimeout(function () {
												e._hoverState === Ht && e.show();
										  }, e.config.delay.show))
										: e.show());
					}),
					(n._leave = function (t, e) {
						var n = this.constructor.DATA_KEY;
						(e = e || i(t.currentTarget).data(n)) ||
							((e = new this.constructor(
								t.currentTarget,
								this._getDelegateConfig()
							)),
							i(t.currentTarget).data(n, e)),
							t && (e._activeTrigger["focusout" === t.type ? jt : Wt] = !1),
							e._isWithActiveTrigger() ||
								(clearTimeout(e._timeout),
								(e._hoverState = "out"),
								e.config.delay && e.config.delay.hide
									? (e._timeout = setTimeout(function () {
											"out" === e._hoverState && e.hide();
									  }, e.config.delay.hide))
									: e.hide());
					}),
					(n._isWithActiveTrigger = function () {
						for (var t in this._activeTrigger)
							if (this._activeTrigger[t]) return !0;
						return !1;
					}),
					(n._getConfig = function (t) {
						return (
							"number" ==
								typeof (t = o(
									{},
									this.constructor.Default,
									i(this.element).data(),
									"object" == typeof t && t ? t : {}
								)).delay && (t.delay = { show: t.delay, hide: t.delay }),
							"number" == typeof t.title && (t.title = t.title.toString()),
							"number" == typeof t.content &&
								(t.content = t.content.toString()),
							r.typeCheckConfig(St, t, this.constructor.DefaultType),
							t
						);
					}),
					(n._getDelegateConfig = function () {
						var t = {};
						if (this.config)
							for (var e in this.config)
								this.constructor.Default[e] !== this.config[e] &&
									(t[e] = this.config[e]);
						return t;
					}),
					(n._cleanTipClass = function () {
						var t = i(this.getTipElement()),
							e = t.attr("class").match(Ot);
						null !== e && e.length && t.removeClass(e.join(""));
					}),
					(n._handlePopperPlacementChange = function (t) {
						var e = t.instance;
						(this.tip = e.popper),
							this._cleanTipClass(),
							this.addAttachmentClass(this._getAttachment(t.placement));
					}),
					(n._fixTransition = function () {
						var t = this.getTipElement(),
							e = this.config.animation;
						null === t.getAttribute("x-placement") &&
							(i(t).removeClass(Lt),
							(this.config.animation = !1),
							this.hide(),
							this.show(),
							(this.config.animation = e));
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this).data(Et),
								s = "object" == typeof e && e;
							if (
								(n || !/dispose|hide/.test(e)) &&
								(n || ((n = new t(this, s)), i(this).data(Et, n)),
								"string" == typeof e)
							) {
								if (void 0 === n[e])
									throw new TypeError('No method named "' + e + '"');
								n[e]();
							}
						});
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return Nt;
							},
						},
						{
							key: "NAME",
							get: function () {
								return St;
							},
						},
						{
							key: "DATA_KEY",
							get: function () {
								return Et;
							},
						},
						{
							key: "Event",
							get: function () {
								return $t;
							},
						},
						{
							key: "EVENT_KEY",
							get: function () {
								return It;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return Ft;
							},
						},
					]),
					t
				);
			})();
		(i.fn[St] = Rt._jQueryInterface),
			(i.fn[St].Constructor = Rt),
			(i.fn[St].noConflict = function () {
				return (i.fn[St] = At), Rt._jQueryInterface;
			});
		var qt = "popover",
			Bt = "bs.popover",
			Yt = "." + Bt,
			Ut = i.fn[qt],
			Kt = "bs-popover",
			Vt = new RegExp("(^|\\s)" + Kt + "\\S+", "g"),
			Xt = o({}, Rt.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template:
					'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			}),
			Qt = o({}, Rt.DefaultType, { content: "(string|element|function)" }),
			Gt = {
				HIDE: "hide" + Yt,
				HIDDEN: "hidden" + Yt,
				SHOW: "show" + Yt,
				SHOWN: "shown" + Yt,
				INSERTED: "inserted" + Yt,
				CLICK: "click" + Yt,
				FOCUSIN: "focusin" + Yt,
				FOCUSOUT: "focusout" + Yt,
				MOUSEENTER: "mouseenter" + Yt,
				MOUSELEAVE: "mouseleave" + Yt,
			},
			Zt = (function (t) {
				var e, n;
				function o() {
					return t.apply(this, arguments) || this;
				}
				(n = t),
					((e = o).prototype = Object.create(n.prototype)),
					((e.prototype.constructor = e).__proto__ = n);
				var a = o.prototype;
				return (
					(a.isWithContent = function () {
						return this.getTitle() || this._getContent();
					}),
					(a.addAttachmentClass = function (t) {
						i(this.getTipElement()).addClass(Kt + "-" + t);
					}),
					(a.getTipElement = function () {
						return (
							(this.tip = this.tip || i(this.config.template)[0]), this.tip
						);
					}),
					(a.setContent = function () {
						var t = i(this.getTipElement());
						this.setElementContent(t.find(".popover-header"), this.getTitle());
						var e = this._getContent();
						"function" == typeof e && (e = e.call(this.element)),
							this.setElementContent(t.find(".popover-body"), e),
							t.removeClass("fade show");
					}),
					(a._getContent = function () {
						return (
							this.element.getAttribute("data-content") || this.config.content
						);
					}),
					(a._cleanTipClass = function () {
						var t = i(this.getTipElement()),
							e = t.attr("class").match(Vt);
						null !== e && 0 < e.length && t.removeClass(e.join(""));
					}),
					(o._jQueryInterface = function (t) {
						return this.each(function () {
							var e = i(this).data(Bt),
								n = "object" == typeof t ? t : null;
							if (
								(e || !/dispose|hide/.test(t)) &&
								(e || ((e = new o(this, n)), i(this).data(Bt, e)),
								"string" == typeof t)
							) {
								if (void 0 === e[t])
									throw new TypeError('No method named "' + t + '"');
								e[t]();
							}
						});
					}),
					s(o, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return Xt;
							},
						},
						{
							key: "NAME",
							get: function () {
								return qt;
							},
						},
						{
							key: "DATA_KEY",
							get: function () {
								return Bt;
							},
						},
						{
							key: "Event",
							get: function () {
								return Gt;
							},
						},
						{
							key: "EVENT_KEY",
							get: function () {
								return Yt;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return Qt;
							},
						},
					]),
					o
				);
			})(Rt);
		(i.fn[qt] = Zt._jQueryInterface),
			(i.fn[qt].Constructor = Zt),
			(i.fn[qt].noConflict = function () {
				return (i.fn[qt] = Ut), Zt._jQueryInterface;
			});
		var Jt = "scrollspy",
			te = "bs.scrollspy",
			ee = "." + te,
			ie = i.fn[Jt],
			ne = { offset: 10, method: "auto", target: "" },
			se = { offset: "number", method: "string", target: "(string|element)" },
			oe = {
				ACTIVATE: "activate" + ee,
				SCROLL: "scroll" + ee,
				LOAD_DATA_API: "load" + ee + ".data-api",
			},
			ae = "active",
			re = ".nav, .list-group",
			le = ".nav-link",
			he = ".list-group-item",
			ce = ".dropdown-item",
			ue = "position",
			de = (function () {
				function t(t, e) {
					var n = this;
					(this._element = t),
						(this._scrollElement = "BODY" === t.tagName ? window : t),
						(this._config = this._getConfig(e)),
						(this._selector =
							this._config.target +
							" " +
							le +
							"," +
							this._config.target +
							" " +
							he +
							"," +
							this._config.target +
							" " +
							ce),
						(this._offsets = []),
						(this._targets = []),
						(this._activeTarget = null),
						(this._scrollHeight = 0),
						i(this._scrollElement).on(oe.SCROLL, function (t) {
							return n._process(t);
						}),
						this.refresh(),
						this._process();
				}
				var e = t.prototype;
				return (
					(e.refresh = function () {
						var t = this,
							e =
								this._scrollElement === this._scrollElement.window
									? "offset"
									: ue,
							n = "auto" === this._config.method ? e : this._config.method,
							s = n === ue ? this._getScrollTop() : 0;
						(this._offsets = []),
							(this._targets = []),
							(this._scrollHeight = this._getScrollHeight()),
							[].slice
								.call(document.querySelectorAll(this._selector))
								.map(function (t) {
									var e,
										o = r.getSelectorFromElement(t);
									if ((o && (e = document.querySelector(o)), e)) {
										var a = e.getBoundingClientRect();
										if (a.width || a.height) return [i(e)[n]().top + s, o];
									}
									return null;
								})
								.filter(function (t) {
									return t;
								})
								.sort(function (t, e) {
									return t[0] - e[0];
								})
								.forEach(function (e) {
									t._offsets.push(e[0]), t._targets.push(e[1]);
								});
					}),
					(e.dispose = function () {
						i.removeData(this._element, te),
							i(this._scrollElement).off(ee),
							(this._element = null),
							(this._scrollElement = null),
							(this._config = null),
							(this._selector = null),
							(this._offsets = null),
							(this._targets = null),
							(this._activeTarget = null),
							(this._scrollHeight = null);
					}),
					(e._getConfig = function (t) {
						if (
							"string" !=
							typeof (t = o({}, ne, "object" == typeof t && t ? t : {})).target
						) {
							var e = i(t.target).attr("id");
							e || ((e = r.getUID(Jt)), i(t.target).attr("id", e)),
								(t.target = "#" + e);
						}
						return r.typeCheckConfig(Jt, t, se), t;
					}),
					(e._getScrollTop = function () {
						return this._scrollElement === window
							? this._scrollElement.pageYOffset
							: this._scrollElement.scrollTop;
					}),
					(e._getScrollHeight = function () {
						return (
							this._scrollElement.scrollHeight ||
							Math.max(
								document.body.scrollHeight,
								document.documentElement.scrollHeight
							)
						);
					}),
					(e._getOffsetHeight = function () {
						return this._scrollElement === window
							? window.innerHeight
							: this._scrollElement.getBoundingClientRect().height;
					}),
					(e._process = function () {
						var t = this._getScrollTop() + this._config.offset,
							e = this._getScrollHeight(),
							i = this._config.offset + e - this._getOffsetHeight();
						if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
							var n = this._targets[this._targets.length - 1];
							this._activeTarget !== n && this._activate(n);
						} else {
							if (
								this._activeTarget &&
								t < this._offsets[0] &&
								0 < this._offsets[0]
							)
								return (this._activeTarget = null), void this._clear();
							for (var s = this._offsets.length; s--; )
								this._activeTarget !== this._targets[s] &&
									t >= this._offsets[s] &&
									(void 0 === this._offsets[s + 1] ||
										t < this._offsets[s + 1]) &&
									this._activate(this._targets[s]);
						}
					}),
					(e._activate = function (t) {
						(this._activeTarget = t), this._clear();
						var e = this._selector.split(",").map(function (e) {
								return (
									e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
								);
							}),
							n = i([].slice.call(document.querySelectorAll(e.join(","))));
						n.hasClass("dropdown-item")
							? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ae),
							  n.addClass(ae))
							: (n.addClass(ae),
							  n
									.parents(re)
									.prev(le + ", " + he)
									.addClass(ae),
							  n.parents(re).prev(".nav-item").children(le).addClass(ae)),
							i(this._scrollElement).trigger(oe.ACTIVATE, { relatedTarget: t });
					}),
					(e._clear = function () {
						[].slice
							.call(document.querySelectorAll(this._selector))
							.filter(function (t) {
								return t.classList.contains(ae);
							})
							.forEach(function (t) {
								return t.classList.remove(ae);
							});
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this).data(te);
							if (
								(n ||
									((n = new t(this, "object" == typeof e && e)),
									i(this).data(te, n)),
								"string" == typeof e)
							) {
								if (void 0 === n[e])
									throw new TypeError('No method named "' + e + '"');
								n[e]();
							}
						});
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return ne;
							},
						},
					]),
					t
				);
			})();
		i(window).on(oe.LOAD_DATA_API, function () {
			for (
				var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
					e = t.length;
				e--;

			) {
				var n = i(t[e]);
				de._jQueryInterface.call(n, n.data());
			}
		}),
			(i.fn[Jt] = de._jQueryInterface),
			(i.fn[Jt].Constructor = de),
			(i.fn[Jt].noConflict = function () {
				return (i.fn[Jt] = ie), de._jQueryInterface;
			});
		var pe = "bs.tab",
			fe = "." + pe,
			ge = i.fn.tab,
			me = {
				HIDE: "hide" + fe,
				HIDDEN: "hidden" + fe,
				SHOW: "show" + fe,
				SHOWN: "shown" + fe,
				CLICK_DATA_API: "click" + fe + ".data-api",
			},
			ve = "active",
			_e = ".active",
			be = "> li > .active",
			ye = (function () {
				function t(t) {
					this._element = t;
				}
				var e = t.prototype;
				return (
					(e.show = function () {
						var t = this;
						if (
							!(
								(this._element.parentNode &&
									this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
									i(this._element).hasClass(ve)) ||
								i(this._element).hasClass("disabled")
							)
						) {
							var e,
								n,
								s = i(this._element).closest(".nav, .list-group")[0],
								o = r.getSelectorFromElement(this._element);
							if (s) {
								var a = "UL" === s.nodeName || "OL" === s.nodeName ? be : _e;
								n = (n = i.makeArray(i(s).find(a)))[n.length - 1];
							}
							var l = i.Event(me.HIDE, { relatedTarget: this._element }),
								h = i.Event(me.SHOW, { relatedTarget: n });
							if (
								(n && i(n).trigger(l),
								i(this._element).trigger(h),
								!h.isDefaultPrevented() && !l.isDefaultPrevented())
							) {
								o && (e = document.querySelector(o)),
									this._activate(this._element, s);
								var c = function () {
									var e = i.Event(me.HIDDEN, { relatedTarget: t._element }),
										s = i.Event(me.SHOWN, { relatedTarget: n });
									i(n).trigger(e), i(t._element).trigger(s);
								};
								e ? this._activate(e, e.parentNode, c) : c();
							}
						}
					}),
					(e.dispose = function () {
						i.removeData(this._element, pe), (this._element = null);
					}),
					(e._activate = function (t, e, n) {
						var s = this,
							o = (
								!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
									? i(e).children(_e)
									: i(e).find(be)
							)[0],
							a = n && o && i(o).hasClass("fade"),
							l = function () {
								return s._transitionComplete(t, o, n);
							};
						if (o && a) {
							var h = r.getTransitionDurationFromElement(o);
							i(o)
								.removeClass("show")
								.one(r.TRANSITION_END, l)
								.emulateTransitionEnd(h);
						} else l();
					}),
					(e._transitionComplete = function (t, e, n) {
						if (e) {
							i(e).removeClass(ve);
							var s = i(e.parentNode).find("> .dropdown-menu .active")[0];
							s && i(s).removeClass(ve),
								"tab" === e.getAttribute("role") &&
									e.setAttribute("aria-selected", !1);
						}
						if (
							(i(t).addClass(ve),
							"tab" === t.getAttribute("role") &&
								t.setAttribute("aria-selected", !0),
							r.reflow(t),
							i(t).addClass("show"),
							t.parentNode && i(t.parentNode).hasClass("dropdown-menu"))
						) {
							var o = i(t).closest(".dropdown")[0];
							if (o) {
								var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
								i(a).addClass(ve);
							}
							t.setAttribute("aria-expanded", !0);
						}
						n && n();
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this),
								s = n.data(pe);
							if (
								(s || ((s = new t(this)), n.data(pe, s)), "string" == typeof e)
							) {
								if (void 0 === s[e])
									throw new TypeError('No method named "' + e + '"');
								s[e]();
							}
						});
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
					]),
					t
				);
			})();
		i(document).on(
			me.CLICK_DATA_API,
			'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
			function (t) {
				t.preventDefault(), ye._jQueryInterface.call(i(this), "show");
			}
		),
			(i.fn.tab = ye._jQueryInterface),
			(i.fn.tab.Constructor = ye),
			(i.fn.tab.noConflict = function () {
				return (i.fn.tab = ge), ye._jQueryInterface;
			});
		var we = "toast",
			xe = "bs.toast",
			Ce = "." + xe,
			ke = i.fn[we],
			Te = {
				CLICK_DISMISS: "click.dismiss" + Ce,
				HIDE: "hide" + Ce,
				HIDDEN: "hidden" + Ce,
				SHOW: "show" + Ce,
				SHOWN: "shown" + Ce,
			},
			De = "show",
			Se = "showing",
			Ee = { animation: "boolean", autohide: "boolean", delay: "number" },
			Ie = { animation: !0, autohide: !0, delay: 500 },
			Ae = (function () {
				function t(t, e) {
					(this._element = t),
						(this._config = this._getConfig(e)),
						(this._timeout = null),
						this._setListeners();
				}
				var e = t.prototype;
				return (
					(e.show = function () {
						var t = this;
						i(this._element).trigger(Te.SHOW),
							this._config.animation && this._element.classList.add("fade");
						var e = function () {
							t._element.classList.remove(Se),
								t._element.classList.add(De),
								i(t._element).trigger(Te.SHOWN),
								t._config.autohide && t.hide();
						};
						if (
							(this._element.classList.remove("hide"),
							this._element.classList.add(Se),
							this._config.animation)
						) {
							var n = r.getTransitionDurationFromElement(this._element);
							i(this._element).one(r.TRANSITION_END, e).emulateTransitionEnd(n);
						} else e();
					}),
					(e.hide = function (t) {
						var e = this;
						this._element.classList.contains(De) &&
							(i(this._element).trigger(Te.HIDE),
							t
								? this._close()
								: (this._timeout = setTimeout(function () {
										e._close();
								  }, this._config.delay)));
					}),
					(e.dispose = function () {
						clearTimeout(this._timeout),
							(this._timeout = null),
							this._element.classList.contains(De) &&
								this._element.classList.remove(De),
							i(this._element).off(Te.CLICK_DISMISS),
							i.removeData(this._element, xe),
							(this._element = null),
							(this._config = null);
					}),
					(e._getConfig = function (t) {
						return (
							(t = o(
								{},
								Ie,
								i(this._element).data(),
								"object" == typeof t && t ? t : {}
							)),
							r.typeCheckConfig(we, t, this.constructor.DefaultType),
							t
						);
					}),
					(e._setListeners = function () {
						var t = this;
						i(this._element).on(
							Te.CLICK_DISMISS,
							'[data-dismiss="toast"]',
							function () {
								return t.hide(!0);
							}
						);
					}),
					(e._close = function () {
						var t = this,
							e = function () {
								t._element.classList.add("hide"),
									i(t._element).trigger(Te.HIDDEN);
							};
						if ((this._element.classList.remove(De), this._config.animation)) {
							var n = r.getTransitionDurationFromElement(this._element);
							i(this._element).one(r.TRANSITION_END, e).emulateTransitionEnd(n);
						} else e();
					}),
					(t._jQueryInterface = function (e) {
						return this.each(function () {
							var n = i(this),
								s = n.data(xe);
							if (
								(s ||
									((s = new t(this, "object" == typeof e && e)), n.data(xe, s)),
								"string" == typeof e)
							) {
								if (void 0 === s[e])
									throw new TypeError('No method named "' + e + '"');
								s[e](this);
							}
						});
					}),
					s(t, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return Ee;
							},
						},
					]),
					t
				);
			})();
		(i.fn[we] = Ae._jQueryInterface),
			(i.fn[we].Constructor = Ae),
			(i.fn[we].noConflict = function () {
				return (i.fn[we] = ke), Ae._jQueryInterface;
			}),
			(function () {
				if (void 0 === i)
					throw new TypeError(
						"Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
					);
				var t = i.fn.jquery.split(" ")[0].split(".");
				if (
					(t[0] < 2 && t[1] < 9) ||
					(1 === t[0] && 9 === t[1] && t[2] < 1) ||
					4 <= t[0]
				)
					throw new Error(
						"Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
					);
			})(),
			(t.Util = r),
			(t.Alert = p),
			(t.Button = C),
			(t.Carousel = L),
			(t.Collapse = G),
			(t.Dropdown = dt),
			(t.Modal = Dt),
			(t.Popover = Zt),
			(t.Scrollspy = de),
			(t.Tab = ye),
			(t.Toast = Ae),
			(t.Tooltip = Rt),
			Object.defineProperty(t, "__esModule", { value: !0 });
	}),
	(function (t) {
		"use strict";
		var e = function (e, i) {
			(this.$element = t(e)),
				(this.options = t.extend({}, this.defaults(), i)),
				this.render();
		};
		(e.VERSION = "2.2.0"),
			(e.DEFAULTS = {
				on: "On",
				off: "Off",
				onstyle: "primary",
				offstyle: "default",
				size: "normal",
				style: "",
				width: null,
				height: null,
			}),
			(e.prototype.defaults = function () {
				return {
					on: this.$element.attr("data-on") || e.DEFAULTS.on,
					off: this.$element.attr("data-off") || e.DEFAULTS.off,
					onstyle: this.$element.attr("data-onstyle") || e.DEFAULTS.onstyle,
					offstyle: this.$element.attr("data-offstyle") || e.DEFAULTS.offstyle,
					size: this.$element.attr("data-size") || e.DEFAULTS.size,
					style: this.$element.attr("data-style") || e.DEFAULTS.style,
					width: this.$element.attr("data-width") || e.DEFAULTS.width,
					height: this.$element.attr("data-height") || e.DEFAULTS.height,
				};
			}),
			(e.prototype.render = function () {
				(this._onstyle = "btn-" + this.options.onstyle),
					(this._offstyle = "btn-" + this.options.offstyle);
				var e =
						"large" === this.options.size
							? "btn-lg"
							: "small" === this.options.size
							? "btn-sm"
							: "mini" === this.options.size
							? "btn-xs"
							: "",
					i = t('<label class="btn">')
						.html(this.options.on)
						.addClass(this._onstyle + " " + e),
					n = t('<label class="btn">')
						.html(this.options.off)
						.addClass(this._offstyle + " " + e + " active"),
					s = t('<span class="toggle-handle btn btn-default">').addClass(e),
					o = t('<div class="toggle-group">').append(i, n, s),
					a = t('<div class="toggle btn" data-toggle="toggle">')
						.addClass(
							this.$element.prop("checked")
								? this._onstyle
								: this._offstyle + " off"
						)
						.addClass(e)
						.addClass(this.options.style);
				this.$element.wrap(a),
					t.extend(this, {
						$toggle: this.$element.parent(),
						$toggleOn: i,
						$toggleOff: n,
						$toggleGroup: o,
					}),
					this.$toggle.append(o);
				var r =
						this.options.width ||
						Math.max(i.outerWidth(), n.outerWidth()) + s.outerWidth() / 2,
					l = this.options.height || Math.max(i.outerHeight(), n.outerHeight());
				i.addClass("toggle-on"),
					n.addClass("toggle-off"),
					this.$toggle.css({ width: r, height: l }),
					this.options.height &&
						(i.css("line-height", i.height() + "px"),
						n.css("line-height", n.height() + "px")),
					this.update(!0),
					this.trigger(!0);
			}),
			(e.prototype.toggle = function () {
				this.$element.prop("checked") ? this.off() : this.on();
			}),
			(e.prototype.on = function (t) {
				return (
					!this.$element.prop("disabled") &&
					(this.$toggle
						.removeClass(this._offstyle + " off")
						.addClass(this._onstyle),
					this.$element.prop("checked", !0),
					void (t || this.trigger()))
				);
			}),
			(e.prototype.off = function (t) {
				return (
					!this.$element.prop("disabled") &&
					(this.$toggle
						.removeClass(this._onstyle)
						.addClass(this._offstyle + " off"),
					this.$element.prop("checked", !1),
					void (t || this.trigger()))
				);
			}),
			(e.prototype.enable = function () {
				this.$toggle.removeAttr("disabled"), this.$element.prop("disabled", !1);
			}),
			(e.prototype.disable = function () {
				this.$toggle.attr("disabled", "disabled"),
					this.$element.prop("disabled", !0);
			}),
			(e.prototype.update = function (t) {
				this.$element.prop("disabled") ? this.disable() : this.enable(),
					this.$element.prop("checked") ? this.on(t) : this.off(t);
			}),
			(e.prototype.trigger = function (e) {
				this.$element.off("change.bs.toggle"),
					e || this.$element.change(),
					this.$element.on(
						"change.bs.toggle",
						t.proxy(function () {
							this.update();
						}, this)
					);
			}),
			(e.prototype.destroy = function () {
				this.$element.off("change.bs.toggle"),
					this.$toggleGroup.remove(),
					this.$element.removeData("bs.toggle"),
					this.$element.unwrap();
			});
		var i = t.fn.bootstrapToggle;
		(t.fn.bootstrapToggle = function (i) {
			return this.each(function () {
				var n = t(this),
					s = n.data("bs.toggle"),
					o = "object" == typeof i && i;
				s || n.data("bs.toggle", (s = new e(this, o))),
					"string" == typeof i && s[i] && s[i]();
			});
		}),
			(t.fn.bootstrapToggle.Constructor = e),
			(t.fn.toggle.noConflict = function () {
				return (t.fn.bootstrapToggle = i), this;
			}),
			t(function () {
				t("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle();
			}),
			t(document).on(
				"click.bs.toggle",
				"div[data-toggle^=toggle]",
				function (e) {
					t(this).find("input[type=checkbox]").bootstrapToggle("toggle"),
						e.preventDefault();
				}
			);
	})(jQuery),
	(function (t, e, i, n) {
		"use strict";
		(function (e) {
			for (var i = e.length, n = t("head"); i--; )
				0 === n.has("." + e[i]).length &&
					n.append('<meta class="' + e[i] + '" />');
		})([
			"foundation-mq-small",
			"foundation-mq-medium",
			"foundation-mq-large",
			"foundation-mq-xlarge",
			"foundation-mq-xxlarge",
			"foundation-data-attribute-namespace",
		]),
			t(function () {
				"undefined" != typeof FastClick &&
					void 0 !== i.body &&
					FastClick.attach(i.body);
			});
		var s = function (e, n) {
				if ("string" == typeof e) {
					if (n) {
						var s;
						if (n.jquery) {
							if (!(s = n[0])) return n;
						} else s = n;
						return t(s.querySelectorAll(e));
					}
					return t(i.querySelectorAll(e));
				}
				return t(e, n);
			},
			o = function (t) {
				var e = [];
				return (
					t || e.push("data"),
					this.namespace.length > 0 && e.push(this.namespace),
					e.push(this.name),
					e.join("-")
				);
			},
			a = function (t) {
				for (var e = t.split("-"), i = e.length, n = []; i--; )
					0 !== i
						? n.push(e[i])
						: this.namespace.length > 0
						? n.push(this.namespace, e[i])
						: n.push(e[i]);
				return n.reverse().join("-");
			},
			r = function (e, i) {
				var n = this,
					o = !s(this).data(this.attr_name(!0));
				if (
					(s(this.scope).is("[" + this.attr_name() + "]")
						? (s(this.scope).data(
								this.attr_name(!0) + "-init",
								t.extend(
									{},
									this.settings,
									i || e,
									this.data_options(s(this.scope))
								)
						  ),
						  o && this.events(this.scope))
						: s("[" + this.attr_name() + "]", this.scope).each(function () {
								var o = !s(this).data(n.attr_name(!0) + "-init");
								s(this).data(
									n.attr_name(!0) + "-init",
									t.extend({}, n.settings, i || e, n.data_options(s(this)))
								),
									o && n.events(this);
						  }),
					"string" == typeof e)
				)
					return this[e].call(this, i);
			};
		(e.matchMedia =
			e.matchMedia ||
			(function (t) {
				var e,
					i = t.documentElement,
					n = i.firstElementChild || i.firstChild,
					s = t.createElement("body"),
					o = t.createElement("div");
				return (
					(o.id = "mq-test-1"),
					(o.style.cssText = "position:absolute;top:-100em"),
					(s.style.background = "none"),
					s.appendChild(o),
					function (t) {
						return (
							(o.innerHTML =
								'&shy;<style media="' +
								t +
								'"> #mq-test-1 { width: 42px; }</style>'),
							i.insertBefore(s, n),
							(e = 42 === o.offsetWidth),
							i.removeChild(s),
							{ matches: e, media: t }
						);
					}
				);
			})(i)),
			(function (t) {
				function i() {
					n && (a(i), l && jQuery.fx.tick());
				}
				for (
					var n,
						s = 0,
						o = ["webkit", "moz"],
						a = e.requestAnimationFrame,
						r = e.cancelAnimationFrame,
						l = void 0 !== jQuery.fx;
					s < o.length && !a;
					s++
				)
					(a = e[o[s] + "RequestAnimationFrame"]),
						(r =
							r ||
							e[o[s] + "CancelAnimationFrame"] ||
							e[o[s] + "CancelRequestAnimationFrame"]);
				a
					? ((e.requestAnimationFrame = a),
					  (e.cancelAnimationFrame = r),
					  l &&
							((jQuery.fx.timer = function (t) {
								t() && jQuery.timers.push(t) && !n && ((n = !0), i());
							}),
							(jQuery.fx.stop = function () {
								n = !1;
							})))
					: ((e.requestAnimationFrame = function (t) {
							var i = new Date().getTime(),
								n = Math.max(0, 16 - (i - s)),
								o = e.setTimeout(function () {
									t(i + n);
								}, n);
							return (s = i + n), o;
					  }),
					  (e.cancelAnimationFrame = function (t) {
							clearTimeout(t);
					  }));
			})(jQuery),
			(e.Foundation = {
				name: "Foundation",
				version: "5.4.5",
				media_queries: {
					small: s(".foundation-mq-small")
						.css("font-family")
						.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					medium: s(".foundation-mq-medium")
						.css("font-family")
						.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					large: s(".foundation-mq-large")
						.css("font-family")
						.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					xlarge: s(".foundation-mq-xlarge")
						.css("font-family")
						.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
					xxlarge: s(".foundation-mq-xxlarge")
						.css("font-family")
						.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				},
				stylesheet: t("<style></style>").appendTo("head")[0].sheet,
				global: { namespace: n },
				init: function (t, i, n, o, a) {
					var r = [t, n, o, a],
						l = [];
					if (
						((this.rtl = /rtl/i.test(s("html").attr("dir"))),
						(this.scope = t || this.scope),
						this.set_namespace(),
						i && "string" == typeof i && !/reflow/i.test(i))
					)
						this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, r));
					else for (var h in this.libs) l.push(this.init_lib(h, i));
					return (
						s(e).load(function () {
							s(e)
								.trigger("resize.fndtn.clearing")
								.trigger("resize.fndtn.dropdown")
								.trigger("resize.fndtn.equalizer")
								.trigger("resize.fndtn.interchange")
								.trigger("resize.fndtn.joyride")
								.trigger("resize.fndtn.magellan")
								.trigger("resize.fndtn.topbar")
								.trigger("resize.fndtn.slider");
						}),
						t
					);
				},
				init_lib: function (e, i) {
					return this.libs.hasOwnProperty(e)
						? (this.patch(this.libs[e]),
						  i && i.hasOwnProperty(e)
								? (void 0 !== this.libs[e].settings
										? t.extend(!0, this.libs[e].settings, i[e])
										: void 0 !== this.libs[e].defaults &&
										  t.extend(!0, this.libs[e].defaults, i[e]),
								  this.libs[e].init.apply(this.libs[e], [this.scope, i[e]]))
								: ((i = i instanceof Array ? i : new Array(i)),
								  this.libs[e].init.apply(this.libs[e], i)))
						: function () {};
				},
				patch: function (t) {
					(t.scope = this.scope),
						(t.namespace = this.global.namespace),
						(t.rtl = this.rtl),
						(t.data_options = this.utils.data_options),
						(t.attr_name = o),
						(t.add_namespace = a),
						(t.bindings = r),
						(t.S = this.utils.S);
				},
				inherit: function (t, e) {
					for (var i = e.split(" "), n = i.length; n--; )
						this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]]);
				},
				set_namespace: function () {
					var e =
						this.global.namespace === n
							? t(".foundation-data-attribute-namespace").css("font-family")
							: this.global.namespace;
					this.global.namespace = e === n || /false/i.test(e) ? "" : e;
				},
				libs: {},
				utils: {
					S: s,
					throttle: function (t, e) {
						var i = null;
						return function () {
							var n = this,
								s = arguments;
							null == i &&
								(i = setTimeout(function () {
									t.apply(n, s), (i = null);
								}, e));
						};
					},
					debounce: function (t, e, i) {
						var n, s;
						return function () {
							var o = this,
								a = arguments,
								r = i && !n;
							return (
								clearTimeout(n),
								(n = setTimeout(function () {
									(n = null), i || (s = t.apply(o, a));
								}, e)),
								r && (s = t.apply(o, a)),
								s
							);
						};
					},
					data_options: function (e, i) {
						function n(t) {
							return (
								!isNaN(t - 0) && null !== t && "" !== t && !1 !== t && !0 !== t
							);
						}
						function s(e) {
							return "string" == typeof e ? t.trim(e) : e;
						}
						i = i || "options";
						var o,
							a,
							r,
							l = {},
							h = (function (t) {
								var e = Foundation.global.namespace;
								return e.length > 0 ? t.data(e + "-" + i) : t.data(i);
							})(e);
						if ("object" == typeof h) return h;
						for (o = (r = (h || ":").split(";")).length; o--; )
							(a = [(a = r[o].split(":"))[0], a.slice(1).join(":")]),
								/true/i.test(a[1]) && (a[1] = !0),
								/false/i.test(a[1]) && (a[1] = !1),
								n(a[1]) &&
									(-1 === a[1].indexOf(".")
										? (a[1] = parseInt(a[1], 10))
										: (a[1] = parseFloat(a[1]))),
								2 === a.length && a[0].length > 0 && (l[s(a[0])] = s(a[1]));
						return l;
					},
					register_media: function (e, i) {
						Foundation.media_queries[e] === n &&
							(t("head").append('<meta class="' + i + '"/>'),
							(Foundation.media_queries[e] = (function (t) {
								return (
									("string" == typeof t || t instanceof String) &&
										(t = t.replace(/^['\\\/"]+|(;\s?})+|['\\\/"]+$/g, "")),
									t
								);
							})(t("." + i).css("font-family"))));
					},
					add_custom_rule: function (t, e) {
						e === n && Foundation.stylesheet
							? Foundation.stylesheet.insertRule(
									t,
									Foundation.stylesheet.cssRules.length
							  )
							: Foundation.media_queries[e] !== n &&
							  Foundation.stylesheet.insertRule(
									"@media " + Foundation.media_queries[e] + "{ " + t + " }"
							  );
					},
					image_loaded: function (t, e) {
						var i = this,
							n = t.length;
						0 === n && e(t),
							t.each(function () {
								!(function (t, e) {
									function i() {
										e(t[0]);
									}
									t.attr("src")
										? t[0].complete || 4 === t[0].readyState
											? i()
											: function () {
													if (
														(this.one("load", i),
														/MSIE (\d+\.\d+);/.test(navigator.userAgent))
													) {
														var t = this.attr("src"),
															e = t.match(/\?/) ? "&" : "?";
														(e += "random=" + new Date().getTime()),
															this.attr("src", t + e);
													}
											  }.call(t)
										: i();
								})(i.S(this), function () {
									0 === (n -= 1) && e(t);
								});
							});
					},
					random_str: function () {
						return (
							this.fidx || (this.fidx = 0),
							(this.prefix =
								this.prefix ||
								[this.name || "F", (+new Date()).toString(36)].join("-")),
							this.prefix + (this.fidx++).toString(36)
						);
					},
				},
			}),
			(t.fn.foundation = function () {
				var t = Array.prototype.slice.call(arguments, 0);
				return this.each(function () {
					return Foundation.init.apply(Foundation, [this].concat(t)), this;
				});
			});
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.slider = {
			name: "slider",
			version: "5.4.5",
			settings: {
				start: 0,
				end: 100,
				step: 1,
				initial: null,
				display_selector: "",
				vertical: !1,
				on_change: function () {},
			},
			cache: {},
			init: function (t, e, i) {
				Foundation.inherit(this, "throttle"),
					this.bindings(e, i),
					this.reflow();
			},
			events: function () {
				var i = this;
				t(this.scope)
					.off(".slider")
					.on(
						"mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider",
						"[" +
							i.attr_name() +
							"]:not(.disabled, [disabled]) .range-slider-handle",
						function (e) {
							i.cache.active ||
								(e.preventDefault(), i.set_active_slider(t(e.target)));
						}
					)
					.on(
						"mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",
						function (n) {
							if (i.cache.active)
								if (
									(n.preventDefault(),
									t.data(i.cache.active[0], "settings").vertical)
								) {
									var s = 0;
									n.pageY || (s = e.scrollY),
										i.calculate_position(
											i.cache.active,
											(n.pageY ||
												n.originalEvent.clientY ||
												n.originalEvent.touches[0].clientY ||
												n.currentPoint.y) + s
										);
								} else
									i.calculate_position(
										i.cache.active,
										n.pageX ||
											n.originalEvent.clientX ||
											n.originalEvent.touches[0].clientX ||
											n.currentPoint.x
									);
						}
					)
					.on(
						"mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",
						function (t) {
							i.remove_active_slider();
						}
					)
					.on("change.fndtn.slider", function (t) {
						i.settings.on_change();
					}),
					i.S(e).on(
						"resize.fndtn.slider",
						i.throttle(function (t) {
							i.reflow();
						}, 300)
					);
			},
			set_active_slider: function (t) {
				this.cache.active = t;
			},
			remove_active_slider: function () {
				this.cache.active = null;
			},
			calculate_position: function (e, i) {
				var n = this,
					s = t.data(e[0], "settings"),
					o =
						(t.data(e[0], "handle_l"),
						t.data(e[0], "handle_o"),
						t.data(e[0], "bar_l")),
					a = t.data(e[0], "bar_o");
				requestAnimationFrame(function () {
					var t;
					(t =
						Foundation.rtl && !s.vertical
							? n.limit_to((a + o - i) / o, 0, 1)
							: n.limit_to((i - a) / o, 0, 1)),
						(t = s.vertical ? 1 - t : t);
					var r = n.normalized_value(t, s.start, s.end, s.step);
					n.set_ui(e, r);
				});
			},
			set_ui: function (e, i) {
				var n = t.data(e[0], "settings"),
					s = t.data(e[0], "handle_l"),
					o = t.data(e[0], "bar_l"),
					a = this.normalized_percentage(i, n.start, n.end),
					r = a * (o - s) - 1,
					l = 100 * a;
				Foundation.rtl && !n.vertical && (r = -r),
					(r = n.vertical ? -r + o - s + 1 : r),
					this.set_translate(e, r, n.vertical),
					n.vertical
						? e.siblings(".range-slider-active-segment").css("height", l + "%")
						: e.siblings(".range-slider-active-segment").css("width", l + "%"),
					e
						.parent()
						.attr(this.attr_name(), i)
						.trigger("change")
						.trigger("change.fndtn.slider"),
					e.parent().children("input[type=hidden]").val(i),
					e[0].hasAttribute("aria-valuemin") ||
						e.attr({ "aria-valuemin": n.start, "aria-valuemax": n.end }),
					e.attr("aria-valuenow", i);
			},
			normalized_percentage: function (t, e, i) {
				return Math.min(1, (t - e) / (i - e));
			},
			normalized_value: function (t, e, i, n) {
				var s = t * (i - e);
				return ((s - (s % n)) / n) * n + (s % n >= 0.5 * n ? n : 0) + e;
			},
			set_translate: function (e, i, n) {
				n
					? t(e)
							.css("-webkit-transform", "translateY(" + i + "px)")
							.css("-moz-transform", "translateY(" + i + "px)")
							.css("-ms-transform", "translateY(" + i + "px)")
							.css("-o-transform", "translateY(" + i + "px)")
							.css("transform", "translateY(" + i + "px)")
					: t(e)
							.css("-webkit-transform", "translateX(" + i + "px)")
							.css("-moz-transform", "translateX(" + i + "px)")
							.css("-ms-transform", "translateX(" + i + "px)")
							.css("-o-transform", "translateX(" + i + "px)")
							.css("transform", "translateX(" + i + "px)");
			},
			limit_to: function (t, e, i) {
				return Math.min(Math.max(t, e), i);
			},
			initialize_settings: function (e) {
				var i = t.extend({}, this.settings, this.data_options(t(e).parent()));
				i.vertical
					? (t.data(e, "bar_o", t(e).parent().offset().top),
					  t.data(e, "bar_l", t(e).parent().outerHeight()),
					  t.data(e, "handle_o", t(e).offset().top),
					  t.data(e, "handle_l", t(e).outerHeight()))
					: (t.data(e, "bar_o", t(e).parent().offset().left),
					  t.data(e, "bar_l", t(e).parent().outerWidth()),
					  t.data(e, "handle_o", t(e).offset().left),
					  t.data(e, "handle_l", t(e).outerWidth())),
					t.data(e, "bar", t(e).parent()),
					t.data(e, "settings", i);
			},
			set_initial_position: function (e) {
				var i = t.data(e.children(".range-slider-handle")[0], "settings"),
					n = i.initial
						? i.initial
						: Math.floor((0.5 * (i.end - i.start)) / i.step) * i.step + i.start,
					s = e.children(".range-slider-handle");
				this.set_ui(s, n);
			},
			set_value: function (e) {
				var i = this;
				t("[" + i.attr_name() + "]", this.scope).each(function () {
					t(this).attr(i.attr_name(), e);
				}),
					!t(this.scope).attr(i.attr_name()) ||
						t(this.scope).attr(i.attr_name(), e),
					i.reflow();
			},
			reflow: function () {
				var e = this;
				e.S("[" + this.attr_name() + "]").each(function () {
					var i = t(this).children(".range-slider-handle")[0],
						n = t(this).attr(e.attr_name());
					e.initialize_settings(i),
						n ? e.set_ui(t(i), parseFloat(n)) : e.set_initial_position(t(this));
				});
			},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.joyride = {
			name: "joyride",
			version: "5.4.5",
			defaults: {
				expose: !1,
				modal: !0,
				keyboard: !0,
				tip_location: "bottom",
				nub_position: "auto",
				scroll_speed: 1500,
				scroll_animation: "linear",
				timer: 0,
				start_timer_on_click: !0,
				start_offset: 0,
				next_button: !0,
				prev_button: !0,
				tip_animation: "fade",
				pause_after: [],
				exposed: [],
				tip_animation_fade_speed: 300,
				cookie_monster: !1,
				cookie_name: "joyride",
				cookie_domain: !1,
				cookie_expires: 365,
				tip_container: "body",
				abort_on_close: !0,
				tip_location_patterns: {
					top: ["bottom"],
					bottom: [],
					left: ["right", "top", "bottom"],
					right: ["left", "top", "bottom"],
				},
				post_ride_callback: function () {},
				post_step_callback: function () {},
				pre_step_callback: function () {},
				pre_ride_callback: function () {},
				post_expose_callback: function () {},
				template: {
					link: '<a href="#close" class="joyride-close-tip">&times;</a>',
					timer:
						'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
					tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
					wrapper: '<div class="joyride-content-wrapper"></div>',
					button: '<a href="#" class="small button joyride-next-tip"></a>',
					prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
					modal: '<div class="joyride-modal-bg"></div>',
					expose: '<div class="joyride-expose-wrapper"></div>',
					expose_cover: '<div class="joyride-expose-cover"></div>',
				},
				expose_add_class: "",
			},
			init: function (e, i, n) {
				Foundation.inherit(this, "throttle random_str"),
					(this.settings =
						this.settings || t.extend({}, this.defaults, n || i)),
					this.bindings(i, n);
			},
			go_next: function () {
				this.settings.$li.next().length < 1
					? this.end()
					: this.settings.timer > 0
					? (clearTimeout(this.settings.automate),
					  this.hide(),
					  this.show(),
					  this.startTimer())
					: (this.hide(), this.show());
			},
			go_prev: function () {
				this.settings.$li.prev().length < 1 ||
					(this.settings.timer > 0
						? (clearTimeout(this.settings.automate),
						  this.hide(),
						  this.show(null, !0),
						  this.startTimer())
						: (this.hide(), this.show(null, !0)));
			},
			events: function () {
				var i = this;
				t(this.scope)
					.off(".joyride")
					.on(
						"click.fndtn.joyride",
						".joyride-next-tip, .joyride-modal-bg",
						function (t) {
							t.preventDefault(), this.go_next();
						}.bind(this)
					)
					.on(
						"click.fndtn.joyride",
						".joyride-prev-tip",
						function (t) {
							t.preventDefault(), this.go_prev();
						}.bind(this)
					)
					.on(
						"click.fndtn.joyride",
						".joyride-close-tip",
						function (t) {
							t.preventDefault(), this.end(this.settings.abort_on_close);
						}.bind(this)
					)
					.on(
						"keyup.joyride",
						function (t) {
							if (this.settings.keyboard)
								switch (t.which) {
									case 39:
										t.preventDefault(), this.go_next();
										break;
									case 37:
										t.preventDefault(), this.go_prev();
										break;
									case 27:
										t.preventDefault(), this.end(this.settings.abort_on_close);
								}
						}.bind(this)
					),
					t(e)
						.off(".joyride")
						.on(
							"resize.fndtn.joyride",
							i.throttle(function () {
								if (
									t("[" + i.attr_name() + "]").length > 0 &&
									i.settings.$next_tip &&
									i.settings.riding
								) {
									if (i.settings.exposed.length > 0)
										t(i.settings.exposed).each(function () {
											var e = t(this);
											i.un_expose(e), i.expose(e);
										});
									i.is_phone() ? i.pos_phone() : i.pos_default(!1);
								}
							}, 100)
						);
			},
			start: function () {
				var e = this,
					i = t("[" + this.attr_name() + "]", this.scope),
					n = [
						"timer",
						"scrollSpeed",
						"startOffset",
						"tipAnimationFadeSpeed",
						"cookieExpires",
					],
					s = n.length;
				!i.length > 0 ||
					(this.settings.init || this.events(),
					(this.settings = i.data(this.attr_name(!0) + "-init")),
					(this.settings.$content_el = i),
					(this.settings.$body = t(this.settings.tip_container)),
					(this.settings.body_offset = t(
						this.settings.tip_container
					).position()),
					(this.settings.$tip_content = this.settings.$content_el.find("> li")),
					(this.settings.paused = !1),
					(this.settings.attempts = 0),
					(this.settings.riding = !0),
					"function" != typeof t.cookie && (this.settings.cookie_monster = !1),
					(!this.settings.cookie_monster ||
						(this.settings.cookie_monster &&
							!t.cookie(this.settings.cookie_name))) &&
						(this.settings.$tip_content.each(function (i) {
							var o = t(this);
							this.settings = t.extend({}, e.defaults, e.data_options(o));
							for (var a = s; a--; )
								e.settings[n[a]] = parseInt(e.settings[n[a]], 10);
							e.create({ $li: o, index: i });
						}),
						!this.settings.start_timer_on_click && this.settings.timer > 0
							? (this.show("init"), this.startTimer())
							: this.show("init")));
			},
			resume: function () {
				this.set_li(), this.show();
			},
			tip_template: function (e) {
				var i, n;
				return (
					(e.tip_class = e.tip_class || ""),
					(i = t(this.settings.template.tip).addClass(e.tip_class)),
					(n =
						t.trim(t(e.li).html()) +
						this.prev_button_text(e.prev_button_text, e.index) +
						this.button_text(e.button_text) +
						this.settings.template.link +
						this.timer_instance(e.index)),
					i.append(t(this.settings.template.wrapper)),
					i.first().attr(this.add_namespace("data-index"), e.index),
					t(".joyride-content-wrapper", i).append(n),
					i[0]
				);
			},
			timer_instance: function (e) {
				return (0 === e &&
					this.settings.start_timer_on_click &&
					this.settings.timer > 0) ||
					0 === this.settings.timer
					? ""
					: t(this.settings.template.timer)[0].outerHTML;
			},
			button_text: function (e) {
				return (
					this.settings.tip_settings.next_button
						? ((e = t.trim(e) || "Next"),
						  (e = t(this.settings.template.button).append(e)[0].outerHTML))
						: (e = ""),
					e
				);
			},
			prev_button_text: function (e, i) {
				return (
					this.settings.tip_settings.prev_button
						? ((e = t.trim(e) || "Previous"),
						  (e =
								0 == i
									? t(this.settings.template.prev_button)
											.append(e)
											.addClass("disabled")[0].outerHTML
									: t(this.settings.template.prev_button).append(e)[0]
											.outerHTML))
						: (e = ""),
					e
				);
			},
			create: function (e) {
				this.settings.tip_settings = t.extend(
					{},
					this.settings,
					this.data_options(e.$li)
				);
				var i =
						e.$li.attr(this.add_namespace("data-button")) ||
						e.$li.attr(this.add_namespace("data-text")),
					n =
						e.$li.attr(this.add_namespace("data-button-prev")) ||
						e.$li.attr(this.add_namespace("data-prev-text")),
					s = e.$li.attr("class"),
					o = t(
						this.tip_template({
							tip_class: s,
							index: e.index,
							button_text: i,
							prev_button_text: n,
							li: e.$li,
						})
					);
				t(this.settings.tip_container).append(o);
			},
			show: function (e, i) {
				var s = null;
				this.settings.$li === n ||
				-1 === t.inArray(this.settings.$li.index(), this.settings.pause_after)
					? (this.settings.paused
							? (this.settings.paused = !1)
							: this.set_li(e, i),
					  (this.settings.attempts = 0),
					  this.settings.$li.length && this.settings.$target.length > 0
							? (e &&
									(this.settings.pre_ride_callback(
										this.settings.$li.index(),
										this.settings.$next_tip
									),
									this.settings.modal && this.show_modal()),
							  this.settings.pre_step_callback(
									this.settings.$li.index(),
									this.settings.$next_tip
							  ),
							  this.settings.modal && this.settings.expose && this.expose(),
							  (this.settings.tip_settings = t.extend(
									{},
									this.settings,
									this.data_options(this.settings.$li)
							  )),
							  (this.settings.timer = parseInt(this.settings.timer, 10)),
							  (this.settings.tip_settings.tip_location_pattern =
									this.settings.tip_location_patterns[
										this.settings.tip_settings.tip_location
									]),
							  /body/i.test(this.settings.$target.selector) ||
									this.scroll_to(),
							  this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0),
							  (s = this.settings.$next_tip.find(".joyride-timer-indicator")),
							  /pop/i.test(this.settings.tip_animation)
									? (s.width(0),
									  this.settings.timer > 0
											? (this.settings.$next_tip.show(),
											  setTimeout(
													function () {
														s.animate(
															{ width: s.parent().width() },
															this.settings.timer,
															"linear"
														);
													}.bind(this),
													this.settings.tip_animation_fade_speed
											  ))
											: this.settings.$next_tip.show())
									: /fade/i.test(this.settings.tip_animation) &&
									  (s.width(0),
									  this.settings.timer > 0
											? (this.settings.$next_tip
													.fadeIn(this.settings.tip_animation_fade_speed)
													.show(),
											  setTimeout(
													function () {
														s.animate(
															{ width: s.parent().width() },
															this.settings.timer,
															"linear"
														);
													}.bind(this),
													this.settings.tip_animation_fade_speed
											  ))
											: this.settings.$next_tip.fadeIn(
													this.settings.tip_animation_fade_speed
											  )),
							  (this.settings.$current_tip = this.settings.$next_tip))
							: this.settings.$li && this.settings.$target.length < 1
							? this.show()
							: this.end())
					: (this.settings.paused = !0);
			},
			is_phone: function () {
				return (
					matchMedia(Foundation.media_queries.small).matches &&
					!matchMedia(Foundation.media_queries.medium).matches
				);
			},
			hide: function () {
				this.settings.modal && this.settings.expose && this.un_expose(),
					this.settings.modal || t(".joyride-modal-bg").hide(),
					this.settings.$current_tip.css("visibility", "hidden"),
					setTimeout(
						t.proxy(function () {
							this.hide(), this.css("visibility", "visible");
						}, this.settings.$current_tip),
						0
					),
					this.settings.post_step_callback(
						this.settings.$li.index(),
						this.settings.$current_tip
					);
			},
			set_li: function (t, e) {
				t
					? ((this.settings.$li = this.settings.$tip_content.eq(
							this.settings.start_offset
					  )),
					  this.set_next_tip(),
					  (this.settings.$current_tip = this.settings.$next_tip))
					: ((this.settings.$li = e
							? this.settings.$li.prev()
							: this.settings.$li.next()),
					  this.set_next_tip()),
					this.set_target();
			},
			set_next_tip: function () {
				(this.settings.$next_tip = t(".joyride-tip-guide").eq(
					this.settings.$li.index()
				)),
					this.settings.$next_tip.data("closed", "");
			},
			set_target: function () {
				var e = this.settings.$li.attr(this.add_namespace("data-class")),
					n = this.settings.$li.attr(this.add_namespace("data-id"));
				this.settings.$target = n
					? t(i.getElementById(n))
					: e
					? t("." + e).first()
					: t("body");
			},
			scroll_to: function () {
				var i, n;
				(i = t(e).height() / 2),
					0 !=
						(n = Math.ceil(
							this.settings.$target.offset().top -
								i +
								this.settings.$next_tip.outerHeight()
						)) &&
						t("html, body")
							.stop()
							.animate({ scrollTop: n }, this.settings.scroll_speed, "swing");
			},
			paused: function () {
				return (
					-1 ===
					t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
				);
			},
			restart: function () {
				this.hide(), (this.settings.$li = n), this.show("init");
			},
			pos_default: function (t) {
				var e = this.settings.$next_tip.find(".joyride-nub"),
					i = Math.ceil(e.outerWidth() / 2),
					n = Math.ceil(e.outerHeight() / 2),
					s = t || !1;
				if (
					(s &&
						(this.settings.$next_tip.css("visibility", "hidden"),
						this.settings.$next_tip.show()),
					/body/i.test(this.settings.$target.selector))
				)
					this.settings.$li.length && this.pos_modal(e);
				else {
					var o = this.settings.tip_settings.tipAdjustmentY
							? parseInt(this.settings.tip_settings.tipAdjustmentY)
							: 0,
						a = this.settings.tip_settings.tipAdjustmentX
							? parseInt(this.settings.tip_settings.tipAdjustmentX)
							: 0;
					this.bottom()
						? (this.rtl
								? this.settings.$next_tip.css({
										top:
											this.settings.$target.offset().top +
											n +
											this.settings.$target.outerHeight() +
											o,
										left:
											this.settings.$target.offset().left +
											this.settings.$target.outerWidth() -
											this.settings.$next_tip.outerWidth() +
											a,
								  })
								: this.settings.$next_tip.css({
										top:
											this.settings.$target.offset().top +
											n +
											this.settings.$target.outerHeight() +
											o,
										left: this.settings.$target.offset().left + a,
								  }),
						  this.nub_position(
								e,
								this.settings.tip_settings.nub_position,
								"top"
						  ))
						: this.top()
						? (this.rtl
								? this.settings.$next_tip.css({
										top:
											this.settings.$target.offset().top -
											this.settings.$next_tip.outerHeight() -
											n +
											o,
										left:
											this.settings.$target.offset().left +
											this.settings.$target.outerWidth() -
											this.settings.$next_tip.outerWidth(),
								  })
								: this.settings.$next_tip.css({
										top:
											this.settings.$target.offset().top -
											this.settings.$next_tip.outerHeight() -
											n +
											o,
										left: this.settings.$target.offset().left + a,
								  }),
						  this.nub_position(
								e,
								this.settings.tip_settings.nub_position,
								"bottom"
						  ))
						: this.right()
						? (this.settings.$next_tip.css({
								top: this.settings.$target.offset().top + o,
								left:
									this.settings.$target.outerWidth() +
									this.settings.$target.offset().left +
									i +
									a,
						  }),
						  this.nub_position(
								e,
								this.settings.tip_settings.nub_position,
								"left"
						  ))
						: this.left() &&
						  (this.settings.$next_tip.css({
								top: this.settings.$target.offset().top + o,
								left:
									this.settings.$target.offset().left -
									this.settings.$next_tip.outerWidth() -
									i +
									a,
						  }),
						  this.nub_position(
								e,
								this.settings.tip_settings.nub_position,
								"right"
						  )),
						!this.visible(this.corners(this.settings.$next_tip)) &&
							this.settings.attempts <
								this.settings.tip_settings.tip_location_pattern.length &&
							(e
								.removeClass("bottom")
								.removeClass("top")
								.removeClass("right")
								.removeClass("left"),
							(this.settings.tip_settings.tip_location =
								this.settings.tip_settings.tip_location_pattern[
									this.settings.attempts
								]),
							this.settings.attempts++,
							this.pos_default());
				}
				s &&
					(this.settings.$next_tip.hide(),
					this.settings.$next_tip.css("visibility", "visible"));
			},
			pos_phone: function (e) {
				var i = this.settings.$next_tip.outerHeight(),
					n =
						(this.settings.$next_tip.offset(),
						this.settings.$target.outerHeight()),
					s = t(".joyride-nub", this.settings.$next_tip),
					o = Math.ceil(s.outerHeight() / 2),
					a = e || !1;
				s
					.removeClass("bottom")
					.removeClass("top")
					.removeClass("right")
					.removeClass("left"),
					a &&
						(this.settings.$next_tip.css("visibility", "hidden"),
						this.settings.$next_tip.show()),
					/body/i.test(this.settings.$target.selector)
						? this.settings.$li.length && this.pos_modal(s)
						: this.top()
						? (this.settings.$next_tip.offset({
								top: this.settings.$target.offset().top - i - o,
						  }),
						  s.addClass("bottom"))
						: (this.settings.$next_tip.offset({
								top: this.settings.$target.offset().top + n + o,
						  }),
						  s.addClass("top")),
					a &&
						(this.settings.$next_tip.hide(),
						this.settings.$next_tip.css("visibility", "visible"));
			},
			pos_modal: function (t) {
				this.center(), t.hide(), this.show_modal();
			},
			show_modal: function () {
				if (!this.settings.$next_tip.data("closed")) {
					var e = t(".joyride-modal-bg");
					e.length < 1 && t("body").append(this.settings.template.modal).show(),
						/pop/i.test(this.settings.tip_animation)
							? e.show()
							: e.fadeIn(this.settings.tip_animation_fade_speed);
				}
			},
			expose: function () {
				var i,
					n,
					s,
					o,
					a,
					r = "expose-" + this.random_str(6);
				if (arguments.length > 0 && arguments[0] instanceof t) s = arguments[0];
				else {
					if (
						!this.settings.$target ||
						/body/i.test(this.settings.$target.selector)
					)
						return !1;
					s = this.settings.$target;
				}
				if (s.length < 1)
					return e.console && console.error("element not valid", s), !1;
				(i = t(this.settings.template.expose)),
					this.settings.$body.append(i),
					i.css({
						top: s.offset().top,
						left: s.offset().left,
						width: s.outerWidth(!0),
						height: s.outerHeight(!0),
					}),
					(n = t(this.settings.template.expose_cover)),
					(o = { zIndex: s.css("z-index"), position: s.css("position") }),
					(a = null == s.attr("class") ? "" : s.attr("class")),
					s.css("z-index", parseInt(i.css("z-index")) + 1),
					"static" == o.position && s.css("position", "relative"),
					s.data("expose-css", o),
					s.data("orig-class", a),
					s.attr("class", a + " " + this.settings.expose_add_class),
					n.css({
						top: s.offset().top,
						left: s.offset().left,
						width: s.outerWidth(!0),
						height: s.outerHeight(!0),
					}),
					this.settings.modal && this.show_modal(),
					this.settings.$body.append(n),
					i.addClass(r),
					n.addClass(r),
					s.data("expose", r),
					this.settings.post_expose_callback(
						this.settings.$li.index(),
						this.settings.$next_tip,
						s
					),
					this.add_exposed(s);
			},
			un_expose: function () {
				var i,
					n,
					s,
					o,
					a,
					r = !1;
				if (arguments.length > 0 && arguments[0] instanceof t) n = arguments[0];
				else {
					if (
						!this.settings.$target ||
						/body/i.test(this.settings.$target.selector)
					)
						return !1;
					n = this.settings.$target;
				}
				if (n.length < 1)
					return e.console && console.error("element not valid", n), !1;
				(i = n.data("expose")),
					(s = t("." + i)),
					arguments.length > 1 && (r = arguments[1]),
					!0 === r
						? t(".joyride-expose-wrapper,.joyride-expose-cover").remove()
						: s.remove(),
					"auto" == (o = n.data("expose-css")).zIndex
						? n.css("z-index", "")
						: n.css("z-index", o.zIndex),
					o.position != n.css("position") &&
						("static" == o.position
							? n.css("position", "")
							: n.css("position", o.position)),
					(a = n.data("orig-class")),
					n.attr("class", a),
					n.removeData("orig-classes"),
					n.removeData("expose"),
					n.removeData("expose-z-index"),
					this.remove_exposed(n);
			},
			add_exposed: function (e) {
				(this.settings.exposed = this.settings.exposed || []),
					e instanceof t || "object" == typeof e
						? this.settings.exposed.push(e[0])
						: "string" == typeof e && this.settings.exposed.push(e);
			},
			remove_exposed: function (e) {
				var i, n;
				for (
					e instanceof t ? (i = e[0]) : "string" == typeof e && (i = e),
						this.settings.exposed = this.settings.exposed || [],
						n = this.settings.exposed.length;
					n--;

				)
					if (this.settings.exposed[n] == i)
						return void this.settings.exposed.splice(n, 1);
			},
			center: function () {
				var i = t(e);
				return (
					this.settings.$next_tip.css({
						top:
							(i.height() - this.settings.$next_tip.outerHeight()) / 2 +
							i.scrollTop(),
						left:
							(i.width() - this.settings.$next_tip.outerWidth()) / 2 +
							i.scrollLeft(),
					}),
					!0
				);
			},
			bottom: function () {
				return /bottom/i.test(this.settings.tip_settings.tip_location);
			},
			top: function () {
				return /top/i.test(this.settings.tip_settings.tip_location);
			},
			right: function () {
				return /right/i.test(this.settings.tip_settings.tip_location);
			},
			left: function () {
				return /left/i.test(this.settings.tip_settings.tip_location);
			},
			corners: function (i) {
				var n = t(e),
					s = n.height() / 2,
					o = Math.ceil(
						this.settings.$target.offset().top -
							s +
							this.settings.$next_tip.outerHeight()
					),
					a = n.width() + n.scrollLeft(),
					r = n.height() + o,
					l = n.height() + n.scrollTop(),
					h = n.scrollTop();
				return (
					o < h && (h = o < 0 ? 0 : o),
					r > l && (l = r),
					[
						i.offset().top < h,
						a < i.offset().left + i.outerWidth(),
						l < i.offset().top + i.outerHeight(),
						n.scrollLeft() > i.offset().left,
					]
				);
			},
			visible: function (t) {
				for (var e = t.length; e--; ) if (t[e]) return !1;
				return !0;
			},
			nub_position: function (t, e, i) {
				"auto" === e ? t.addClass(i) : t.addClass(e);
			},
			startTimer: function () {
				this.settings.$li.length
					? (this.settings.automate = setTimeout(
							function () {
								this.hide(), this.show(), this.startTimer();
							}.bind(this),
							this.settings.timer
					  ))
					: clearTimeout(this.settings.automate);
			},
			end: function (e) {
				this.settings.cookie_monster &&
					t.cookie(this.settings.cookie_name, "ridden", {
						expires: this.settings.cookie_expires,
						domain: this.settings.cookie_domain,
					}),
					this.settings.timer > 0 && clearTimeout(this.settings.automate),
					this.settings.modal && this.settings.expose && this.un_expose(),
					t(this.scope).off("keyup.joyride"),
					this.settings.$next_tip.data("closed", !0),
					(this.settings.riding = !1),
					t(".joyride-modal-bg").hide(),
					this.settings.$current_tip.hide(),
					(void 0 !== e && !1 !== e) ||
						(this.settings.post_step_callback(
							this.settings.$li.index(),
							this.settings.$current_tip
						),
						this.settings.post_ride_callback(
							this.settings.$li.index(),
							this.settings.$current_tip
						)),
					t(".joyride-tip-guide").remove();
			},
			off: function () {
				t(this.scope).off(".joyride"),
					t(e).off(".joyride"),
					t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(
						".joyride"
					),
					t(".joyride-tip-guide, .joyride-modal-bg").remove(),
					clearTimeout(this.settings.automate),
					(this.settings = {});
			},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.equalizer = {
			name: "equalizer",
			version: "5.4.5",
			settings: {
				use_tallest: !0,
				before_height_change: t.noop,
				after_height_change: t.noop,
				equalize_on_stack: !1,
			},
			init: function (t, e, i) {
				Foundation.inherit(this, "image_loaded"),
					this.bindings(e, i),
					this.reflow();
			},
			events: function () {
				this.S(e)
					.off(".equalizer")
					.on(
						"resize.fndtn.equalizer",
						function (t) {
							this.reflow();
						}.bind(this)
					);
			},
			equalize: function (e) {
				var i = !1,
					n = e.find("[" + this.attr_name() + "-watch]:visible"),
					s = e.data(this.attr_name(!0) + "-init");
				if (0 !== n.length) {
					var o = n.first().offset().top;
					if (
						(s.before_height_change(),
						e
							.trigger("before-height-change")
							.trigger("before-height-change.fndth.equalizer"),
						n.height("inherit"),
						n.each(function () {
							t(this).offset().top !== o && (i = !0);
						}),
						!1 !== s.equalize_on_stack || !i)
					) {
						var a = n
							.map(function () {
								return t(this).outerHeight(!1);
							})
							.get();
						if (s.use_tallest) {
							var r = Math.max.apply(null, a);
							n.css("height", r);
						} else {
							var l = Math.min.apply(null, a);
							n.css("height", l);
						}
						s.after_height_change(),
							e
								.trigger("after-height-change")
								.trigger("after-height-change.fndtn.equalizer");
					}
				}
			},
			reflow: function () {
				var e = this;
				this.S("[" + this.attr_name() + "]", this.scope).each(function () {
					var i = t(this);
					e.image_loaded(e.S("img", this), function () {
						e.equalize(i);
					});
				});
			},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.dropdown = {
			name: "dropdown",
			version: "5.4.5",
			settings: {
				active_class: "open",
				mega_class: "mega",
				align: "bottom",
				is_hover: !1,
				opened: function () {},
				closed: function () {},
			},
			init: function (t, e, i) {
				Foundation.inherit(this, "throttle"), this.bindings(e, i);
			},
			events: function (i) {
				var n = this,
					s = n.S;
				s(this.scope)
					.off(".dropdown")
					.on(
						"click.fndtn.dropdown",
						"[" + this.attr_name() + "]",
						function (e) {
							((s(this).data(n.attr_name(!0) + "-init") || n.settings)
								.is_hover &&
								!Modernizr.touch) ||
								(e.preventDefault(), n.toggle(t(this)));
						}
					)
					.on(
						"mouseenter.fndtn.dropdown",
						"[" + this.attr_name() + "], [" + this.attr_name() + "-content]",
						function (t) {
							var e,
								i,
								o = s(this);
							clearTimeout(n.timeout),
								o.data(n.data_attr())
									? ((e = s("#" + o.data(n.data_attr()))), (i = o))
									: ((e = o),
									  (i = s("[" + n.attr_name() + "='" + e.attr("id") + "']")));
							var a = i.data(n.attr_name(!0) + "-init") || n.settings;
							s(t.target).data(n.data_attr()) &&
								a.is_hover &&
								n.closeall.call(n),
								a.is_hover && n.open.apply(n, [e, i]);
						}
					)
					.on(
						"mouseleave.fndtn.dropdown",
						"[" + this.attr_name() + "], [" + this.attr_name() + "-content]",
						function (t) {
							var e = s(this);
							n.timeout = setTimeout(
								function () {
									e.data(n.data_attr())
										? (e.data(n.data_attr(!0) + "-init") || n.settings)
												.is_hover &&
										  n.close.call(n, s("#" + e.data(n.data_attr())))
										: (
												s(
													"[" + n.attr_name() + '="' + s(this).attr("id") + '"]'
												).data(n.attr_name(!0) + "-init") || n.settings
										  ).is_hover && n.close.call(n, e);
								}.bind(this),
								150
							);
						}
					)
					.on("click.fndtn.dropdown", function (e) {
						var i = s(e.target).closest("[" + n.attr_name() + "-content]");
						s(e.target).closest("[" + n.attr_name() + "]").length > 0 ||
							(!s(e.target).data("revealId") &&
							i.length > 0 &&
							(s(e.target).is("[" + n.attr_name() + "-content]") ||
								t.contains(i.first()[0], e.target))
								? e.stopPropagation()
								: n.close.call(n, s("[" + n.attr_name() + "-content]")));
					})
					.on(
						"opened.fndtn.dropdown",
						"[" + n.attr_name() + "-content]",
						function () {
							n.settings.opened.call(this);
						}
					)
					.on(
						"closed.fndtn.dropdown",
						"[" + n.attr_name() + "-content]",
						function () {
							n.settings.closed.call(this);
						}
					),
					s(e)
						.off(".dropdown")
						.on(
							"resize.fndtn.dropdown",
							n.throttle(function () {
								n.resize.call(n);
							}, 50)
						),
					this.resize();
			},
			close: function (e) {
				var i = this;
				e.each(function () {
					(
						t("[" + i.attr_name() + "=" + e[0].id + "]") ||
						t("aria-controls=" + e[0].id + "]")
					).attr("aria-expanded", "false"),
						i.S(this).hasClass(i.settings.active_class) &&
							(i
								.S(this)
								.css(Foundation.rtl ? "right" : "left", "-99999px")
								.attr("aria-hidden", "true")
								.removeClass(i.settings.active_class)
								.prev("[" + i.attr_name() + "]")
								.removeClass(i.settings.active_class)
								.removeData("target"),
							i
								.S(this)
								.trigger("closed")
								.trigger("closed.fndtn.dropdown", [e]));
				});
			},
			closeall: function () {
				var e = this;
				t.each(e.S("[" + this.attr_name() + "-content]"), function () {
					e.close.call(e, e.S(this));
				});
			},
			open: function (t, e) {
				this.css(t.addClass(this.settings.active_class), e),
					t
						.prev("[" + this.attr_name() + "]")
						.addClass(this.settings.active_class),
					t
						.data("target", e.get(0))
						.trigger("opened")
						.trigger("opened.fndtn.dropdown", [t, e]),
					t.attr("aria-hidden", "false"),
					e.attr("aria-expanded", "true"),
					t.focus();
			},
			data_attr: function () {
				return this.namespace.length > 0
					? this.namespace + "-" + this.name
					: this.name;
			},
			toggle: function (t) {
				var e = this.S("#" + t.data(this.data_attr()));
				0 !== e.length &&
					(this.close.call(
						this,
						this.S("[" + this.attr_name() + "-content]").not(e)
					),
					e.hasClass(this.settings.active_class)
						? (this.close.call(this, e),
						  e.data("target") !== t.get(0) && this.open.call(this, e, t))
						: this.open.call(this, e, t));
			},
			resize: function () {
				var t = this.S("[" + this.attr_name() + "-content].open"),
					e = this.S("[" + this.attr_name() + "='" + t.attr("id") + "']");
				t.length && e.length && this.css(t, e);
			},
			css: function (t, e) {
				var i = Math.max((e.width() - t.width()) / 2, 8),
					n = e.data(this.attr_name(!0) + "-init") || this.settings;
				if ((this.clear_idx(), this.small())) {
					var s = this.dirs.bottom.call(t, e, n);
					t
						.attr("style", "")
						.removeClass("drop-left drop-right drop-top")
						.css({
							position: "absolute",
							width: "95%",
							"max-width": "none",
							top: s.top,
						}),
						t.css(Foundation.rtl ? "right" : "left", i);
				} else this.style(t, e, n);
				return t;
			},
			style: function (e, i, n) {
				var s = t.extend(
					{ position: "absolute" },
					this.dirs[n.align].call(e, i, n)
				);
				e.attr("style", "").css(s);
			},
			dirs: {
				_base: function (t) {
					var e = this.offsetParent().offset(),
						i = t.offset();
					return (i.top -= e.top), (i.left -= e.left), i;
				},
				top: function (t, e) {
					var i = Foundation.libs.dropdown,
						n = i.dirs._base.call(this, t);
					return (
						this.addClass("drop-top"),
						(t.outerWidth() < this.outerWidth() ||
							i.small() ||
							this.hasClass(e.mega_menu)) &&
							i.adjust_pip(this, t, e, n),
						Foundation.rtl
							? {
									left: n.left - this.outerWidth() + t.outerWidth(),
									top: n.top - this.outerHeight(),
							  }
							: { left: n.left, top: n.top - this.outerHeight() }
					);
				},
				bottom: function (t, e) {
					var i = Foundation.libs.dropdown,
						n = i.dirs._base.call(this, t);
					return (
						(t.outerWidth() < this.outerWidth() ||
							i.small() ||
							this.hasClass(e.mega_menu)) &&
							i.adjust_pip(this, t, e, n),
						i.rtl
							? {
									left: n.left - this.outerWidth() + t.outerWidth(),
									top: n.top + t.outerHeight(),
							  }
							: { left: n.left, top: n.top + t.outerHeight() }
					);
				},
				left: function (t, e) {
					var i = Foundation.libs.dropdown.dirs._base.call(this, t);
					return (
						this.addClass("drop-left"),
						{ left: i.left - this.outerWidth(), top: i.top }
					);
				},
				right: function (t, e) {
					var i = Foundation.libs.dropdown.dirs._base.call(this, t);
					return (
						this.addClass("drop-right"),
						{ left: i.left + t.outerWidth(), top: i.top }
					);
				},
			},
			adjust_pip: function (t, e, i, n) {
				var s = Foundation.stylesheet,
					o = 8;
				t.hasClass(i.mega_class)
					? (o = n.left + e.outerWidth() / 2 - 8)
					: this.small() && (o += n.left - 8),
					(this.rule_idx = s.cssRules.length);
				var a = ".f-dropdown.open:before",
					r = ".f-dropdown.open:after",
					l = "left: " + o + "px;",
					h = "left: " + (o - 1) + "px;";
				s.insertRule
					? (s.insertRule([a, "{", l, "}"].join(" "), this.rule_idx),
					  s.insertRule([r, "{", h, "}"].join(" "), this.rule_idx + 1))
					: (s.addRule(a, l, this.rule_idx),
					  s.addRule(r, h, this.rule_idx + 1));
			},
			clear_idx: function () {
				var t = Foundation.stylesheet;
				this.rule_idx &&
					(t.deleteRule(this.rule_idx),
					t.deleteRule(this.rule_idx),
					delete this.rule_idx);
			},
			small: function () {
				return (
					matchMedia(Foundation.media_queries.small).matches &&
					!matchMedia(Foundation.media_queries.medium).matches
				);
			},
			off: function () {
				this.S(this.scope).off(".fndtn.dropdown"),
					this.S("html, body").off(".fndtn.dropdown"),
					this.S(e).off(".fndtn.dropdown"),
					this.S("[data-dropdown-content]").off(".fndtn.dropdown");
			},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.clearing = {
			name: "clearing",
			version: "5.4.5",
			settings: {
				templates: {
					viewing:
						'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>',
				},
				close_selectors: ".clearing-close, div.clearing-blackout",
				open_selectors: "",
				skip_selector: "",
				touch_label: "",
				init: !1,
				locked: !1,
			},
			init: function (t, e, i) {
				var n = this;
				Foundation.inherit(this, "throttle image_loaded"),
					this.bindings(e, i),
					n.S(this.scope).is("[" + this.attr_name() + "]")
						? this.assemble(n.S("li", this.scope))
						: n.S("[" + this.attr_name() + "]", this.scope).each(function () {
								n.assemble(n.S("li", this));
						  });
			},
			events: function (n) {
				var s = this,
					o = s.S,
					a = t(".scroll-container");
				a.length > 0 && (this.scope = a),
					o(this.scope)
						.off(".clearing")
						.on(
							"click.fndtn.clearing",
							"ul[" + this.attr_name() + "] li " + this.settings.open_selectors,
							function (t, e, i) {
								(e = e || o(this)), (i = i || e);
								var n = e.next("li"),
									a = e
										.closest("[" + s.attr_name() + "]")
										.data(s.attr_name(!0) + "-init"),
									r = o(t.target);
								t.preventDefault(),
									a ||
										(s.init(),
										(a = e
											.closest("[" + s.attr_name() + "]")
											.data(s.attr_name(!0) + "-init"))),
									i.hasClass("visible") &&
										e[0] === i[0] &&
										n.length > 0 &&
										s.is_open(e) &&
										(r = o("img", (i = n))),
									s.open(r, e, i),
									s.update_paddles(i);
							}
						)
						.on("click.fndtn.clearing", ".clearing-main-next", function (t) {
							s.nav(t, "next");
						})
						.on("click.fndtn.clearing", ".clearing-main-prev", function (t) {
							s.nav(t, "prev");
						})
						.on(
							"click.fndtn.clearing",
							this.settings.close_selectors,
							function (t) {
								Foundation.libs.clearing.close(t, this);
							}
						),
					t(i).on("keydown.fndtn.clearing", function (t) {
						s.keydown(t);
					}),
					o(e)
						.off(".clearing")
						.on("resize.fndtn.clearing", function () {
							s.resize();
						}),
					this.swipe_events(n);
			},
			swipe_events: function (t) {
				var e = this,
					i = e.S;
				i(this.scope)
					.on("touchstart.fndtn.clearing", ".visible-img", function (t) {
						t.touches || (t = t.originalEvent);
						var e = {
							start_page_x: t.touches[0].pageX,
							start_page_y: t.touches[0].pageY,
							start_time: new Date().getTime(),
							delta_x: 0,
							is_scrolling: void 0,
						};
						i(this).data("swipe-transition", e), t.stopPropagation();
					})
					.on("touchmove.fndtn.clearing", ".visible-img", function (t) {
						if (
							(t.touches || (t = t.originalEvent),
							!(t.touches.length > 1 || (t.scale && 1 !== t.scale)))
						) {
							var n = i(this).data("swipe-transition");
							if (
								(void 0 === n && (n = {}),
								(n.delta_x = t.touches[0].pageX - n.start_page_x),
								Foundation.rtl && (n.delta_x = -n.delta_x),
								void 0 === n.is_scrolling &&
									(n.is_scrolling = !!(
										n.is_scrolling ||
										Math.abs(n.delta_x) <
											Math.abs(t.touches[0].pageY - n.start_page_y)
									)),
								!n.is_scrolling && !n.active)
							) {
								t.preventDefault();
								var s = n.delta_x < 0 ? "next" : "prev";
								(n.active = !0), e.nav(t, s);
							}
						}
					})
					.on("touchend.fndtn.clearing", ".visible-img", function (t) {
						i(this).data("swipe-transition", {}), t.stopPropagation();
					});
			},
			assemble: function (e) {
				var i = e.parent();
				if (!i.parent().hasClass("carousel")) {
					i.after('<div id="foundationClearingHolder"></div>');
					var n,
						s = i.detach();
					if (null != s[0]) {
						n = s[0].outerHTML;
						var o = this.S("#foundationClearingHolder"),
							a = '<div class="carousel">' + n + "</div>",
							r =
								'<div class="clearing-assembled"><div>' +
								i.data(this.attr_name(!0) + "-init").templates.viewing +
								a +
								"</div></div>",
							l = this.settings.touch_label;
						Modernizr.touch &&
							(r = t(r).find(".clearing-touch-label").html(l).end()),
							o.after(r).remove();
					}
				}
			},
			open: function (e, n, s) {
				var o = this,
					a = t(i.body),
					r = s.closest(".clearing-assembled"),
					l = o.S("div", r).first(),
					h = o.S(".visible-img", l),
					c = o.S("img", h).not(e),
					u = o.S(".clearing-touch-label", l),
					d = !1;
				t("body").on("touchmove", function (t) {
					t.preventDefault();
				}),
					c.error(function () {
						d = !0;
					}),
					this.locked() ||
						(h.trigger("open.fndtn.clearing"),
						c.attr("src", this.load(e)).css("visibility", "hidden"),
						function e() {
							setTimeout(
								function () {
									this.image_loaded(
										c,
										function () {
											1 !== c.outerWidth() || d
												? function (e) {
														t(e).css("visibility", "visible"),
															a.css("overflow", "hidden"),
															r.addClass("clearing-blackout"),
															l.addClass("clearing-container"),
															h.show(),
															this.fix_height(s)
																.caption(
																	o.S(".clearing-caption", h),
																	o.S("img", s)
																)
																.center_and_label(e, u)
																.shift(n, s, function () {
																	s
																		.closest("li")
																		.siblings()
																		.removeClass("visible"),
																		s.closest("li").addClass("visible");
																}),
															h.trigger("opened.fndtn.clearing");
												  }.call(this, c)
												: e.call(this);
										}.bind(this)
									);
								}.bind(this),
								100
							);
						}.call(this));
			},
			close: function (e, n) {
				e.preventDefault();
				var s,
					o,
					a = (function (t) {
						return /blackout/.test(t.selector)
							? t
							: t.closest(".clearing-blackout");
					})(t(n)),
					r = t(i.body);
				return (
					n === e.target &&
						a &&
						(r.css("overflow", ""),
						(s = t("div", a).first()),
						(o = t(".visible-img", s)).trigger("close.fndtn.clearing"),
						(this.settings.prev_index = 0),
						t("ul[" + this.attr_name() + "]", a)
							.attr("style", "")
							.closest(".clearing-blackout")
							.removeClass("clearing-blackout"),
						s.removeClass("clearing-container"),
						o.hide(),
						o.trigger("closed.fndtn.clearing")),
					t("body").off("touchmove"),
					!1
				);
			},
			is_open: function (t) {
				return t.parent().prop("style").length > 0;
			},
			keydown: function (e) {
				var i = t(".clearing-blackout ul[" + this.attr_name() + "]"),
					n = this.rtl ? 37 : 39,
					s = this.rtl ? 39 : 37;
				e.which === n && this.go(i, "next"),
					e.which === s && this.go(i, "prev"),
					27 === e.which &&
						this.S("a.clearing-close")
							.trigger("click")
							.trigger("click.fndtn.clearing");
			},
			nav: function (e, i) {
				var n = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
				e.preventDefault(), this.go(n, i);
			},
			resize: function () {
				var e = t("img", ".clearing-blackout .visible-img"),
					i = t(".clearing-touch-label", ".clearing-blackout");
				e.length &&
					(this.center_and_label(e, i), e.trigger("resized.fndtn.clearing"));
			},
			fix_height: function (t) {
				var e = t.parent().children(),
					i = this;
				return (
					e
						.each(function () {
							var t = i.S(this),
								e = t.find("img");
							t.height() > e.outerHeight() && t.addClass("fix-height");
						})
						.closest("ul")
						.width(100 * e.length + "%"),
					this
				);
			},
			update_paddles: function (t) {
				var e = (t = t.closest("li"))
					.closest(".carousel")
					.siblings(".visible-img");
				t.next().length > 0
					? this.S(".clearing-main-next", e).removeClass("disabled")
					: this.S(".clearing-main-next", e).addClass("disabled"),
					t.prev().length > 0
						? this.S(".clearing-main-prev", e).removeClass("disabled")
						: this.S(".clearing-main-prev", e).addClass("disabled");
			},
			center_and_label: function (t, e) {
				return (
					this.rtl
						? (t.css({
								marginRight: -t.outerWidth() / 2,
								marginTop: -t.outerHeight() / 2,
								left: "auto",
								right: "50%",
						  }),
						  e.length > 0 &&
								e.css({
									marginRight: -e.outerWidth() / 2,
									marginTop: -t.outerHeight() / 2 - e.outerHeight() - 10,
									left: "auto",
									right: "50%",
								}))
						: (t.css({
								marginLeft: -t.outerWidth() / 2,
								marginTop: -t.outerHeight() / 2,
						  }),
						  e.length > 0 &&
								e.css({
									marginLeft: -e.outerWidth() / 2,
									marginTop: -t.outerHeight() / 2 - e.outerHeight() - 10,
								})),
					this
				);
			},
			load: function (t) {
				var e;
				return (
					(e =
						"A" === t[0].nodeName ? t.attr("href") : t.parent().attr("href")),
					this.preload(t),
					e || t.attr("src")
				);
			},
			preload: function (t) {
				this.img(t.closest("li").next()).img(t.closest("li").prev());
			},
			img: function (t) {
				if (t.length) {
					var e = new Image(),
						i = this.S("a", t);
					i.length
						? (e.src = i.attr("href"))
						: (e.src = this.S("img", t).attr("src"));
				}
				return this;
			},
			caption: function (t, e) {
				var i = e.attr("data-caption");
				return i ? t.html(i).show() : t.text("").hide(), this;
			},
			go: function (t, e) {
				var i = this.S(".visible", t),
					n = i[e]();
				this.settings.skip_selector &&
					0 != n.find(this.settings.skip_selector).length &&
					(n = n[e]()),
					n.length &&
						this.S("img", n)
							.trigger("click", [i, n])
							.trigger("click.fndtn.clearing", [i, n])
							.trigger("change.fndtn.clearing");
			},
			shift: function (t, e, i) {
				var n,
					s = e.parent(),
					o = this.settings.prev_index || e.index(),
					a = this.direction(s, t, e),
					r = this.rtl ? "right" : "left",
					l = parseInt(s.css("left"), 10),
					h = e.outerWidth(),
					c = {};
				e.index() === o || /skip/.test(a)
					? /skip/.test(a) &&
					  ((n = e.index() - this.settings.up_count),
					  this.lock(),
					  n > 0
							? ((c[r] = -n * h), s.animate(c, 300, this.unlock()))
							: ((c[r] = 0), s.animate(c, 300, this.unlock())))
					: /left/.test(a)
					? (this.lock(), (c[r] = l + h), s.animate(c, 300, this.unlock()))
					: /right/.test(a) &&
					  (this.lock(), (c[r] = l - h), s.animate(c, 300, this.unlock())),
					i();
			},
			direction: function (t, e, i) {
				var n,
					s = this.S("li", t),
					o = s.outerWidth() + s.outerWidth() / 4,
					a = Math.floor(this.S(".clearing-container").outerWidth() / o) - 1,
					r = s.index(i);
				return (
					(this.settings.up_count = a),
					(n = this.adjacent(this.settings.prev_index, r)
						? r > a && r > this.settings.prev_index
							? "right"
							: r > a - 1 && r <= this.settings.prev_index && "left"
						: "skip"),
					(this.settings.prev_index = r),
					n
				);
			},
			adjacent: function (t, e) {
				for (var i = e + 1; i >= e - 1; i--) if (i === t) return !0;
				return !1;
			},
			lock: function () {
				this.settings.locked = !0;
			},
			unlock: function () {
				this.settings.locked = !1;
			},
			locked: function () {
				return this.settings.locked;
			},
			off: function () {
				this.S(this.scope).off(".fndtn.clearing"),
					this.S(e).off(".fndtn.clearing");
			},
			reflow: function () {
				this.init();
			},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		var s = function () {},
			o = function (n, s) {
				if (n.hasClass(s.slides_container_class)) return this;
				var o,
					h,
					c,
					u,
					d,
					p,
					f = this,
					g = n,
					m = 0;
				(f.slides = function () {
					return g.children(s.slide_selector);
				}),
					f.slides().first().addClass(s.active_slide_class),
					(f.update_slide_number = function (e) {
						s.slide_number &&
							(h.find("span:first").text(parseInt(e) + 1),
							h.find("span:last").text(f.slides().length)),
							s.bullets &&
								(c.children().removeClass(s.bullets_active_class),
								t(c.children().get(e)).addClass(s.bullets_active_class));
					}),
					(f.update_active_link = function (e) {
						var i = t(
							'[data-orbit-link="' +
								f.slides().eq(e).attr("data-orbit-slide") +
								'"]'
						);
						i.siblings().removeClass(s.bullets_active_class),
							i.addClass(s.bullets_active_class);
					}),
					(f.build_markup = function () {
						g.wrap('<div class="' + s.container_class + '"></div>'),
							(o = g.parent()),
							g.addClass(s.slides_container_class),
							s.stack_on_small && o.addClass(s.stack_on_small_class),
							s.navigation_arrows &&
								(o.append(
									t('<a href="#"><span></span></a>').addClass(s.prev_class)
								),
								o.append(
									t('<a href="#"><span></span></a>').addClass(s.next_class)
								)),
							s.timer &&
								((u = t("<div>").addClass(s.timer_container_class)).append(
									"<span>"
								),
								u.append(t("<div>").addClass(s.timer_progress_class)),
								u.addClass(s.timer_paused_class),
								o.append(u)),
							s.slide_number &&
								((h = t("<div>").addClass(s.slide_number_class)).append(
									"<span></span> " + s.slide_number_text + " <span></span>"
								),
								o.append(h)),
							s.bullets &&
								((c = t("<ol>").addClass(s.bullets_container_class)),
								o.append(c),
								c.wrap('<div class="orbit-bullets-container"></div>'),
								f.slides().each(function (e, i) {
									var n = t("<li>")
										.attr("data-orbit-slide", e)
										.on("click", f.link_bullet);
									c.append(n);
								}));
					}),
					(f._goto = function (e, i) {
						if (e === m) return !1;
						"object" == typeof p && p.restart();
						var n = f.slides(),
							o = "next";
						if ((!0, e < m && (o = "prev"), e >= n.length)) {
							if (!s.circular) return !1;
							e = 0;
						} else if (e < 0) {
							if (!s.circular) return !1;
							e = n.length - 1;
						}
						var a = t(n.get(m)),
							r = t(n.get(e));
						a.css("zIndex", 2),
							a.removeClass(s.active_slide_class),
							r.css("zIndex", 4).addClass(s.active_slide_class),
							g.trigger("before-slide-change.fndtn.orbit"),
							s.before_slide_change(),
							f.update_active_link(e);
						var l = function () {
							var t = function () {
								(m = e),
									!1,
									!0 === i && (p = f.create_timer()).start(),
									f.update_slide_number(m),
									g.trigger("after-slide-change.fndtn.orbit", [
										{ slide_number: m, total_slides: n.length },
									]),
									s.after_slide_change(m, n.length);
							};
							g.height() != r.height() && s.variable_height
								? g.animate({ height: r.height() }, 250, "linear", t)
								: t();
						};
						if (1 === n.length) return l(), !1;
						var h = function () {
							"next" === o && d.next(a, r, l), "prev" === o && d.prev(a, r, l);
						};
						r.height() > g.height() && s.variable_height
							? g.animate({ height: r.height() }, 250, "linear", h)
							: h();
					}),
					(f.next = function (t) {
						t.stopImmediatePropagation(), t.preventDefault(), f._goto(m + 1);
					}),
					(f.prev = function (t) {
						t.stopImmediatePropagation(), t.preventDefault(), f._goto(m - 1);
					}),
					(f.link_custom = function (e) {
						e.preventDefault();
						var i = t(this).attr("data-orbit-link");
						if ("string" == typeof i && "" != (i = t.trim(i))) {
							var n = o.find("[data-orbit-slide=" + i + "]");
							-1 != n.index() && f._goto(n.index());
						}
					}),
					(f.link_bullet = function (e) {
						var i = t(this).attr("data-orbit-slide");
						if ("string" == typeof i && "" != (i = t.trim(i)))
							if (isNaN(parseInt(i))) {
								var n = o.find("[data-orbit-slide=" + i + "]");
								-1 != n.index() && f._goto(n.index() + 1);
							} else f._goto(parseInt(i));
					}),
					(f.timer_callback = function () {
						f._goto(m + 1, !0);
					}),
					(f.compute_dimensions = function () {
						var e = t(f.slides().get(m)).height();
						s.variable_height ||
							f.slides().each(function () {
								t(this).height() > e && (e = t(this).height());
							}),
							g.height(e);
					}),
					(f.create_timer = function () {
						return new a(
							o.find("." + s.timer_container_class),
							s,
							f.timer_callback
						);
					}),
					(f.stop_timer = function () {
						"object" == typeof p && p.stop();
					}),
					(f.toggle_timer = function () {
						o.find("." + s.timer_container_class).hasClass(s.timer_paused_class)
							? (void 0 === p && (p = f.create_timer()), p.start())
							: "object" == typeof p && p.stop();
					}),
					(f.init = function () {
						f.build_markup(),
							s.timer &&
								((p = f.create_timer()),
								Foundation.utils.image_loaded(
									this.slides().children("img"),
									p.start
								)),
							(d = new l(s, g)),
							"slide" === s.animation && (d = new r(s, g)),
							o.on("click", "." + s.next_class, f.next),
							o.on("click", "." + s.prev_class, f.prev),
							s.next_on_click &&
								o.on(
									"click",
									"." + s.slides_container_class + " [data-orbit-slide]",
									f.link_bullet
								),
							o.on("click", f.toggle_timer),
							s.swipe &&
								o
									.on("touchstart.fndtn.orbit", function (t) {
										t.touches || (t = t.originalEvent);
										var e = {
											start_page_x: t.touches[0].pageX,
											start_page_y: t.touches[0].pageY,
											start_time: new Date().getTime(),
											delta_x: 0,
											is_scrolling: void 0,
										};
										o.data("swipe-transition", e), t.stopPropagation();
									})
									.on("touchmove.fndtn.orbit", function (t) {
										if (
											(t.touches || (t = t.originalEvent),
											!(t.touches.length > 1 || (t.scale && 1 !== t.scale)))
										) {
											var e = o.data("swipe-transition");
											if (
												(void 0 === e && (e = {}),
												(e.delta_x = t.touches[0].pageX - e.start_page_x),
												void 0 === e.is_scrolling &&
													(e.is_scrolling = !!(
														e.is_scrolling ||
														Math.abs(e.delta_x) <
															Math.abs(t.touches[0].pageY - e.start_page_y)
													)),
												!e.is_scrolling && !e.active)
											) {
												t.preventDefault();
												var i = e.delta_x < 0 ? m + 1 : m - 1;
												(e.active = !0), f._goto(i);
											}
										}
									})
									.on("touchend.fndtn.orbit", function (t) {
										o.data("swipe-transition", {}), t.stopPropagation();
									}),
							o
								.on("mouseenter.fndtn.orbit", function (t) {
									s.timer && s.pause_on_hover && f.stop_timer();
								})
								.on("mouseleave.fndtn.orbit", function (t) {
									s.timer && s.resume_on_mouseout && p.start();
								}),
							t(i).on("click", "[data-orbit-link]", f.link_custom),
							t(e).on("load resize", f.compute_dimensions),
							Foundation.utils.image_loaded(
								this.slides().children("img"),
								f.compute_dimensions
							),
							Foundation.utils.image_loaded(
								this.slides().children("img"),
								function () {
									o.prev("." + s.preloader_class).css("display", "none"),
										f.update_slide_number(0),
										f.update_active_link(0),
										g.trigger("ready.fndtn.orbit");
								}
							);
					}),
					f.init();
			},
			a = function (t, e, i) {
				var n,
					s,
					o = this,
					a = e.timer_speed,
					r = t.find("." + e.timer_progress_class),
					l = -1;
				(this.update_progress = function (t) {
					var e = r.clone();
					e.attr("style", ""),
						e.css("width", t + "%"),
						r.replaceWith(e),
						(r = e);
				}),
					(this.restart = function () {
						clearTimeout(s),
							t.addClass(e.timer_paused_class),
							(l = -1),
							o.update_progress(0);
					}),
					(this.start = function () {
						if (!t.hasClass(e.timer_paused_class)) return !0;
						(l = -1 === l ? a : l),
							t.removeClass(e.timer_paused_class),
							(n = new Date().getTime()),
							r.animate({ width: "100%" }, l, "linear"),
							(s = setTimeout(function () {
								o.restart(), i();
							}, l)),
							t.trigger("timer-started.fndtn.orbit");
					}),
					(this.stop = function () {
						if (t.hasClass(e.timer_paused_class)) return !0;
						clearTimeout(s), t.addClass(e.timer_paused_class);
						var i = new Date().getTime(),
							r = 100 - ((l -= i - n) / a) * 100;
						o.update_progress(r), t.trigger("timer-stopped.fndtn.orbit");
					});
			},
			r = function (e, i) {
				var n = e.animation_speed,
					s = 1 === t("html[dir=rtl]").length ? "marginRight" : "marginLeft",
					o = {};
				(o[s] = "0%"),
					(this.next = function (t, e, i) {
						t.animate({ marginLeft: "-100%" }, n),
							e.animate(o, n, function () {
								t.css(s, "100%"), i();
							});
					}),
					(this.prev = function (t, e, i) {
						t.animate({ marginLeft: "100%" }, n),
							e.css(s, "-100%"),
							e.animate(o, n, function () {
								t.css(s, "100%"), i();
							});
					});
			},
			l = function (e, i) {
				var n = e.animation_speed;
				t("html[dir=rtl]").length;
				(this.next = function (t, e, i) {
					e.css({ margin: "0%", opacity: "0.01" }),
						e.animate({ opacity: "1" }, n, "linear", function () {
							t.css("margin", "100%"), i();
						});
				}),
					(this.prev = function (t, e, i) {
						e.css({ margin: "0%", opacity: "0.01" }),
							e.animate({ opacity: "1" }, n, "linear", function () {
								t.css("margin", "100%"), i();
							});
					});
			};
		(Foundation.libs = Foundation.libs || {}),
			(Foundation.libs.orbit = {
				name: "orbit",
				version: "5.4.5",
				settings: {
					animation: "slide",
					timer_speed: 1e4,
					pause_on_hover: !0,
					resume_on_mouseout: !1,
					next_on_click: !0,
					animation_speed: 500,
					stack_on_small: !1,
					navigation_arrows: !0,
					slide_number: !0,
					slide_number_text: "of",
					container_class: "orbit-container",
					stack_on_small_class: "orbit-stack-on-small",
					next_class: "orbit-next",
					prev_class: "orbit-prev",
					timer_container_class: "orbit-timer",
					timer_paused_class: "paused",
					timer_progress_class: "orbit-progress",
					slides_container_class: "orbit-slides-container",
					preloader_class: "preloader",
					slide_selector: "*",
					bullets_container_class: "orbit-bullets",
					bullets_active_class: "active",
					slide_number_class: "orbit-slide-number",
					caption_class: "orbit-caption",
					active_slide_class: "active",
					orbit_transition_class: "orbit-transitioning",
					bullets: !0,
					circular: !0,
					timer: !0,
					variable_height: !1,
					swipe: !0,
					before_slide_change: s,
					after_slide_change: s,
				},
				init: function (t, e, i) {
					this.bindings(e, i);
				},
				events: function (t) {
					var e = new o(this.S(t), this.S(t).data("orbit-init"));
					this.S(t).data(this.name + "-instance", e);
				},
				reflow: function () {
					var t = this;
					t.S(t.scope).is("[data-orbit]")
						? t
								.S(t.scope)
								.data(t.name + "-instance")
								.compute_dimensions()
						: t.S("[data-orbit]", t.scope).each(function (e, i) {
								var n = t.S(i);
								t.data_options(n);
								n.data(t.name + "-instance").compute_dimensions();
						  });
				},
			});
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.offcanvas = {
			name: "offcanvas",
			version: "5.4.5",
			settings: { open_method: "move", close_on_click: !1 },
			init: function (t, e, i) {
				this.bindings(e, i);
			},
			events: function () {
				var e = this,
					i = e.S,
					n = "",
					s = "",
					o = "";
				"move" === this.settings.open_method
					? ((n = "move-"), (s = "right"), (o = "left"))
					: "overlap_single" === this.settings.open_method
					? ((n = "offcanvas-overlap-"), (s = "right"), (o = "left"))
					: "overlap" === this.settings.open_method &&
					  (n = "offcanvas-overlap"),
					i(this.scope)
						.off(".offcanvas")
						.on(
							"click.fndtn.offcanvas",
							".left-off-canvas-toggle",
							function (o) {
								e.click_toggle_class(o, n + s),
									"overlap" !== e.settings.open_method &&
										i(".left-submenu").removeClass(n + s),
									t(".left-off-canvas-toggle").attr("aria-expanded", "true");
							}
						)
						.on(
							"click.fndtn.offcanvas",
							".left-off-canvas-menu a",
							function (o) {
								var a = e.get_settings(o),
									r = i(this).parent();
								!a.close_on_click ||
								r.hasClass("has-submenu") ||
								r.hasClass("back")
									? i(this).parent().hasClass("has-submenu")
										? (o.preventDefault(),
										  i(this)
												.siblings(".left-submenu")
												.toggleClass(n + s))
										: r.hasClass("back") &&
										  (o.preventDefault(), r.parent().removeClass(n + s))
									: (e.hide.call(e, n + s, e.get_wrapper(o)),
									  r.parent().removeClass(n + s)),
									t(".left-off-canvas-toggle").attr("aria-expanded", "true");
							}
						)
						.on(
							"click.fndtn.offcanvas",
							".right-off-canvas-toggle",
							function (s) {
								e.click_toggle_class(s, n + o),
									"overlap" !== e.settings.open_method &&
										i(".right-submenu").removeClass(n + o),
									t(".right-off-canvas-toggle").attr("aria-expanded", "true");
							}
						)
						.on(
							"click.fndtn.offcanvas",
							".right-off-canvas-menu a",
							function (s) {
								var a = e.get_settings(s),
									r = i(this).parent();
								!a.close_on_click ||
								r.hasClass("has-submenu") ||
								r.hasClass("back")
									? i(this).parent().hasClass("has-submenu")
										? (s.preventDefault(),
										  i(this)
												.siblings(".right-submenu")
												.toggleClass(n + o))
										: r.hasClass("back") &&
										  (s.preventDefault(), r.parent().removeClass(n + o))
									: (e.hide.call(e, n + o, e.get_wrapper(s)),
									  r.parent().removeClass(n + o)),
									t(".right-off-canvas-toggle").attr("aria-expanded", "true");
							}
						)
						.on("click.fndtn.offcanvas", ".exit-off-canvas", function (a) {
							e.click_remove_class(a, n + o),
								i(".right-submenu").removeClass(n + o),
								s &&
									(e.click_remove_class(a, n + s),
									i(".left-submenu").removeClass(n + o)),
								t(".right-off-canvas-toggle").attr("aria-expanded", "true");
						})
						.on("click.fndtn.offcanvas", ".exit-off-canvas", function (i) {
							e.click_remove_class(i, n + o),
								t(".left-off-canvas-toggle").attr("aria-expanded", "false"),
								s &&
									(e.click_remove_class(i, n + s),
									t(".right-off-canvas-toggle").attr("aria-expanded", "false"));
						});
			},
			toggle: function (t, e) {
				(e = e || this.get_wrapper()).is("." + t)
					? this.hide(t, e)
					: this.show(t, e);
			},
			show: function (t, e) {
				(e = e || this.get_wrapper())
					.trigger("open")
					.trigger("open.fndtn.offcanvas"),
					e.addClass(t);
			},
			hide: function (t, e) {
				(e = e || this.get_wrapper())
					.trigger("close")
					.trigger("close.fndtn.offcanvas"),
					e.removeClass(t);
			},
			click_toggle_class: function (t, e) {
				t.preventDefault();
				var i = this.get_wrapper(t);
				this.toggle(e, i);
			},
			click_remove_class: function (t, e) {
				t.preventDefault();
				var i = this.get_wrapper(t);
				this.hide(e, i);
			},
			get_settings: function (t) {
				return (
					this.S(t.target)
						.closest("[" + this.attr_name() + "]")
						.data(this.attr_name(!0) + "-init") || this.settings
				);
			},
			get_wrapper: function (t) {
				var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
				return 0 === e.length && (e = this.S(".off-canvas-wrap")), e;
			},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.alert = {
			name: "alert",
			version: "5.4.5",
			settings: { callback: function () {} },
			init: function (t, e, i) {
				this.bindings(e, i);
			},
			events: function () {
				var e = this,
					i = this.S;
				t(this.scope)
					.off(".alert")
					.on(
						"click.fndtn.alert",
						"[" + this.attr_name() + "] .close",
						function (t) {
							var n = i(this).closest("[" + e.attr_name() + "]"),
								s = n.data(e.attr_name(!0) + "-init") || e.settings;
							t.preventDefault(),
								Modernizr.csstransitions
									? (n.addClass("alert-close"),
									  n.on(
											"transitionend webkitTransitionEnd oTransitionEnd",
											function (t) {
												i(this)
													.trigger("close")
													.trigger("close.fndtn.alert")
													.remove(),
													s.callback();
											}
									  ))
									: n.fadeOut(300, function () {
											i(this)
												.trigger("close")
												.trigger("close.fndtn.alert")
												.remove(),
												s.callback();
									  });
						}
					);
			},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		function s(t) {
			var e = /fade/i.test(t),
				i = /pop/i.test(t);
			return { animate: e || i, pop: i, fade: e };
		}
		Foundation.libs.reveal = {
			name: "reveal",
			version: "5.4.5",
			locked: !1,
			settings: {
				animation: "fadeAndPop",
				animation_speed: 250,
				close_on_background_click: !0,
				close_on_esc: !0,
				dismiss_modal_class: "close-reveal-modal",
				bg_class: "reveal-modal-bg",
				root_element: "body",
				open: function () {},
				opened: function () {},
				close: function () {},
				closed: function () {},
				bg: t(".reveal-modal-bg"),
				css: {
					open: { opacity: 0, visibility: "visible", display: "block" },
					close: { opacity: 1, visibility: "hidden", display: "none" },
				},
			},
			init: function (e, i, n) {
				t.extend(!0, this.settings, i, n), this.bindings(i, n);
			},
			events: function (t) {
				var e = this,
					n = e.S;
				return (
					n(this.scope)
						.off(".reveal")
						.on(
							"click.fndtn.reveal",
							"[" + this.add_namespace("data-reveal-id") + "]:not([disabled])",
							function (t) {
								if ((t.preventDefault(), !e.locked)) {
									var i = n(this),
										s = i.data(e.data_attr("reveal-ajax"));
									if (((e.locked = !0), void 0 === s)) e.open.call(e, i);
									else {
										var o = !0 === s ? i.attr("href") : s;
										e.open.call(e, i, { url: o });
									}
								}
							}
						),
					n(i).on("click.fndtn.reveal", this.close_targets(), function (t) {
						if ((t.preventDefault(), !e.locked)) {
							var i = n("[" + e.attr_name() + "].open").data(
									e.attr_name(!0) + "-init"
								),
								s = n(t.target)[0] === n("." + i.bg_class)[0];
							if (s) {
								if (!i.close_on_background_click) return;
								t.stopPropagation();
							}
							(e.locked = !0),
								e.close.call(
									e,
									s
										? n("[" + e.attr_name() + "].open")
										: n(this).closest("[" + e.attr_name() + "]")
								);
						}
					}),
					n("[" + e.attr_name() + "]", this.scope).length > 0
						? n(this.scope)
								.on("open.fndtn.reveal", this.settings.open)
								.on("opened.fndtn.reveal", this.settings.opened)
								.on("opened.fndtn.reveal", this.open_video)
								.on("close.fndtn.reveal", this.settings.close)
								.on("closed.fndtn.reveal", this.settings.closed)
								.on("closed.fndtn.reveal", this.close_video)
						: n(this.scope)
								.on(
									"open.fndtn.reveal",
									"[" + e.attr_name() + "]",
									this.settings.open
								)
								.on(
									"opened.fndtn.reveal",
									"[" + e.attr_name() + "]",
									this.settings.opened
								)
								.on(
									"opened.fndtn.reveal",
									"[" + e.attr_name() + "]",
									this.open_video
								)
								.on(
									"close.fndtn.reveal",
									"[" + e.attr_name() + "]",
									this.settings.close
								)
								.on(
									"closed.fndtn.reveal",
									"[" + e.attr_name() + "]",
									this.settings.closed
								)
								.on(
									"closed.fndtn.reveal",
									"[" + e.attr_name() + "]",
									this.close_video
								),
					!0
				);
			},
			key_up_on: function (t) {
				var e = this;
				return (
					e
						.S("body")
						.off("keyup.fndtn.reveal")
						.on("keyup.fndtn.reveal", function (t) {
							var i = e.S("[" + e.attr_name() + "].open"),
								n = i.data(e.attr_name(!0) + "-init") || e.settings;
							n &&
								27 === t.which &&
								n.close_on_esc &&
								!e.locked &&
								e.close.call(e, i);
						}),
					!0
				);
			},
			key_up_off: function (t) {
				return this.S("body").off("keyup.fndtn.reveal"), !0;
			},
			open: function (i, n) {
				var s,
					o = this;
				i
					? void 0 !== i.selector
						? (s = o.S("#" + i.data(o.data_attr("reveal-id"))).first())
						: ((s = o.S(this.scope)), (n = i))
					: (s = o.S(this.scope));
				var a = s.data(o.attr_name(!0) + "-init");
				if (
					((a = a || this.settings),
					s.hasClass("open") && i.attr("data-reveal-id") == s.attr("id"))
				)
					return o.close(s);
				if (!s.hasClass("open")) {
					var r = o.S("[" + o.attr_name() + "].open");
					if (
						(void 0 === s.data("css-top") &&
							s
								.data("css-top", parseInt(s.css("top"), 10))
								.data("offset", this.cache_offset(s)),
						this.key_up_on(s),
						s.trigger("open").trigger("open.fndtn.reveal"),
						r.length < 1 && this.toggle_bg(s, !0),
						"string" == typeof n && (n = { url: n }),
						void 0 !== n && n.url)
					) {
						var l = void 0 !== n.success ? n.success : null;
						t.extend(n, {
							success: function (e, i, n) {
								t.isFunction(l) && l(e, i, n),
									s.html(e),
									o.S(s).foundation("section", "reflow"),
									o.S(s).children().foundation(),
									r.length > 0 && o.hide(r, a.css.close),
									o.show(s, a.css.open);
							},
						}),
							t.ajax(n);
					} else
						r.length > 0 && this.hide(r, a.css.close), this.show(s, a.css.open);
				}
				o.S(e).trigger("resize");
			},
			close: function (t) {
				t = t && t.length ? t : this.S(this.scope);
				var e = this.S("[" + this.attr_name() + "].open"),
					i = t.data(this.attr_name(!0) + "-init") || this.settings;
				e.length > 0 &&
					((this.locked = !0),
					this.key_up_off(t),
					t.trigger("close").trigger("close.fndtn.reveal"),
					this.toggle_bg(t, !1),
					this.hide(e, i.css.close, i));
			},
			close_targets: function () {
				var t = "." + this.settings.dismiss_modal_class;
				return this.settings.close_on_background_click
					? t + ", ." + this.settings.bg_class
					: t;
			},
			toggle_bg: function (e, i) {
				0 === this.S("." + this.settings.bg_class).length &&
					(this.settings.bg = t("<div />", { class: this.settings.bg_class })
						.appendTo("body")
						.hide());
				var s = this.settings.bg.filter(":visible").length > 0;
				i != s &&
					((i == n ? s : !i)
						? this.hide(this.settings.bg)
						: this.show(this.settings.bg));
			},
			show: function (i, n) {
				if (n) {
					var o = (h = i.data(this.attr_name(!0) + "-init") || this.settings)
						.root_element;
					if (0 === i.parent(o).length) {
						var a = i.wrap('<div style="display: none;" />').parent();
						i.on("closed.fndtn.reveal.wrapped", function () {
							i.detach().appendTo(a),
								i.unwrap().unbind("closed.fndtn.reveal.wrapped");
						}),
							i.detach().appendTo(o);
					}
					var r = s(h.animation);
					if ((r.animate || (this.locked = !1), r.pop)) {
						n.top = t(e).scrollTop() - i.data("offset") + "px";
						var l = {
							top: t(e).scrollTop() + i.data("css-top") + "px",
							opacity: 1,
						};
						return setTimeout(
							function () {
								return i
									.css(n)
									.animate(
										l,
										h.animation_speed,
										"linear",
										function () {
											(this.locked = !1),
												i.trigger("opened").trigger("opened.fndtn.reveal");
										}.bind(this)
									)
									.addClass("open");
							}.bind(this),
							h.animation_speed / 2
						);
					}
					if (r.fade) {
						n.top = t(e).scrollTop() + i.data("css-top") + "px";
						l = { opacity: 1 };
						return setTimeout(
							function () {
								return i
									.css(n)
									.animate(
										l,
										h.animation_speed,
										"linear",
										function () {
											(this.locked = !1),
												i.trigger("opened").trigger("opened.fndtn.reveal");
										}.bind(this)
									)
									.addClass("open");
							}.bind(this),
							h.animation_speed / 2
						);
					}
					return i
						.css(n)
						.show()
						.css({ opacity: 1 })
						.addClass("open")
						.trigger("opened")
						.trigger("opened.fndtn.reveal");
				}
				var h;
				return s((h = this.settings).animation).fade
					? i.fadeIn(h.animation_speed / 2)
					: ((this.locked = !1), i.show());
			},
			hide: function (i, n) {
				if (n) {
					var o = s(
						(r = (r = i.data(this.attr_name(!0) + "-init")) || this.settings)
							.animation
					);
					if ((o.animate || (this.locked = !1), o.pop)) {
						var a = {
							top: -t(e).scrollTop() - i.data("offset") + "px",
							opacity: 0,
						};
						return setTimeout(
							function () {
								return i
									.animate(
										a,
										r.animation_speed,
										"linear",
										function () {
											(this.locked = !1),
												i
													.css(n)
													.trigger("closed")
													.trigger("closed.fndtn.reveal");
										}.bind(this)
									)
									.removeClass("open");
							}.bind(this),
							r.animation_speed / 2
						);
					}
					if (o.fade) {
						a = { opacity: 0 };
						return setTimeout(
							function () {
								return i
									.animate(
										a,
										r.animation_speed,
										"linear",
										function () {
											(this.locked = !1),
												i
													.css(n)
													.trigger("closed")
													.trigger("closed.fndtn.reveal");
										}.bind(this)
									)
									.removeClass("open");
							}.bind(this),
							r.animation_speed / 2
						);
					}
					return i
						.hide()
						.css(n)
						.removeClass("open")
						.trigger("closed")
						.trigger("closed.fndtn.reveal");
				}
				var r;
				return s((r = this.settings).animation).fade
					? i.fadeOut(r.animation_speed / 2)
					: i.hide();
			},
			close_video: function (e) {
				var i = t(".flex-video", e.target),
					n = t("iframe", i);
				n.length > 0 &&
					(n.attr("data-src", n[0].src),
					n.attr("src", n.attr("src")),
					i.hide());
			},
			open_video: function (e) {
				var i = t(".flex-video", e.target),
					s = i.find("iframe");
				if (s.length > 0) {
					if ("string" == typeof s.attr("data-src"))
						s[0].src = s.attr("data-src");
					else {
						var o = s[0].src;
						(s[0].src = n), (s[0].src = o);
					}
					i.show();
				}
			},
			data_attr: function (t) {
				return this.namespace.length > 0 ? this.namespace + "-" + t : t;
			},
			cache_offset: function (t) {
				var e = t.show().height() + parseInt(t.css("top"), 10);
				return t.hide(), e;
			},
			off: function () {
				t(this.scope).off(".fndtn.reveal");
			},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.interchange = {
			name: "interchange",
			version: "5.4.5",
			cache: {},
			images_loaded: !1,
			nodes_loaded: !1,
			settings: {
				load_attr: "interchange",
				named_queries: {
					default: "only screen",
					small: Foundation.media_queries.small,
					medium: Foundation.media_queries.medium,
					large: Foundation.media_queries.large,
					xlarge: Foundation.media_queries.xlarge,
					xxlarge: Foundation.media_queries.xxlarge,
					landscape: "only screen and (orientation: landscape)",
					portrait: "only screen and (orientation: portrait)",
					retina:
						"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)",
				},
				directives: {
					replace: function (e, i, n) {
						if (/IMG/.test(e[0].nodeName)) {
							var s = e[0].src;
							if (new RegExp(i, "i").test(s)) return;
							return (e[0].src = i), n(e[0].src);
						}
						var o = e.data(this.data_attr + "-last-path"),
							a = this;
						if (o != i)
							return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)
								? (t(e).css("background-image", "url(" + i + ")"),
								  e.data("interchange-last-path", i),
								  n(i))
								: t.get(i, function (t) {
										e.html(t), e.data(a.data_attr + "-last-path", i), n();
								  });
					},
				},
			},
			init: function (e, i, n) {
				Foundation.inherit(this, "throttle random_str"),
					(this.data_attr = this.set_data_attr()),
					t.extend(!0, this.settings, i, n),
					this.bindings(i, n),
					this.load("images"),
					this.load("nodes");
			},
			get_media_hash: function () {
				var t = "";
				for (var e in this.settings.named_queries)
					t += matchMedia(this.settings.named_queries[e]).matches.toString();
				return t;
			},
			events: function () {
				var i,
					n = this;
				return (
					t(e)
						.off(".interchange")
						.on(
							"resize.fndtn.interchange",
							n.throttle(function () {
								var t = n.get_media_hash();
								t !== i && n.resize(), (i = t);
							}, 50)
						),
					this
				);
			},
			resize: function () {
				var e = this.cache;
				if (this.images_loaded && this.nodes_loaded) {
					for (var i in e)
						if (e.hasOwnProperty(i)) {
							var n = this.results(i, e[i]);
							n &&
								this.settings.directives[n.scenario[1]].call(
									this,
									n.el,
									n.scenario[0],
									function () {
										if (arguments[0] instanceof Array) var t = arguments[0];
										else t = Array.prototype.slice.call(arguments, 0);
										n.el.trigger(n.scenario[1], t);
									}
								);
						}
				} else setTimeout(t.proxy(this.resize, this), 50);
			},
			results: function (t, e) {
				var i = e.length;
				if (i > 0)
					for (
						var n = this.S(
							"[" + this.add_namespace("data-uuid") + '="' + t + '"]'
						);
						i--;

					) {
						var s = e[i][2];
						if (
							(this.settings.named_queries.hasOwnProperty(s)
								? matchMedia(this.settings.named_queries[s])
								: matchMedia(s)
							).matches
						)
							return { el: n, scenario: e[i] };
					}
				return !1;
			},
			load: function (t, e) {
				return (
					(void 0 === this["cached_" + t] || e) && this["update_" + t](),
					this["cached_" + t]
				);
			},
			update_images: function () {
				var t = this.S("img[" + this.data_attr + "]"),
					e = t.length,
					i = e,
					n = 0,
					s = this.data_attr;
				for (
					this.cache = {},
						this.cached_images = [],
						this.images_loaded = 0 === e;
					i--;

				) {
					if ((n++, t[i]))
						(t[i].getAttribute(s) || "").length > 0 &&
							this.cached_images.push(t[i]);
					n === e && ((this.images_loaded = !0), this.enhance("images"));
				}
				return this;
			},
			update_nodes: function () {
				var t = this.S("[" + this.data_attr + "]").not("img"),
					e = t.length,
					i = e,
					n = 0,
					s = this.data_attr;
				for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--; ) {
					n++,
						(t[i].getAttribute(s) || "").length > 0 &&
							this.cached_nodes.push(t[i]),
						n === e && ((this.nodes_loaded = !0), this.enhance("nodes"));
				}
				return this;
			},
			enhance: function (i) {
				for (var n = this["cached_" + i].length; n--; )
					this.object(t(this["cached_" + i][n]));
				return t(e).trigger("resize").trigger("resize.fndtn.interchange");
			},
			convert_directive: function (t) {
				var e = this.trim(t);
				return e.length > 0 ? e : "replace";
			},
			parse_scenario: function (t) {
				var e = t[0].match(/(.+),\s*(\w+)\s*$/),
					i = t[1];
				if (e)
					var n = e[1],
						s = e[2];
				else (n = t[0].split(/,\s*$/)[0]), (s = "");
				return [this.trim(n), this.convert_directive(s), this.trim(i)];
			},
			object: function (t) {
				var e = this.parse_data_attr(t),
					i = [],
					n = e.length;
				if (n > 0)
					for (; n--; ) {
						var s = e[n].split(/\((.*?)(\))$/);
						if (s.length > 1) {
							var o = this.parse_scenario(s);
							i.push(o);
						}
					}
				return this.store(t, i);
			},
			store: function (t, e) {
				var i = this.random_str(),
					n = t.data(this.add_namespace("uuid", !0));
				return this.cache[n]
					? this.cache[n]
					: (t.attr(this.add_namespace("data-uuid"), i), (this.cache[i] = e));
			},
			trim: function (e) {
				return "string" == typeof e ? t.trim(e) : e;
			},
			set_data_attr: function (t) {
				return t
					? this.namespace.length > 0
						? this.namespace + "-" + this.settings.load_attr
						: this.settings.load_attr
					: this.namespace.length > 0
					? "data-" + this.namespace + "-" + this.settings.load_attr
					: "data-" + this.settings.load_attr;
			},
			parse_data_attr: function (t) {
				for (
					var e = t.attr(this.attr_name()).split(/\[(.*?)\]/),
						i = e.length,
						n = [];
					i--;

				)
					e[i].replace(/[\W\d]+/, "").length > 4 && n.push(e[i]);
				return n;
			},
			reflow: function () {
				this.load("images", !0), this.load("nodes", !0);
			},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs["magellan-expedition"] = {
			name: "magellan-expedition",
			version: "5.4.5",
			settings: {
				active_class: "active",
				threshold: 0,
				destination_threshold: 20,
				throttle_delay: 30,
				fixed_top: 0,
			},
			init: function (t, e, i) {
				Foundation.inherit(this, "throttle"), this.bindings(e, i);
			},
			events: function () {
				var i = this,
					n = i.S,
					s = i.settings;
				i.set_expedition_position(),
					n(i.scope)
						.off(".magellan")
						.on(
							"click.fndtn.magellan",
							"[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]',
							function (e) {
								e.preventDefault();
								var n = t(this).closest("[" + i.attr_name() + "]"),
									s = n.data("magellan-expedition-init"),
									o = this.hash.split("#").join(""),
									a = t("a[name='" + o + "']");
								0 === a.length && (a = t("#" + o));
								var r = a.offset().top - s.destination_threshold + 1;
								(r -= n.outerHeight()),
									t("html, body")
										.stop()
										.animate({ scrollTop: r }, 700, "swing", function () {
											history.pushState
												? history.pushState(null, null, "#" + o)
												: (location.hash = "#" + o);
										});
							}
						)
						.on(
							"scroll.fndtn.magellan",
							i.throttle(this.check_for_arrivals.bind(this), s.throttle_delay)
						),
					t(e).on(
						"resize.fndtn.magellan",
						i.throttle(
							this.set_expedition_position.bind(this),
							s.throttle_delay
						)
					);
			},
			check_for_arrivals: function () {
				this.update_arrivals(), this.update_expedition_positions();
			},
			set_expedition_position: function () {
				var e = this;
				t("[" + this.attr_name() + "=fixed]", e.scope).each(function (i, n) {
					var s,
						o,
						a = t(this),
						r = a.data("magellan-expedition-init"),
						l = a.attr("styles");
					a.attr("style", ""),
						(s = a.offset().top + r.threshold),
						(o = parseInt(a.data("magellan-fixed-top"))),
						isNaN(o) || (e.settings.fixed_top = o),
						a.data(e.data_attr("magellan-top-offset"), s),
						a.attr("style", l);
				});
			},
			update_expedition_positions: function () {
				var i = this,
					n = t(e).scrollTop();
				t("[" + this.attr_name() + "=fixed]", i.scope).each(function () {
					var e = t(this),
						s = e.data("magellan-expedition-init"),
						o = e.attr("style"),
						a = e.data("magellan-top-offset");
					if (n + i.settings.fixed_top >= a) {
						var r = e.prev(
							"[" + i.add_namespace("data-magellan-expedition-clone") + "]"
						);
						0 === r.length &&
							((r = e.clone()).removeAttr(i.attr_name()),
							r.attr(i.add_namespace("data-magellan-expedition-clone"), ""),
							e.before(r)),
							e.css({ position: "fixed", top: s.fixed_top }).addClass("fixed");
					} else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", o).css("position", "").css("top", "").removeClass("fixed");
				});
			},
			update_arrivals: function () {
				var i = this,
					n = t(e).scrollTop();
				t("[" + this.attr_name() + "]", i.scope).each(function () {
					var e = t(this),
						s = e.data(i.attr_name(!0) + "-init"),
						o = i.offsets(e, n),
						a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"),
						r = !1;
					o.each(function (t, n) {
						if (n.viewport_offset >= n.top_offset)
							return (
								e
									.find("[" + i.add_namespace("data-magellan-arrival") + "]")
									.not(n.arrival)
									.removeClass(s.active_class),
								n.arrival.addClass(s.active_class),
								(r = !0),
								!0
							);
					}),
						r || a.removeClass(s.active_class);
				});
			},
			offsets: function (e, i) {
				var n = this,
					s = e.data(n.attr_name(!0) + "-init"),
					o = i;
				return e
					.find("[" + n.add_namespace("data-magellan-arrival") + "]")
					.map(function (i, a) {
						var r = t(this).data(n.data_attr("magellan-arrival")),
							l = t(
								"[" +
									n.add_namespace("data-magellan-destination") +
									"=" +
									r +
									"]"
							);
						if (l.length > 0) {
							var h = Math.floor(
								l.offset().top - s.destination_threshold - e.outerHeight()
							);
							return {
								destination: l,
								arrival: t(this),
								top_offset: h,
								viewport_offset: o,
							};
						}
					})
					.sort(function (t, e) {
						return t.top_offset < e.top_offset
							? -1
							: t.top_offset > e.top_offset
							? 1
							: 0;
					});
			},
			data_attr: function (t) {
				return this.namespace.length > 0 ? this.namespace + "-" + t : t;
			},
			off: function () {
				this.S(this.scope).off(".magellan"), this.S(e).off(".magellan");
			},
			reflow: function () {
				t(
					"[" + this.add_namespace("data-magellan-expedition-clone") + "]",
					this.scope
				).remove();
			},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.accordion = {
			name: "accordion",
			version: "5.4.5",
			settings: {
				active_class: "active",
				multi_expand: !1,
				toggleable: !0,
				callback: function () {},
			},
			init: function (t, e, i) {
				this.bindings(e, i);
			},
			events: function () {
				var e = this,
					i = this.S;
				i(this.scope)
					.off(".fndtn.accordion")
					.on(
						"click.fndtn.accordion",
						"[" + this.attr_name() + "] > dd > a",
						function (n) {
							var s = i(this).closest("[" + e.attr_name() + "]"),
								o = e.attr_name() + "=" + s.attr(e.attr_name()),
								a = s.data(e.attr_name(!0) + "-init"),
								r = i("#" + this.href.split("#")[1]),
								l = t("> dd", s),
								h = l.children(".content"),
								c = h.filter("." + a.active_class);
							if (
								(n.preventDefault(),
								s.attr(e.attr_name()) &&
									((h = h.add("[" + o + "] dd > .content")),
									(l = l.add("[" + o + "] dd"))),
								a.toggleable && r.is(c))
							)
								return (
									r.parent("dd").toggleClass(a.active_class, !1),
									r.toggleClass(a.active_class, !1),
									a.callback(r),
									r.triggerHandler("toggled", [s]),
									void s.triggerHandler("toggled", [r])
								);
							a.multi_expand ||
								(h.removeClass(a.active_class), l.removeClass(a.active_class)),
								r.addClass(a.active_class).parent().addClass(a.active_class),
								a.callback(r),
								r.triggerHandler("toggled", [s]),
								s.triggerHandler("toggled", [r]);
						}
					);
			},
			off: function () {},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.topbar = {
			name: "topbar",
			version: "5.4.5",
			settings: {
				index: 0,
				sticky_class: "sticky",
				custom_back_text: !0,
				back_text: "Back",
				mobile_show_parent_link: !0,
				is_hover: !0,
				scrolltop: !0,
				sticky_on: "all",
			},
			init: function (e, i, n) {
				Foundation.inherit(this, "add_custom_rule register_media throttle");
				var s = this;
				s.register_media("topbar", "foundation-mq-topbar"),
					this.bindings(i, n),
					s.S("[" + this.attr_name() + "]", this.scope).each(function () {
						var e = t(this),
							i = e.data(s.attr_name(!0) + "-init");
						s.S("section, .top-bar-section", this);
						e.data("index", 0);
						var n = e.parent();
						n.hasClass("fixed") || s.is_sticky(e, n, i)
							? ((s.settings.sticky_class = i.sticky_class),
							  (s.settings.sticky_topbar = e),
							  e.data("height", n.outerHeight()),
							  e.data("stickyoffset", n.offset().top))
							: e.data("height", e.outerHeight()),
							i.assembled || s.assemble(e),
							i.is_hover
								? s.S(".has-dropdown", e).addClass("not-click")
								: s.S(".has-dropdown", e).removeClass("not-click"),
							s.add_custom_rule(
								".f-topbar-fixed { padding-top: " + e.data("height") + "px }"
							),
							n.hasClass("fixed") && s.S("body").addClass("f-topbar-fixed");
					});
			},
			is_sticky: function (t, e, i) {
				var n = e.hasClass(i.sticky_class);
				return (
					!(!n || "all" !== i.sticky_on) ||
					(n && this.small() && "small" === i.sticky_on
						? matchMedia(Foundation.media_queries.small).matches &&
						  !matchMedia(Foundation.media_queries.medium).matches &&
						  !matchMedia(Foundation.media_queries.large).matches
						: n && this.medium() && "medium" === i.sticky_on
						? matchMedia(Foundation.media_queries.small).matches &&
						  matchMedia(Foundation.media_queries.medium).matches &&
						  !matchMedia(Foundation.media_queries.large).matches
						: !(!n || !this.large() || "large" !== i.sticky_on) &&
						  matchMedia(Foundation.media_queries.small).matches &&
						  matchMedia(Foundation.media_queries.medium).matches &&
						  matchMedia(Foundation.media_queries.large).matches)
				);
			},
			toggle: function (i) {
				var n,
					s = this,
					o = (n = i
						? s.S(i).closest("[" + this.attr_name() + "]")
						: s.S("[" + this.attr_name() + "]")).data(
						this.attr_name(!0) + "-init"
					),
					a = s.S("section, .top-bar-section", n);
				s.breakpoint() &&
					(s.rtl
						? (a.css({ right: "0%" }), t(">.name", a).css({ right: "100%" }))
						: (a.css({ left: "0%" }), t(">.name", a).css({ left: "100%" })),
					s.S("li.moved", a).removeClass("moved"),
					n.data("index", 0),
					n.toggleClass("expanded").css("height", "")),
					o.scrolltop
						? n.hasClass("expanded")
							? n.parent().hasClass("fixed") &&
							  (o.scrolltop
									? (n.parent().removeClass("fixed"),
									  n.addClass("fixed"),
									  s.S("body").removeClass("f-topbar-fixed"),
									  e.scrollTo(0, 0))
									: n.parent().removeClass("expanded"))
							: n.hasClass("fixed") &&
							  (n.parent().addClass("fixed"),
							  n.removeClass("fixed"),
							  s.S("body").addClass("f-topbar-fixed"))
						: (s.is_sticky(n, n.parent(), o) && n.parent().addClass("fixed"),
						  n.parent().hasClass("fixed") &&
								(n.hasClass("expanded")
									? (n.addClass("fixed"),
									  n.parent().addClass("expanded"),
									  s.S("body").addClass("f-topbar-fixed"))
									: (n.removeClass("fixed"),
									  n.parent().removeClass("expanded"),
									  s.update_sticky_positioning())));
			},
			timer: null,
			events: function (i) {
				var n = this,
					s = this.S;
				s(this.scope)
					.off(".topbar")
					.on(
						"click.fndtn.topbar",
						"[" + this.attr_name() + "] .toggle-topbar",
						function (t) {
							t.preventDefault(), n.toggle(this);
						}
					)
					.on(
						"click.fndtn.topbar",
						'.top-bar .top-bar-section li a[href^="#"],[' +
							this.attr_name() +
							'] .top-bar-section li a[href^="#"]',
						function (e) {
							var i = t(this).closest("li");
							n.breakpoint() &&
								!i.hasClass("back") &&
								!i.hasClass("has-dropdown") &&
								n.toggle();
						}
					)
					.on(
						"click.fndtn.topbar",
						"[" + this.attr_name() + "] li.has-dropdown",
						function (e) {
							var i = s(this),
								o = s(e.target),
								a = i
									.closest("[" + n.attr_name() + "]")
									.data(n.attr_name(!0) + "-init");
							o.data("revealId")
								? n.toggle()
								: n.breakpoint() ||
								  (a.is_hover && !Modernizr.touch) ||
								  (e.stopImmediatePropagation(),
								  i.hasClass("hover")
										? (i.removeClass("hover").find("li").removeClass("hover"),
										  i.parents("li.hover").removeClass("hover"))
										: (i.addClass("hover"),
										  t(i).siblings().removeClass("hover"),
										  "A" === o[0].nodeName &&
												o.parent().hasClass("has-dropdown") &&
												e.preventDefault()));
						}
					)
					.on(
						"click.fndtn.topbar",
						"[" + this.attr_name() + "] .has-dropdown>a",
						function (t) {
							if (n.breakpoint()) {
								t.preventDefault();
								var e = s(this),
									i = e.closest("[" + n.attr_name() + "]"),
									o = i.find("section, .top-bar-section"),
									a = (e.next(".dropdown").outerHeight(), e.closest("li"));
								i.data("index", i.data("index") + 1),
									a.addClass("moved"),
									n.rtl
										? (o.css({ right: -100 * i.data("index") + "%" }),
										  o
												.find(">.name")
												.css({ right: 100 * i.data("index") + "%" }))
										: (o.css({ left: -100 * i.data("index") + "%" }),
										  o
												.find(">.name")
												.css({ left: 100 * i.data("index") + "%" })),
									i.css(
										"height",
										e.siblings("ul").outerHeight(!0) + i.data("height")
									);
							}
						}
					),
					s(e)
						.off(".topbar")
						.on(
							"resize.fndtn.topbar",
							n.throttle(function () {
								n.resize.call(n);
							}, 50)
						)
						.trigger("resize")
						.trigger("resize.fndtn.topbar")
						.load(function () {
							s(this).trigger("resize.fndtn.topbar");
						}),
					s("body")
						.off(".topbar")
						.on("click.fndtn.topbar", function (t) {
							s(t.target).closest("li").closest("li.hover").length > 0 ||
								s("[" + n.attr_name() + "] li.hover").removeClass("hover");
						}),
					s(this.scope).on(
						"click.fndtn.topbar",
						"[" + this.attr_name() + "] .has-dropdown .back",
						function (t) {
							t.preventDefault();
							var e = s(this),
								i = e.closest("[" + n.attr_name() + "]"),
								o = i.find("section, .top-bar-section"),
								a = (i.data(n.attr_name(!0) + "-init"), e.closest("li.moved")),
								r = a.parent();
							i.data("index", i.data("index") - 1),
								n.rtl
									? (o.css({ right: -100 * i.data("index") + "%" }),
									  o
											.find(">.name")
											.css({ right: 100 * i.data("index") + "%" }))
									: (o.css({ left: -100 * i.data("index") + "%" }),
									  o
											.find(">.name")
											.css({ left: 100 * i.data("index") + "%" })),
								0 === i.data("index")
									? i.css("height", "")
									: i.css("height", r.outerHeight(!0) + i.data("height")),
								setTimeout(function () {
									a.removeClass("moved");
								}, 300);
						}
					),
					s(this.scope)
						.find(".dropdown a")
						.focus(function () {
							t(this).parents(".has-dropdown").addClass("hover");
						})
						.blur(function () {
							t(this).parents(".has-dropdown").removeClass("hover");
						});
			},
			resize: function () {
				var t = this;
				t.S("[" + this.attr_name() + "]").each(function () {
					var e,
						n = t.S(this),
						s = n.data(t.attr_name(!0) + "-init"),
						o = n.parent("." + t.settings.sticky_class);
					if (!t.breakpoint()) {
						var a = n.hasClass("expanded");
						n
							.css("height", "")
							.removeClass("expanded")
							.find("li")
							.removeClass("hover"),
							a && t.toggle(n);
					}
					t.is_sticky(n, o, s) &&
						(o.hasClass("fixed")
							? (o.removeClass("fixed"),
							  (e = o.offset().top),
							  t.S(i.body).hasClass("f-topbar-fixed") &&
									(e -= n.data("height")),
							  n.data("stickyoffset", e),
							  o.addClass("fixed"))
							: ((e = o.offset().top), n.data("stickyoffset", e)));
				});
			},
			breakpoint: function () {
				return !matchMedia(Foundation.media_queries.topbar).matches;
			},
			small: function () {
				return matchMedia(Foundation.media_queries.small).matches;
			},
			medium: function () {
				return matchMedia(Foundation.media_queries.medium).matches;
			},
			large: function () {
				return matchMedia(Foundation.media_queries.large).matches;
			},
			assemble: function (e) {
				var i = this,
					n = e.data(this.attr_name(!0) + "-init"),
					s = i.S("section, .top-bar-section", e);
				s.detach(),
					i.S(".has-dropdown>a", s).each(function () {
						var e,
							s = i.S(this),
							o = s.siblings(".dropdown"),
							a = s.attr("href");
						o.find(".title.back").length ||
							((e =
								1 == n.mobile_show_parent_link && a
									? t(
											'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' +
												a +
												'">' +
												s.html() +
												"</a></li>"
									  )
									: t(
											'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'
									  )),
							1 == n.custom_back_text
								? t("h5>a", e).html(n.back_text)
								: t("h5>a", e).html("&laquo; " + s.html()),
							o.prepend(e));
					}),
					s.appendTo(e),
					this.sticky(),
					this.assembled(e);
			},
			assembled: function (e) {
				e.data(
					this.attr_name(!0),
					t.extend({}, e.data(this.attr_name(!0)), { assembled: !0 })
				);
			},
			height: function (e) {
				var i = 0,
					n = this;
				return (
					t("> li", e).each(function () {
						i += n.S(this).outerHeight(!0);
					}),
					i
				);
			},
			sticky: function () {
				var t = this;
				this.S(e).on("scroll", function () {
					t.update_sticky_positioning();
				});
			},
			update_sticky_positioning: function () {
				var t = "." + this.settings.sticky_class,
					i = this.S(e),
					n = this;
				if (
					n.settings.sticky_topbar &&
					n.is_sticky(
						this.settings.sticky_topbar,
						this.settings.sticky_topbar.parent(),
						this.settings
					)
				) {
					var s = this.settings.sticky_topbar.data("stickyoffset");
					n.S(t).hasClass("expanded") ||
						(i.scrollTop() > s
							? n.S(t).hasClass("fixed") ||
							  (n.S(t).addClass("fixed"),
							  n.S("body").addClass("f-topbar-fixed"))
							: i.scrollTop() <= s &&
							  n.S(t).hasClass("fixed") &&
							  (n.S(t).removeClass("fixed"),
							  n.S("body").removeClass("f-topbar-fixed")));
				}
			},
			off: function () {
				this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar");
			},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.tab = {
			name: "tab",
			version: "5.4.5",
			settings: {
				active_class: "active",
				callback: function () {},
				deep_linking: !1,
				scroll_to_content: !0,
				is_hover: !1,
			},
			default_tab_hashes: [],
			init: function (t, e, i) {
				var n = this,
					s = this.S;
				this.bindings(e, i),
					this.handle_location_hash_change(),
					s("[" + this.attr_name() + "] > .active > a", this.scope).each(
						function () {
							n.default_tab_hashes.push(this.hash);
						}
					);
			},
			events: function () {
				var t = this,
					i = this.S,
					n = function (e) {
						(i(this)
							.closest("[" + t.attr_name() + "]")
							.data(t.attr_name(!0) + "-init").is_hover &&
							!Modernizr.touch) ||
							(e.preventDefault(),
							e.stopPropagation(),
							t.toggle_active_tab(i(this).parent()));
					};
				i(this.scope)
					.off(".tab")
					.on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", n)
					.on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", n)
					.on(
						"mouseenter.fndtn.tab",
						"[" + this.attr_name() + "] > * > a",
						function (e) {
							i(this)
								.closest("[" + t.attr_name() + "]")
								.data(t.attr_name(!0) + "-init").is_hover &&
								t.toggle_active_tab(i(this).parent());
						}
					),
					i(e).on("hashchange.fndtn.tab", function (e) {
						e.preventDefault(), t.handle_location_hash_change();
					});
			},
			handle_location_hash_change: function () {
				var e = this,
					i = this.S;
				i("[" + this.attr_name() + "]", this.scope).each(function () {
					var s,
						o = i(this).data(e.attr_name(!0) + "-init");
					if (o.deep_linking)
						if (
							"" !=
							(s = o.scroll_to_content
								? e.scope.location.hash
								: e.scope.location.hash.replace("fndtn-", ""))
						) {
							var a = i(s);
							if (a.hasClass("content") && a.parent().hasClass("tab-content"))
								e.toggle_active_tab(
									t("[" + e.attr_name() + "] > * > a[href=" + s + "]").parent()
								);
							else {
								var r = a.closest(".content").attr("id");
								r != n &&
									e.toggle_active_tab(
										t(
											"[" + e.attr_name() + "] > * > a[href=#" + r + "]"
										).parent(),
										s
									);
							}
						} else
							for (var l in e.default_tab_hashes)
								e.toggle_active_tab(
									t(
										"[" +
											e.attr_name() +
											"] > * > a[href=" +
											e.default_tab_hashes[l] +
											"]"
									).parent()
								);
				});
			},
			toggle_active_tab: function (s, o) {
				var a = this.S,
					r = s.closest("[" + this.attr_name() + "]"),
					l = s.find("a"),
					h = "#" + s.children("a").first().attr("href").split("#")[1],
					c = a(h),
					u = s.siblings(),
					d = r.data(this.attr_name(!0) + "-init");
				a(this).data(this.data_attr("tab-content")) &&
					((h =
						"#" + a(this).data(this.data_attr("tab-content")).split("#")[1]),
					(c = a(h))),
					d.deep_linking &&
						(d.scroll_to_content
							? ((e.location.hash = o || h),
							  o == n || o == h
									? s.parent()[0].scrollIntoView()
									: a(h)[0].scrollIntoView())
							: (e.location.hash =
									o != n
										? "fndtn-" + o.replace("#", "")
										: "fndtn-" + h.replace("#", ""))),
					s.addClass(d.active_class).triggerHandler("opened"),
					l.attr({ "aria-selected": "true", tabindex: 0 }),
					u.removeClass(d.active_class),
					u.find("a").attr({ "aria-selected": "false", tabindex: -1 }),
					c
						.siblings()
						.removeClass(d.active_class)
						.attr({ "aria-hidden": "true", tabindex: -1 })
						.end()
						.addClass(d.active_class)
						.attr("aria-hidden", "false")
						.find(":first-child")
						.attr("tabindex", 0),
					d.callback(s),
					c.children().attr("tab-index", 0),
					c.triggerHandler("toggled", [s]),
					r.triggerHandler("toggled", [c]),
					l.on("keydown", function (e) {
						var n,
							s = t(this),
							o = t(this).parents("li").prev().children('[role="tab"]'),
							a = t(this).parents("li").next().children('[role="tab"]');
						switch (e.keyCode) {
							case 37:
								n = o;
								break;
							case 39:
								n = a;
								break;
							default:
								n = !1;
						}
						n.length &&
							(s.attr({ tabindex: "-1", "aria-selected": null }),
							n.attr({ tabindex: "0", "aria-selected": !0 }).focus()),
							t('[role="tabpanel"]').attr("aria-hidden", "true"),
							t("#" + t(i.activeElement).attr("href").substring(1)).attr(
								"aria-hidden",
								null
							);
					});
			},
			data_attr: function (t) {
				return this.namespace.length > 0 ? this.namespace + "-" + t : t;
			},
			off: function () {},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.abide = {
			name: "abide",
			version: "5.4.5",
			settings: {
				live_validate: !0,
				focus_on_invalid: !0,
				error_labels: !0,
				timeout: 1e3,
				patterns: {
					alpha: /^[a-zA-Z]+$/,
					alpha_numeric: /^[a-zA-Z0-9]+$/,
					integer: /^[-+]?\d+$/,
					number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
					card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
					cvv: /^([0-9]){3,4}$/,
					email:
						/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
					url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
					domain:
						/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
					datetime:
						/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
					date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
					time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
					dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
					month_day_year:
						/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
					day_month_year:
						/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
					color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
				},
				validators: {
					equalTo: function (t, e, n) {
						return (
							i.getElementById(
								t.getAttribute(this.add_namespace("data-equalto"))
							).value === t.value
						);
					},
				},
			},
			timer: null,
			init: function (t, e, i) {
				this.bindings(e, i);
			},
			events: function (e) {
				var i = this,
					n = i.S(e).attr("novalidate", "novalidate"),
					s = n.data(this.attr_name(!0) + "-init") || {};
				(this.invalid_attr = this.add_namespace("data-invalid")),
					n
						.off(".abide")
						.on("submit.fndtn.abide validate.fndtn.abide", function (t) {
							var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
							return i.validate(
								i.S(this).find("input, textarea, select").get(),
								t,
								e
							);
						})
						.on("reset", function () {
							return i.reset(t(this));
						})
						.find("input, textarea, select")
						.off(".abide")
						.on("blur.fndtn.abide change.fndtn.abide", function (t) {
							i.validate([this], t);
						})
						.on("keydown.fndtn.abide", function (t) {
							!0 === s.live_validate &&
								(clearTimeout(i.timer),
								(i.timer = setTimeout(
									function () {
										i.validate([this], t);
									}.bind(this),
									s.timeout
								)));
						});
			},
			reset: function (e) {
				e.removeAttr(this.invalid_attr),
					t(this.invalid_attr, e).removeAttr(this.invalid_attr),
					t(".error", e).not("small").removeClass("error");
			},
			validate: function (t, e, i) {
				for (
					var n = this.parse_patterns(t),
						s = n.length,
						o = this.S(t[0]).closest("form"),
						a = /submit/.test(e.type),
						r = 0;
					r < s;
					r++
				)
					if (!n[r] && (a || i))
						return (
							this.settings.focus_on_invalid && t[r].focus(),
							o.trigger("invalid"),
							this.S(t[r]).closest("form").attr(this.invalid_attr, ""),
							!1
						);
				return (
					(a || i) && o.trigger("valid"), o.removeAttr(this.invalid_attr), !i
				);
			},
			parse_patterns: function (t) {
				for (var e = t.length, i = []; e--; ) i.push(this.pattern(t[e]));
				return this.check_validation_and_apply_styles(i);
			},
			pattern: function (t) {
				var e = t.getAttribute("type"),
					i = "string" == typeof t.getAttribute("required"),
					n = t.getAttribute("pattern") || "";
				return this.settings.patterns.hasOwnProperty(n) && n.length > 0
					? [t, this.settings.patterns[n], i]
					: n.length > 0
					? [t, new RegExp(n), i]
					: this.settings.patterns.hasOwnProperty(e)
					? [t, this.settings.patterns[e], i]
					: [t, (n = /.*/), i];
			},
			check_validation_and_apply_styles: function (e) {
				var i = e.length,
					n = [];
				for (
					this.S(e[0][0])
						.closest("[data-" + this.attr_name(!0) + "]")
						.data(this.attr_name(!0) + "-init");
					i--;

				) {
					var s,
						o,
						a = e[i][0],
						r = e[i][2],
						l = a.value.trim(),
						h = this.S(a).parent(),
						c = a.getAttribute(this.add_namespace("data-abide-validator")),
						u = "radio" === a.type,
						d = "checkbox" === a.type,
						p = this.S('label[for="' + a.getAttribute("id") + '"]'),
						f = !r || a.value.length > 0,
						g = [];
					if (
						(a.getAttribute(this.add_namespace("data-equalto")) &&
							(c = "equalTo"),
						(s = h.is("label") ? h.parent() : h),
						c &&
							((o = this.settings.validators[c].apply(this, [a, r, s])),
							g.push(o)),
						u && r)
					)
						g.push(this.valid_radio(a, r));
					else if (d && r) g.push(this.valid_checkbox(a, r));
					else {
						if (
							((e[i][1].test(l) && f) ||
							(!r && a.value.length < 1) ||
							t(a).attr("disabled")
								? g.push(!0)
								: g.push(!1),
							(g = [
								g.every(function (t) {
									return t;
								}),
							])[0])
						)
							this.S(a).removeAttr(this.invalid_attr),
								a.setAttribute("aria-invalid", "false"),
								a.removeAttribute("aria-describedby"),
								s.removeClass("error"),
								p.length > 0 &&
									this.settings.error_labels &&
									p.removeClass("error").removeAttr("role"),
								t(a).triggerHandler("valid");
						else {
							this.S(a).attr(this.invalid_attr, ""),
								a.setAttribute("aria-invalid", "true");
							var m = s.find("small.error, span.error"),
								v = m.length > 0 ? m[0].id : "";
							v.length > 0 && a.setAttribute("aria-describedby", v),
								s.addClass("error"),
								p.length > 0 &&
									this.settings.error_labels &&
									p.addClass("error").attr("role", "alert"),
								t(a).triggerHandler("invalid");
						}
						n.push(g[0]);
					}
				}
				return (n = [
					n.every(function (t) {
						return t;
					}),
				]);
			},
			valid_checkbox: function (t, e) {
				var i = (t = this.S(t)).is(":checked") || !e;
				return (
					i
						? t.removeAttr(this.invalid_attr).parent().removeClass("error")
						: t.attr(this.invalid_attr, "").parent().addClass("error"),
					i
				);
			},
			valid_radio: function (t, e) {
				for (
					var i = t.getAttribute("name"),
						n = this.S(t)
							.closest("[data-" + this.attr_name(!0) + "]")
							.find("[name='" + i + "']"),
						s = n.length,
						o = !1,
						a = 0;
					a < s;
					a++
				)
					n[a].checked && (o = !0);
				for (a = 0; a < s; a++)
					o
						? this.S(n[a])
								.removeAttr(this.invalid_attr)
								.parent()
								.removeClass("error")
						: this.S(n[a])
								.attr(this.invalid_attr, "")
								.parent()
								.addClass("error");
				return o;
			},
			valid_equal: function (t, e, n) {
				var s =
					i.getElementById(t.getAttribute(this.add_namespace("data-equalto")))
						.value === t.value;
				return (
					s
						? (this.S(t).removeAttr(this.invalid_attr),
						  n.removeClass("error"),
						  label.length > 0 &&
								settings.error_labels &&
								label.removeClass("error"))
						: (this.S(t).attr(this.invalid_attr, ""),
						  n.addClass("error"),
						  label.length > 0 &&
								settings.error_labels &&
								label.addClass("error")),
					s
				);
			},
			valid_oneof: function (t, e, i, n) {
				t = this.S(t);
				var s = this.S("[" + this.add_namespace("data-oneof") + "]"),
					o = s.filter(":checked").length > 0;
				if (
					(o
						? t.removeAttr(this.invalid_attr).parent().removeClass("error")
						: t.attr(this.invalid_attr, "").parent().addClass("error"),
					!n)
				) {
					var a = this;
					s.each(function () {
						a.valid_oneof.call(a, this, null, null, !0);
					});
				}
				return o;
			},
		};
	})(jQuery, window, window.document),
	(function (t, e, i, n) {
		"use strict";
		Foundation.libs.tooltip = {
			name: "tooltip",
			version: "5.4.5",
			settings: {
				additional_inheritable_classes: [],
				tooltip_class: ".tooltip",
				append_to: "body",
				touch_close_text: "Tap To Close",
				disable_for_touch: !1,
				hover_delay: 200,
				show_on: "all",
				tip_template: function (t, e) {
					return (
						'<span data-selector="' +
						t +
						'" id="' +
						t +
						'" class="' +
						Foundation.libs.tooltip.settings.tooltip_class.substring(1) +
						'" role="tooltip">' +
						e +
						'<span class="nub"></span></span>'
					);
				},
			},
			cache: {},
			init: function (t, e, i) {
				Foundation.inherit(this, "random_str"), this.bindings(e, i);
			},
			should_show: function (e, i) {
				var n = t.extend({}, this.settings, this.data_options(e));
				return (
					"all" === n.show_on ||
					!(!this.small() || "small" !== n.show_on) ||
					!(!this.medium() || "medium" !== n.show_on) ||
					!(!this.large() || "large" !== n.show_on)
				);
			},
			medium: function () {
				return matchMedia(Foundation.media_queries.medium).matches;
			},
			large: function () {
				return matchMedia(Foundation.media_queries.large).matches;
			},
			events: function (e) {
				var i = this,
					n = i.S;
				i.create(this.S(e)),
					t(this.scope)
						.off(".tooltip")
						.on(
							"mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
							"[" + this.attr_name() + "]",
							function (e) {
								var s = n(this),
									o = t.extend({}, i.settings, i.data_options(s));
								if (
									Modernizr.touch &&
									/touchstart|MSPointerDown/i.test(e.type) &&
									n(e.target).is("a")
								)
									return !1;
								if (/mouse/i.test(e.type) && i.ie_touch(e)) return !1;
								if (s.hasClass("open"))
									Modernizr.touch &&
										/touchstart|MSPointerDown/i.test(e.type) &&
										e.preventDefault(),
										i.hide(s);
								else {
									if (
										o.disable_for_touch &&
										Modernizr.touch &&
										/touchstart|MSPointerDown/i.test(e.type)
									)
										return;
									!o.disable_for_touch &&
										Modernizr.touch &&
										/touchstart|MSPointerDown/i.test(e.type) &&
										(e.preventDefault(),
										n(o.tooltip_class + ".open").hide(),
										!0),
										/enter|over/i.test(e.type)
											? (this.timer = setTimeout(
													function () {
														i.showTip(s);
													}.bind(this),
													i.settings.hover_delay
											  ))
											: "mouseout" === e.type || "mouseleave" === e.type
											? (clearTimeout(this.timer), i.hide(s))
											: i.showTip(s);
								}
							}
						)
						.on(
							"mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
							"[" + this.attr_name() + "].open",
							function (e) {
								if (/mouse/i.test(e.type) && i.ie_touch(e)) return !1;
								("touch" == t(this).data("tooltip-open-event-type") &&
									"mouseleave" == e.type) ||
									("mouse" == t(this).data("tooltip-open-event-type") &&
									/MSPointerDown|touchstart/i.test(e.type)
										? i.convert_to_touch(t(this))
										: i.hide(t(this)));
							}
						)
						.on(
							"DOMNodeRemoved DOMAttrModified",
							"[" + this.attr_name() + "]:not(a)",
							function (t) {
								i.hide(n(this));
							}
						);
			},
			ie_touch: function (t) {
				return !1;
			},
			showTip: function (t) {
				var e = this.getTip(t);
				if (this.should_show(t, e)) return this.show(t);
			},
			getTip: function (e) {
				var i = this.selector(e),
					n = t.extend({}, this.settings, this.data_options(e)),
					s = null;
				return (
					i &&
						(s = this.S('span[data-selector="' + i + '"]' + n.tooltip_class)),
					"object" == typeof s && s
				);
			},
			selector: function (t) {
				var e = t.attr("id"),
					i = t.attr(this.attr_name()) || t.attr("data-selector");
				return (
					((e && e.length < 1) || !e) &&
						"string" != typeof i &&
						((i = this.random_str(6)),
						t.attr("data-selector", i).attr("aria-describedby", i)),
					e && e.length > 0 ? e : i
				);
			},
			create: function (i) {
				var n = this,
					s = t.extend({}, this.settings, this.data_options(i)),
					o = this.settings.tip_template;
				"string" == typeof s.tip_template &&
					e.hasOwnProperty(s.tip_template) &&
					(o = e[s.tip_template]);
				var a = t(
						o(this.selector(i), t("<div></div>").html(i.attr("title")).html())
					),
					r = this.inheritable_classes(i);
				a.addClass(r).appendTo(s.append_to),
					Modernizr.touch &&
						(a.append(
							'<span class="tap-to-close">' + s.touch_close_text + "</span>"
						),
						a.on(
							"touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
							function (t) {
								n.hide(i);
							}
						)),
					i.removeAttr("title").attr("title", "");
			},
			reposition: function (e, i, n) {
				var s, o, a, r;
				if (
					(i.css("visibility", "hidden").show(),
					(s = e.data("width")),
					(a = (o = i.children(".nub")).outerHeight()),
					o.outerHeight(),
					this.small()
						? i.css({ width: "100%" })
						: i.css({ width: s || "auto" }),
					(r = function (t, e, i, n, s, o) {
						return t
							.css({
								top: e || "auto",
								bottom: n || "auto",
								left: s || "auto",
								right: i || "auto",
							})
							.end();
					})(
						i,
						e.offset().top + e.outerHeight() + 10,
						"auto",
						"auto",
						e.offset().left
					),
					this.small())
				)
					r(
						i,
						e.offset().top + e.outerHeight() + 10,
						"auto",
						"auto",
						12.5,
						t(this.scope).width()
					),
						i.addClass("tip-override"),
						r(o, -a, "auto", "auto", e.offset().left);
				else {
					var l = e.offset().left;
					Foundation.rtl &&
						(o.addClass("rtl"),
						(l = e.offset().left + e.outerWidth() - i.outerWidth())),
						r(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", l),
						i.removeClass("tip-override"),
						n && n.indexOf("tip-top") > -1
							? (Foundation.rtl && o.addClass("rtl"),
							  r(
									i,
									e.offset().top - i.outerHeight(),
									"auto",
									"auto",
									l
							  ).removeClass("tip-override"))
							: n && n.indexOf("tip-left") > -1
							? (r(
									i,
									e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2,
									"auto",
									"auto",
									e.offset().left - i.outerWidth() - a
							  ).removeClass("tip-override"),
							  o.removeClass("rtl"))
							: n &&
							  n.indexOf("tip-right") > -1 &&
							  (r(
									i,
									e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2,
									"auto",
									"auto",
									e.offset().left + e.outerWidth() + a
							  ).removeClass("tip-override"),
							  o.removeClass("rtl"));
				}
				i.css("visibility", "visible").hide();
			},
			small: function () {
				return (
					matchMedia(Foundation.media_queries.small).matches &&
					!matchMedia(Foundation.media_queries.medium).matches
				);
			},
			inheritable_classes: function (e) {
				var i = t.extend({}, this.settings, this.data_options(e)),
					n = [
						"tip-top",
						"tip-left",
						"tip-bottom",
						"tip-right",
						"radius",
						"round",
					].concat(i.additional_inheritable_classes),
					s = e.attr("class"),
					o = s
						? t
								.map(s.split(" "), function (e, i) {
									if (-1 !== t.inArray(e, n)) return e;
								})
								.join(" ")
						: "";
				return t.trim(o);
			},
			convert_to_touch: function (e) {
				var i = this,
					n = i.getTip(e),
					s = t.extend({}, i.settings, i.data_options(e));
				0 === n.find(".tap-to-close").length &&
					(n.append(
						'<span class="tap-to-close">' + s.touch_close_text + "</span>"
					),
					n.on(
						"click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",
						function (t) {
							i.hide(e);
						}
					)),
					e.data("tooltip-open-event-type", "touch");
			},
			show: function (t) {
				var e = this.getTip(t);
				"touch" == t.data("tooltip-open-event-type") &&
					this.convert_to_touch(t),
					this.reposition(t, e, t.attr("class")),
					t.addClass("open"),
					e.fadeIn(150);
			},
			hide: function (t) {
				var e = this.getTip(t);
				e.fadeOut(150, function () {
					e.find(".tap-to-close").remove(),
						e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),
						t.removeClass("open");
				});
			},
			off: function () {
				var e = this;
				this.S(this.scope).off(".fndtn.tooltip"),
					this.S(this.settings.tooltip_class)
						.each(function (i) {
							t("[" + e.attr_name() + "]")
								.eq(i)
								.attr("title", t(this).text());
						})
						.remove();
			},
			reflow: function () {},
		};
	})(jQuery, window, window.document),
	(window.Modernizr = (function (t, e, i) {
		function n(t) {
			g.cssText = t;
		}
		function s(t, e) {
			return typeof t === e;
		}
		function o(t, e) {
			return !!~("" + t).indexOf(e);
		}
		function a(t, e) {
			for (var n in t) {
				var s = t[n];
				if (!o(s, "-") && g[s] !== i) return "pfx" != e || s;
			}
			return !1;
		}
		function r(t, e, n) {
			for (var o in t) {
				var a = e[t[o]];
				if (a !== i)
					return !1 === n ? t[o] : s(a, "function") ? a.bind(n || e) : a;
			}
			return !1;
		}
		function l(t, e, i) {
			var n = t.charAt(0).toUpperCase() + t.slice(1),
				o = (t + " " + w.join(n + " ") + n).split(" ");
			return s(e, "string") || s(e, "undefined")
				? a(o, e)
				: r((o = (t + " " + x.join(n + " ") + n).split(" ")), e, i);
		}
		var h,
			c,
			u = {},
			d = e.documentElement,
			p = "modernizr",
			f = e.createElement(p),
			g = f.style,
			m = e.createElement("input"),
			v = ":)",
			_ = {}.toString,
			b = " -webkit- -moz- -o- -ms- ".split(" "),
			y = "Webkit Moz O ms",
			w = y.split(" "),
			x = y.toLowerCase().split(" "),
			C = "http://www.w3.org/2000/svg",
			k = {},
			T = {},
			D = {},
			S = [],
			E = S.slice,
			I = function (t, i, n, s) {
				var o,
					a,
					r,
					l,
					h = e.createElement("div"),
					c = e.body,
					u = c || e.createElement("body");
				if (parseInt(n, 10))
					for (; n--; )
						((r = e.createElement("div")).id = s ? s[n] : p + (n + 1)),
							h.appendChild(r);
				return (
					(o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join("")),
					(h.id = p),
					((c ? h : u).innerHTML += o),
					u.appendChild(h),
					c ||
						((u.style.background = ""),
						(u.style.overflow = "hidden"),
						(l = d.style.overflow),
						(d.style.overflow = "hidden"),
						d.appendChild(u)),
					(a = i(h, t)),
					c
						? h.parentNode.removeChild(h)
						: (u.parentNode.removeChild(u), (d.style.overflow = l)),
					!!a
				);
			},
			A = (function () {
				var t = {
					select: "input",
					change: "input",
					submit: "form",
					reset: "form",
					error: "img",
					load: "img",
					abort: "img",
				};
				return function (n, o) {
					o = o || e.createElement(t[n] || "div");
					var a = (n = "on" + n) in o;
					return (
						a ||
							(o.setAttribute || (o = e.createElement("div")),
							o.setAttribute &&
								o.removeAttribute &&
								(o.setAttribute(n, ""),
								(a = s(o[n], "function")),
								s(o[n], "undefined") || (o[n] = i),
								o.removeAttribute(n))),
						(o = null),
						a
					);
				};
			})(),
			P = {}.hasOwnProperty;
		for (var O in ((c =
			s(P, "undefined") || s(P.call, "undefined")
				? function (t, e) {
						return e in t && s(t.constructor.prototype[e], "undefined");
				  }
				: function (t, e) {
						return P.call(t, e);
				  }),
		Function.prototype.bind ||
			(Function.prototype.bind = function (t) {
				var e = this;
				if ("function" != typeof e) throw new TypeError();
				var i = E.call(arguments, 1),
					n = function () {
						if (this instanceof n) {
							var s = function () {};
							s.prototype = e.prototype;
							var o = new s(),
								a = e.apply(o, i.concat(E.call(arguments)));
							return Object(a) === a ? a : o;
						}
						return e.apply(t, i.concat(E.call(arguments)));
					};
				return n;
			}),
		(k.flexbox = function () {
			return l("flexWrap");
		}),
		(k.flexboxlegacy = function () {
			return l("boxDirection");
		}),
		(k.canvas = function () {
			var t = e.createElement("canvas");
			return !(!t.getContext || !t.getContext("2d"));
		}),
		(k.canvastext = function () {
			return !(
				!u.canvas ||
				!s(e.createElement("canvas").getContext("2d").fillText, "function")
			);
		}),
		(k.webgl = function () {
			return !!t.WebGLRenderingContext;
		}),
		(k.touch = function () {
			var i;
			return (
				"ontouchstart" in t || (t.DocumentTouch && e instanceof DocumentTouch)
					? (i = !0)
					: I(
							[
								"@media (",
								b.join("touch-enabled),("),
								p,
								")",
								"{#modernizr{top:9px;position:absolute}}",
							].join(""),
							function (t) {
								i = 9 === t.offsetTop;
							}
					  ),
				i
			);
		}),
		(k.geolocation = function () {
			return "geolocation" in navigator;
		}),
		(k.postmessage = function () {
			return !!t.postMessage;
		}),
		(k.websqldatabase = function () {
			return !!t.openDatabase;
		}),
		(k.indexedDB = function () {
			return !!l("indexedDB", t);
		}),
		(k.hashchange = function () {
			return A("hashchange", t) && (e.documentMode === i || e.documentMode > 7);
		}),
		(k.history = function () {
			return !(!t.history || !history.pushState);
		}),
		(k.draganddrop = function () {
			var t = e.createElement("div");
			return "draggable" in t || ("ondragstart" in t && "ondrop" in t);
		}),
		(k.websockets = function () {
			return "WebSocket" in t || "MozWebSocket" in t;
		}),
		(k.rgba = function () {
			return (
				n("background-color:rgba(150,255,150,.5)"), o(g.backgroundColor, "rgba")
			);
		}),
		(k.hsla = function () {
			return (
				n("background-color:hsla(120,40%,100%,.5)"),
				o(g.backgroundColor, "rgba") || o(g.backgroundColor, "hsla")
			);
		}),
		(k.multiplebgs = function () {
			return (
				n("background:url(https://),url(https://),red url(https://)"),
				/(url\s*\(.*?){3}/.test(g.background)
			);
		}),
		(k.backgroundsize = function () {
			return l("backgroundSize");
		}),
		(k.borderimage = function () {
			return l("borderImage");
		}),
		(k.borderradius = function () {
			return l("borderRadius");
		}),
		(k.boxshadow = function () {
			return l("boxShadow");
		}),
		(k.textshadow = function () {
			return "" === e.createElement("div").style.textShadow;
		}),
		(k.opacity = function () {
			return (
				(t = "opacity:.55"),
				n(b.join(t + ";") + (e || "")),
				/^0.55$/.test(g.opacity)
			);
			var t, e;
		}),
		(k.cssanimations = function () {
			return l("animationName");
		}),
		(k.csscolumns = function () {
			return l("columnCount");
		}),
		(k.cssgradients = function () {
			var t = "background-image:";
			return (
				n(
					(
						t +
						"-webkit- "
							.split(" ")
							.join(
								"gradient(linear,left top,right bottom,from(#9f9),to(white));" +
									t
							) +
						b.join("linear-gradient(left top,#9f9, white);" + t)
					).slice(0, -t.length)
				),
				o(g.backgroundImage, "gradient")
			);
		}),
		(k.cssreflections = function () {
			return l("boxReflect");
		}),
		(k.csstransforms = function () {
			return !!l("transform");
		}),
		(k.csstransforms3d = function () {
			var t = !!l("perspective");
			return (
				t &&
					"webkitPerspective" in d.style &&
					I(
						"@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
						function (e) {
							t = 9 === e.offsetLeft && 3 === e.offsetHeight;
						}
					),
				t
			);
		}),
		(k.csstransitions = function () {
			return l("transition");
		}),
		(k.fontface = function () {
			var t;
			return (
				I(
					'@font-face {font-family:"font";src:url("https://")}',
					function (i, n) {
						var s = e.getElementById("smodernizr"),
							o = s.sheet || s.styleSheet,
							a = o
								? o.cssRules && o.cssRules[0]
									? o.cssRules[0].cssText
									: o.cssText || ""
								: "";
						t = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0]);
					}
				),
				t
			);
		}),
		(k.generatedcontent = function () {
			var t;
			return (
				I(
					[
						"#",
						p,
						"{font:0/0 a}#",
						p,
						':after{content:"',
						v,
						'";visibility:hidden;font:3px/1 a}',
					].join(""),
					function (e) {
						t = e.offsetHeight >= 3;
					}
				),
				t
			);
		}),
		(k.video = function () {
			var t = e.createElement("video"),
				i = !1;
			try {
				(i = !!t.canPlayType) &&
					(((i = new Boolean(i)).ogg = t
						.canPlayType('video/ogg; codecs="theora"')
						.replace(/^no$/, "")),
					(i.h264 = t
						.canPlayType('video/mp4; codecs="avc1.42E01E"')
						.replace(/^no$/, "")),
					(i.webm = t
						.canPlayType('video/webm; codecs="vp8, vorbis"')
						.replace(/^no$/, "")));
			} catch (t) {}
			return i;
		}),
		(k.audio = function () {
			var t = e.createElement("audio"),
				i = !1;
			try {
				(i = !!t.canPlayType) &&
					(((i = new Boolean(i)).ogg = t
						.canPlayType('audio/ogg; codecs="vorbis"')
						.replace(/^no$/, "")),
					(i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, "")),
					(i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
					(i.m4a = (
						t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")
					).replace(/^no$/, "")));
			} catch (t) {}
			return i;
		}),
		(k.localstorage = function () {
			try {
				return localStorage.setItem(p, p), localStorage.removeItem(p), !0;
			} catch (t) {
				return !1;
			}
		}),
		(k.sessionstorage = function () {
			try {
				return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0;
			} catch (t) {
				return !1;
			}
		}),
		(k.webworkers = function () {
			return !!t.Worker;
		}),
		(k.applicationcache = function () {
			return !!t.applicationCache;
		}),
		(k.svg = function () {
			return !!e.createElementNS && !!e.createElementNS(C, "svg").createSVGRect;
		}),
		(k.inlinesvg = function () {
			var t = e.createElement("div");
			return (
				(t.innerHTML = "<svg/>"),
				(t.firstChild && t.firstChild.namespaceURI) == C
			);
		}),
		(k.smil = function () {
			return (
				!!e.createElementNS &&
				/SVGAnimate/.test(_.call(e.createElementNS(C, "animate")))
			);
		}),
		(k.svgclippaths = function () {
			return (
				!!e.createElementNS &&
				/SVGClipPath/.test(_.call(e.createElementNS(C, "clipPath")))
			);
		}),
		k))
			c(k, O) &&
				((h = O.toLowerCase()),
				(u[h] = k[O]()),
				S.push((u[h] ? "" : "no-") + h));
		return (
			u.input ||
				((u.input = (function (i) {
					for (var n = 0, s = i.length; s > n; n++) D[i[n]] = !!(i[n] in m);
					return (
						D.list &&
							(D.list = !(
								!e.createElement("datalist") || !t.HTMLDataListElement
							)),
						D
					);
				})(
					"autocomplete autofocus list placeholder max min multiple pattern required step".split(
						" "
					)
				)),
				(u.inputtypes = (function (t) {
					for (var n, s, o, a = 0, r = t.length; r > a; a++)
						m.setAttribute("type", (s = t[a])),
							(n = "text" !== m.type) &&
								((m.value = v),
								(m.style.cssText = "position:absolute;visibility:hidden;"),
								/^range$/.test(s) && m.style.WebkitAppearance !== i
									? (d.appendChild(m),
									  (n =
											(o = e.defaultView).getComputedStyle &&
											"textfield" !==
												o.getComputedStyle(m, null).WebkitAppearance &&
											0 !== m.offsetHeight),
									  d.removeChild(m))
									: /^(search|tel)$/.test(s) ||
									  (n = /^(url|email)$/.test(s)
											? m.checkValidity && !1 === m.checkValidity()
											: m.value != v)),
							(T[t[a]] = !!n);
					return T;
				})(
					"search tel url email datetime date month week time datetime-local number range color".split(
						" "
					)
				))),
			(u.addTest = function (t, e) {
				if ("object" == typeof t)
					for (var n in t) c(t, n) && u.addTest(n, t[n]);
				else {
					if (((t = t.toLowerCase()), u[t] !== i)) return u;
					(e = "function" == typeof e ? e() : e),
						(d.className += " " + (e ? "" : "no-") + t),
						(u[t] = e);
				}
				return u;
			}),
			n(""),
			(f = m = null),
			(function (t, e) {
				function i() {
					var t = g.elements;
					return "string" == typeof t ? t.split(" ") : t;
				}
				function n(t) {
					var e = f[t[d]];
					return e || ((e = {}), p++, (t[d] = p), (f[p] = e)), e;
				}
				function s(t, i, s) {
					return (
						i || (i = e),
						l
							? i.createElement(t)
							: (s || (s = n(i)),
							  !(o = s.cache[t]
									? s.cache[t].cloneNode()
									: u.test(t)
									? (s.cache[t] = s.createElem(t)).cloneNode()
									: s.createElem(t)).canHaveChildren ||
							  c.test(t) ||
							  o.tagUrn
									? o
									: s.frag.appendChild(o))
					);
					var o;
				}
				function o(t, e) {
					e.cache ||
						((e.cache = {}),
						(e.createElem = t.createElement),
						(e.createFrag = t.createDocumentFragment),
						(e.frag = e.createFrag())),
						(t.createElement = function (i) {
							return g.shivMethods ? s(i, t, e) : e.createElem(i);
						}),
						(t.createDocumentFragment = Function(
							"h,f",
							"return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
								i()
									.join()
									.replace(/[\w\-]+/g, function (t) {
										return (
											e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
										);
									}) +
								");return n}"
						)(g, e.frag));
				}
				function a(t) {
					t || (t = e);
					var i = n(t);
					return (
						!g.shivCSS ||
							r ||
							i.hasCSS ||
							(i.hasCSS = !!(function (t, e) {
								var i = t.createElement("p"),
									n = t.getElementsByTagName("head")[0] || t.documentElement;
								return (
									(i.innerHTML = "x<style>" + e + "</style>"),
									n.insertBefore(i.lastChild, n.firstChild)
								);
							})(
								t,
								"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
							)),
						l || o(t, i),
						t
					);
				}
				var r,
					l,
					h = t.html5 || {},
					c =
						/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					u =
						/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					d = "_html5shiv",
					p = 0,
					f = {};
				!(function () {
					try {
						var t = e.createElement("a");
						(t.innerHTML = "<xyz></xyz>"),
							(r = "hidden" in t),
							(l =
								1 == t.childNodes.length ||
								(function () {
									e.createElement("a");
									var t = e.createDocumentFragment();
									return (
										void 0 === t.cloneNode ||
										void 0 === t.createDocumentFragment ||
										void 0 === t.createElement
									);
								})());
					} catch (t) {
						(r = !0), (l = !0);
					}
				})();
				var g = {
					elements:
						h.elements ||
						"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
					version: "3.7.0",
					shivCSS: !1 !== h.shivCSS,
					supportsUnknownElements: l,
					shivMethods: !1 !== h.shivMethods,
					type: "default",
					shivDocument: a,
					createElement: s,
					createDocumentFragment: function (t, s) {
						if ((t || (t = e), l)) return t.createDocumentFragment();
						for (
							var o = (s = s || n(t)).frag.cloneNode(),
								a = 0,
								r = i(),
								h = r.length;
							h > a;
							a++
						)
							o.createElement(r[a]);
						return o;
					},
				};
				(t.html5 = g), a(e);
			})(this, e),
			(u._version = "2.8.3"),
			(u._prefixes = b),
			(u._domPrefixes = x),
			(u._cssomPrefixes = w),
			(u.mq = function (e) {
				var i,
					n = t.matchMedia || t.msMatchMedia;
				return n
					? (n(e) && n(e).matches) || !1
					: (I(
							"@media " + e + " { #" + p + " { position: absolute; } }",
							function (e) {
								i =
									"absolute" ==
									(t.getComputedStyle
										? getComputedStyle(e, null)
										: e.currentStyle
									).position;
							}
					  ),
					  i);
			}),
			(u.hasEvent = A),
			(u.testProp = function (t) {
				return a([t]);
			}),
			(u.testAllProps = l),
			(u.testStyles = I),
			(u.prefixed = function (t, e, i) {
				return e ? l(t, e, i) : l(t, "pfx");
			}),
			(d.className =
				d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
				" js " +
				S.join(" ")),
			u
		);
	})(this, this.document)),
	(function (t) {
		t.widget("ui.tagit", {
			options: {
				allowDuplicates: !1,
				caseSensitive: !0,
				fieldName: "tags",
				placeholderText: null,
				readOnly: !1,
				removeConfirmation: !1,
				tagLimit: null,
				availableTags: [],
				autocomplete: {},
				showAutocompleteOnFocus: !1,
				allowSpaces: !1,
				singleField: !1,
				singleFieldDelimiter: ",",
				singleFieldNode: null,
				animate: !0,
				tabIndex: null,
				beforeTagAdded: null,
				afterTagAdded: null,
				beforeTagRemoved: null,
				afterTagRemoved: null,
				onTagClicked: null,
				onTagLimitExceeded: null,
				onTagAdded: null,
				onTagRemoved: null,
				tagSource: null,
			},
			_create: function () {
				var e = this;
				this.element.is("input")
					? ((this.tagList = t("<ul></ul>").insertAfter(this.element)),
					  (this.options.singleField = !0),
					  (this.options.singleFieldNode = this.element),
					  this.element.addClass("tagit-hidden-field"))
					: (this.tagList = this.element.find("ul, ol").andSelf().last()),
					(this.tagInput = t('<input type="text" />').addClass(
						"ui-widget-content"
					)),
					this.options.readOnly && this.tagInput.attr("disabled", "disabled"),
					this.options.tabIndex &&
						this.tagInput.attr("tabindex", this.options.tabIndex),
					this.options.placeholderText &&
						this.tagInput.attr("placeholder", this.options.placeholderText),
					this.options.autocomplete.source ||
						(this.options.autocomplete.source = function (e, i) {
							var n = e.term.toLowerCase(),
								s = t.grep(this.options.availableTags, function (t) {
									return 0 === t.toLowerCase().indexOf(n);
								});
							this.options.allowDuplicates ||
								(s = this._subtractArray(s, this.assignedTags())),
								i(s);
						}),
					this.options.showAutocompleteOnFocus &&
						(this.tagInput.focus(function (t, i) {
							e._showAutocomplete();
						}),
						void 0 === this.options.autocomplete.minLength &&
							(this.options.autocomplete.minLength = 0)),
					t.isFunction(this.options.autocomplete.source) &&
						(this.options.autocomplete.source = t.proxy(
							this.options.autocomplete.source,
							this
						)),
					t.isFunction(this.options.tagSource) &&
						(this.options.tagSource = t.proxy(this.options.tagSource, this)),
					this.tagList
						.addClass("tagit")
						.addClass("ui-widget ui-widget-content ui-corner-all")
						.append(t('<li class="tagit-new"></li>').append(this.tagInput))
						.click(function (i) {
							var n = t(i.target);
							n.hasClass("tagit-label")
								? (n = n.closest(".tagit-choice")).hasClass("removed") ||
								  e._trigger("onTagClicked", i, {
										tag: n,
										tagLabel: e.tagLabel(n),
								  })
								: e.tagInput.focus();
						});
				var i = !1;
				if (this.options.singleField)
					if (this.options.singleFieldNode) {
						var n = t(this.options.singleFieldNode),
							s = n.val().split(this.options.singleFieldDelimiter);
						n.val(""),
							t.each(s, function (t, n) {
								e.createTag(n, null, !0), (i = !0);
							});
					} else
						(this.options.singleFieldNode = t(
							'<input type="hidden" style="display:none;" value="" name="' +
								this.options.fieldName +
								'" />'
						)),
							this.tagList.after(this.options.singleFieldNode);
				i ||
					this.tagList.children("li").each(function () {
						t(this).hasClass("tagit-new") ||
							(e.createTag(t(this).text(), t(this).attr("class"), !0),
							t(this).remove());
					}),
					this.tagInput
						.keydown(function (i) {
							if (
								i.which == t.ui.keyCode.BACKSPACE &&
								"" === e.tagInput.val()
							) {
								var n = e._lastTag();
								!e.options.removeConfirmation || n.hasClass("remove")
									? e.removeTag(n)
									: e.options.removeConfirmation &&
									  n.addClass("remove ui-state-highlight");
							} else e.options.removeConfirmation && e._lastTag().removeClass("remove ui-state-highlight");
							((i.which === t.ui.keyCode.COMMA && !1 === i.shiftKey) ||
								i.which === t.ui.keyCode.ENTER ||
								(i.which == t.ui.keyCode.TAB && "" !== e.tagInput.val()) ||
								(i.which == t.ui.keyCode.SPACE &&
									!0 !== e.options.allowSpaces &&
									('"' !=
										t.trim(e.tagInput.val()).replace(/^s*/, "").charAt(0) ||
										('"' == t.trim(e.tagInput.val()).charAt(0) &&
											'"' ==
												t
													.trim(e.tagInput.val())
													.charAt(t.trim(e.tagInput.val()).length - 1) &&
											0 != t.trim(e.tagInput.val()).length - 1)))) &&
								((i.which === t.ui.keyCode.ENTER && "" === e.tagInput.val()) ||
									i.preventDefault(),
								(e.options.autocomplete.autoFocus &&
									e.tagInput.data("autocomplete-open")) ||
									(e.tagInput.autocomplete("close"),
									e.createTag(e._cleanedInput())));
						})
						.blur(function (t) {
							e.tagInput.data("autocomplete-open") ||
								e.createTag(e._cleanedInput());
						}),
					(this.options.availableTags ||
						this.options.tagSource ||
						this.options.autocomplete.source) &&
						((n = {
							select: function (t, i) {
								return e.createTag(i.item.value), !1;
							},
						}),
						t.extend(n, this.options.autocomplete),
						(n.source = this.options.tagSource || n.source),
						this.tagInput
							.autocomplete(n)
							.bind("autocompleteopen.tagit", function (t, i) {
								e.tagInput.data("autocomplete-open", !0);
							})
							.bind("autocompleteclose.tagit", function (t, i) {
								e.tagInput.data("autocomplete-open", !1);
							}),
						this.tagInput
							.autocomplete("widget")
							.addClass("tagit-autocomplete"));
			},
			destroy: function () {
				return (
					t.Widget.prototype.destroy.call(this),
					this.element.unbind(".tagit"),
					this.tagList.unbind(".tagit"),
					this.tagInput.removeData("autocomplete-open"),
					this.tagList.removeClass(
						"tagit ui-widget ui-widget-content ui-corner-all tagit-hidden-field"
					),
					this.element.is("input")
						? (this.element.removeClass("tagit-hidden-field"),
						  this.tagList.remove())
						: (this.element.children("li").each(function () {
								t(this).hasClass("tagit-new")
									? t(this).remove()
									: (t(this).removeClass(
											"tagit-choice ui-widget-content ui-state-default ui-state-highlight ui-corner-all remove tagit-choice-editable tagit-choice-read-only"
									  ),
									  t(this).text(t(this).children(".tagit-label").text()));
						  }),
						  this.singleFieldNode && this.singleFieldNode.remove()),
					this
				);
			},
			_cleanedInput: function () {
				return t.trim(this.tagInput.val().replace(/^"(.*)"$/, "$1"));
			},
			_lastTag: function () {
				return this.tagList.find(".tagit-choice:last:not(.removed)");
			},
			_tags: function () {
				return this.tagList.find(".tagit-choice:not(.removed)");
			},
			assignedTags: function () {
				var e = this,
					i = [];
				return (
					this.options.singleField
						? "" ===
								(i = t(this.options.singleFieldNode)
									.val()
									.split(this.options.singleFieldDelimiter))[0] && (i = [])
						: this._tags().each(function () {
								i.push(e.tagLabel(this));
						  }),
					i
				);
			},
			_updateSingleTagsField: function (e) {
				t(this.options.singleFieldNode)
					.val(e.join(this.options.singleFieldDelimiter))
					.trigger("change");
			},
			_subtractArray: function (e, i) {
				for (var n = [], s = 0; s < e.length; s++)
					-1 == t.inArray(e[s], i) && n.push(e[s]);
				return n;
			},
			tagLabel: function (e) {
				return this.options.singleField
					? t(e).find(".tagit-label:first").text()
					: t(e).find("input:first").val();
			},
			_showAutocomplete: function () {
				this.tagInput.autocomplete("search", "");
			},
			_findTagByLabel: function (e) {
				var i = this,
					n = null;
				return (
					this._tags().each(function (s) {
						if (i._formatStr(e) == i._formatStr(i.tagLabel(this)))
							return (n = t(this)), !1;
					}),
					n
				);
			},
			_isNew: function (t) {
				return !this._findTagByLabel(t);
			},
			_formatStr: function (e) {
				return this.options.caseSensitive ? e : t.trim(e.toLowerCase());
			},
			_effectExists: function (e) {
				return Boolean(
					t.effects &&
						(t.effects[e] || (t.effects.effect && t.effects.effect[e]))
				);
			},
			createTag: function (e, i, n) {
				var s = this;
				if (
					((e = t.trim(e)),
					this.options.preprocessTag && (e = this.options.preprocessTag(e)),
					"" === e)
				)
					return !1;
				if (!this.options.allowDuplicates && !this._isNew(e))
					return (
						(e = this._findTagByLabel(e)),
						!1 !==
							this._trigger("onTagExists", null, {
								existingTag: e,
								duringInitialization: n,
							}) &&
							this._effectExists("highlight") &&
							e.effect("highlight"),
						!1
					);
				if (
					this.options.tagLimit &&
					this._tags().length >= this.options.tagLimit
				)
					return (
						this._trigger("onTagLimitExceeded", null, {
							duringInitialization: n,
						}),
						!1
					);
				var o = t(
						this.options.onTagClicked
							? '<a class="tagit-label"></a>'
							: '<span class="tagit-label"></span>'
					).text(e),
					a = t("<li></li>")
						.addClass(
							"tagit-choice ui-widget-content ui-state-default ui-corner-all"
						)
						.addClass(i)
						.append(o);
				this.options.readOnly
					? a.addClass("tagit-choice-read-only")
					: (a.addClass("tagit-choice-editable"),
					  (i = t("<span></span>").addClass("ui-icon ui-icon-close")),
					  (i = t('<a><span class="text-icon">Ã—</span></a>')
							.addClass("tagit-close")
							.append(i)
							.click(function (t) {
								s.removeTag(a);
							})),
					  a.append(i)),
					this.options.singleField ||
						((o = o.html()),
						a.append(
							'<input type="hidden" value="' +
								o +
								'" name="' +
								this.options.fieldName +
								'" class="tagit-hidden-field" />'
						)),
					!1 !==
						this._trigger("beforeTagAdded", null, {
							tag: a,
							tagLabel: this.tagLabel(a),
							duringInitialization: n,
						}) &&
						(this.options.singleField &&
							((o = this.assignedTags()).push(e),
							this._updateSingleTagsField(o)),
						this._trigger("onTagAdded", null, a),
						this.tagInput.val(""),
						this.tagInput.parent().before(a),
						this._trigger("afterTagAdded", null, {
							tag: a,
							tagLabel: this.tagLabel(a),
							duringInitialization: n,
						}),
						this.options.showAutocompleteOnFocus &&
							!n &&
							setTimeout(function () {
								s._showAutocomplete();
							}, 0));
			},
			removeTag: function (e, i) {
				if (
					((i = void 0 === i ? this.options.animate : i),
					(e = t(e)),
					this._trigger("onTagRemoved", null, e),
					!1 !==
						this._trigger("beforeTagRemoved", null, {
							tag: e,
							tagLabel: this.tagLabel(e),
						}))
				) {
					if (this.options.singleField) {
						var n = this.assignedTags(),
							s = this.tagLabel(e);
						n = t.grep(n, function (t) {
							return t != s;
						});
						this._updateSingleTagsField(n);
					}
					if (i) {
						e.addClass("removed");
						n = this._effectExists("blind")
							? ["blind", { direction: "horizontal" }, "fast"]
							: ["fast"];
						var o = this;
						n.push(function () {
							e.remove(),
								o._trigger("afterTagRemoved", null, {
									tag: e,
									tagLabel: o.tagLabel(e),
								});
						}),
							e.fadeOut("fast").hide.apply(e, n).dequeue();
					} else
						e.remove(),
							this._trigger("afterTagRemoved", null, {
								tag: e,
								tagLabel: this.tagLabel(e),
							});
				}
			},
			removeTagByLabel: function (t, e) {
				var i = this._findTagByLabel(t);
				if (!i) throw "No such tag exists with the name '" + t + "'";
				this.removeTag(i, e);
			},
			removeAll: function () {
				var t = this;
				this._tags().each(function (e, i) {
					t.removeTag(i, !1);
				});
			},
		});
	})(jQuery),
	(function (t) {
		var e,
			i,
			n,
			s,
			o,
			a,
			r,
			l = "Close",
			h = "BeforeClose",
			c = "MarkupParse",
			u = "Open",
			d = "Change",
			p = "mfp",
			f = "." + p,
			g = "mfp-ready",
			m = "mfp-removing",
			v = "mfp-prevent-close",
			_ = function () {},
			b = !!window.jQuery,
			y = t(window),
			w = function (t, i) {
				e.ev.on(p + t + f, i);
			},
			x = function (e, i, n, s) {
				var o = document.createElement("div");
				return (
					(o.className = "mfp-" + e),
					n && (o.innerHTML = n),
					s ? i && i.appendChild(o) : ((o = t(o)), i && o.appendTo(i)),
					o
				);
			},
			C = function (i, n) {
				e.ev.triggerHandler(p + i, n),
					e.st.callbacks &&
						((i = i.charAt(0).toLowerCase() + i.slice(1)),
						e.st.callbacks[i] &&
							e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]));
			},
			k = function (i) {
				return (
					(i === r && e.currTemplate.closeBtn) ||
						((e.currTemplate.closeBtn = t(
							e.st.closeMarkup.replace("%title%", e.st.tClose)
						)),
						(r = i)),
					e.currTemplate.closeBtn
				);
			},
			T = function () {
				t.magnificPopup.instance ||
					((e = new _()).init(), (t.magnificPopup.instance = e));
			};
		(_.prototype = {
			constructor: _,
			init: function () {
				var i = navigator.appVersion;
				(e.isIE7 = -1 !== i.indexOf("MSIE 7.")),
					(e.isIE8 = -1 !== i.indexOf("MSIE 8.")),
					(e.isLowIE = e.isIE7 || e.isIE8),
					(e.isAndroid = /android/gi.test(i)),
					(e.isIOS = /iphone|ipad|ipod/gi.test(i)),
					(e.supportsTransition = (function () {
						var t = document.createElement("p").style,
							e = ["ms", "O", "Moz", "Webkit"];
						if (void 0 !== t.transition) return !0;
						for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
						return !1;
					})()),
					(e.probablyMobile =
						e.isAndroid ||
						e.isIOS ||
						/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
							navigator.userAgent
						)),
					(s = t(document)),
					(e.popupsCache = {});
			},
			open: function (i) {
				var o;
				if ((n || (n = t(document.body)), !1 === i.isObj)) {
					(e.items = i.items.toArray()), (e.index = 0);
					var r,
						l = i.items;
					for (o = 0; o < l.length; o++)
						if (((r = l[o]).parsed && (r = r.el[0]), r === i.el[0])) {
							e.index = o;
							break;
						}
				} else
					(e.items = t.isArray(i.items) ? i.items : [i.items]),
						(e.index = i.index || 0);
				if (!e.isOpen) {
					(e.types = []),
						(a = ""),
						i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = s),
						i.key
							? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
							  (e.currTemplate = e.popupsCache[i.key]))
							: (e.currTemplate = {}),
						(e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
						(e.fixedContentPos =
							"auto" === e.st.fixedContentPos
								? !e.probablyMobile
								: e.st.fixedContentPos),
						e.st.modal &&
							((e.st.closeOnContentClick = !1),
							(e.st.closeOnBgClick = !1),
							(e.st.showCloseBtn = !1),
							(e.st.enableEscapeKey = !1)),
						e.bgOverlay ||
							((e.bgOverlay = x("bg").on("click" + f, function () {
								e.close();
							})),
							(e.wrap = x("wrap")
								.attr("tabindex", -1)
								.on("click" + f, function (t) {
									e._checkIfClose(t.target) && e.close();
								})),
							(e.container = x("container", e.wrap))),
						(e.contentContainer = x("content")),
						e.st.preloader &&
							(e.preloader = x("preloader", e.container, e.st.tLoading));
					var h = t.magnificPopup.modules;
					for (o = 0; o < h.length; o++) {
						var d = h[o];
						(d = d.charAt(0).toUpperCase() + d.slice(1)), e["init" + d].call(e);
					}
					C("BeforeOpen"),
						e.st.showCloseBtn &&
							(e.st.closeBtnInside
								? (w(c, function (t, e, i, n) {
										i.close_replaceWith = k(n.type);
								  }),
								  (a += " mfp-close-btn-in"))
								: e.wrap.append(k())),
						e.st.alignTop && (a += " mfp-align-top"),
						e.fixedContentPos
							? e.wrap.css({
									overflow: e.st.overflowY,
									overflowX: "hidden",
									overflowY: e.st.overflowY,
							  })
							: e.wrap.css({ top: y.scrollTop(), position: "absolute" }),
						(!1 === e.st.fixedBgPos ||
							("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
							e.bgOverlay.css({ height: s.height(), position: "absolute" }),
						e.st.enableEscapeKey &&
							s.on("keyup" + f, function (t) {
								27 === t.keyCode && e.close();
							}),
						y.on("resize" + f, function () {
							e.updateSize();
						}),
						e.st.closeOnContentClick || (a += " mfp-auto-cursor"),
						a && e.wrap.addClass(a);
					var p = (e.wH = y.height()),
						m = {};
					if (e.fixedContentPos && e._hasScrollBar(p)) {
						var v = e._getScrollbarSize();
						v && (m.marginRight = v);
					}
					e.fixedContentPos &&
						(e.isIE7
							? t("body, html").css("overflow", "hidden")
							: (m.overflow = "hidden"));
					var _ = e.st.mainClass;
					return (
						e.isIE7 && (_ += " mfp-ie7"),
						_ && e._addClassToMFP(_),
						e.updateItemHTML(),
						C("BuildControls"),
						t("html").css(m),
						e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || n),
						(e._lastFocusedEl = document.activeElement),
						setTimeout(function () {
							e.content
								? (e._addClassToMFP(g), e._setFocus())
								: e.bgOverlay.addClass(g),
								s.on("focusin" + f, e._onFocusIn);
						}, 16),
						(e.isOpen = !0),
						e.updateSize(p),
						C(u),
						i
					);
				}
				e.updateItemHTML();
			},
			close: function () {
				e.isOpen &&
					(C(h),
					(e.isOpen = !1),
					e.st.removalDelay && !e.isLowIE && e.supportsTransition
						? (e._addClassToMFP(m),
						  setTimeout(function () {
								e._close();
						  }, e.st.removalDelay))
						: e._close());
			},
			_close: function () {
				C(l);
				var i = m + " " + g + " ";
				if (
					(e.bgOverlay.detach(),
					e.wrap.detach(),
					e.container.empty(),
					e.st.mainClass && (i += e.st.mainClass + " "),
					e._removeClassFromMFP(i),
					e.fixedContentPos)
				) {
					var n = { marginRight: "" };
					e.isIE7 ? t("body, html").css("overflow", "") : (n.overflow = ""),
						t("html").css(n);
				}
				s.off("keyup.mfp focusin" + f),
					e.ev.off(f),
					e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
					e.bgOverlay.attr("class", "mfp-bg"),
					e.container.attr("class", "mfp-container"),
					e.st.showCloseBtn &&
						(!e.st.closeBtnInside || !0 === e.currTemplate[e.currItem.type]) &&
						e.currTemplate.closeBtn &&
						e.currTemplate.closeBtn.detach(),
					e._lastFocusedEl && t(e._lastFocusedEl).focus(),
					(e.currItem = null),
					(e.content = null),
					(e.currTemplate = null),
					(e.prevHeight = 0),
					C("AfterClose");
			},
			updateSize: function (t) {
				if (e.isIOS) {
					var i = document.documentElement.clientWidth / window.innerWidth,
						n = window.innerHeight * i;
					e.wrap.css("height", n), (e.wH = n);
				} else e.wH = t || y.height();
				e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize");
			},
			updateItemHTML: function () {
				var i = e.items[e.index];
				e.contentContainer.detach(),
					e.content && e.content.detach(),
					i.parsed || (i = e.parseEl(e.index));
				var n = i.type;
				if (
					(C("BeforeChange", [e.currItem ? e.currItem.type : "", n]),
					(e.currItem = i),
					!e.currTemplate[n])
				) {
					var s = !!e.st[n] && e.st[n].markup;
					C("FirstMarkupParse", s), (e.currTemplate[n] = !s || t(s));
				}
				o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
				var a = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](
					i,
					e.currTemplate[n]
				);
				e.appendContent(a, n),
					(i.preloaded = !0),
					C(d, i),
					(o = i.type),
					e.container.prepend(e.contentContainer),
					C("AfterChange");
			},
			appendContent: function (t, i) {
				(e.content = t),
					t
						? e.st.showCloseBtn &&
						  e.st.closeBtnInside &&
						  !0 === e.currTemplate[i]
							? e.content.find(".mfp-close").length || e.content.append(k())
							: (e.content = t)
						: (e.content = ""),
					C("BeforeAppend"),
					e.container.addClass("mfp-" + i + "-holder"),
					e.contentContainer.append(e.content);
			},
			parseEl: function (i) {
				var n,
					s = e.items[i];
				if (
					(s.tagName
						? (s = { el: t(s) })
						: ((n = s.type), (s = { data: s, src: s.src })),
					s.el)
				) {
					for (var o = e.types, a = 0; a < o.length; a++)
						if (s.el.hasClass("mfp-" + o[a])) {
							n = o[a];
							break;
						}
					(s.src = s.el.attr("data-mfp-src")),
						s.src || (s.src = s.el.attr("href"));
				}
				return (
					(s.type = n || e.st.type || "inline"),
					(s.index = i),
					(s.parsed = !0),
					(e.items[i] = s),
					C("ElementParse", s),
					e.items[i]
				);
			},
			addGroup: function (t, i) {
				var n = function (n) {
					(n.mfpEl = this), e._openClick(n, t, i);
				};
				i || (i = {});
				var s = "click.magnificPopup";
				(i.mainEl = t),
					i.items
						? ((i.isObj = !0), t.off(s).on(s, n))
						: ((i.isObj = !1),
						  i.delegate
								? t.off(s).on(s, i.delegate, n)
								: ((i.items = t), t.off(s).on(s, n)));
			},
			_openClick: function (i, n, s) {
				if (
					(void 0 !== s.midClick
						? s.midClick
						: t.magnificPopup.defaults.midClick) ||
					(2 !== i.which && !i.ctrlKey && !i.metaKey)
				) {
					var o =
						void 0 !== s.disableOn
							? s.disableOn
							: t.magnificPopup.defaults.disableOn;
					if (o)
						if (t.isFunction(o)) {
							if (!o.call(e)) return !0;
						} else if (y.width() < o) return !0;
					i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
						(s.el = t(i.mfpEl)),
						s.delegate && (s.items = n.find(s.delegate)),
						e.open(s);
				}
			},
			updateStatus: function (t, n) {
				if (e.preloader) {
					i !== t && e.container.removeClass("mfp-s-" + i),
						!n && "loading" === t && (n = e.st.tLoading);
					var s = { status: t, text: n };
					C("UpdateStatus", s),
						(t = s.status),
						(n = s.text),
						e.preloader.html(n),
						e.preloader.find("a").on("click", function (t) {
							t.stopImmediatePropagation();
						}),
						e.container.addClass("mfp-s-" + t),
						(i = t);
				}
			},
			_checkIfClose: function (i) {
				if (!t(i).hasClass(v)) {
					var n = e.st.closeOnContentClick,
						s = e.st.closeOnBgClick;
					if (n && s) return !0;
					if (
						!e.content ||
						t(i).hasClass("mfp-close") ||
						(e.preloader && i === e.preloader[0])
					)
						return !0;
					if (i === e.content[0] || t.contains(e.content[0], i)) {
						if (n) return !0;
					} else if (s && t.contains(document, i)) return !0;
					return !1;
				}
			},
			_addClassToMFP: function (t) {
				e.bgOverlay.addClass(t), e.wrap.addClass(t);
			},
			_removeClassFromMFP: function (t) {
				this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
			},
			_hasScrollBar: function (t) {
				return (
					(e.isIE7 ? s.height() : document.body.scrollHeight) >
					(t || y.height())
				);
			},
			_setFocus: function () {
				(e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
			},
			_onFocusIn: function (i) {
				if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target))
					return e._setFocus(), !1;
			},
			_parseMarkup: function (e, i, n) {
				var s;
				n.data && (i = t.extend(n.data, i)),
					C(c, [e, i, n]),
					t.each(i, function (t, i) {
						if (void 0 === i || !1 === i) return !0;
						if ((s = t.split("_")).length > 1) {
							var n = e.find(f + "-" + s[0]);
							if (n.length > 0) {
								var o = s[1];
								"replaceWith" === o
									? n[0] !== i[0] && n.replaceWith(i)
									: "img" === o
									? n.is("img")
										? n.attr("src", i)
										: n.replaceWith(
												'<img src="' +
													i +
													'" class="' +
													n.attr("class") +
													'" />'
										  )
									: n.attr(s[1], i);
							}
						} else e.find(f + "-" + t).html(i);
					});
			},
			_getScrollbarSize: function () {
				if (void 0 === e.scrollbarSize) {
					var t = document.createElement("div");
					(t.id = "mfp-sbm"),
						(t.style.cssText =
							"width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
						document.body.appendChild(t),
						(e.scrollbarSize = t.offsetWidth - t.clientWidth),
						document.body.removeChild(t);
				}
				return e.scrollbarSize;
			},
		}),
			(t.magnificPopup = {
				instance: null,
				proto: _.prototype,
				modules: [],
				open: function (e, i) {
					return (
						T(),
						((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
						(e.index = i || 0),
						this.instance.open(e)
					);
				},
				close: function () {
					return t.magnificPopup.instance && t.magnificPopup.instance.close();
				},
				registerModule: function (e, i) {
					i.options && (t.magnificPopup.defaults[e] = i.options),
						t.extend(this.proto, i.proto),
						this.modules.push(e);
				},
				defaults: {
					disableOn: 0,
					key: null,
					midClick: !1,
					mainClass: "",
					preloader: !0,
					focus: "",
					closeOnContentClick: !1,
					closeOnBgClick: !0,
					closeBtnInside: !0,
					showCloseBtn: !0,
					enableEscapeKey: !0,
					modal: !1,
					alignTop: !1,
					removalDelay: 0,
					prependTo: null,
					fixedContentPos: "auto",
					fixedBgPos: "auto",
					overflowY: "auto",
					closeMarkup:
						'<button title="%title%" type="button" class="mfp-close">&times;</button>',
					tClose: "Close (Esc)",
					tLoading: "Loading...",
				},
			}),
			(t.fn.magnificPopup = function (i) {
				T();
				var n = t(this);
				if ("string" == typeof i)
					if ("open" === i) {
						var s,
							o = b ? n.data("magnificPopup") : n[0].magnificPopup,
							a = parseInt(arguments[1], 10) || 0;
						o.items
							? (s = o.items[a])
							: ((s = n),
							  o.delegate && (s = s.find(o.delegate)),
							  (s = s.eq(a))),
							e._openClick({ mfpEl: s }, n, o);
					} else
						e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
				else
					(i = t.extend(!0, {}, i)),
						b ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
						e.addGroup(n, i);
				return n;
			});
		var D,
			S,
			E,
			I = "inline",
			A = function () {
				E && (S.after(E.addClass(D)).detach(), (E = null));
			};
		t.magnificPopup.registerModule(I, {
			options: {
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found",
			},
			proto: {
				initInline: function () {
					e.types.push(I),
						w(l + "." + I, function () {
							A();
						});
				},
				getInline: function (i, n) {
					if ((A(), i.src)) {
						var s = e.st.inline,
							o = t(i.src);
						if (o.length) {
							var a = o[0].parentNode;
							a &&
								a.tagName &&
								(S || ((D = s.hiddenClass), (S = x(D)), (D = "mfp-" + D)),
								(E = o.after(S).detach().removeClass(D))),
								e.updateStatus("ready");
						} else e.updateStatus("error", s.tNotFound), (o = t("<div>"));
						return (i.inlineElement = o), o;
					}
					return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n;
				},
			},
		});
		var P,
			O = "ajax",
			F = function () {
				P && n.removeClass(P);
			},
			M = function () {
				F(), e.req && e.req.abort();
			};
		t.magnificPopup.registerModule(O, {
			options: {
				settings: null,
				cursor: "mfp-ajax-cur",
				tError: '<a href="%url%">The content</a> could not be loaded.',
			},
			proto: {
				initAjax: function () {
					e.types.push(O),
						(P = e.st.ajax.cursor),
						w(l + "." + O, M),
						w("BeforeChange." + O, M);
				},
				getAjax: function (i) {
					P && n.addClass(P), e.updateStatus("loading");
					var s = t.extend(
						{
							url: i.src,
							success: function (n, s, o) {
								var a = { data: n, xhr: o };
								C("ParseAjax", a),
									e.appendContent(t(a.data), O),
									(i.finished = !0),
									F(),
									e._setFocus(),
									setTimeout(function () {
										e.wrap.addClass(g);
									}, 16),
									e.updateStatus("ready"),
									C("AjaxContentAdded");
							},
							error: function () {
								F(),
									(i.finished = i.loadError = !0),
									e.updateStatus(
										"error",
										e.st.ajax.tError.replace("%url%", i.src)
									);
							},
						},
						e.st.ajax.settings
					);
					return (e.req = t.ajax(s)), "";
				},
			},
		});
		var N,
			H = function (i) {
				if (i.data && void 0 !== i.data.title) return i.data.title;
				var n = e.st.image.titleSrc;
				if (n) {
					if (t.isFunction(n)) return n.call(e, i);
					if (i.el) return i.el.attr(n) || "";
				}
				return "";
			};
		t.magnificPopup.registerModule("image", {
			options: {
				markup:
					'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.',
			},
			proto: {
				initImage: function () {
					var t = e.st.image,
						i = ".image";
					e.types.push("image"),
						w(u + i, function () {
							"image" === e.currItem.type && t.cursor && n.addClass(t.cursor);
						}),
						w(l + i, function () {
							t.cursor && n.removeClass(t.cursor), y.off("resize" + f);
						}),
						w("Resize" + i, e.resizeImage),
						e.isLowIE && w("AfterChange", e.resizeImage);
				},
				resizeImage: function () {
					var t = e.currItem;
					if (t && t.img && e.st.image.verticalFit) {
						var i = 0;
						e.isLowIE &&
							(i =
								parseInt(t.img.css("padding-top"), 10) +
								parseInt(t.img.css("padding-bottom"), 10)),
							t.img.css("max-height", e.wH - i);
					}
				},
				_onImageHasSize: function (t) {
					t.img &&
						((t.hasSize = !0),
						N && clearInterval(N),
						(t.isCheckingImgSize = !1),
						C("ImageHasSize", t),
						t.imgHidden &&
							(e.content && e.content.removeClass("mfp-loading"),
							(t.imgHidden = !1)));
				},
				findImageSize: function (t) {
					var i = 0,
						n = t.img[0],
						s = function (o) {
							N && clearInterval(N),
								(N = setInterval(function () {
									n.naturalWidth > 0
										? e._onImageHasSize(t)
										: (i > 200 && clearInterval(N),
										  3 === ++i
												? s(10)
												: 40 === i
												? s(50)
												: 100 === i && s(500));
								}, o));
						};
					s(1);
				},
				getImage: function (i, n) {
					var s = 0,
						o = function () {
							i &&
								(i.img[0].complete
									? (i.img.off(".mfploader"),
									  i === e.currItem &&
											(e._onImageHasSize(i), e.updateStatus("ready")),
									  (i.hasSize = !0),
									  (i.loaded = !0),
									  C("ImageLoadComplete"))
									: ++s < 200
									? setTimeout(o, 100)
									: a());
						},
						a = function () {
							i &&
								(i.img.off(".mfploader"),
								i === e.currItem &&
									(e._onImageHasSize(i),
									e.updateStatus("error", r.tError.replace("%url%", i.src))),
								(i.hasSize = !0),
								(i.loaded = !0),
								(i.loadError = !0));
						},
						r = e.st.image,
						l = n.find(".mfp-img");
					if (l.length) {
						var h = document.createElement("img");
						(h.className = "mfp-img"),
							(i.img = t(h).on("load.mfploader", o).on("error.mfploader", a)),
							(h.src = i.src),
							l.is("img") && (i.img = i.img.clone()),
							(h = i.img[0]).naturalWidth > 0
								? (i.hasSize = !0)
								: h.width || (i.hasSize = !1);
					}
					return (
						e._parseMarkup(n, { title: H(i), img_replaceWith: i.img }, i),
						e.resizeImage(),
						i.hasSize
							? (N && clearInterval(N),
							  i.loadError
									? (n.addClass("mfp-loading"),
									  e.updateStatus("error", r.tError.replace("%url%", i.src)))
									: (n.removeClass("mfp-loading"), e.updateStatus("ready")),
							  n)
							: (e.updateStatus("loading"),
							  (i.loading = !0),
							  i.hasSize ||
									((i.imgHidden = !0),
									n.addClass("mfp-loading"),
									e.findImageSize(i)),
							  n)
					);
				},
			},
		});
		var $;
		t.magnificPopup.registerModule("zoom", {
			options: {
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function (t) {
					return t.is("img") ? t : t.find("img");
				},
			},
			proto: {
				initZoom: function () {
					var t,
						i = e.st.zoom,
						n = ".zoom";
					if (i.enabled && e.supportsTransition) {
						var s,
							o,
							a = i.duration,
							r = function (t) {
								var e = t
										.clone()
										.removeAttr("style")
										.removeAttr("class")
										.addClass("mfp-animated-image"),
									n = "all " + i.duration / 1e3 + "s " + i.easing,
									s = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden",
									},
									o = "transition";
								return (
									(s["-webkit-" + o] =
										s["-moz-" + o] =
										s["-o-" + o] =
										s[o] =
											n),
									e.css(s),
									e
								);
							},
							c = function () {
								e.content.css("visibility", "visible");
							};
						w("BuildControls" + n, function () {
							if (e._allowZoom()) {
								if (
									(clearTimeout(s),
									e.content.css("visibility", "hidden"),
									!(t = e._getItemToZoom()))
								)
									return void c();
								(o = r(t)).css(e._getOffset()),
									e.wrap.append(o),
									(s = setTimeout(function () {
										o.css(e._getOffset(!0)),
											(s = setTimeout(function () {
												c(),
													setTimeout(function () {
														o.remove(), (t = o = null), C("ZoomAnimationEnded");
													}, 16);
											}, a));
									}, 16));
							}
						}),
							w(h + n, function () {
								if (e._allowZoom()) {
									if ((clearTimeout(s), (e.st.removalDelay = a), !t)) {
										if (!(t = e._getItemToZoom())) return;
										o = r(t);
									}
									o.css(e._getOffset(!0)),
										e.wrap.append(o),
										e.content.css("visibility", "hidden"),
										setTimeout(function () {
											o.css(e._getOffset());
										}, 16);
								}
							}),
							w(l + n, function () {
								e._allowZoom() && (c(), o && o.remove(), (t = null));
							});
					}
				},
				_allowZoom: function () {
					return "image" === e.currItem.type;
				},
				_getItemToZoom: function () {
					return !!e.currItem.hasSize && e.currItem.img;
				},
				_getOffset: function (i) {
					var n,
						s = (n = i
							? e.currItem.img
							: e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
						o = parseInt(n.css("padding-top"), 10),
						a = parseInt(n.css("padding-bottom"), 10);
					s.top -= t(window).scrollTop() - o;
					var r = {
						width: n.width(),
						height: (b ? n.innerHeight() : n[0].offsetHeight) - a - o,
					};
					return (
						void 0 === $ &&
							($ = void 0 !== document.createElement("p").style.MozTransform),
						$
							? (r["-moz-transform"] = r.transform =
									"translate(" + s.left + "px," + s.top + "px)")
							: ((r.left = s.left), (r.top = s.top)),
						r
					);
				},
			},
		});
		var L = function (t) {
				var i = e.items.length;
				return t > i - 1 ? t - i : t < 0 ? i + t : t;
			},
			z = function (t, e, i) {
				return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
			};
		t.magnificPopup.registerModule("gallery", {
			options: {
				enabled: !1,
				arrowMarkup:
					'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%",
			},
			proto: {
				initGallery: function () {
					var i = e.st.gallery,
						n = ".mfp-gallery",
						o = Boolean(t.fn.mfpFastClick);
					if (((e.direction = !0), !i || !i.enabled)) return !1;
					(a += " mfp-gallery"),
						w(u + n, function () {
							i.navigateByImgClick &&
								e.wrap.on("click" + n, ".mfp-img", function () {
									if (e.items.length > 1) return e.next(), !1;
								}),
								s.on("keydown" + n, function (t) {
									37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
								});
						}),
						w("UpdateStatus" + n, function (t, i) {
							i.text && (i.text = z(i.text, e.currItem.index, e.items.length));
						}),
						w(c + n, function (t, n, s, o) {
							var a = e.items.length;
							s.counter = a > 1 ? z(i.tCounter, o.index, a) : "";
						}),
						w("BuildControls" + n, function () {
							if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
								var n = i.arrowMarkup,
									s = (e.arrowLeft = t(
										n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
									).addClass(v)),
									a = (e.arrowRight = t(
										n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")
									).addClass(v)),
									r = o ? "mfpFastClick" : "click";
								s[r](function () {
									e.prev();
								}),
									a[r](function () {
										e.next();
									}),
									e.isIE7 &&
										(x("b", s[0], !1, !0),
										x("a", s[0], !1, !0),
										x("b", a[0], !1, !0),
										x("a", a[0], !1, !0)),
									e.container.append(s.add(a));
							}
						}),
						w(d + n, function () {
							e._preloadTimeout && clearTimeout(e._preloadTimeout),
								(e._preloadTimeout = setTimeout(function () {
									e.preloadNearbyImages(), (e._preloadTimeout = null);
								}, 16));
						}),
						w(l + n, function () {
							s.off(n),
								e.wrap.off("click" + n),
								e.arrowLeft &&
									o &&
									e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(),
								(e.arrowRight = e.arrowLeft = null);
						});
				},
				next: function () {
					(e.direction = !0), (e.index = L(e.index + 1)), e.updateItemHTML();
				},
				prev: function () {
					(e.direction = !1), (e.index = L(e.index - 1)), e.updateItemHTML();
				},
				goTo: function (t) {
					(e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
				},
				preloadNearbyImages: function () {
					var t,
						i = e.st.gallery.preload,
						n = Math.min(i[0], e.items.length),
						s = Math.min(i[1], e.items.length);
					for (t = 1; t <= (e.direction ? s : n); t++)
						e._preloadItem(e.index + t);
					for (t = 1; t <= (e.direction ? n : s); t++)
						e._preloadItem(e.index - t);
				},
				_preloadItem: function (i) {
					if (((i = L(i)), !e.items[i].preloaded)) {
						var n = e.items[i];
						n.parsed || (n = e.parseEl(i)),
							C("LazyLoad", n),
							"image" === n.type &&
								(n.img = t('<img class="mfp-img" />')
									.on("load.mfploader", function () {
										n.hasSize = !0;
									})
									.on("error.mfploader", function () {
										(n.hasSize = !0), (n.loadError = !0), C("LazyLoadError", n);
									})
									.attr("src", n.src)),
							(n.preloaded = !0);
					}
				},
			},
		}),
			(function () {
				var e = "ontouchstart" in window,
					i = function () {
						y.off("touchmove" + n + " touchend" + n);
					},
					n = ".mfpFastClick";
				(t.fn.mfpFastClick = function (s) {
					return t(this).each(function () {
						var o,
							a,
							r,
							l,
							h,
							c,
							u,
							d = t(this);
						e &&
							d.on("touchstart" + n, function (t) {
								(h = !1),
									(u = 1),
									(c = t.originalEvent
										? t.originalEvent.touches[0]
										: t.touches[0]),
									(r = c.clientX),
									(l = c.clientY),
									y
										.on("touchmove" + n, function (t) {
											(c = t.originalEvent
												? t.originalEvent.touches
												: t.touches),
												(u = c.length),
												(c = c[0]),
												(Math.abs(c.clientX - r) > 10 ||
													Math.abs(c.clientY - l) > 10) &&
													((h = !0), i());
										})
										.on("touchend" + n, function (t) {
											i(),
												h ||
													u > 1 ||
													((o = !0),
													t.preventDefault(),
													clearTimeout(a),
													(a = setTimeout(function () {
														o = !1;
													}, 1e3)),
													s());
										});
							});
						d.on("click" + n, function () {
							o || s();
						});
					});
				}),
					(t.fn.destroyMfpFastClick = function () {
						t(this).off("touchstart" + n + " click" + n),
							e && y.off("touchmove" + n + " touchend" + n);
					});
			})(),
			T();
	})(window.jQuery || window.Zepto);
const Toyhouse = {};
var initFunctions = [],
	hasInit = !1;
function addInitFunction(t) {
	initFunctions.push(t), hasInit && t($(document));
}
function pushErrors(t) {
	for (var e in t) pushError(t);
}
function pushError(t) {
	var e = new $("<div>");
	(string =
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'),
		$(e).html(string + t),
		$(e).attr("class", "alert alert-danger mb-2 alert-dismissible fade show"),
		$(e).hide(),
		$("#content").prepend(e),
		$(e).slideDown();
}
function initSwitch(t) {
	$(t).on("click", function (t) {
		t.preventDefault();
		var e = $("input", this);
		e.prop("checked") ? e.prop("checked", !1) : e.prop("checked", "checked"),
			e.prop("checked")
				? ($(this).addClass("btn-primary").removeClass("btn-secondary"),
				  $("span", this).html($(this).data("on")))
				: ($(this).removeClass("btn-primary").addClass("btn-secondary"),
				  $("span", this).html($(this).data("off")));
	});
}
function init(t) {
	for (var e in (t || (t = $(document)),
	$(".user-content-strip-a").on("click", function (t) {
		return (
			t.preventDefault(),
			$(".user-content *").removeAttr("style"),
			$("i", this).removeClass("hide"),
			!1
		);
	}),
	$(".user-content", t).length && $(".user-content-strip").removeClass("hide"),
	$("input[th-switch]", t).bootstrapToggle(),
	$("[th-toggle]", t).each(function () {
		initSwitch(this);
	}),
	$("[th-collapse-trigger]", t).on("click", function (t) {
		$($(this).attr("th-collapse-trigger")).toggleClass("hide");
	}),
	$("[th-unhide-for-user]", t).each(function (t) {
		Number($(this).attr("th-unhide-for-user")) ==
			Number($('meta[name="user-id"]').attr("content")) &&
			$(this).removeClass("hide");
	}),
	$("a[th-modal-trigger]", t).on("click", function (t) {
		t.preventDefault();
		var e = $(this).attr("th-modal-target")
				? $(this).attr("th-modal-target")
				: "#modal-default",
			i = $(this).attr("href");
		if ($(this).attr("th-modal-url")) i = $(this).attr("th-modal-url");
		i && "#" != i
			? ($(".modal-content", e).loading(),
			  $(e).modal("show"),
			  $.get(i)
					.done(function (t) {
						$(".modal-content", e).html(t);
					})
					.fail(function (t) {
						$(".modal-content", e).html(t.responseText);
					})
					.always(function () {
						init($(".modal-content", e));
					}))
			: $(e).modal("show");
	}),
	$('[data-toggle="offcanvas"]', t).on("click", function () {
		$("#sidebar").toggleClass("active");
	}),
	$("[th-toggle-trigger]", t).on("click", function (t) {
		return (
			t.preventDefault(),
			$($(this).attr("th-toggle-target")).each(function () {
				$(this).hasClass("hide")
					? $(this).removeClass("hide")
					: $(this).addClass("hide");
			}),
			!1
		);
	}),
	$("[th-clone-container]", t).on("click", "a[th-clone-trigger]", function (t) {
		return (
			t.preventDefault(),
			(container = $(this).closest("[th-clone-container]")),
			init(
				$($($(this).attr("th-clone-src"), container).html()).appendTo(
					$($(this).attr("th-clone-dst"), container)
				)
			),
			initClones(container),
			!1
		);
	}),
	$("[th-clone-container]", t).on(
		"click",
		"a[th-clone-remove-trigger]",
		function (t) {
			return (
				t.preventDefault(),
				$(this).closest("[th-clone]").remove(),
				initClones($(this).closest("[th-clone-container]")),
				!1
			);
		}
	),
	$("div.sortable", t).sortable({
		items: ".sortable-item",
		tolerance: "intersect",
		handle: ".handle",
		change: function () {
			initSortableSpacing();
		},
		deactivate: function () {
			initSortableSpacing();
		},
	}),
	$("ul.sortable", t).sortable({
		items: "li",
		tolerance: "intersect",
		handle: ".handle",
		change: function () {
			initSortableSpacing();
		},
		deactivate: function () {
			initSortableSpacing();
		},
		sort: function (t, e) {
			var i = $(this),
				n = i.children(".ui-sortable-placeholder"),
				s = e.helper.position().left + e.helper.outerWidth() / 2,
				o = e.helper.position().top + e.helper.outerHeight() / 2;
			i.children().each(function () {
				var t = $(this);
				if (
					!t.hasClass("ui-sortable-helper") &&
					!t.hasClass("ui-sortable-placeholder")
				) {
					var a = t.position().left + t.outerWidth() / 2,
						r = t.position().top + t.outerHeight() / 2;
					if (
						Math.sqrt(Math.pow(a - s, 2) + Math.pow(r - o, 2)) <
						Math.min(
							t.outerWidth(),
							t.outerHeight(),
							e.helper.outerWidth(),
							e.helper.outerHeight()
						) /
							2
					)
						return (
							n.index() > t.index() ? n.insertBefore(t) : n.insertAfter(t),
							i.sortable("refreshPositions"),
							!1
						);
				}
			});
		},
	}),
	$('[data-toggle="tooltip"], .tooltipster', t).tooltip({ container: "body" }),
	$('[data-toggle="popover"]', t).popover({ container: "body" }),
	$("li.dropdown, li.dropup, li.has-dropdown", t).each(function () {
		var t = $(this),
			e = $($('[data-toggle="dropdown"]', t)[0]);
		t.mouseover(function () {
			if (t.attr("data-lock")) return !0;
			t.hasClass("show") || (e.trigger("click"), e.focus());
		}),
			t.mouseout(function () {
				if (t.attr("data-lock")) return !0;
				t.hasClass("show") && (e.trigger("click"), e.blur());
			});
	}),
	$(".page-jumper-link", t).click(function (t) {
		return (
			t.preventDefault(),
			$(".page-jumper", $(this).closest(".pagination")).toggle(),
			!1
		);
	}),
	$(".page-jumper-input", t).on("keypress", function (t) {
		if (13 == t.keyCode)
			return (
				t.preventDefault(),
				(url = new URL(window.location.href)),
				url.searchParams.set("page", $(this).val()),
				(window.location.href = url.href),
				!1
			);
	}),
	$(".fr-spoiler", t).click(function (t) {
		t.pageY - $(this).offset().top < 32 &&
			$(this).toggleClass("fr-spoiler-show");
	}),
	$(".characters-search-tags").click(function (t) {
		return (
			t.preventDefault(),
			$(".characters-filters").hasClass("hide")
				? ($(".characters-filters").removeClass("hide"),
				  $("html,body").animate(
						{ scrollTop: $(".characters-filters").offset().top },
						1e3
				  ))
				: $(".characters-filters").addClass("hide"),
			!1
		);
	}),
	initFunctions))
		initFunctions[e](t);
	hasInit = !0;
}
function initClones(t) {
	t &&
		$(t).attr("th-clone-limit") &&
		($("[th-clone]", t).length <= Number($(t).attr("th-clone-limit"))
			? $("[th-clone-trigger]", t).show()
			: $("[th-clone-trigger]", t).hide());
}
function initSortableSpacing() {
	$(".sortable li").removeClass("clearboth"),
		$(".sortable li:not(.ui-sortable-helper)").each(function (t) {
			t % 6 == 0 && $(this).addClass("clearboth");
		});
}
$.fn.extend({
	exists: function () {
		return $(this).length > 0;
	},
	loading: function () {
		$(this).html(
			'<div style="width: 100%; height: 100%; padding: 10px; text-align: center;"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>'
		);
	},
}),
	($.fn.modal.Constructor.prototype._enforceFocus = function () {}),
	$(document).ready(function () {
		init();
	}),
	(jQuery.fn.hasScrollBar = function () {
		return this.get(0).scrollHeight > this.height();
	});
var characterSelect_currentWidget = null,
	characterSelect_legacy = 0;
function loadUserCharacterSelector(t) {
	console.log("loading user character selector"),
		$(".modal-body", "#user-character-selector").loading(),
		$("#user-character-selector").is(":visible") ||
			$("#user-character-selector").modal("show"),
		$.get(t, function (t) {
			t.status
				? ($(".modal-body", "#user-character-selector").html(t.content),
				  init("#user-character-selector"),
				  $(
						".user-character-selector-select",
						"#user-character-selector"
				  ).click(function (t) {
						console.log("selecting a user character"),
							characterSelect_update(characterSelect_currentWidget, {
								id: $(this).data("id"),
								avatar: $(this).data("avatar"),
								name: $(this).data("name"),
							}),
							$("#user-character-selector").modal("hide");
				  }),
				  $("a", "#user-character-selector").click(function (t) {
						t.preventDefault(), loadUserCharacterSelector($(this).attr("href"));
				  }))
				: ($("#user-character-selector").modal("hide"), pushErrors(t.errors));
		});
}
function characterSelect_update(t, e) {
	e
		? (characterSelect_legacy ||
				$(".character-select-selectors", t).addClass("hide"),
		  $(".character-select-selected-input", t).val(e.id).trigger("change"),
		  $(".character-select-selected-character", t).html(
				'<img src="' + e.avatar + '">' + e.name
		  ),
		  $(".character-select-selected", t).removeClass("hide"))
		: (characterSelect_legacy ||
				$(".character-select-selectors", t).removeClass("hide"),
		  $(".character-select-selected-input", t).val("").trigger("change"),
		  $(".character-select-selected-character", t).html(""),
		  $(".character-select-selected", t).addClass("hide"));
}
function initCharacterFaves(t) {
	for (var e in t)
		$('[th-favorite="1"][data-id="character-' + t[e] + '"]').addClass("hide"),
			$('[th-favorite="0"][data-id="character-' + t[e] + '"]').removeClass(
				"hide"
			);
	"0" != $('meta[name="user-id"]').attr("content") &&
		$("[th-favorite]").attr("href", "#");
}
function faveCharacter(t, e) {
	if (t) i = "1" == $(e).attr("th-favorite");
	else {
		t =
			"/" +
			$('[name="character-id"]').attr("content") +
			".-/" +
			("0" == $('[name="character-fave"]').attr("content")
				? "favorite"
				: "unfavorite");
		var i = "0" == $('[name="character-fave"]').attr("content");
	}
	if ($(e).attr("data-th-loading")) return !1;
	$(e).attr("data-th-loading", 1),
		$.post(
			t,
			{ _token: $("[name='csrf-token']").attr("content") },
			function (t) {
				if (
					($(".fa-spin", e).removeClass("fa-spin"),
					$(e).removeAttr("data-th-loading"),
					t.status)
				) {
					var n = 0,
						s = $(
							".th-favorite-count",
							'[data-id="' + $(e).data("id") + '"]'
						)[0];
					if ((s && (n = Number(s.innerHTML)), i)) {
						if (
							(n++,
							$(
								'[th-favorite="0"][data-id="' + $(e).data("id") + '"]'
							).removeClass("hide"),
							$(
								'[th-favorite="1"][data-id="' + $(e).data("id") + '"]'
							).addClass("hide"),
							$(".favorite", e).removeClass("active"),
							$(".unfavorite", e).addClass("active"),
							$('[name="character-fave"]').attr("content", "1"),
							t.html)
						) {
							var o = $(
								"th-favorite" == $(e).attr("data-toggle")
									? e
									: '[th-favorite="0"][data-id="' + $(e).data("id") + '"]'
							)
								.popover("dispose")
								.popover({
									html: !0,
									content: t.html,
									template:
										'<div class="popover favorites-popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
								})
								.popover("show")
								.on("hide.bs.popover", function () {});
							$(document).on("click", function (t) {
								0 == $(t.target).closest(".favorites-popover").length &&
									$(o).popover("dispose");
							}),
								$(".favorites-popover form").on("submit", function (t) {
									t.preventDefault(),
										$.post($(this).attr("action"), {
											_token: $("[name='csrf-token']").attr("content"),
											folder_id: $("[name='folder_id']", this).val(),
										}),
										$(o).popover("dispose");
								});
						}
					} else
						(n = Math.max(0, n - 1)),
							$(".favorite", e).addClass("active"),
							$(".unfavorite", e).removeClass("active"),
							$(
								'[th-favorite="1"][data-id="' + $(e).data("id") + '"]'
							).removeClass("hide"),
							$(
								'[th-favorite="0"][data-id="' + $(e).data("id") + '"]'
							).addClass("hide"),
							$('[name="character-fave"]').attr("content", "0");
					$(".th-favorite-count", '[data-id="' + $(e).data("id") + '"]').text(
						n
					),
						$(".th-favorite-count", e).text(n);
				}
			}
		);
}
function moveCommentPanel(t, e) {
	var i = $(".comment-placeholder-panel")[0];
	for (var n in e) $("input[name='" + n + "']").val(e[n]);
	$(i).appendTo(t), $(i).removeClass("hide");
}
function movePostPanel(t, e) {
	var i = $(".post-placeholder-panel")[0];
	for (var n in e) $("input[name='" + n + "']").val(e[n]);
	$(i).appendTo(t), $(i).removeClass("hide");
}
function initMagnificBox(t, e) {
	console.log("init magnific box"),
		((t = t[0]).innerHTML = t.innerHTML.replace("comment-wysiwyg", "wysiwyg")),
		init(t);
}
addInitFunction(function (t) {
	$(".character-select-search input", t).keypress(function (t) {
		if (13 == t.which) return !1;
	}),
		$(".character-select-index", t).on("click", function (t) {
			t.preventDefault();
			var e = $(this).closest(".character-select-widget");
			return (
				$(".character-select-indexed", e).text($("span", this).text()),
				$(".character-select-search", e).addClass("hide"),
				$(
					'.character-select-search[data-key="' + $(this).data("key") + '"]',
					$(this).closest(".character-select-widget")
				).removeClass("hide"),
				!1
			);
		}),
		$(".character-select-user-search-btn", t).click(function (t) {
			t.preventDefault();
			var e = $(
				"input.character-select-user-search-input",
				$(this).closest(".character-select-search")
			).val();
			characterSelect_currentWidget = $(this).closest(
				".character-select-widget"
			);
			var i = $(this).closest(".character-select-widget").data("data");
			return (
				$(this).closest(".character-select-widget").data("legacy") &&
					(characterSelect_legacy = 1),
				loadUserCharacterSelector("/~characters/search-user?term=" + e + i),
				!1
			);
		}),
		$(
			'.character-select-search[data-key="name"] input, .character-select-search[data-key="id"] input',
			t
		).each(function () {
			var t = $(this).data("url") + "?term=" + $(this).val(),
				e = $(this).closest(".character-select-widget")[0],
				i = $(this).autocomplete({
					minLength: 1,
					source: t,
					select: function (t, i) {
						return (
							characterSelect_update(e, {
								id: i.item.id,
								avatar: i.item.avatar,
								name: i.item.name,
							}),
							!1
						);
					},
				});
			i.autocomplete("widget").addClass("character-select-autocomplete"),
				(i.autocomplete("instance")._renderItem = function (t, e) {
					return $("<li>")
						.append(
							'<a><div class="character-select-avatar"><img src="' +
								e.avatar +
								'"/></div><div class="character-select-info">' +
								e.name +
								e.user +
								"</div></a>"
						)
						.appendTo(t);
				});
		}),
		$(".character-select-selected-remove", t).on("click", function (t) {
			return (
				t.preventDefault(),
				console.log("removing character"),
				characterSelect_update($(this).closest(".character-select-widget")),
				!1
			);
		}),
		$(".character-image-selector [th-toggle]", t).on("click", function () {
			console.log(
				"ic toggle " + $(".character-select-toggle", this).is(":checked")
			),
				$(".character-select-toggle", this).is(":checked")
					? ($(
							".character-selector",
							$(this).closest(".character-image-selector")
					  ).removeClass("hide"),
					  $(
							".character-select-selected-input",
							$(this).closest(".character-image-selector")
					  ).val() &&
							$(
								".image-selector",
								$(this).closest(".character-image-selector")
							).removeClass("hide"))
					: $(
							".character-selector",
							$(this).closest(".character-image-selector")
					  ).addClass("hide");
		}),
		$(".image-selector-btn", t).on("click", function () {
			console.log("image select toggle"),
				console.log($(this).data("url")),
				$(this).data("url") &&
					((characterSelect_currentWidget = $(this).closest(
						".character-image-selector"
					)),
					$(".modal-body", "#user-character-selector").loading(),
					$("#user-character-selector").modal("show"),
					$.get($(this).data("url"), function (t) {
						$(".modal-body", "#user-character-selector").html(t),
							init($("#user-character-selector"));
					}));
		}),
		$(".image-selector-select", t).on("click", function (t) {
			return (
				console.log("image select"),
				t.preventDefault(),
				$(
					".character-select-selected-character img",
					characterSelect_currentWidget
				).attr("src", $(this).data("src")),
				$('[name="image_id"]', characterSelect_currentWidget).val(
					$(this).data("id")
				),
				$("#user-character-selector").modal("hide"),
				!1
			);
		}),
		$(".character-image-selector", t).each(function () {
			console.log("initializing a character selector form...");
			var t = this;
			$('[name="character_id"]', t).on("change", function () {
				console.log("character id has changed"),
					$('[name="image_id"]', t).val(""),
					$(this).val()
						? ($(".image-selector", t).removeClass("hide"),
						  $(".image-selector-btn", t).data(
								"url",
								"/~characters/select-image/" +
									$(this).val() +
									"?legacy=" +
									($(this).data("legacy") ? 1 : 0)
						  ))
						: ($(".image-selector", t).addClass("hide"),
						  $(".image-selector-btn", t).data("url", "#"));
			});
		}),
		$("[th-toggle-character-select]", t).click(function (t) {
			t.preventDefault();
			var e = $($(this).attr("th-target"));
			return (
				e.hasClass("hide")
					? (e.append($("#image-character-select")), e.removeClass("hide"))
					: e.addClass("hide"),
				!1
			);
		});
}),
	addInitFunction(function (t) {
		var e = $(".ic", t)[0];
		e &&
			(e.checked || $(".forums-ic-select", t).hide(),
			$(".ic", t).on("change", function () {
				console.log("legacy ic toggle"),
					this.checked
						? $(".forums-ic-select", $(this).closest(".forums-ic-panel")).show(
								"fade"
						  )
						: $(".forums-ic-select", $(this).closest(".forums-ic-panel")).hide(
								"fade"
						  );
			}));
	}),
	addInitFunction(function (t) {
		$('[data-toggle="th-favorite"]', t).each(function () {
			$('[name="character-fave"]')[0] &&
				("0" == $('[name="character-fave"]').attr("content")
					? $(".favorite", this).addClass("active")
					: $(".unfavorite", this).addClass("active")),
				$(this).attr(
					"data-id",
					"character-" + $('[name="character-id"]').attr("content")
				),
				$(".th-favorite-count", this)
					.attr(
						"data-id",
						"character-" + $('[name="character-id"]').attr("content")
					)
					.text($('[name="character-fave-count"]').attr("content"));
		}),
			$('[data-toggle="th-favorite"]', t).on("click", function (t) {
				return t.preventDefault(), faveCharacter(!1, this), !1;
			}),
			console.log("init fave"),
			$("[th-favorite][href], [th-favorite] a[href]", t).on(
				"click",
				function (t) {
					t.preventDefault();
					var e = $(this).closest("[th-favorite]");
					return (
						$(".fa-fw, .fi-star", e).addClass("fa-spin"),
						faveCharacter($(e).data("url"), e),
						!1
					);
				}
			);
	}),
	addInitFunction(function (t) {
		$(".comment-reply-btn", t).on("click", function (t) {
			return (
				t.preventDefault(),
				moveCommentPanel(
					$(".comment-reply-placeholder", $(this).closest(".comment"))[0],
					{
						parent_id: $(this).attr("data-parent-id"),
						owner_id: $(this).attr("data-owner-id"),
						type: $(this).attr("data-type"),
					}
				),
				$(".unhide-comment-form-btn").removeClass("hide"),
				!1
			);
		}),
			$(".unhide-comment-form-btn", t).on("click", function (t) {
				return (
					t.preventDefault(),
					moveCommentPanel(
						$(".comment-placeholder", $(this).closest(".comments")),
						{
							parent_id: 0,
							owner_id: $(this).attr("data-owner-id"),
							type: $(this).attr("data-type"),
						}
					),
					$(this).addClass("hide"),
					$(".unhide-comment-form-btn").not(this).removeClass("hide"),
					!1
				);
			});
	}),
	addInitFunction(function (t) {
		$(".post-reply-btn", t).on("click", function (t) {
			return (
				t.preventDefault(),
				console.log(
					$(".post-reply-placeholder", $(this).closest(".forum-post"))[0]
				),
				movePostPanel(
					$(".post-reply-placeholder", $(this).closest(".forum-post"))[0],
					{ parent_id: $(this).attr("data-parent-id") }
				),
				!1
			);
		});
	}),
	$(document).ready(function () {
		$(".magnific-gallery")[0] &&
			window.location.hash &&
			((id = window.location.hash.substring(1)),
			console.log("pop up image #" + id),
			$(".magnific-gallery").each(function () {
				(index = $(".magnific-item", this).index(
					$('.magnific-item[data-id="' + id + '"]')
				)),
					index > -1 && $(this).magnificPopup("open", index);
			}));
	}),
	addInitFunction(function (t) {
		$(".magnific-gallery", t).magnificPopup({
			delegate: ".magnific-item",
			type: "image",
			gallery: {
				enabled: !0,
				navigateByImgClick: !0,
				preload: [0, 1],
				tCounter: "",
			},
			image: {
				tError: function () {
					return (
						'<a href="%url%">The image #' +
						$(this.currItem.el[0]).attr("data-id") +
						"</a> could not be loaded."
					);
				},
				titleSrc: function (t) {
					return $(".magnific-caption", $(t.el).closest("li")).html();
				},
			},
			callbacks: {
				change: function () {
					(window.location.hash = $(this.currItem.el[0]).attr("data-id")),
						initMagnificBox(this.content, this.currItem.el[0]);
				},
				open: function () {},
				close: function () {
					history.pushState(
						"",
						document.title,
						window.location.pathname + window.location.search
					);
				},
				imageLoadComplete: function () {
					($wrap = $(".mfp-wrap")),
						$wrap && $wrap.hasScrollBar()
							? $(".mfp-arrow-right").css("right", "17px")
							: $(".mfp-arrow-right").css("right", "0px");
				},
			},
		});
	});
