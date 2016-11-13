import React, { Component } from 'react';

import CoffeePost from '../CoffeePost'

class Coffee extends Component {
  render() {

    const imgKaratina =   require('../../img/kenya-karatina.jpg');
    const imgHermosa  =   require('../../img/vista-hermosa.jpg');
    const imgColinas  =   require('../../img/las-colinas.jpg');
    const imgPeaberry =   require('../../img/hakimson-estate-peaberry.jpg');

    return (
      <div className="w-90-ns w-100 pv4-ns center cf">
        <div className="content-end flex flex-wrap">
          <CoffeePost
            title="Kenya Karatina AA"
            coffee="Réveille Coffee Co."
            tasteNotes="Strawberry, Rosé, Pomegranate"
            location="Kenya"
            thoughts="Really great sweetness to the coffee but had an overwhelmingly sweet aftertaste.
                      While it makes sense from the taste notes, the roast did not feel balanced. The
                      coffee had an incredible smell from the grind to the actual brew."
            rating="7 / 10"
            coffeeImageSource={imgKaratina} />

          <CoffeePost
            title="Vista Hermosa"
            coffee="Sweet Bloom"
            tasteNotes="Red Plum, White Grape, Brown Sugar"
            location="Guatemala"
            thoughts="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="8 / 10"
            coffeeImageSource={imgHermosa} />
        </div>

        <div className="content-end flex flex-wrap">
          <CoffeePost
            title="Las Colinas"
            coffee="George Howell Coffee"
            tasteNotes="Passion Fruit, Chocolate, Black Tea"
            location="Nicaragua"
            thoughts="Sweet chocolate taste in accordance with the taste notes.
                      This roast had a darker tasting aftertaste but nothing too unexpected.
                      Really enjoyed this coffee after having never heard of George Howell Coffee,
                      would definitely recommend."
            rating="7.5 / 10"
            coffeeImageSource={imgColinas} />

          <CoffeePost
            title="Hakimson Estate Peaberry"
            coffee="Intelligentsia"
            tasteNotes="Tart Cherry, Limeade, Papaya"
            location="Kenya"
            thoughts="One of my favorite roasts I've had so far. This was a limited edition
                      release from Intelligentsia and did not dissapoint. I was able to get
                      the last bag from my local shop and loved the balanced taste this roast
                      provided. I enjoyed soft sweetness and light aftertaste despite the
                      intense sound of the taste notes listed."
            rating="9 / 10"
            coffeeImageSource={imgPeaberry} />
        </div>
      </div>
    );
  }
}

export default Coffee;
