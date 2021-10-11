module.exports = {
    configurations: {
        "chrome.app.laptop": {
            "target": "chrome.app",
            "width": 1366,
            "height": 768,
            "deviceScaleFactor": 1,
            "mobile": false
        },
        "chrome.app.iphone7": {
            "target": "chrome.app",
            "preset": "iPhone 7"
        },
        "chrome.docker.laptop": {
            "target": "chrome.docker",
            "width": 1366,
            "height": 768,
            "deviceScaleFactor": 1,
            "mobile": false
        },
        "chrome.docker.iphone7": {
            "target": "chrome.docker",
            "preset": "iPhone 7"
        }
    }
};
