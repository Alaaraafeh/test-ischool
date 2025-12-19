import { render, screen } from "@testing-library/react";

test("button renders", () => {
  render(<button>click me</button>);

  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toBeInTheDocument();
});



// test 2

test("button file snapshot", () => {
  const { container } = render(<button>New</button>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button>
      New
    </button>
  `);

  // expect(container.firstChild).toMatchSnapshot(); 
}); 