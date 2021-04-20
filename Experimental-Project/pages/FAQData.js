export const QuestionDetails = [
/*   {
    id: '',
    question: "",
    answer: ""
  }, */
  {
    title: "Nutrition", //This is the question category.
    data: [
      {
        id: 'Nutrition1',
        question: "Why is nutrition during pregnancy important?",
        answer: "Eating well is one of the best things you can do during pregnancy. Good nutrition helps you handle the extra demands on your body as your pregnancy progresses. The goal is to balance getting enough nutrients to support the growth of your fetus and maintaining a healthy weight."
      },
      {
        id: 'Nutrition2',
        question: "How much should I eat during pregnancy?",
        answer: "The popular saying is that pregnant women “eat for two,” but now we know that it’s dangerous to eat twice your usual amount of food during pregnancy. Instead of “eating for two,” think of it as eating twice as healthy.\n\nIf you are pregnant with one fetus, you need an extra 340 calories per day starting in the second trimester (and a bit more in the third trimester). That's roughly the calorie count of a glass of skim milk and half a sandwich. Women carrying twins should consume about 600 extra calories a day, and women carrying triplets should take in 900 extra calories a day."
      },
      {
        id: 'Nutrition3',
        question: 'Why should I take a prenatal vitamin?',
        answer: 'Vitamins and minerals play important roles in all of your body functions. Eating healthy foods and taking a prenatal vitamin every day should supply all the vitamins and minerals you need during pregnancy.'
      },
      {
        id: 'Nutrition4',
        question: 'How many prenatal vitamins should I take each day?',
        answer: 'Take only one serving of your prenatal supplement each day. Read the bottle to see how many pills make up one daily serving. If your obstetrician–gynecologist (ob-gyn) or other obstetric care provider thinks you need an extra amount of a vitamin or mineral, he or she may recommend it as a separate supplement.'
      },
      {
        id: 'Nutrition5',
        question: 'Can I take more prenatal vitamins to make up for a deficiency?',
        answer: 'No, do not take more than the recommended amount of your prenatal vitamin per day. Some multivitamin ingredients, such as vitamin A, can cause birth defects at higher doses.'
      },
      {
        id: 'Nutrition6',
        question: 'What vitamins and minerals do I need during pregnancy?',
        answer: 'During pregnancy you need folic acid, iron, calcium, vitamin D, choline, omega-3 fatty acids, B vitamins, and vitamin C. See the below table for recommended amounts.\n\n******Need table functionality? See if it can be implemented'
      },
      {
        id: 'Nutrition7',
        question: 'How can being overweight or obese cause problems during pregnancy?',
        answer: 'Excess weight during pregnancy is associated with several pregnancy and childbirth complications, including:\n\nHigh blood pressure\n\nPreeclampsia\n\nPreterm birth\n\nGestational diabetes\n\nObesity during pregnancy also increases the risk of:\n\nMacrosomia\n\nBirth injury\n\nCesarean birth\n\nBirth defects, especially neural tube defects (NTDs)'
      },
      {
        id: 'Nutrition8',
        question: 'What is folic acid?',
        answer: 'Folic acid, also known as folate, is a B vitamin that is important for pregnant women. Folic acid may help prevent major birth defects of the fetus’s brain and spine called neural tube defects (NTDs).'
      },
      {
        id: 'Nutrition9',
        question: 'How much folic acid should I take?',
        answer: 'When you are pregnant you need 600 micrograms of folic acid each day. Because it’s hard to get this much folic acid from food alone, you should take a daily prenatal vitamin with at least 400 micrograms starting at least 1 month before pregnancy and during the first 12 weeks of pregnancy.\n\nWomen who have had a child with an NTD should take 4 milligrams (mg) of folic acid each day as a separate supplement at least 3 months before pregnancy and for the first 3 months of pregnancy. You and your ob-gyn or other obstetric care provider can discuss whether you need to supplement with more than 400 micrograms daily.'
      },
      {
        id: 'Nutrition10',
        question: 'Why is iron important during pregnancy?',
        answer: 'Iron is used by your body to make the extra blood that you and your fetus need during pregnancy. Women who are not pregnant need 18 mg of iron per day. Pregnant women need more, 27 mg per day. This increased amount is found in most prenatal vitamins.'
      },
      {
        id: 'Nutrition11',
        question: 'How can I make sure I’m getting enough iron?',
        answer: 'In addition to taking a prenatal vitamin with iron, you should eat iron-rich foods such as beans, lentils, enriched breakfast cereals, beef, turkey, liver, and shrimp. You also should eat foods that help your body absorb iron, including orange juice, grapefruit, strawberries, broccoli, and peppers.'
      },
      {
        id: 'Nutrition12',
        question: 'What is calcium?',
        answer: 'Calcium is a mineral that builds your fetus’s bones and teeth. Women who are age 18 or younger need 1,300 mg of calcium per day. Women who are 19 or older need 1,000 mg per day.'
      },
      {
        id: 'Nutrition13',
        question: 'What foods contain calcium?',
        answer: 'Milk and other dairy products, such as cheese and yogurt, are the best sources of calcium. If you have trouble digesting milk products, you can get calcium from other sources, such as broccoli, fortified foods (cereals, breads, and juices), almonds and sesame seeds, sardines or anchovies with the bones, and dark green leafy vegetables. You also can get calcium from calcium supplements.'
      },
      {
        id: 'Nutrition14',
        question: 'What does vitamin D do in the body?',
        answer: 'Vitamin D works with calcium to help the fetus’s bones and teeth develop. Vitamin D also is essential for healthy skin and eyesight. All women, pregnant or not, need 600 international units of vitamin D a day.'
      },
      {
        id: 'Nutrition15',
        question: 'What foods contain vitamin D?',
        answer: 'Good sources of vitamin D include fortified milk and breakfast cereal, fatty fish (salmon and mackerel), fish liver oils, and egg yolks.'
      },
      {
        id: 'Nutrition16',
        question: 'How will I know if I’m getting enough vitamin D?',
        answer: 'Many people do not get enough vitamin D. If your ob-gyn or other obstetric care provider thinks you may have low levels of vitamin D, a test can be done to check the level in your blood. If it is below normal, you may need to take a vitamin D supplement.'
      },
      {
        id: 'Nutrition17',
        question: 'What is choline?',
        answer: 'Choline plays a role in your fetus’s brain development. It also may help prevent some common birth defects. Experts recommend that pregnant women get 450 mg of choline each day.'
      },
      {
        id: 'Nutrition18',
        question: 'What foods contain choline?',
        answer: 'Choline can be found in chicken, beef, eggs, milk, soy products, and peanuts. Although the body produces some choline on its own, it doesn’t make enough to meet all your needs while you are pregnant. It’s important to get choline from your diet because it is not found in most prenatal vitamins.'
      },
      {
        id: 'Nutrition19',
        question: 'What are omega-3 fatty acids?',
        answer: 'Omega-3 fatty acids are a type of fat found naturally in many kinds of fish. Omega-3s may be important for brain development before and after birth.'
      },
      {
        id: 'Nutrition20',
        question: 'How much fish should I eat to get the omega-3 fatty acids that I need?',
        answer: 'Women should eat at least two servings of fish or shellfish per week before getting pregnant, while pregnant, and while breastfeeding. A serving of fish is 8 to 12 ounces (oz).'
      },
      {
        id: 'Nutrition21',
        question: 'Which types of fish should I avoid?',
        answer: 'Some types of fish have higher levels of mercury than others. Mercury is a metal that has been linked to birth defects. Do not eat bigeye tuna, king mackerel, marlin, orange roughy, shark, swordfish, or tilefish. Limit white (albacore) tuna to only 6 oz a week. You also should check advisories about fish caught in local waters.'
      },
      {
        id: 'Nutrition22',
        question: 'What other foods contain omega-3 fatty acids?',
        answer: 'Flaxseed (ground or as oil) is a good source of omega-3s. Other sources of omega-3s include broccoli, cantaloupe, kidney beans, spinach, cauliflower, and walnuts.'
      },
      {
        id: 'Nutrition23',
        question: 'What are B vitamins?',
        answer: 'B vitamins, including B1, B2, B6, B9, and B12, are key nutrients during pregnancy. These vitamins:\n\nGive you energy\n\nSupply energy for your fetus’s development\n\nPromote good vision\n\nHelp build the placenta'
      },
      {
        id: 'Nutrition24',
        question: 'What can I eat to get enough B vitamins?',
        answer: 'Your prenatal vitamin should have the right amount of B vitamins that you need each day. Eating foods high in B vitamins is a good idea too, including liver, pork, chicken, bananas, beans, and whole-grain cereals and breads.'
      },
      {
        id: 'Nutrition25',
        question: 'What is vitamin C?',
        answer: 'Vitamin C is important for a healthy immune system. It also helps build strong bones and muscles. During pregnancy, you should get at least 85 mg of vitamin C each day if you are older than 19, and 80 mg if you are younger than 19.'
      },
      {
        id: 'Nutrition26',
        question: 'What foods contain vitamin C?',
        answer: 'You can get the right amount of vitamin C in your daily prenatal vitamin, and also from citrus fruits and juices, strawberries, broccoli, and tomatoes.'
      },
      {
        id: 'Nutrition27',
        question: 'How can I get enough water during pregnancy?',
        answer: 'Drink throughout the day, not just when you are thirsty. Aim for 8 to 12 cups of water a day during pregnancy.'
      },
      {
        id: 'Nutrition28',
        question: 'How can I plan healthy meals during pregnancy?',
        answer: 'There are many tools that can help you plan healthy meals. One useful tool is the MyPlate food-planning guide from the U.S. Department of Agriculture. The MyPlate website, www.choosemyplate.gov, can help you learn how to make healthy food choices at every meal.\n\nThe MyPlate website offers a MyPlate Plan, which shows how much to eat based on how many calories you need each day. The MyPlate Plan is personalized based on your:\n\nHeight\n\nPrepregnancy weight\n\nPhysical activity level\n\nThe MyPlate Plan can help you learn about choosing foods from each food group to get the vitamins and minerals you need during pregnancy. The MyPlate Plan also can help you limit calories from added sugars and saturated fats.'
      },
      {
        id: 'Nutrition29',
        question: 'What are the five food groups?',
        answer: 'Grains\n\nFruits\n\nVegetables\n\nProtein foods\n\nDairy foods'
      },
      {
        id: 'Nutrition30',
        question: 'What are grains?',
        answer: 'Bread, pasta, oatmeal, cereal, and tortillas are all grains. Whole grains are those that haven’t been processed and include the whole grain kernel. Oats, barley, quinoa, brown rice, and bulgur are all whole grains, as are products made with those grains. Look for the words “whole grain” on the product label. When you plan meals, make half of your grain servings whole grains.'
      },
      {
        id: 'Nutrition31',
        question: 'What types of fruit should I eat?',
        answer: 'You can eat fresh, canned, frozen, or dried fruit. Juice that is 100 percent fruit juice also counts in the fruit category. Make half your plate fruit and vegetables during mealtimes.'
      },
      {
        id: 'Nutrition32',
        question: 'What types of vegetables should I eat?',
        answer: 'You can eat raw, canned, frozen, or dried vegetables or drink 100 percent vegetable juice. Use dark leafy greens to make salads. Make half your plate fruit and vegetables during mealtimes.'
      },
      {
        id: 'Nutrition33',
        question: 'What are protein foods?',
        answer: 'Meat, poultry, seafood, beans and peas, eggs, processed soy products, nuts, and seeds all contain protein. Eat a variety of protein each day.'
      },
      {
        id: 'Nutrition34',
        question: 'What are dairy foods?',
        answer: 'Milk and milk products, such as cheese, yogurt, and ice cream, make up the dairy group. Make sure any dairy foods you eat are pasteurized. Choose fat-free or low-fat (1 percent) varieties.'
      },
      {
        id: 'Nutrition35',
        question: 'What part do oils and fats play in a healthy eating plan?',
        answer: 'Oils and fats are another part of healthy eating. Although they are not a food group, they do give you important nutrients. During pregnancy, the fats that you eat provide energy and help build the placenta and many fetal organs.'
      },
      {
        id: 'Nutrition36',
        question: 'What are healthy sources of oils and fats?',
        answer: 'Oils in food come mainly from plant sources, such as olive oil, nut oils, and grapeseed oil. They also can be found in certain foods, such as some fish, avocados, nuts, and olives. Most of the fats and oils in your diet should come from plant sources. Limit solid fats, such as those from animal sources. Solid fats also can be found in processed foods.'
      },
      {
        id: 'Nutrition37',
        question: 'How much weight should I gain during pregnancy?',
        answer: 'Weight gain depends on your health and your body mass index (BMI) before you were pregnant. If you were underweight before pregnancy, you should gain more weight than a woman who had a normal weight before pregnancy. If you were overweight or obese before pregnancy, you should gain less weight. The amount of weight gain differs by trimester:\n\nDuring your first 12 weeks of pregnancy—the first trimester—you might gain only 1 to 5 pounds or none at all.\n\nIf you were a healthy weight before pregnancy, you should gain a half-pound to 1 pound per week in your second and third trimesters.\n\nSee the below table for recommended weight gain during pregnancy.\n\n******Also needs table functionality'
      },
      {
        id: 'Nutrition38',
        question: 'How many extra calories should I eat?',
        answer: 'During the first trimester with one fetus, usually no extra calories are needed. In the second trimester, you will need an extra 340 calories per day, and in the third trimester, about 450 extra calories a day. To get the extra calories during the day, have healthy snacks on hand, such as nuts, yogurt, and fresh fruit.'
      },
      {
        id: 'Nutrition39',
        question: 'How can being overweight or obese cause problems during pregnancy?',
        answer: 'Excess weight during pregnancy is associated with several pregnancy and childbirth complications, including:\n\nHigh blood pressure\n\nPreeclampsia\n\nPreterm birth\n\nGestational diabetes\n\nObesity during pregnancy also increases the risk of:\n\nMacrosomia\n\nBirth injury\n\nCesarean birth\n\nBirth defects, especially NTDs'
      },
      {
        id: 'Nutrition40',
        question: 'What if I am obese or overweight?',
        answer: 'You and your ob-gyn or other obstetric care provider will work together to develop a nutrition and exercise plan. If you are gaining less than what the guidelines suggest, and if your fetus is growing well, gaining less than the recommended guidelines can have benefits. If your fetus is not growing well, changes may need to be made to your diet and exercise plan.'
      }
    ]
  },
  {
    title: "Exercise",
    data: [
      {
        id: 'Exercise1',
        question: 'Is it safe to exercise during pregnancy?',
        answer: 'If you are healthy and your pregnancy is normal, it is safe to continue or start regular physical activity. Physical activity does not increase your risk of miscarriage, low birth weight, or early delivery. However, it is important to discuss exercise with your obstetrician or other member of your health care team during your early prenatal visits. If your health care professional gives you the OK to exercise, you can discuss what activities you can do safely.'
      },
      {
        id: 'Exercise2',
        question: 'Are there certain conditions that make exercise during pregnancy unsafe?',
        answer: 'Women with the following conditions or pregnancy complications should not exercise during pregnancy:\n\nCertain types of heart and lung diseases\n\ncerclage\n\nBeing pregnant with twins or triplets (or more) with risk factors for preterm labor\n\nPlacenta previa after 26 weeks of pregnancy\n\nPreterm labor or ruptured membranes (your water has broken) during this pregnancy regular physical activity\n\nPreeclampsia or pregnancy-induced high blood pressure\n\nSevere anemia'
      },
      {
        id: 'Exercise3',
        question: 'What are the benefits of exercise during pregnancy?',
        answer: 'Regular exercise during pregnancy benefits you and your fetus in these key ways:\n\nReduces back pain\n\nEases constipation\n\nMay decrease your risk of gestational diabetes, preeclampsia, and cesarean delivery\n\nPromotes healthy weight gain during pregnancy\n\nImproves your overall general fitness and strengthens your heart and blood vessels\n\nHelps you to lose the baby weight after your baby is born'
      },
      {
        id: 'Exercise4',
        question: 'How much should I exercise during pregnancy?',
        answer: 'Ideally, pregnant women should get at least 150 minutes of moderate-intensity aerobic activity every week. An aerobic activity is one in which you move large muscles of the body (like those in the legs and arms) in a rhythmic way. Moderate intensity means you are moving enough to raise your heart rate and start sweating. You still can talk normally, but you cannot sing.\n\nExamples of moderate-intensity aerobic activity include brisk walking and general gardening (raking, weeding, or digging). You can divide the 150 minutes into 30-minute workouts on 5 days of the week or into smaller 10-minute workouts throughout each day.\n\nIf you are new to exercise, start out slowly and gradually increase your activity. Begin with as little as 5 minutes a day. Add 5 minutes each week until you can stay active for 30 minutes a day.\n\nIf you were very active before pregnancy, you can keep doing the same workouts with your obstetrician’s approval. However, if you start to lose weight, you may need to increase the number of calories that you eat.'
      },
      {
        id: 'Exercise5',
        question: 'What changes occur in the body during pregnancy that can affect my exercise routine?',
        answer: 'Your body goes through many changes during pregnancy. It is important to choose exercises that take these changes into account:\n\nJoints—The hormones made during pregnancy cause the ligaments that support your joints to become relaxed. This makes the joints more mobile and at risk of injury. Avoid jerky, bouncy, or high-impact motions that can increase your risk of being hurt.\n\nBalance—The extra weight in the front of your body shifts your center of gravity. This places stress on joints and muscles, especially those in your pelvis and lower back. Because you are less stable and more likely to lose your balance, you are at greater risk of falling.\n\nBreathing—When you exercise, oxygen and blood flow are directed to your muscles and away from other areas of your body. While you are pregnant, your need for oxygen increases. This may affect your ability to do strenuous exercise, especially if you are overweight or obese.'
      },
      {
        id: 'Exercise6',
        question: 'What precautions should I take when exercising during pregnancy?',
        answer: 'There are a few precautions that pregnant women should keep in mind during exercise:\n\nDrink plenty of water before, during, and after your workout. Signs of dehydration include dizziness, a racing or pounding heart, and urinating only small amounts or having urine that is dark yellow.\n\nWear a sports bra that gives lots of support to help protect your breasts. Later in pregnancy, a belly support belt may reduce discomfort while walking or running.\n\nAvoid becoming overheated, especially in the first trimester. Drink plenty of water, wear loose-fitting clothing, and exercise in a temperature-controlled room. Do not exercise outside when it is very hot or humid.\n\nAvoid standing still or lying flat on your back as much as possible. When you lie on your back, your uterus presses on a large vein that returns blood to the heart. Standing motionless can cause blood to pool in your legs and feet. These positions may cause your blood pressure to decrease for a short time.'
      },
      {
        id: 'Exercise7',
        question: 'What are some safe exercises that I can do during pregnancy?',
        answer: 'Experts agree these exercises are safest for pregnant women:\n\nWalking—Brisk walking gives a total body workout and is easy on the joints and muscles.\n\nSwimming and water workouts—Water workouts use many of the body’s muscles. The water supports your weight so you avoid injury and muscle strain.\n\nStationary bicycling—Because your growing belly can affect your balance and make you more prone to falls, riding a standard bicycle during pregnancy can be risky. Cycling on a stationary bike is a better choice.\n\nModified yoga and modified Pilates—Yoga reduces stress, improves flexibility, and encourages stretching and focused breathing. There are prenatal yoga and Pilates classes designed for pregnant women. These classes often teach modified poses that accommodate a pregnant woman’s shifting balance. You also should avoid poses that require you to be still or lie on your back for long periods.\n\nIf you are an experienced runner, jogger, or racquet-sports player, you may be able to keep doing these activities during pregnancy. Discuss these activities with your obstetrician or other member of your health care team.'
      },
      {
        id: 'Exercise8',
        question: 'What exercises should I avoid during pregnancy?',
        answer: 'While pregnant, avoid activities that put you at increased risk of injury, such as the following:\n\nContact sports and sports that put you at risk of getting hit in the abdomen, including ice hockey, boxing, soccer, and basketball\n\nSkydiving\n\nActivities that may result in a fall, such as downhill snow skiing, water skiing, surfing, off-road cycling, gymnastics, and horseback riding\n\n"Hot yoga” or “hot Pilates,” which may cause you to become overheated\n\nScuba diving\n\nActivities performed above 6,000 feet (if you do not already live at a high altitude)'
      },
      {
        id: 'Exercise9',
        question: 'What are warning signs that I should stop exercising?',
        answer: 'Whether you’re a seasoned athlete or a beginner, watch for the following warning signs when you exercise. If you have any of them, stop and call your obstetrician:\n\nBleeding from the vagina\n\nFeeling dizzy or faint\n\nShortness of breath before starting exercise\n\nChest pain\n\nHeadache\n\nMuscle weakness\n\nCalf pain or swelling\n\nRegular, painful contractions of the uterus\n\nFluid gushing or leaking from the vagina'
      },
      {
        id: 'Exercise10',
        question: 'Why is it important to keep exercising after my baby is born?',
        answer: 'Exercising after your baby is born may help improve mood and decrease the risk of deep vein thrombosis (DVT), a condition that can occur more frequently in women in the weeks after childbirth. In addition to these health benefits, exercise after pregnancy can help you lose the extra pounds that you may have gained during pregnancy.'
      }
    ]
  },
  {
    title: 'Coronavirus (Covid-19)',
    data: [
      {
        id: 'Coronavirus1',
        question: 'What is COVID-19?',
        answer: 'COVID-19 is a new illness that affects the lungs and breathing. It is caused by a new coronavirus. Symptoms include fever, cough, and trouble breathing. It also may cause stomach problems, such as nausea and diarrhea, and a loss of your sense of smell or taste. Symptoms may appear 2 to 14 days after you are exposed to the virus. Some people with COVID-19 may have no symptoms or only mild symptoms.'
      },
      {
        id: 'Coronavirus2',
        questions: 'How does COVID-19 affect pregnant women?',
        answer: 'Researchers are still learning how COVID-19 affects pregnant women. Current reports suggest that pregnant women have a higher risk for more severe illness from COVID-19 than nonpregnant women. Reports note that:\n\nPregnant women who have COVID-19 and show symptoms are more likely than nonpregnant women with COVID-19 and symptoms to need care in an intensive care unit (ICU), to need a ventilator (for breathing support), or to die from the illness. Still, the overall risk of severe illness and death for pregnant women is low.\n\nPregnant women with some health conditions, such as obesity and gestational diabetes, may have an even higher risk of severe illness, similar to nonpregnant women with these conditions.\n\nPregnant women who are Black or Hispanic have a higher rate of illness and death from COVID-19 than other pregnant women, but not because of biology. Black and Hispanic women are more likely to face social, health, and economic inequities that put them at greater risk of illness.'
      },
      {
        id: 'Coronavirus3',
        question: 'How can COVID-19 affect a fetus?',
        answer: 'Remember that researchers are learning more about COVID-19 all the time. Some researchers are looking specifically at COVID-19 and its possible effects on a fetus. Here’s what they know now:\n\nResearchers have found a few cases of COVID-19 that may have passed to a fetus during pregnancy, but this seems to be rare.\n\nResearchers have studied COVID-19 infection, preterm birth, and stillbirth. Some studies suggest there may be an increased risk of preterm birth and stillbirth for women with COVID-19. Other studies have not found this to be true. But information is still limited. Researchers are continuing to study these outcomes to better understand the effects of COVID-19 before birth.\n\nAfter birth, a newborn can get the virus if they are exposed to it.'
      },
      {
        id: 'Coronavirus4',
        question: 'Is it safe to get a COVID-19 vaccine during pregnancy?',
        answer: 'Pregnant women may choose to get a COVID-19 vaccine. There is a limited amount of safety data available on COVID-19 vaccines during pregnancy at this time, but what experts know so far is reassuring.\n\nThe tests done before the first vaccines were approved for emergency use did not include pregnant women. But based on how the vaccines were made and the science behind how the vaccines work in the body, experts believe they should be safe in pregnancy. The CDC and some of the COVID-19 vaccine makers are now starting or planning tests with pregnant women. And thousands of pregnant women have already chosen to receive COVID-19 vaccines. Some of them have enrolled in the CDC’s vaccination tracking program. Data from this program do not show any safety concerns.\n\nIf you are pregnant and want to know more about the vaccines, you can talk with your obstetrician–gynecologist (ob-gyn) or other health care professional. This conversation is not required to get a vaccine, though it may be helpful. You can discuss your risk of getting COVID-19 and your risk of severe illness if you get sick. A vaccine may protect you from severe illness, which could help both you and your fetus.'
      },
      {
        id: 'Coronavirus5',
        question: 'Should breastfeeding women get a COVID-19 vaccine?',
        answer: 'Yes, it is recommended that breastfeeding women get a COVID-19 vaccine. There is no need to stop breastfeeding if you want to get a vaccine. When you get vaccinated, the antibodies made by your body can be passed through breastmilk and help protect your child from the virus.'
      },
      {
        id: 'Coronavirus6',
        question: 'If I decide to get a COVID-19 vaccine, what should I expect?',
        answer: 'It is common to feel side effects after getting a COVID-19 vaccine. There are different types of COVID-19 vaccines that have varying side effects. Side effects also vary from person to person. Some vaccines may make you feel like you have the flu for a few days. This is normal.\n\nIf you have a fever or other side effects after getting the vaccine, you can take acetaminophen, an over-the-counter medication that is safe during pregnancy. If you are worried about your side effects or they last more than a few days, talk with your ob-gyn or other health care professional.'
      },
      {
        id: 'Coronavirus7',
        question: 'I have heard rumors about how the vaccines can affect my body. What is the truth?',
        answer: 'The vaccines that have been approved so far work in different ways, and all of them are proven to be safe. It is important to know that:\n\nThe vaccines cannot give you COVID-19. None of the vaccines use the live virus that causes COVID-19.\n\nThe vaccines do not affect your genes or DNA.\n\nThere is no evidence that the COVID-19 vaccines cause infertility. Vaccinations are recommended for anyone who may consider getting pregnant in the future.'
      },
      {
        id: 'Coronavirus8',
        question: 'What should pregnant women do to avoid the coronavirus?',
        answer: 'Pregnant women should take steps to stay healthy, including\n\nkeeping your prenatal care visits\n\nwearing a mask or cloth face covering in public and any other needed protection while at work\n\nlimiting contact with other people as much as possible\n\nstaying at least 6 feet away from other people and avoiding crowds if you need to go out\n\navoiding contact with other people in places that do not offer fresh air from the outdoors (open windows and doors when possible)\n\nwashing hands often with soap and water for at least 20 seconds\n\ncleaning hands with a hand sanitizer that contains at least 60 percent alcohol if you can’t wash them (rub until your hands feel dry)\n\navoiding touching your eyes, nose, and mouth\n\nhaving a good stock of essential supplies, including at least 30 days of any medications (so you don’t have to go out as often)\n\ntalking with an ob-gyn or other health care professional if you have any questions about your health or COVID-19\n\ncalling 911 or going to the hospital right away if you need emergency health care'
      },
      {
        id: 'Coronavirus9',
        question: 'Why are face coverings important?',
        answer: 'The CDC says all people, including pregnant women, should wear a cloth face covering or mask when they are in public to slow the spread of COVID-19. Face coverings are recommended because studies have shown that people can spread the virus before showing any symptoms.\n\nWearing a cloth face covering or mask is most important in places where you may not be able to stay 6 feet away from other people, like a grocery store or pharmacy. It also is important in parts of the country where COVID-19 is spreading quickly. But you should still try to stay at least 6 feet away from others whenever you leave home.\n\nIf you have COVID-19 or think you may have it, you should wear a mask while you are around other people. You also should wear a mask if you are taking care of someone who has COVID-19 or has symptoms. You do not need to wear a surgical mask or medical-grade mask (N95 mask).'
      },
      {
        id: 'Coronavirus10',
        question: 'How will COVID-19 affect prenatal and postpartum care visits?',
        answer: 'It is important to keep your prenatal and postpartum care visits. Call your ob-gyn or other health care professional to ask how your visits may be changed. Some women may have fewer or more spaced out in-person visits. You also may talk more with your health care team over the phone or through an online video call. This is called telemedicine or telehealth. It is a good way for you to get the care you need while preventing the spread of disease.\n\nIf you have a visit scheduled, your care team’s office may call you ahead of time. They may tell you about telemedicine or make sure you do not have symptoms of COVID-19 if you are going into the office. You also can call them before your visits if you do not hear from them.'
      },
      {
        id: 'Coronavirus11',
        question: 'Should I keep up with my health screenings, vaccines, and other health care while COVID-19 is spreading?',
        answer: 'Yes, it is important to continue getting the health care you need to stay healthy, even while COVID-19 is spreading. Most pregnant women who are due for screenings, tests, vaccines, or other care from any health care professionals can go ahead with these appointments, with appropriate safety measures in place at the health care office.\n\nYou should call the office before your appointment to ask what precautions they are taking, including mask and support-person policies. You also can ask if telehealth is an option for your appointment. If you have an in-person visit, it is important to wear a cloth face covering or mask, stay at least 6 feet away from other people when possible, and keep your hands clean. Talk with your ob-gyn if you have questions about how to stay safe.'
      },
      {
        id: 'Coronavirus12',
        question: 'How can I stay physically healthy right now?',
        answer: 'Pregnant women can stay healthy by following the usual recommendations during pregnancy, including\n\neating healthy meals\n\nexercising regularly, though be mindful to stay at home or away from other people while exercising\n\ngetting plenty of sleep\n\navoiding alcohol and drugs (see Tobacco, Alcohol, Drugs, and Pregnancy)'
      },
      {
        id: 'Coronavirus13',
        question: 'How can I manage stress, anxiety, and depression?',
        answer: 'Some pregnant and postpartum women may be feeling fear, uncertainty, stress, or anxiety because of COVID-19. Reaching out to friends and family during this time may help. Phone calls, texts, and online chats are safe ways to stay connected.\n\nThere also are treatment and support resources you can access over the phone or online. Talk with your ob-gyn or other health care professional about how to get help if you’re having symptoms like these:\n\nFeeling sad, hopeless, worthless, or helpless\n\nHaving fear or worry, which may cause a fast heartbeat\n\nFeeling that life is not worth living\n\nHaving repeated, scary, and unwanted thoughts that are hard to get rid of\n\nIf you are in crisis or feel like you want to harm yourself or others, call 911 right away.\n\nPhysical activity also may help your mental health. And it may be useful to focus on your breathing each day, especially if you are feeling anxious. Breathe in for 4 seconds, hold for 7 seconds, and breathe out for 8 seconds. Repeat three times.'
      },
      {
        id: 'Coronavirus14',
        question: 'Can I travel if I am pregnant?',
        answer: 'The CDC is updating travel recommendations often.\n\nOther travel recommendations may be in place globally or locally as the virus continues to spread. Check with your local or state health department for information about travel in your area.'
      },
      {
        id: 'Coronavirus15',
        question: 'What should I do if I am pregnant and think I have COVID-19?',
        answer: 'If you think you may have been exposed to the coronavirus and have a fever or cough, call your ob-gyn or other health care professional for advice.\n\nIf you have emergency warning signs, call 911 or go to the hospital right away. Emergency warning signs include the following:\n\nHaving a hard time breathing or shortness of breath (more than what has been normal for you during pregnancy)\n\nOngoing pain or pressure in the chest\n\nSudden confusion\n\nBeing unable to respond to others\n\nBlue lips or face\n\nIf you go to the hospital, try to call ahead to let them know you are coming so they can prepare. If you have other symptoms that worry you, call your ob-gyn or 911.'
      },
      {
        id: 'Coronavirus16',
        question: 'What should I do if I am pregnant and diagnosed with COVID-19?',
        answer: 'If you are diagnosed with COVID-19, follow the advice from the CDC and your ob-gyn or other health care professional. The current CDC advice for all people with COVID-19 includes the following:\n\nStay home except to get medical care. Avoid public transportation.\n\nSpeak with your health care team over the phone before going to their office. Get medical care right away if you feel worse or think it’s an emergency.\n\nSeparate yourself from other people in your home.\n\nWear a face mask when you are around other people and when you go to get medical care.'
      },
      {
        id: 'Coronavirus17',
        question: 'Should I make any changes to my labor and delivery plans?',
        answer: 'Talk with your ob-gyn or other health care professional about your birth plan. In most cases, the timing and method of delivery (vaginal birth or cesarean birth) do not need to be changed. Women who are sick probably do not need a cesarean birth.\n\nThe safest place for you to give birth is a hospital, hospital-based birth center, or accredited freestanding birth center. Your hospital or birth center may be adjusting their policies. For example, there may be changes to the number of visitors allowed and how long you will stay in the hospital. Check with your hospital and ob-gyn or other health care professional about your birth plan. Be sure to mention if you are planning to have a doula with you during childbirth.'
      },
      {
        id: 'Coronavirus18',
        question: 'How many visitors can I have during and after birth?',
        answer: 'Check with your hospital or birth center. They may limit the number of visitors to help prevent the spread of COVID-19. The number of visitors you can have may depend on local and state recommendations and how quickly COVID-19 is spreading in your area.\n\nSome hospitals and birth centers may consider doulas to be visitors. Check the hospital or birth center policy if you are planning to have a doula with you.'
      },
      {
        id: 'Coronavirus19',
        question: 'Would a home birth be safer while COVID-19 is spreading?',
        answer: 'The safest place for you to give birth is still a hospital, hospital-based birth center, or accredited freestanding birth center. COVID-19 has not changed this recommendation. Even the healthiest pregnancies can have problems arise with little or no warning during labor and delivery. If problems happen, a hospital setting can give you and your baby the best care in a hurry. Keep in mind that hospitals, hospital-based birth centers, and accredited freestanding birth centers follow strict procedures to clean and control infection.'
      },
      {
        id: 'Coronavirus20',
        question: 'What will happen during labor and delivery if I have COVID-19?',
        answer: 'While you are in the hospital or birth center, you should wear a mask if you have COVID-19. But when you are pushing during labor, wearing a mask may be difficult. For this reason, your health care team should wear masks or other protective breathing equipment. They also may take other steps to reduce the risk of spreading the virus, including wearing goggles or face shields.'
      },
      {
        id: 'Coronavirus21',
        question: 'Where will my baby stay after delivery if I have COVID-19?',
        answer: 'There are many benefits to having your baby stay in the same room as you after delivery, even if you have COVID-19. For example, rooming together may help you bond with your baby and help you start breastfeeding if desired.\n\nYou also may choose for your baby to stay separated from you, such as in the hospital nursery. But current reports suggest that the risk of a baby getting COVID-19 does not change based on whether the baby stays in the mother’s room or in a separate room. If you room together, the baby’s crib may be kept at least 6 feet away from you. Some facilities use clear plastic cribs that are enclosed and keep an even temperature.\n\nStaying in a separate room may be encouraged if you are very sick or your baby is at a high risk of getting very sick. If you choose to be separated and you plan to breastfeed, you can ask for a breast pump and use it to express (pump) milk. This will allow someone who is not sick to bottle-feed breast milk to your baby. Pumping also may help you maintain your milk supply for when you begin breastfeeding.\n\nTalk with your health care team about the options at your hospital or birth center well before your due date. Together you can discuss what you think is right for you and your baby. Be sure to talk about the best ways to\n\nreduce the risk of infection for your baby\n\nsupport the long-term health of you and your baby\n\nhelp you start breastfeeding if desired'
      },
      {
        id: 'Coronavirus22',
        question: 'Can COVID-19 pass to a baby through breast milk?',
        answer: 'Researchers are still learning if COVID-19 can pass through breast milk and cause infection in the baby. Most information shows that it is safe to feed breast milk to your baby when you have COVID-19. Remember that breast milk is the best source of nutrition for most babies. Breast milk also helps protect babies from infections, including infections of the ears, lungs, and digestive system. For these reasons, having COVID-19 should not stop you from giving your baby breast milk.\n\nIf you plan to breastfeed, talk with your ob-gyn or other health care professional. Make your wishes known so that you can begin to express milk or breastfeed before you take your baby home.'
      },
      {
        id: 'Coronavirus23',
        question: 'How can I avoid passing COVID-19 to my baby?',
        answer: 'While you are in the hospital or birth center and after you go home, you should take the following steps to avoid passing the infection to your baby:\n\nUse a face mask or covering when holding your baby, including during feeding. Do not put a mask or covering over the baby’s face.\n\nWash your hands before touching your baby.\n\nWash your hands before touching any breast pump or bottle parts and clean all pump and bottle parts after use.\n\nIf possible, let someone who is healthy help care for your newborn. They can bottle-feed your breast milk to your baby after you pump. They should wear a mask and keep their hands clean. And they should not be at risk of severe illness from COVID-19.'
      },
      {
        id: 'Coronavirus24',
        question: 'What should I do if I could be exposed to COVID-19 at work?',
        answer: 'Tell your employer if you are pregnant or if you have a health condition that may put you at higher risk. People with some health conditions, such as diabetes mellitus, lung disease, heart disease, and obesity, have a higher risk of severe illness from COVID-19.\n\nTalk with your employer about how you can stay safe while doing your job. Ask if remote work is possible. If remote work is not possible, and you work in a job with a high risk of exposure to COVID-19, ask your employer if you can switch to a role with lower exposure risk.\n\nNo matter what your job is, your employer should follow guidelines from the CDC and state and local health departments. These guidelines can help reduce the risk of infection for employees. If there is a chance you could be exposed to the virus at work, ask your employer about masks, gloves, and other equipment that can help protect you.\n\nIf you aren’t given the protection you need, tell your ob-gyn or other health care professional. Together you should talk about how you can discuss your safety with your employer.'
      },
      {
        id: 'Coronavirus25',
        question: 'What if I have other questions about my pregnancy right now?',
        answer: 'Your ob-gyn or other health care professional should continue to be your main resource for all questions about your pregnancy. For the most current information about the coronavirus and COVID-19, check CDC web pages, which are updated often.'
      }
    ]
  }
  {
    // Source: www.webmd.com/baby/guide/inducing-labor
    title: 'Labor Induction',
    data: [
      {
        id: 'Induction1',
        question: "What is labor induction?",
        answer: "Inducing labor, or induction, is the act of using drugs or a procedure to start the birth sooner, instead of waiting for labor to start naturally. Sometimes induction is the right source, but it has its risks and doesn't always work. If it doesn't, you may need another induction or a c-section. Most experts say it's bets to let labor begin on its own and progress naturally unless there is a clear medical reason."
      },
      {
        id: 'Induction2',
        question: 'Why is labor induced?',
        answer: "1 out of 4 women in the U.S. start labor with induction. Some reasons: \n\nYou're 1-2 weeks past your due date.\n\nYour water breaks but labor doesn't start, raising the risk of infection.\n\nA problem puts you or your baby's health at risk. Such problems include conditions like diabetes, high blood pressure, preeclampsia, or eclampsia.\n\nSome doctors recommend \"elective\" inductions for non-medical reasons. Maybe you live far from the hospital or maybe your doctor asks you to accommodate their schedule. Experts say you should reconsider though, because induction poses some risks."
      }
    ]
  }
];