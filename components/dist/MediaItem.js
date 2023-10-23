'use client';
"use strict";
exports.__esModule = true;
var useLoadImage_1 = require("@/hooks/useLoadImage");
var usePlayer_1 = require("@/hooks/usePlayer");
var image_1 = require("next/image");
var tailwind_merge_1 = require("tailwind-merge");
var MediaItem = function (_a) {
    var data = _a.data, onClick = _a.onClick, className = _a.className;
    var player = usePlayer_1["default"]();
    var imageUrl = useLoadImage_1["default"](data);
    var handleClick = function () {
        if (onClick) {
            return onClick(data.id);
        }
        return player.setId(data.id);
    };
    return (React.createElement("div", { onClick: handleClick, className: tailwind_merge_1.twMerge("flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md", className) },
        React.createElement("div", { className: "relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden" },
            React.createElement(image_1["default"], { fill: true, src: imageUrl || '/images/liked.png', alt: "Media Item", className: "object-cover" })),
        React.createElement("div", { className: "flex flex-col gap-y-1 overflow-hidden" },
            React.createElement("p", { className: "text-white truncate  text-xs sm:text-base" }, data.title),
            React.createElement("p", { className: "text-neutral-400 sm:text-sm text-xs truncate" }, data.author))));
};
exports["default"] = MediaItem;
