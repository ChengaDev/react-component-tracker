'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var DevelopmentMode;
(function (DevelopmentMode) {
    DevelopmentMode["Production"] = "PRODUCTION";
    DevelopmentMode["Development"] = "DEVELOPMENT";
})(DevelopmentMode || (DevelopmentMode = {}));
var DevelopmentModeEnum = DevelopmentMode;

var LogTypeEnum;
(function (LogTypeEnum) {
    LogTypeEnum["Table"] = "table";
    LogTypeEnum["PropPerLine"] = "propPerLine";
    LogTypeEnum["List"] = "list";
})(LogTypeEnum || (LogTypeEnum = {}));
var LogTypeEnum$1 = LogTypeEnum;

var withPropsTracking = function (WrappedComponent) {
    return function (wrapperProps) {
        var mode = wrapperProps.mode;
        var renderWrapperComponent = function (props) { return (React__default['default'].createElement(WrappedComponent, __assign({}, props))); };
        return function (props) {
            // if this is production context - return
            if (!mode ||
                mode === DevelopmentModeEnum.Production ||
                process.env["NODE_ENV"] === "production") {
                return renderWrapperComponent(props);
            }
            // log component name
            console.group(WrappedComponent.name + " component props:");
            var propsToLog = {};
            if (wrapperProps.trackedProps &&
                wrapperProps.trackedProps.length > 0) {
                // logs only tracked props
                wrapperProps.trackedProps.forEach(function (prop) {
                    propsToLog[prop] = props[prop];
                });
            }
            else if (wrapperProps.ignoredProps &&
                wrapperProps.ignoredProps.length > 0) {
                // ignore props in ignoredProps
                Object.keys(props).forEach(function (prop) {
                    var _a;
                    if (!((_a = wrapperProps.ignoredProps) === null || _a === void 0 ? void 0 : _a.includes(prop))) {
                        propsToLog[prop] = props[prop];
                    }
                });
            }
            else {
                // if there is not tracked or ignoreed props - log all the props
                propsToLog = __assign({}, props);
            }
            logProps(propsToLog);
            return renderWrapperComponent(props);
        };
    };
};
var logProps = function (props) {
    if (props.logType === LogTypeEnum$1.List) {
        console.dir(props);
    }
    else if (props.logType === LogTypeEnum$1.Table) {
        console.table(props);
    }
    else {
        Object.keys(props).forEach(function (propKey) {
            return console.log(propKey + ": " + props[propKey]);
        });
    }
};

exports.DevelopmentMode = DevelopmentModeEnum;
exports.LogTypeEnum = LogTypeEnum$1;
exports.default = withPropsTracking;
//# sourceMappingURL=index.js.map
