'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var tailwind_merge_1 = require("tailwind-merge");
var rx_1 = require("react-icons/rx");
var hi_1 = require("react-icons/hi");
var bi_1 = require("react-icons/bi");
var fa_1 = require("react-icons/fa");
var Button_1 = require("./Button");
var react_hot_toast_1 = require("react-hot-toast");
var auth_helpers_react_1 = require("@supabase/auth-helpers-react");
var useUser_1 = require("@/hooks/useUser");
var useAuthModal_1 = require("@/hooks/useAuthModal");
var usePlayer_1 = require("@/hooks/usePlayer");
var Header = function (_a) {
    var _b;
    var children = _a.children, className = _a.className;
    console.log(className);
    var player = usePlayer_1["default"]();
    var authModal = useAuthModal_1["default"]();
    var router = navigation_1.useRouter();
    var supabaseClient = auth_helpers_react_1.useSupabaseClient();
    var user = useUser_1.useUser().user;
    var handleLogout = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supabaseClient.auth.signOut()];
                case 1:
                    error = (_a.sent()).error;
                    player.reset();
                    router.refresh();
                    if (error) {
                        react_hot_toast_1.toast.error(error.message);
                    }
                    else {
                        react_hot_toast_1.toast.success('You have been logged out');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("h-fit bg-gradient-to-b from-emerald-800 p-6", className) },
        React.createElement("div", { className: "w-full mb-4 flex items-center justify-between" },
            React.createElement("div", { className: "hidden md:flex gap-x-2 items-center" },
                React.createElement("button", { onClick: function () { return router.back(); }, className: " rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" },
                    React.createElement(rx_1.RxCaretLeft, { className: "text-white", size: 35 })),
                React.createElement("button", { onClick: function () { return router.forward(); }, className: " rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" },
                    React.createElement(rx_1.RxCaretRight, { className: "text-white", size: 35 }))),
            React.createElement("div", { className: "flex md:hidden gap-x-2 items-center" },
                React.createElement("button", { className: "rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition" },
                    React.createElement(hi_1.HiHome, { className: "text-black", size: 20 })),
                React.createElement("button", { className: "rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition" },
                    React.createElement(bi_1.BiSearch, { className: "text-black", size: 20 }))),
            React.createElement("div", { className: "flex justify-between items-center gap-x-4" }, user ? (React.createElement("div", { className: "flex gap-x-4 items-center" },
                React.createElement(Button_1["default"], { onClick: handleLogout, className: "bg-white px-6 py-2" }, "Logout"),
                React.createElement(Button_1["default"], { onClick: function () { return router.push('/account'); }, className: "bg-white flex items-center gap-2" },
                    React.createElement(fa_1.FaUserAlt, null),
                    React.createElement("p", { className: "text-xs" }, (_b = user.email) === null || _b === void 0 ? void 0 : _b.slice(0, 3))))) : (React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    React.createElement(Button_1["default"], { onClick: authModal.onOpen, className: "bg-transparent text-neutral-300 font-medium" }, "Sign up")),
                React.createElement("div", null,
                    React.createElement(Button_1["default"], { onClick: authModal.onOpen, className: "bg-white px-6 py-2" }, "Log in")))))),
        children));
};
exports["default"] = Header;