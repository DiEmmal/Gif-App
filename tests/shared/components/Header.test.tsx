import { describe, expect, it } from "vitest";
import { Header } from "../../../src/shared/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  const title = "Testing";
  const description = "This is a test description";

  it("should match the snapshot", () => {
    const { container } = render(
      <Header title={title} description={description} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should show the title in the header", () => {
    render(<Header title={title} description={description} />);

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(description)).toBeDefined();
  });

  it("should not show the description if not provided", () => {
    render(<Header title={title} />);

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.queryByText(description)).toBeNull();
  });
});
