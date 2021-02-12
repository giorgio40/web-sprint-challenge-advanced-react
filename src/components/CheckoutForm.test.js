import React from "react";
import { render , screen,} from "@testing-library/react/pure";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
render(<CheckoutForm/>)
const header = screen.findByText("Checkout Form")
});


test("form shows success message on submit with form details", async  () => {
    render(<CheckoutForm/>)

          

    const nameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i)
    const stateInput = screen.getByLabelText(/State/i)
    const zipInput = screen.getByLabelText(/Zip/i)
    const newText= screen.getByTestId("successMessage" )

    
    userEvent.type(nameInput, "John");
    userEvent.type(lastNameInput, "Hedges");
    userEvent.type(addressInput, "3887 Rocky Road");
    userEvent.type(cityInput,"Charlottesville")
    userEvent.type(stateInput, "Va")
    userEvent.type(zipInput,"22503")


    const button = screen.getByRole('button');
    userEvent.click(button);


    await expect(newText).toBeInTheDocument();
  
});
