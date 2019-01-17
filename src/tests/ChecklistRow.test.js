import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Checklist from '../components/Checklist';
import ChecklistRow from '../components/ChecklistRow';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('<Checklist />', () => {
    it('renders eight <ChecklistRow /> components', () => {
        const wrapper = shallow(<Checklist />);
        expect(wrapper.find(ChecklistRow).length).toBe(8);
      });

    it('renders unchecked checkboxes', () => {
        const wrapper = shallow(<ChecklistRow disabled={false} movie="Star Wars" />);
        expect(wrapper.find("input[type='checkbox']").props().checked).toBeFalsy();
    });

    it('simulates checkbox change event', () => {
        const wrapper = shallow(<ChecklistRow disabled={false} movie="Star Wars" />);
        wrapper.instance().onCheckBoxClicked();
        const checkbox = wrapper.find("input[type='checkbox']")
        checkbox.simulate("change", { target: { checked: true }});
        expect(checkbox.props().checked).toBeTruthy();
    });

    it('creates an instance and checks the box', () => {
        const wrapper = shallow(<ChecklistRow disabled={false} movie="Star Wars" />);
        wrapper.instance().onCheckBoxClicked();
        const checkbox = wrapper.find("input[type='checkbox']")
        expect(checkbox.props().checked).toBeTruthy();
    })

    it('cannot check a disabled checklist', () => {
        const wrapper = shallow(<ChecklistRow disabled={true} movie="Star Wars" />);
        const checkbox = wrapper.find("input[type='checkbox']")
        checkbox.simulate("change", { target: { checked: true }});
        expect(checkbox.props().checked).toBeFalsy();
    })
})
