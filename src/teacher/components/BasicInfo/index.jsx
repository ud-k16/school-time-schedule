import { styles } from "./styles";
import DropDown from "@/src/common/components/DropDown";
import { Constants } from "@/src/common/constants";
import moderateScale from "@/src/utils/responsiveScale";
import { Text, TextInput, View } from "react-native";
import { useTeacherContext } from "../../context/useTeacherContext";
const BasicInfo = () => {
  const { setBasicInfo } = useTeacherContext();
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>Basic Info</Text>
      <DropDown
        style={styles.textInputStyle}
        placeHolder="Class ID"
        data={Constants.common.classIds}
        labelField="value"
        containerStyle={{ height: moderateScale(250) }}
        onChange={(value) => {
          setBasicInfo((prev) => ({ ...prev, classId: value }));
        }}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Mentor Name"
        onChangeText={(value) => {
          setBasicInfo((prev) => ({ ...prev, mentorName: value }));
        }}
      />
    </View>
  );
};
export default BasicInfo;
