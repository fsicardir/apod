import React from 'react';
import { render } from '@testing-library/react';
import PageLogo from "./PageLogo";
import { shallow } from "enzyme";

describe('PageLogo', () => {

  it('should render icon', () => {
    const component = shallow(<PageLogo/>);

    expect(component).toMatchSnapshot();
  });

  it('should render icon', () => {
    const { getByTestId } = render(<PageLogo />);
    const logo = getByTestId("page-logo");

    expect(logo).toBeInTheDocument();
  });

});
