// Components
import { Modal, Button } from 'antd';
import GoogleMapReact from 'google-map-react';

// Styles
import styles from './MapModal.module.scss';

export type MapModelProps = {
  title: string,
  visible: boolean,
  location: {
    lng: number,
    lat: number,
  }
  handleCancel: () => void;
}

const MarkerComponent = ({ text } : { text: string }) => <div>{text}</div>;

export default function MapModel({ title, visible, location, handleCancel } : MapModelProps) {
  return (
    <>
      <Modal
        width={1000}
        title={title} 
        open={visible} 
        onCancel={handleCancel}
        classNames={{
          header: styles['modal-header-custom'],
          footer: styles['modal-footer-custom']
        }}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>
        ]}
      >
        <div className={styles.map}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={location}
            defaultZoom={11}
          >
            <MarkerComponent
              text="My Location"
            />
          </GoogleMapReact>
        </div>
      </Modal>
    </>
  )
}