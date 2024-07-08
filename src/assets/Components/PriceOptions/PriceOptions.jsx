// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
   const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
                "Access to gym during staffed hours",
                "Access to all fitness equipment",
                "1 complimentary fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
                "24/7 gym access",
                "Access to all fitness equipment",
                "2 complimentary fitness assessments",
                "Access to group fitness classes",
                "1 guest pass per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 69.99,
            "features": [
                "24/7 gym access",
                "Access to all fitness equipment",
                "Monthly fitness assessments",
                "Unlimited access to group fitness classes",
                "5 guest passes per month",
                "Access to sauna and steam room",
                "Personal training session discounts"
            ]
        },
        {
            "id": 4,
            "name": "VIP",
            "price": 99.99,
            "features": [
                "24/7 gym access",
                "Access to all fitness equipment",
                "Weekly fitness assessments",
                "Unlimited access to group fitness classes",
                "Unlimited guest passes",
                "Access to sauna, steam room, and pool",
                "Free personal training sessions",
                "Free nutritional counseling",
                "Priority booking for classes and facilities"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-2xl md:text-4xl text-center font-serif font-semibold">Best prices in the town</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4 md:my-8">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {

};

export default PriceOptions;