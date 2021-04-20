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
    title: "Nutrition",
    data: ["Eating well is one of the best things you can do during pregnancy. Good nutrition helps you handle the extra demands on your body as your pregnancy progresses. The goal is to balance getting enough nutrients to support the growth of your fetus and maintaining a healthy weight.",
           "During the first trimester with one fetus, usually no extra calories are needed. In the second trimester, you will need an extra 340 calories per day, and in the third trimester, about 450 extra calories a day. To get the extra calories during the day, have healthy snacks on hand, such as nuts, yogurt, and fresh fruit. Eating healthy foods and taking a prenatal vitamin every day should supply all the vitamins and minerals you need during pregnancy.",
           "You and your ob-gyn or other obstetric care provider will work together to develop a nutrition and exercise plan. If you are gaining less than what the guidelines suggest, and if your fetus is growing well, gaining less than the recommended guidelines can have benefits. If your fetus is not growing well, changes may need to be made to your diet and exercise plan."]
  },
  {
    title: "Back Pain",
    data: [ "Backache is one of the most common pregnancy problems, especially in the later months. The pain usually goes away after the baby is born. But for many women, back pain lingers for months after giving birth.",
            "Your expanding uterus shifts your center of gravity and stretches out and weakens your abdominal muscles. This changes your posture and puts a strain on your back. Plus, the extra weight you’re carrying means more work for your muscles and increased stress on your joints. This is why your back may feel worse at the end of the day.",
            "There are several things you can do to prevent or ease back pain. For example, wear supportive clothing and shoes. Pay attention to your position when sitting, sleeping, and lifting things. If you need to stand for a long time, rest one foot on a stool or a box to take the strain off your back. You also can use heat or cold to soothe sore muscles.",
            "Sleeping on your side is best later in pregnancy. Keep one or both knees bent. It also may help to place a pillow between your knees and another under your belly. You also can try a full-length body pillow.",
            "Back pain can be a sign of some pregnancy complications. For example, back pain can be a symptom of preterm labor. Pain also can be a sign of a urinary tract infection (UTI). Contact your ob-gyn or other obstetric care provider if, in addition to back pain, you:\n\u2b24Have a fever\n\u2b24Feel burning during urination\n\u2b24Have vaginal bleeding"]
  },
  {
    title: "Exercise",
    data: ["If you are healthy and your pregnancy is normal, it is safe to continue or start regular physical activity. Physical activity does not increase your risk of miscarriage, low birth weight, or early delivery. However, it is important to discuss exercise with your obstetrician or other member of your health care team during your early prenatal visits. If your health care professional gives you the OK to exercise, you can discuss what activities you can do safely.",
          "Regular exercise during pregnancy benefits you and your fetus in these key ways:\n\u2b24Reduces back pain\n\u2b24Eases constipation\n\u2b24May decrease your risk of gestational diabetes, preeclampsia, and cesarean delivery\n\u2b24Promotes healthy weight gain during pregnancy\n\u2b24Improves your overall general fitness and strengthens your heart and blood vessels\n\u2b24Helps you to lose the baby weight after your baby is born",
          "Women with the following conditions or pregnancy complications should not exercise during pregnancy:\n\u2b24Certain types of heart and lung diseases\n\u2b24cerclage\n\u2b24Being pregnant with twins or triplets (or more) with risk factors for preterm labor\n\u2b24Placenta previa after 26 weeks of pregnancy\n\u2b24Preterm labor or ruptured membranes (your water has broken) during this pregnancy regular physical activity\n\u2b24Preeclampsia or pregnancy-induced high blood pressure\n\u2b24Severe anemia",
          "Whether you’re a seasoned athlete or a beginner, watch for the following warning signs when you exercise. If you have any of them, stop and call your obstetrician:\n\u2b24Bleeding from the vagina\n\u2b24Feeling dizzy or faint\n\u2b24Shortness of breath before starting exercise\n\u2b24Chest pain\n\u2b24Headache\n\u2b24Muscle weakness\n\u2b24Calf pain or swelling\n\u2b24Regular, painful contractions of the uterus\n\u2b24Fluid gushing or leaking from the vagina"]
  },
  {
    title: "Depression",
    data: ["Depression is a common illness that can be mild or very serious. It is more than feeling sad or upset for a short time or feeling grief after a loss. Depression changes your thoughts, feelings, behavior, and physical health. It affects how you function in your daily life. It also can affect how you relate to your family, friends, and coworkers. Depression can occur at different times of life or in different situations.",
          "Depression is common during pregnancy, affecting about 1 in 10 pregnant women. Some women have depression and anxiety for the first time in their lives during pregnancy or after delivery.",
          "The signs of depression can seem like the normal ups and downs of pregnancy. A blue mood now and then is normal. But it’s important to know the signs of depression. Talk with your obstetrician–gynecologist (ob-gyn) if you have any of these signs for at least 2 weeks:\n\u2b24Depressed mood most of the day, nearly every day\n\u2b24Loss of interest in work or other activities\n\u2b24Feeling guilty, hopeless, or worthless\n\u2b24Sleeping more than normal or having trouble sleeping\n\u2b24Loss of appetite, losing weight, or eating much more than normal and gaining weight\n\u2b24Feeling very tired or without energy\n\u2b24Having trouble paying attention, concentrating, or making decisions\n\u2b24Being restless or slowed down in a way that others notice\n\u2b24Thinking about death or suicide"]
  },
  {
    title: "Opioid Use",
    data: ["Opioids are a type of medication that relieves pain. They also release chemicals in the brain that have a calming effect. Doctors may prescribe opioids for people who have had surgery, dental work, or an injury. Prescribed opioids include oxycodone, hydromorphone, hydrocodone, fentanyl, and codeine. Heroin is an illegal opioid drug. Fentanyl also can be made illegally.",
          "If you are prescribed an opioid during pregnancy, you and your health care professional should discuss the risks and benefits of this treatment. When taken under a doctor’s care, opioids can be safe for you and your fetus, but they still may cause neonatal abstinence syndrome (NAS). It is important to take the medication only as prescribed. Continue to see your obstetrician–gynecologist (ob-gyn) or other health care professional throughout pregnancy. Your health and your fetus’s health should be monitored.",
          "Opioid use disorder is a treatable disease that can be caused by frequent opioid use. It is sometimes called opioid addiction. Symptoms of opioid use disorder include:\n\u2b24Feeling a strong desire for opioids\n\u2b24Feeling unable to stop or reduce opioid use\n\u2b24Having work, school, or family problems caused by your opioid use\n\u2b24Needing more opioids to get the same effect\n\u2b24Spending a lot of time trying to find and use opioids\n\u2b24Feeling unwell after stopping or reducing use"]
  },
  {
    title: "Preterm birth and labor",
    data: ["A typical pregnancy lasts about 40 weeks. Preterm labor is labor that starts before 37 weeks of pregnancy. Going into preterm labor does not automatically mean that a woman will have a preterm birth. But preterm labor needs medical attention right away.",
          "Preterm birth is the birth of a baby before 37 weeks. Preterm babies may be born with serious health problems. Some health problems, like cerebral palsy, can be lifelong. Other problems, such as learning disabilities, may appear later in childhood or even in adulthood.",
          "Preterm labor contractions lead to changes in the cervix. The changes include effacement (thinning of the cervix) and dilation (opening of the cervix). Signs and symptoms include the following:\n\u2b24Mild abdominal cramps, with or without diarrhea\n\u2b24A change in type of vaginal discharge—watery, bloody, or with mucus\n\u2b24An increase in the amount of discharge\n\u2b24Pelvic or lower abdominal pressure\n\u2b24Constant, low, dull backache\n\u2b24Regular or frequent contractions or uterine tightening, often painless\n\u2b24Ruptured membranes (your water breaks with a gush or a trickle of fluid)",
          "If you have any signs or symptoms of preterm labor, do not wait. Call the office of your obstetrician–gynecologist (ob-gyn) right away or go to the hospital. Preterm labor is diagnosed when changes in the cervix are found after contractions start."]
  },
  {
    title: "Urinary Tract Infections",
    data: ["Urinary tract infections (UTIs) are common infections. Many women get them at some point in their lives. Some women have repeat infections and may have them often. But most UTIs are not serious. These infections can be treated with antibiotics, and symptoms usually can be relieved quickly.",
          "Most UTIs start in the lower urinary tract. Bacteria enter through the urethra and spread upward to the bladder. This can cause cystitis, a bladder infection. In some cases, an infection of the urethra called urethritis can develop at the same time.",
          "Symptoms of UTIs can come on quickly. One sign is a strong urge to urinate that cannot be delayed (urgency). As urine flows, a sharp pain or burning may be felt in the urethra. The urge to urinate then returns minutes later (frequency). There may be soreness in the lower abdomen, in the back, or in the sides.",
          "If the bacteria enter the ureters and spread to the kidneys, symptoms may include\n\u2b24back pain\n\u2b24chills\n\u2b24fever\n\u2b24nausea\n\u2b24vomiting",
          "If you have any of these symptoms, call your ob-gyn right away. Kidney infections are serious. They need to be treated promptly.",
          "Antibiotics are used to treat UTIs. The type, dose, and length of antibiotic treatment depend on the type of bacteria causing the infection and your medical history. A simple UTI rarely leads to infection of the upper urinary tract. "]
  },
  {
    title: "Travel during pregnancy",
    data: ["In most cases, pregnant women can travel safely until close to their due dates. But travel may not be recommended for women who have pregnancy complications. If you are planning a trip, talk with your obstetrician–gynecologist (ob-gyn) or other health care professional. And no matter how you choose to travel, think ahead about your comfort and safety.",
          "Before making any plans to travel while coronavirus (COVID-19) is spreading, talk with your ob-gyn or other health care professional. Together you can talk about whether your travel is essential or could be avoided. If it is essential that you travel, together you can make a plan to help you minimize risk.",
          "The best time to travel is mid-pregnancy (14 to 28 weeks). During these weeks, your energy has returned, morning sickness is improved or gone, and you are still able to get around easily. After 28 weeks, it may be harder to move around or sit for a long time.",
          "You should have a prenatal check-up before you leave. At this visit, your ob-gyn or other health care professional can confirm your due date. You also may talk about whether you are up-to-date on vaccinations and symptoms to watch for while traveling.",
          "Be aware of the following symptoms, as they could signal a health problem. Go to a hospital or call emergency medical services right away if you have any of the following:\n\u2b24Vaginal bleeding\n\u2b24Pelvic or abdominal pain or contractions\n\u2b24Rupture of the membranes (your “water breaks”)\n\u2b24Signs and symptoms of preeclampsia (headache that will not go away, seeing spots or other changes in eyesight, swelling of the face or hands)\n\u2b24Severe vomiting or diarrhea\n\u2b24Signs of deep vein thrombosis (tenderness in legs, swelling, redness, constant pain while standing or walking)"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week28_30 extends React.Component {
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