import threeSnails from '/src/assets/skills/beginner/three-snails.png';

export const hunterSkills = [
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Bow Mastery"
        },
        "Skill Name": "Bow Mastery",
        "Master Level": 20,
        "Description": "Increases the bow mastery and accuracy. It only applies when a bow is in hand.",
        "Effect": "Level 1: +15% bow mastery, +1 accuracy\nLevel 2: +15% bow mastery, +2 accuracy\n...\nLevel 20: +60% bow mastery, +20 accuracy",
        "Type": "Passive"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Final Attack : Bow"
        },
        "Skill Name": "Final Attack : Bow",
        "Master Level": 30,
        "Description": "With a certain success rate, another attack follows after performing an attacking skill. Only works with a bow in hand.",
        "Effect": "Level 1: 2% success rate, final attack with bow damage 105%\nLevel 2: 4% success rate, final attack with bow damage 110%\n...\nLevel 30: 60% success rate, final attack with bow damage 250%",
        "Type": "Passive",
        "Pre-requisite": "Bow Mastery Lv. 3"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Bow Booster"
        },
        "Skill Name": "Bow Booster",
        "Master Level": 20,
        "Description": "Uses HP and MP to temporarily boost up the attacking speed of the bow. It only works with a bow in hand.",
        "Effect": "Level 1: HP -29, MP -29; Increase in bow attacking speed for 10 seconds\n...\nLevel 20: HP -10, MP-10; Increase in bow attacking speed for 200 seconds",
        "Type": "Supportive",
        "Pre-requisite": "Bow Mastery Lv. 5"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Power Knock-Back"
        },
        "Skill Name": "Power Knock-Back",
        "Master Level": 20,
        "Description": "Increases the success rate for pushing off the monsters when swinging a bow. As the level rises, the number of monsters that one can push off with one swing increases.",
        "Effect": "Level 1: MP -8; Knock-back +2%, damage 105%, knock-back 2 enemies\n...\nLevel 20: MP -15; Knock-back +40%, damage 200%, knock-back 6 enemies",
        "Type": "Active"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Soul Arrow : Bow"
        },
        "Skill Name": "Soul Arrow : Bow",
        "Master Level": 20,
        "Description": "Temporarily allows the character to fire bow arrows without using up the arrows. Only works with a bow in hand.",
        "Effect": "Level 1: MP -15; Attack for 30 seconds without using up an arrow\n...\nLevel 20: MP -20; Attack for 600 seconds without using up an arrow",
        "Type": "Supportive",
        "Pre-requisite": "Bow Booster Lv. 5"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Arrow Bomb"
        },
        "Skill Name": "Arrow Bomb",
        "Master Level": 30,
        "Description": "Fires arrows with bombs attached to it. If struck cleanly, the bomb explodes on the enemy, knocking out some of the enemies around with a certain success rate. Can't attack more than 6 at once, and it only works with a bow in hand.",
        "Effect": "Level 1: MP -14; Stunner 31%, damage 72%\n...\nLevel 30: MP -28; Stunner 60%, damage 150%",
        "Type": "Active"
    }
];
