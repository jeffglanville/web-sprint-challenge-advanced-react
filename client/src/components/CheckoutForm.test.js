import React from "react";
import { render, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
const { getByText } = render("Checkout Form")

getByText("Checkout Form")
});



test("form shows success message on submit with form details", () => {

const submit = { button: 0 }
fireEvent.click(getByTestId("submitButton", submit))
const {getByTestId} = render("successMessage")
});
