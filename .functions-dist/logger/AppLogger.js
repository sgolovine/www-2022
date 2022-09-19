/* eslint-disable no-console */
var ColorDefaults;
(function (ColorDefaults) {
    // Debug
    ColorDefaults["DebugBackground"] = "black";
    ColorDefaults["DebugForeground"] = "tomato";
    // Info
    ColorDefaults["InfoBackground"] = "transparent";
    ColorDefaults["InfoForeground"] = "royalblue";
    // Warning
    ColorDefaults["WarningBackground"] = "transparent";
    ColorDefaults["WarningForeground"] = "orange";
    // Error
    ColorDefaults["ErrorBackground"] = "transparent";
    ColorDefaults["ErrorForeground"] = "red";
    // Default
    ColorDefaults["DefaultBackground"] = "transparent";
    ColorDefaults["DefaultForeground"] = "white";
})(ColorDefaults || (ColorDefaults = {}));
const defaultFlags = {
    logProduction: false,
    silent: false,
    pretty: false,
    disablePrefix: false,
};
class AppLogger {
    constructor(flags) {
        var _a, _b, _c, _d;
        this.logProduction = (_a = flags === null || flags === void 0 ? void 0 : flags.logProduction) !== null && _a !== void 0 ? _a : defaultFlags.logProduction;
        this.silent = (_b = flags === null || flags === void 0 ? void 0 : flags.silent) !== null && _b !== void 0 ? _b : defaultFlags.silent;
        this.pretty = (_c = flags === null || flags === void 0 ? void 0 : flags.pretty) !== null && _c !== void 0 ? _c : defaultFlags.pretty;
        this.disablePrefix = (_d = flags === null || flags === void 0 ? void 0 : flags.disablePrefix) !== null && _d !== void 0 ? _d : defaultFlags.disablePrefix;
        this.prefix = flags === null || flags === void 0 ? void 0 : flags.prefix;
        this.instanceCounter = 0;
        // Check if we can run logs
        // 1. If `silent` is true, never run logs
        if (flags === null || flags === void 0 ? void 0 : flags.silent) {
            this.canLog = false;
            return;
        }
        // 2. If NODE_ENV === 'production' AND logProduction is 'true'
        if (process.env.NODE_ENV === "production" && (flags === null || flags === void 0 ? void 0 : flags.logProduction)) {
            this.canLog = true;
            return;
        }
        // 3. If NODE_ENV === 'development' OR NODE_ENV is not defined
        if (process.env.NODE_ENV === "development" ||
            process.env.NODE_ENV === undefined) {
            this.canLog = true;
            return;
        }
        // 4. If NODE_ENV === 'production'. DO not log.
        this.canLog = false;
        return;
    }
    formatLog(log, bg, fg) {
        const backgroundColor = bg !== null && bg !== void 0 ? bg : ColorDefaults.DefaultBackground;
        const foregroundColor = fg !== null && fg !== void 0 ? fg : ColorDefaults.DefaultForeground;
        const prefix = this.disablePrefix
            ? ""
            : this.prefix
                ? `[${this.instanceCounter.toString()}] [${this.prefix}]`
                : `[${this.instanceCounter.toString()}]`;
        const outputString = typeof log === "object"
            ? JSON.stringify(log, null, 
            // "2" will stringify the JSON with indentation.
            // "0" will stringify the JSON inline
            this.pretty ? 2 : 0)
            : log;
        return [
            `%c${prefix} ${outputString}`,
            `color:${foregroundColor};background-color:${backgroundColor}`,
        ];
    }
    debug(...args) {
        const backgroundColor = ColorDefaults.DebugBackground;
        const foregroundColor = ColorDefaults.DebugForeground;
        if (this.canLog) {
            args.forEach(arg => {
                const log = this.formatLog(arg, backgroundColor, foregroundColor);
                if (typeof log === "object") {
                    console.debug(log[0], log[1]);
                    this.instanceCounter = this.instanceCounter + 1;
                    return;
                }
                console.debug(log[0], log[1]);
                this.instanceCounter = this.instanceCounter + 1;
                return;
            });
        }
        return;
    }
    info(...args) {
        const backgroundColor = ColorDefaults.InfoBackground;
        const foregroundColor = ColorDefaults.InfoForeground;
        if (this.canLog) {
            args.forEach(arg => {
                const log = this.formatLog(arg, backgroundColor, foregroundColor);
                if (typeof log === "object") {
                    console.info(log[0], log[1]);
                    this.instanceCounter = this.instanceCounter + 1;
                    return;
                }
                console.info(log[0], log[1]);
                this.instanceCounter = this.instanceCounter + 1;
                return;
            });
        }
        return;
    }
    warn(...args) {
        const backgroundColor = ColorDefaults.WarningBackground;
        const foregroundColor = ColorDefaults.WarningForeground;
        if (this.canLog) {
            args.forEach(arg => {
                const log = this.formatLog(arg, backgroundColor, foregroundColor);
                if (typeof log === "object") {
                    console.warn(log[0], log[1]);
                    this.instanceCounter = this.instanceCounter + 1;
                    return;
                }
                console.warn(log[0], log[1]);
                this.instanceCounter = this.instanceCounter + 1;
                return;
            });
        }
        return;
    }
    error(...args) {
        const backgroundColor = ColorDefaults.ErrorBackground;
        const foregroundColor = ColorDefaults.ErrorForeground;
        if (this.canLog) {
            args.forEach(arg => {
                const log = this.formatLog(arg, backgroundColor, foregroundColor);
                if (typeof log === "object") {
                    console.error(log[0], log[1]);
                    this.instanceCounter = this.instanceCounter + 1;
                    return;
                }
                console.error(log[0], log[1]);
                this.instanceCounter = this.instanceCounter + 1;
                return;
            });
        }
        return;
    }
    log(...args) {
        const backgroundColor = ColorDefaults.DefaultBackground;
        const foregroundColor = ColorDefaults.DefaultForeground;
        if (this.canLog) {
            args.forEach(arg => {
                const log = this.formatLog(arg, backgroundColor, foregroundColor);
                if (typeof log === "object") {
                    console.log(log[0], log[1]);
                    this.instanceCounter = this.instanceCounter + 1;
                    return;
                }
                console.log(log[0], log[1]);
                this.instanceCounter = this.instanceCounter + 1;
                return;
            });
        }
        return;
    }
}
export default AppLogger;
/* eslint-enable no-console */
