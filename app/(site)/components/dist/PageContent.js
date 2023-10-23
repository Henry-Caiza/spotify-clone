'use client';
"use strict";
exports.__esModule = true;
var SongItem_1 = require("@/components/SongItem");
var useGetSongById_1 = require("@/hooks/useGetSongById");
var useLoadSongUrl_1 = require("@/hooks/useLoadSongUrl");
var useOnPlay_1 = require("@/hooks/useOnPlay");
var _a = require('howler'), Howl = _a.Howl, Howler = _a.Howler;
var PageContent = function (_a) {
    var songs = _a.songs;
    var onPlay = useOnPlay_1["default"](songs);
    var urlSong = function (id) {
        var song = useGetSongById_1["default"](id).song;
        var songUrl = useLoadSongUrl_1["default"](song);
        var sound2 = new Howl({
            src: songUrl,
            preload: true
        });
        console.log(sound2);
        // const srcSong = sound2._src
        //console.log(sound2._src);
        return songUrl;
    };
    if (songs.length === 0) {
        return (React.createElement("div", { className: "mt-4 text-neutral-400" }, "No songs available."));
    }
    return (React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4" }, songs.map(function (item) { return (React.createElement(SongItem_1["default"], { key: item.id, onClick: function (id) { return onPlay(id); }, data: item })); })));
};
exports["default"] = PageContent;
