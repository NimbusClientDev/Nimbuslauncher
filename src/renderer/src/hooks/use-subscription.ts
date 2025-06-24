import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import {
  setNimbusCloudModalVisible,
  setNimbusCloudModalHidden,
} from "@features/subscription-slice";
import { NimbusCloudFeature } from "@types";

export function useSubscription() {
  const dispatch = useAppDispatch();

  const { isNimbusCloudModalVisible, feature } = useAppSelector(
    (state) => state.subscription
  );

  const showNimbusCloudModal = useCallback(
    (feature: NimbusCloudFeature) => {
      dispatch(setNimbusCloudModalVisible(feature));
    },
    [dispatch]
  );

  const hideNimbusCloudModal = useCallback(() => {
    dispatch(setNimbusCloudModalHidden());
  }, [dispatch]);

  return {
    isNimbusCloudModalVisible,
    nimbusCloudFeature: feature,
    showNimbusCloudModal,
    hideNimbusCloudModal,
  };
}
