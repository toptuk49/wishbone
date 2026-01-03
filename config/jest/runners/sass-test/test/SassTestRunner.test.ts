import { jest } from "@jest/globals";

import { SassTestRunner } from "../SassTestRunner";
import { SassTestExecutor } from "../SassTestExecutor";
import { SassTestFileFinder } from "../SassTestFileFinder";
import { Path } from "../Path";

jest.mock("../SassTestExecutor");
jest.mock("../SassTestFileFinder.ts");

class RunnerTests {
  private mockedFinder: MockedFileFinder;
  private mockedExecutor: MockedExecutor;
  private runner: SassTestRunner;
  private testFiles: Path[];

  constructor() {
    this.mockedFinder = new SassTestFileFinder("") as MockedFileFinder;
    this.mockedExecutor = new SassTestExecutor() as MockedExecutor;
  }

  public runTests() {
    describe("SassTestRunner Unit Tests", () => {
      this.preparatoryWorks();

      it("Must find test files and run executor on them", () => {
        this.prepareTestFiles();

        this.runSassTests();

        this.assertExistingTestFilesRan();
      });

      it("Must call executor with empty array if finder returns no files", () => {
        this.prepareEmptyTestFiles();

        this.runSassTests();

        this.assertTestsRanWithNoFiles();
      });

      it("Must propagate errors thrown by finder", () => {
        this.prepareFinderError();

        this.assertErrorStoppedExecutor();
      });

      it("Must propagate errors thrown by executor", () => {
        this.prepareTestFiles();

        this.makeExecutorError();

        this.assertPropagateExecutorError();
      });
    });
  }

  private preparatoryWorks() {
    beforeEach(() => {
      jest.clearAllMocks();
      this.runner = new SassTestRunner("noMatter");

      // Подмена приватных полей моками, чтобы не создавать настоящие объекты
      // @ts-ignore
      this.runner.finder = this.mockedFinder;
      // @ts-ignore
      this.runner.executor = this.mockedExecutor;
    });
  }

  private prepareTestFiles() {
    this.testFiles = [
      "./path/to/test1.test.scss",
      "./path/to/nested/test2.test.sass",
    ];
    this.mockedFinder.findTestFiles.mockReturnValue(this.testFiles);
  }

  private runSassTests() {
    this.runner.runTests();
  }

  private assertExistingTestFilesRan() {
    expect(this.mockedFinder.findTestFiles).toHaveBeenCalled();
    expect(this.mockedExecutor.runTests).toHaveBeenCalled();
    expect(this.mockedExecutor.runTests).toHaveBeenCalledWith(this.testFiles);
  }

  private prepareEmptyTestFiles() {
    this.mockedFinder.findTestFiles.mockReturnValue([]);
  }

  private assertTestsRanWithNoFiles() {
    expect(this.mockedFinder.findTestFiles).toHaveBeenCalled();
    expect(this.mockedExecutor.runTests).toHaveBeenCalledWith([]);
  }

  private prepareFinderError() {
    this.mockedFinder.findTestFiles.mockImplementation(() => {
      throw new Error("Finder error");
    });
  }

  private assertErrorStoppedExecutor() {
    expect(() => this.runner.runTests()).toThrow("Finder error");
    expect(this.mockedExecutor.runTests).not.toHaveBeenCalled();
  }

  private makeExecutorError() {
    this.mockedFinder.findTestFiles.mockReturnValue(this.testFiles);
    this.mockedExecutor.runTests.mockImplementation(() => {
      throw new Error("Executor error");
    });
  }

  private assertPropagateExecutorError() {
    expect(() => this.runner.runTests()).toThrow("Executor error");
  }
}

type MockedExecutor = jest.Mocked<SassTestExecutor>;
type MockedFileFinder = jest.Mocked<SassTestFileFinder>;

const runner = new RunnerTests();
runner.runTests();
