"use strict";
exports.__esModule = true;
var tailwind_merge_1 = require("tailwind-merge");
var Box = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("bg-[#121212] rounded-lg h-fit w-full", className) }, children));
};
exports["default"] = Box;
