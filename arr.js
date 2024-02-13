//monument,park
//timing - weekdays, weekends (6:30 AM - 11:00PM)

const arr = [
  {
    placeId: 1,
    placeName: 'Husainabad Clock Tower',
    placeCity: 'Lucknow',
    placeCateogy: 'Monument',
    placeTimings:
      'https://i.pinimg.com/736x/87/f1/69/87f16936c2db3e798bd81778ff553651.jpg',
    placeLocation: {
      latitude: 26.874032316871155,
      longitude: 80.90803425112806,
      text:
        'Husainabad Clock Tower Lucknow Address: Hussainabad Road, Husainabad, Lucknow, Uttar Pradesh, 226003, India',
    },
    placeContent: {
      content1:
        '<div><strong>Brief History</strong><p>The Hussainabad neighbourhood of Lucknow is home to the famed Hussainabad Clock Tower. To commemorate the arrival of Sir George Couper, the lieutenant governor of the North-West Province, Nawab Nasiruddiin Haider (1827&ndash;1837) built it. The construction of it cost 1.75 lakhs of rupees.It can be found close to Teele Wali Masjid, Bara Imambara, and Rumi Darwaza. Constructed in 1881, the Husainabad Clock Tower holds the title of highest clock tower in India.</p></div>',
      content2:
        '<div><strong>Architectural&nbsp;</strong><p>This 67-meter (220-foot) structure was designed by Richard Roskell Bayne and features Gothic and Victorian-style structural elements. The components of the clock are made of gunmetal. The massive 14-foot pendulum of this clock is accompanied by a 12-fully gold flower-shaped dial with bells ringing around it.</p></div>',
    },
    moreImages: [
      'https://images.pexels.com/photos/18442273/pexels-photo-18442273/free-photo-of-husainabad-clock-tower-in-lucknow-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/16630819/pexels-photo-16630819/free-photo-of-husainabad-clock-tower-in-lucknow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    entryFees: {
      indian: {
        child: 0,
        adult: 0,
      },
      foreigner: {
        child: 0,
        adult: 0,
      },
    },
    hashtag: 'uptourism',
  },
  {
    placeId: 2,
    placeName: 'Bara Imambara',
    placeCity: 'Lucknow',
    placeCateogy: 'Monument',
    placeImage:
      'https://i.pinimg.com/564x/e0/72/c3/e072c385f25f076f840179609a5c2df3.jpg',
    placeLocation: {
      latitude: 26.869512328450885,
      longitude: 80.91260842414347,
      text:
        'Near Machchhi Bhavan, Machchhi Bhavan, Lucknow, Uttar Pradesh, 226003, India',
    },
    placeContent: {
      content1:
        "<div><strong>Brief History</strong><p>The construction of this magnificent structure was started in the year 1784 by Nawab Asaf-Ud-Daula, the fourth Nawab of Awadh. It took more than 14 years to finish. Bara Imambara's remarkable history captivates the attention of all tourists visiting this fascinating location. The masterpiece results from Nawab's love and devotion for his people. When the Awadh region was severely affected by a disaster, increasing employment was the purpose of erecting this monument. A catastrophic famine that hit the Awadh Estate in the 18th century prompted the Nawab to devise a strategy to feed his starving subjects. He decided to require them to build great structures, which would then give them work and, consequently, food. #Trivia: More than 20,000 people—rich, poor, and elite—were employed by Asaf-ud-relief Daula's effort, which took 11 years to complete—exactly how long the famine lasted. The working class and poor started the project in the morning, and all of the construction was destroyed in the evening by the upper class. Every one was guaranteed to work and support themselves until conditions returned to normal in 1791.</p></div>",
      content2:
        "<div><strong>Architectural&nbsp;</strong><p>The Bara Imambara was constructed using Gothic, Rajput, and Mughal architectural elements. It was created by one of the most respected architects, Hafiz Kifayat Ullah. \n There are 9 halls inside the monument, with the largest being the central hall. Trivia: It is one of the largest arched structures in the world, measuring 50 X 16 meters and standing over 15 meters tall with no beams supporting the ceiling. Its construction is distinctive because it contains no woodwork other than what is found in the galleries. The roof is supported only by the interlocking bricks used to assemble the blocks and stands erect without any pillars.The Imamabara is made of Lakhauri bricks and is decorated with stucco work, chattris, and parapets. This Imambara is distinctive because its roof is constructed with rice husk ash. Bara Imambara is locally famous for its amazing maze, also called Bhool Bhulaiya. The topmost floor of the monument's structure is filled with an alluring maze of little tunnels that eventually leads to the rooftop.There are 1024 ways to enter the maze, but only two methods to exit it. One may have a comprehensive perspective of the city from the roof.<p></div>",
    },
    moreImages: [
      'https://i.pinimg.com/564x/e4/c0/89/e4c0895ca16033f4b599f75bf814d0c3.jpg',
      'https://i.pinimg.com/564x/ec/4d/2d/ec4d2d7235582d50a4e2eb167b3d6563.jpg',
      'https://i.pinimg.com/564x/1e/8a/98/1e8a98f75c5994ffed7614d47b6297e8.jpg',
      'https://i.pinimg.com/564x/d0/74/65/d07465fe1dbf0f82d6c878e438a26e84.jpg',
    ],
    entryFees: {
      indian: {
        child: 50,
        adult: 25,
      },
      foreigner: {
        child: 500,
        adult: 500,
      },
    },
  },
  {
    placeId: 3,
    placeName: 'Chota Imambara',
    placeCity: 'Lucknow',
    placeCateogy: 'Monument',
    placeImage:
      'https://i.pinimg.com/564x/24/db/dc/24dbdc1379f9e32a4a0ad682096a3655.jpg',
    placeLocation: {
      latitude: 26.874386977796195,
      longitude: 80.90462587996397,
      text: '447, Husainabad, Lucknow, Uttar Pradesh 226003, India',
    },
    placeContent: {
      content1:
        "<div><strong>Brief History</strong><p>The Chhota Imambara was constructed in 1838 by Muhammad Ali Shah, the third Nawab of Awadh, as a gathering place for Shia Muslims. The Imambara was intended to be both his mother's and his own mausoleum; his mother is interred next to him in this esteemed structure. The Imambara is exquisitely decked out for major occasions, particularly Muharram, with chandeliers and decorations. Because of the monument's lavish decorations during particular occasions, European tourists and authors also refer to this 19th-century structure as the 'Palace of Lights.'</p></div>",
      content2:
        "<div><strong>Architectural&nbsp;</strong><p>Architecturally, the Chota Imambara is considered to be a more magnificent wonder than its bigger counterpart, the Bara Imambara. With its baroque carvings and exquisite calligraphy, the Chota Imambara surpasses every other heritage structure in Lucknow. The magnificent structure has been inspired by the design of the Charbagh pattern, with a single stream running through the centre of the garden. It is an amalgamation of the elements of Persian and Indo-Islamic styles of architecture.\n\nInterior\nThe interiors of this artistic monument are decorated with delicate Arabic glass work and calligraphy. Ornately designed with a gilded golden dome, exquisite chandeliers specially brought from Belgium, colourful stuccos and gilt-edged mirrors, this attraction is an architectural dream which has been breathed life into.\n\nPanjetan - Five Doorways\nThe five doorways of the Chhota Imambara emphasize the significance of 'Panjetan' or the holy five. The Imambara comprises of two halls and a Shehnasheen, which is a platform where the Zarih of Imam Husain is kept. The large green and white-bordered hall of Azakhana is richly decorated with chandeliers and a good number of crystal glass lamp-stands.\n\nMausoleums\nThe monument houses the tomb of Muhammad Ali Shah as well as four graves; of the son, daughter, son in law and of the lady. This structure thus becomes a small-scale copy of the majestic Taj Mahal. The walls are adorned with Arabic calligraphy and never fail to please onlookers. The water bodies and fountains inside the Imambara get water supply from the River Gomti.\n\nHusainabad Mosque\nThe Husainabad Mosque which can also be found inside the main monument is constructed on a raised platform with two grand minarets on the edge of the platform. The mosque is decorated beautifully and intricately with floral designs and Quranic Calligraphy.<p></div>",
    },
    moreImages: [
      'https://i.pinimg.com/564x/42/f7/8e/42f78e620f831f99779f5fabedfb58c1.jpg',
      'https://i.pinimg.com/564x/90/59/cb/9059cbb1021b4d6e822ba777319bbbe8.jpg',
    ],
    entryFees: {
      indian: {
        child: 25,
        adult: 25,
      },
      foreigner: {
        child: 500,
        adult: 500,
      },
    },
  },
  {
    placeId: 4,
    placeName: 'Nawab Wajid Ali Shah Zoological Garden',
    placeCity: 'Lucknow',
    placeCateogy: 'Park',
    placeImage: 'https://www.lucknowzoo.com/images/gallary/2.png',
    placeLocation: {
      latitude: 26.845442749881567,
      longitude: 80.9517168132313,
      text:
        'Nawab Wajid Ali Shah Zoological Garden, Hazratganj Road, Opp to Civil Hospital, Lucknow, Uttar Pradesh, 226001, India',
    },
    placeContent: {
      content1:
        "<div><strong>Brief History</strong><p>On November 29, 1921, this zoological park was founded to honour the Prince of Wales' visit to Lucknow. Its founding was the brainchild of Sir Harcourt Butler, the governor at the time. Nawab Nasiruddin Haider, the Awadh Nawab at the time, founded the compound in the 18th century as a mango plantation. It was referred to as Banarasi Bagh back then. The locals still refer to it as Banarasi Bagh in colloquial English. A Baradari was constructed here in the evening by the Nawabs, in remembrance of the once-famous Awadh evening. It still stands in the centre of the zoological garden, full of grandeur and majesty.'</p></div>",
      content2:
        '<div><strong>Criminal Office in Zoological Park</strong><p>1 -  Teasing, disturbing and feeding the wildlife in any way. \n\n2 - Putting polythene/spreading garbage. \n\n3 - Bringing firearms and pets/birds. \n\n4 - Burning fire and preparing food etc.\n\n5 - Playing the tranjister and tape recorder. High voice speaking and shouting.\n\n6 - Playing games like cricket, football etc.\n\n7 - Consuming narcotics.\n\n8 - Plucking of flowers and damage to trees and orchards.\n\n9 - According to Section 38J of Wildlife Protection Act, in the Zoological Garden, violation of the above rules and imprisonment for 06 months and fine up to Rs 2000 / - and fine for 01 year for violating again and fine of Rs 5000 / - Will be done.<p></div>',
    },
    moreImages: [
      'https://www.lucknowzoo.com/images/map_new.jpg',
      'https://www.lucknowzoo.com/images/gallary/5.jpg',
      'https://www.lucknowzoo.com/images/map.png',
      'https://www.lucknowzoo.com/images/gallary/4.jpg',
    ],
    entryFees: {
      indian: {
        child: 80,
        adult: 40,
      },
      foreigner: {
        child: 80,
        adult: 40,
      },
    },
    hashtag: 'sandiegozoo',
    placeTimings: [],
  },
]

module.exports = arr
