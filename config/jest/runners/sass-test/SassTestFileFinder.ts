import * as fs from "node:fs";
import * as path from "node:path";

import { Entry } from "./Entry";
import { Path } from "./Path";

export class SassTestFileFinder {
  private stack: Path[];
  private sassTestFiles: Path[];
  private currentDir: Path;

  constructor(startDir: Path) {
    this.stack = [startDir];
    this.sassTestFiles = [];
  }

  public findTestFiles(): Path[] {
    while (this.isStackNotEmpty()) {
      this.traverseDirFromStack();
    }

    return this.sassTestFiles;
  }

  private isStackNotEmpty() {
    return this.stack.length > 0;
  }

  private traverseDirFromStack() {
    this.getDirFromStack();
    const entries = this.getCurrentDirEntries();

    for (const entry of entries) {
      this.handleDirEntry(entry);
    }
  }

  private getDirFromStack() {
    this.currentDir = this.stack.pop();
  }

  private getCurrentDirEntries() {
    return fs.readdirSync(this.currentDir, { withFileTypes: true });
  }

  private handleDirEntry(entry: Entry) {
    if (entry.isDirectory()) {
      this.addDirEntryToStack(entry);
    } else if (this.isSassFileEntry(entry)) {
      this.saveSassFileEntry(entry);
    }
  }

  private addDirEntryToStack(entry: Entry) {
    const fullPath = this.getEntryFullPath(entry);
    this.stack.push(fullPath);
  }

  private isSassFileEntry(entry: Entry) {
    const fullPath = this.getEntryFullPath(entry);
    return entry.isFile() && this.isSassFile(fullPath);
  }

  private saveSassFileEntry(entry: Entry) {
    const fullPath = this.getEntryFullPath(entry);
    this.sassTestFiles.push(fullPath);
  }

  private getEntryFullPath(entry: Entry) {
    return path.join(this.currentDir, entry.name);
  }

  private isSassFile(fullPath: Path) {
    return /.test.s[ac]ss$/i.test(fullPath);
  }
}
