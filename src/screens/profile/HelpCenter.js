import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Accordion, Navbar } from "../../components";
import { COLORS, FONTS } from "../../constants";

const HelpCenter = () => {
  function renderTitle() {
    return (
      <View>
        <Text
          style={{
            color: COLORS.text800,
            ...FONTS.h6,
            fontWeight: "bold",
            marginTop: 43,
          }}
        >
          Help Center
        </Text>
      </View>
    );
  }

  function renderAccordions() {
    const accordions = [
      {
        _id: 1,
        title: "What are my rights as a driver?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        _id: 2,
        title: "What is fault reporting?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        _id: 3,
        title: "Who can see my personal data?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        _id: 4,
        title: "Where is my data stored?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        _id: 5,
        title: "Which party is reponsible in case of any type of incident?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        _id: 6,
        title: "Can I use my personal pickup truck?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        _id: 7,
        title: "Can I cancel a work before it begins?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        _id: 8,
        title: "How do I transfer my work in case of an emergency?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ];

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 21 }}
      >
        {accordions.map((accordion) => (
          <Accordion
            key={accordion._id}
            title={accordion.title}
            body={accordion.body}
          />
        ))}
      </ScrollView>
    );
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={{ paddingHorizontal: 24 }}>
          <Navbar />

          {/* Title */}
          {renderTitle()}
        </View>

        {/* Accordions */}
        {renderAccordions()}
      </View>
    </>
  );
};

export default HelpCenter;
