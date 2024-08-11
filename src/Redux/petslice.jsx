import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
const petSlice = createSlice({
    name:'pet',
    initialState:{
        Favourites:[]
    },


    reducers:{
        AddtoFavourites(state, action){
            const newItems = action.payload;
            const itemIndex = state.Favourites.findIndex((items) => items.id === newItems.id);
            if(itemIndex >= 0){
                state.Favourites.splice(itemIndex, 1);
                toast.success("Pet Removed From Favourites");
            }
            else{
                state.Favourites.push({
                    id:newItems.id,
                    name:newItems.name,
                    image:newItems.image,
                    price:newItems.price,
                })
                toast.success(`${newItems.name} Added to Favourites`);
            }
        }
    }
})

export const favouritesList = (state) => state.pet.Favourites;
export const petStoreActions = petSlice.actions;
export default petSlice.reducer;