import React from 'react'
import TopSellers from '../home/TopSellers'
import { useItemsApi } from '../../contexts/ItemsContextProvider'
import Items from '../../components/items/Items'
import {useParams} from 'react-router-dom'
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'


export default function ItemDetails() {

    const {id} = useParams();
    const {adverts} = useItemsApi();
    // const [relatedItems, setRelatedItems] = useState([]);


    let selectedItemDetails = "Loading...";
    let relatedItems = 'loading...'

    if(adverts.length >= 1){
        const selectedItem = adverts.filter(item => item._id === id)
        if(selectedItem.length >= 1){
            selectedItemDetails = <Details item={selectedItem[0]} />
            const related = adverts.filter(item => item.category === selectedItem[0].category);
            relatedItems = related.length >= 1 && <Items items={related} cName='g-5' />
        }else{
            selectedItemDetails = "Not found";
        }
    }else{
        selectedItemDetails = "Nothing"
    }

  return (
    <div className="my-container app-content d-flex">
        <div className="app-content-sidebar">
            <TopSellers />
        </div>
        <div className="app-content-main">
            {selectedItemDetails}
            <div className="section-container">
                <div className="section-header">
                    <h3>Related Items</h3>
                </div>
                <div className="section-body">
                    {relatedItems}
                </div>
            </div>
        </div>
    </div>
  )
}

function Details({item}){
    return(
        <div className="item-detail-container">
            <div className="item-image">
                <img src={item.image} alt="" />
            </div>
            <div className="item-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className='h5 my-3'>
                    <span className='price-value'>{item.price}</span> {item.currency === 'USD' ? '$' : 'SSP'}
                </div>
                <div className="mt-2">
                    <h6>Contacts & Address</h6>
                    <ul>
                        <li>
                            <FaMapMarkerAlt className='icon' />
                            <span>Juba, Malakia near test</span>
                        </li>
                        <li>
                            <FaPhoneAlt />
                            <span>{item.seller.phone}</span>
                        </li>
                        <li>
                            <FaEnvelope />
                            <span>{item.seller.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}