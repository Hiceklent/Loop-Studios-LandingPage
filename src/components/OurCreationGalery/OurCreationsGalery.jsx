import './OurCreationsGalery.scss'
const OurCreationsGalery = () => {
    return (
        <section className='oc-galery'>
            <div className='oc-galery__wrap'>
                <h2 className='oc-galery__title'>Our Creations</h2>

                <div className="oc-galery__card-container">

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-deep-earth.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-deep-earth.jpg" alt="Deep Earth" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Deep <br />Earth</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-night-arcade.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-night-arcade.jpg" alt="Night Arcade" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Night <br />Arcade</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-soccer-team.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-soccer-team.jpg" alt="Soccer Teams VR" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Soccer <br />Teams VR</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-grid.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-grid.jpg" alt="The Grid" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">The <br />Grid</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-from-above.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-from-above.jpg" alt="From Up Above" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">From Up <br />Above VR</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-pocket-borealis.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-pocket-borealis.jpg" alt="Pocket Borealis" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">Pocket <br />Borealis</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-curiosity.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-curiosity.jpg" alt="The Curiosity" />
                        </picture>
                        <h3 className="oc-galery__cardTitle">The <br />Curiosity</h3>
                    </a>

                    <a className="oc-galery__card" href="">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/src/assets/images/desktop/image-fisheye.jpg"></source>
                            <img className="oc-galery__img" src="/src/assets/images/mobile/image-fisheye.jpg" alt="Make It Fisheye" />
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