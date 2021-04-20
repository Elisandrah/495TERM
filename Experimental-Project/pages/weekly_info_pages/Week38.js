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
    title: "Delivery preparation",
    data: ["Before labor begins, you can do the following:\n\u2b24Determine how far you live from the hospital and how long it will take to get there.\n\u2b24Rehearse going to the hospital to get a good sense of how long it might take to get there.\n\u2b24Consider traffic, rush hour, and possible delays on the regular route.\n\u2b24Pack for the hospital and leave your bag in a handy place, such as a hall closet or the trunk of your car.\n\u2b24Plan for who will care for your other children, your pets, and your home when you are in the hospital.\n\u2b24Make sure you have a car seat to bring home your baby, and make sure it is installed properly.\n\u2b24Talk with your supervisor about who will manage your workload while you are out."]
  },
  {
    title: "Cesarean section",
    data: ["Cesarean birth is the delivery of a baby through incisions made in the mother’s abdomen and uterus.",
          "The following situations are some of the reasons why a cesarean birth is performed:\n\u2b24Failure of labor to progress—Contractions may not open the cervix enough for the baby to move into the vagina.\n\u2b24Concern for the baby—For instance, the umbilical cord may become pinched or compressed or fetal monitoring may detect an abnormal heart rate.\n\u2b24Multiple pregnancy—If a woman is pregnant with twins, a cesarean birth may be necessary if the babies are being born too early, are not in good positions in the uterus, or if there are other problems. The likelihood of having a cesarean birth increases with the number of babies a woman is carrying.\n\u2b24Problems with the placenta\n\u2b24A very large baby\n\u2b24Breech presentation\n\u2b24Maternal infections, such as human immunodeficiency virus or herpes\n\u2b24Maternal medical conditions, such as diabetes mellitus or high blood pressure",
          "Some women may request a cesarean birth even if a vaginal delivery is an option. This decision should be weighed carefully and discussed with your doctor. As with any surgery, there are risks and complications to consider. Your hospital stay may be longer than with vaginal birth. Also, the more cesarean births a woman has, the greater her risk for some medical problems and problems with future pregnancies. This may not be a good option for women who want to have more children.",
          "A hospital stay after a cesarean birth usually is 2–4 days. The length of your stay depends on the reason for the cesarean birth and on how long it takes for your body to recover. When you go home, you may need to take special care of yourself and limit your activities."]
  },
  {
    title: "Epidural",
    data: ["An epidural block (sometimes referred to as “an epidural”) is the most common type of pain relief used for childbirth in the United States. In an epidural block, medication is given through a tube placed in the lower back. For labor and vaginal delivery, a combination of analgesics and anesthetics may be used. You will have some loss of feeling in the lower areas of your body, but you remain awake and alert. You should be able to bear down and push your baby through the birth canal. For a cesarean delivery, the dose of anesthetic may be increased. This causes loss of sensation in the lower half of your body. An epidural also can be used for postpartum sterilization."]
  },
  {
    title: "Episiotomy",
    data: ["Episiotomy is a procedure in which a small cut is made to widen the opening of the vagina when a woman is giving birth. It may be done to avoid tearing of the skin at the opening of the vagina. It also may be done to help with delivery of the baby.",
          "Talk with your ob-gyn about episiotomy at one of your prenatal care visits. The American College of Obstetricians and Gynecologists (ACOG) recommends that episiotomy be done only when it is absolutely necessary. This might include situations when the fetus is stressed and needs to be delivered more quickly, or to prevent larger tears that may happen during delivery. Ask your ob-gyn:\n\u2b24How often he or she does episiotomies\n\u2b24What type is most often done\n\u2b24What type of situations call for this procedure",
          "Together you can make a decision about your particular situation."]
  },
  {
    title: "Labor induction",
    data: ["Labor induction is the use of medications or other methods to bring on (induce) labor.",
          "Labor is induced to stimulate contractions of the uterus in an effort to have a vaginal birth. Labor induction may be recommended if the health of the mother or fetus is at risk. In special situations, labor is induced for nonmedical reasons, such as living far away from the hospital. This is called elective induction. Elective induction should not occur before 39 weeks of pregnancy.",
          "Your hospital may offer induction at 39 weeks if it has the staff and resources to do so. If your hospital offers this option, your ob-gyn or other health care professional will coordinate your care with hospital staff.",
          "With some methods, the uterus can be overstimulated, causing it to contract too frequently. Too many contractions may lead to changes in the fetal heart rate, umbilical cord problems, and other problems. Other risks of cervical ripening and labor induction include the following:\n\u2b24Infection in the mother or fetus\n\u2b24Uterine rupture\n\u2b24Increased risk of cesarean birth\n\u2b24Fetal death",
          "Medical problems that were present before pregnancy or occurred during pregnancy may contribute to these complications."]
  },
  {
    title: "Storing umbilical cord blood",
    data: ["Cord blood is the blood from the baby that is left in the umbilical cord and placenta after birth. It contains special cells called hematopoietic stem cells that can be used to treat some types of diseases.",
          "Cord blood is kept in one of two types of banks: public or private. They differ in important ways that may affect your choice.",
          "Public cord blood banks store cord blood for allogenic (another person’s) transplants. They do not charge to store cord blood. The stem cells in the donated cord blood can be used by anyone who matches. Some public banks will store cord blood for directed donation if you have a family member who has a disease that could potentially be treated with stem cells.",
          "Private or family banks store cord blood for autologous use or directed donation for a family member. Private banks charge a yearly fee for storage. Blood stored in a private bank must meet the same standards as blood stored in a public bank. If you have a family member with a disorder that may potentially be treated with stem cells, some private banks will store the cord blood free of charge.",
          "Before storing the cord blood, the following steps must usually be taken:\n\u2b24The bank must be notified and a collection kit must be obtained in advance (usually 6 weeks or more) of your due date. Some hospitals have collection kits on hand, but others do not.\n\u2b24A family medical history must be provided and the mother’s blood must be tested.\n\u2b24Consent must be given before labor begins.",
          "If you choose a private bank, you will sign a contract and pay a fee before the baby is born."]
  },
  {
    title: "Breastfeeding",
    data: ["Most healthy newborns are ready to breastfeed within the first hour after birth. Holding your baby directly against your bare skin (called \"skin-to-skin\" contact) right after birth helps encourage him or her to start breastfeeding.",
          "You also should ask about \"rooming in,\" which means having your baby stay in your room with you instead of in the hospital nursery. Having your baby nearby makes it easier to breastfeed while you are still in the hospital.",
          "Holding your baby directly against your bare skin right after birth triggers reflexes that help the baby to attach or “latch on” to your breast. Cup your breast in your hand and stroke your baby’s lower lip with your nipple. The baby will open his or her mouth wide, like a yawn. Pull the baby close to you, aiming the nipple toward the roof of the baby’s mouth. Remember to bring your baby to your breast—not your breast to your baby.",
          "Breastfeeding is a natural process, but it can take some time for you and your baby to learn. Most women are able to breastfeed. A few women cannot breastfeed because of medical conditions or other problems.",
          "Lots of breastfeeding help is available. Peer counselors, nurses, doctors, and certified lactation consultants can teach you what you need to know to get started. They also can give advice if you run into challenges."]
  },
  {
    title: "Nipple discharge",
    data: ["Benign discharge tends to occur in both breasts and only when the breast or nipple is squeezed. It is usually milky white or greenish in color. Discharge that is bloody or clear is more concerning.",
          "Discharge from the nipple is a common benign breast symptom. During pregnancy, nipple discharge is normal as the breasts get ready to produce milk. In women who are not pregnant, it can be caused by hormonal changes. Some medications can cause nipple discharge. Nipple discharge should be checked by an ob-gyn."]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week38 extends React.Component {
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