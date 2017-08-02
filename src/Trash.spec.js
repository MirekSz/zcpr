import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {UserDetails} from './Trash';

it('renders UserDetails ', () => {
    let params = {params: {id: 103}};
    let wrapper = shallow(<UserDetails match={params}/>)

    expect(wrapper.html()).contains('103');
});
