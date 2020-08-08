export interface State {
    quantityArray: number[];
    isLoading: boolean;
    error: any;
}

export const initialState: State = {
    quantityArray: new Array(164).fill(0),
    isLoading: false,
    error: null
}
