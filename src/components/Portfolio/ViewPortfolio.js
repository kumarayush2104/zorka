// Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import ViewPortfolioCard from './ViewPortfolioCard'

// Media
import Image1 from '../../assets/portfolio/portfolio-details-1.jpg'
import Image2 from '../../assets/portfolio/portfolio-details-2.jpg'
import Image3 from '../../assets/portfolio/portfolio-details-3.jpg'
import CardImage1 from '../../assets/portfolio/portfolio-img-1.jpg'
import CardImage2 from '../../assets/portfolio/portfolio-img-2.jpg'
import CardImage3 from '../../assets/portfolio/portfolio-img-3.jpg'
import CardImage4 from '../../assets/portfolio/portfolio-img-4.jpg'

export default function ViewPortfolio(props) {
    return (
        <div className="main">
            <div className="main-content">
                <div className="container">
                    <div className="portfolio-details">
                        <div className="row">
                            <div className="col-md-6">
                                <p><img className="img-responsive" src={Image1} alt="img" /></p>
                                <p><img className="img-responsive" src={Image2} alt="img" /></p>
                                <p><img className="img-responsive" src={Image3} alt="img" /></p>
                            </div>
                            <div className="col-md-6">
                                <h2 className="portfolio-title">Brown Clutch</h2>
                                <p className="portfolio-category"><Link to={`/Category/${props.id}`}>FASHION</Link></p>
                                <div className="portfolio-content">
                                    <p>Cras ut magna quis metus tristique vulputate. Ut a sapien scelerisque, fermentum lorem a, aliquet mi. Ut lobortis lorem nisl, vel euismod ligula ornare quis. In consectetur elit sed leo fringilla, a placerat ipsum mollis. Proin suscipit metus vitae lectus malesuada scelerisque. Quisque interdum malesuada nisi non accumsan. Suspendisse eget lorem libero. Pellentesque mauris risus, cursus eget aliquet quis, iaculis vel purus. Nam in ligula vel mi interdum tincidunt sit amet eget leo. Phasellus dapibus augue a lorem luctus aliquet. Duis consectetur eros arcu, eget consequat orci mattis non.Nam nec ex maximus sem egestas elementum. Duis nisl arcu, sodales ut porttitor at, tincidunt vitae risus. Suspendisse eu nunc ligula.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolia-nav">
                        <Link to={`/Portfolio/${props.previousId}`} className="prev"><i className="fa fa-angle-left" /> THE BLUE A</Link>
                        <Link to={`/Portfolio/${props.nextId}`} className="next">THE LONELY CHAIR IN THE WORLD <i className="fa fa-angle-right" /></Link>
                    </div>
                    <div className="text-center">
                        <div className="row">
                            <ViewPortfolioCard image={CardImage1} imageThumb={CardImage1} title={"THE BLUE A"} content={"PRINT, BRANDING"} />
                            <ViewPortfolioCard image={CardImage2} imageThumb={CardImage2} title={"GREEN GARDEN"} content={"PRINT"} />
                            <ViewPortfolioCard image={CardImage3} imageThumb={CardImage3} title={"ME.YOU.BED.NOW"} content={"FASHION"} />
                            <ViewPortfolioCard image={CardImage4} imageThumb={CardImage4} title={"THE LONELY CHAIR IN THE WORLD"} content={"INTERIOR"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
