'use client';
"use strict";
exports.__esModule = true;
var LikeButton_1 = require("@/components/LikeButton");
var MediaItem_1 = require("@/components/MediaItem");
var useOnPlay_1 = require("@/hooks/useOnPlay");
var SearchContent = function (_a) {
    var songs = _a.songs;
    var onPlay = useOnPlay_1["default"](songs);
    if (songs.length === 0) {
        return (React.createElement("div", { className: "flex flex-col gap-y-2 w-full px-6 text-neutral-400" }, "No songs found."));
    }
    return (React.createElement("div", { className: "flex flex-col gap-y-2 w-full px-6" },
        React.createElement("h1", { className: "text-white text-2xl font-semibold mb-4" }, "Browse all"),
        songs.map(function (song) { return (React.createElement("div", { key: song.id, className: "flex items-center gap-x-4 w-full" },
            React.createElement("div", { className: "flex-1" },
                React.createElement(MediaItem_1["default"], { onClick: function (id) { return onPlay(id); }, data: song })),
            React.createElement(LikeButton_1["default"], { songId: song.id }))); })));
};
exports["default"] = SearchContent;
