import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Input, Navbar, RadioButton } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";

const Incident = () => {
  const renderTitle = () => {
    return (
      <View style={{ marginTop: 36 }}>
        <Text
          style={{ color: COLORS.text800, ...FONTS.h6, fontWeight: "bold" }}
        >
          Report an Incident
        </Text>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Text style={{ color: COLORS.text400, ...FONTS.caption }}>
            Reports /
          </Text>
          <Text
            style={{ color: COLORS.text900, ...FONTS.caption, marginLeft: 2 }}
          >
            Report an Incident
          </Text>
        </View>
      </View>
    );
  };

  function renderForm() {
    return (
      <View style={{ marginTop: 40 }}>
        <Input
          text="Select a Vechile"
          placeholder="Ford Pickup '85"
          style={{ marginBottom: 40 }}
        />

        <Input
          text="Select Incident Type"
          placeholder="Near Miss"
          style={{ marginBottom: 40 }}
        />

        <Input
          text="Title"
          placeholder="Near Miss with Family SUV"
          style={{ marginBottom: 40 }}
        />

        <Input
          text="Desciption"
          placeholder="Write a description..."
          style={{ marginBottom: 40 }}
          inputStyle={{ height: 144 }}
        />

        <Input
          text="Related Person"
          placeholder="Mr. Someone Else"
          style={{ marginBottom: 40 }}
        />

        <RadioButton />
      </View>
    );
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      <Navbar />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title / SubText */}
        {renderTitle()}

        {/* Form */}
        {renderForm()}
      </ScrollView>
    </View>
  );
};

export default Incident;
