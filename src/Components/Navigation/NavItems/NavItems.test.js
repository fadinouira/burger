import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavItems from './NavItems';
import NavItem from './NavItem/NavItem';

configure({adapter : new Adapter()});

describe('<NavItems />',()=>{
    it('should show render one nav item if not auth',()=>{
        const wrapper = shallow(<NavItems />);
        expect(wrapper.find(NavItem)).toHaveLength(1);
    });
    it('should show render three nav item if not auth',()=>{
        const wrapper = shallow(<NavItems auth={true} />);
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });
});