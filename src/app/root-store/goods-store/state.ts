import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Good } from '../../interfaces/good';

export const goodsAdapter: EntityAdapter<Good> = createEntityAdapter<Good>({
    selectId: good => good.id,
    sortComparer: (a:Good, b:Good): number => a.item.localeCompare(b.item)
});

export interface State extends EntityState<Good> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = goodsAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);