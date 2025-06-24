import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NimbusCloudFeature } from "@types";

export interface SubscriptionState {
  isNimbusCloudModalVisible: boolean;
  feature: NimbusCloudFeature | "";
}

const initialState: SubscriptionState = {
  isNimbusCloudModalVisible: false,
  feature: "",
};

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setNimbusCloudModalVisible: (
      state,
      action: PayloadAction<NimbusCloudFeature>
    ) => {
      state.isNimbusCloudModalVisible = true;
      state.feature = action.payload;
    },
    setNimbusCloudModalHidden: (state) => {
      state.isNimbusCloudModalVisible = false;
    },
  },
});

export const { setNimbusCloudModalVisible, setNimbusCloudModalHidden } =
  subscriptionSlice.actions;

export default subscriptionSlice.reducer;
