'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var hi_1 = require("react-icons/hi");
var bi_1 = require("react-icons/bi");
var Box_1 = require("./Box");
var SidebarItem_1 = require("./SidebarItem");
var Library_1 = require("./Library");
var usePlayer_1 = require("@/hooks/usePlayer");
var tailwind_merge_1 = require("tailwind-merge");
var Sidebar = function (_a) {
    var children = _a.children, songs = _a.songs;
    var pathname = navigation_1.usePathname();
    var player = usePlayer_1["default"]();
    var routes = react_1.useMemo(function () {
        return [
            {
                icon: hi_1.HiHome,
                label: 'Home',
                active: pathname !== '/search',
                href: '/'
            },
            {
                icon: bi_1.BiSearch,
                label: 'Search',
                active: pathname === '/search',
                href: '/search'
            }
        ];
    }, [
        pathname
    ]);
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("flex h-full", player.activeId && "h-[calc(100%-80px)]") },
        React.createElement("div", { className: "hidden md:flex flex-col gap-y-2 bg-black h-full w-[430px] p-2" },
            React.createElement(Box_1["default"], null,
                React.createElement("div", { className: "flex flex-col gap-y-4 px-5 py-4" }, routes.map(function (item) { return (React.createElement(SidebarItem_1["default"], __assign({ key: item.label }, item))); }))),
            React.createElement(Box_1["default"], { className: "overflow-auto h-full" },
                React.createElement(Library_1["default"], { songs: songs }))),
        React.createElement("main", { className: " h-full flex-1 overflow-auto py-2" }, children)));
};
exports["default"] = Sidebar;
