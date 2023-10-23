'use client';
"use strict";
exports.__esModule = true;
var SongItem_1 = require("@/components/SongItem");
var useOnPlay_1 = require("@/hooks/useOnPlay");
var PageContent = function (_a) {
    var songs = _a.songs;
    var onPlay = useOnPlay_1["default"](songs);
    if (songs.length === 0) {
        return (React.createElement("div", { className: "mt-4 text-neutral-400" }, "No songs available."));
    }
    return (React.createElement("div", { className: "grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4" }, songs.map(function (item) { return (React.createElement(SongItem_1["default"], { key: item.id, onClick: function (id) { return onPlay(id); }, data: item })); })));
};
exports["default"] = PageContent;
