import React from 'react';
import Menu from "../../components/Menu";
import dadosIniciais from '../../data/dados_iniciais.json'
import VideoCardGroup from "../../components/Carousel";
import BannerMain from "../../components/BannerMain";

function Home() {
    return (
        <div security={{background: "$141414"}}>
            <Menu/>

            <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url
                }
            />

            <VideoCardGroup category={dadosIniciais.categorias[0]}/>
            <VideoCardGroup category={dadosIniciais.categorias[1]}/>
            <VideoCardGroup category={dadosIniciais.categorias[2]}/>
            <VideoCardGroup category={dadosIniciais.categorias[3]}/>
            <VideoCardGroup category={dadosIniciais.categorias[4]}/>
            <VideoCardGroup category={dadosIniciais.categorias[5]}/>
        </div>
    );
}

export default Home;
