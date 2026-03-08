const workplaceTopics = [
    {
        id: 1,
        title: "Greetings at work",
        description: "Natural and professional workplace greetings for starting conversations with managers and teammates in chats, calls, and meetings.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Good morning, Michael. How is your day going so far?" },
                    { speaker: "B", text: "Good morning, Rustem. It’s going well, thanks. I had an early call, so the day started a bit fast, but all good so far. How about you?" },
                    { speaker: "A", text: "Pretty good, thank you. I’ve been reviewing a couple of tasks and organizing my priorities for today." },
                    { speaker: "B", text: "That sounds good. Anything urgent on your side?" },
                    { speaker: "A", text: "Nothing critical at the moment. I mainly wanted to check in, say good morning, and also confirm whether you still want me to continue with the remediation work first." },
                    { speaker: "B", text: "Yes, let’s keep that as the priority for now. Once that is under control, we can look at the next item." },
                    { speaker: "A", text: "Understood. I’ll continue with that and keep you posted if anything comes up." },
                    { speaker: "B", text: "Perfect. Thanks for checking in." }
                ],
                vocabulary: [
                    { text: "How is your day going so far?", translation: "Как у вас проходит день?" },
                    { text: "organizing my priorities", translation: "расставляю свои приоритеты" },
                    { text: "keep you posted", translation: "держать вас в курсе" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Hi Sarah, good morning. Do you have a minute?" },
                    { speaker: "B", text: "Good morning, Rustem. Yes, I do. What’s up?" },
                    { speaker: "A", text: "I just wanted to ask you something before I start working on the ticket. I went through the description, but I want to make sure I understood the scope correctly." },
                    { speaker: "B", text: "Sure, that makes sense. Which part do you want to confirm?" },
                    { speaker: "A", text: "The main thing is whether we are only updating the dependency version, or if we also need to validate the downstream service behavior after the change." },
                    { speaker: "B", text: "Good question. We definitely need both. The version upgrade is the main task, but we also need to confirm nothing breaks downstream." },
                    { speaker: "A", text: "Got it. I’m glad I asked before jumping in. I didn’t want to make the change and then find out later there was another expectation." },
                    { speaker: "B", text: "Exactly. Better to clarify early than do rework later." },
                    { speaker: "A", text: "Agreed. Thanks for your help." },
                    { speaker: "B", text: "Anytime." }
                ],
                vocabulary: [
                    { text: "Do you have a minute?", translation: "У вас есть минутка?" },
                    { text: "scope", translation: "объем задачи / границы задачи" },
                    { text: "do rework", translation: "переделывать работу" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Hello everyone, good afternoon." },
                    { speaker: "B", text: "Good afternoon." },
                    { speaker: "A", text: "Hope everyone is doing well. Thanks for joining." },
                    { speaker: "B", text: "Of course." },
                    { speaker: "A", text: "Before we get started, I just want to mention that I may need to leave a few minutes early because I have another meeting right after this one." },
                    { speaker: "B", text: "No problem. Thanks for letting us know." },
                    { speaker: "A", text: "I appreciate it. Also, just to give a quick update before we begin, I finished the initial review of the issue this morning and noted a few areas that may need deeper investigation." },
                    { speaker: "B", text: "That’s helpful. Are you planning to walk us through that today?" },
                    { speaker: "A", text: "Yes, exactly. I’ll give a short overview first, then I’d like to get your thoughts on the next step, especially around testing and rollout risk." },
                    { speaker: "B", text: "Sounds good. Let’s go ahead." },
                    { speaker: "A", text: "Great, thank you. I’ll share my screen." }
                ],
                vocabulary: [
                    { text: "Thanks for joining", translation: "Спасибо, что присоединились" },
                    { text: "letting us know", translation: "что дали нам знать / предупредили" },
                    { text: "walk us through", translation: "пошагово объяснить нам" }
                ]
            }

        ]
    },
    {
        id: 2,
        title: "Small talk with coworkers",
        description: "Natural and professional workplace small talk for casual conversations with coworkers about weekends, weather, lunch, and light office-friendly topics.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Good morning, James. How was your weekend?" },
                    { speaker: "B", text: "Morning, Rustem. It was good, actually. Pretty quiet, which I needed. I caught up on sleep, ran a few errands, and spent some time with family. How about yours?" },
                    { speaker: "A", text: "Mine was good too. Nothing too exciting, but it was productive. I took care of a few things at home and also tried to rest a bit before the new week started." },
                    { speaker: "B", text: "Honestly, a quiet weekend is underrated. Sometimes that is better than trying to do too much." },
                    { speaker: "A", text: "I agree. If the weekend is too busy, Monday feels like a second Monday." },
                    { speaker: "B", text: "Exactly. You come back needing another weekend." },
                    { speaker: "A", text: "That’s true. Did you do anything fun, or mostly just recharge?" },
                    { speaker: "B", text: "Mostly recharge. I watched a game, helped around the house, and stayed off my laptop as much as possible." },
                    { speaker: "A", text: "That sounds like a solid weekend. Probably the smart approach." },
                    { speaker: "B", text: "I try. The laptop always wins during the week, so I like to keep my distance when I can." }
                ],
                vocabulary: [
                    { text: "caught up on sleep", translation: "выспался / наверстал сон" },
                    { text: "ran a few errands", translation: "сделал несколько мелких дел / съездил по делам" },
                    { text: "recharge", translation: "перезарядиться / восстановить силы" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Hi Emily, it’s really cold out today." },
                    { speaker: "B", text: "It is. I walked in this morning and immediately regretted every life decision that brought me outside." },
                    { speaker: "A", text: "Same here. The wind made it feel even worse. It looked fine at first, and then the weather reminded me who is in charge." },
                    { speaker: "B", text: "That’s the trick. It looks harmless until you step outside, and then it feels personal." },
                    { speaker: "A", text: "Exactly. I thought a light jacket would be enough. That was a very confident and very wrong decision." },
                    { speaker: "B", text: "A classic winter mistake. The weather waits for that kind of confidence." },
                    { speaker: "A", text: "Lesson learned. Tomorrow I’m dressing like I’m preparing for an expedition." },
                    { speaker: "B", text: "That’s the right strategy. Around this time of year, survival is the goal." },
                    { speaker: "A", text: "By the way, did you get lunch yet, or are you waiting until later?" },
                    { speaker: "B", text: "Not yet. I’m thinking of grabbing something warm - probably soup or something like that." },
                    { speaker: "A", text: "That sounds like a good call for a day like this." }
                ],
                vocabulary: [
                    { text: "regretted every life decision", translation: "пожалел обо всех своих жизненных решениях" },
                    { text: "it feels personal", translation: "как будто это уже личное" },
                    { text: "a good call", translation: "хорошая идея / правильное решение" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Hey David, are you taking lunch now?" },
                    { speaker: "B", text: "Yeah, in a few minutes. I just want to send one last message before I step away. What about you?" },
                    { speaker: "A", text: "Same here. I was thinking of heating up my lunch, but now I’m considering ordering something instead." },
                    { speaker: "B", text: "That’s usually how it starts. You open the food app just to look, and five minutes later you’re fully committed." },
                    { speaker: "A", text: "Very true. Looking at the menu is dangerous. It becomes a whole project." },
                    { speaker: "B", text: "Exactly. And somehow you spend more time deciding on lunch than on some work meetings." },
                    { speaker: "A", text: "Honestly, some lunch decisions have more pressure than sprint planning." },
                    { speaker: "B", text: "I believe that. Especially when you’re hungry and everything sounds good." },
                    { speaker: "A", text: "Do you usually bring lunch or buy something nearby?" },
                    { speaker: "B", text: "A mix of both. I try to bring lunch during the week, but every now and then I give up and let the restaurants solve my problems." },
                    { speaker: "A", text: "Fair enough. Sometimes that is the most efficient solution." },
                    { speaker: "B", text: "Exactly. Not every problem needs a technical design document." },
                    { speaker: "A", text: "That should be our team lunch policy." }
                ],
                vocabulary: [
                    { text: "step away", translation: "ненадолго отойти" },
                    { text: "fully committed", translation: "уже полностью решился" },
                    { text: "a mix of both", translation: "и то, и другое / смесь обоих вариантов" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Introducing yourself professionally",
        description: "Natural and professional workplace conversations for introducing yourself, explaining your role, your team, what you are working on, and your background.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Hi everyone, I’m Rustem. I recently joined the team, so I wanted to take a moment to introduce myself." },
                    { speaker: "B", text: "Welcome, Rustem. Glad to have you here." },
                    { speaker: "A", text: "Thank you, I’m happy to be here. I’m working as a software engineer, and I’ll be supporting the team on backend and general application-related tasks." },
                    { speaker: "B", text: "That’s great. Which area will you be focused on first?" },
                    { speaker: "A", text: "Right now, I’m getting familiar with the codebase, development workflow, and current priorities. I’ll likely start by helping with remediation work, dependency-related updates, and some support tasks while I ramp up." },
                    { speaker: "B", text: "That sounds like a good way to get started." },
                    { speaker: "A", text: "Yes, I think so too. My background is mainly in Python, backend development, APIs, and web applications, but I’m comfortable learning new tools depending on what the team needs." },
                    { speaker: "B", text: "Nice. It sounds like your experience will fit well here." },
                    { speaker: "A", text: "I hope so. I’m looking forward to learning from the team and contributing where I can as quickly as possible." },
                    { speaker: "B", text: "You’ll be fine. Everyone here is very helpful, so feel free to reach out anytime." },
                    { speaker: "A", text: "I appreciate that. Thank you." }
                ],
                vocabulary: [
                    { text: "supporting the team", translation: "поддерживать команду / помогать команде" },
                    { text: "ramp up", translation: "войти в курс дела / быстро освоиться" },
                    { text: "contributing", translation: "вносить вклад" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Hi Sarah, I don’t think we’ve met yet. I’m Rustem." },
                    { speaker: "B", text: "Hi Rustem, nice to meet you. I’m Sarah." },
                    { speaker: "A", text: "Nice to meet you too. I recently joined the team, and I’m still getting to know everyone and learning how things are organized." },
                    { speaker: "B", text: "That makes sense. There’s definitely a lot to absorb at the beginning." },
                    { speaker: "A", text: "Yes, exactly. At the moment, I’m focused on understanding the services we own, the deployment process, and the types of issues the team handles most often." },
                    { speaker: "B", text: "That’s a good place to start. What kind of work were you doing before this role?" },
                    { speaker: "A", text: "Most of my experience has been in software development, especially backend work. I’ve worked with Python-based applications, APIs, databases, and some cloud-related tools as well." },
                    { speaker: "B", text: "That’s useful experience for this team." },
                    { speaker: "A", text: "I’m glad to hear that. I’m also trying to understand our internal process better - things like how tickets are managed, how changes move through review, and how releases are handled." },
                    { speaker: "B", text: "You’ll pick it up quickly. Once you go through a couple of tasks end to end, everything starts making more sense." },
                    { speaker: "A", text: "That’s what I’m hoping. I prefer learning by actually working through real tasks." },
                    { speaker: "B", text: "That’s usually the best way." }
                ],
                vocabulary: [
                    { text: "getting to know everyone", translation: "знакомлюсь со всеми" },
                    { text: "a lot to absorb", translation: "много всего нужно усвоить" },
                    { text: "end to end", translation: "от начала до конца" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Good afternoon, everyone. For those I haven’t met yet, my name is Rustem." },
                    { speaker: "B", text: "Welcome, Rustem." },
                    { speaker: "A", text: "Thank you. I joined recently as a software engineer, and I’ll be working with the team on development and remediation-related efforts." },
                    { speaker: "B", text: "Can you tell us a little about what you’ll be handling?" },
                    { speaker: "A", text: "Sure. From what I understand so far, I’ll be helping with tasks related to application maintenance, dependency upgrades, vulnerability remediation, and general engineering support depending on team priorities." },
                    { speaker: "B", text: "That covers a pretty broad range." },
                    { speaker: "A", text: "Yes, it does, which is actually something I like. I enjoy work that mixes investigation, implementation, and coordination with other people." },
                    { speaker: "B", text: "That’s helpful, especially in this environment." },
                    { speaker: "A", text: "My technical background is mainly in backend development and web applications. I’ve worked with Python, APIs, databases, and some DevOps-related tooling. I also like understanding how systems fit together, not just writing isolated pieces of code." },
                    { speaker: "B", text: "That systems mindset is definitely valuable." },
                    { speaker: "A", text: "I think so too. My goal right now is to learn the team’s architecture, understand the priorities, and become productive as quickly as possible without skipping the important details." },
                    { speaker: "B", text: "That’s a solid approach." },
                    { speaker: "A", text: "Thanks. I’m looking forward to working with everyone." }
                ],
                vocabulary: [
                    { text: "maintenance", translation: "поддержка / сопровождение" },
                    { text: "broad range", translation: "широкий диапазон / широкий круг" },
                    { text: "systems mindset", translation: "системное мышление" }
                ]
            }
        ]
    }
];

window.workplaceTopics = workplaceTopics;
