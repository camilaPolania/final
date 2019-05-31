import { observable, toJS, action, values } from 'mobx';

import * as Papa from 'papaparse';
import { element, any } from 'prop-types';
import * as math from 'mathjs'

class Storage {

    //* csv arreglos....
    @observable dbFest: string = '/data/fest-db.csv';
    @observable infoUsers: any = [];
    @observable peopleCaliFest: any = [];
    @observable cosineResultsData: any = [];
    @observable cosineRanking: any = [];
    @observable userProfileArray: any = [];
    @observable select: number = 1;
    @observable selectedGroup: any = [];
    @observable groupResults: any = [];
    @observable festResults: any = [];

    constructor() {
        //*bind lo puede leer desde afuera
        this.dbGetData = this.dbGetData.bind(this);

        // imagenes de perfil de usuario, tomadas de semantic
        this.userProfileArray = ["https://react.semantic-ui.com/images/avatar/small/stevie.jpg", "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
            "https://react.semantic-ui.com/images/avatar/small/christian.jpg", "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
            "https://react.semantic-ui.com/images/avatar/small/veronika.jpg", "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
            "https://react.semantic-ui.com/images/avatar/small/matthew.png", "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
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
    
    @action csvFest() {
        if (this.peopleCaliFest.length === 0) return;
        let festAvgScore = [];

        let festAvgGenres = [];
        let festAvgGenresMin = [];
        let festAvgGenresMax = [];

        let festAvgArtists = [];
        let festAvgArtistsMin = [];
        let festAvgArtistsMax = [];

        let festAvgDiet = [];
        let festAvgDietMin = [];
        let festAvgDietMax = [];

        let festAvgFood = [];
        let festAvgFoodMin = [];
        let festAvgFoodMax = [];

        let festAvgDrink = [];
        let festAvgDrinkMin = [];
        let festAvgDrinkMax = [];

        for (let index = 0; index < 110; index++) {
            var festAvg = 0;
            var sum = 0;

            this.peopleCaliFest.slice(1, 110).forEach((element: any) => {
                //console.log(toJS(element.score[index]));
                sum += (parseInt(element.score[index].score));
            });

            festAvg = (sum / parseInt(this.peopleCaliFest.length));
            //console.log(festAvg);

            let userDataAvg = {
                catName: this.infoUsers[0][index],
                score: festAvg,
            }

            festAvgScore.push(userDataAvg);
        }

        festAvgGenres = festAvgScore.slice(3, 19);
        festAvgGenresMin = this.leastMiseryByArray(festAvgGenres).slice(0, 5);
        festAvgGenresMax = this.mostPleasureByArray(festAvgGenres).slice(0, 5);

        festAvgArtists = festAvgScore.slice(19, 65);
        festAvgArtistsMin = this.leastMiseryByArray(festAvgArtists).slice(0, 5);
        festAvgArtistsMax = this.mostPleasureByArray(festAvgArtists).slice(0, 5);

        festAvgDiet = festAvgScore.slice(65, 68);
        festAvgDietMin = this.leastMiseryByArray(festAvgDiet).slice(0, 5);
        festAvgDietMax = this.mostPleasureByArray(festAvgDiet).slice(0, 5);

        festAvgFood = festAvgScore.slice(68, 94);
        festAvgFoodMin = this.leastMiseryByArray(festAvgFood).slice(0, 5);
        festAvgFoodMax = this.mostPleasureByArray(festAvgFood).slice(0, 5);

        festAvgDrink = festAvgScore.slice(94, 110);
        festAvgDrinkMin = this.leastMiseryByArray(festAvgDrink).slice(0, 5);
        festAvgDrinkMax = this.mostPleasureByArray(festAvgDrink).slice(0, 5);

        let festResult = {
            festAvgScore: festAvgScore,

            festAvgGenres: festAvgGenres,
            festAvgGenresMin: festAvgGenresMin,
            festAvgGenresMax: festAvgGenresMax,

            festAvgArtists: festAvgArtists,
            festAvgArtistsMin: festAvgArtistsMin,
            festAvgArtistsMax: festAvgArtistsMax,

            festAvgDiet: festAvgDiet,
            festAvgDietMin: festAvgDietMin,
            festAvgDietMax: festAvgDietMax,

            festAvgFood: festAvgFood,
            festAvgFoodMin: festAvgFoodMin,
            festAvgFoodMax: festAvgFoodMax,

            festAvgDrink: festAvgDrink,
            festAvgDrinkMin: festAvgDrinkMin,
            festAvgDrinkMax: festAvgDrinkMax,
        }

        this.festResults.push(festResult);
        console.log(toJS(festResult));
    }

    @action compareByArrayGroup(){
        if (this.selectedGroup.length === 0) return;
        let groupAvgScore = [];

        let groupAvgGenres = [];
        let groupAvgGenresMin = [];
        let groupAvgGenresMax = [];

        let groupAvgArtists = [];
        let groupAvgArtistsMin = [];
        let groupAvgArtistsMax = [];

        let groupAvgDiet = [];
        let groupAvgDietMin = [];
        let groupAvgDietMax = [];

        let groupAvgFood = [];
        let groupAvgFoodMin = [];
        let groupAvgFoodMax = [];

        let groupAvgDrink = [];
        let groupAvgDrinkMin = [];
        let groupAvgDrinkMax = [];

        for (let index = 0; index < 110; index++) {
            var groupAvg = 0;
            var sum = 0;

            this.peopleCaliFest.slice(1, 110).forEach((element: any) => {
                //console.log(toJS(element.score[index]));
                sum += (parseInt(element.score[index].score));
            });

            groupAvg = (sum / parseInt(this.peopleCaliFest.length));
            //console.log(groupAvg);

            let userDataAvg = {
                catName: this.infoUsers[0][index],
                score: groupAvg,
            }

            groupAvgScore.push(userDataAvg);
        }

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
            scoreMusicGenres = score.slice(3, 19);
            scoreMusicGenresMin = this.leastMiseryByArray(scoreMusicGenres);
            scoreMusicGenresMax = this.mostPleasureByArray(scoreMusicGenres);
            scoreMusicGenresAvg = this.averageByArray(scoreMusicGenres);
            console.log(scoreMusicGenres);

            scoreArtists = score.slice(19, 65);
            scoreArtistsMin = this.leastMiseryByArray(scoreArtists);
            scoreArtistsMax = this.mostPleasureByArray(scoreArtists);
            scoreArtistsAvg = this.averageByArray(scoreArtists);
            console.log(scoreArtists);

            scoreTypesOfFood = score.slice(65, 68);
            scoreTypesOfFoodMin = this.leastMiseryByArray(scoreTypesOfFood);
            scoreTypesOfFoodMax = this.mostPleasureByArray(scoreTypesOfFood);
            scoreTypesOfFoodAvg = this.averageByArray(scoreTypesOfFood);
            console.log(scoreTypesOfFood);

            scoreFood = score.slice(68, 94);
            scoreFoodMin = this.leastMiseryByArray(scoreFood);
            scoreFoodMax = this.mostPleasureByArray(scoreFood);
            scoreFoodAvg = this.averageByArray(scoreFood);
            console.log(scoreFood);

            scoreDrink = score.slice(94, 110);
            scoreDrinkMin = this.leastMiseryByArray(scoreDrink);
            scoreDrinkMax = this.mostPleasureByArray(scoreDrink);
            scoreDrinkAvg = this.averageByArray(scoreDrink);
            console.log(scoreDrink);

            var peopleFest = {
                name: element[1],
                age: element[2],
                index: indexArray,
                img: this.userProfileArray[random],

                scoreMusicGenres: scoreMusicGenres,
                scoreMusicGenresMin: scoreMusicGenresMin,
                scoreMusicGenresMax: scoreArtistsMax,
                scoreMusicGenresAvg: scoreArtistsAvg,

                scoreArtists: scoreArtists,
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

    @action cosineSigularity(userIndex: number) {
        if (this.infoUsers.length === 0) return;
        let d1 = this.infoUsers[userIndex];

        for (let index = 1; index < this.infoUsers.length; index++) {
            let d2 = this.infoUsers[index];

            var consineResults = [];

            var sumD1D2 = 0;
            var sumD1 = 0;
            var sumD2 = 0;
            var magD1 = 0;
            var magD2 = 0;

            let scoreFinal;

            let scoreMusicGenresValues = [];
            let scoreMusicGenresValuesAvg: undefined | any;
            let scoreMusicGenresValuesMin;
            let scoreMusicGenresValuesMax;

            let scoreArtitsValues = [];
            let scoreArtitsValuesAvg: undefined | any;
            let scoreArtitsValuesMin;
            let scoreArtitsValuesMax;

            let scoreFoodValues = [];
            let scoreFoodValuesAvg: undefined | any;
            let scoreFoodValuesMin;
            let scoreFoodValuesMax;

            let scoreDrinkValue = [];
            let scoreDrinkValueAvg: undefined | any;
            let scoreDrinkValueMin;
            let scoreDrinkValueMax;

            let scoreTypesOfFoodValue = [];
            let scoreTypesOfFoodValueAvg: undefined | any;
            let scoreTypesOfFoodValueMin;
            let scoreTypesOfFoodValueMax;

            for (let indexB = 2; indexB < d2.length; indexB++) {
                sumD1D2 += (parseInt(d1[indexB]) * parseInt(d2[indexB]));
                sumD1 += (parseInt(d1[indexB]) * parseInt(d1[indexB]));
                sumD2 += (parseInt(d2[indexB]) * parseInt(d2[indexB]));

                magD1 = Math.abs(Math.sqrt(sumD1));
                magD2 = Math.abs(Math.sqrt(sumD2));

                let result = (sumD1D2 / (magD1 * magD2)) * 100;

                let resultData = {
                    categoryName: this.infoUsers[0][index],
                    score: result,
                }

                consineResults.push(resultData);

            }

            scoreMusicGenresValues = consineResults.slice(1, 17);
            scoreMusicGenresValuesMin = this.leastMiseryByArrayCosine(scoreMusicGenresValues).slice(0, 5);
            scoreMusicGenresValuesMax = this.mostPleasureByArrayCosine(scoreMusicGenresValues).slice(0, 5);
            scoreMusicGenresValuesAvg = this.averageByArray(scoreMusicGenresValues);

            scoreArtitsValues = consineResults.slice(17, 63);
            scoreArtitsValuesMin = this.leastMiseryByArrayCosine(scoreArtitsValues).slice(0, 5);
            scoreArtitsValuesMax = this.mostPleasureByArrayCosine(scoreArtitsValues).slice(0, 5);
            scoreArtitsValuesAvg = this.averageByArray(scoreArtitsValues);

            scoreTypesOfFoodValue = consineResults.slice(63, 66);
            scoreTypesOfFoodValueMin = this.leastMiseryByArrayCosine(scoreTypesOfFoodValue).slice(0, 5);
            scoreTypesOfFoodValueMax = this.mostPleasureByArrayCosine(scoreTypesOfFoodValue).slice(0, 5);
            scoreTypesOfFoodValueAvg = this.averageByArray(scoreTypesOfFoodValue);

            scoreFoodValues = consineResults.slice(66, 92);
            scoreFoodValuesMin = this.leastMiseryByArrayCosine(scoreFoodValues).slice(0, 5);
            scoreFoodValuesMax = this.mostPleasureByArrayCosine(scoreFoodValues).slice(0, 5);
            scoreFoodValuesAvg = this.averageByArray(scoreFoodValues);

            scoreDrinkValue = consineResults.slice(66, 92);
            scoreDrinkValueMin = this.leastMiseryByArrayCosine(scoreDrinkValue).slice(0, 5);
            scoreDrinkValueMax = this.mostPleasureByArrayCosine(scoreDrinkValue).slice(0, 5);
            scoreDrinkValueAvg = this.averageByArray(scoreDrinkValue);

            scoreFinal = ((scoreMusicGenresValuesAvg + scoreArtitsValuesAvg + scoreTypesOfFoodValueAvg + scoreTypesOfFoodValueAvg + scoreDrinkValueAvg) / 5);

            var consineResultsObj = {
                name: d2[1],
                age: d2[2],
                consineResults: consineResults,

                scoreMusicGenresValues: scoreMusicGenresValues,
                scoreMusicGenresValuesMin: scoreMusicGenresValuesMin,
                scoreMusicGenresValuesMax: scoreMusicGenresValuesMax,
                scoreMusicGenresValuesAvg: scoreMusicGenresValuesAvg,

                scoreArtitsValues: scoreArtitsValues,
                scoreArtitsValuesMin: scoreArtitsValuesMin,
                scoreArtitsValuesMax: scoreArtitsValuesMax,
                scoreArtitsValuesAvg: scoreArtitsValuesAvg,

                scoreTypesOfFoodValue: scoreTypesOfFoodValue,
                scoreTypesOfFoodValueMin: scoreTypesOfFoodValueMin,
                scoreTypesOfFoodValueMax: scoreTypesOfFoodValueMin,
                scoreTypesOfFoodValueAvg: scoreTypesOfFoodValueAvg,

                scoreFoodValues: scoreFoodValues,
                scoreFoodValuesMin: scoreFoodValuesMin,
                scoreFoodValuesMax: scoreFoodValuesMax,
                scoreFoodValuesAvg: scoreFoodValuesAvg,

                scoreDrinkValue: scoreDrinkValue,
                scoreDrinkValueMin: scoreDrinkValueMin,
                scoreDrinkValueMax: scoreDrinkValueMax,
                scoreDrinkValueAvg: scoreDrinkValueAvg,

                scoreFinal: scoreFinal,
            }

            this.cosineResultsData.push(consineResultsObj);
        }

        this.cosineRanking = this.rankingByArrayCosine(this.cosineResultsData);
        console.log(toJS(this.cosineResultsData));
        console.log(toJS(this.cosineRanking));
    }

    @action rankingByArrayCosine(dataArray: any) {
        return dataArray.sort((a: any, b: any) => (a.scoreFinal < b.scoreFinal) ? 1 : -1);
    }

    @action leastMiseryByArrayCosine(dataArray: any) {
        return dataArray.sort((a: any, b: any) => (a.score > b.score) ? 1 : -1);
    }

    @action mostPleasureByArrayCosine(dataArray: any) {
        return dataArray.sort((a: any, b: any) => (a.score < b.score) ? 1 : -1);
    }

    @action leastMiseryByArray(dataArray: any) {
        return dataArray.filter((a: any) => a.score <= 1);
    }

    @action mostPleasureByArray(dataArray: any) {
        return dataArray.filter((a: any) => a.score >= 5);
    }

    @action averageByArray(dataArray: any) {
        if (dataArray.length === 0) return;
        let sum = 0;
        let avg = 0;
        dataArray.forEach((element: any) => {
            sum += parseInt(element.score);
        });
        avg = sum / dataArray.length;

        return avg;
    }
}
const storage = new Storage();
export default storage;