'use client';
"use strict";
exports.__esModule = true;
var LikeButton_1 = require("@/components/LikeButton");
var MediaItem_1 = require("@/components/MediaItem");
var useOnPlay_1 = require("@/hooks/useOnPlay");
var useUser_1 = require("@/hooks/useUser");
var navigation_1 = require("next/navigation");
var ci_1 = require("react-icons/ci");
var bs_1 = require("react-icons/bs");
var react_1 = require("react");
var dayjs_1 = require("dayjs");
var relativeTime = require('dayjs/plugin/relativeTime');
var LikedContent = function (_a) {
    var songs_Liked = _a.songs_Liked;
    var onplay = useOnPlay_1["default"](songs_Liked);
    var router = navigation_1.useRouter();
    var _b = useUser_1.useUser(), isLoading = _b.isLoading, user = _b.user;
    react_1.useEffect(function () {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);
    if (songs_Liked.length === 0) {
        return (React.createElement("div", { className: "flex flex-col gap-y-2 w-full px-6 text-neutral-400" }, "No liked songs."));
    }
    function timeLiked(song_created_at) {
        dayjs_1["default"].extend(relativeTime);
        var date1 = dayjs_1["default"](song_created_at);
        //@ts-ignore
        var dateFromNow = date1.fromNow();
        return dateFromNow;
    }
    return (React.createElement("div", { className: "flex flex-col gap-y-2 sm:p-6 text-xs sm:text-base" },
        React.createElement("div", { className: "grid grid-cols-12  border border-t-0  border-x-0 border-neutral-700 py-1 sm:p-2 text-neutral-400 items-center text-xs sm:text-base" },
            React.createElement("p", { className: "col-start-1 col-end-1 place-self-center " }, "#"),
            React.createElement("p", { className: "col-start-2 col-end-8 lg:col-start-2 lg:col-end-9" }, "Title"),
            React.createElement("p", { className: "col-start-9 col-end-12 lg:col-start-10 lg:col-end-11" }, "Date added"),
            React.createElement(ci_1.CiClock2, { className: "col-start-12 col-end-12 place-self-center", size: 20 })),
        songs_Liked.map(function (song, i) { return (React.createElement("div", { 
            //@ts-ignore
            // onClick={urlSong(i + 1)}
            key: 
            //@ts-ignore
            song.songs.id, className: "grid grid-cols-12  hover:bg-neutral-800/50  rounded-md items-center relative group" },
            React.createElement("div", { className: "absolute left-2 sm:left-4 lg:left-6 xl:left-8" },
                React.createElement(bs_1.BsFillPlayFill, { className: "transition opacity-0 items-center translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0", size: 20 })),
            React.createElement("p", { className: "transition opacity-100 translate translate-y-1/4 group-hover:opacity-0 group-hover:translate-y-0 col-start-1 col-end-1 place-self-center text-neutral-400" }, i + 1),
            React.createElement("div", { className: "flex flex-1 items-center col-start-2 col-end-8 lg:col-start-2 lg:col-end-9" },
                React.createElement(MediaItem_1["default"], { className: "hover:bg-neutral-800/0", onClick: function (id) { return onplay(id); }, 
                    //@ts-ignore
                    data: song.songs })),
            React.createElement("p", { className: "col-start-9 col-end-12 lg:col-start-10 lg:col-end-11  text-neutral-400 text-xs sm:text-sm" },
                " ",
                //@ts-ignore
                timeLiked(song.created_at)),
            React.createElement(LikeButton_1["default"], { className: "col-start-12 col-end-12 place-self-center", songId: 
                //@ts-ignore
                song.songs.id }))); })));
};
exports["default"] = LikedContent;
