import React from "react";
import { Text, View } from "react-native";
import { Input, LargeButton } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { ProfileImage } from "../../constants/images";

const General = () => {
  function renderAvatarSettings() {
    return (
      <View
        style={{
          marginTop: 24,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ProfileImage width={48} height={48} />
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              color: COLORS.text800,
              ...FONTS.body2,
              fontWeight: "600",
              fontFamily: "Manrope",
            }}
          >
            Aakash D.
          </Text>
          <Text
            style={{
              marginTop: 6,
              color: COLORS.success,
              ...FONTS.body3,
              fontWeight: "600",
              fontFamily: "Manrope",
            }}
          >
            Upload New Photo
          </Text>
        </View>
      </View>
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: 40 }}>
        <Input
          text="Display Name"
          placeholder="Aakash D."
          style={{ marginBottom: 40 }}
        />
        <Input
          text="Old Password"
          placeholder="***************"
          style={{ marginBottom: 40 }}
        />
        <Input
          text="New Password"
          placeholder="***************"
          style={{ marginBottom: 40 }}
        />
      </View>
    );
  }

  function renderButton() {
    return (
      <LargeButton
        text="Save Settings"
        color={COLORS.success}
        textColor={COLORS.white}
        style={{
          width: 175,
          alignSelf: "center",
          position: "absolute",
          bottom: 43,
        }}
      />
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* ProfileAvatar */}
      {renderAvatarSettings()}

      {/* Form */}
      {renderForm()}

      {/* Button */}
      {renderButton()}
    </View>
  );
};

export default General;
