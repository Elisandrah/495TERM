import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, StatusBar, SectionList, SafeAreaView } from 'react-native';

const DATA = [ //This is where the week's information will be listed
/*   {
    title: "",
    data: ["",
          "",
          ""]
  }, */
  //To render a bullet point, use this Unicode: \n\u2b24
  {
    title: "Postpartum",
    data: ["No matter how your labor and delivery go, your body will need time to heal after giving birth.",
          "Common postpartum symptoms include:\n\u2b24Vaginal bleeding\n\u2b24Cramping\n\u2b24Pain in your back, neck, or joints\n\u2b24Pain in your perineum (the area between your vagina and anus)\n\u2b24Pain around your incision (if you had a cesarean birth)\n\u2b24Swollen breasts\n\u2b24Bladder problems\n\u2b24Bowel problems\n\u2b24Hemorrhoids",
          "There are many ways to control pain, including self-help treatments, over-the-counter medications, and prescription medications. Talk with your obstetrician–gynecologist (ob-gyn) about your options for pain relief before you leave the hospital.",
          "If you think you may have postpartum depression, or if your partner or family members are concerned that you do, it is important to see your obstetrician–gynecologist (ob-gyn) or other health care professional as soon as possible. Do not wait until your postpartum checkup."]
  },
  {
    title: "Cesarean section",
    data: ["While you recover, the following things may happen:\n\u2b24Mild cramping, especially if you are breastfeeding\n\u2b24Bleeding or discharge for about 4–6 weeks\n\u2b24Bleeding with clots and cramps\n\u2b24Pain in the incision",
          "To prevent infection, for a few weeks after the cesarean birth you should not place anything in your vagina or have sex. Allow time to heal before doing any strenuous activity. Call your ob-gyn or other health care professional if you have a fever, heavy bleeding, or the pain gets worse."]
  },
  {
    title: "Post-date pregnancy",
    data: ["The causes of postterm pregnancy are unknown, but there are several factors that may increase your chances of having a postterm pregnancy. These factors include the following:\n\u2b24This is your first baby.\n\u2b24You are carrying a male fetus.\n\u2b24You have had a prior postterm pregnancy.\n\u2b24You are obese.",
          "The health risks for you and your fetus may increase if a pregnancy is late term or postterm, but problems occur in only a small number of postterm pregnancies. Most women who give birth after their due dates have uncomplicated labor and give birth to healthy babies. Risks associated with postterm pregnancy include the following:\n\u2b24Stillbirth\n\u2b24Macrosomia\n\u2b24Postmaturity syndrome\n\u2b24Meconium in the lungs of the fetus, which can cause serious breathing problems after birth\n\u2b24Decreased amniotic fluid, which can cause the umbilical cord to pinch and restrict the flow of oxygen to the fetus",
          "Other risks include an increased chance of an assisted vaginal delivery or cesarean delivery. There also is a higher chance of infection and postpartum hemorrhage when your pregnancy goes past your due date.",
          "Labor induction may be recommended if your pregnancy reaches 41 weeks. Induction is started using medications or other methods. To induce labor, your cervix needs to have started softening in preparation for delivery. This is called cervical ripening. Medications or other methods may be used to start this process."]
  },
  {
    title: "Postpartum tubal ligation",
    data: ["Postpartum sterilization is sterilization performed after the birth of a baby. After a woman gives birth, the fallopian tubes and the still-enlarged uterus are located just under the abdominal wall below the navel. Postpartum sterilization ideally is done before the uterus returns to its normal location, usually within a few hours or days following delivery. For women who have had a cesarean delivery, it is done right after the baby is born.",
          "The operation takes about 30 minutes. Having it done soon after childbirth usually does not make your hospital stay any longer.",
          "In general, sterilization is a safe form of birth control. It has a low risk of death and complications. The most common complications are those that are related to general anesthesia. Other risks include bleeding and infection.",
          "If you choose to have sterilization and you change your mind after the operation, attempts to reverse it may not work. After tubal sterilization is reversed, many women still are not able to get pregnant. Also, the risk of problems, such as ectopic pregnancy, is increased.",
          "Alternatives, such as the intrauterine device or implant, last for several years. They are about as effective at preventing pregnancy as sterilization. They can be removed at any time if you want to become pregnant."]
  },
  {
    title: "Newborn screening",
    data: ["All babies must have newborn screening tests. Most babies are born healthy, but some may have health problems that are not easy to see. Screening tests can find these problems. If problems are found early, treatment can help prevent serious medical conditions or death.",
          "Before you leave the hospital, a health care professional will take a few drops of blood from your baby’s heel. The hospital will send the blood sample to a newborn screening lab. Your baby’s hearing also will be tested. Testing may be done with a small earphone, microphone, or both. Also, testing with painless skin sensors (called pulse oximetry) will measure the oxygen levels in your baby’s blood. Low blood oxygen levels can be a sign of a heart problem.",
          "The results of some tests (hearing and pulse oximetry) may be available before you leave the hospital. Blood test results will take longer. Your baby’s doctor should get the results and share them with you. In some cases, your state health department will give you the results. Ask about results when you see your baby’s doctor. Make sure that your hospital and your baby’s doctor have your correct address and phone number.",
          "Ask your baby’s doctor if you have questions or concerns. There may be other tests that you would like your baby to have besides those required in your state. For more information, contact your state health department’s newborn screening program, or visit Baby’s First Test online at www.babysfirsttest.org."]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week40 extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }
  render()
  { 
      return (
        <SafeAreaView style={styles.container}>
          <SectionList
            style={{width: '100%'}}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: "#FFF",
    padding: 10,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  blackText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left'
  }
});