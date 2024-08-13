import './OurCreationsGalery.scss'
import deepEarthImgMobile from '../../assets/images/mobile/image-deep-earth.jpg'
import deepEarthImgDesktop from '../../assets/images/desktop/image-deep-earth.jpg'
import nightArcadeImgMobile from '../../assets/images/mobile/image-night-arcade.jpg'
import nightArcadeImgDesktop from '../../assets/images/desktop/image-night-arcade.jpg'
import soccerTeamImgMobile from '../../assets/images/mobile/image-soccer-team.jpg'
import soccerTeamImgDesktop from '../../assets/images/desktop/image-soccer-team.jpg'
import gridImgMobile from '../../assets/images/mobile/image-grid.jpg'
import gridImgDesktop from '../../assets/images/desktop/image-grid.jpg'
import fromAboveImgMobile from '../../assets/images/mobile/image-from-above.jpg'
import fromAboveImgDesktop from '../../assets/images/desktop/image-from-above.jpg'
import pocketBorealisImgMobile from '../../assets/images/mobile/image-pocket-borealis.jpg'
import pocketBorealisImgDesktop from '../../assets/images/desktop/image-pocket-borealis.jpg'
import curiosityImgMobile from '../../assets/images/mobile/image-curiosity.jpg'
import curiosityImgDesktop from '../../assets/images/desktop/image-curiosity.jpg'
import fisheyeImgMobile from '../../assets/images/mobile/image-fisheye.jpg'
import fisheyeImgDesktop from '../../assets/images/desktop/image-fisheye.jpg'

const OurCreationsGalery = () => {
    return (
        <section className='oc-galery'>
            <div className='oc-galery__wrap'>
                <h2 className='oc-galery__title'>Our Creations</h2>

                <div className="oc-galery__card-container">

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={deepEarthImgDesktop}></source>
                            <img className="oc-galery__img" src={deepEarthImgMobile} alt="Deep Earth" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Deep <br />Earth</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={nightArcadeImgDesktop}></source>
                            <img className="oc-galery__img" src={nightArcadeImgMobile} alt="Night Arcade" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Night <br />Arcade</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={soccerTeamImgDesktop}></source>
                            <img className="oc-galery__img" src={soccerTeamImgMobile} alt="Soccer Teams VR" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Soccer <br />Teams VR</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={gridImgDesktop}></source>
                            <img className="oc-galery__img" src={gridImgMobile} alt="The Grid" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">The <br />Grid</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={fromAboveImgDesktop}></source>
                            <img className="oc-galery__img" src={fromAboveImgMobile} alt="From Up Above" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">From Up <br />Above VR</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={pocketBorealisImgDesktop}></source>
                            <img className="oc-galery__img" src={pocketBorealisImgMobile} alt="Pocket Borealis" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Pocket <br />Borealis</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={curiosityImgDesktop}></source>
                            <img className="oc-galery__img" src={curiosityImgMobile} alt="The Curiosity" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">The <br />Curiosity</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={fisheyeImgDesktop}></source>
                            <img className="oc-galery__img" src={fisheyeImgMobile} alt="Make It Fisheye" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Make It <br />Fisheye</h3>
                    </a>

                </div>
                <a className='oc-galery__seeAll' href="">See All</a>
            </div>

        </section>
    )
}

export default OurCreationsGalery