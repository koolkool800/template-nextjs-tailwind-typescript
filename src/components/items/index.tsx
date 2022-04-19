import React from "react"
import { Pagination } from "../pagination"
import { ListStars } from "../stars"
import {
  Img,
  ItemContainer,
  Span1,
  Span2,
  Span3,
  Title,
  Wrapper,
} from "./style"

const ListItems: {
  image: string
  title: string
  soldby: string
  stars: number
  price: number
  original: string
  certi: string
  minOrder: number
}[] = [
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277887985_556064015783691_742371900506952319_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=xSQuyBZaeMUAX-8ANQG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK9Er5rdDSQAfY_ElTIHG7xhoZPTD2jsxiTPM8F0HLDzg&oe=627C265F",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 4,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277924209_301673368709356_8895631516112618996_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_ohc=IRz3Jzwa1gYAX_2vROP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIxmvO8ZRZg0E56tj-8ECqrl2WrjCKi9NR7quIFtQkrvw&oe=627F2AB3",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 4,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277544583_728382534855016_5762291746593142445_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=K6TybljYkc8AX8TFw6y&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ8Pd9ciHr3IJuRIMdYsRk3FSrZFVSLiw6ggMl1SXuXIg&oe=627D0334",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277695263_1147073879461319_1574398769159614183_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=ZC3Qmn5SPNwAX-YX5zy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLZ44RZAhzi1e--UZeTscE9sVP-2kJFgBkNliu1YVYAAw&oe=627E8649",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 4,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278080223_1444983309293709_5825935816379602107_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=HHrpsoDlaF4AX9snHHg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLB2X-n4Y4yAuApd7Mc8KdoWKW6m-TbOJGRYvRa4JBqzw&oe=627B869C",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278155644_1389880888150304_2506902079421399138_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=5pEhTfso4ZMAX_-Ton_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKG9SqZJgrQgd-49WsnRyJvzahOgdGS7SHDIx78A5l5ww&oe=627ED8C4",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277365044_1198920647580444_3905242794527941995_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=UeD1n7xW8pYAX_WjEGU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLVO4uT2tu__dFF1sVKIoTXwD56rd8QW7MMLPn7irWQew&oe=627CCDE1",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 4,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278343811_813480486709423_2756503948608913793_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=jXhB1c0O70QAX9IEfi5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVINAHt8QVP6gX8rglXomySlZhZjo5RX4SJIiZg31R2tdA&oe=627D6BB3",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278013893_655931935510865_1134952763448619199_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=kX31Og24sAkAX8NDjvv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJx5NLPl0JBq6D2sfx71hfd_l_cRDPrya2XrhwgWa4LCw&oe=627F0CBF",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 3,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278114583_1124295771747576_9198876893389649305_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=GhWNfLlbskIAX9XOpNS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJZOA5Nt8Tbmw6Ur8zU2bsomgMrJiG-89MQioqPYopn0w&oe=627D6355",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277821503_1103026913587942_4396767660449419685_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=K5M_lp5wWpoAX_6pJ3C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ8qQV5fRDAuFW3jT8YpSspmHGEsg8NfZjvAZNiMUolaA&oe=627C366B",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277418517_573505284167562_2551059408709505869_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=OadIb9Lf_ScAX_-7wGu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ1G3LUu4PF_5ZFQIWltFG4HOpT4xZEFepV29kuAugiHQ&oe=627F292C",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277357340_367886398578768_559973017877613764_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=ZYdSA7gdXX4AX_g_879&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKLoxv6li-GGChyyN_jwkDs8nbPxPA1j6h9rXGVIupxFg&oe=627C454F",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 3,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278081365_1151573098993484_6763896955779045592_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=jyJ08M15W-cAX-HLNFa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIkKS1CVl94A6NUertIIyOigWyaQY0LCgYJKzM17ceEzA&oe=627D2DEB",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 2,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277613635_980968549455562_6940388291875080572_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=KtlOoe26zs4AX9bYQ0L&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJsfj5cX620wwr4L34N52nLuFawaSHw3xqCKCrvr5eHmw&oe=627EC07F",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278003843_359462142630759_764527810410994120_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=ApxapZwyH0IAX-AhHga&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIa5GWO5dGHo2e16zEhbmymTuckZpgARLjxTFFbRdzS9g&oe=627CA35F",

    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277993776_1349057178923579_235871463407070067_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=3TnC1CmuQI8AX8BlsE1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIAZmaAsCOX-ECqSaGUnfiQYWC1munv5--2AF9TvJLFUg&oe=627E17E5",
    soldby: "Sold by: Marshall",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    stars: 1,
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277463329_507867314140365_6110743603452936081_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=YqDC69wsfnYAX8lAOxQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJtnssQ5TE0VfioVd53NEsFTBx5p2bNGClhJOTs-vCF1w&oe=627E91C5",
    soldby: "Sold by: Marshall",
    stars: 5,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277926869_522165779556963_2069576979616844039_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=iAHjBejT_pkAX-qeTJu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIF-GYAyM6rXDKwR1k7Ma1lpI7zhzR5flsJrlTeDrSg9g&oe=627D32FF",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277690913_397379305263455_2144190602750168506_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=gSRtOydET-kAX-LM1xz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLUWpHuPOAUMdZaqM1kXy-NERB82GImSn82WQiL_TtR3A&oe=627CCED2",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278013893_655931935510865_1134952763448619199_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=kX31Og24sAkAX8NDjvv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJx5NLPl0JBq6D2sfx71hfd_l_cRDPrya2XrhwgWa4LCw&oe=627F0CBF",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278114583_1124295771747576_9198876893389649305_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=GhWNfLlbskIAX9XOpNS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJZOA5Nt8Tbmw6Ur8zU2bsomgMrJiG-89MQioqPYopn0w&oe=627D6355",
    soldby: "Sold by: Marshall",
    stars: 5,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    price: 142,
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277946469_3193106997645221_7271724178803318603_n.png?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Y6GC9yKyJicAX_2PGhF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLBkMGOx95fWFEpchEGMJp6H0s_lbFBdYhaF_OWJKm6pg&oe=627EB256",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    original: "Made in Sold by: Marshall",
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    certi: "USDA certification",
    minOrder: 10000,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277822650_229911066000532_7092260631769372016_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_aid=3590&_nc_ohc=lMNVI1y0d2kAX_No4QF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJLe_b7qYnFoxrQSx06fypHdkaHqGe0osGl8YpLBP9XKA&oe=627F0605",
    soldby: "Sold by: Marshall",
    stars: 5,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    original: "Made in Sold by: Marshall",
    certi: "USDA certification",
    minOrder: 10000,
  },
]

export interface ISlideITrems {
  image: string
  title: string
  stars: number
  price: number
}
export const ListProducts: ISlideITrems[] = [
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278024510_293838149436482_8920704052692929462_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0paHjnj-3-YAX-po8gq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJRJiwMejHeXRWDFFsVYAcVha_ZusslYDZ53WPk31sZhg&oe=627D7348",
    stars: 4,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277686190_1061561981063474_6038199603535621069_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=eJrwVz_N5e4AX_LnDYD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKcqGR5G4QnWssMPSpsPjoXweSiktNjrickzbiMT6cfCg&oe=627C8B40",
    stars: 5,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277962506_1599387353766522_9212137907601091298_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=2aEOLWUjIdQAX-Bz9wc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ_MdMcpcFb0WaStaQ4ohCmCA4qIRI89SCAIrwNRsCD1Q&oe=627EE26F",
    stars: 5,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277428493_1419568621836189_248675262902704119_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_ohc=iX5S2UxN53IAX89v0Av&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIzuKcct49-TIee2OZtI9dQZMIobzkXbjA6YFCcm_kODg&oe=627EECB8",
    stars: 3,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278429110_991910458117499_704100563664393214_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WiGfWssa4kUAX9hEOrS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK0EX0bIGWzy22IH2l_hPuBAPZSp0xm0UOE1JctRTgeZQ&oe=627EBA7C",
    stars: 5,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277586279_370607455078309_4098118987674276804_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=HoZpwEbvW7MAX9ATcEG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK7XO3IL47W15aXmD3skUfveZGjwfHD9xdOMyk91tuFFw&oe=627CEB38",
    stars: 2,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
]

export const FeaturedItems: ISlideITrems[] = [
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277826585_1162795751190017_4257293453583233103_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=gF4rplz7FjIAX9L-yWn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJkdUw1Yx8NqHm1fw75XJUBJdfDywrV5zXx6c9Zswo48g&oe=627BB8E3",
    stars: 5,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278089439_534426088026137_3464803764025357339_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=qo8dSzxcOUYAX-TJ8Mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI9J2AcsLVYoBQc3W-8OJtFcl8EduhLISEv7kp79xqFtQ&oe=627EA498",
    stars: 4,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277593683_3116750328574683_2793256862989580439_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=eE6UjzVRi0QAX_M3JF-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKXvGNerPxsPCs3d5RTfcH4qUx3lV-Hu7bvrowzb_RQCQ&oe=627D508B",
    stars: 5,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    price: 142,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277418295_330845692364507_6908627012738531754_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=vbsv8rZCWLYAX8x-Lty&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIv81_xglpjAFZVr3NM5xwmUNW80vZ8NSlntiv4XLutiw&oe=627B8253",
    stars: 4,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    price: 142,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277889528_387568506710454_9172859704563720280_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=hksuOIpWVecAX97NRLq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKYUKWzzN9ibV2JQlw2BryDtJKGqazhqawDVlX5tzaNHg&oe=627D10EE",
    stars: 2,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    price: 142,
  },
  {
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277826450_675896060195194_8102106142593797151_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=PBwD6vyfZjIAX_I2yZ3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJkOw-Of7ME1ZxPSsQt8-76cKrcJ2-dtVvVS9o64drflw&oe=627DA81A",
    stars: 3,
    price: 142,
    title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
  },
]
const CheckIcon: React.FC = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4C8 5.06087 7.57857 6.07828 6.82843 6.82843C6.07828 7.57857 5.06087 8 4 8C2.93913 8 1.92172 7.57857 1.17157 6.82843C0.421427 6.07828 0 5.06087 0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0C5.06087 0 6.07828 0.421427 6.82843 1.17157C7.57857 1.92172 8 2.93913 8 4ZM6.015 2.485C5.97928 2.44941 5.93676 2.42139 5.88997 2.40261C5.84317 2.38383 5.79307 2.37468 5.74266 2.37571C5.69225 2.37673 5.64257 2.38792 5.59658 2.40858C5.55059 2.42925 5.50924 2.45898 5.475 2.496L3.7385 4.7085L2.692 3.6615C2.62091 3.59526 2.52689 3.5592 2.42974 3.56091C2.33259 3.56263 2.2399 3.60198 2.17119 3.67069C2.10248 3.7394 2.06313 3.83209 2.06141 3.92924C2.0597 4.02639 2.09576 4.12041 2.162 4.1915L3.485 5.515C3.52064 5.55058 3.56308 5.57861 3.60979 5.59743C3.6565 5.61624 3.70652 5.62546 3.75687 5.62453C3.80722 5.6236 3.85687 5.61253 3.90285 5.592C3.94883 5.57146 3.9902 5.54187 4.0245 5.505L6.0205 3.01C6.08855 2.93925 6.12614 2.84464 6.1252 2.74648C6.12427 2.64832 6.08488 2.55444 6.0155 2.485H6.015Z"
      fill="#276955"
    />
  </svg>
)
export const Items = () => {
  return (
    <div className="mt-4">
      <select className="p-2 border-2 mb-8 rounded-[4px] hover:cursor-pointer text-[#636363]">
        <option value="Headphones ">Headphones</option>
      </select>
      <Wrapper>
        {ListItems.map(
          (
            { image, title, soldby, stars, price, original, certi, minOrder },
            index
          ) => (
            <ItemContainer key={index}>
              <Img src={image} alt="asd" />
              <Title>{title}</Title>
              <Span1>
                {soldby}
                <span>
                  <CheckIcon />
                </span>
              </Span1>
              <span className="flex gap-1">
                <ListStars currentStars={stars} /> ( 166 )
              </span>
              <span className="font-semibold text-[16px] relative flex gap-1">
                $ {price}
                <span className="text-[12px] font-normal">12</span>
              </span>
              <Span2>{original}</Span2>
              <Span3>{certi}</Span3>
              <Span2>Minimun order: {minOrder}</Span2>
            </ItemContainer>
          )
        )}
      </Wrapper>
      <Pagination />
    </div>
  )
}
