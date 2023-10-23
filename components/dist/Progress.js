'use client';
"use strict";
exports.__esModule = true;
var Progress = require("@radix-ui/react-progress");
var react_1 = require("react");
var ProgressSong = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 1 : _b, onChange = _a.onChange;
    var _c = react_1.useState(13), progress = _c[0], setProgress = _c[1];
    react_1.useEffect(function () {
        var timer = setTimeout(function () { return setProgress(66); }, 500);
        return function () { return clearTimeout(timer); };
    }, []);
    var handleChange = function (newValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue[0]);
    };
    return (React.createElement(Progress.Root, { className: "ProgressRoot", value: progress },
        React.createElement(Progress.Indicator, { className: "ProgressIndicator", style: { transform: "translateX(-" + (100 - progress) + "%)" } })));
};
exports["default"] = ProgressSong;
