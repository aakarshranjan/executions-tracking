import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Execute from "../components/views/scoring/execute/Execute";

test.skip("renders the correct content", () => {
    // Render the component
    render(<Execute />);
  
    // Use queries to find elements, and assert their content
    expect(screen.getByText("Execute it")).toBeInTheDocument();
  });

  describe.skip('App tests', () => {
    it('should contains the heading 1', () => {
    render(<Execute />);
        const heading = screen.getByText(/Execute/i);
        expect(heading).toBeInTheDocument()
    });
});