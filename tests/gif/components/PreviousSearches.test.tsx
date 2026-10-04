import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { PreviousSearchedGifs } from "../../../src/gif/components/Previous-searched-gifs.component";

describe("PreviousSearchedGifs", () => {
  it("should render the PreviousSearchedGifs component", () => {
    const { container } = render(
      <PreviousSearchedGifs prevSearchedGifs={[]} selectQuery={() => {}} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render the correct number of previous searches", () => {
    const prevSearchedGifs = ["test1", "test2", "test3"];
    const { container } = render(
      <PreviousSearchedGifs
        prevSearchedGifs={prevSearchedGifs}
        selectQuery={() => {}}
      />,
    );

    const searchElements = container.querySelectorAll("li");
    expect(searchElements.length).toBe(prevSearchedGifs.length);
  });

  it("should call the selectQuery function when a previous search is clicked", () => {
    const prevSearchedGifs = ["test1", "test2", "test3"];
    const selectQueryMock = vi.fn();
    const { container } = render(
      <PreviousSearchedGifs
        prevSearchedGifs={prevSearchedGifs}
        selectQuery={selectQueryMock}
      />,
    );

    const searchElements = container.querySelectorAll("li");

    fireEvent.click(searchElements[0]);

    expect(selectQueryMock).toHaveBeenCalledWith(prevSearchedGifs[0]);
  });
});
