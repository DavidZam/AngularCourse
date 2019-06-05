import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

    transform(phrase: string, todas: boolean = true): string {

        phrase = phrase.toLowerCase();

        const word = phrase.split(' ');

        if (todas) {
            // tslint:disable-next-line:forin
            for (const i in word) {
                word[i] = word[i][0].toUpperCase() +
                word[i].substr(1);
            }
        } else {
            word[0] = word[0][0].toUpperCase() + word[0].substr(1);
        }

        const resultPhrase = word.join(' ');

        return resultPhrase;
    }

}
