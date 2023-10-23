'use client';
"use strict";
exports.__esModule = true;
var auth_helpers_react_1 = require("@supabase/auth-helpers-react");
var auth_ui_react_1 = require("@supabase/auth-ui-react");
var auth_ui_shared_1 = require("@supabase/auth-ui-shared");
var navigation_1 = require("next/navigation");
var Modal_1 = require("./Modal");
var useAuthModal_1 = require("@/hooks/useAuthModal");
var react_1 = require("react");
var AuthModal = function () {
    var supabaseClient = auth_helpers_react_1.useSupabaseClient();
    var router = navigation_1.useRouter();
    var session = auth_helpers_react_1.useSessionContext().session;
    var _a = useAuthModal_1["default"](), onClose = _a.onClose, isOpen = _a.isOpen;
    react_1.useEffect(function () {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);
    var onChange = function (open) {
        if (!open) {
            onClose();
        }
    };
    return (React.createElement(Modal_1["default"], { title: "Welcome back", description: "Login to your account", isOpen: isOpen, onChange: onChange },
        React.createElement(auth_ui_react_1.Auth, { theme: "dark", 
            //magicLink
            providers: ['google', 'facebook', 'github'], supabaseClient: supabaseClient, appearance: {
                theme: auth_ui_shared_1.ThemeSupa,
                variables: {
                    "default": {
                        colors: {
                            brand: '#404040',
                            brandAccent: '#22c55e'
                        }
                    }
                }
            } })));
};
exports["default"] = AuthModal;
