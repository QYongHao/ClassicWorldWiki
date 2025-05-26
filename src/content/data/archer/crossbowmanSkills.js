import threeSnails from '/src/assets/skills/beginner/three-snails.png';

export const crossbowmanSkills = [
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Crossbow Mastery"
        },
        "Skill Name": "Crossbow Mastery",
        "Master Level": 20,
        "Description": "Increases the crossbow mastery and accuracy. It only applies when a crossbow is in hand.",
        "Effect": "Level 1: +15% crossbow mastery, +1 accuracy\nLevel 2: +15% crossbow mastery, +2 accuracy\nLevel 3: +20% crossbow mastery, +3 accuracy\nLevel 4: +20% crossbow mastery, +4 accuracy\nLevel 5: +25% crossbow mastery, +5 accuracy\nLevel 6: +25% crossbow mastery, +6 accuracy\nLevel 7: +30% crossbow mastery, +7 accuracy\nLevel 8: +30% crossbow mastery, +8 accuracy\nLevel 9: +35% crossbow mastery, +9 accuracy\nLevel 10: +35% crossbow mastery, +10 accuracy\nLevel 11: +40% crossbow mastery, +11 accuracy\nLevel 12: +40% crossbow mastery, +12 accuracy\nLevel 13: +45% crossbow mastery, +13 accuracy\nLevel 14: +45% crossbow mastery, +14 accuracy\nLevel 15: +50% crossbow mastery, +15 accuracy\nLevel 16: +50% crossbow mastery, +16 accuracy\nLevel 17: +55% crossbow mastery, +17 accuracy\nLevel 18: +55% crossbow mastery, +18 accuracy\nLevel 19: +60% crossbow mastery, +19 accuracy\nLevel 20: +60% crossbow mastery, +20 accuracy",
        "Type": "Passive"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Final Attack: Crossbow"
        },
        "Skill Name": "Final Attack: Crossbow",
        "Master Level": 30,
        "Description": "With a certain success rate, another attack follows after performing an attacking skill. Only works with a crossbow in hand.",
        "Effect": "Level 1: 2% success rate, final attack with crossbow damage 105%\nLevel 2: 4% success rate, final attack with crossbow damage 110%\nLevel 3: 6% success rate, final attack with crossbow damage 115%\nLevel 4: 8% success rate, final attack with crossbow damage 120%\nLevel 5: 10% success rate, final attack with crossbow damage 125%\nLevel 6: 12% success rate, final attack with crossbow damage 130%\nLevel 7: 14% success rate, final attack with crossbow damage 135%\nLevel 8: 16% success rate, final attack with crossbow damage 140%\nLevel 9: 18% success rate, final attack with crossbow damage 145%\nLevel 10: 20% success rate, final attack with crossbow damage 150%\nLevel 11: 22% success rate, final attack with crossbow damage 155%\nLevel 12: 24% success rate, final attack with crossbow damage 160%\nLevel 13: 26% success rate, final attack with crossbow damage 165%\nLevel 14: 28% success rate, final attack with crossbow damage 170%\nLevel 15: 30% success rate, final attack with crossbow damage 175%\nLevel 16: 32% success rate, final attack with crossbow damage 180%\nLevel 17: 34% success rate, final attack with crossbow damage 185%\nLevel 18: 36% success rate, final attack with crossbow damage 190%\nLevel 19: 38% success rate, final attack with crossbow damage 195%\nLevel 20: 40% success rate, final attack with crossbow damage 200%\nLevel 21: 42% success rate, final attack with crossbow damage 205%\nLevel 22: 44% success rate, final attack with crossbow damage 210%\nLevel 23: 46% success rate, final attack with crossbow damage 215%\nLevel 24: 48% success rate, final attack with crossbow damage 220%\nLevel 25: 50% success rate, final attack with crossbow damage 225%\nLevel 26: 52% success rate, final attack with crossbow damage 230%\nLevel 27: 54% success rate, final attack with crossbow damage 235%\nLevel 28: 56% success rate, final attack with crossbow damage 240%\nLevel 29: 58% success rate, final attack with crossbow damage 245%\nLevel 30: 60% success rate, final attack with crossbow damage 250%",
        "Type": "Passive",
        "Prerequisite": "Crossbow Mastery Lv. 3"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Crossbow Booster"
        },
        "Skill Name": "Crossbow Booster",
        "Master Level": 20,
        "Description": "Uses HP and MP to temporarily boost up the attacking speed of the crossbow. It only works with a crossbow in hand.",
        "Effect": "Level 1: HP -29, MP -29; Increase in crossbow attacking speed for 10 seconds\nLevel 2: HP -28, MP -28; Increase in crossbow attacking speed for 20 seconds\nLevel 3: HP -27, MP -27; Increase in crossbow attacking speed for 30 seconds\nLevel 4: HP -26, MP -26; Increase in crossbow attacking speed for 40 seconds\nLevel 5: HP -25, MP -25; Increase in crossbow attacking speed for 50 seconds\nLevel 6: HP -24, MP -24; Increase in crossbow attacking speed for 60 seconds\nLevel 7: HP -23, MP -23; Increase in crossbow attacking speed for 70 seconds\nLevel 8: HP -22, MP -22; Increase in crossbow attacking speed for 80 seconds\nLevel 9: HP -21, MP -21; Increase in crossbow attacking speed for 90 seconds\nLevel 10: HP -20, MP -20; Increase in crossbow attacking speed for 100 seconds\nLevel 11: HP -19, MP -19; Increase in crossbow attacking speed for 110 seconds\nLevel 12: HP -18, MP -18; Increase in crossbow attacking speed for 120 seconds\nLevel 13: HP -17, MP -17; Increase in crossbow attacking speed for 130 seconds\nLevel 14: HP -16, MP -16; Increase in crossbow attacking speed for 140 seconds\nLevel 15: HP -15, MP -15; Increase in crossbow attacking speed for 150 seconds\nLevel 16: HP -14, MP -14; Increase in crossbow attacking speed for 160 seconds\nLevel 17: HP -13, MP -13; Increase in crossbow attacking speed for 170 seconds\nLevel 18: HP -12, MP -12; Increase in crossbow attacking speed for 180 seconds\nLevel 19: HP -11, MP -11; Increase in crossbow attacking speed for 190 seconds\nLevel 20: HP -10, MP-10; Increase in crossbow attacking speed for 200 seconds",
        "Type": "Supportive",
        "Prerequisite": "Crossbow Mastery Lv. 5"
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
        "Effect": "Level 1: MP -8; Knock-back +2%, damage 105%, knock-back 2 enemies\nLevel 2: MP -8; Knock-back +4%, damage 110%, knock-back 2 enemies\nLevel 3: MP -8; Knock-back +6%, damage 115%, knock-back 2 enemies\nLevel 4: MP -8; Knock-back +8%, damage 120%, knock-back 2 enemies\nLevel 5: MP -8; Knock-back +10%, damage 125%, knock-back 2 enemies\nLevel 6: MP -8; Knock-back +12%, damage 130%, knock-back 3 enemies\nLevel 7: MP -8; Knock-back +14%, damage 135%, knock-back 3 enemies\nLevel 8: MP -8; Knock-back +16%, damage 140%, knock-back 3 enemies\nLevel 9: MP -8; Knock-back +18%, damage 145%, knock-back 3 enemies\nLevel 10: MP -8; Knock-back +18%, damage 145%, knock-back 3 enemies\nLevel 11: MP -15; Knock-back +22%, damage 155%, knock-back 4 enemies\nLevel 12: MP -15; Knock-back +24%, damage 160%, knock-back 4 enemies\nLevel 13: MP -15; Knock-back +26%, damage 165%, knock-back 4 enemies\nLevel 14: MP -15; Knock-back +28%, damage 170%, knock-back 4 enemies\nLevel 15: MP -15; Knock-back +30%, damage 175%, knock-back 4 enemies\nLevel 16: MP -15; Knock-back +32%, damage 180%, knock-back 5 enemies\nLevel 17: MP -15; Knock-back +34%, damage 185%, knock-back 5 enemies\nLevel 18: MP -15; Knock-back +36%, damage 190%, knock-back 5 enemies\nLevel 19: MP -15; Knock-back +38%, damage 195%, knock-back 5 enemies\nLevel 20: MP -15; Knock-back +40%, damage 200%, knock-back 6 enemies",
        "Type": "Active"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Soul Arrow: Crossbow"
        },
        "Skill Name": "Soul Arrow: Crossbow",
        "Master Level": 20,
        "Description": "Temporarily allows the character to fire crossbow arrows without using up the arrows. Only works with a crossbow in hand.",
        "Effect": "Level 1: MP -15; Attack for 30 seconds without using up an arrow\nLevel 2: MP -15; Attack for 60 seconds without using up an arrow\nLevel 3: MP -15; Attack for 90 seconds without using up an arrow\nLevel 4: MP -15; Attack for 120 seconds without using up an arrow\nLevel 5: MP -15; Attack for 150 seconds without using up an arrow\nLevel 6: MP -15; Attack for 180 seconds without using up an arrow\nLevel 7: MP -15; Attack for 210 seconds without using up an arrow\nLevel 8: MP -15; Attack for 240 seconds without using up an arrow\nLevel 9: MP -15; Attack for 270 seconds without using up an arrow\nLevel 10: MP -15; Attack for 300 seconds without using up an arrow\nLevel 11: MP -20; Attack for 330 seconds without using up an arrow\nLevel 12: MP -20; Attack for 360 seconds without using up an arrow\nLevel 13: MP -20; Attack for 390 seconds without using up an arrow\nLevel 14: MP -20; Attack for 420 seconds without using up an arrow\nLevel 15: MP -20; Attack for 450 seconds without using up an arrow\nLevel 16: MP -20; Attack for 480 seconds without using up an arrow\nLevel 17: MP -20; Attack for 510 seconds without using up an arrow\nLevel 18: MP -20; Attack for 540 seconds without using up an arrow\nLevel 19: MP -20; Attack for 570 seconds without using up an arrow\nLevel 20: MP -20; Attack for 600 seconds without using up an arrow",
        "Type": "Supportive",
        "Prerequisite": "Crossbow Booster Lv. 5"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Iron Arrow"
        },
        "Skill Name": "Iron Arrow",
        "Master Level": 30,
        "Description": "Attacks up to 6 monsters at once with a powerful arrow, which penetrates through them. Damage decreases as the arrow flies through.",
        "Effect": "Level 1: MP -23; Damage 122%\nLevel 2: MP -23; Damage 125%\nLevel 3: MP -23; Damage 128%\nLevel 4: MP -23; Damage 131%\nLevel 5: MP -23; Damage 134%\nLevel 6: MP -24; Damage 137%\nLevel 7: MP -24; Damage 140%\nLevel 8: MP -24; Damage 143%\nLevel 9: MP -24; Damage 146%\nLevel 10: MP -24; Damage 149%\nLevel 11: MP -25; Damage 152%\nLevel 12: MP -25; Damage 155%\nLevel 13: MP -25; Damage 158%\nLevel 14: MP -25; Damage 160%\nLevel 15: MP -25; Damage 163%\nLevel 16: MP -26; Damage 165%\nLevel 17: MP -26; Damage 168%\nLevel 18: MP -26; Damage 170%\nLevel 19: MP -26; Damage 173%\nLevel 20: MP -26; Damage 175%\nLevel 21: MP -27; Damage 178%\nLevel 22: MP -27; Damage 180%\nLevel 23: MP -27; Damage 183%\nLevel 24: MP -27; Damage 185%\nLevel 25: MP -27; Damage 188%\nLevel 26: MP -28; Damage 190%\nLevel 27: MP -28; Damage 193%\nLevel 28: MP -28; Damage 195%\nLevel 29: MP -28; Damage 198%\nLevel 30: MP -28; Damage 200%",
        "Type": "Active"
    }
];
