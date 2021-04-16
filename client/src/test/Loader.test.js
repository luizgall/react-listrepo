import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

var jsdom = require("mocha-jsdom");

import Loader from "../components/Loader/Loader";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Loader Component Testing", () => {
  it("Should render 3 div element", () => {   
    act(() => {
      ReactDOM.render( <Loader hideLoader = { false }/>, rootContainer);
    });
    const div = rootContainer.getElementsByTagName("div");
    expect(div.length).to.equal(3);
  });

  it("Should hide component", () => {  
    act(() => {
      ReactDOM.render( <Loader hideLoader = { true }/>, rootContainer);
    });
    const className = rootContainer.querySelector("div").className;
    expect(className).to.include("hidden");
  });

});