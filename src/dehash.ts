import {dehashList} from "./app";



const isANumber = (char: string) => {
    return char >= '0' && char <= '9';
}


const dehash = (hash: string): string[] => {
    /*
        @params: string
        @return: array of strings

        Recursive function that gets a string as parameter and returns an array of numeric strings by splitting by 2
        string each time it enters in the recursion and reducing the time complexity of the algorithm
     */
    if (hash.length > 1){
        const left = hash.slice(0, Math.ceil(hash.length / 2));
        const right = hash.slice(left.length);

        dehash(left);
        dehash(right);
    } else {
        if (isANumber(hash.charAt(0))){
            dehashList.push(hash);
        }
    }
    return dehashList;
}



export const inOrderMagicNumber = (hash: string): Number[] => {
    /*
        @params: taskes as input the hash in req.body
        @return: returns an array of 6 numbers

        Works with numeric string starting from the first element to the maximum possible
    */
    const dehashList = dehash(hash);
    let magic: Number[] = [];

    console.log('DEHASH LIST: ', dehashList);

    for (let i = 0; i < dehashList.length; i++ ) {
        let current: string = null;
        if (magic.length < 6){
            if (dehashList[i+1]) {
                const addNext = Math.random();
                if (addNext > 0.5 && (Number(dehashList[i] + Number(dehashList[i+1])) <= 70)) {
                    current = dehashList[i] + dehashList[i+1];
                    if (Number(current) !== 0 && !magic.includes(Number(current))) {
                        magic.push(Number(current));
                        i++;
                    }
                } else {
                    current = dehashList[i];
                }
            } else {
                current = dehashList[i];
            }

            if (Number(current) !== 0 && !magic.includes(Number(current))) {
                magic.push(Number(current));
            }
        }
    }

    return magic;
}
