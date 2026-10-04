import { describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useGif } from "../../../src/gif/hooks/useGif";

describe("GifsContainer", () => {
  it("should return default values and methods", () => {
    const { result } = renderHook(() => useGif());

    expect(result.current.gifs).toEqual([]);
    expect(result.current.changeGifLimit).toBeDefined();
    expect(result.current.previousSearches).toBeDefined();
    expect(result.current.selectPreviousSearch).toBeDefined();
    expect(result.current.searchGifs).toBeDefined();
  });

  it("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGif());

    await act(async () => {
      await result.current.searchGifs("test", 10);
    });

    expect(result.current.gifs).toHaveLength(10);
  });

  it("should return a list of previous searches", async () => {
    const { result } = renderHook(() => useGif());

    await act(async () => {
      await result.current.searchGifs("test", 10);
    });

    await act(async () => {
      await result.current.searchGifs("test2", 10);
    });

    expect(result.current.previousSearches).toContain("test");
    expect(result.current.previousSearches).toContain("test2");
  });

  it("should return no more than 10 previous searches", async () => {
    const { result } = renderHook(() => useGif());

    for (let i = 0; i < 12; i++) {
      await act(async () => {
        await result.current.searchGifs(`test${i}`, 10);
      });
    }

    expect(result.current.previousSearches).toHaveLength(10);
    expect(result.current.previousSearches).not.toContain("test0");
  });
});
