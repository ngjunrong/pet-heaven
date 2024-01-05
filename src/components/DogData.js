const DogData = () => {
  const arr = [
    {
      info: "Born on 1 January 2013, Sterling is a male dog who is super friendly and affectionate towards people. Originally, Sterling was a stray from Sungei Kadut who was cuaght by the authorities and subsesquently offered to Pet Heaven for rehoming because of his good temperament. Sterling is HDB approved.",
    },
    {
      info: "Born on 6 February 2013, Tarzan eats and sleeps well and was pee-pad trained even before his eyes were fully opened! He loves the company of other dogs, and seeks comfort in their company. Tarzan is not HDB approved.",
    },
    {
      info: "Born on 8 December 2017, Bruno is a very handsome boy and looks like he could be a rottweiler cross. He possesses a happy and friendly nature and an extremely waggy tail! He is excellent indoors and is careful around furniture. Bruno is HDB approved.",
    },
    {
      info: "Born on 7 March 2016, Fiver, with golden fur and pointy ears, is a nervous boy who is slowly gaining confidence in his walks and interaction with people. He needs a confident handler who is willing to guide him in feeling more secure and to improve his walking confidence. Fiver is HDB approved.",
    },
    {
      info: "Born on 1 January 2022, Capri is sweet but a bit more reserved compared to her 3 brothers. However, once she warms up to you, she transforms into a happy, playful girl. Originally, Capri and her 3 siblings were rescued from a cemetery. Carpri is HDB approved.",
    },
    {
      info: "Born on 2 June 2019, Bebe has a shy disposition and needs time to trust people. She does well with a confident dog companion, looking to him for assurance when venturing beyond the kennel. Bebe is not HDB approved.",
    },
    {
      info: "Born on 19 July 2019, Karen is a sweet and very affectionate girl who loves everyone and is good with other dogs. Call her and she will walk up to you with a smile plastered on her face. Karen is HDB approved.",
    },
    {
      info: "Born on 14 October 2020, Louie is the only one in his pack with big, round, floppy ears which makes him look like a labrador puppy. He is a happy boy who loves his toys and being hugged. Originally, Louie was found in the Pandan Loop area. Louie is HDB approved.",
    },
    {
      info: "Born on 1 February 2020, Trish is initially more cautious of people, occasionally sounding off a couple barks. Once she smells you and gets used to your presence, she'll start giving you kisses and you can reciprocate by scratching her neck which she enjoys. Trish is HDB approved.",
    },
    {
      info: "Born on 19 April 2015. Looking at Lucy, you will never guess that she came so close to death. She is a playful and active little sweetheart but also very strong willed and bold - a true mark of a survivor. Lucy is not HDB approved.",
    },
    {
      info: "Born on 16 July 2018, Akita is a charming girl who is sweet and friendly. Everyone who has met her has been moved by how cheerful and resilient she is, despite her former living environment. Akita is HDB approved.",
    },
    {
      info: "Born on 1 March 2015, Zena (no tail) is a gentle, mild-mannered and independent girl who enjoys receiving pats. She can be seen lounging at the back of her kennel. Zena is not HDB approved.",
    },
    {
      info: "Born on 8 April 2017, Tony is an active and confident boy who loves interacting with humans. He can pull on leash due to his excitement with being outdoors. Tony can sometimes be territorial over food and toys thus will require an experienced adopter who lives an active lifestyle. Tony is HDB approved.",
    },
    {
      info: "Born on 16 August 2019, Raju is an excited and chirpy boy who is always happy to see people. He loves a good belly scratch but doesn't like being touched on his head, and will snap at those who try. Raju is not HDB approved.",
    },
    {
      info: "Born on 2 January 2013, Calbee is very shy with people and will need a lot of time and patience before she will warm up. She is very food motivated, is peepad trained, has no aggression and walks well on leash. Calbee is HDB approved.",
    },
    {
      info: "Born on 3 February 2013, Yara is a calm and demure girl. She is shy and wary of strangers, so do approach her with patience and befriend her first before attempting to walk her. She may seem reluctant to be leashed and go out of her kennel, but her walks are okay once she’s outside. Yara is not HDB approved.",
    },
    {
      info: "Born on 8 December 2017, Niu Niu is the biggest amongst the siblings and although the boldest, still a little shy. He is pee pad trained. Originally, Niu Niu is from a litter of 7 pups born to stray parents at Tuas. He was heavily infested with ticks when he was first rescued. Niu Niu is HDB approved.",
    },
    {
      info: "Born on 2 March 2016, Tao Bao is very shy with people and takes awhile to warm up but once she is familiar with you, she can be very affectionate. She really thrives in the company of other dogs thus we believe she would fare better in a home with at least another dog.. Tao Bao is HDB approved.",
    },
    {
      info: "Born on 7 January 2022, JiuWan is super affectionate, great with people (even children) and fine with cats. He is very playful and can be cheeky at times. He would need an active family to keep up with his high energy. JiuWan is HDB approved.",
    },
    {
      info: "Born on 12 June 2019, Aimee is a passionate, active girl who enjoys being outside for walks / runs and some rough wrestling with her kennel mate. She knows her way into people's hearts, constantly giving you her paw to ask for affection.  Aimee is not HDB approved.",
    },
    {
      info: "Born on 11 July 2019, Bheen is a confident and loyal boy who would make a good guard dog for an individual or a family who doesn't have young kids. He has his moments of being protective and barking at folks walking by, but is also very sweet and will come looking for a good rub Bheen is HDB approved.",
    },
    {
      info: "Born on 8 July 2015, Ron is gentle and a little shy but friendly towards people. He enjoys walks but needs coaxing sometimes when on the leash. Originally, Ron was abandoned by his rescuer at a boarding kennel. Ron is HDB approved.",
    },
    {
      info: "Born on 11 February 2020, Dinky is a happy-go-lucky dog who is eager to play with the humans he's familiar with. He knows his way into people's hearts, frequently asking for a good belly rub or using his paw to ask you for more love.  Dinky is HDB approved.",
    },
    {
      info: "Born on 17 April 2015. Friendly and lovable, Scirocco (also known as Rocco) can be such a goofball! He loves attention and being pampered by those he knows, and does best with a structured routine. Scirocco is not HDB approved.",
    },
    {
      info: "Born on 14 July 2018, Bobbi is a very friendly and affectionate dog who likes being in the company of people. Originally, Bobbi was a stray living an idyllic life in the Brickland Road area together with a few other dogs. Bobbi is HDB approved.",
    },
    {
      info: "Born on 12 March 2015, Fin is playful and friendly and in the midst of learning how to walk on leash. He is both pee pad and grass trained. Originally, Fin and his siblings were rescued from Tuas where they were desperately looking for food. Fin is not HDB approved.",
    },
    {
      info: "Born on 18 April 2017, Mochi is an adorable and very petite lady who enjoys head scratches once she’s comfortable! She is now able to go on very short walks though she prefers to be carried. Mochi is HDB approved.",
    },
    {
      info: "Born on 13 August 2019, Gonzo is really gentle and willing to learn. He is a sweet and super docile boy and would do well in a home with another dog. He is great with kids and people and is very food driven. Gonzo is not HDB approved.",
    },
    {
      info: "Born on 2 March 2015, Clifton is a charmer who'll instantly come running to you for affection. He's very treats motivated and loves a good rub. Clifton's great with people but isn't great with other dogs. Clifton is not HDB approved.",
    },
    {
      info: "Born on 19 April 2017, Soju is a spirited and active boy who loves a good run or wrestling with his kennel mate. He's expressive in showing his affection once he gets to know you, often clambering all over you. Soju is HDB approved.",
    },
    {
      info: "Born on 26 August 2019, Vaca is one of the smaller siblings and is a little shy. He is pee pad trained. Originally, Vaca is from a litter of 7 pups born to stray parents at Tuas. He was heavily infested with ticks when he was first rescued. Vaca is not HDB approved.",
    },
    {
      info: "Born on 21 January 2013, Mooncake is a shy boy who takes time to warm up. He is affectionate, food motivated and good with dogs and cats. Originally, Mooncake and his 9 siblings were rescued together with their mum late one night from a heavy vehicle carpark in Hougang. Mooncake is HDB approved.",
    },
    {
      info: "Born on 13 February 2013, Asta is a friendly boy who tends to be more aloof sometimes, enjoying his own space. He loves to receive pats from people he's comfortable with, and walks well on the leash, going at his own pace. Asta is not HDB approved.",
    },
    {
      info: "Born on 28 December 2017, Jasper can be rather guarded & nervous around new faces, so do give him sufficient time & space before he opens up to you. With those he is familiar with, Jasper is an absolute sweetheart who is not only intelligent, but also playful & endearing. Jasper is HDB approved.",
    },
    {
      info: "Born on 21 March 2016, Lambert is wary of strangers and can be skittish, requiring a fair bit of time to familiarise himself with new people. Once he trusts you, he is very playful and affectionate, enjoying a good chest and belly rub. Lambert is HDB approved.",
    },
    {
      info: "Born on 17 January 2022, Milo is a lovable and obedient boy. With people he is familiar with, he will approach with a waggy tail but he is wary of unfamiliar faces and will need time to warm up. Milo is HDB approved.",
    },
    {
      info: "Born on 22 June 2019, Brock is a sweet and easy-going boy who'll capture you with his kind eyes. He enjoys affection and walks well. He's a fuss free dog who'd be a great addition to any home. Brock is not HDB approved.",
    },
    {
      info: "Born on 21 July 2019, Asher is sweet and friendly towards people. He loves affection and attention and is best suited to a family who can be at home with him. Originally, Asher was rescued from a construction site. Asher is HDB approved.",
    },
    {
      info: "Born on 28 July 2015, Dollar needs a bit of time to warm up to strangers but once she does, she can be very sweet and affectionate. She is good with cats and other dogs. Dollar would be suitable for an active couple or family with older children. Dollar is HDB approved.",
    },
    {
      info: "Born on 15 February 2020, Leen Yong (Cantonese for Lotus Seed) is a very friendly boy who'll be the first one at the door to greet you. He's an active dog who enjoys a run and playing with humans or his kennel mate. Leen Yong is HDB approved.",
    },
    {
      info: "Born on 14 April 2015. Siew Mai is friendly, laid back and calm and easy to walk on leash. Originally, Siew Mai was a factory dog who was abandoned because the management moved out. Siew Mai is not HDB approved.",
    },
    {
      info: "Born on 7 July 2018, Daisy is a shy lady who's still breaking out of her shell. She's very gentle and enjoys having her own space. With some tender love and care, we know Daisy can blossom into a wonderful companion. Daisy is HDB approved.",
    },
    {
      info: "Born on 3 March 2015, Martin is a handsome boy who takes time to warm up to new faces. He is nervous when out on walks and tends to dart forward towards his sister or crouches down if he hears a loud noise. Martin is not HDB approved.",
    },
    {
      info: "Born on 19 April 2017, Clovis can be shy when he first meets you and needs some time to warm up, but with a little patience and working to gain his trust he'll open up into the sweet boy we know he is. Clovis is HDB approved.",
    },
    {
      info: "Born on 23 August 2019, Cypher is a shy but curious boy who needs patience and time to warm up to new people. He's such a sweetie and you can tell wants to open up, but he's just a little unsure of people still. Cypher is not HDB approved.",
    },
    {
      info: "Born on 24 August 2019, Julian has come a long way since we rescued him as a puppy who was very scared of people. While Julian still needs time to warm up to new faces, he is treat-motivated and loves to eat. Julian is not HDB approved.",
    },
  ];

  return arr[Math.floor(Math.random() * arr.length)].info;
};

export default DogData;
