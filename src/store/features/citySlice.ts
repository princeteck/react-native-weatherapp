import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CityData } from "../../types/city";
import { getCurrentLocation } from "../../services/locationService";

interface CityState {
  selectedCity: CityData | null;
  recentCities: CityData[];
  locationError: string | null;
  isLoadingLocation: boolean;
}

const initialState: CityState = {
  selectedCity: null,
  recentCities: [],
  locationError: null,
  isLoadingLocation: false,
};

export const fetchCurrentLocation = createAsyncThunk<
  CityData,
  void,
  { rejectValue: string }
>("city/fetchCurrentLocation", async (_, { rejectWithValue }) => {
  try {
    return await getCurrentLocation();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "An error occurred"
    );
  }
});

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<CityData>) => {
      state.selectedCity = action.payload;
      if (
        !state.recentCities.find((city) => city.name === action.payload.name)
      ) {
        state.recentCities = [action.payload, ...state.recentCities].slice(
          0,
          5
        );
      }
    },
    clearLocationError: (state) => {
      state.locationError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentLocation.pending, (state) => {
        state.isLoadingLocation = true;
        state.locationError = null;
      })
      .addCase(fetchCurrentLocation.fulfilled, (state, action) => {
        state.isLoadingLocation = false;
        state.selectedCity = action.payload;
        if (
          !state.recentCities.find((city) => city.name === action.payload.name)
        ) {
          state.recentCities = [action.payload, ...state.recentCities].slice(
            0,
            5
          );
        }
      })
      .addCase(fetchCurrentLocation.rejected, (state, action) => {
        state.isLoadingLocation = false;
        state.locationError = action.payload ?? "Failed to get location";
      });
  },
});

export const { setSelectedCity, clearLocationError } = citySlice.actions;
export default citySlice.reducer;
