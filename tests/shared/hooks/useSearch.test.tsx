import { describe, expect, it, vi } from "vitest";
import { useSearch } from "../../../src/shared/hooks/useSearch";
import { act, renderHook } from "@testing-library/react";

describe("useSearch", () => {
  it("should initialize with an empty query", () => {
    const { result } = renderHook(() =>
      useSearch(
        () => {},
        15,
        () => {},
      ),
    );

    expect(result.current.query).toBe("");
    expect(result.current.handleKeyDown).toBeDefined();
    expect(result.current.handleLimitChange).toBeDefined();
    expect(result.current.handleSearch).toBeDefined();
  });

  it("should call the searchGifs with the correct query when handleSearch is called", () => {
    const searchGifs = vi.fn();
    const gifLimit = 15;

    const { result } = renderHook(() =>
      useSearch(searchGifs, gifLimit, () => {}),
    );

    act(() => {
      result.current.handleSearch();
    });

    expect(searchGifs).toHaveBeenCalledWith("", gifLimit);
  });
});
