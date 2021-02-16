import React from "react";
import { View, Text } from "react-native";
import { Input, LargeButton } from "../../components";
import { COLORS, SIZES, FONTS } from "../../constants";
import { Logo } from "../../constants/icons";

const ResetPassword = ({ navigation }) => {
  function renderTitle() {
    return (
      <Text
        style={{
          marginTop: 12,
          color: COLORS.primary,
          ...FONTS.h5,
          fontWeight: "bold",
        }}
      >
        Reset Password
      </Text>
    );
  }

  function renderInfo() {
    return (
      <Text
        style={{
          color: COLORS.text500,
          ...FONTS.body3,
          marginTop: 8,
          lineHeight: 20,
          textAlign: "center",
        }}
      >
        Create a strong password that you can remember for logging in from next
        time.
      </Text>
    );
  }

  function renderInput() {
    return (
      <View style={{ marginTop: 60 }}>
        <Input text="Create New Password" placeholder="***************" />
        <Input
          text="Confirm New Password"
          placeholder="***************"
          style={{ marginTop: 40 }}
        />
      </View>
    );
  }

  function renderButton() {
    return (
      <LargeButton
        onPress={() => navigation.navigate("BottomNavTab")}
        text="Change Password"
        color={COLORS.success}
        textColor={COLORS.white}
        style={{
          marginTop: 40,
          marginBottom: 206,
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
      }}
    >
      <Logo style={{ marginTop: 167 }} />

      {renderTitle()}

      {renderInfo()}

      {renderInput()}

      {renderButton()}
    </View>
  );
};

export default ResetPassword;
