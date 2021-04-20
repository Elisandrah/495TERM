# CS495 Capstone Project - TERM

## UNIT TESTS
### Unit Test 1 - MHP Fillout
**Directions**
1: Log in to App
2: Select "Plan" Tab using bottom navigator
3: Press "Fill out maternal health plan" Button
4: Enter the following values
id: Sam
provider: United
age: 23
weight: 140
weight gained: 2
blood pressure: 130/75
fundal height: 8 CM
current medication: prozac, blood thinners
urine test: nominal
fetal tones: deafening

**Result**: Should bring you to a "MHP Data" Page and display the following results
ID entered is Sam
Provider entered is United
Age entered is 23
Weight entered is 140
Weight Gained is 2
Blood Pressure entered is 130/75
Fundal Height is 8 CM
Medication entered is prozac, blood thinners
Urine Results are nominal
Fetal Tones entered are deafening

If above is not true, test case fails.

### Unit Test 2 - Login
**Directions**
1. Fill out username field arbitrarely
2. Fill out password field arbitrarely
3. Press log in button

**Result**: Should bring user to main homepage placeholder screen using the push animation

If above is not true, test case fails.

### Unit Test 3 - Weekly facts
**Directions**
1. Login to App
2. Click the info tab at bottom right
3. Select 'Weekly Information' button
4. Select 'Week 1' button

**Result**: Should bring user to a weekply information page with placeholder info on milestones, symptoms, and tips

### Unit Test 4 - FAQ Page
**Directions**
1. Login to app
2. Click the info tab at bottom right
3. Select 'FAQ' button

**Result**: Should bring user to frequently asked questions page

### Unit Test 5 - Preventing accidential logout
**Directions**
1. Login to app
2. Attempt to use personal device's back function

**Result**: User should not be brought back to the login screen, as their auth token has confirmed that this current screen is the active screen

### Unit Test 6 - Calendar Page
**Directions**
1. Login to app
2. Click the calendar tab at bottom right

**Result**: User should be brought to placeholder screen for the calendar screen

### Unit Test 6 - Contact Page
**Directions**
1. Login to app
2. Click the contact tab at bottom right

**Result**: User should be brought to placeholder screen for the contact screen

### Unit Test 7 - Searchable Symptoms Page
**Directions**
1. Login to app
2. Click the info tab at bottom right
3. Select 'Searchable Symptoms' button

**Result**: Should bring user to searchable symptoms placeholder page

### Unit Test 8 - Search for a Symptom
**Directions**
1. Login to app
2. Click info in the bottom right
3. Select 'Searchable Symptoms' button
4. Type in 'Acid'

**Result**: Should have the 'Acid Reflux' button be the only thing now available.

### Unit Test 9 - Weekly Information
**Directions**
1. Login to app
2. Click info in the bottom right
3. Select 'Weekly Information' button

**Result**: Should bring user to the Weekly information select screen.

### Unit Test 10 - Log out
**Directions**
1. Login to app
2. Swipe to right
3. Press 'Logout'

**Result**: Should bring user back to the login screen.

### Unit Test 11 - Data Reset
**Directions**
1. Login to app
2. Click 'Plan" in bottom middle
3. Click 'Fill out Maternal Health Plan'
4. Enter data in fields
5. View entered data
6. Swipe right on the app
7. Select 'Logout'
8. Repeat steps 1-3

**Result**: Fields that were previously filled out should now be empty

### Unit Test 12 - Search for a Question
**Directions**
1. Login to app
2. Click info in the bottom right
3. Select 'FAQ' button
4. Type in 'Exercise'

**Result**: Should show all the available questions regarding Exercise.

### Unit Test 13 - Weekly Information Details Page
**Directions**
1. Login to app
2. Click info in the bottom right
3. Select 'Weekly Information' button
4. Select a week such as 'Week 37'

**Result**: Should display various detailed information regarding the particular selected week.

## Group Links
Website available at https://elisandrah.github.io/495TERM/

Trello Board Page at https://trello.com/b/5knzppWR/scrum

Drive Link at https://drive.google.com/drive/folders/1xtx7OhfWYVfCsI2np2iW1EDV8qj8G5UE?usp=sharing
