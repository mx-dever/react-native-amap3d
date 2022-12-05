import * as React from "react";
import { MapView, Marker } from "react-native-amap3d";

export default () => (
  <MapView onCameraIdle={({nativeEvent: { cameraPosition }}) => {
    
  }} initialCameraPosition={{
    target: { latitude: 39.806901, longitude: 116.397972 }
  }}>
    <Marker
      draggable
      lockToScreen
      title="这个是标记点"
      position={{ latitude: 39.806901, longitude: 116.397972 }}
      icon={require("../images/flag.png")}
      onPress={() => alert("onPress")}
      onDragEnd={({ nativeEvent }) =>
        alert(`onDragEnd: ${nativeEvent.latitude}, ${nativeEvent.longitude}`)
      }
    />
  </MapView>
);
