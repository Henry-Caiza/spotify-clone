'use client';
"use strict";
exports.__esModule = true;
var useDebounce_1 = require("@/hooks/useDebounce");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var query_string_1 = require("query-string");
var Input_1 = require("./Input");
var SearchInput = function () {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(""), value = _a[0], setValue = _a[1];
    var debouncedValue = useDebounce_1["default"](value, 500);
    react_1.useEffect(function () {
        var query = {
            title: debouncedValue
        };
        var url = query_string_1["default"].stringifyUrl({
            url: "/search",
            query: query
        });
        router.push(url);
    }, [debouncedValue, router]);
    return (React.createElement(Input_1["default"], { placeholder: "What do you to listen to?", value: value, onChange: function (e) { return setValue(e.target.value); }, className: "rounded-full bg-neutral-800 focus:border-white" }));
};
exports["default"] = SearchInput;
