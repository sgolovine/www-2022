/* eslint-disable no-console */

enum ColorDefaults {
  // Debug
  DebugBackground = "black",
  DebugForeground = "tomato",

  // Info
  InfoBackground = "transparent",
  InfoForeground = "royalblue",

  // Warning
  WarningBackground = "transparent",
  WarningForeground = "orange",

  // Error
  ErrorBackground = "transparent",
  ErrorForeground = "red",

  // Default
  DefaultBackground = "transparent",
  DefaultForeground = "white",
}

type Flags = {
  logProduction?: boolean;
  silent?: boolean;
  pretty?: boolean;
  disablePrefix?: boolean;
  prefix?: string;
};

const defaultFlags: Required<Omit<Flags, "prefix">> = {
  logProduction: false,
  silent: false,
  pretty: false,
  disablePrefix: false,
};

class AppLogger {
  logProduction: boolean;
  silent: boolean;
  pretty: boolean;
  disablePrefix: boolean;
  prefix?: string;
  canLog: boolean;
  instanceCounter: number;

  constructor(flags?: Flags) {
    this.logProduction = flags?.logProduction ?? defaultFlags.logProduction;
    this.silent = flags?.silent ?? defaultFlags.silent;
    this.pretty = flags?.pretty ?? defaultFlags.pretty;
    this.disablePrefix = flags?.disablePrefix ?? defaultFlags.disablePrefix;
    this.prefix = flags?.prefix;
    this.instanceCounter = 0;

    // Check if we can run logs
    // 1. If `silent` is true, never run logs
    if (flags?.silent) {
      this.canLog = false;
      return;
    }

    // 2. If NODE_ENV === 'production' AND logProduction is 'true'
    if (process.env.NODE_ENV === "production" && flags?.logProduction) {
      this.canLog = true;
      return;
    }

    // 3. If NODE_ENV === 'development' OR NODE_ENV is not defined
    if (
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === undefined
    ) {
      this.canLog = true;
      return;
    }

    // 4. If NODE_ENV === 'production'. DO not log.
    this.canLog = false;
    return;
  }

  private formatLog(log: string | object | unknown, bg?: string, fg?: string) {
    const backgroundColor = bg ?? ColorDefaults.DefaultBackground;
    const foregroundColor = fg ?? ColorDefaults.DefaultForeground;

    const prefix = this.disablePrefix
      ? ""
      : this.prefix
      ? `[${this.instanceCounter.toString()}] [${this.prefix}]`
      : `[${this.instanceCounter.toString()}]`;

    const outputString =
      typeof log === "object"
        ? JSON.stringify(
            log,
            null,
            // "2" will stringify the JSON with indentation.
            // "0" will stringify the JSON inline
            this.pretty ? 2 : 0
          )
        : log;

    return [
      `%c${prefix} ${outputString}`,
      `color:${foregroundColor};background-color:${backgroundColor}`,
    ];
  }

  public debug(...args: (string | object | unknown)[]) {
    const backgroundColor = ColorDefaults.DebugBackground;
    const foregroundColor = ColorDefaults.DebugForeground;
    if (this.canLog) {
      args.forEach((arg) => {
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

  public info(...args: (string | object | unknown)[]) {
    const backgroundColor = ColorDefaults.InfoBackground;
    const foregroundColor = ColorDefaults.InfoForeground;
    if (this.canLog) {
      args.forEach((arg) => {
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

  public warn(...args: (string | object | unknown)[]) {
    const backgroundColor = ColorDefaults.WarningBackground;
    const foregroundColor = ColorDefaults.WarningForeground;
    if (this.canLog) {
      args.forEach((arg) => {
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

  public error(...args: (string | object | unknown)[]) {
    const backgroundColor = ColorDefaults.ErrorBackground;
    const foregroundColor = ColorDefaults.ErrorForeground;
    if (this.canLog) {
      args.forEach((arg) => {
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

  public log(...args: (string | object | unknown)[]) {
    const backgroundColor = ColorDefaults.DefaultBackground;
    const foregroundColor = ColorDefaults.DefaultForeground;
    if (this.canLog) {
      args.forEach((arg) => {
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
