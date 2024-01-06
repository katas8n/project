const one = "I";             // 1
const five = "V";              // 5
const ten = "X";               // 10
const fifteen = "L";               // 50
const oneHundred = "C";                // 100
const fiveHundred = "D";               // 500
const oneThousand = "M";               // 1000

function search(str) {
    const arr = str.split("");

    if(arr.length > 15) { return; };

    for(let i = 0; i < arr.length; i++) {
        const letter = arr[i];

        switch(letter) {
            case one:
                arr[i] = 1;
                break;

            case five:
                if(arr[i - 1] === 1){
                    arr[i-1] = 0;
                    arr[i] = 4;
                }else {
                    arr[i] = 5;
                }
                
                break;
                
                case ten:
                    if(arr[i - 1] === 1){
                    arr[i-1] = 0;
                    arr[i] = 9;
                } else {
                    arr[i] = 10;
                }

                break;

            case fifteen:
                if(arr[i - 1] === 10){
                    arr[i-1] = 0;
                    arr[i] = 40;

                } else {
                    arr[i] = 50;
                }

                break;

            case oneHundred:
                if(arr[i - 1] === 10){
                    arr[i-1] = 0;
                    arr[i] = 90;
                } else {
                    arr[i] = 100;
                }

                break;

            case fiveHundred:
                if(arr[i - 1] === 100){
                    arr[i-1] = 0;
                    arr[i] = 400;
                } else {
                    arr[i] = 500;
                }

                break;

            case oneThousand:
                if(arr[i - 1] === 100){
                    arr[i-1] = 0;
                    arr[i] = 900;
                } else {
                    arr[i] = 1000;
                }
                break;
        }
    }

    return arr.reduce((acc, curr) => acc + curr,0);
}

const result = search("III");