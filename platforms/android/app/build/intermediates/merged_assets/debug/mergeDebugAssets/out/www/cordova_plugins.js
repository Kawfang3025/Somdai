cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [{
            "id": "cordova-plugin-firebasex.FirebasePlugin",
            "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
            "pluginId": "cordova-plugin-firebasex",
            "clobbers": [
                "FirebasePlugin"
            ]
        },
        {
            "id": "cordova-plugin-camera.Camera",
            "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "Camera"
            ]
        },
        {
            "id": "cordova-plugin-camera.CameraPopoverOptions",
            "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "CameraPopoverOptions"
            ]
        },
        {
            "id": "cordova-plugin-camera.camera",
            "file": "plugins/cordova-plugin-camera/www/Camera.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "navigator.camera"
            ]
        },
        {
            "id": "cordova-plugin-camera.CameraPopoverHandle",
            "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "CameraPopoverHandle"
            ]
        },
        {
            "id": "cordova-plugin-firebasex.FirebasePlugin",
            "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
            "pluginId": "cordova-plugin-firebasex",
            "clobbers": [
                "FirebasePlugin"
            ]
        },
        {
            "id": "cordova-plugin-device.device",
            "file": "plugins/cordova-plugin-device/www/device.js",
            "pluginId": "cordova-plugin-device",
            "clobbers": [
                "device"
            ]
        },
        {
            "id": "cordova-plugin-badge.Badge",
            "file": "plugins/cordova-plugin-badge/www/badge.js",
            "pluginId": "cordova-plugin-badge",
            "clobbers": [
                "cordova.plugins.notification.badge"
            ]
        },
        {
            "id": "cordova-plugin-local-notification.LocalNotification",
            "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
            "pluginId": "cordova-plugin-local-notification",
            "clobbers": [
                "cordova.plugins.notification.local"
            ]
        },
        {
            "id": "cordova-plugin-local-notification.LocalNotification.Core",
            "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
            "pluginId": "cordova-plugin-local-notification",
            "clobbers": [
                "cordova.plugins.notification.local.core",
                "plugin.notification.local.core"
            ]
        },
        {
            "id": "cordova-plugin-local-notification.LocalNotification.Util",
            "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
            "pluginId": "cordova-plugin-local-notification",
            "merges": [
                "cordova.plugins.notification.local.core",
                "plugin.notification.local.core"
            ]
        }
    ];
    module.exports.metadata = {
        "cordova-plugin-androidx": "1.0.2",
        "cordova-plugin-androidx-adapter": "1.1.0",
        "cordova-plugin-firebasex": "7.0.1",
        "cordova-plugin-whitelist": "1.3.4",
        "cordova-support-android-plugin": "1.0.1",
        "cordova-support-google-services": "1.3.2",
        "cordova-plugin-device": "2.0.3",
        "cordova-plugin-badge": "0.8.8",
        "cordova-plugin-local-notification": "0.9.0-beta.2",
        "cordova-plugin-camera": "4.1.0"
    };
});