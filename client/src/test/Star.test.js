import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";




var jsdom = require("mocha-jsdom");

import StarIcon from "../components/Icons/Star/Star";

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
  it("Should render 1 span element and 1 svg element", () => {   
    act(() => {
      ReactDOM.render( <StarIcon starred = {false} callback = "" /> , rootContainer);
    });
    const span = rootContainer.getElementsByTagName("span");
    expect(span.length).to.equal(1);
    const svg = rootContainer.getElementsByTagName("svg");
    expect(svg.length).to.equal(1);
  });

  it("Should call callback on component click", () => {  
    let called = false;
    const cb = () => {
        called = true;
    }; 
    const wrapper = shallow(<StarIcon callback = {cb}/>);
    wrapper.find("svg").simulate('click');
    expect(called).to.equal(true);  
  
  });

});