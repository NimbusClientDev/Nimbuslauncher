import { useTranslation } from "react-i18next";
import NimbusIcon from "@renderer/assets/icons/nimbus.svg?react";
import { ComparedAchievements } from "@types";
import { useUserDetails, useSubscription } from "@renderer/hooks";
import "./achievement-panel.scss";

export interface ComparedAchievementPanelProps {
  achievements: ComparedAchievements;
}

export function ComparedAchievementPanel({
  achievements,
}: ComparedAchievementPanelProps) {
  const { t } = useTranslation("achievement");
  const { hasActiveSubscription } = useUserDetails();
  const { showNimbusCloudModal } = useSubscription();

  return (
    <div
      className={`