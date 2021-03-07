import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Animated,
  Pressable,
  ScrollView,
} from "react-native";
import { AddButton, ChoiceButton, DashboardHeader } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { ArrowLeft } from "../../constants/icons";
import { useNavigation } from "@react-navigation/native";

const VehicleChecklist = () => {
  const navigation = useNavigation();

  const scrollX = new Animated.Value(0);

  const scrollViewref = React.useRef(null);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === contents.length - 1) {
      }
    });

    return () => scrollX.removeListener();
  }, []);

  const contents = [
    {
      _id: 1,
      title: "Wheels and Tyres",
      image: images.tyre,
      points: [
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
      ],
    },
    {
      _id: 2,
      title: "Light and Reflectors",
      image: images.lightBulb,
      points: [
        {
          _id: 1,
          desc: "Check all lights, including clearance lights are working",
        },
        {
          _id: 2,
          desc: "Check all reflectors & lenses are intact and clean",
        },
        {
          _id: 3,
          desc:
            "Check hazard safety lights, including amber rotating lights (if applicable)",
        },
      ],
    },
    {
      _id: 3,
      title: "Wheels and Tyres",
      image: images.sideMirror,
      points: [
        {
          _id: 1,
          desc: "Check windows & mirrors are secure, undamaged & clean",
        },
        {
          _id: 2,
          desc:
            "Check windscreen wipers & washers to endure clear forward vision",
        },
        {
          _id: 3,
          desc: "Check washer fluid",
        },
      ],
    },
    {
      _id: 4,
      title: "Structural Body & Fluid Systems",
      image: images.miniTruck,
      points: [
        {
          _id: 1,
          desc: "Check 5th wheel turntable",
        },
        {
          _id: 2,
          desc:
            "Check all panels, readily visible structural and suspension components are functional & secure",
        },
        {
          _id: 3,
          desc:
            "Check all tanks, toolboxes, other attachments & load restraint fittings are secure.",
        },
        {
          _id: 4,
          desc: "Check exhaust for leaks & discharge",
        },
      ],
    },
    {
      _id: 5,
      title: "Brake & Suspension Air Systems",
      image: images.brakes,
      points: [
        {
          _id: 1,
          desc: "Check brake failure indicators",
        },
        {
          _id: 2,
          desc: "Check pressure/vaccum gauges",
        },
        {
          _id: 3,
          desc: "Drain air tanks, note discharge",
        },
        {
          _id: 4,
          desc:
            "Check for air leaks in breaks & suspension when system is at operating pressure",
        },
      ],
    },
    {
      _id: 6,
      title: "Pre-Work Period Housekeeping",
      image: images.nurse,
      points: [
        {
          _id: 1,
          desc: "Check cabin clean & tidy",
        },
        {
          _id: 2,
          desc: "Check PPE(Personal Protective Equipment)",
        },
      ],
    },
  ];

  function renderProgressBar() {
    const currentProgress = Animated.divide(scrollX, SIZES.width);

    return (
      <>
        <View
          style={{
            width: 327,
            marginTop: 20,
            backgroundColor: COLORS.success200,
            borderRadius: 10.5,
            height: 6,
            flexDirection: "row",
          }}
        >
          {contents.map((item, index) => {
            const progress = currentProgress.interpolate({
              inputRange: [index - 1, index],
              outputRange: [0, 65.4],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={index}
                style={{
                  backgroundColor: COLORS.success,
                  width: progress,
                  height: 6,
                  borderTopRightRadius: index - 1 ? 0 : 10.5,
                  borderBottomRightRadius: index - 1 ? 0 : 10.5,
                }}
              />
            );
          })}
        </View>
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

    function renderImage(item, index) {
      return (
        <View
          key={`$img-${index}`}
          style={{
            marginTop: 46,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={item.image} />
          <Text
            style={{
              marginTop: 24,
              ...FONTS.body1,
              color: COLORS.primary,
              fontFamily: "Manrope",
              fontWeight: "600",
            }}
          >
            {item.title}
          </Text>
        </View>
      );
    }

    function renderPoints(item, index) {
      const { points } = item;

      return (
        <View style={{ width: 265, marginTop: 20, alignSelf: "center" }}>
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

    function renderChoices(item, index) {
      let node = scrollViewref.current;

      function prevPage() {
        if (index == 0) {
          return navigation.goBack();
        } else if (index == 1) {
          return node.scrollTo({ x: 0, y: 0 });
        } else if (index == 2) {
          return node.scrollTo({ x: 327, y: 0 });
        } else if (index == 3) {
          return node.scrollTo({ x: 654, y: 0 });
        } else if (index == 4) {
          return node.scrollTo({ x: 981, y: 0 });
        } else if (index == 5) {
          return node.scrollTo({ x: 1308, y: 0 });
        }
      }

      function nextPage() {
        if (index == 0) {
          return node.scrollTo({ x: 327, y: 0 });
        } else if (index == 1) {
          return node.scrollTo({ x: 654, y: 0 });
        } else if (index == 2) {
          return node.scrollTo({ x: 981, y: 0 });
        } else if (index == 3) {
          return node.scrollTo({ x: 1308, y: 0 });
        } else if (index == 4) {
          return node.scrollTo({ x: 1635, y: 0 });
        } else if (index == 5) {
          return navigation.navigate("ConfirmChecklist");
        }
      }
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
          <ChoiceButton disagree text="Broken" onPress={prevPage} />
          <ChoiceButton text="Acceptable" onPress={nextPage} />
        </View>
      );
    }

    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        style={{ width: 327 }}
        ref={scrollViewref}
      >
        {contents.map((item, index) => (
          <View
            key={index}
            style={{
              width: 327,
            }}
          >
            {renderButtons()}
            {renderImage(item, index)}
            {renderPoints(item, index)}
            {renderChoices(item, index)}
          </View>
        ))}
      </ScrollView>
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
