import React from 'react';
import { connect } from 'react-redux';

import Link from './Link';
import { setVisibilityFilter } from '../actions';

const FilterLink = props => {
    const onLinkClick = (e) => {
        e.preventDefault();
        props.setVisibilityFilter(props.filter);
    };

    return <Link active={props.active} onClick={onLinkClick} >{props.children}</Link>;
};

const mapStateToLinkProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

export default connect(
    mapStateToLinkProps,
    { setVisibilityFilter }
)(FilterLink);