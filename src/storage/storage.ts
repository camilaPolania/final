import { observable, toJS, action, values } from 'mobx';

import * as Papa from 'papaparse';
import { element } from 'prop-types';

class Storage {

    //* csv arreglos....
    @observable dbFest: string = '/data/fest-db.csv';
    @observable infoUsers: any = [];
    @observable peopleCaliFest: any = [];
    @observable cosine: any = [];
    @observable userProfileArray: any = [];
    @observable select: number = 1;

    constructor() {
        //*bind lo puede leer desde afuera
        this.dbGetData = this.dbGetData.bind(this);

        // imagenes de perfil de usuario, tomadas de semantic
        this.userProfileArray = ["https://react.semantic-ui.com/images/avatar/small/stevie.jpg", "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
            "https://react.semantic-ui.com/images/avatar/small/christian.jpg", "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
            "https://react.semantic-ui.com/images/avatar/small/veronika.jpg", "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
            "https://react.semantic-ui.com/images/avatar/small/matthew.jpg", "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
            "https://react.semantic-ui.com/images/avatar/small/lena.png"];
    }

    //* @action indica que es un metodo que se va a ejecutar
    //* Reader y Decoder es para leer y decodificar el archivo csv en UTF-8
    @action fetch() {
        return fetch(this.dbFest).then(function (response: any) {
            let csvReader = response.body.getReader();
            let csvDecoder = new TextDecoder('utf-8');

            return csvReader.read().then(function (result: any) {
                return csvDecoder.decode(result.value);
            });
        });
    }

    //* Luego de decodificarel archivo se crea cada usuario
    @action dbGetData(result: any) {
        if (result.data && result.data !== null && result.data !== undefined) {
            result.data.forEach((element: any) => {
                if (element !== undefined) {
                    this.infoUsers.push(element);
                }
            });
        }
        console.log(this.infoUsers);
    }

    //*Metodo asincrono, cuando se cumple la petición el Parse del CSV a texto
    async csvGetDataAsync() {
        let csvData = await this.fetch();

        Papa.parse(csvData, {
            complete: this.dbGetData
        });
    }

    @action csvGetPeopleFest() {
        if (this.infoUsers === 0) return;
        let indexArray = 0;
        this.infoUsers.forEach((element: any) => {

            //*Arreglo de imagenes de usuario 
            let random = Math.floor(Math.random() * (this.userProfileArray.length - 0)) + 0;

            //*Resultados globales 
            let score = [];

            //* Resultados de los generos musicales 
            let scoreMusicGenres = [];
            let scoreMusicGenresAvg;
            let scoreMusicGenresMin;
            let scoreMusicGenresMax;

            //* Resultados Artistas
            let scoreArtists = [];
            let scoreArtistsAvg;
            let scoreArtistsMin;
            let scoreArtistsMax;

            //* Resultados comida
            let scoreFood = [];
            let scoreFoodAvg;
            let scoreFoodMin;
            let scoreFoodMax;

            //* Resultados Bebidas
            let scoreDrink = [];
            let scoreDrinkAvg;
            let scoreDrinkMin;
            let scoreDrinkMax;

            //* Resiltados tipos de alimentación
            let scoreTypesOfFood = [];
            let scoreTypesOfFoodAvg;
            let scoreTypesOfFoodMin;
            let scoreTypesOfFoodMax;

            // Este for se usa para meter la info en la variables
            for (let index = 0; index < this.infoUsers[0].length; index++) {
                let scoreInfo = {
                    categoryName: this.infoUsers[0][index],
                    score: element[index],
                }
                score.push(scoreInfo);
            }

            //* Al usar el slice separa los scores de cada categoría
            scoreMusicGenres = score.slice(3,19);
            console.log(scoreMusicGenres);

            scoreArtists = score.slice(19,65);
            console.log(scoreArtists);

            scoreTypesOfFood = score.slice(65, 68);
            console.log(scoreTypesOfFood);

            scoreFood = score.slice(68, 94);
            console.log(scoreFood);

            scoreDrink = score.slice(94, 110);
            console.log(scoreDrink);

            var peopleFest = {
                name: element [1],
                age: element [2],
                index: indexArray,
                img: this.userProfileArray[random],

                scoreMusicGenres: scoreMusicGenres,
                scoreMusicGenresMin: scoreMusicGenresMin,
                scoreMusicGenresMax: scoreArtistsMax,
                scoreMusicGenresAvg: scoreArtistsAvg,

                scoreArtists:scoreArtists,
                scoreArtistsMin: scoreArtistsMin,
                scoreArtistsMax: scoreArtistsMax,
                scoreArtistsAvg: scoreArtistsAvg,

                scoreTypesOfFood: scoreTypesOfFood,
                scoreTypesOfFoodMin: scoreArtistsMin,
                scoreTypesOfFoodMax: scoreTypesOfFoodMax,
                scoreTypesOfFoodAvg: scoreTypesOfFoodAvg,

                scoreFood: scoreFood,
                scoreFoodMin: scoreFoodMin,
                scoreFoodMax: scoreFoodMax,
                scoreFoodAvg: scoreFoodAvg,

                scoreDrink: scoreDrink,
                scoreDrinkMin: scoreDrinkMin,
                scoreDrinkMax: scoreDrinkMax,
                scoreDrinkAvg: scoreDrinkAvg,
            }

            this.peopleCaliFest.push(peopleFest);
            indexArray += 1;

        });

        console.log(this.peopleCaliFest);
    }

    
}

const storage = new Storage();
export default storage;
