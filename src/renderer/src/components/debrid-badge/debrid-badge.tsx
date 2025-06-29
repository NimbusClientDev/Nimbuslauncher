import Meteor from "@renderer/assets/meteor.svg?react";
import "./debrid-badge.scss";
import { useTranslation } from "react-i18next";

export interface DebridBadgeProps {
  collapsed?: boolean;
}

export function DebridBadge({ collapsed }: Readonly<DebridBadgeProps>) {
  const { t } = useTranslation("nimbus_cloud");

  return (
    <div className="debrid-badge">
      <Meteor />
      {!collapsed && t("debrid_description")}
    </div>
  );
}
