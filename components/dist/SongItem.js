'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var useLoadImage_1 = require("@/hooks/useLoadImage");
var PlayButton_1 = require("./PlayButton");
var SongItem = function (_a) {
    var data = _a.data, onClick = _a.onClick;
    var imagePath = useLoadImage_1["default"](data);
    return (React.createElement("div", { onClick: function () { return onClick(data.id); }, className: "relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3" },
        React.createElement("div", { className: "relative aspect-square w-full h-full rounded-md overflow-hidden" },
            React.createElement(image_1["default"], { className: "object-cover", src: imagePath || '/images/liked.png', fill: true, alt: "Image" })),
        React.createElement("div", { className: "flex flex-col items-center w-full pt-4 gap-y-1" },
            React.createElement("p", { className: "font-semibold truncate w-full text-sm sm:text-base" }, data.title),
            React.createElement("p", { className: "text-neutral-400 text-xs sm:text-sm pb-4 w-full truncate" },
                "By ",
                data.author)),
        React.createElement("div", { className: "absolute bottom-24 right-5" },
            React.createElement(PlayButton_1["default"], null))));
};
exports["default"] = SongItem;
