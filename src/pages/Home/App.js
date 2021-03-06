import React, {useEffect, useState} from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
        // console.log(dadosIniciais);
        // console.log(categoriasComVideos);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na area os temos HTML, CSS"
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return (
          <Carousel key={categoria.id} category={categoria} />
        );
      })}

    </PageDefault>
  );
}

export default Home;
