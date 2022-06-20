import React, {useState} from 'react'
import { categoriesList } from '../../assets/data/data'
import {FaRegImages, FaCheck} from 'react-icons/fa'
import {useItemsApi} from '../../contexts/ItemsContextProvider'
import axiosInstance from '../../helpers/axiosInstance'
import './css/forms.css'


export default function Upload() {

    const {setAdverts} = useItemsApi()
    const [status, setStatus] = useState(false)
    const [message, setMessage] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(0)

    const [inputData, setInputData] = useState({
        title:'',
        category:'electronics',
        currency:'SSP',
        price:'',
        description:''
    })

    const handleInputsData = e => setInputData({...inputData, [e.target.name]:e.target.value});

    const handleSubmit = async e => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        setStatus(true)
        try {
            const results = await axiosInstance.post('/items/upload', formdata, postOptions).then(res => res);
            setAdverts(prev => [...prev, results.data])
            console.log(results)
        } catch (error) {
            if(error.response?.status === 404 || error.response?.status === 403 || error.response?.status === 500){
                setMessage(error.response?.data)
            }else{
                setMessage('Network Connection fail')
            }
        }finally{
            setStatus(false)
        }
    }


    const handlefileData = e => {
        // console.log(e.target)
    }

    const postOptions = {
        widthCredentials:true, 
        withCredentials:'include',
        onUploadProgress:percentageLoaded => {
            const {total, loaded} = percentageLoaded
            const percent = Math.floor((loaded / total) * 100)
            percent <= 100 && setUploadPercentage(percent)
        }
    }


    return (
        <div className='form-wraper d-flex justify-content-center'>
            {status && <div className="loader-wraper d-flex justify-content-center align-items-center">
                <div className="loader-content text-center d-flex justify-content-center align-items-center">
                    {uploadPercentage !== 100 ? <div className="loading-progress w-100">
                        <p className='loading-text'>Uploading...</p>
                        <div className="loading-bar">
                            <div className="loading-percent d-flex justify-content-center align-items-center">{uploadPercentage}%</div>
                            <div className="loading-fill" style={{width:`${uploadPercentage}%`}}></div>
                        </div>
                    </div>: 
                    <div className="loading-done-wraper">
                        <div className="loading-done-content d-flex justify-content-center align-items-center">
                            <FaCheck className='icon' />
                        </div>
                        <p className='loading-text mt-1'>Finish...</p>
                    </div>}
                </div>
            </div>}
            <div className="form-content">
                <div className="form-header">
                    <h4>Post Item</h4>
                    {message && <p>{message}</p>}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-content col-md-12">
                            <label htmlFor="title">Item Name</label>
                            <input type='text' name='title' placeholder='Item name' onChange={handleInputsData} />
                        </div>
                        <div className="input-content col-md-12">
                            <label htmlFor="category">Category</label>
                            <select name='category' onChange={handleInputsData}>
                                {categoriesList.map((category, k) => (
                                    <option value={category.value} key={k}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-content col-md-6">
                            <label htmlFor="price">Set Price</label>
                            <input type='text' name='price' placeholder='0.00' onChange={handleInputsData} />
                        </div>
                        <div className="input-content col-md-6">
                            <label htmlFor="currency">Currency</label>
                            <select name='currency' onChange={handleInputsData}>
                                <option value='SSP'>SSP</option>
                                <option value='USD'>USD</option>
                            </select>
                        </div>
                        <div className="input-content col-md-12">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" placeholder='Descripe Item' onChange={handleInputsData}></textarea>
                        </div>
                        <div className='col-md-6 input-file'>
                            <label htmlFor='image' className='file-upload-button btn'><FaRegImages /> Choose Image</label>
                            <input type="file" id='image' name='image' onChange={handlefileData} />
                        </div>
                        <div className="my-3">
                            <button className="my-btn btn btn-success" type='submit'>Upload</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
