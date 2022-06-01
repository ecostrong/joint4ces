import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BusinessShow from "./businessshow"

Enzyme.configure({ adapter: new Adapter() });

const mockBusiness = {business_name:"Gum"}

it ("renders h3 business header", () => {
    const business = shallow(<BusinessShow business={mockBusiness}/>);
    const businessHeading = business.find("h3").text();
    expect(businessHeading).toEqual("Business Features");
})