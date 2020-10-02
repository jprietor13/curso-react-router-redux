import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
    return (
        <React.Fragment>
            <Header /> 
            <Search />
            {myList !== undefined && myList.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                    {myList.map((item) => {
                            return <CarouselItem key={item.id} {...item} isList={true} />
                        })
                    }
                    </Carousel>
                </Categories>
            )}
            
            <Categories title="Tendencias">
                <Carousel>
                    {trends !== undefined &&
                        trends.map((item) => {
                            return <CarouselItem key={item.id} {...item} />
                        })
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de platzi video">
                <Carousel>
                    {originals !== undefined &&
                        originals.map((item) => {
                            return <CarouselItem key={item.id} {...item}/>
                        })
                    }
                </Carousel>
            </Categories>
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

//mapStateToProps => mapeo de las props
//dispatch => elementos a disparar
//export default Home;
export default connect(mapStateToProps, null)(Home);