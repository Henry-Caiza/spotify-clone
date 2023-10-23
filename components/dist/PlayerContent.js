'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
//import useSound from 'use-sound';
var useSound = require('use-sound').useSound;
var MediaItem_1 = require("./MediaItem");
var LikeButton_1 = require("./LikeButton");
var bs_1 = require("react-icons/bs");
var ai_1 = require("react-icons/ai");
var hi2_1 = require("react-icons/hi2");
var Slider_1 = require("./Slider");
var usePlayer_1 = require("@/hooks/usePlayer");
var dayjs_1 = require("dayjs");
var PlayerContent = function (_a) {
    var song = _a.song, songUrl = _a.songUrl;
    var player = usePlayer_1["default"]();
    var _b = react_1.useState(1), volume = _b[0], setVolume = _b[1];
    var _c = react_1.useState(false), isPlaying = _c[0], setIsPlaying = _c[1];
    var Icon = isPlaying ? bs_1.BsPauseFill : bs_1.BsPlayFill;
    var VolumeIcon = volume === 0 ? hi2_1.HiSpeakerXMark : hi2_1.HiSpeakerWave;
    var onPlayNext = function () {
        if (player.ids.length === 0) {
            return;
        }
        var currentIndex = player.ids.findIndex(function (id) { return id === player.activeId; });
        var nextSong = player.ids[currentIndex + 1];
        if (!nextSong) {
            return player.setId(player.ids[0]);
        }
        player.setId(nextSong);
    };
    var onPlayPrevious = function () {
        if (player.ids.length === 0) {
            return;
        }
        var currentIndex = player.ids.findIndex(function (id) { return id === player.activeId; });
        var previousSong = player.ids[currentIndex - 1];
        if (!previousSong) {
            return player.setId(player.ids[player.ids.length - 1]);
        }
        player.setId(previousSong);
    };
    var _d = useSound(songUrl, {
        // playbackRate,
        volume: volume,
        onplay: function () { return setIsPlaying(true); },
        onend: function () {
            setIsPlaying(false);
            onPlayNext();
        },
        onpause: function () { return setIsPlaying(false); },
        format: ['mp3']
    }), play = _d[0], _e = _d[1], pause = _e.pause, sound = _e.sound;
    //console.log(sound);
    react_1.useEffect(function () {
        sound === null || sound === void 0 ? void 0 : sound.play();
        return function () {
            sound === null || sound === void 0 ? void 0 : sound.unload();
        };
    }, [sound]);
    var durationSong = sound === null || sound === void 0 ? void 0 : sound.duration();
    var durationM = dayjs_1["default"].unix(durationSong).minute();
    var durationS = dayjs_1["default"].unix(durationSong).second();
    var durationMinSec = durationM + ':' + durationS;
    var handlePlay = function () {
        if (!isPlaying) {
            play();
        }
        else {
            pause();
        }
    };
    var toogleMute = function () {
        if (volume === 0) {
            setVolume(1);
        }
        else {
            setVolume(0);
        }
    };
    return (React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 h-full" },
        React.createElement("div", { className: "flex w-full justify-start" },
            React.createElement("div", { className: "flex items-center gap-x-4" },
                React.createElement(MediaItem_1["default"], { data: song }),
                React.createElement(LikeButton_1["default"], { className: '', songId: song.id }))),
        React.createElement("div", { className: "flex md:hidden col-auto w-full justify-end items-center" },
            React.createElement("div", { onClick: handlePlay, className: "h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer" },
                React.createElement(Icon, { size: 30, className: "text-black" }))),
        React.createElement("div", { className: "hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6" },
            React.createElement(ai_1.AiFillStepBackward, { onClick: onPlayPrevious, size: 30, className: "text-neutral-400 cursor-pointer hover:text-white transition " }),
            React.createElement("div", { onClick: handlePlay, className: "flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer" },
                React.createElement(Icon, { size: 30, className: "text-black" })),
            React.createElement(ai_1.AiFillStepForward, { onClick: onPlayNext, size: 30, className: "text-neutral-400 cursor-pointer hover:text-white transition" })),
        React.createElement("div", { className: "hidden md:flex w-full justify-end pr-2" },
            React.createElement("p", { className: 'place-self-center pr-4' }, durationMinSec),
            React.createElement("div", { className: "flex items-center gap-x-2 w-[120px]" },
                React.createElement(VolumeIcon, { onClick: toogleMute, className: "cursor-pointer", size: 34 }),
                React.createElement(Slider_1["default"], { value: volume, onChange: function (value) { return setVolume(value); } })))));
};
exports["default"] = PlayerContent;