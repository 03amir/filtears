import './searchResult.css';
import { FiSearch } from "react-icons/fi";
import {useEffect} from 'react'
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import ProductCard from '../../components/Product Card/ProductCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';




function SearchResult() {

    const [allProduct, setAllProducts] = useState([]);


    function getAll(n){
       
            let temp = []
            for (let i = 0; i < n; i++) {
                let item = {
                    id: faker.datatype.uuid(),
                    name: faker.commerce.productName(),
                    image: faker.image.fashion(240, 340, true),
                    prevPrice:faker.commerce.price(700,1000),
                    nowPrice:faker.commerce.price(500,600),
                    reviews:faker.random.numeric(3),
                    rating:faker.random.numeric(1),
                    brand:faker.company.name() 

                }
                temp.push(item)
            }
            setAllProducts(temp);
    
        
    }

    useEffect(
        ()=>{
          getAll(20)
        },[]
    )



    return (  <>
    <div className="searchPage">
              
                <div className="searchBox">
                    <input type="text" placeholder='Search' />
                    <div style={{ color: 'grey' }}>
                        <FiSearch size={40} />
                    </div>
                </div>
           

            <div className="filterNresult">

                <div className="filters">
                    <h1>Search Results</h1>
                    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <h3>BRAND</h3>
        </AccordionSummary>
        <AccordionDetails>
        <input type="checkbox" id="brand" name="brand" value="Bike" />
        <label for="brand">H&M</label>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <h3>PRICE RANGE</h3>
        </AccordionSummary>
        <AccordionDetails>
        <input type="checkbox" id="price1" name="price1" value="price1" />
        <label for="price1"> Under 500 </label>
        <br></br>
        <br></br>
        <input type="checkbox" id="price2" name="price2" value="price2" />
        <label for="price2"> 500 To 1000 </label>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <h3>RATING</h3>
        </AccordionSummary>
        <AccordionDetails>
        <input type="checkbox" id="brand" name="brand" value="Bike" />
        <label for="brand">H&M</label>
        </AccordionDetails>
      </Accordion>

                </div>
                <div className="results">
                    {
                        allProduct.map((item)=>{
                            return <ProductCard item={item} key={item.id}/>
                        })
                    }

                </div>
            </div>
    </div>
                
    </>);
}

export default SearchResult;