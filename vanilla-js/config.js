var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoieWFzbzEyMyIsImEiOiJja2R1NnplYmwwZTZhMnVzZ2IwYnZvemhxIn0.AiKHr5cEfEMfWX76sIZ-_Q',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'What is food?',
    subtitle: 'An attempt to answer this question by mapping out some of the history of the tomato',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Nutrition, divine power',
            image: 'images/wildtomato.jpg',
            description: 'The tomato is thought to originate in southern Mexico. The word comes from the Aztec word "xitomatl." It has been cultivated there since 500 BC. In western South America, there are wild tomatoes that are the size of peas. For the Pueblo people, ingesting tomato seeds brought divination powers. ',
            location: {
                center: [-98.27206, 18.69674],
                zoom: 6.18,
                pitch: 57.00,
                bearing: -0.16
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'The first colonial encounter',
            image: 'images/Tenochtitlan.jpg',
            description: 'In 1521 the Spanish invaded the Aztec city of Tenochtitlan, now Mexico city. They brought the tomato back to Europe, where it was initially grown for decoration only, because people believed it was poisonous and would turn your blood to acid.',
            location: {
                center: [-99.02451, 19.23972],
                zoom: 7.33,
                pitch: 57.00,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'third-identifier',
            title: 'Colonialism cont.',
            image: 'images/tomato.png',
            description: 'The Spanish distributed the tomato throughout their colonies in the Caribbean and in the Philippines.',
            location: {
                center: [122.80391, 12.15010],
                zoom: 4.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            title: 'Medicine',
            image: 'images/tomato2.jpg',
            description: 'In the 1830s an American doctor claimed that tomatoes could cure diarrhea, dyspepsia and cholera. He was mocked but tomato consumption and the sale of tomato pills in the US increased',
            location: {
                center: [-89.23986, 40.81357],
                zoom: 4.31,
                pitch: 0.00,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fifth-identifier',
            title: 'Aphrodesiac',
            image: 'images/heart.jpg',
            description: 'While the tomato was initially classified as a nightshade and believed to be poisonous, it was later reclassified as a mandrake. Mandrakes are believed to be aphrodisiacs. By the late 19th century, religious zealots in the United States started campaigning against the tomato and its consumption decreased dramatically.',
            location: {
                center: [-98.61847, 40.48915],
                zoom: 3.47,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'sixth-identifier',
            title: 'From ornament to staple',
            image: 'images/colours.jpg',
            description: 'In the late 17th to early 18th century, the tomato was encorporated into Italian cuisine. The first cookbook that uses tomato as an ingredient was written in 1692.',
            location: {
                center: [14.22875, 40.92997],
                zoom: 6.52,
                pitch: 60.00,
                bearing: -15.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'seventh-identifier',
            title: 'Slavery and exploitation',
            image: 'images/migrantlabour.jpg',
            description: 'Today, most of the tomatoes grown in Italy are grown using slave labour. The Italian mafia control the migrant reception centres in the south of Italy and in Sicily. They funnel workers from these centres straight into the tomato fields. Wages and identity documents are regularly withheld, and migrants report violent abuse from their employers. For the Italian mafia migrants are now more profitable than drugs.',
            location: {
                center: [15.06962, 38.38419],
                zoom: 6.52,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'eighth-identifier',
            title: 'Global trade',
            image: 'images/sainsburys.jpg',
            description: 'Tomatoes are the most grown "vegetable" in the world. The Italian tomato industry is worth £2.8bn. Most of the tinned tomatoes that we buy in supermarkets in the UK are from Italy.',
            location: {
                center: [-2.13038, 52.28992],
                zoom: 5.84,
                pitch: 46.00,
                bearing: -12.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
