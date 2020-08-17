module.exports = {
  base: "/worldcreator4noobs/",
  title: "World Creator 2",
  theme: "yuu",
  description: "Curso de WC2 pela He4rt Developers e VacaRoxa",
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: "purple",
		},
    nav: [
      { text: "Home", link: "/" },
      { text: "Tutorial", link: "/tutorial/" },
      { text: "He4rt", link: "https://twitter.com/He4rtDevs" }
    ],
    sidebar: {
      "/tutorial/": [
        "",
        "2-Superficie",
        "3-Filtros",
        "4-Texturas",
        "5-Areas",
        "6-Heightmap",
        "7-Estradas",
        "8-Montanhas",
        "9-Unity",
        "10-UE4"
      ]
    }
  }
};