'use client';
"use strict";
exports.__esModule = true;
var Progress = require("@radix-ui/react-progress");
var react_1 = require("react");
var ProgressSong = function (_a) {
    var durationMili = _a.durationMili;
    var _b = react_1.useState(0), progress = _b[0], setProgress = _b[1];
    var b = durationMili === null || durationMili === void 0 ? void 0 : durationMili.toString();
    console.log(b);
    react_1.useEffect(function () {
        var timer = setTimeout(function () { return setProgress(100); }, 500);
        return function () { return clearTimeout(timer); };
    }, []);
    return (React.createElement(Progress.Root, { className: "ProgressRoot relative overflow-hidden bg-red-500 rounded-full w-full h-4", value: progress },
        React.createElement(Progress.Indicator, { className: "ProgressIndicator bg-white w-full h-full transition duration-[" + b + "ms] ", style: { transform: "translateX(-" + (100 - progress) + "%)" } })));
};
exports["default"] = ProgressSong;
