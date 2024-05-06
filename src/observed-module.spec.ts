import { describe, expect, it } from "vitest";
import { getByText } from "@testing-library/dom";
import { html } from "./observed-module";

function dom() {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div;
}

describe("Observed module", () => {
  it("renders observed module", async () => {
    const container = dom();

    expect(getByText(container, "Observed Module")).toBeTruthy();
  });
});
