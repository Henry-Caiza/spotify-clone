'use client';
"use strict";
exports.__esModule = true;
var useGetSongById_1 = require("@/hooks/useGetSongById");
var useLoadSongUrl_1 = require("@/hooks/useLoadSongUrl");
var usePlayer_1 = require("@/hooks/usePlayer");
var PlayerContent_1 = require("./PlayerContent");
var Player = function () {
    var player = usePlayer_1["default"]();
    var song = useGetSongById_1["default"](player.activeId).song;
    var songUrl = useLoadSongUrl_1["default"](song);
    if (!song || !songUrl || !player.activeId) {
        return null;
    }
    //  console.log(player.activeId);
    return (React.createElement("div", { className: "fixed bottom-0 bg-black w-full py-2 h-[80px] px-4" },
        React.createElement(PlayerContent_1["default"], { key: songUrl, song: song, songUrl: songUrl })));
};
exports["default"] = Player;
