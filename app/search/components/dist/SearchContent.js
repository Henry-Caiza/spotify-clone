'use client';
"use strict";
exports.__esModule = true;
var LikeButton_1 = require("@/components/LikeButton");
var MediaItem_1 = require("@/components/MediaItem");
var useOnPlay_1 = require("@/hooks/useOnPlay");
var bs_1 = require("react-icons/bs");
var ci_1 = require("react-icons/ci");
var SearchContent = function (_a) {
    var songs = _a.songs;
    var onPlay = useOnPlay_1["default"](songs);
    if (songs.length === 0) {
        return (React.createElement("div", { className: "flex flex-col gap-y-2 w-full px-6 text-neutral-400" }, "No songs found."));
    }
    return (React.createElement("div", { className: "flex flex-col gap-y-2 w-full" },
        React.createElement("h1", { className: "text-white text-2xl font-semibold mb-4 px-6" }, "Browse all"),
        React.createElement("div", { className: "grid grid-cols-12  border border-t-0  border-x-0 border-neutral-700 py-1 sm:py-2 text-neutral-400 items-center text-xs sm:text-base bg-neutral-800/30" },
            React.createElement("p", { className: "col-start-1 col-end-1 place-self-end" }, "#"),
            React.createElement("p", { className: "col-start-2 col-end-8 lg:col-start-2 lg:col-end-9 pl-11" }, "Title"),
            React.createElement(ci_1.CiClock2, { className: "col-start-12 col-end-12 place-self-setar", size: 20 })),
        songs.map(function (song, i) { return (React.createElement("div", { key: song.id, className: "grid grid-cols-12  hover:bg-neutral-800/50  rounded-md items-center relative group w-11/12 self-center" },
            React.createElement("div", { className: "absolute left-2 sm:left-4 lg:left-6 xl:left-8" },
                React.createElement(bs_1.BsFillPlayFill, { className: "transition opacity-0 items-center translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0", size: 20 })),
            React.createElement("p", { className: "transition opacity-100 translate translate-y-1/4 group-hover:opacity-0 group-hover:translate-y-0 col-start-1 col-end-1 place-self-center text-neutral-400" }, i + 1),
            React.createElement("div", { className: "flex flex-1 items-center col-start-2 col-end-8 lg:col-start-2 lg:col-end-11" },
                React.createElement(MediaItem_1["default"], { className: "hover:bg-neutral-800/0", onClick: function (id) { return onPlay(id); }, data: song })),
            React.createElement(LikeButton_1["default"], { className: "col-start-12 col-end-12 place-self-center", songId: song.id }))); })));
};
exports["default"] = SearchContent;
