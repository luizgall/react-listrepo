import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

import UserInfo from "../components/UserInfo/UserInfo";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});
let mockInfo = {
      hideUser: false,
      info: {
        userAvatar:"avatar.png",
        userName:"luizgall",
        userProfile: "luizgall.com",
        repoQuantity: 10
      }
}

describe("UserInfo Component Testing", () => {
  it("Renders 3 spans element and 1 img element", () => {   
    act(() => {
      ReactDOM.render(<UserInfo hideUser = { mockInfo.hideUser } info = { mockInfo.info } />, rootContainer);
    });
    const span = rootContainer.getElementsByTagName("span");
    expect(span.length).to.equal(3);
    const img = rootContainer.getElementsByTagName("img");
    expect(img.length).to.equal(1);
  });
});