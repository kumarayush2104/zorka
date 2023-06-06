// Libraries
import React, { useEffect, useState } from 'react'

// Components
import PortfolioCard from './PortfolioCard';

// Media
import backpackImage from '../../assets/portfolio/backpack.jpg';
import greenGardenImage from '../../assets/portfolio/greengarden.jpg';
import lonelyChairImage from '../../assets/portfolio/lonelychair.jpg';
import theBlueA from '../../assets/portfolio/thebluea.jpg';
import whiteSneakersImage from '../../assets/portfolio/whitesneakers.jpg';
import recycleImages from '../../assets/portfolio/recyclebags.jpg'

export default function Portfolio() {

    const [selectedTab, setSelectedTab] = useState("All");
    const [portfolioData, setPortfolioData] = useState(null)

    const portfolioArray = [
        { type: "Illustration", card: <PortfolioCard title={"THE BLUE A"} image={theBlueA} imageThumb={theBlueA} content={"PRINT, BRANDING"} /> },
        { type: "Illustration", card: <PortfolioCard title={"GREEN GARDEN"} image={greenGardenImage} imageThumb={greenGardenImage} content={"PRINT"} /> },
        { type: "Photography", card: <PortfolioCard title={"THE LONELY CHAIR IN THE WORLD"} image={lonelyChairImage} imageThumb={lonelyChairImage} content={"INTERIOR"} /> },
        { type: "Photography", card: <PortfolioCard title={"ALL WHITE SNEAKERS"} image={whiteSneakersImage} imageThumb={whiteSneakersImage} content={"PHOTOGRAPHY"} /> },
        { type: "Photography", card: <PortfolioCard title={"Recycle Bags"} image={recycleImages} imageThumb={recycleImages} content={"PHOTOGRAPHY"} /> },
        { type: "Print", card: <PortfolioCard title={"BACK PACK COLLECTION SHOOT"} image={backpackImage} imageThumb={backpackImage} content={"PHOTOGRAPHY"} /> }
    ]

    useEffect(() => {
        // Filter cards according to their type
        const fetchData = () => {
            if (selectedTab === "All") {
                setPortfolioData(portfolioArray)
                return
            }

            setPortfolioData(portfolioArray.filter((element) => element.type === selectedTab));
        }
        fetchData();
    }, [selectedTab])

    return (
        <div className="main">
            <div className="header-page">
                <div className="container">
                    <h1>PORTFOLIO</h1>
                </div>
                <div className="main-content">
                    <div className="container">
                        <div className="text-center">

                            {/* Tab Section Start */}
                            <ul className="works-filter">
                                <li className={`filter ${selectedTab === "All" ? "active" : ""}`} id='All' onClick={(e) => setSelectedTab(e.target.id)}>ALL</li>
                                <li className={`filter ${selectedTab === "Illustration" ? "active" : ""}`} id='Illustration' onClick={(e) => setSelectedTab(e.target.id)}>ILLUSTRATION</li>
                                <li className={`filter ${selectedTab === "Photography" ? "active" : ""}`} id='Photography' onClick={(e) => setSelectedTab(e.target.id)}>PHOTOGRAPHY</li>
                                <li className={`filter ${selectedTab === "Print" ? "active" : ""}`} id='Print' onClick={(e) => setSelectedTab(e.target.id)}>PRINT</li>
                            </ul>
                            {/* Tab Section End */}

                            {/* Content Section Start */}
                            <div className="list-works">
                                <div className="row">
                                    {
                                        portfolioData ? portfolioData.map((element) => element.card) : ""
                                    }
                                </div>
                            </div>
                            {/* Content Section End */}

                        </div>

                        {/* Load More Button Start */}
                        <button className="pink-btn long-btn">LOAD MORE</button>
                        {/* Load More Button End */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
