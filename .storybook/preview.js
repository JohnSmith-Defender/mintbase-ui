import "../src/styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Core', 'Components']
    }
  },
  themes: {
    clearable: false,
    list: [
      {
        name: "Light",
        class: [],
        color: "#ffffff",
        default: true,
      },
      {
        name: "Dark",
        // The class dark will be added to the body tag
        class: ["dark"],
        color: "#000000",
      },
    ],
  },
};
