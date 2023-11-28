export const makeUniqueAndLoopFunc = (obj: any, propToCompare: string | number) => {
    for (let i = 0; i < obj.data.length; i++) {
        obj.data[i].attributes.numOfOccurance = 1;
        for (let j = 0; j < i; j++) {
            if (obj.data[i].attributes[propToCompare] === obj.data[j].attributes[propToCompare]) {
                obj.data[j].attributes.numOfOccurance = obj.data[j].attributes.numOfOccurance + 1;
                obj.data.splice(i, 1);
                i = --i;
            }
        }
    }
};
