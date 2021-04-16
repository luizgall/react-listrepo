import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

var jsdom = require("mocha-jsdom");

import ErrorAlert from "../components/ErrorAlert/Error";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("ErrorAlert Component Testing", () => {
  it("Should render 1 p element", () => {   
    act(() => {
      ReactDOM.render(<ErrorAlert hideError = { false }  />, rootContainer);
    });
    const p = rootContainer.getElementsByTagName("p");
    expect(p.length).to.equal(1);
  });

  it("Should hide component", () => {  
    act(() => {
      ReactDOM.render(<ErrorAlert hideError = { true }  />, rootContainer);
    });
    const className = rootContainer.querySelector(".error-alert").className;
    expect(className).to.include("hidden");
  });

});