import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Input, LargeButton } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import { Logo } from "../constants/icons";

const ForgotPassword = () => {
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
        Forgot Password
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
        Please enter the email that you registered with and we will send you a
        password reset link.
      </Text>
    );
  }

  function renderInput() {
    return (
      <View style={{ marginTop: 60 }}>
        <Input
          text="Registered Email Address"
          placeholder="fleetcompliance@gmail.com"
        />
      </View>
    );
  }

  function renderButton() {
    return (
      <LargeButton
        onPress={() => console.log("Reset Code")}
        text="Send Password Reset Code"
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

export default ForgotPassword;
