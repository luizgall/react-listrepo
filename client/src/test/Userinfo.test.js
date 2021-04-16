import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

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

  it("Renders dynamic user info", () => {   
    act(() => {
      ReactDOM.render(<UserInfo hideUser = { mockInfo.hideUser } info = { mockInfo.info } />, rootContainer);
    });
    const span = rootContainer.getElementsByTagName("span");
    const img = rootContainer.getElementsByTagName("img");
    expect(span[0].innerHTML).to.equal("<b>User name:</b> " + mockInfo.info.userName);
    expect(span[1].innerHTML).to.equal("<b>User profile: </b><a>"+ mockInfo.info.userProfile + "</a>");
    expect(span[2].innerHTML).to.equal("<b>Number of projects:</b> "+ mockInfo.info.repoQuantity);
  });

  it("Should hide user info", () => {  
    mockInfo.hideUser = false; 
    act(() => {
      ReactDOM.render(<UserInfo hideUser = { true } info = { mockInfo.info } />, rootContainer);
    });
    const className = rootContainer.querySelector(".user-info").className;
    expect(className).to.include("hidden");
  });

});