// import PropTypes from 'prop-types';
import { BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";
import { Audio, CirclesWithBar } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data =>setPhones(data.data));

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData);
                setLoading(false);
            });

    }, [])
    return (
        <div>
            <h2 className="text-5xl text-center my-5">Phones: {phones.length}</h2>
            <div>
                {loading && <div className='flex justify-center'>
                    <Audio
                        height="100"
                        width="100"
                        color="#4fa94d"
                        ariaLabel="audio-loading"
                        wrapperStyle={{}}
                        wrapperClass="wrapper-class"
                        visible={true}
                    />
                    <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>}
            </div>
            <BarChart width={1280} height={400} data={phones}>
                <Bar dataKey="price" fill="#727299" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

Phones.propTypes = {

};

export default Phones;