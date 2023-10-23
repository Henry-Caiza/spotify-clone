'use client';
"use strict";
exports.__esModule = true;
var bi_1 = require("react-icons/bi");
var ai_1 = require("react-icons/ai");
var useAuthModal_1 = require("@/hooks/useAuthModal");
var useUser_1 = require("@/hooks/useUser");
var useUploadModal_1 = require("@/hooks/useUploadModal");
var MediaItem_1 = require("./MediaItem");
var useOnPlay_1 = require("@/hooks/useOnPlay");
var useSubscribeModal_1 = require("@/hooks/useSubscribeModal");
var Library = function (_a) {
    var songs = _a.songs;
    var subscribeModal = useSubscribeModal_1["default"]();
    var authModal = useAuthModal_1["default"]();
    var uploadModal = useUploadModal_1["default"]();
    var _b = useUser_1.useUser(), user = _b.user, subscription = _b.subscription;
    console.log(user);
    var onplay = useOnPlay_1["default"](songs);
    var onClick = function () {
        if (!user) {
            return authModal.onOpen();
        }
        if (!subscription) {
            return subscribeModal.onOpen();
        }
        return uploadModal.onOpen();
    };
    return (React.createElement("div", { className: "flex flex-col" },
        React.createElement("div", { className: "flex items-center justify-between px-5 pt-4" },
            React.createElement("div", { className: "inline-flex items-center gap-x-2" },
                React.createElement(bi_1.BiLibrary, { size: 26, className: "text-neutral-400" }),
                React.createElement("p", { className: "text-neutral-400 font-medium text-md" }, "Your Library")),
            React.createElement(ai_1.AiOutlinePlus, { onClick: onClick, size: 20, className: "text-neutral-400 cursor-pointer hover:text-white transition" })),
        React.createElement("div", { className: "flex flex-col gap-y-2 mt-4 px-3" }, songs.map(function (item) { return (React.createElement(MediaItem_1["default"], { onClick: function (id) { return onplay(id); }, key: item.id, data: item })); }))));
};
exports["default"] = Library;
