"use strict";
exports.__esModule = true;
var Dialog = require("@radix-ui/react-dialog");
var io_1 = require("react-icons/io");
var Modal = function (_a) {
    var isOpen = _a.isOpen, onChange = _a.onChange, title = _a.title, description = _a.description, children = _a.children;
    return (React.createElement(Dialog.Root, { open: isOpen, defaultOpen: isOpen, onOpenChange: onChange },
        React.createElement(Dialog.Portal, null,
            React.createElement(Dialog.Overlay, { className: 'bg-black/80 backdrop-blur-sm fixed inset-0 ' }),
            React.createElement(Dialog.Content, { className: 'fixed drop-shadow-md border border-transparent top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[88vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-gradient-to-tl from-[#282828] to-[#323232] p-[25px] focus:outline-none' },
                React.createElement(Dialog.Title, { className: 'text-xl text-center font-bold mb-4' }, title),
                React.createElement(Dialog.Description, { className: 'mb-5 text-sm lg:text-2xl lg:font-semibold leading-normal text-center' }, description),
                React.createElement("div", null, children),
                React.createElement(Dialog.Close, { asChild: true },
                    React.createElement("button", { className: 'text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none' },
                        React.createElement(io_1.IoMdClose, { size: "2em", color: "#fff" })))))));
};
exports["default"] = Modal;
