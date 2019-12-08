const DEFAULT_STATE = {
  authUser: {
    isFetching: false,
    authenticated: false,
    data: {
      authorization: undefined,
      user: {},
    },
  },
  conferences: {
    isFetching: false,
    success: false,
    data: [
      {
          "agendas": [
              {
                  "description": "Actually, I didn't make the claim that Ruby follows the principle of least surprise. Someone felt the design of Ruby follows that philosophy, so they started saying that. I didn't bring that up, actually.You need a teacher. I can show you the ways of the Force.Language designers want to design the perfect language. They want to be able to say, 'My language is perfect. It can do everything.' But it's just plain impossible to design a perfect language, because there are two ways to look at a language. One way is by looking at what can be done with that language. The other is by looking at how we feel using that language-how we feel while programming.The Republic doesn't exist out here. We must survive on our own.",
                  "endTime": "2019-12-09T11:30:00.000Z",
                  "id": 1,
                  "location": "Main Hall",
                  "startTime": "2019-12-09T09:00:00.000Z",
                  "title": "Opening Speech"
              },
              {
                  "description": "I believe that the purpose of life is, at least in part, to be happy. Based on this belief, Ruby is designed to make programming not only easy but also fun. It allows you to concentrate on the creative side of programming, with less stress.There is a great disturbance in the Force.Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.Now, witness the power of this fully operational battle station.",
                  "endTime": "2019-12-09T14:30:00.000Z",
                  "id": 2,
                  "location": "Main Hall",
                  "startTime": "2019-12-09T12:00:00.000Z",
                  "title": "Quaerat ea."
              },
              {
                  "description": "Most programs are not write-once. They are reworked and rewritten again and again in their lived. Bugs must be debugged. Changing requirements and the need for increased functionality mean the program itself may be modified on an ongoing basis. During this process, human beings must be able to read and understand the original code. It is therefore more important by far for humans to be able to understand the program than it is for the computer.na meeto do buny dunko la cho ya. (you won't be able to get near a civilized system.)You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.You can't stop change any more than you can stop the suns from setting.",
                  "endTime": "2019-12-09T17:30:00.000Z",
                  "id": 3,
                  "location": "Main Hall",
                  "startTime": "2019-12-09T15:00:00.000Z",
                  "title": "Et ut."
              },
              {
                  "description": "Plant a memory, plant a tree, do it today for tomorrow.You can run, but you'll only die tired.It is not the responsibility of the language to force good looking code, but the language should make good looking code possible.Ungh. And I thought they smelled bad on the outside.",
                  "endTime": "2019-12-10T11:30:00.000Z",
                  "id": 4,
                  "location": "Main Hall",
                  "startTime": "2019-12-10T09:00:00.000Z",
                  "title": "Laboriosam totam."
              },
              {
                  "description": "You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.Ches ko ba tuta creesta crenko ya kolska! (This is something I've been looking forward to for a long time.)Most programs are not write-once. They are reworked and rewritten again and again in their lived. Bugs must be debugged. Changing requirements and the need for increased functionality mean the program itself may be modified on an ongoing basis. During this process, human beings must be able to read and understand the original code. It is therefore more important by far for humans to be able to understand the program than it is for the computer.So be it, Jedi.",
                  "endTime": "2019-12-10T14:30:00.000Z",
                  "id": 5,
                  "location": "Main Hall",
                  "startTime": "2019-12-10T12:00:00.000Z",
                  "title": "Sit maxime."
              },
              {
                  "description": "Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.You’ll be malfunctioning within a day, you nearsighted scrap pile.From the viewpoint of what you can do, therefore, languages do differ - but the differences are limited. For example, Python and Ruby provide almost the same power to the programmer.Droid, please!",
                  "endTime": "2019-12-10T16:30:00.000Z",
                  "id": 6,
                  "location": "Main Hall",
                  "startTime": "2019-12-10T15:00:00.000Z",
                  "title": "Maxime in."
              },
              {
                  "description": "The orthogonal features, when combined, can explode into complexity.Han, ma bookie, keel-ee calleya ku kah. (Han, my boy, you disappoint me.)Ruby inherited the Perl philosophy of having more than one way to do the same thing. I inherited that philosophy from Larry Wall, who is my hero actually. I want to make Ruby users free. I want to give them the freedom to choose.You know, that little droid is going to cause me a lot of trouble.",
                  "endTime": "2019-12-11T11:30:00.000Z",
                  "id": 7,
                  "location": "Main Hall",
                  "startTime": "2019-12-11T09:00:00.000Z",
                  "title": "Hic autem."
              },
              {
                  "description": "Everyone has an individual background. Someone may come from Python, someone else may come from Perl, and they may be surprised by different aspects of the language. Then they come up to me and say, 'I was surprised by this feature of the language, so therefore Ruby violates the principle of least surprise.' Wait. Wait. The principle of least surprise is not for you only.I will start my operations here, and pull the rebels apart piece by piece. They'll be the architects of their own destruction.People are different. People choose different criteria. But if there is a better way among many alternatives, I want to encourage that way by making it comfortable. So that's what I've tried to do.Remember your focus determines your reality.",
                  "endTime": "2019-12-11T13:30:00.000Z",
                  "id": 8,
                  "location": "Main Hall",
                  "startTime": "2019-12-11T12:00:00.000Z",
                  "title": "Officia at."
              },
              {
                  "description": "Smart people underestimate the ordinarity of ordinary people.Just for once, let me look on you with my own eyes.Imagine you are writing an email. You are in front of the computer. You are operating the computer, clicking a mouse and typing on a keyboard, but the message will be sent to a human over the internet. So you are working before the computer, but with a human behind the computer.Your hate has made you powerful. Now fulfill your destiny, take you're father's place by my side.",
                  "endTime": "2019-12-11T17:00:00.000Z",
                  "id": 9,
                  "location": "Main Hall",
                  "startTime": "2019-12-11T15:00:00.000Z",
                  "title": "Closing Speech"
              }
          ],
          "city": "Berlin",
          "country": "Germany",
          "creator_id": 1,
          "endDate": "2019-12-11",
          "id": 1,
          "name": "API Summit",
          "startDate": "2019-12-09",
          "url": "https://api-summit.de/"
      },
      {
          "agendas": [
              {
                  "description": "Most of the tasks we do are for humans. For example, a tax calculation is counting numbers so the government can pull money out from my wallet, but government consists of humans.I have a bad feeling about...Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.Remember your focus determines your reality.",
                  "endTime": "2019-12-15T11:00:00.000Z",
                  "id": 10,
                  "location": "Hall 1",
                  "startTime": "2019-12-15T09:00:00.000Z",
                  "title": "Opening Speech"
              },
              {
                  "description": "From the viewpoint of what you can do, therefore, languages do differ - but the differences are limited. For example, Python and Ruby provide almost the same power to the programmer.Jabba won neechee kochba mu shanee wy tonny wya uska. (Jabba put a price on your head so large, every bounty hunter in the galaxy will be looking for you.)You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.He is as clumsy as he is stupid.",
                  "endTime": "2019-12-15T13:30:00.000Z",
                  "id": 11,
                  "location": "Hall 1",
                  "startTime": "2019-12-15T12:00:00.000Z",
                  "title": "Ut ipsa."
              },
              {
                  "description": "Plant a memory, plant a tree, do it today for tomorrow.Use the Force, Luke.Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.You're smarter than a tree, aren't you?",
                  "endTime": "2019-12-15T17:00:00.000Z",
                  "id": 12,
                  "location": "Hall 1",
                  "startTime": "2019-12-15T15:00:00.000Z",
                  "title": "Eum maxime."
              },
              {
                  "description": "Smart people underestimate the ordinarity of ordinary people.The senate will decide your fate.From the viewpoint of what you can do, therefore, languages do differ - but the differences are limited. For example, Python and Ruby provide almost the same power to the programmer.Your overconfidence is your weakness.",
                  "endTime": "2019-12-16T10:30:00.000Z",
                  "id": 13,
                  "location": "Hall 1",
                  "startTime": "2019-12-16T09:00:00.000Z",
                  "title": "Deserunt qui."
              },
              {
                  "description": "Language designers want to design the perfect language. They want to be able to say, 'My language is perfect. It can do everything.' But it's just plain impossible to design a perfect language, because there are two ways to look at a language. One way is by looking at what can be done with that language. The other is by looking at how we feel using that language-how we feel while programming.Ooh mooey mooey I love you!Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.I have a bad feeling about...",
                  "endTime": "2019-12-16T13:30:00.000Z",
                  "id": 14,
                  "location": "Hall 1",
                  "startTime": "2019-12-16T12:00:00.000Z",
                  "title": "Dolore quo."
              },
              {
                  "description": "I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of Ruby language.Anakin you're breaking my heart, you're going down a path I can't follow.Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.Anakin you're breaking my heart, you're going down a path I can't follow.",
                  "endTime": "2019-12-16T17:00:00.000Z",
                  "id": 15,
                  "location": "Hall 1",
                  "startTime": "2019-12-16T15:00:00.000Z",
                  "title": "Officiis assumenda."
              },
              {
                  "description": "Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.The senate will decide your fate.Smart people underestimate the ordinarity of ordinary people.I will start my operations here, and pull the rebels apart piece by piece. They'll be the architects of their own destruction.",
                  "endTime": "2019-12-17T11:30:00.000Z",
                  "id": 16,
                  "location": "Hall 1",
                  "startTime": "2019-12-17T09:00:00.000Z",
                  "title": "Iusto voluptatem."
              },
              {
                  "description": "Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.So this is how liberty dies. With thunderous applause.Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.You do have your moments. Not many, but you have them.",
                  "endTime": "2019-12-17T13:30:00.000Z",
                  "id": 17,
                  "location": "Hall 1",
                  "startTime": "2019-12-17T12:00:00.000Z",
                  "title": "Maxime voluptas."
              },
              {
                  "description": "Smart people underestimate the ordinarity of ordinary people.I have a bad feeling about...Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.The Jedi are extinct. Their fire has gone out of the universe. You, my friend, are all that's left of their religion.",
                  "endTime": "2019-12-17T17:30:00.000Z",
                  "id": 18,
                  "location": "Hall 1",
                  "startTime": "2019-12-17T15:00:00.000Z",
                  "title": "Closing Speech"
              }
          ],
          "city": "Paris",
          "country": "France",
          "creator_id": 1,
          "endDate": "2019-12-17",
          "id": 2,
          "name": "dotJS",
          "startDate": "2019-12-15",
          "url": "https://2019.dotjs.io/"
      },
      {
          "agendas": [
              {
                  "description": "Most of the tasks we do are for humans. For example, a tax calculation is counting numbers so the government can pull money out from my wallet, but government consists of humans.This deal is getting worse all the time.Most of the tasks we do are for humans. For example, a tax calculation is counting numbers so the government can pull money out from my wallet, but government consists of humans.You do have your moments. Not many, but you have them.",
                  "endTime": "2019-12-16T11:00:00.000Z",
                  "id": 19,
                  "location": "Hall 2",
                  "startTime": "2019-12-16T09:00:00.000Z",
                  "title": "Opening Speech"
              },
              {
                  "description": "It is not the responsibility of the language to force good looking code, but the language should make good looking code possible.How you doin' Chewbacca? Still hanging around with this loser?Sometimes people jot down pseudo-code on paper. If that pseudo-code runs directly on their computers, its best, isn't it? Ruby tries to be like that, like pseudo-code that runs. Python people say that too.Governor Tarkin, I should've expected to find you holding Vader's leash. I recognized your foul stench when I was brought on board.",
                  "endTime": "2019-12-16T13:30:00.000Z",
                  "id": 20,
                  "location": "Hall 2",
                  "startTime": "2019-12-16T12:00:00.000Z",
                  "title": "Est error."
              },
              {
                  "description": "Everyone has an individual background. Someone may come from Python, someone else may come from Perl, and they may be surprised by different aspects of the language. Then they come up to me and say, 'I was surprised by this feature of the language, so therefore Ruby violates the principle of least surprise.' Wait. Wait. The principle of least surprise is not for you only.I will start my operations here, and pull the rebels apart piece by piece. They'll be the architects of their own destruction.I believe consistency and orthogonality are tools of design, not the primary goal in design.Show me again, grandfather, and I will finish what you started.",
                  "endTime": "2019-12-16T16:30:00.000Z",
                  "id": 21,
                  "location": "Hall 2",
                  "startTime": "2019-12-16T15:00:00.000Z",
                  "title": "Molestiae sed."
              },
              {
                  "description": "Most programs are not write-once. They are reworked and rewritten again and again in their lived. Bugs must be debugged. Changing requirements and the need for increased functionality mean the program itself may be modified on an ongoing basis. During this process, human beings must be able to read and understand the original code. It is therefore more important by far for humans to be able to understand the program than it is for the computer.You're smarter than a tree, aren't you?The orthogonal features, when combined, can explode into complexity.So be it, Jedi.",
                  "endTime": "2019-12-17T11:30:00.000Z",
                  "id": 22,
                  "location": "Hall 2",
                  "startTime": "2019-12-17T09:00:00.000Z",
                  "title": "Voluptatum ea."
              },
              {
                  "description": "Plant a memory, plant a tree, do it today for tomorrow.We have no choice, General Calrissian! Our cruisers can't repel firepower of that magnitude!I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of Ruby language.You're smarter than a tree, aren't you?",
                  "endTime": "2019-12-17T13:30:00.000Z",
                  "id": 23,
                  "location": "Hall 2",
                  "startTime": "2019-12-17T12:00:00.000Z",
                  "title": "Expedita pariatur."
              },
              {
                  "description": "Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.You will remove these restraints and leave this cell with the door open.Most programs are not write-once. They are reworked and rewritten again and again in their lived. Bugs must be debugged. Changing requirements and the need for increased functionality mean the program itself may be modified on an ongoing basis. During this process, human beings must be able to read and understand the original code. It is therefore more important by far for humans to be able to understand the program than it is for the computer.Just for once, let me look on you with my own eyes.",
                  "endTime": "2019-12-17T17:00:00.000Z",
                  "id": 24,
                  "location": "Hall 2",
                  "startTime": "2019-12-17T15:00:00.000Z",
                  "title": "Possimus optio."
              },
              {
                  "description": "From the viewpoint of what you can do, therefore, languages do differ - but the differences are limited. For example, Python and Ruby provide almost the same power to the programmer.Who's the more foolish; the fool, or the fool who follows him?From the viewpoint of what you can do, therefore, languages do differ - but the differences are limited. For example, Python and Ruby provide almost the same power to the programmer.Remember your focus determines your reality.",
                  "endTime": "2019-12-18T11:30:00.000Z",
                  "id": 25,
                  "location": "Hall 2",
                  "startTime": "2019-12-18T09:00:00.000Z",
                  "title": "At corrupti."
              },
              {
                  "description": "Plant a memory, plant a tree, do it today for tomorrow.I won't have you question my methods.I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of Ruby language.Size matters not. Look at me. Judge me by my size, do you?",
                  "endTime": "2019-12-18T14:00:00.000Z",
                  "id": 26,
                  "location": "Hall 2",
                  "startTime": "2019-12-18T12:00:00.000Z",
                  "title": "Distinctio excepturi."
              },
              {
                  "description": "You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.Wanta dah moolee-rah... (Why haven't you paid me...)Everyone has an individual background. Someone may come from Python, someone else may come from Perl, and they may be surprised by different aspects of the language. Then they come up to me and say, 'I was surprised by this feature of the language, so therefore Ruby violates the principle of least surprise.' Wait. Wait. The principle of least surprise is not for you only.You can't stop change any more than you can stop the suns from setting.",
                  "endTime": "2019-12-18T17:00:00.000Z",
                  "id": 27,
                  "location": "Hall 2",
                  "startTime": "2019-12-18T15:00:00.000Z",
                  "title": "Closing Speech"
              }
          ],
          "city": "Berlin",
          "country": "Germany",
          "creator_id": 1,
          "endDate": "2019-12-18",
          "id": 3,
          "name": "React Day Berlin",
          "startDate": "2019-12-16",
          "url": "https://reactday.berlin/"
      },
      {
          "agendas": [
              {
                  "description": "I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of Ruby language.But how could they be jamming us if they don't know that we're coming?Everyone has an individual background. Someone may come from Python, someone else may come from Perl, and they may be surprised by different aspects of the language. Then they come up to me and say, 'I was surprised by this feature of the language, so therefore Ruby violates the principle of least surprise.' Wait. Wait. The principle of least surprise is not for you only.Train yourself to let go of everything you fear to lose.",
                  "endTime": "2020-02-12T10:30:00.000Z",
                  "id": 28,
                  "location": "Hall 3",
                  "startTime": "2020-02-12T09:00:00.000Z",
                  "title": "Opening Speech"
              },
              {
                  "description": "I believe that the purpose of life is, at least in part, to be happy. Based on this belief, Ruby is designed to make programming not only easy but also fun. It allows you to concentrate on the creative side of programming, with less stress.The garbage'll doPeople are different. People choose different criteria. But if there is a better way among many alternatives, I want to encourage that way by making it comfortable. So that's what I've tried to do.Your presence is like a violent storm in this quiet world",
                  "endTime": "2020-02-12T14:00:00.000Z",
                  "id": 29,
                  "location": "Hall 3",
                  "startTime": "2020-02-12T12:00:00.000Z",
                  "title": "Sit dolor."
              },
              {
                  "description": "Man is driven to create; I know I really love to create things. And while I'm not good at painting, drawing, or music, I can write software.So this is how liberty dies. With thunderous applause.People are different. People choose different criteria. But if there is a better way among many alternatives, I want to encourage that way by making it comfortable. So that's what I've tried to do.The Force will be with you. Always.",
                  "endTime": "2020-02-12T16:30:00.000Z",
                  "id": 30,
                  "location": "Hall 3",
                  "startTime": "2020-02-12T15:00:00.000Z",
                  "title": "Vitae pariatur."
              },
              {
                  "description": "The orthogonal features, when combined, can explode into complexity.I have a bad feeling about this.I didn't work hard to make Ruby perfect for everyone, because you feel differently from me. No language can be perfect for everyone. I tried to make Ruby perfect for me, but maybe it's not perfect for you. The perfect language for Guido van Rossum is probably Python.Ohh, maxi big da Force. Well dat smells stinkowiff.",
                  "endTime": "2020-02-13T11:30:00.000Z",
                  "id": 31,
                  "location": "Hall 3",
                  "startTime": "2020-02-13T09:00:00.000Z",
                  "title": "Incidunt dolorum."
              },
              {
                  "description": "From the viewpoint of what you can do, therefore, languages do differ - but the differences are limited. For example, Python and Ruby provide almost the same power to the programmer.It's a trap!I believe that the purpose of life is, at least in part, to be happy. Based on this belief, Ruby is designed to make programming not only easy but also fun. It allows you to concentrate on the creative side of programming, with less stress.The Republic doesn't exist out here. We must survive on our own.",
                  "endTime": "2020-02-13T14:30:00.000Z",
                  "id": 32,
                  "location": "Hall 3",
                  "startTime": "2020-02-13T12:00:00.000Z",
                  "title": "Distinctio voluptas."
              },
              {
                  "description": "I didn't work hard to make Ruby perfect for everyone, because you feel differently from me. No language can be perfect for everyone. I tried to make Ruby perfect for me, but maybe it's not perfect for you. The perfect language for Guido van Rossum is probably Python.Who's the more foolish; the fool, or the fool who follows him?In our daily lives as programmers, we process text strings a lot. So I tried to work hard on text processing, namely the string class and regular expressions. Regular expressions are built into the language and are very tuned up for use.The senate will decide your fate.",
                  "endTime": "2020-02-13T16:30:00.000Z",
                  "id": 33,
                  "location": "Hall 3",
                  "startTime": "2020-02-13T15:00:00.000Z",
                  "title": "Repellendus debitis."
              },
              {
                  "description": "Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.Truly wonderful, the mind of a child is.Everyone has an individual background. Someone may come from Python, someone else may come from Perl, and they may be surprised by different aspects of the language. Then they come up to me and say, 'I was surprised by this feature of the language, so therefore Ruby violates the principle of least surprise.' Wait. Wait. The principle of least surprise is not for you only.Hokey religions and ancient weapons are no match for a good blaster at your side, kid.",
                  "endTime": "2020-02-14T11:30:00.000Z",
                  "id": 34,
                  "location": "Hall 3",
                  "startTime": "2020-02-14T09:00:00.000Z",
                  "title": "Accusamus repudiandae."
              },
              {
                  "description": "Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.You need a teacher. I can show you the ways of the Force.I believe that the purpose of life is, at least in part, to be happy. Based on this belief, Ruby is designed to make programming not only easy but also fun. It allows you to concentrate on the creative side of programming, with less stress.Remember your focus determines your reality.",
                  "endTime": "2020-02-14T14:30:00.000Z",
                  "id": 35,
                  "location": "Hall 3",
                  "startTime": "2020-02-14T12:00:00.000Z",
                  "title": "Sed quo."
              },
              {
                  "description": "In our daily lives as programmers, we process text strings a lot. So I tried to work hard on text processing, namely the string class and regular expressions. Regular expressions are built into the language and are very tuned up for use.Bounty hunters! We don't need this scum.In our daily lives as programmers, we process text strings a lot. So I tried to work hard on text processing, namely the string class and regular expressions. Regular expressions are built into the language and are very tuned up for use.Mesa day startin pretty okee-day with a brisky morning munchy, then BOOM! Gettin very scared and grabbin that Jedi and POW! Mesa here! Mesa gettin' very very scared!",
                  "endTime": "2020-02-14T17:00:00.000Z",
                  "id": 36,
                  "location": "Hall 3",
                  "startTime": "2020-02-14T15:00:00.000Z",
                  "title": "Closing Speech"
              }
          ],
          "city": "Verona",
          "country": "Italy",
          "creator_id": 1,
          "endDate": "2020-02-14",
          "id": 4,
          "name": "JSDay",
          "startDate": "2020-02-12",
          "url": "https://2020.jsday.it/index.html"
      },
      {
          "agendas": [
              {
                  "description": "Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines.Would somebody get this big walking carpet out of my way?You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.Governor Tarkin, I should've expected to find you holding Vader's leash. I recognized your foul stench when I was brought on board.",
                  "endTime": "2020-03-02T10:30:00.000Z",
                  "id": 37,
                  "location": "Hall 3",
                  "startTime": "2020-03-02T09:00:00.000Z",
                  "title": "Opening Speech"
              },
              {
                  "description": "From the viewpoint of what you can do, therefore, languages do differ - but the differences are limited. For example, Python and Ruby provide almost the same power to the programmer.The garbage'll doBecause of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.It's a trap!",
                  "endTime": "2020-03-02T14:30:00.000Z",
                  "id": 38,
                  "location": "Hall 3",
                  "startTime": "2020-03-02T12:00:00.000Z",
                  "title": "Nesciunt dolorem."
              },
              {
                  "description": "Man is driven to create; I know I really love to create things. And while I'm not good at painting, drawing, or music, I can write software.It's not impossible. I used to bullseye womp rats in my T-16 back home, they're not much bigger than two meters.I believe consistency and orthogonality are tools of design, not the primary goal in design.You know, that little droid is going to cause me a lot of trouble.",
                  "endTime": "2020-03-02T17:30:00.000Z",
                  "id": 39,
                  "location": "Hall 3",
                  "startTime": "2020-03-02T15:00:00.000Z",
                  "title": "Voluptatem iusto."
              },
              {
                  "description": "Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.Careful, Ren, that your personal interests not interfere with orders from Leader Snoke.I believe consistency and orthogonality are tools of design, not the primary goal in design.Nuklee numaa (that's the idea.)",
                  "endTime": "2020-03-03T11:30:00.000Z",
                  "id": 40,
                  "location": "Hall 3",
                  "startTime": "2020-03-03T09:00:00.000Z",
                  "title": "Unde in."
              },
              {
                  "description": "Because of the Turing completeness theory, everything one Turing-complete language can do can theoretically be done by another Turing-complete language, but at a different cost. You can do everything in assembler, but no one wants to program in assembler anymore.Let's just say my master will always do what needs to be done. I'm not even sure how peacetime will agree with him.In our daily lives as programmers, we process text strings a lot. So I tried to work hard on text processing, namely the string class and regular expressions. Regular expressions are built into the language and are very tuned up for use.Governor Tarkin, I should've expected to find you holding Vader's leash. I recognized your foul stench when I was brought on board.",
                  "endTime": "2020-03-03T13:30:00.000Z",
                  "id": 41,
                  "location": "Hall 3",
                  "startTime": "2020-03-03T12:00:00.000Z",
                  "title": "Aperiam assumenda."
              },
              {
                  "description": "You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.Sorry to interrupt your playtime, Grumpy, but wouldn't you prefer a challenge?I believe consistency and orthogonality are tools of design, not the primary goal in design.I have a bad feeling about...",
                  "endTime": "2020-03-03T17:30:00.000Z",
                  "id": 42,
                  "location": "Hall 3",
                  "startTime": "2020-03-03T15:00:00.000Z",
                  "title": "Qui non."
              },
              {
                  "description": "It is not the responsibility of the language to force good looking code, but the language should make good looking code possible.War is in your blood. I studied the art of war, worked to perfect it, but you? You were forged by it.The orthogonal features, when combined, can explode into complexity.A Jedi uses the Force for knowledge and defense, never for attack.",
                  "endTime": "2020-03-04T11:30:00.000Z",
                  "id": 43,
                  "location": "Hall 3",
                  "startTime": "2020-03-04T09:00:00.000Z",
                  "title": "Corporis ipsam."
              },
              {
                  "description": "I believe consistency and orthogonality are tools of design, not the primary goal in design.Give in to your anger. With each passing moment you make yourself more my servant.Language designers want to design the perfect language. They want to be able to say, 'My language is perfect. It can do everything.' But it's just plain impossible to design a perfect language, because there are two ways to look at a language. One way is by looking at what can be done with that language. The other is by looking at how we feel using that language-how we feel while programming.Twice the pride, double the fall.",
                  "endTime": "2020-03-04T14:30:00.000Z",
                  "id": 44,
                  "location": "Hall 3",
                  "startTime": "2020-03-04T12:00:00.000Z",
                  "title": "Numquam nam."
              },
              {
                  "description": "Actually, I didn't make the claim that Ruby follows the principle of least surprise. Someone felt the design of Ruby follows that philosophy, so they started saying that. I didn't bring that up, actually.It's the ship that made the Kessel Run in less than 12 parsecs.It is not the responsibility of the language to force good looking code, but the language should make good looking code possible.I won't have you question my methods.",
                  "endTime": "2020-03-04T17:30:00.000Z",
                  "id": 45,
                  "location": "Hall 3",
                  "startTime": "2020-03-04T15:00:00.000Z",
                  "title": "Closing Speech"
              }
          ],
          "city": "Verona",
          "country": "Italy",
          "creator_id": 1,
          "endDate": "2020-03-04",
          "id": 5,
          "name": "rubyday",
          "startDate": "2020-03-02",
          "url": "https://2020.rubyday.it/"
      }
  ],
  },
  schedules: {
    isFetching: false,
    success: false,
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    return null;
  } catch (err) {
    return null;
  }
};

export const loadState = () => {
  try {
    const serializedState = () => localStorage.getItem('state');
    if (serializedState()) {
      return JSON.parse(serializedState());
    }
    saveState(DEFAULT_STATE);
    if (serializedState()) {
      return JSON.parse(serializedState());
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};
