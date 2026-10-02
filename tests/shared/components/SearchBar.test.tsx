import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchBar } from "../../../src/shared/components/Search-bar";

describe("SearchBar", () => {
  it("should render the SearchBar component", () => {
    const { container } = render(
      <SearchBar
        changeGifLimit={() => {}}
        gifLimit={15}
        searchGifs={() => {}}
      />,
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("should call the searchGifs function when the search button is clicked", () => {
    const searchGifs = vi.fn();
    render(
      <SearchBar
        changeGifLimit={() => {}}
        gifLimit={15}
        searchGifs={searchGifs}
      />,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(searchGifs).toHaveBeenCalled();
  });

  it("should update the gifLimit when the select value changes", () => {
    const changeGifLimit = vi.fn();
    render(
      <SearchBar
        changeGifLimit={changeGifLimit}
        gifLimit={15}
        searchGifs={() => {}}
      />,
    );

    fireEvent.change(screen.getByLabelText("GIF limit"), {
      target: { value: 18 },
    });

    expect(changeGifLimit).toHaveBeenCalled();
    expect(changeGifLimit).toHaveBeenCalledWith(18);
  });

  it("should call the searchGifs function after 800ms", async () => {
    const onSearchGifs = vi.fn();
    render(
      <SearchBar
        changeGifLimit={() => {}}
        gifLimit={15}
        searchGifs={onSearchGifs}
      />,
    );

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "cat" } });

    await waitFor(() => {
      expect(onSearchGifs).toHaveBeenCalledWith("cat", 15);
    });
  });
});
