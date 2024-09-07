import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../..utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // * Assertion
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items  0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // * Assertion
    const cartItems = screen.getByRole("/Cart/");
    expect(cartItems).toBeInTheDocument();
});
  