import { render, screen } from '@testing-library/react';
import App from './App';



//test 1
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
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