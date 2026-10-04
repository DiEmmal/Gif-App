import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { GifsContainer } from "../../../src/gif/components/Gifs-container.component";
import { gifsMock } from "../../mock/gifs.data";

describe("GifsContainer", () => {
  it("should render the GifsContainer component", () => {
    const { container } = render(<GifsContainer gifs={[]} />);

    expect(container).toMatchSnapshot();
  });

  it("should render the correct number of GIFs", () => {
    const { container } = render(<GifsContainer gifs={gifsMock} />);

    const gifElements = container.querySelectorAll("article");
    expect(gifElements.length).toBe(gifsMock.length);
  });

  it("should have not any GIFs when the gifs prop is empty", () => {
    const { container } = render(<GifsContainer gifs={[]} />);

    const gifElements = container.querySelectorAll("article");
    expect(gifElements.length).toBe(0);
  });
});
