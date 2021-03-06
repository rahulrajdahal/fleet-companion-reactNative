import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { AddButton, ChoiceButton, DashboardHeader } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { ArrowLeft } from "../../constants/icons";

const VehicleChecklist = ({ navigation }) => {
  const scrollX = new Animated.Value(0);

  const contents = [
    {
      _id: 1,
      item: "Wheels and Tyres",
      image: images.tyre,
    },
    {
      _id: 2,
      item: "Wheels and Tyres",
      image: images.tyre,
    },
    {
      _id: 3,
      item: "Wheels and Tyres",
      image: images.tyre,
    },
  ];

  function renderProgressBar() {
    const progress = Animated.divide(scrollX, SIZES.width);

    return (
      <>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginTop: 20,
              width: 32,
              height: 6,
              borderRadius: 10.5,
              backgroundColor: COLORS.success,
            }}
          />
          <View
            style={{
              marginTop: 20,
              width: 295,
              height: 6,
              borderTopRightRadius: 10.5,
              borderBottomRightRadius: 10.5,
              backgroundColor: COLORS.success200,
            }}
          />
        </View>

        {/* <View
          style={{
            width: 327,
            height: 6,
            backgroundColor: COLORS.success200,
            borderRadius: 10.5,
          }}
        >
          {content.map((item, index) => {
            const opacity = progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const currentProgress = progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [8, 17, 8],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={index}
                opacity={opacity}
                style={{ width: currentProgress, height: 6 }}
              />
            );
          })}
        </View> */}
      </>
    );
  }

  function renderContent() {
    function renderButtons() {
      return (
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <AddButton text="Add Remarks" image={images.chat} />
          <View style={{ width: 27 }} />
          <AddButton text="Add Photo" image={images.gallery} />
        </View>
      );
    }

    function renderImage() {
      return (
        <View
          style={{
            marginTop: 46,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={images.tyre} />
          <Text
            style={{
              marginTop: 24,
              ...FONTS.body1,
              color: COLORS.primary,
              fontFamily: "Manrope",
              fontWeight: "600",
            }}
          >
            Wheels and Tyres
          </Text>
        </View>
      );
    }

    function renderPoints() {
      const points = [
        {
          _id: 1,
          desc: "Check all tyres are adequately inflated.",
        },
        {
          _id: 2,
          desc: "Check all tyres tread depth & integrity",
        },
        {
          _id: 3,
          desc: "Check all wheels are secure",
        },
        {
          _id: 4,
          desc: "Check all rims for damage",
        },
        {
          _id: 5,
          desc: "Check triangles, jack & wheels brace are in vehicle",
        },
      ];

      return (
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          {points.map((point) => (
            <View
              key={point._id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  width: 8.33,
                  height: 8.33,
                  backgroundColor: COLORS.text300,
                  borderRadius: SIZES.borderRadius,
                  marginRight: 4.83,
                }}
              />
              <Text
                style={{
                  color: COLORS.text700,
                  ...FONTS.body3,
                  lineHeight: 20,
                  fontWeight: "normal",
                  fontFamily: "Manrope",
                }}
              >
                {point.desc}
              </Text>
            </View>
          ))}
        </View>
      );
    }

    function renderChoices() {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 73,
            marginBottom: 60,
            marginHorizontal: 26,
          }}
        >
          <ChoiceButton disagree text="Broken" />
          <ChoiceButton text="Acceptable" />
        </View>
      );
    }

    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        style={{ width: 327 }}
      >
        {contents.map((item, index) => (
          <View
            key={index}
            style={{
              width: 327,
            }}
          >
            {renderButtons()}
            {renderImage()}
            {renderPoints()}
            {renderChoices()}
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <DashboardHeader title="Vehicle Checklist" headerRight />
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Add Buttons */}
        {/* {renderButtons()} */}

        {/* Image And Image Title */}
        {/* {renderImage()} */}

        {/* Points  */}
        {/* {renderPoints()} */}

        {/* Choices */}
        {/* {renderChoices()} */}

        {renderContent()}
      </View>
    </View>
  );
};

export default VehicleChecklist;
