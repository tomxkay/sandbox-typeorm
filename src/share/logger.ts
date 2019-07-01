import * as debug from "debug";
import { IDebugger } from "debug";

debug.enable("*");

export interface IObjectStream {
  write(data: { [key: string]: any }): void;
}

export interface IWriteStream {
  stream: IObjectStream;
  filter: LoggerFilter;
}

type DebugKeys = "debug" | "error" | "info" | "log" | "warn";

export type LoggerType = { [key in DebugKeys]: IDebugger };
export type LoggerFilter = { [key in keyof LoggerType]: boolean };

export class Logger {
  private logger: LoggerType;
  static prefix: string = "";
  private static writeStreams: IWriteStream[] = [];
  constructor(public namespace: string) {
    this.logger = {
      debug: debug(`${Logger.prefix}${namespace}:debug`),
      error: debug(`${Logger.prefix}${namespace}:error`),
      info: debug(`${Logger.prefix}${namespace}:info`),
      log: debug(`${Logger.prefix}${namespace}:log`),
      warn: debug(`${Logger.prefix}${namespace}:warn`)
    };
  }
  static addStream(stream: IObjectStream, filter: LoggerFilter) {
    this.writeStreams.push({ stream, filter });
  }
  static setNamespacePrefix(prefix: string) {
    Logger.prefix = prefix;
  }
  public debug(message: any, ...rest: any[]) {
    this.logStream("debug", message, ...rest);
  }
  public error(message: any, ...rest: any[]) {
    this.logStream("error", message, ...rest);
  }
  public info(message: any, ...rest: any[]) {
    this.logStream("info", message, ...rest);
  }
  public log(message: any, ...rest: any[]) {
    this.logStream("log", message, ...rest);
  }
  public warn(message: any, ...rest: any[]) {
    this.logStream("warn", message, ...rest);
  }
  private logStream(logType: keyof LoggerType, message: any, ...rest: any[]) {
    const logger = this.logger[logType];
    logger(message, ...rest);

    if (logger.enabled && message instanceof Object) {
      for (const stream of Logger.writeStreams) {
        if (stream.filter[logType]) {
          stream.stream.write(message);
        }
      }
    }
  }
}
