import "jsdom-global/register";
import React from "react";
import {mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";

import Greeter from "./Greeter";

describe("<Greeter />", () => {
    const findGreeting = (wrapper: ReactWrapper | ShallowWrapper): string => wrapper.find(".greeting").text();
    const findCounter = (wrapper: ReactWrapper | ShallowWrapper): string => wrapper.find(".count").text();

    it("displays default greeting", () => {
        // shallow rendering not calling useEffect
        const wrapper = mount(<Greeter initialName={"world"}/>);

        expect(findGreeting(wrapper)).toStrictEqual("Hello world")
    });

    it("displays default count", () => {
        const wrapper = shallow(<Greeter initialCounter={10}/>);

        expect(findCounter(wrapper)).toStrictEqual("10");
    });

    it("updates greeting", () => {
        const wrapper = shallow(<Greeter/>);

        wrapper.find(".name-input").simulate("change", {target: {value: "world"}})
        wrapper.find(".greet-btn").simulate("click");

        expect(findGreeting(wrapper)).toStrictEqual("Hello world");
    });

    it("updates counter", () => {
        const wrapper = shallow(<Greeter initialCounter={10}/>);

        wrapper.find(".greet-btn").simulate("click");

        expect(findCounter(wrapper)).toStrictEqual("11");
    });
});
