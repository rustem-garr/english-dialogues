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
    },
    {
        id: 4,
        title: "Daily standup / DSU updates",
        description: "Natural and professional workplace conversations for daily standups, including what you did yesterday, what you will do today, blockers, dependencies, and progress updates.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Good morning, everyone. Yesterday I continued working on the remediation task for the vulnerable containers." },
                    { speaker: "A", text: "I reviewed the scan results, identified the affected images, and started validating which dependency updates are needed." },
                    { speaker: "A", text: "I also did an initial round of testing to make sure the changes would not break existing functionality." },
                    { speaker: "B", text: "Okay, sounds good. What are you planning to do today?" },
                    { speaker: "A", text: "Today I’ll continue with the remediation work, complete the remaining updates, and run another round of regression testing." },
                    { speaker: "A", text: "If everything looks good, I’ll prepare the changes for review and share a summary with the team." },
                    { speaker: "B", text: "Any blockers at the moment?" },
                    { speaker: "A", text: "No hard blockers right now. The only dependency is that I may need confirmation from the other team if one of the shared images requires a coordinated change." },
                    { speaker: "B", text: "Got it. Please keep us posted if that becomes an issue." },
                    { speaker: "A", text: "Will do." }
                ],
                vocabulary: [
                    { text: "scan results", translation: "результаты сканирования" },
                    { text: "regression testing", translation: "регрессионное тестирование" },
                    { text: "hard blocker", translation: "серьезный блокер / критическое препятствие" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Yesterday I finished the initial investigation for the ticket and went through the related service logic to understand where the issue is happening." },
                    { speaker: "A", text: "I was able to reproduce the behavior locally, and after that I narrowed it down to one part of the request handling flow." },
                    { speaker: "A", text: "I also documented my findings so it will be easier to explain during review." },
                    { speaker: "B", text: "Nice progress. What’s next?" },
                    { speaker: "A", text: "Today I’m going to implement the fix, test it locally, and then verify that the expected behavior matches the ticket requirements." },
                    { speaker: "A", text: "If time allows, I’ll also open the PR today so the review can start early." },
                    { speaker: "B", text: "Any blockers or risks?" },
                    { speaker: "A", text: "No blockers at the moment. The only thing I want to double-check is whether the fix may affect one edge case, so I’ll validate that before I finalize the change." },
                    { speaker: "B", text: "Sounds reasonable." },
                    { speaker: "A", text: "Yes, overall it’s moving in the right direction." }
                ],
                vocabulary: [
                    { text: "narrowed it down", translation: "сузил до / определил более точно" },
                    { text: "request handling flow", translation: "поток обработки запроса" },
                    { text: "edge case", translation: "пограничный случай" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Yesterday I spent most of the day on the dependency upgrade task." },
                    { speaker: "A", text: "I updated the library version, reviewed the impacted files, and resolved a couple of compatibility issues in the service configuration." },
                    { speaker: "A", text: "After that, I ran local checks and the service came up successfully, so the change looks stable so far." },
                    { speaker: "B", text: "That’s good. What’s the plan for today?" },
                    { speaker: "A", text: "Today I want to complete the remaining validation, especially integration-related checks, and then prepare the branch for code review." },
                    { speaker: "A", text: "I also want to confirm whether any downstream consumers need to be notified before we merge." },
                    { speaker: "B", text: "Any blockers?" },
                    { speaker: "A", text: "At the moment, I’m waiting on one access-related item for a shared environment. It’s not blocking all progress, but it may slow down final validation if I don’t get it soon." },
                    { speaker: "B", text: "Okay, so partial blocker?" },
                    { speaker: "A", text: "Yes, I’d call it a soft blocker. I can still move forward with some tasks, but I may need help if the access is delayed much longer." }
                ],
                vocabulary: [
                    { text: "compatibility issues", translation: "проблемы совместимости" },
                    { text: "downstream consumers", translation: "зависимые downstream-сервисы / потребители" },
                    { text: "soft blocker", translation: "частичный блокер / некритичное препятствие" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Asking for clarification on tasks",
        description: "Natural and professional workplace conversations for clarifying task requirements, understanding scope, confirming expected behavior, and asking for acceptance criteria before starting work.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Hi Sarah, do you have a few minutes to go over the ticket with me?" },
                    { speaker: "B", text: "Sure, what would you like to clarify?" },
                    { speaker: "A", text: "I read through the description and comments, but I want to make sure I understand the requirement correctly before I start implementing anything." },
                    { speaker: "B", text: "Of course. Which part is unclear?" },
                    { speaker: "A", text: "The ticket mentions updating the behavior for failed requests, but I’m not fully sure whether we only need to change the user-facing message or if the response handling logic also needs to be adjusted on the backend." },
                    { speaker: "B", text: "Good question. It’s not only the message. We also need to update the backend handling so the response is consistent across those scenarios." },
                    { speaker: "A", text: "Got it. I wanted to confirm that because the current wording in the ticket made it sound more UI-focused." },
                    { speaker: "B", text: "Yeah, that could have been written more clearly." },
                    { speaker: "A", text: "Also, for scope - are we only addressing the specific failure case mentioned in the ticket, or should I review similar flows in the same service while I’m in there?" },
                    { speaker: "B", text: "For this ticket, let’s keep the change limited to the case that was reported. If you notice related issues, just mention them separately." },
                    { speaker: "A", text: "That makes sense. One more thing - do we already have acceptance criteria for this, or should I propose some based on the expected behavior?" },
                    { speaker: "B", text: "Please propose them. That would actually be helpful." },
                    { speaker: "A", text: "Perfect. I’ll put together a short summary of my understanding and share it before I begin implementation." }
                ],
                vocabulary: [
                    { text: "go over the ticket", translation: "пройтись по задаче / обсудить тикет" },
                    { text: "user-facing message", translation: "сообщение, видимое пользователю" },
                    { text: "limited to", translation: "ограничено / ограничиваться" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Hi Mike, I’m about to start working on this story, but I’d like to confirm the expected behavior first." },
                    { speaker: "B", text: "Sure, what are you thinking?" },
                    { speaker: "A", text: "From the description, it sounds like the service should retry the operation automatically when the downstream call times out." },
                    { speaker: "A", text: "What I’m not sure about is whether the retry should happen for all timeout cases or only for the specific endpoint mentioned in the ticket." },
                    { speaker: "B", text: "Only for that endpoint. We don’t want to apply the same logic globally without reviewing the impact." },
                    { speaker: "A", text: "Okay, that’s helpful. I was also wondering how many retries are expected. I didn’t see that documented anywhere." },
                    { speaker: "B", text: "For now, just one retry. If that still fails, the request should return the standard error response." },
                    { speaker: "A", text: "Understood. And in terms of logging, do you want the retry attempt to be visible in the logs for troubleshooting?" },
                    { speaker: "B", text: "Yes, definitely. That will make future investigation easier." },
                    { speaker: "A", text: "Makes sense. Last question - should I add test coverage for both the success-after-retry case and the failure-after-retry case?" },
                    { speaker: "B", text: "Yes, both. That would cover the acceptance criteria from my side." },
                    { speaker: "A", text: "Great. Thanks for clarifying. I’d rather ask now than build the wrong thing and have to circle back later." },
                    { speaker: "B", text: "Exactly. Better five minutes of questions than five hours of rework." }
                ],
                vocabulary: [
                    { text: "expected behavior", translation: "ожидаемое поведение" },
                    { text: "globally", translation: "глобально / повсюду" },
                    { text: "circle back", translation: "вернуться к вопросу позже" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Hey John, I’m reviewing the backlog item you assigned, and I want to align on scope before I pick it up." },
                    { speaker: "B", text: "Sure, let’s align. What’s unclear?" },
                    { speaker: "A", text: "The ticket says we need to improve the validation flow, but it does not clearly say whether that includes only backend validation or any frontend validation messages as well." },
                    { speaker: "B", text: "For this one, the main focus is backend validation. Frontend updates would be a separate task unless you find something critical." },
                    { speaker: "A", text: "Okay, that helps. I also noticed there’s no explicit mention of non-happy-path behavior. Should invalid input return the same error structure we already use elsewhere, or is a different response expected here?" },
                    { speaker: "B", text: "Use the existing error structure. We want consistency unless there’s a strong reason to change it." },
                    { speaker: "A", text: "Understood. I just didn’t want to assume and then accidentally introduce something inconsistent." },
                    { speaker: "B", text: "Fair point." },
                    { speaker: "A", text: "And regarding done criteria, would you consider this complete once the validation is implemented and tested locally, or do you also want a quick demo or screenshots attached to the ticket?" },
                    { speaker: "B", text: "Implementation, test evidence, and a short summary in the ticket should be enough." },
                    { speaker: "A", text: "Perfect. I’ll proceed with that approach." },
                    { speaker: "B", text: "Sounds good. Thanks for checking before jumping in." },
                    { speaker: "A", text: "No problem. Clear requirements save everybody time." }
                ],
                vocabulary: [
                    { text: "align on scope", translation: "согласовать объем задачи" },
                    { text: "non-happy-path behavior", translation: "поведение в нестандартных / ошибочных сценариях" },
                    { text: "test evidence", translation: "подтверждение тестирования / доказательства тестов" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Discussing Jira / tickets / backlog items",
        description: "Natural and professional workplace conversations for picking up tasks, discussing ticket status, asking about priority, explaining progress, and handling reassignment of backlog items.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Hi John, I was reviewing the backlog and noticed ticket TIS-142 is still unassigned. Is that one ready to be picked up?" },
                    { speaker: "B", text: "Yes, I think so. I was actually planning to bring it up in standup this morning." },
                    { speaker: "A", text: "Got it. I have some capacity after I finish my current task, so I wanted to check whether it makes sense for me to take it next." },
                    { speaker: "B", text: "That should be fine. It’s a valid next item, and it’s already been prioritized for this sprint." },
                    { speaker: "A", text: "Okay, good to know. Before I move it, I just want to confirm whether there are any dependencies or open questions that I should be aware of." },
                    { speaker: "B", text: "There’s one dependency on the config update from another team, but you can still start the investigation and most of the implementation before that lands." },
                    { speaker: "A", text: "That works. In that case, I’ll move it to In Progress once I wrap up my current ticket and leave a note in Jira so the status is clear." },
                    { speaker: "B", text: "Perfect. That would help with visibility." },
                    { speaker: "A", text: "Also, is this considered higher priority than the logging cleanup item, or should I finish that one first if both are open?" },
                    { speaker: "B", text: "This one is higher priority. The logging cleanup is useful, but this ticket has more direct impact." },
                    { speaker: "A", text: "Understood. I’ll treat this as the next priority, then." }
                ],
                vocabulary: [
                    { text: "pick it up", translation: "взять задачу в работу" },
                    { text: "wrap up", translation: "завершить / закончить" },
                    { text: "visibility", translation: "прозрачность / видимость для команды" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Hey Sarah, quick question about ticket TIS-158. I saw that it’s still in Ready, but I’ve already started working on it." },
                    { speaker: "B", text: "Oh, thanks for pointing that out. It probably just wasn’t updated after refinement." },
                    { speaker: "A", text: "No problem. I wanted to make sure I wasn’t missing anything before I move the status." },
                    { speaker: "B", text: "No, you’re good. If you’ve started the work, go ahead and move it to In Progress." },
                    { speaker: "A", text: "Okay. I’ve already completed the initial investigation and I’m now working through the implementation details." },
                    { speaker: "B", text: "Nice. How far along do you think you are?" },
                    { speaker: "A", text: "I’d say the investigation is done and the implementation is maybe halfway there. The main logic is clear, but I still need to validate a couple of edge cases before I’m comfortable opening a PR." },
                    { speaker: "B", text: "That sounds reasonable." },
                    { speaker: "A", text: "Once I update the status, I’ll also add a short Jira comment so it reflects the current progress and doesn’t look stale." },
                    { speaker: "B", text: "Yes, please do. That helps during planning and status review." },
                    { speaker: "A", text: "Will do. I just try to keep the ticket state aligned with reality. Jira gets creative if we leave it alone too long." },
                    { speaker: "B", text: "That’s true. Jira always tells a story - the question is whether it’s the right one." }
                ],
                vocabulary: [
                    { text: "ticket state aligned with reality", translation: "чтобы статус тикета соответствовал реальности" },
                    { text: "stale", translation: "устаревший / давно не обновлявшийся" },
                    { text: "edge cases", translation: "пограничные случаи" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Hi Mike, I wanted to ask about the backlog item you assigned to me last week." },
                    { speaker: "B", text: "Sure, what about it?" },
                    { speaker: "A", text: "I started looking into it, but after the production issue came up, I had to switch focus. I wanted to check whether you still want me to keep ownership of it or if it makes more sense to reassign it for now." },
                    { speaker: "B", text: "That’s a fair question. I know your focus shifted because of the incident work." },
                    { speaker: "A", text: "Yes, exactly. I don’t want the ticket to sit with me and create the impression that it’s actively moving if I can’t give it proper attention right now." },
                    { speaker: "B", text: "I appreciate that. Let’s do this - keep ownership for now, but move it back to Blocked and add a comment explaining why progress paused." },
                    { speaker: "A", text: "That works. I can do that. I’ve already done some initial analysis, so I’ll include that in the comment as well, in case someone else needs to pick it up later." },
                    { speaker: "B", text: "Good idea. That way the work isn’t lost." },
                    { speaker: "A", text: "And once the production issue settles down, I can come back to it unless priorities change." },
                    { speaker: "B", text: "Exactly. We’ll reassess in the next planning discussion." },
                    { speaker: "A", text: "Perfect. I’ll update the ticket accordingly." }
                ],
                vocabulary: [
                    { text: "keep ownership", translation: "сохранить ответственность за задачу" },
                    { text: "paused", translation: "приостановлен / поставлен на паузу" },
                    { text: "reassess", translation: "пересмотреть / заново оценить" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Talking about blockers",
        description: "Natural and professional workplace conversations for explaining blockers such as access issues, approvals, dependencies, unclear requirements, environment problems, and deployment issues.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Hi John, I wanted to give you a quick update on the task. I’ve made progress on the implementation, but I’m currently blocked on access to the shared test environment." },
                    { speaker: "B", text: "Okay, what exactly are you missing?" },
                    { speaker: "A", text: "I can complete the code changes locally, but I can’t run the final validation in the environment because I still don’t have the required permissions." },
                    { speaker: "B", text: "Did you already submit the access request?" },
                    { speaker: "A", text: "Yes, I submitted it yesterday and followed up this morning. At this point I’m waiting for approval from the platform team." },
                    { speaker: "B", text: "Got it. Is it blocking all progress or just the final part?" },
                    { speaker: "A", text: "Mostly the final part. I can still continue with local testing and clean up the branch, but I won’t be able to fully verify the change until the access comes through." },
                    { speaker: "B", text: "That makes sense. Please keep the ticket updated so it’s clear why it’s not moving to review yet." },
                    { speaker: "A", text: "Will do. I’ll add a note that the implementation is in good shape and the remaining blocker is environment access." },
                    { speaker: "B", text: "Perfect. If the approval is delayed, let me know and I can help escalate." },
                    { speaker: "A", text: "I appreciate that. I’ll monitor it today and reach out if it stays stuck." }
                ],
                vocabulary: [
                    { text: "shared test environment", translation: "общая тестовая среда" },
                    { text: "required permissions", translation: "необходимые разрешения / права доступа" },
                    { text: "help escalate", translation: "помочь с эскалацией" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Hey Sarah, just to flag it early, I’ve hit a blocker on the ticket." },
                    { speaker: "B", text: "Thanks for mentioning it. What’s the issue?" },
                    { speaker: "A", text: "The requirements are still a bit unclear, especially around the expected behavior for invalid input. I reviewed the ticket and comments, but there’s not enough detail for me to implement it confidently." },
                    { speaker: "B", text: "Is the uncertainty mostly around validation rules or the response we return?" },
                    { speaker: "A", text: "Both, actually. I can make assumptions, but I’d rather not do that and risk building the wrong behavior." },
                    { speaker: "B", text: "That’s fair. Did you already reach out to the product owner?" },
                    { speaker: "A", text: "Not yet. I wanted to sync with you first to make sure I wasn’t missing any existing documentation or prior discussion." },
                    { speaker: "B", text: "No, I think you’re right. The ticket is too vague as it stands." },
                    { speaker: "A", text: "Okay, that helps. In that case, I’ll leave a comment with the open questions and ask for clarification before I move further." },
                    { speaker: "B", text: "Yes, that’s the right move." },
                    { speaker: "A", text: "Until then, I can still work on related cleanup tasks, so I won’t be completely idle." },
                    { speaker: "B", text: "Good approach. That keeps things moving without guessing." }
                ],
                vocabulary: [
                    { text: "flag it early", translation: "заранее сообщить / поднять вопрос заранее" },
                    { text: "too vague", translation: "слишком расплывчато / неясно" },
                    { text: "open questions", translation: "открытые вопросы" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Hi Mike, I wanted to mention a blocker on my side related to deployment." },
                    { speaker: "B", text: "Sure, what happened?" },
                    { speaker: "A", text: "The code changes are ready, and local testing looks good, but I’m unable to move forward because the pipeline is currently failing before it reaches the deployment stage." },
                    { speaker: "B", text: "Is the failure related to your changes?" },
                    { speaker: "A", text: "From what I can tell, no. The failure seems to be coming from a pre-existing issue in the CI process. I reran it to confirm, and the error is the same." },
                    { speaker: "B", text: "Okay, so it’s more of an infrastructure or pipeline problem." },
                    { speaker: "A", text: "Exactly. I’ve reviewed the logs, and nothing points directly to my branch. At this point, I’m blocked from getting a clean build even though the task itself is ready for the next step." },
                    { speaker: "B", text: "Did you post the error details anywhere?" },
                    { speaker: "A", text: "Yes, I shared the failure summary in the team channel and added a note to the ticket so the status is visible." },
                    { speaker: "B", text: "Good. While that’s being investigated, is there anything else you can move forward on?" },
                    { speaker: "A", text: "I can still prepare the PR notes, clean up the documentation, and double-check test coverage. But the actual deployment path is blocked until the pipeline issue is resolved." },
                    { speaker: "B", text: "Understood. Thanks for surfacing it quickly." },
                    { speaker: "A", text: "Of course. Better to raise it early than let the ticket look mysteriously stuck." }
                ],
                vocabulary: [
                    { text: "pre-existing issue", translation: "уже существующая проблема" },
                    { text: "clean build", translation: "успешная сборка без ошибок" },
                    { text: "surfacing it quickly", translation: "быстро вынести проблему на поверхность / быстро сообщить" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Asking technical questions professionally",
        description: "Natural and professional workplace conversations for asking technical questions about service behavior, implementation details, branches, testing, and bug reproduction.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Hi Sarah, do you have a few minutes for a technical question about this service?" },
                    { speaker: "B", text: "Sure, what are you trying to understand?" },
                    { speaker: "A", text: "I’m tracing the request flow, and I want to confirm where the main business logic actually lives." },
                    { speaker: "A", text: "At first glance, it looks like the controller is pretty thin, but I’m not fully sure whether the validation and transformation happen in the service layer or inside the downstream client." },
                    { speaker: "B", text: "Most of the business logic is in the service layer. The controller mainly handles the request and response mapping." },
                    { speaker: "A", text: "That helps. I noticed a couple of helper classes too, so I wasn’t sure whether some of that behavior had been split out over time." },
                    { speaker: "B", text: "Yes, some of it has. The validation is in the service, but the payload transformation is partly handled by those helpers." },
                    { speaker: "A", text: "Got it. I just wanted to make sure I was looking in the right place before spending too much time digging through the wrong path." },
                    { speaker: "B", text: "That makes sense. The codebase has a few historical layers, so the first read can be a little misleading." },
                    { speaker: "A", text: "I figured that might be the case. Thanks for confirming - now I know where to focus." }
                ],
                vocabulary: [
                    { text: "trace the request flow", translation: "проследить поток запроса" },
                    { text: "service layer", translation: "слой сервиса / сервисный слой" },
                    { text: "historical layers", translation: "исторически сложившиеся слои / старые архитектурные наслоения" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "Hey Mike, quick question before I start testing this change. Which branch should I be using as the base?" },
                    { speaker: "B", text: "For this one, use the release branch. We’re trying to keep the fix isolated from the other in-progress work." },
                    { speaker: "A", text: "Okay, that’s what I suspected, but I wanted to confirm before I branch off the wrong target and create extra cleanup later." },
                    { speaker: "B", text: "Good call. If you use develop here, you’ll pull in changes that are unrelated to the fix." },
                    { speaker: "A", text: "Understood. And once the change is ready, do you want me to open the PR directly against the release branch as well?" },
                    { speaker: "B", text: "Yes, exactly. Keep the whole path consistent." },
                    { speaker: "A", text: "Makes sense. Also, for testing - should I validate only the reported issue, or do you want broader regression coverage around the same flow?" },
                    { speaker: "B", text: "Please do both. Confirm the specific fix, but also test the nearby scenarios so we don’t accidentally break something related." },
                    { speaker: "A", text: "Got it. I’ll keep the branch targeted, and I’ll make sure the testing covers both the main case and the adjacent flows." },
                    { speaker: "B", text: "Perfect. That’s the safest approach." }
                ],
                vocabulary: [
                    { text: "branch off", translation: "ответвиться / создать ветку от" },
                    { text: "target", translation: "целевая ветка / цель" },
                    { text: "adjacent flows", translation: "смежные сценарии / соседние потоки" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Hi John, I’m trying to reproduce the bug from the ticket, but I want to make sure I’m using the right setup." },
                    { speaker: "B", text: "What part is unclear?" },
                    { speaker: "A", text: "The ticket says the issue happens when the downstream service returns an unexpected response, but it doesn’t say whether that was observed in dev, test, or production." },
                    { speaker: "A", text: "I can simulate part of it locally, but I’m not sure if that will match the real conditions closely enough." },
                    { speaker: "B", text: "The original issue was seen in test, not production. The payload was slightly different from what we usually expect." },
                    { speaker: "A", text: "That explains why I wasn’t seeing the same behavior locally with the default sample data." },
                    { speaker: "B", text: "Yes, the bug is tied to a specific response shape." },
                    { speaker: "A", text: "Do we already have an example payload or logs I can use to reproduce it more accurately?" },
                    { speaker: "B", text: "There should be a log snippet attached in the incident thread. I can send it to you." },
                    { speaker: "A", text: "That would be great. Once I have that, I can reproduce the case properly and verify the fix with more confidence." },
                    { speaker: "B", text: "I’ll send it over in a minute." },
                    { speaker: "A", text: "Perfect. Thank you. I’d rather reproduce the real issue than solve an imaginary one and call it progress." }
                ],
                vocabulary: [
                    { text: "real conditions", translation: "реальные условия" },
                    { text: "response shape", translation: "структура ответа" },
                    { text: "log snippet", translation: "фрагмент лога" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Explaining your technical work",
        description: "Natural and professional workplace conversations for explaining bug fixes, feature development, refactoring, dependency upgrades, remediation work, API changes, and database updates.",
        examples: [
            {
                id: 1,
                dialogue: [
                    { speaker: "A", text: "Hi team, I wanted to give a quick overview of the bug fix I completed." },
                    { speaker: "B", text: "Sure, go ahead." },
                    { speaker: "A", text: "The issue was happening because the service was not handling one of the downstream error responses correctly." },
                    { speaker: "A", text: "In the current flow, that response was being treated like a valid payload, which caused the application to continue with incomplete data and eventually fail later in the process." },
                    { speaker: "B", text: "So the actual problem was not at the point of failure, but earlier in the request flow?" },
                    { speaker: "A", text: "Exactly. The visible failure happened later, but the root cause was the missing validation when the downstream response first came back." },
                    { speaker: "A", text: "I updated the handling logic so we now validate that response earlier, and if the data is not in the expected format, we return a controlled error instead of letting the request continue in a bad state." },
                    { speaker: "B", text: "That makes sense. Did the fix require any API changes?" },
                    { speaker: "A", text: "No external API contract changes. The behavior is improved internally, but from the caller’s perspective the interface stays the same." },
                    { speaker: "B", text: "Nice. What did you do for testing?" },
                    { speaker: "A", text: "I reproduced the issue locally, verified the fix for the failing case, and also tested the normal success path to make sure the change did not introduce side effects." },
                    { speaker: "B", text: "Sounds solid." },
                    { speaker: "A", text: "Yes, I tried to keep the fix targeted. No heroics, just removing the landmine." }
                ],
                vocabulary: [
                    { text: "root cause", translation: "корневая причина" },
                    { text: "controlled error", translation: "контролируемая ошибка / управляемый ответ с ошибкой" },
                    { text: "side effects", translation: "побочные эффекты" }
                ]
            },
            {
                id: 2,
                dialogue: [
                    { speaker: "A", text: "I can walk you through the dependency upgrade work if that would be helpful." },
                    { speaker: "B", text: "Yes, please. What changed?" },
                    { speaker: "A", text: "The main goal was to upgrade a vulnerable library version that had been flagged in the scan results." },
                    { speaker: "A", text: "At first, it looked like a simple version bump, but once I made the update, I found a couple of compatibility issues in how the service was initializing one of the components." },
                    { speaker: "B", text: "Was that due to breaking changes in the new version?" },
                    { speaker: "A", text: "Yes, mostly. A few methods were still available, but the expected behavior had changed enough that our existing configuration was no longer safe to keep as-is." },
                    { speaker: "B", text: "So what did you end up changing besides the version?" },
                    { speaker: "A", text: "I updated the dependency, adjusted the related configuration, and cleaned up one small section of code that was relying on the old behavior." },
                    { speaker: "A", text: "I also reviewed the startup logs and ran local validation to make sure the service still boots cleanly and behaves as expected." },
                    { speaker: "B", text: "Did you have to refactor much?" },
                    { speaker: "A", text: "Not a full refactor, but I did make a few small changes to keep the code aligned with the newer library usage pattern." },
                    { speaker: "B", text: "That sounds good. It’s better to make those adjustments now than carry technical debt forward." },
                    { speaker: "A", text: "Exactly. If we ignore those details during an upgrade, the code smiles during build time and complains in production." }
                ],
                vocabulary: [
                    { text: "version bump", translation: "повышение версии / обновление версии" },
                    { text: "breaking changes", translation: "ломающие изменения / несовместимые изменения" },
                    { text: "technical debt", translation: "технический долг" }
                ]
            },
            {
                id: 3,
                dialogue: [
                    { speaker: "A", text: "Let me summarize the work I’ve been doing on this feature." },
                    { speaker: "B", text: "Sure." },
                    { speaker: "A", text: "The feature required changes in three places: the API layer, part of the service logic, and the database mapping." },
                    { speaker: "A", text: "On the API side, I added support for the new request field and updated the validation so the input is checked before it reaches the main business flow." },
                    { speaker: "A", text: "In the service layer, I added the logic needed to process that field and make sure it is included in the decision path where appropriate." },
                    { speaker: "B", text: "And what about the database side?" },
                    { speaker: "A", text: "There was a small schema-related update needed so the value could be stored and retrieved consistently. I also updated the mapping code so the data flow stays aligned end to end." },
                    { speaker: "B", text: "Was the change isolated, or does it affect any existing clients?" },
                    { speaker: "A", text: "It should be backward compatible. Existing clients can continue sending the same payload as before, and the new field is optional." },
                    { speaker: "B", text: "That’s good. Did you have to touch any older code while doing this?" },
                    { speaker: "A", text: "Yes, a little. I cleaned up one section while I was there because the original code was doing too much in one method, so I split it into smaller pieces to make the logic easier to follow and test." },
                    { speaker: "B", text: "So part feature work, part refactoring?" },
                    { speaker: "A", text: "Exactly. I tried not to overdo it, but if I’m already in the kitchen, I at least want to stop the stove from smoking." }
                ],
                vocabulary: [
                    { text: "backward compatible", translation: "обратно совместимый" },
                    { text: "schema-related update", translation: "обновление, связанное со схемой" },
                    { text: "data flow", translation: "поток данных" }
                ]
            }
        ]
    },
];

window.workplaceTopics = workplaceTopics;
