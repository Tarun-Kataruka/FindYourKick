import React, { useState } from 'react'
import upload_area from "../../assests/upload_area.svg"
const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        new_price: "",
        old_price: ""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;



        let formData = new FormData();
        formData.append('product', image);

        await fetch("https://findyourkick.onrender.com/Upload", {
            method: "POST",
            headers: {
                Accept: 'application/json'
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data })

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('https://findyourkick.onrender.com/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.sucess?alert("Product Added"):alert("Failed")
            })
        }
    }

    return (
        <div className='box-border w-full max-w-4xl py-7 px-12 my-5 mx-7 rounded-md bg-red-200'>
            <div className='w-full text-zinc-700 text-base'>
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} className='box-border w-full h-12 rounded pl-4 border-solid border border-slate-300 outline-none text-zinc-800 text-sm' type="text" name='name' placeholder='Type here' />
            </div>
            <div className='flex gap-10'>
                <div className='w-full text-zinc-700 text-base'>
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} className='box-border w-full h-12 rounded pl-4 border-solid border border-slate-300 outline-none text-zinc-800 text-sm' type='text' name='old_price' placeholder='Type here' />
                </div>
                <div className='w-full text-zinc-700 text-base'>
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} className='box-border w-full h-12 rounded pl-4 border-solid border border-slate-300 outline-none text-zinc-800 text-sm' type='text' name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className='w-full text-zinc-700 text-base'>
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='p-3 w-full h-12 text-sm text-zinc-600 border border-solid border-zinc-700 rounded'>
                    <option value="sneakers">Sneakers</option>
                    <option value="bags">Bags</option>
                    <option value="hoodies">Hoodies</option>
                </select>
            </div>
            <div className='w-full text-zinc-700 text-base'>
                <label htmlFor='file-input'>
                    <img className='h-28 w-28 rounded-xl object-contain my-2 mx-0' src={image ? URL.createObjectURL(image) : upload_area} alt='' />
                </label>
                <input onChange={imageHandler} className='box-border w-full h-12 rounded pl-4 border-solid border border-slate-300 outline-none text-zinc-800 text-sm' type='file' name='image' id='file-input' hidden></input>
            </div>
            <button onClick={() => { add_Product() }} className='mt-5 w-40 h-12 rounded-md bg-blue-500 border-none cursor-pointer text-white font-medium text-base'>ADD</button>
        </div>
    )
}

export default AddProduct