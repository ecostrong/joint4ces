import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyListing from "./MyListing"

Enzyme.configure({ adapter: new Adapter() });

const mockBusiness = [{business_name:"Gum", id: 1}]

it ("renders h3 business header", () => {
    const listing = shallow(<MyListing business={mockBusiness}/>);
    const listingHeading = listing.find("h3").text();
    expect(listingHeading).toEqual("My Business Listing");
})

it.only ("renders business card", () => {
    const listing = shallow(<MyListing business={mockBusiness}/>);
    const listingHeading = listing.find(".my-show-card h1").text()
    expect(listingHeading).toEqual("Gum");
})