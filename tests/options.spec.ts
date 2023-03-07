import { options } from "@/options";
import rxAxios from "@silence_zhpf/rx_axios";
import { of } from "rxjs";

jest.mock("@silence_zhpf/rx_axios");
const mocked = jest.mocked(rxAxios);
describe("options", () => {
  test("no arguments", (done) => {
    mocked.post.mockReturnValue(of({ data: [1] }) as any);
    options("/api").subscribe((v) => {
      expect(v).toEqual([{ value: 1, label: 1 }]);
      done();
    });
  });

  test("same value and label", (done) => {
    mocked.post.mockReturnValue(of({ data: [{ name: "Rust" }] }) as any);
    options("/api", "name").subscribe((v) => {
      expect(v).toEqual([{ value: "Rust", label: "Rust" }]);
      done();
    });
  });

  test("same value and label", (done) => {
    mocked.post.mockReturnValue(
      of({ data: [{ name: "Rust", package: "Cargo" }] }) as any
    );
    options("/api", { value: "name", label: "package" }).subscribe((v) => {
      expect(v).toEqual([{ value: "Rust", label: "Cargo" }]);
      done();
    });
  });
});
