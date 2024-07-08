import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-gray-300 rounded-xl p-4 text-center space-y-6 flex flex-col'>
            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
            <div className='flex-grow'>
                {
                    features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
                }
            </div>
            <button className="btn bg-[#7272] w-full">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;