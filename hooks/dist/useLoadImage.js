"use strict";
exports.__esModule = true;
var auth_helpers_react_1 = require("@supabase/auth-helpers-react");
var useLoadImage = function (song) {
    var supabaseClient = auth_helpers_react_1.useSupabaseClient();
    if (!song) {
        return null;
    }
    var imageData = supabaseClient.storage.from('images').getPublicUrl(song.image_path).data;
    return imageData.publicUrl;
};
exports["default"] = useLoadImage;
