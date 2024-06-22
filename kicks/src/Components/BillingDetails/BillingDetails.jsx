import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BillingDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        email: '',
        phone: ''
    });
  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/payment');
    }
            
    return (
        <div className='my-24 mx-40'>
            <h1 className='text-2xl font-bold mb-6'>Billing Details</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
                <div>
                    <label className='block mb-2'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div>
                    <label className='block mb-2'>Address</label>
                    <input
                        type='text'
                        name='address'
                        value={formData.address}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div>
                    <label className='block mb-2'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={formData.city}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div>
                    <label className='block mb-2'>State</label>
                    <input
                        type='text'
                        name='state'
                        value={formData.state}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div>
                    <label className='block mb-2'>ZIP Code</label>
                    <input
                        type='text'
                        name='zip'
                        value={formData.zip}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div>
                    <label className='block mb-2'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={formData.country}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div>
                    <label className='block mb-2'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div>
                    <label className='block mb-2'>Phone</label>
                    <input
                        type='text'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full p-2 border border-gray-300'
                        required
                    />
                </div>
                <div className='col-span-2'>
                    <button onSubmit={handleSubmit} type='submit' className='w-full p-2 bg-red-700 text-white font-semibold'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BillingDetails;
