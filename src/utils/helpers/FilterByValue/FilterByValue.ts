export const FilterByValue = (array: Array<any>, arrayKey: string, value: string) => {
    const filteredMachines = array.filter(val =>
        val.arrayKey.includes(value)
    );
    return filteredMachines
}