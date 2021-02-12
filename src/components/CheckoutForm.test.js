import React from "react";
import { render, screen, waitFor} from "@testing-library/react/pure";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText("Checkout Form");
  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details",async () => {
 const {debug} = render(<CheckoutForm />);

  const nameInput = screen.findByTestId('firstName');
  const lastNameInput = screen.findByTestId('lastName');
  const addressInput = screen.findByTestId('address');
  const cityInput = screen.findByTestId('city');
  const stateInput = screen.findByTestId('state');
  const zipInput = screen.findByTestId('zip');
  

  userEvent.type(nameInput, "John");
  userEvent.type(lastNameInput, "Hedges");
  userEvent.type(addressInput, "3887 Rocky Road");
  userEvent.type(cityInput, "Charlottesville");
  userEvent.type(stateInput, "Va");
  userEvent.type(zipInput, "22503");
    debug()
   const button = screen.getAllByRole("button", {name:/checkout/i});
     userEvent.click(button[0]);

     
     waitFor(() => {
        expect(getByText('John')).toBeInTheDocument()
      })
//   expect(lastNameInput).toHaveValue("Hedges")
//   expect(addressInput).toHaveValue("3887 Rocky Road")
//   expect(cityInput).toHaveValue("Charlottesville")
//   expect(stateInput).toHaveValue("Va")
//   expect(zipInput).toHaveValue("22503")
});
