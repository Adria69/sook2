"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useTitle = function (initialTitle) {
    var _a = react_1.useState(initialTitle), title = _a[0], setTitle = _a[1];
    var changeTitle = function () {
        var HTMLTitle = document.querySelector('title');
        if (HTMLTitle) {
            HTMLTitle.innerText = title;
        }
    };
    react_1.useEffect(changeTitle, [title]);
    return setTitle;
};
exports.default = useTitle;
//# sourceMappingURL=useTitle.js.map