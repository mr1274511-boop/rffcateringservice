import { c as createLucideIcon, u as useLanguage, a as useNavigate, r as reactExports, j as jsxRuntimeExports, I as IslamicPattern, t } from "./index-DhBLjtS6.js";
import { B as Button } from "./button-D9mkWWJk.js";
import { L as Label, I as Input } from "./label-OK4AqW0t.js";
import { m as motion } from "./proxy-DF-rmAHk.js";
import { S as Star } from "./star-BWNaSEkz.js";
import "./index-DVd_r5ne.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const ADMIN_PASSWORD = "rff-admin-2026";
function AdminLoginPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [password, setPassword] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem("rff-admin-auth", "1");
        navigate({ to: "/admin" });
      } else {
        setError("Invalid password. Please try again.");
        setLoading(false);
      }
    }, 400);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-[85vh] flex items-center justify-center px-4",
      "data-ocid": "admin_login.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.07 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "relative z-10 bg-card border border-border rounded-2xl p-8 shadow-elevated",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mb-4", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: "text-primary fill-primary" }, i)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "text-primary", size: 26 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: t(language, "adminLogin") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "RFF Catering — Secure Admin Area" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "arabic-text text-primary/80 text-sm mt-3 font-display", children: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "admin-pw",
                      className: "text-foreground mb-1.5 block text-sm font-medium",
                      children: t(language, "adminPassword")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "admin-pw",
                        type: showPw ? "text" : "password",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        placeholder: t(language, "adminPasswordPlaceholder"),
                        required: true,
                        className: "pr-10 bg-background/60 border-border/80 focus:border-primary/60",
                        "data-ocid": "admin_login.password_input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowPw((v) => !v),
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth",
                        "aria-label": "Toggle password visibility",
                        children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
                      }
                    )
                  ] })
                ] }),
                error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0 },
                    className: "text-destructive text-sm bg-destructive/10 border border-destructive/20 px-3 py-2 rounded-lg",
                    "data-ocid": "admin_login.error_state",
                    children: error
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold transition-smooth",
                    disabled: loading,
                    "data-ocid": "admin_login.submit_button",
                    children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" }),
                      "Authenticating…"
                    ] }) : t(language, "adminLoginBtn")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-6", children: "خدمة تقديم الطعام RFF · Catering Admin Portal" })
            ]
          }
        )
      ] })
    }
  );
}
export {
  AdminLoginPage as default
};
