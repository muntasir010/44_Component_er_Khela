import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className='hover:bg-white px-2 rounded-lg' key={route.id}>
            <a href={`route.path`}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
};

export default Link;