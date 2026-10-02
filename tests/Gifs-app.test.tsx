import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { GifsApp } from "../src/Gifs-app";

describe("Gifs-app", () => {
  it("should match the snapshot", () => {
    
    const {container} = render(<GifsApp />);

    expect(container).toMatchSnapshot();

  });
});