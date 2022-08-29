import './home.css'
import { FiSearch } from "react-icons/fi";
import { faker } from '@faker-js/faker';
import { useEffect } from 'react';
import TrendBox from '../../components/Trend Box/TrendBox';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    const [trends,setTrends] = useState([]);
    const [popularSuggestion,setPopular] = useState([]);
    const [isOpen , setIsOpen ] = useState(false)

    function trendsSetter(n) {
        let temp = []
        for (let i = 0; i < n; i++) {
            let trendItem = {
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                image: faker.image.fashion(300, 300, true)

            }
            temp.push(trendItem)
        }
        setTrends(temp);

    }

    function suggestionSetter(n) {
        let temp =[]
        for (let i = 0; i < n; i++) {
            let popularItem = {
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
            }
            temp.push(popularItem)
        }
        setPopular(temp)

    }

    useEffect(() => {
        trendsSetter(5);
        suggestionSetter(5);
    }, [])


    function searchHandlr(e) {
        e.preventDefault();
        navigate("/searchresult")
        
    }


    return (<>
        <div className="homeFrame">

            <img className='hero' src={`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`} alt="closet" />

            <form onSubmit={(e) => searchHandlr(e)}>
                <div className="inputBox">
                    <input type="text" placeholder='Search' onClick={()=>{setIsOpen(!isOpen)}} />
                    <div style={{ color: 'grey' }}>
                        <FiSearch size={40} />
                    </div>
                </div>
            </form>

            {
                isOpen && 
             <div className="trendBox">
                <TrendBox trends={trends} suggestions ={popularSuggestion}/>

            </div>
            }
        </div>
    </>);
}

export default Home;