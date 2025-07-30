import * as path from "node:path";

import { SassTestFileFinder } from "../SassTestFileFinder";
import { Path } from "../Path";

class FinderTests {
  private finder: SassTestFileFinder;
  private testFiles: Path[];

  public runTests() {
    describe("SassTestFileFinder Unit Tests", () => {
      it("Must return test files if some exists in specified path", () => {
        // Valid case
        this.prepareFinderToExistingFolder();

        this.findTestFiles();

        this.assertTestFilesFound();
      });

      it("Mustn't depend on start folder path form", () => {
        // Border case
        this.prepareFinderToPathWithoutSlash();

        this.findTestFiles();

        this.assertTestFilesFound();
      });

      it("Mustn't return any path in empty folder", () => {
        // Border case
        this.prepareFinderToEmptyFolder();

        this.findTestFiles();

        this.assertNoTestFilesFound();
      });

      it("Must throw error if specified path is invalid", () => {
        // Invalid case
        this.prepareFinderToInvalidPath();

        this.assertErrorThrown();
      });
    });
  }

  private prepareFinderToExistingFolder() {
    const folderPath = this.getPathToExistingFolder();
    this.finder = new SassTestFileFinder(folderPath);
  }

  private getPathToExistingFolder() {
    return path.resolve(__dirname, "./__test_data__/existingFolder/");
  }

  private findTestFiles() {
    this.testFiles = this.finder.findTestFiles();
  }

  private assertTestFilesFound() {
    const basePath = path.resolve(__dirname, "./__test_data__/existingFolder");
    expect(this.testFiles).toStrictEqual([
      path.join(basePath, "test1.test.scss"),
      path.join(basePath, "nestedFolder/test2.test.sass"),
    ]);
  }

  private prepareFinderToPathWithoutSlash() {
    const folderPath = this.getPathWithoutSlash();
    this.finder = new SassTestFileFinder(folderPath);
  }

  private getPathWithoutSlash() {
    return path.resolve(__dirname, "./__test_data__/existingFolder");
  }

  private prepareFinderToEmptyFolder() {
    const folderPath = this.getPathToEmptyFolder();
    this.finder = new SassTestFileFinder(folderPath);
  }

  private getPathToEmptyFolder() {
    return path.resolve(__dirname, "./__test_data__/emptyFolder/");
  }

  private assertNoTestFilesFound() {
    expect(this.testFiles).toStrictEqual([]);
  }

  private prepareFinderToInvalidPath() {
    const folderPath = this.getInvalidPath();
    this.finder = new SassTestFileFinder(folderPath);
  }

  private getInvalidPath() {
    return path.resolve(__dirname, "./nonexistent/");
  }

  private assertErrorThrown() {
    expect(this.finder.findTestFiles).toThrow();
  }
}

const finderTests = new FinderTests();
finderTests.runTests();
