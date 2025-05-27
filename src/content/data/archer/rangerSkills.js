import thrust from '/src/assets/skills/Thrust.png';
import mortalBlow from '/src/assets/skills/Mortal Blow.png';
import puppet from '/src/assets/skills/Puppet.png';
import inferno from '/src/assets/skills/Inferno.png';
import arrowRain from '/src/assets/skills/Arrow Rain.png';
import silverHawk from '/src/assets/skills/Silver Hawk.png';
import strafe from '/src/assets/skills/Strafe.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Thrust",
      "src": thrust
    },
    "Skill Name": "Thrust",
    "Master Level": 20,
    "Description": "Increases movement speed.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Speed +2"
      },
      {
        "Levels": 2,
        "Effect": "Speed +4"
      },
      {
        "Levels": 3,
        "Effect": "Speed +6"
      },
      {
        "Levels": 4,
        "Effect": "Speed +8"
      },
      {
        "Levels": 5,
        "Effect": "Speed +10"
      },
      {
        "Levels": 6,
        "Effect": "Speed +12"
      },
      {
        "Levels": 7,
        "Effect": "Speed +14"
      },
      {
        "Levels": 8,
        "Effect": "Speed +16"
      },
      {
        "Levels": 9,
        "Effect": "Speed +18"
      },
      {
        "Levels": 10,
        "Effect": "Speed +20"
      },
      {
        "Levels": 11,
        "Effect": "Speed +21"
      },
      {
        "Levels": 12,
        "Effect": "Speed +22"
      },
      {
        "Levels": 13,
        "Effect": "Speed +23"
      },
      {
        "Levels": 14,
        "Effect": "Speed +24"
      },
      {
        "Levels": 15,
        "Effect": "Speed +25"
      },
      {
        "Levels": 16,
        "Effect": "Speed +26"
      },
      {
        "Levels": 17,
        "Effect": "Speed +27"
      },
      {
        "Levels": 18,
        "Effect": "Speed +28"
      },
      {
        "Levels": 19,
        "Effect": "Speed +29"
      },
      {
        "Levels": 20,
        "Effect": "Speed +30"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Mortal Blow",
      "src": mortalBlow
    },
    "Skill Name": "Mortal Blow",
    "Master Level": 20,
    "Description": "Enables to shoot monsters within a very close range with a given success rate. Even kills a monster with a single shot every once in a while.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "With 33% success rate, damage 110%; Kills the monster with HP at 20% or lower at 1% success rate"
      },
      {
        "Levels": 2,
        "Effect": "With 36% success rate, damage 120%; Kills the monster with HP at 23% or lower at 1% success rate"
      },
      {
        "Levels": 3,
        "Effect": "With 39% success rate, damage 130%; Kills the monster with HP at 23% or lower at 2% success rate"
      },
      {
        "Levels": 4,
        "Effect": "With 42% success rate, damage 140%; Kills the monster with HP at 26% or lower at 2% success rate"
      },
      {
        "Levels": 5,
        "Effect": "With 45% success rate, damage 150%; Kills the monster with HP at 26% or lower at 3% success rate"
      },
      {
        "Levels": 6,
        "Effect": "With 48% success rate, damage 160%; Kills the monster with HP at 29% or lower at 3% success rate"
      },
      {
        "Levels": 7,
        "Effect": "With 51% success rate, damage 170%; Kills the monster with HP at 29% or lower at 4% success rate"
      },
      {
        "Levels": 8,
        "Effect": "With 54% success rate, damage 180%; Kills the monster with HP at 32% or lower at 4% success rate"
      },
      {
        "Levels": 9,
        "Effect": "With 57% success rate, damage 190%; Kills the monster with HP at 32% or lower at 5% success rate"
      },
      {
        "Levels": 10,
        "Effect": "With 60% success rate, damage 200%; Kills the monster with HP at 35% or lower at 5% success rate"
      },
      {
        "Levels": 11,
        "Effect": "With 63% success rate, damage 205%; Kills the monster with HP at 35% or lower at 6% success rate"
      },
      {
        "Levels": 12,
        "Effect": "With 66% success rate, damage 210%; Kills the monster with HP at 38% or lower at 6% success rate"
      },
      {
        "Levels": 13,
        "Effect": "With 69% success rate, damage 215%; Kills the monster with HP at 38% or lower at 7% success rate"
      },
      {
        "Levels": 14,
        "Effect": "With 72% success rate, damage 220%; Kills the monster with HP at 41% or lower at 7% success rate"
      },
      {
        "Levels": 15,
        "Effect": "With 75% success rate, damage 225%; Kills the monster with HP at 41% or lower at 8% success rate"
      },
      {
        "Levels": 16,
        "Effect": "With 78% success rate, damage 230%; Kills the monster with HP at 44% or lower at 8% success rate"
      },
      {
        "Levels": 17,
        "Effect": "With 81% success rate, damage 235%; Kills the monster with HP at 44% or lower at 9% success rate"
      },
      {
        "Levels": 18,
        "Effect": "With 84% success rate, damage 240%; Kills the monster with HP at 47% or lower at 9% success rate"
      },
      {
        "Levels": 19,
        "Effect": "With 87% success rate, damage 245%; Kills the monster with HP at 47% or lower at 10% success rate"
      },
      {
        "Levels": 20,
        "Effect": "With 90% success rate, damage 250%; Kills the monster with HP at 50% or lower at 10% success rate"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Puppet",
      "src": puppet
    },
    "Skill Name": "Puppet",
    "Master Level": 20,
    "Description": "Temporarily summons a puppet, which diverts the monster's attention to itself.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -23; For 5 seconds, summons a puppet with 500 HP"
      },
      {
        "Levels": 2,
        "Effect": "MP -23; For 5 seconds, summons a puppet with 600 HP"
      },
      {
        "Levels": 3,
        "Effect": "MP -23; For 10 seconds, summons a puppet with 700 HP"
      },
      {
        "Levels": 4,
        "Effect": "MP -23; For 10 seconds, summons a puppet with 800 HP"
      },
      {
        "Levels": 5,
        "Effect": "MP -23; For 10 seconds, summons a puppet with 900 HP"
      },
      {
        "Levels": 6,
        "Effect": "MP -26; For 20 seconds, summons a puppet with 1000 HP"
      },
      {
        "Levels": 7,
        "Effect": "MP -26; For 20 seconds, summons a puppet with 1200 HP"
      },
      {
        "Levels": 8,
        "Effect": "MP -26; For 20 seconds, summons a puppet with 1400 HP"
      },
      {
        "Levels": 9,
        "Effect": "MP -26; For 30 seconds, summons a puppet with 1600 HP"
      },
      {
        "Levels": 10,
        "Effect": "MP -26; For 30 seconds, summons a puppet with 1800 HP"
      },
      {
        "Levels": 11,
        "Effect": "MP -29; For 30 seconds, summons a puppet with 2000 HP"
      },
      {
        "Levels": 12,
        "Effect": "MP -29; For 40 seconds, summons a puppet with 2400 HP"
      },
      {
        "Levels": 13,
        "Effect": "MP -29; For 40 seconds, summons a puppet with 2800 HP"
      },
      {
        "Levels": 14,
        "Effect": "MP -29; For 40 seconds, summons a puppet with 3200 HP"
      },
      {
        "Levels": 15,
        "Effect": "MP -29; For 50 seconds, summons a puppet with 3600 HP"
      },
      {
        "Levels": 16,
        "Effect": "MP -32; For 50 seconds, summons a puppet with 4000 HP"
      },
      {
        "Levels": 17,
        "Effect": "MP -32; For 50 seconds, summons a puppet with 4500 HP"
      },
      {
        "Levels": 18,
        "Effect": "MP -32; For 60 seconds, summons a puppet with 5000 HP"
      },
      {
        "Levels": 19,
        "Effect": "MP -32; For 60 seconds, summons a puppet with 5500 HP"
      },
      {
        "Levels": 20,
        "Effect": "MP -32; For 60 seconds, summons a puppet with 6000 HP"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Inferno",
      "src": inferno
    },
    "Skill Name": "Inferno",
    "Master Level": 30,
    "Description": "Shoot a flaming arrow to attack up to 6 monsters at once.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -20; Damage 50%, attack range 130%"
      },
      {
        "Levels": 2,
        "Effect": "MP -20; Damage 55%, attack range 130%"
      },
      {
        "Levels": 3,
        "Effect": "MP -20; Damage 60%, attack range 130%"
      },
      {
        "Levels": 4,
        "Effect": "MP -20; Damage 65%, attack range 130%"
      },
      {
        "Levels": 5,
        "Effect": "MP -20; Damage 70%, attack range 130%"
      },
      {
        "Levels": 6,
        "Effect": "MP -20; Damage 75%, attack range 130%"
      },
      {
        "Levels": 7,
        "Effect": "MP -20; Damage 80%, attack range 130%"
      },
      {
        "Levels": 8,
        "Effect": "MP -20; Damage 85%, attack range 130%"
      },
      {
        "Levels": 9,
        "Effect": "MP -20; Damage 90%, attack range 130%"
      },
      {
        "Levels": 10,
        "Effect": "MP -20; Damage 95%, attack range 130%"
      },
      {
        "Levels": 11,
        "Effect": "MP -25; Damage 100%, attack range 130%"
      },
      {
        "Levels": 12,
        "Effect": "MP -25; Damage 103%, attack range 130%"
      },
      {
        "Levels": 13,
        "Effect": "MP -25; Damage 106%, attack range 130%"
      },
      {
        "Levels": 14,
        "Effect": "MP -25; Damage 109%, attack range 130%"
      },
      {
        "Levels": 15,
        "Effect": "MP -25; Damage 112%, attack range 130%"
      },
      {
        "Levels": 16,
        "Effect": "MP -25; Damage 115%, attack range 150%"
      },
      {
        "Levels": 17,
        "Effect": "MP -25; Damage 118%, attack range 150%"
      },
      {
        "Levels": 18,
        "Effect": "MP -25; Damage 121%, attack range 150%"
      },
      {
        "Levels": 19,
        "Effect": "MP -25; Damage 124%, attack range 150%"
      },
      {
        "Levels": 20,
        "Effect": "MP -25; Damage 127%, attack range 150%"
      },
      {
        "Levels": 21,
        "Effect": "MP -30; Damage 130%, attack range 150%"
      },
      {
        "Levels": 22,
        "Effect": "MP -30; Damage 133%, attack range 150%"
      },
      {
        "Levels": 23,
        "Effect": "MP -30; Damage 136%, attack range 150%"
      },
      {
        "Levels": 24,
        "Effect": "MP -30; Damage 139%, attack range 150%"
      },
      {
        "Levels": 25,
        "Effect": "MP -30; Damage 142%, attack range 150%"
      },
      {
        "Levels": 26,
        "Effect": "MP -30; Damage 144%, attack range 150%"
      },
      {
        "Levels": 27,
        "Effect": "MP -30; Damage 146%, attack range 150%"
      },
      {
        "Levels": 28,
        "Effect": "MP -30; Damage 148%, attack range 150%"
      },
      {
        "Levels": 29,
        "Effect": "MP -30; Damage 149%, attack range 150%"
      },
      {
        "Levels": 30,
        "Effect": "MP -30; Damage 150%, attack range 150%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Arrow Rain",
      "src": arrowRain
    },
    "Skill Name": "Arrow Rain",
    "Master Level": 30,
    "Description": "Fires a number of arrows into the sky, attacking up to 6 monsters at once on its way down.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -18; Damage 80%, attack range 180%"
      },
      {
        "Levels": 2,
        "Effect": "MP -18; Damage 85%, attack range 180%"
      },
      {
        "Levels": 3,
        "Effect": "MP -18; Damage 90%, attack range 180%"
      },
      {
        "Levels": 4,
        "Effect": "MP -18; Damage 95%, attack range 180%"
      },
      {
        "Levels": 5,
        "Effect": "MP -18; Damage 100%, attack range 180%"
      },
      {
        "Levels": 6,
        "Effect": "MP -18; Damage 105%, attack range 180%"
      },
      {
        "Levels": 7,
        "Effect": "MP -18; Damage 110%, attack range 180%"
      },
      {
        "Levels": 8,
        "Effect": "MP -18; Damage 115%, attack range 180%"
      },
      {
        "Levels": 9,
        "Effect": "MP -18; Damage 120%, attack range 180%"
      },
      {
        "Levels": 10,
        "Effect": "MP -18; Damage 125%, attack range 180%"
      },
      {
        "Levels": 11,
        "Effect": "MP -23; Damage 130%, attack range 195%"
      },
      {
        "Levels": 12,
        "Effect": "MP -23; Damage 133%, attack range 195%"
      },
      {
        "Levels": 13,
        "Effect": "MP -23; Damage 136%, attack range 195%"
      },
      {
        "Levels": 14,
        "Effect": "MP -23; Damage 139%, attack range 195%"
      },
      {
        "Levels": 15,
        "Effect": "MP -23; Damage 142%, attack range 195%"
      },
      {
        "Levels": 16,
        "Effect": "MP -23; Damage 145%, attack range 195%"
      },
      {
        "Levels": 17,
        "Effect": "MP -23; Damage 148%, attack range 195%"
      },
      {
        "Levels": 18,
        "Effect": "MP -23; Damage 151%, attack range 195%"
      },
      {
        "Levels": 19,
        "Effect": "MP -23; Damage 154%, attack range 195%"
      },
      {
        "Levels": 20,
        "Effect": "MP -23; Damage 157%, attack range 195%"
      },
      {
        "Levels": 21,
        "Effect": "MP -23; Damage 160%, attack range 210%"
      },
      {
        "Levels": 22,
        "Effect": "MP -28; Damage 163%, attack range 210%"
      },
      {
        "Levels": 23,
        "Effect": "MP -28; Damage 166%, attack range 210%"
      },
      {
        "Levels": 24,
        "Effect": "MP -28; Damage 169%, attack range 210%"
      },
      {
        "Levels": 25,
        "Effect": "MP -28; Damage 172%, attack range 210%"
      },
      {
        "Levels": 26,
        "Effect": "MP -28; Damage 174%, attack range 210%"
      },
      {
        "Levels": 27,
        "Effect": "MP -28; Damage 176%, attack range 210%"
      },
      {
        "Levels": 28,
        "Effect": "MP -28; Damage 178%, attack range 210%"
      },
      {
        "Levels": 29,
        "Effect": "MP -28; Damage 179%, attack range 210%"
      },
      {
        "Levels": 30,
        "Effect": "MP -28; Damage 180%, attack range 210%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Silver Hawk",
      "src": silverHawk
    },
    "Skill Name": "Silver Hawk",
    "Master Level": 30,
    "Description": "Summons a silver hawk. The hawk will be hovering around you, attacking monsters nearby.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -32; Use 1 Summoning Rock; Summons a hawk for 103 seconds with 23% attack and 50% chance of stunning"
      },
      {
        "Levels": 2,
        "Effect": "MP -34; Use 1 Summoning Rock; Summons a hawk for 106 seconds with 26% attack and 53% chance of stunning"
      },
      {
        "Levels": 3,
        "Effect": "MP -36; Use 1 Summoning Rock; Summons a hawk for 109 seconds with 29% attack and 56% chance of stunning"
      },
      {
        "Levels": 4,
        "Effect": "MP -38; Use 1 Summoning Rock; Summons a hawk for 112 seconds with 32% attack and 59% chance of stunning"
      },
      {
        "Levels": 5,
        "Effect": "MP -40; Use 1 Summoning Rock; Summons a hawk for 115 seconds with 35% attack and 62% chance of stunning"
      },
      {
        "Levels": 6,
        "Effect": "MP -42; Use 1 Summoning Rock; Summons a hawk for 118 seconds with 38% attack and 65% chance of stunning"
      },
      {
        "Levels": 7,
        "Effect": "MP -44; Use 1 Summoning Rock; Summons a hawk for 121 seconds with 41% attack and 68% chance of stunning"
      },
      {
        "Levels": 8,
        "Effect": "MP -46; Use 1 Summoning Rock; Summons a hawk for 124 seconds with 44% attack and 71% chance of stunning"
      },
      {
        "Levels": 9,
        "Effect": "MP -48; Use 1 Summoning Rock; Summons a hawk for 127 seconds with 47% attack and 74% chance of stunning"
      },
      {
        "Levels": 10,
        "Effect": "MP -50; Use 1 Summoning Rock; Summons a hawk for 130 seconds with 50% attack and 77% chance of stunning"
      },
      {
        "Levels": 11,
        "Effect": "MP -52; Use 1 Summoning Rock; Summons a hawk for 133 seconds with 53% attack and 80% chance of stunning"
      },
      {
        "Levels": 12,
        "Effect": "MP -54; Use 1 Summoning Rock; Summons a hawk for 136 seconds with 56% attack and 82% chance of stunning"
      },
      {
        "Levels": 13,
        "Effect": "MP -56; Use 1 Summoning Rock; Summons a hawk for 139 seconds with 59% attack and 84% chance of stunning"
      },
      {
        "Levels": 14,
        "Effect": "MP -58; Use 1 Summoning Rock; Summons a hawk for 142 seconds with 62% attack and 86% chance of stunning"
      },
      {
        "Levels": 15,
        "Effect": "MP -60; Use 1 Summoning Rock; Summons a hawk for 145 seconds with 65% attack and 88% chance of stunning"
      },
      {
        "Levels": 16,
        "Effect": "MP -62; Use 1 Summoning Rock; Summons a hawk for 148 seconds with 68% attack and 90% chance of stunning"
      },
      {
        "Levels": 17,
        "Effect": "MP -64; Use 1 Summoning Rock; Summons a hawk for 151 seconds with 71% attack and 91% chance of stunning"
      },
      {
        "Levels": 18,
        "Effect": "MP -66; Use 1 Summoning Rock; Summons a hawk for 154 seconds with 74% attack and 92% chance of stunning"
      },
      {
        "Levels": 19,
        "Effect": "MP -68; Use 1 Summoning Rock; Summons a hawk for 157 seconds with 77% attack and 93% chance of stunning"
      },
      {
        "Levels": 20,
        "Effect": "MP -70; Use 1 Summoning Rock; Summons a hawk for 160 seconds with 80% attack and 94% chance of stunning"
      },
      {
        "Levels": 21,
        "Effect": "MP -71; Use 1 Summoning Rock; Summons a hawk for 162 seconds with 82% attack and 95% chance of stunning"
      },
      {
        "Levels": 22,
        "Effect": "MP -72; Use 1 Summoning Rock; Summons a hawk for 164 seconds with 84% attack and 95% chance of stunning"
      },
      {
        "Levels": 23,
        "Effect": "MP -73; Use 1 Summoning Rock; Summons a hawk for 166 seconds with 86% attack and 96% chance of stunning"
      },
      {
        "Levels": 24,
        "Effect": "MP -74; Use 1 Summoning Rock; Summons a hawk for 168 seconds with 88% attack and 96% chance of stunning"
      },
      {
        "Levels": 25,
        "Effect": "MP -75; Use 1 Summoning Rock; Summons a hawk for 170 seconds with 90% attack and 97% chance of stunning"
      },
      {
        "Levels": 26,
        "Effect": "MP -76; Use 1 Summoning Rock; Summons a hawk for 172 seconds with 92% attack and 97% chance of stunning"
      },
      {
        "Levels": 27,
        "Effect": "MP -77; Use 1 Summoning Rock; Summons a hawk for 174 seconds with 94% attack and 98% chance of stunning"
      },
      {
        "Levels": 28,
        "Effect": "MP -78; Use 1 Summoning Rock; Summons a hawk for 176 seconds with 96% attack and 98% chance of stunning"
      },
      {
        "Levels": 29,
        "Effect": "MP -79; Use 1 Summoning Rock; Summons a hawk for 178 seconds with 98% attack and 99% chance of stunning"
      },
      {
        "Levels": 30,
        "Effect": "MP -80; Use 1 Summoning Rock; Summons a hawk for 180 seconds with 100% attack and 99% chance of stunning"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Strafe",
      "src": strafe
    },
    "Skill Name": "Strafe",
    "Master Level": 30,
    "Description": "Fires 4 arrows at an enemy.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -26; Damage 52%, attack 4 times"
      },
      {
        "Levels": 2,
        "Effect": "MP -26; Damage 54%, attack 4 times"
      },
      {
        "Levels": 3,
        "Effect": "MP -26; Damage 56%, attack 4 times"
      },
      {
        "Levels": 4,
        "Effect": "MP -26; Damage 58%, attack 4 times"
      },
      {
        "Levels": 5,
        "Effect": "MP -26; Damage 60%, attack 4 times"
      },
      {
        "Levels": 6,
        "Effect": "MP -26; Damage 62%, attack 4 times"
      },
      {
        "Levels": 7,
        "Effect": "MP -26; Damage 64%, attack 4 times"
      },
      {
        "Levels": 8,
        "Effect": "MP -26; Damage 66%, attack 4 times"
      },
      {
        "Levels": 9,
        "Effect": "MP -26; Damage 68%, attack 4 times"
      },
      {
        "Levels": 10,
        "Effect": "MP -26; Damage 70%, attack 4 times"
      },
      {
        "Levels": 11,
        "Effect": "MP -26; Damage 72%, attack 4 times"
      },
      {
        "Levels": 12,
        "Effect": "MP -26; Damage 74%, attack 4 times"
      },
      {
        "Levels": 13,
        "Effect": "MP -26; Damage 76%, attack 4 times"
      },
      {
        "Levels": 14,
        "Effect": "MP -26; Damage 78%, attack 4 times"
      },
      {
        "Levels": 15,
        "Effect": "MP -26; Damage 80%, attack 4 times"
      },
      {
        "Levels": 16,
        "Effect": "MP -32; Damage 82%, attack 4 times"
      },
      {
        "Levels": 17,
        "Effect": "MP -32; Damage 84%, attack 4 times"
      },
      {
        "Levels": 18,
        "Effect": "MP -32; Damage 86%, attack 4 times"
      },
      {
        "Levels": 19,
        "Effect": "MP -32; Damage 88%, attack 4 times"
      },
      {
        "Levels": 20,
        "Effect": "MP -32; Damage 90%, attack 4 times"
      },
      {
        "Levels": 21,
        "Effect": "MP -32; Damage 92%, attack 4 times"
      },
      {
        "Levels": 22,
        "Effect": "MP -32; Damage 94%, attack 4 times"
      },
      {
        "Levels": 23,
        "Effect": "MP -32; Damage 96%, attack 4 times"
      },
      {
        "Levels": 24,
        "Effect": "MP -32; Damage 98%, attack 4 times"
      },
      {
        "Levels": 25,
        "Effect": "MP -32; Damage 100%, attack 4 times"
      },
      {
        "Levels": 26,
        "Effect": "MP -32; Damage 102%, attack 4 times"
      },
      {
        "Levels": 27,
        "Effect": "MP -32; Damage 104%, attack 4 times"
      },
      {
        "Levels": 28,
        "Effect": "MP -32; Damage 106%, attack 4 times"
      },
      {
        "Levels": 29,
        "Effect": "MP -32; Damage 108%, attack 4 times"
      },
      {
        "Levels": 30,
        "Effect": "MP -32; Damage 110%, attack 4 times"
      }
    ],
    "Type": "Active"
  }
];