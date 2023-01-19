import * as vscode from "vscode";

const mockDebug = {
  append: (val?:string) => {},
  appendLine: (val?:string) => {},
};
const config = vscode.workspace.getConfiguration('fracturedjsonvsc');
const { v3 } = config;

const debugOutput = v3.DebugOutput;

export const debugLog = debugOutput === true ? vscode.window.createOutputChannel("FracturedJSON Debug") : mockDebug;
export const log = vscode.window.createOutputChannel("FracturedJSON");

export default log;
