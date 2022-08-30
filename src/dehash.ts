import {dehashList} from "./app";



const isANumber = (char: string) => {
    /*
        @param: single character
        @return: true if is number else false
     */
    return char >= '0' && char <= '9';
}


const dehash = (hash: string): string[] => {
    /*
        @params: string
        @return: array of strings

        Recursive function that gets a string as parameter and returns an array of numeric strings by splitting by 2
        string each time it enters in the recursion and reducing the time complexity of the algorithm
        Return example: ['0', '0', '0', '5', '4', '0', '4', '1']

     */
    if (hash.length > 1){
        const left = hash.slice(0, Math.ceil(hash.length / 2));
        const right = hash.slice(left.length);

        dehash(left); // recursion
        dehash(right); // recursion
    } else {
        if (isANumber(hash.charAt(0))){
            // clean the hash from invalid data and push them into a new array
            dehashList.push(hash);
        }
    }
    return dehashList;
}



export const inOrderCombination = (hash: string): number[] => {
    /*
        @params: taskes as input the hash in req.body
        @return: returns an array of 6 numbers

        Works with numeric string starting from the first element to the maximum possible
        Return example: [12, 30, 54, 23, 15, 26]. 26 is the Magic number
    */
    const dehashList = dehash(hash);
    const combination: number[] = [];

    for (let i = 0; i < dehashList.length; i++ ) {
        let current: string = null;
        const len = combination.length;
        if (len < 6){
            /* if there's space in the six positions */
            if (dehashList[i+1]) {
                /* merge with the next valid value randomly. Sometimes picks the figure alone 1 or 2, sometimes merge
                    it with the next one, like 12, 23
                 */
                const addNext = Math.random();  /* returns from 0 to 1 */
                if (len < 5 && addNext > 0.5 && (Number(dehashList[i] + Number(dehashList[i+1])) <= 70)) {
                    /* if there is place for normal numbers and if those numbers merged together are less or equal to 70 */
                    current = dehashList[i] + dehashList[i+1];
                    if (Number(current) !== 0 && !combination.includes(Number(current))) {
                        combination.push(Number(current));
                        i++;
                    }
                } else if (len < 6 && addNext > 0.5 && (Number(dehashList[i] + Number(dehashList[i+1])) <= 28)) {
                    /* if there's no space for normal numbers and it's magic number's turn */
                    current = dehashList[i] + dehashList[i+1];
                    if (Number(current) !== 0 && !combination.includes(Number(current))) {
                        combination.push(Number(current));
                        i++;
                    }
                } else {
                    /* if the random decided to not merge with the next one */
                    current = dehashList[i];
                }
            } else {
                /* if there's no next valid value in the array */
                current = dehashList[i];
            }

            if (Number(current) !== 0 && !combination.includes(Number(current))) {
                /* push the merged or alone value to the array only if it is not 0 or it does not exist already */
                combination.push(Number(current));
            }
        } else {
            break;
        }
    }

    return combination;
}
