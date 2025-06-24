import { Button, Modal } from "@renderer/components";
import { useTranslation } from "react-i18next";
import "./nimbus-cloud-modal.scss";

export interface NimbusCloudModalProps {
  visible: boolean;
  onClose: () => void;
  feature: string;
}

export const NimbusCloudModal = ({ visible, onClose, feature }: NimbusCloudModalProps) => {
  const { t } = useTranslation("nimbus_cloud");

  const handleClickOpenCheckout = () => {
    window.electron.openCheckout();
  };

  return (
    <Modal visible={visible} title={t("nimbus_cloud")} onClose={onClose}>
      <div className="nimbus-cloud-modal__container" data-nimbus-cloud-feature={feature}>
        {t("nimbus_cloud_feature_found")}
        <Button onClick={handleClickOpenCheckout}>{t("learn_more")}</Button>
      </div>
    </Modal>
  );
};
