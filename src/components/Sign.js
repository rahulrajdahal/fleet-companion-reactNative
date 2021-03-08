import React from "react";
import { View, Text } from "react-native";
import Signature from "react-native-signature-canvas";

const Sign = ({ text, onOK }) => {
  const ref = React.useRef();

  const handleSignature = (signature) => {
    console.log(signature);
    onOK(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  const handleEnd = () => {
    ref.current.readSignature();
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;

  return (
    <>
      <Signature
        ref={ref}
        onEnd={handleEnd}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        onClear={handleClear}
        autoClear={true}
        descriptionText={text}
        webStyle={style}
      />

      <View>
        <Text>Sign</Text>
      </View>
    </>
  );
};

export default Sign;
