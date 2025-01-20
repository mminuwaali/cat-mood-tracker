import * as media from "./media";

export const moods: Omit<HistoryType, "createdAt">[] = [
  {
    name: "angry",
    icon: media.emojiAngryImg,
    color: "rgba(249, 49, 49, 1)",
    description: "Cat wasn't having it",
  },
  {
    name: "excited",
    icon: media.emojiExcitedImg,
    color: "rgba(29, 154, 57, 1)",
    description: "Cat was super excited!",
  },
  {
    name: "indifferent",
    icon: media.emojiIndifferentImg,
    color: "rgba(255, 150, 53, 1)",
    description: "Cat was indifferent",
  },
];
