import { jest } from "@jest/globals";
import * as sassTrue from "sass-true";

import { SassTestExecutor } from "../SassTestExecutor";
import { Path } from "../Path";

jest.mock("sass-true", () => ({
  runSass: jest.fn(),
}));

class ExecutorTests {
  private mockedSassTrue: mockedModule;
  private executor: SassTestExecutor;
  private filePaths: Path[];

  constructor() {
    this.mockedSassTrue = sassTrue as mockedModule;
  }

  public runTests() {
    describe("SassTestExecutor Unit Tests", () => {
      this.preparatoryWorks();

      it("Must run sass tests if any test files exists in specified paths", () => {
        // Valid case
        this.prepareValidTestFilePaths();

        this.runExecutor();

        this.assertAllTestFilesRan();
      });

      it("Mustn't run sass tests if no file paths provided", () => {
        // Border case
        this.prepareEmptyPaths();

        this.runExecutor();

        this.assertNoTestFilesRan();
      });

      it("Mustn't throw error if invalid file paths provided", () => {
        // Invalid case
        this.prepareInvalidPaths();

        this.runExecutor();

        this.assertNoErrorThrown();
      });
    });
  }

  private preparatoryWorks() {
    beforeAll(() => {
      this.executor = new SassTestExecutor();
    });

    beforeEach(() => {
      this.mockedSassTrue.runSass.mockReset();
    });
  }

  private prepareValidTestFilePaths() {
    this.filePaths = [
      "./__test_data__/existingFolder/test1.test.scss",
      "./__test_data__/existingFolder/nestedFolder/test2.test.sass",
    ];
  }

  private runExecutor() {
    this.executor.runTests(this.filePaths);
  }

  private assertAllTestFilesRan() {
    this.filePaths.forEach((path, index) => {
      this.assertTestFileByIndexRan(path, index);
    });
  }

  private assertTestFileByIndexRan(path: Path, index: number) {
    const callNumber = index + 1;
    const runSassArguments = [{ describe, it }, path];

    expect(this.mockedSassTrue.runSass).toHaveBeenNthCalledWith(
      callNumber,
      ...runSassArguments,
    );
  }

  private prepareEmptyPaths() {
    this.filePaths = [];
  }

  private assertNoTestFilesRan() {
    expect(this.mockedSassTrue.runSass).not.toHaveBeenCalled();
  }

  private prepareInvalidPaths() {
    this.filePaths = ["/nonexistent"];
  }

  private assertNoErrorThrown() {
    expect(this.mockedSassTrue.runSass).not.toThrow();
  }
}

type mockedModule = jest.Mocked<typeof sassTrue>;

const executor = new ExecutorTests();
executor.runTests();
