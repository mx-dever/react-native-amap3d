import * as React from "react";
import { MapView, Marker } from "react-native-amap3d";

const Component = () => {
  const [title, setTitle] = React.useState('...');
return (
  <MapView onCameraIdle={({nativeEvent: { cameraPosition }}) => {
    setTitle('...')
    setTimeout(() => {
      setTitle(JSON.stringify(cameraPosition.target));
    }, 2000);
  }} initialCameraPosition={{
    target: { latitude: 39.806901, longitude: 116.397972 }
  }}>
    <Marker
      draggable
      lockToScreen
      title={title}
      position={{ latitude: 39.806901, longitude: 116.397972 }}
      icon={require("../images/flag.png")}
      onPress={() => alert("onPress")}
      onDragEnd={({ nativeEvent }) =>
        alert(`onDragEnd: ${nativeEvent.latitude}, ${nativeEvent.longitude}`)
      }
    />
  </MapView>
);
}

export default Component;